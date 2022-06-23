import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFounds = () => {
    return (
       <div className="notFound">
           <div className="notFoundContent">
               <h3>This page doesn't exist !</h3>
               <NavLink exact to="/">
                   <i className="fas fa-home"></i>
                   <span> Home</span>
               </NavLink>

           </div>
       </div>
    );
};

export default NotFounds;