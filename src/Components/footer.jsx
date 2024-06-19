import React from 'react';

const Footer = () => (
  <footer className="bg-primary text-black py-6">
    <div className="container mx-auto text-center">
      <p className="text-sm">&copy; 2024 Bidcraft. All rights reserved.</p>
      <div className="mt-4 flex flex-col sm:flex-row justify-center">
        <a href="#" className="mx-2 text-sm">Privacy Policy</a>
        <a href="#" className="mx-2 text-sm">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;
