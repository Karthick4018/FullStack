const express = require('express');
require('dotenv').config();
const port = process.env.PORT||4000;
const database_url=process.env.MONGODB_URI;
const app=express();
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const multer=require('multer');
const path = require('path');
const cors=require('cors');
app.use(express.json());
app.use(cors());
mongoose.connect(database_url);
app.get('/',(req,res)=>{
    res.send('hello karthik')
})
const storage=multer.diskStorage({
    destination:function (req,file,callback) {
        callback(null,'./uploads/images')
      },
      filename:function(req,file,callback){
        callback(null,`${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
      }
})
const upload=multer({storage:storage});
app.use('/images',express.static('uploads/images'))
app.post('/uploads',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`${req.protocol}://${req.get('host')}:${port}/images/${req.file.filename}`,
        message:'successfully done'
    })
    console.log('image uploaded');
})

const products=mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async (req,res)=>{
    let prod = await products.find({});
    let id;
    if(prod.length>0){
        let last_product_array=prod.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;
    }
    const product= new products({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    });
    console.log(product);
    await product.save();
    console.log('saved');
    res.json({
        message:'successfully saved',
        name:req.body.name,
    });
})
app.post('/removeproduct', async (req,res)=>{
    await products.findOneAndDelete({id:req.body.id});
    console.log('successfully removed');
    res.json({
        message:'removed',
        name:req.body.name,
    })
})

// const circularSafeStringify = (obj) => {
//     const seen = new WeakSet();
//     return JSON.stringify(obj, (key, value) => {
//       if (typeof value === 'object' && value !== null) {
//         if (seen.has(value)) {
//           return; // Handle circular reference
//         }
//         seen.add(value);
//       }
//       return value;
//     });
//   };
  
//   const jsonString = circularSafeStringify(yourObject);
  
const Users= mongoose.model('Users',{
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartdata:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now()
    },
})
app.post('/signup', async(req,res)=>{
    let checkuser= await Users.findOne({email:req.body.email})
    if(checkuser){
       return  res.status(400).json({
        success:false,
        error:`User already exists with this ${req.body.email} email address`
    })
    }
    else{
    let cart={}
    for (let index = 0; index < 300; index++) {
        cart[index]=0
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartdata:cart,
    })
    await user.save();
    const data={
        user:{
            id:user._id
        }
    }
    const token = jwt.sign(data,'secret_tok')
    res.json({
        success:true,
        token,
        message:'successfully done'
    })
}
})
app.post('/login',async (req,res)=>{
    let user =await Users.findOne({email:req.body.email})
    if(user){
        const comparepassword= req.body.password===user.password;
        if(comparepassword){
            const data={
                user:{
                    id:user._id
                }
            }
            const token=jwt.sign(data,'secret_tok')
            res.json({
                success:true,
                token,
                message:`Welcome ${user.name} successfully logged in`,
                name:`${user.name}`
            })
        }
        else{
            res.json({
                success:false,
                message:'wrong password',
            })
        }
    }
    else{
        res.json({
            success:false,
            message:`user does not exist with this ${req.body.email} email id`,
        })
    }
})


app.get('/allproducts', async (req,res)=>{
    let allproducts= await products.find({});
    console.log('fetched')
    res.send(allproducts);
})
app.get('/newcollections',async (req,res)=>{
    let newcollections=await products.find({});
    let newcollection_products= newcollections.slice(1).slice(-8);
    console.log('Newcollections fetched');
    res.send(newcollection_products);
})
app.get('/popular',async(req,res)=>{
    let popular = await products.find({category:"women"});
    let populardata = popular.slice(0,4);
    console.log('popular fetched');
    res.send(populardata);
})

const fetchuser = async (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({message:"invalid token"})
    }
    else{
        try{
            const data = jwt.verify(token,'secret_tok');
            req.user=data.user;
            next()
        }catch(error){
            res.status(401).send({message:'invalid token'});

        }
    }

}
app.post('/addtocart',fetchuser, async (req,res)=>{
    let userdata=await Users.findOne({_id:req.user.id});
    userdata.cartdata[req.body.itemid]+= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartdata:userdata.cartdata})
    res.json({message:'added'})
    console.log('added',req.body.itemid);
})
app.post('/removecart',fetchuser,async (req,res)=>{
    let userdata= await Users.findOne({_id:req.user.id});
    if(userdata.cartdata[req.body.itemid]>0){
        userdata.cartdata[req.body.itemid]-=1;
        await Users.findOneAndUpdate({_id:req.user.id},{cartdata:userdata.cartdata})
        res.json({message:'removed'});
        console.log('removed',req.body.itemid);
    }
    else{
        res.status(401).send('error');
    }
    console.log(req.body.itemid,req.user.id);

})
app.post('/getcart',fetchuser,async(req,res)=>{
    console.log('cart data of user');
    const user =await Users.findOne({_id:req.user.id});
    res.json(user.cartdata);
})
app.post('/getdetails',fetchuser,async(req,res)=>{
    const user=await Users.findOne({_id:req.user.id});
    res.json(user.name);
})

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})