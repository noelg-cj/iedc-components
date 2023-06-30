import React from "react";
import Slider from "../Slider2";

export default function Faculty() {
    const faculty = [{
        img: "",
        name: "Dr. Savier J S",
        role: "Principal",
        email: "principal@cet.ac.in",
        number: "+91 0000000000"
    },
    {
        img: "",
        name: "Dr. Gijoy S",
        role: "Faculty Advisor",
        email: "email@email.com",
        number: "+91 9496330263",
    }, 
    {
        img: "",
        name: "Dr. Raju C", 
        role: "Nodal Officer",
        email: "noiedc@cet.ac.in",
        number: "+91 0000000000"
    } ]

    return ( 
        <div className = "w-3/4 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-2 text-4xl font-bold text-white" > Faculty </h>
        <Slider data = { faculty }/>
        </div >
    );
}