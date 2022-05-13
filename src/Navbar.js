import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
   // 【set to show links when clicked 】
   const [showlinks, setShowLinks] = useState(false);
   const linksContainerRef = useRef(null);
   const linksRef = useRef(null);
   // everytime the link is called
   useEffect(() => {
      const linksHeights = linksRef.current.getBoundingClientRect().height;
      if (showlinks) {
         linksContainerRef.current.style.height = `${linksHeights}px`;
        //  else if not showlinks then height = 0 so it hides it 
      } else {
         linksContainerRef.current.style.height = '0px';
      }
   }, [showlinks]);

   return (
      <nav>
         <div className="nav-center">
            <div className="nav-header">
               <img src={logo} alt="logo" />
               <button
                  className="nav-toggle"
                  onClick={() => setShowLinks(!showlinks)}
               >
                  <FaBars />
               </button>
            </div>
            {/* if showlink is true show the container */}

            <div className="links-container" ref={linksContainerRef}>
               <ul className="links" ref={linksRef}>
                  {links.map((link) => {
                     // destructure
                     const { id, url, text } = link;
                     return (
                        <li key={id}>
                           <a href={url}>{text}</a>
                        </li>
                     );
                  })}
               </ul>
            </div>

            <ul className="social-icons">
               {/* destructure */}
               {social.map((social) => {
                  const { id, url, icon } = social;
                  return (
                     <li key={id}>
                        <a href={url}>{icon} </a>
                     </li>
                  );
               })}
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
