import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { NavBar } from "./Components/NavBar/NavBar";
import { SignIn } from "./Pages/SignIn/SignIn";
import { SignUp } from "./Pages/SignUp/SignUp";
import { CustomUserContext } from "./userAuthenticationContext";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./Pages/Home/Home";
import { Cart } from "./Pages/Cart/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<NavBar/>,
      children:[
        {index:true,element:<Home/>},
        {path:'/users/sign-up',element:<SignUp/>},
        {path:'/users/sign-in',element:<SignIn/>},
        {path:'/users/cart',element:<Cart/>}
      ]
    }
  ]);
  return (
    <>
      <CustomUserContext>
        <div className="App">
          <ToastContainer />
          <RouterProvider router={router} />
        </div>
      </CustomUserContext>
    </>
  );
}

export default App;
