import {Routes, Route} from 'react-router-dom'
import Home from '../page/User/Home';
import About from '../page/User/About'


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
    );
}

export default Router