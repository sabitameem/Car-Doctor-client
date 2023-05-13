import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import NavBar from "../shared/Navbar";

const Main = () => {
  return (
    <div className="ml-6 me-6">
     <div className="mb-10">
     <NavBar></NavBar>
     </div>
      
        <Outlet></Outlet>
     
     <div className="mt-10">
     <Footer></Footer>
     </div>
    </div>
  );
};

export default Main;
