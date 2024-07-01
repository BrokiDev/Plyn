import { FormEvent, useState } from "react";
import { toast, Toaster } from "sonner";
import NavBar from "../../../components/Header/NavBar/NavBar";
import { useForgotPassword } from "../../../providers/forgotPassword";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const { mutateAsync } = useForgotPassword("auth/forgot-password");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await mutateAsync(email, {
      onSuccess: () => {
        setEmail("");
        setTimeout(() => {
            toast.success("Returning to login page...", { duration: 2000 });
        }, 3000);
        setTimeout(() => {
          window.location.href = "/login";
        }, 5000);
      },
    });
    if (data.status === "success") {
      toast.success(data.message, { duration: 3000 });
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
              <h2 className="text-3xl md:text-4xl mb-8">
                Forgot Your Password ?
              </h2>
              <h3 className="text-white/90 text-center text-2xl mb-4 pb-10">
                Enter the email address associated with your account.
              </h3>

              <p className="text-white/90 text-center pb-8 -mt-10">
                We will email you a link to reset your password.
              </p>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-center justify-center"
              >
                <label htmlFor="email" className="text-xl md:text-2xl mb-2">
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your email"
                  className="w-full mb-4 p-2 rounded-md bg-transparent/25 text-white placeholder-white/75 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full md:w-8/12 lg:w-6/12 p-2 rounded-md  bg-blue-500 text-white hover:bg-blue-400 transition duration-300"
                >
                  Send Email
                </button>
              </form>

              <Link className="mt-14 text-xl hover:text-gradient" to="/auth/sign-in">
                Already A Member? Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
