"use client"
import Image from "next/image";
import "./globals.css"
import { useState, useEffect } from "react";

export default function Home() {
  const [textBox, setTextBox] = useState("")
  useEffect( ()=>{

    const btn = document.querySelector("#button-element")
    console.log(btn)
  },[])

  const fetchContent = () =>{
    
  }
  return (
    <>
    <div>
      <h1 className="px-4 text-blue-600 text-4xl">PricePal</h1>
      <p className="w-64 px-4">find tha best prices of products here. our mission is to make your life easier</p>
      <input className="ml-64 w-96 h-10 px-4 border-2 border-semi-transparent rounded-lg" type="search
       "placeholder="what are you looking for?" onChange={(e) => setTextBox(e.target.value)} />
      <button id="button-element" className="border-2 border-gray-700 rounded-lg ml-2 w-16 bg-gray-600 text-white" 
      onClick={() =>console.log("the user clicked me what you gonna do about it")}>send</button>
      <p>{textBox}</p>
    </div>
    </>
  );
}