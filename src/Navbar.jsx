import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return (
        <>
         <div id="navbar" >
          <div>
           <button id="btn" > <NavLink to="/" > MAYANK'S CLIENT</NavLink></button>
            </div>  
             <div >     
               <button id="btn"  ><NavLink  activeClassName="active_class" to="/cards" > GET USER </NavLink></button>
               </div> 
          
               </div>
           
        
       
        
        </>
    );

};

export default Navbar;