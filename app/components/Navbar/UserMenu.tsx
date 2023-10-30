'use client';

import { GiHamburgerMenu } from "react-icons/gi";
import Avatar from "../Avatar";
import {useCallback, useState} from 'react';
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
    }, []);


    return (  
        <div className="relative">
        <div className="flex flex-row items-center gap-3">
        <div 
        onClick={() => {}}
        className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer">
            Home
        </div>
        <div 
        onClick={toggleOpen}
        className="
        p-4
        md:py-1
        md:px-2
        border-[1px] 
        border-neutral-200 
        flex 
        flex-row 
        items-center 
        gap-3 
        rounded-full 
        cursor-pointer 
        hover:shadow-md 
        transition"
        >
            <GiHamburgerMenu />
            <div className="hidden md:block">
            <Avatar src={currentUser?.image}/>
            </div>
        </div>
        </div>
        
        {isOpen && (
        <div 
            className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
            "
        >
            <div className="flex flex-col cursor-pointer">
            {currentUser ? (
                <>
                <MenuItem 
                label="Trips" 
                onClick={() => {}}
                />
                <MenuItem 
                label="Favorites" 
                onClick={() => {}}
                />
                <MenuItem 
                label="Reservations" 
                onClick={() => {}}
                />
                <MenuItem 
                label="Properties" 
                onClick={() => {}}
                />
                <MenuItem 
                label="Home" 
                onClick={() => {}}
                />
                <hr />
                <MenuItem 
                label="Logout" 
                onClick={() => signOut()}
                />
                </>
            ):(
                <>
                <MenuItem 
                    label="Login" 
                    onClick={loginModal.onOpen}
                />
                <MenuItem 
                    label="Sign up" 
                    onClick={registerModal.onOpen}
                />
                
                </>
            )}
            </div>
        
        </div>
        )}
        </div>
        
        
    );
}

export default UserMenu;