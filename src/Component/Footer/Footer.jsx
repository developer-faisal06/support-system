import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
  <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
   
    <div>
      <h3 className="text-lg font-semibold mb-2">CS Ticket System</h3>
      <p className="text-gray-400 text-sm">
        Efficient customer support management platform to track, assign, and resolve tickets seamlessly.
      </p>
    </div>
    
 
    <div>
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
      <ul className="text-gray-400 text-sm space-y-1">
        <li><a href="#" className="hover:text-white">Dashboard</a></li>
        <li><a href="#" className="hover:text-white">Tickets</a></li>
        <li><a href="#" className="hover:text-white">Users</a></li>
        <li><a href="#" className="hover:text-white">Settings</a></li>
      </ul>
    </div>
    
   
    <div>
      <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
      <p className="text-gray-400 text-sm">Email: support@cstickets.com</p>
      <p className="text-gray-400 text-sm">Phone: +880 1234 567890</p>
      <p className="text-gray-400 text-sm">Address: 123 CS Street, Dhaka, Bangladesh</p>
    </div>

  </div>


  <div className="mt-6 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
    &copy; 2026 CS Ticket System. All rights reserved.
  </div>
</footer>
    );
};

export default Footer;