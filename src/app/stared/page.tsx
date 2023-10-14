import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";

const page = async () => {
  const session = await getServerSession(options);

  if (!session) {
    return (
      <div>
        <h1>you are not loggin </h1>
        <Link href={"/api/auth/signin?callbackUrl=/stared"}>log in </Link>
      </div>
    );
  }

  return <div>STARED CHEMPIONS</div>;
};

export default page;
