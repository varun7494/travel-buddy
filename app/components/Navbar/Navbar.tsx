


import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";


interface NavbarProps {
    currentUser?: SafeUser | null;
    }
    
const Navbar: React.FC<NavbarProps> = ({
        currentUser,
    }) => {
        
    return ( 
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className="py=4 border-b-[0px]">
                <Container >
                    <div className="flex 
                        flex-row 
                        items-center 
                        justify-between
                        gap-4 md:gap-0">
                    <Logo />
                    {/* <div className="text-lg 
                    font-mono
                    italic
                    px-0                   
                    cursor-pointer
                    text-cyan-800" ></div> */}
                    
                    <Search />
                    <UserMenu  currentUser={currentUser}/>

                    </div>
                </Container>

            </div>
            <Categories/>
            </div>
    );
}

export default Navbar;