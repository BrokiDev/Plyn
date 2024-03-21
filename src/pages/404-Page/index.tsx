
const NotFound = () => {
  return (
    <div className="h-screen w-full text-white bg-slate-900">
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img src="./404.svg" alt="" />
        <h1 className="text-4xl text-center mt-6 animate-pulse">404- Not Found</h1>
        <div className="mt-20 w-12/12 animate-bounce">
        <a className="border p-3 bg-slate-100 text-black" href="/">Go back Home</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NotFound