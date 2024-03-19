const CheckMark: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="2 1 45 55"
        width="20px"
        height="20px"
        {...props}
      >
        <path fill="white" d="M43.171 10.925L24.085 33.446l-9.667-9.015 1.363-1.463 8.134 7.585L41.861 9.378C37.657 4.844 31.656 2 25 2 12.317 2 2 12.317 2 25s10.317 23 23 23 23-10.317 23-23a22.876 22.876 0 00-4.829-14.075z" />
      </svg>
    );
  };
  
  export default CheckMark;