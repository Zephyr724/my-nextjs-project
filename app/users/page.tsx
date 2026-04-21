import React, { Suspense } from "react";
import UserTable from "./UserTable";
import { serialize } from "v8";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
