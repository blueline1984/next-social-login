import styled from "styled-components";

export const Button = styled.button<{ color: string }>`
  background-color: yellow;
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;

  font-size: 18px;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.color === "naver"
      ? `
    background-color: #03C75A;
    color: #FFFFFF;
  `
      : props.color === "kakao"
      ? `
    background-color: #F7E600;
    color: #3A1D1D;

  `
      : `
    background-color: #FFFFFF;
  `}
`;

export const ButtonText = styled.div`
  flex-grow: 4;
  text-align: left;
  padding-left: 40px;
`;

export const Icon = styled.i<{ iconName: string }>`
  flex-grow: 1;
  height: 40px;
  width: 40px;
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  ${(props) => `background-image: url(/images/${props.iconName}.png)`}
`;
