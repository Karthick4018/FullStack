import Addproducts from "../../Components/Addproducts/Addproducts"
import Sidebar from "../../Components/SideBar/Sidebar"
import { Routes,Route } from "react-router-dom"
import Listproduct from "../../Components/listproducts/Listproduct"
import './css/admin.css'
const Admin = () => {
  return (
    <div className="admin">
        <Sidebar/>
        <Routes>
            <Route path='/addproduct' element={<Addproducts/>}/>
            <Route path='/listproduct' element={<Listproduct/>}/>
        </Routes>
    </div>
  )
}

export default Admin