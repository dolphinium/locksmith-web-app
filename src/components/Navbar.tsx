import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md sticky top-0 z-50"> {/* Changed background to white */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-500 transition-colors"> {/* Adjusted text color */}
          Anahtarcı Osman
        </Link>
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors"> {/* Adjusted text color */}
            Hizmetlerimiz
          </Link>
          <Link href="/#about" className="text-gray-600 hover:text-blue-600 transition-colors"> {/* Adjusted text color */}
            Hakkımızda
          </Link>
          <Link href="/#gallery" className="text-gray-600 hover:text-blue-600 transition-colors"> {/* Adjusted text color */}
            Galeri
          </Link>
          <Link href="/#location" className="text-gray-600 hover:text-blue-600 transition-colors"> {/* New Location Link */}
            Konumumuz
          </Link>
          <Link href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors"> {/* Adjusted text color */}
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
