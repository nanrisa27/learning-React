import React from 'react';
import {Link} from 'react-router-dom';



const NavBar = () => {



    return(
        <div>
            <nav>
                <h2>Nancy Mulozi</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/AboutMe">AboutMe</Link>
                    </li>
                    <li>
                    <Link to="/Blogs">Blogs</Link>

                    </li>
                    <li>
                    <Link to="/Newpost">New Post</Link>

                    </li>
                </ul>
            </nav>
            
            
        </div>
    );
};


export default NavBar;