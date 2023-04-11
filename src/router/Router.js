import {Routes, Route} from 'react-router-dom'
import Home from '../page/User/Home';
import Shop from '../page/User/Shop'
import Blogs from '../page/User/Blogs';
import Contact from '../page/User/Contact';


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    );
}

export default Router