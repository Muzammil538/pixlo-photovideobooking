import { Link } from "react-router"

const Navbar = () => {
  const NavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'details', path: '/details' },
    { name: 'verifycode', path: '/verifycode' },
  ]

  return (
    <>
      <nav className="w-full bg-gray-800 text-white flex justify-between items-center px-10 min-h-[70px]">
        <Link to="/">Pixlo</Link>
        <ul className="flex space-x-4">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar