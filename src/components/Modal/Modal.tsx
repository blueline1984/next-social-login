import React, { ReactNode } from "react";
import * as S from "./Modal.styled";
import Button from "@/components/Button/Button";

type IModal = {
  children: ReactNode;
};

const Modal = ({ children }: IModal) => {
  return (
    <>
      {/* <S.Backdrop> */}
      <S.Modal>
        <S.ModalContent>{children}</S.ModalContent>
      </S.Modal>
      {/* </S.Backdrop> */}
    </>
  );
};

export default Modal;
