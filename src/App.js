import { NavBar } from "./Components/NavBar/NavBar";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { SideBar } from "./Components/SideBar/SideBar";
import { ItemList } from "./Pages/ItemList/ItemList";
import { SignIn } from "./Pages/SignIn/SignIn";
import { SignUp } from "./Pages/SignUp/SignUp";
import { CustomUserContext } from "./userAuthenticationContext";

function App() {
  return (
    <>
      <CustomUserContext>
        <div className="App">
          {/* <NavBar />
      <SearchBar />
      <SideBar />
      <ItemList/> */}
          <SignIn/>
          {/* <SignUp/> */}
        </div>
      </CustomUserContext>
    </>
  );
}

export default App;
