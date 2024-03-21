import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-screen w-full text-white bg-slate-900">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <RingLoader className="" color="#3087be" />
          {/* <div className="border border-blue-400   h-full p-10 rounded-full animate-spin "></div> */}
          <h1 className="text-4xl text-center mt-6 animate-pulse">LOADING...</h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
