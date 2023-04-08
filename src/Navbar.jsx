import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const tranistionNavBar = () => {
    if (window.scrollY > 40) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", tranistionNavBar);
    return () => window.removeEventListener("scroll", tranistionNavBar);
  }, []);

  return (
    <div
      className={`"transition-all ease-in" fixed top-0 z-10 h-12 w-full p-3 duration-75 ${
        show && "bg-black"
      }`}
    >
      <div className="flex flex-wrap justify-between">
        <img
          onClick={() => navigate("/")}
          className=" fixed left-3 top-2 w-20 cursor-pointer object-contain pl-5"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt=""
        />

        <img
          onClick={() => navigate("/profile")}
          className=" fixed right-5 h-7 w-7 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
        <h1></h1>
      </div>
    </div>
  );
};

export default Navbar;
