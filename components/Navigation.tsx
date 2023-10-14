import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div>
      <ul className='flex justify-around bg-red-400 fixed bottom-0 w-full'>
        <li>
          <Link href={"/"}>home</Link>
        </li>
        <li>
          <Link href={"/stared"}>stared</Link>
        </li>
        <li>
          <Link href={"/account"}>MyAccount</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
