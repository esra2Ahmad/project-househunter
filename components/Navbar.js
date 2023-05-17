import { useState } from "react";
import { navLinks } from "../constants/index.js";
import Image from "next/image";
import Link from "next/link.js";

const Navbar = () => {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <nav className=" flex py-6 justify-between items-center  px-[120px] z-[5] ">
      <Image
        src="/../public/images/Logo.png"
        alt="logo"
        width="115"
        height="60"
      />

      <ul className=" list-none  flex  justify-end items-center flex-1   z-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-lexend font-normal cursor-pointer text-[16px]
              ${
                index === navLinks.length
                  ? "mr-0  text-greenm font-normal  bg-greenl rounded-[32px] w-max h-[35px] px-[15px] py-[5px] text-[14px] leadinng-[22px]  ml-[50px] "
                  : "mr-10  text-white  font-normal   bg-dimWhite border-1 rounded-[32px]  w-max h-[33px] px-[18px] py-[5px] text-[14px] leadinng-[22px] "
              }
              
              `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        {!signedIn && (
          <Link href="/signUp">
            <li className="mr-0  text-greenm font-normal  bg-greenl rounded-[32px] w-max h-[35px] px-[15px] py-[5px] text-[14px] leadinng-[22px]  ml-[50px] ">
              SignUp!
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
