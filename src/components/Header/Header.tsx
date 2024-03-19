import CheckMark from "../SvgComponents/CheckMark";

const Header = () => {
  return (
    <>
      <section id="home" className="h-screen flex flex-col items-center relative justify-center text-white">
        <div className="bg-[url('/bg-image.jpg')] brightness-[0.3] absolute h-full w-full bg-cover"></div>
        <nav className="flex z-30 backdrop-blur-sm justify-around w-full sticky p-4 top-0 -mt-20">
          <a className="p-4" href="/">
            <a href="">
              <h1 className="text-2xl">Plyn</h1>
            </a>
          </a>
          <div className="flex items-center justify-center ">
            <ul className="flex  gap-6">
              <li className="hover:text-gradient">
                <a href="#home">Home</a>
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
            <button className="rounded-full  py-2 px-6">Login</button>
            <button className="rounded-full bg-white text-black border py-2 px-6 ">
              Register
            </button>
          </div>
        </nav>
        <div className="z-20 mt-24">
          <div className="text-center p-6">
            <h1 className="text-7xl leading-normal text-gradient">
              Make Your Business
            </h1>
            <h1 className="text-6xl text-gradient">More Powerfull</h1>
          </div>

          <div className="flex items-center mt-4 mb-32 flex-col p-10">
            <ul className="flex gap-4">
              <li className="flex items-center gap-2">
                {<CheckMark />}Lifetime Support
              </li>
              <li className="flex items-center gap-2">
                {<CheckMark />}No CC Register
              </li>
            </ul>
            <div className="w-7/12 mt-8 flex items-center justify-center">
              <div className="border border-slate-700 rounded-full p-1 my-3">
                <input
                  className="bg-transparent focus:outline-none"
                  type="email"
                  placeholder="Input your email."
                />
                <button className="rounded-full bg-white text-black border py-2 px-6">
                  Try for free
                </button>
              </div>
            </div>
            <div className="flex mt-8 items-center  flex-col">
              <p className="text-lg"> Register Here and we gonna send you a link to fill out your information and verified your account</p>
              <p className="text-lg"> Once your account has verified you gonna start to work with your organization or teammates in Plyn.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
