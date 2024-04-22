import { useState } from "react";
import NavBar from "../../components/Header/NavBar/NavBar";
import { Toaster, toast } from "sonner";
import { useSendData } from "../../providers/sendData";

interface ILogin {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState<ILogin>({
    email: "",
    password: "",
  });
  const { mutateAsync: mutateLogin } = useSendData("auth/login");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await mutateLogin(loginInfo);
      if (data.status === "success") {
        localStorage.setItem("SessionToken", JSON.stringify(data.data.token));
        localStorage.setItem("UserInfo", JSON.stringify(data.data.user));
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
        toast.success("Login Successful", { duration: 5000 });
      } else {
        return toast.error(data.message, { duration: 5000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-[url('/bg-login2.jpg')] brightness-[0.8] text-white bg-cover bg-no-repeat h-screen">
        <Toaster richColors position="top-right" />

        <NavBar active={false} />
        <div className="flex justify-center items-center h-5/6">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-5/12 h-5/6 bg-[url('/bg-login3.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center rounded-xl p-6 sm:p-8 md:p-12 shadow-2xl mt-14">
            <div className="w-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-10 backdrop-blur-sm bg-black/30 rounded-lg shadow-2xl">
              <h2 className="text-3xl md:text-4xl mb-8">Login</h2>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-center justify-center"
              >
                <label htmlFor="email" className="text-xl md:text-2xl mb-2">
                  Email
                </label>
                <input
                  value={loginInfo.email}
                  onChange={handleChange}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mb-4 p-2 rounded-md bg-transparent/25 text-white placeholder-white/75 focus:outline-none"
                />
                <label htmlFor="password" className="text-xl md:text-2xl mb-2">
                  Password
                </label>
                <input
                  value={loginInfo.password}
                  onChange={handleChange}
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full mb-6 p-2 rounded-md bg-transparent/25 text-white placeholder-white/75 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full md:w-8/12 lg:w-6/12 p-2 rounded-md  bg-blue-500 text-white hover:bg-blue-400 transition duration-300"
                >
                  Sign In
                </button>
                <a href="" className="mt-8 text-white/80 hover:text-gradient">
                  Forgot Your Password?
                </a>
              </form>

              <a className="mt-4 text-xl hover:text-gradient" href="/register">
                New Here? Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
