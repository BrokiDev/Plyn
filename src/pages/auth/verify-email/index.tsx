import { useParams } from "react-router-dom";
import { useVerifyEmail } from "../../../providers/auth/verify-email";
import { toast, Toaster } from "sonner";

const VerifyEmailPage = () => {
  const { token } = useParams();

  const { mutateAsync } = useVerifyEmail();

  const handleVerifyEmail = async () => {
    try {
      const data = await mutateAsync(`${token}`);

      if (data.status === "success") {
        toast.success(data.message);
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 5000);
      }
      data.status === "fail" && toast.error(data.message, { duration: 3000 });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen w-full text-white bg-slate-900">
      <Toaster richColors position="top-right" />
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-center mt-6 animate-pulse">
            Verify your Email
          </h1>
          <div className="mt-10 w-12/12">
            <button
              className="border p-3 bg-slate-100 text-black"
              onClick={handleVerifyEmail}
            >
              Verify Email
            </button>
          </div>
        </div>

        <div className="mt-20 w-12/12 animate-bounce">
          <a className="border p-3 bg-slate-100 text-black" href="/">
            Go back Home
          </a>
          </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
