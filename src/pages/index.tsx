import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClickMoveToSignIn = () => {
    router.push("/signin");
  };
  return (
    <>
      <h1>This is Next JS Social Login Project!</h1>
      <button onClick={handleClickMoveToSignIn}>로그인하기</button>
    </>
  );
}
