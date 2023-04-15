import React from "react";
import Modal from "@/components/Modal/Modal";
import Button from "@/components/Button/Button";

const SigninPage = () => {
  return (
    <>
      <h1>This is Login Page</h1>
      <Modal>
        <Button color={"kakao"} withIcon={true} iconName={"kakao"}>
          카카오 로그인
        </Button>
        <Button color={"naver"} withIcon={true} iconName={"naver"}>
          네이버 로그인
        </Button>
      </Modal>
    </>
  );
};

export default SigninPage;
