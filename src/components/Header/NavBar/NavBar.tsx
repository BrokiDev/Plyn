import { useNavigate } from "react-router-dom"

const NavBar = ({style}:{style?:string}) => {
    const navigate = useNavigate()
  return (
    <nav className={`flex z-30  justify-around w-full sticky p-4 sm:p-6 top-0 ${style}`}>
    <a className="p-2 sm:p-4" href="/">
      <h1 className="text-xl sm:text-2xl">Plyn</h1>
    </a>
    <div className="hidden sm:flex items-center justify-center ">
      <ul className="flex gap-4 sm:gap-6">
        <li className="hover:text-gradient">
          <a href="/">Home</a>
        </li>
        <span>|</span>
        <li className="hover:text-gradient">
          <a href="#howWorks">How it Works</a>
        </li>
        <span>|</span>
        <li className="hover:text-gradient">
          <a href="">About Us</a>
        </li>
        <span>|</span>
        <li className="hover:text-gradient">
          <a href="">Contact Us</a>
        </li>
      </ul>
    </div>
    <div className="flex items-center gap-4">
      <button onClick={() => navigate('/login')} className="rounded-full py-2 px-6">Login</button>
      <button onClick={() => navigate('/register')}  className="rounded-full bg-white text-black border py-2 px-6">
        Register
      </button>
    </div>
  </nav>
  )
}

export default NavBar