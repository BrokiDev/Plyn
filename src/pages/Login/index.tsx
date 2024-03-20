import NavBar from "../../components/Header/NavBar/NavBar";

const LoginPage = () => {
  return (
    <>
      <div className="bg-[url('/bg-image.jpg')] bg-cover bg-no-repeat h-screen text-white ">
        <NavBar />
        <div className="w-full h-5/6 flex  justify-center items-center">
          <div className="w-8/12 h-5/6 flex  justify-center items-center border  rounded-xl bg-slate-300/20  shadow-2xl mt-14 ">
            <div className="w-full h-full flex flex-col justify-around items-center border border-black p-10">
              <div className="mb-11">
                <h2 className="text-4xl">Welcome back</h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className=" w-full border-transparent py-1 px-8 rounded-sm bg-slate-100  border-black"
                  type="text"
                />
                <label htmlFor="password">Password</label>
                <input className=" w-full border border-black" type="text" />
                <button
                  className="border mt-2 w-full rounded-sm bg-blue-600 text-white"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
            <div className="w-full h-full border border-black">
              <img
                className="w-full h-full object-cover"
                src="./bg-image.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* 
<div className="text-white h-screen bg-[url('/bg-image.jpg')] brightness-[0.3]  w-full bg-cover bg-slate-900" >
    
       <NavBar />
       <div className="w-full z-20 relative h-screen bg-slate-900  flex items-center justify-center">
        <div className="w-7/12 h-5/6 flex gap-4 justify-center items-center border p-20 rounded-xl bg-slate-300/20  shadow-sm mt-14 ">
           <div className="w-full h-full border border-black">
            <img
              className="w-full h-full object-cover"
              src="./bg-image.jpg"
              alt=""
             />
          </div>

         <div className="w-full h-full flex flex-col justify-around items-center border border-black p-10">
            <div className="mb-11">
             <h2 className="text-4xl">Welcome back</h2>
           </div>
           <div className="flex flex-col items-center justify-center">
              <label htmlFor="email">Email</label>
               <input
               id="email"
              className=" w-full border-transparent py-1 px-8 rounded-full bg-slate-100  border-black"
                 type="text"
              />
              <label htmlFor="password">Password</label>
              <input className=" w-full border border-black" type="text" />
              <button
                className="border mt-2 w-full rounded-sm bg-blue-600 text-white"
            type="submit"
               >
                Login
              </button>
            </div>
       </div>
        </div>
      </div>
     </div> */}
    </>
  );
};

export default LoginPage;
