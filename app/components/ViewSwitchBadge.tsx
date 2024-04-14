'use client'


import React from "react";
import { BsFillMapFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const ViewSwitchBadge = () => {
    const router = useRouter();

    return (
        <div  className="fixed flex justify-center items-center bottom-16 left-0 right-0 cursor-pointer">
        <div className="bg-black p-4 text-white rounded-full" >
        <span className="flex items-center gap-2 text-sm">
            
            <>
            Show Map<BsFillMapFill/>
            </>
            
        </span>
        </div>
        </div> );
}

export default ViewSwitchBadge;