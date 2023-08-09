import { SearchBar } from "../../Components/SearchBar/SearchBar"
import { SideBar } from "../../Components/SideBar/SideBar"
import { ItemList } from "../ItemList/ItemList"

export const Home = ()=>{
    return(
        <>
             <SearchBar/>
             <SideBar/>
             <ItemList/>
        </>
    )
}