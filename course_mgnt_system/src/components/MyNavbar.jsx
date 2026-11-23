import React from 'react'
import { NavLink } from 'react-router-dom';

function MyNavbar() {
    return (
        <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">

            <h2 className="text-1xl font-bold">
                Course Management
            </h2>

            <div className="flex gap-6">
                
                <NavLink to={'/home'} className="hover:text-yellow-300" >Home</NavLink>
           
                <NavLink to={'/courses'} className="hover:text-yellow-300" >Courses</NavLink>  
                             
                <NavLink to={'/form'} className="hover:text-yellow-300" >Form</NavLink>

                <NavLink to={'/about'} className="hover:text-yellow-300" >About</NavLink>
              

            </div>

        </nav>
    );
}

export default MyNavbar;
