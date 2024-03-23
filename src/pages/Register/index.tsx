import { useState } from "react";
import NavBar from "../../components/Header/NavBar/NavBar";
import { Toaster, toast } from "sonner";

interface ILogin {
  email: string;
  password: string;
}
const validUser = {
  email: "broki@gmail.com",
  password: "1234",
};

const RegisterPage = () => {
  const [loginInfo, setLoginInfo] = useState<ILogin>({} as ILogin);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      loginInfo.email === validUser.email &&
      loginInfo.password === validUser.password
    ) {
      toast.success("Login Successful");
      setTimeout(() => {
        window.location.href = "/";
      }, 2500);
    } else {
      toast.error("Invalid Login");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <div className="bg-[url('/bg-login2.jpg')] brightness-[0.8] text-white bg-cover bg-no-repeat h-screen">
        <Toaster richColors position="top-right" />

        <NavBar active={false} />
        <div className="flex justify-center items-center h-5/6">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-5/12 h-5/6 bg-[url('/bg-login3.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center rounded-xl p-6 sm:p-8 md:p-12 shadow-2xl mt-14">
            <div className="w-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-10 backdrop-blur-sm bg-black/30 rounded-lg shadow-2xl">
              <h2 className="text-3xl md:text-4xl mb-8">Register</h2>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-center justify-center"
              >
                <div className="w-full grid gap-4 ">
                  <div className="w-full flex flex-col">
                    <label htmlFor="name" className="text-xl md:text-2xl mb-2">
                      First Name
                    </label>
                    <input
                      value={loginInfo.email}
                      onChange={handleChange}
                      name="fName"
                      id="name"
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full mb-4 p-2 rounded-md bg-transparent/25 text-white placeholder-white/75 focus:outline-none"
                    />
                  </div>

                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="lastName"
                      className="text-xl md:text-2xl mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      value={loginInfo.email}
                      onChange={handleChange}
                      name="lName"
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full mb-4 p-2 rounded-md bg-transparent/25 text-white placeholder-white/75 focus:outline-none"
                    />
                  </div>

                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="companyName"
                      className="text-xl md:text-2xl mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      value={loginInfo.email}
                      onChange={handleChange}
                      name="cName"
                      id="companyName"
                      type="text"
                      placeholder="Enter your company name"
                      className="w-full mb-4 p-2 rounded-md bg-transparent/25 text-white placeholder-white/75 focus:outline-none"
                    />
                  </div>

                  <div className="w-full flex flex-col">
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
                  </div>
                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="password"
                      className="text-xl md:text-2xl mb-2"
                    >
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
                  </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row justify-between">
                  <div className="flex w-full gap-2 items-center mb-4 sm:mb-0">
                    <input
                      className="w-5 h-5"
                      type="checkbox"
                      name="condition"
                      id="condition"
                    />
                    <label htmlFor="condition" className="text-sm sm:text-base">
                      I agree to the Terms & Privacy
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto sm:px-6 md:w-8/12  p-2 rounded-md bg-blue-500 text-white hover:bg-blue-400 transition duration-300"
                  >
                    Create Account
                  </button>
                </div>
              </form>

              <a className="mt-8 text-xl hover:text-gradient" href="/login">
                Already A Member? Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;