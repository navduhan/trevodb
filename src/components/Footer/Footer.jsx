import Link from "next/link";



const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-blue-600 to-purple-600 text-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mt-2 text-center text-gray-100">
          <p>&copy; {new Date().getFullYear()} trevoDB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
