import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from 'react-router';

const Layout = () => {
    return ( 
        <>
            <Header></Header>
                <div className="container-fluid">
                    <Outlet></Outlet>
                </div>
            <Footer></Footer>
        </>
     );
}
 
export default Layout;