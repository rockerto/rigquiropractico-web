import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Rig Quiropráctico</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/#quien-soy" className="hover:text-blue-300">Quién Soy</Link>
          <Link href="/#servicios" className="hover:text-blue-300">Servicios</Link>
          <Link href="/#testimonios" className="hover:text-blue-300">Testimonios</Link>
          <Link href="/#contacto" className="hover:text-blue-300">Contacto</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;