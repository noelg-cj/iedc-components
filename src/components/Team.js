import React from "react";
import Slider from "../Slider2";

export default function Team() {
    const team = [{
        image: "",
        name: "Rizvan M S",
        role: "Chief Executive Officer",
        email: "ceoiedc@cet.ac.in",
        number: "+91 7909290803"
    },
    {
        image: "",
        name: "Arya S Jayasree",
        role: "Chief Financial Officer",
        email: "cfoiedc@cet.ac.in",
        number: "+91 6235741611",
    }, 
    {
        image: "",
        name: "Christo Stanly", 
        role: "Chief Operating Officer",
        email: "cooiedc@cet.ac.in",
        number: "+91 9747104733"
    },
    {
        image: "",
        name: "Shoen Varghese Joby", 
        role: "Chief Operating Officer",
        email: "cooiedc@cet.ac.in",
        number: "+91 8111897544"
    },
    {
        image: "",
        name: "Akhil Hayash M", 
        role: "Chief Creative Officer",
        email: "ccoiedc@cet.ac.in",
        number: "+91 7994764846"
    },
    {
        image: "",
        name: "Yena Sunil Kumar", 
        role: "Chief Technical Officer",
        email: "cooiedc@cet.ac.in",
        number: "+91 7025247468"
    },
    {
        image: "",
        name: "Sidharth Nair", 
        role: "Chief Marketing Officer",
        email: "cmoiedc@cet.ac.in",
        number: "+91 9061354702"
    },
    {
        image: "",
        name: "Gautam Lakshman", 
        role: "Chief Marketing Officer",
        email: "cmoiedc@cet.ac.in",
        number: "+91 8714438004"
    },
    {
        image: "",
        name: "Sarang T K", 
        role: "Chief Community Officer",
        email: "ccoiedc@cet.ac.in",
        number: "+91 7025140214"
    },
    {
        image: "",
        name: "Navaneeth P A", 
        role: "Chief Community Officer",
        email: "ccoiedc@cet.ac.in",
        number: "+91 8129196507"
    },
    {
        image: "",
        name: "Aswin U M", 
        role: "Chief Social Media Officer",
        email: "iedc@cet.ac.in",
        number: "+91 0000000000"
    },
    {
        image: "",
        name: "Melijo Jose", 
        role: "Chief Social Media Officer",
        email: "iedc@cet.ac.in",
        number: "+91 8075081397"
    },
    {
        image: "",
        name: "Diliya Mol Sebastian", 
        role: "Public Relations Officer",
        email: "proiedc@cet.ac.in",
        number: "+91 8156911365"
    },
    {
        image: "",
        name: "Treasa Mariya", 
        role: "Public Relations Officer",
        email: "proiedc@cet.ac.in",
        number: "+91 9400843439"
    },
    {
        image: "",
        name: "Alan Aji", 
        role: "Program Officer",
        email: "poiedc@cet.ac.in",
        number: "+91 8289965095"
    },
    {
        image: "",
        name: "Mohammed Fasil", 
        role: "Program Officer",
        email: "poiedc@cet.ac.in",
        number: "+91 9605953690"
    },
    {
        image: "",
        name: "Bharath Krishna", 
        role: "Program Officer",
        email: "poiedc@cet.ac.in",
        number: "+91 9847882852"
    },
    {
        image: "",
        name: "Varsha Nandakumar", 
        role: "Programme Officer",
        email: "proiedc@cet.ac.in",
        number: "+91 8281763544"
    },
    {
        image: "",
        name: "Rishi Prasad", 
        role: "Content Creator",
        email: "cciedc@cet.ac.in",
        number: "+91 8281180107"
    },
    {
        image: "",
        name: "Sreerekha", 
        role: "Women Entrepreneurship Lead",
        email: "iedc@cet.ac.in",
        number: "+91 6235687850"
    },
    {
        image: "",
        name: "Rigzin Dolma", 
        role: "Non Keralite Lead",
        email: "iedc@cet.ac.in",
        number: "+91 6005580500"
    },
    {
        image: "",
        name: "Nived Narayanan", 
        role: "Web Master",
        email: "nivednarayanan67@gmail.com",
        number: "+91 9447300552"
    } 
]

    return ( 
        <div className = "w-3/4 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-2 text-4xl font-bold text-white" > Team </h>
        <Slider data = { team }/>
        </div >
    );
}