import NavBar from "../../components/Header/NavBar/NavBar";

const LoginPage = () => {
  return (
    <>
      <div className="bg-[url('/bg-login2.jpg')] brightness-[0.8] text-white bg-cover bg-no-repeat h-screen">
        <NavBar active={false} />
        <div className="flex justify-center items-center h-5/6">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-5/12 h-5/6 bg-[url('/bg-login3.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center rounded-xl p-6 sm:p-8 md:p-12 shadow-2xl mt-14">
            <div className="w-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-10 backdrop-blur-sm bg-black/30 rounded-lg shadow-2xl">
              <h2 className="text-3xl md:text-4xl mb-8">Login</h2>
              <form className="w-full flex flex-col items-center justify-center">
                <label htmlFor="email" className="text-xl md:text-2xl mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mb-4 p-2 rounded-md bg-transparent/25 text-white placeholder-white/75 focus:outline-none"
                />
                <label htmlFor="password" className="text-xl md:text-2xl mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full mb-6 p-2 rounded-md bg-transparent/25 text-white placeholder-white/75 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full md:w-8/12 lg:w-6/12 p-2 rounded-md bg-white/95 text-black hover:bg-white/80 transition duration-300"
                >
                  Login
                </button>
                <a href="" className="mt-8 text-white/80 hover:text-gradient">
                  Forgot Your Password?
                </a>
              </form>
              <p className="mt-4 text-xl hover:text-gradient">
                New Here?
                <a href="">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
