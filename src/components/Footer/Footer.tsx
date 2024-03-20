const Footer = () => {
  return (
    <footer className="bg-[#0C1727] text-white p-4">
      <div className=" mx-auto w-full flex flex-col flex-wrap justify-between items-start">
        <hr className="border-t border-gray-400 w-full my-4" />

        <div className="w-full flex justify-between text-sm">
          <div className="flex gap-4">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex gap-4">
            <span>FB</span>
            <span>X</span>
            <span>I</span>
          </div>
          <p>All Rights Reserved &copy; Plyn {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
