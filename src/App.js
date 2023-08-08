import { NavBar } from "./Components/NavBar/NavBar";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { SideBar } from "./Components/SideBar/SideBar";
import { SignIn } from "./Pages/SignIn/SignIn";
import { SignUp } from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
    <NavBar/>
    {/* <NavBar/>
    <SearchBar/>
    <SideBar/> */}
    <SignIn/>
    {/* <SignUp/> */}
    </div>
  );
}

export default App;
