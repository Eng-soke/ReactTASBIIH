import { useState } from "react"
function Header(){
    const [isOpen, setIsOpen]= useState(false)

    const openMenu = ()=>{
        setIsOpen(true)
    }

    const closeMenu = ()=>{
        setIsOpen(false)
    }


    return <div className="bg-lime-500  sm:flex justify-between sm:text-center p-8" >
        <h1 className="text-5xl">TechBook</h1>
        <ul style={{display: isOpen == true ? "block" : ""}} className=" sm:flex flex-col sm:gap-10 gap-[55px] pt-10 sm:pt-0 sm:flex-row text-2xl hidden ">
            <li>Home</li>
            <li>Services</li>
            <li>Abou Us</li>
            <li>Contact Us</li>
        </ul>
        <button style={{display: isOpen == true ? "block" : ""}} className="bg-white  py-3 mt-5 sm:mt-0 px-10 rounded sm:flex hidden ">Register</button>
        <i style={{display: isOpen == true ? "none" : ""}} onClick={openMenu} class="absolute right-2 top-8 text-5xl sm:hidden  fa-solid fa-bars"></i>
        <i style={{display: isOpen == true ? "block" : ""}} onClick={closeMenu} class="absolute right-2 top-8  hidden text-5xl fa-solid fa-xmark"></i>
    </div>
}
export default Header 