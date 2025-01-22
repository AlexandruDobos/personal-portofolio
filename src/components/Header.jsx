import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-xl font-bold">[Numele Tău]</Link>
        <nav>
          <Link to="/" className="px-4">Acasă</Link>
          <Link to="/about" className="px-4">Despre mine</Link>
          <Link to="/projects" className="px-4">Proiecte</Link>
          <Link to="/contact" className="px-4">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
