import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct'><button>Add products</button></Link>
      <Link to='/listproduct'><button>Product list</button></Link>
    </div>
  );
};

export default Sidebar;
