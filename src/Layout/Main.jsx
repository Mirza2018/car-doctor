
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Nabber from '../Pages/Shared/Nabber/Nabber';

const Main = () => {
    return (
        <div>
            <Nabber></Nabber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;