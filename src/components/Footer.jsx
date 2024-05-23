import React from 'react';

function Footer() {

   const currentYear = new Date().getFullYear();

   return (
      <footer>
         <p>
            &copy; {currentYear} Keeper. All rights reserved.
         </p>
      </footer>
   );
}






export default Footer;