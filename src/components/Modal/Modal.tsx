import React, { ReactNode } from "react";
import * as S from "./Modal.styled";

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
