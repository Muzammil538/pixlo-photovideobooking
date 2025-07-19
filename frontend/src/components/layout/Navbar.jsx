import { Link } from "react-router"

const Navbar = () => {
  const NavLinks = [
    {name : 'Explore Creators', path: '/explore/creators'},
    {name : 'Why us', path: '/whyus'}
  ];

  const authLinks = [
    { name: 'Login', path: '/login' },
    {name : 'Join as creator', path: '/creator/join'}
  ]

  return (
    <>
      <nav className="w-full bg-black text-white flex justify-between items-center px-10 h-[80px] border-b-1 border-[#B3995E]">
        <ul className="flex space-x-4">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="text-sm hover:text-[#B3995E]">{link.name}</Link>
            </li>
          ))}
        </ul>
        <Link to="/">
          <img src="./assets/pixlologo.png" alt="logo" className="h-[75px] " loading="lazy"/>
        </Link>
        <ul className="flex space-x-4">
          {authLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="bg-[#B3995E] py-2 px-4 rounded-3xl text-sm text-black">{link.name}</Link>
            </li>
          ))}
        </ul>
        
      </nav>
    </>
  )
}

export default Navbar