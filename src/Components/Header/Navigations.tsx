import React from 'react';
import * as AIcons from 'react-icons/ai';
import * as GIcons from 'react-icons/go';
import * as Imcons from 'react-icons/im';
import { NavLink } from 'react-router-dom';

const Navigations=()=>{
    return (
        <nav>
            <ul className='nav-menu-items'> 
                <li className='nav-text'>
                    <NavLink 
                        exact to="/" activeStyle={{color:'#DD6B20'}}>
                        <GIcons.GoPerson/>
                        <span>Suggestions</span>
                    </NavLink>
                </li>
                <li className='nav-text'>
                    <NavLink 
                        to="/favourites" activeStyle={{color:'#DD6B20'}} exact>
                        <AIcons.AiFillStar/>
                        <span>Favourites</span>
                    </NavLink>
                </li>
                    <li className='nav-text'>
                        <NavLink 
                            to="/rejected" activeStyle={{color:'#DD6B20'}} exact>
                                <Imcons.ImCancelCircle/>
                                <span>Rejected</span>
                        </NavLink>
                    </li>
            </ul>
        </nav>
    );
}

export default Navigations;