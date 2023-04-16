import React, { ReactNode } from "react";
import * as S from "./Button.styled";

type IButton = {
  children: ReactNode;
  color: "primary" | "naver" | "kakao";
  withIcon?: boolean;
  iconName: string;
  onClick: () => void;
};

const Button = ({ children, color, withIcon, iconName, onClick }: IButton) => {
  return (
    <>
      <S.Button color={color} onClick={onClick}>
        {withIcon && <S.Icon iconName={iconName} />}
        <S.ButtonText>{children}</S.ButtonText>
      </S.Button>
    </>
  );
};

export default Button;
