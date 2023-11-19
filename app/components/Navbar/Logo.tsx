'use client' ;

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        // <Image
        // onClick={() => router.push('/')}
        // alt='Logo'
        // className="hidden md:block cursor-pointer"
        // height='100'
        // width='100'
        // src='/images/'
        // />
        
        <div onClick={() => router.push('/')} className="text-lg 
                    font-mono
                    italic
                    px-0                   
                    cursor-pointer
                    text-cyan-800" >TRAVEL-BUDDY</div>
    
        );
}

export default Logo;