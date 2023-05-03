import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { signIn, useSession, signOut } from "next-auth/react";
import { Session } from "inspector";

export default function Home() {
  const router = useRouter();
  const { data, status } = useSession();

  const handleClickMoveToSignIn = () => {
    router.push("/signin");
  };

  if (status === "loading") {
    return <h1 style={{ backgroundColor: "red" }}>Loading....</h1>;
  }

  return (
    <>
      <h1>This is Next JS Social Login Project!</h1>
      {status === "authenticated" ? (
        <button onClick={() => signOut()}>로그아웃하기</button>
      ) : (
        <button onClick={handleClickMoveToSignIn}>로그인하기</button>
      )}
    </>
  );
}
