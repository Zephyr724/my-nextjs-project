import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-around bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>

      <Link href="/users">Users</Link>

      <Link href="/products">Product</Link>
    </div>
  );
};

export default NavBar;
