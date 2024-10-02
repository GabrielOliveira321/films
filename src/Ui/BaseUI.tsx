import React, { ReactNode } from "react";
import styled from "styled-components";

export const BaseUIComponent = styled.article`
  position: relative;
  width: 90%;
  // height: 390.67px;
  padding: 24px;
  gap: 12px;
  border-radius: 24px;
  background: #121212;
  overflow: hidden;
  margin: 20px auto;
`;

export const Description = styled.div `
  color: #EEEEEE;
  display: flex;
  width: 20%;
  font-size: 19px;
`

export const Buttons = styled.div`
  z-index: 1;
  margin: -27px 0 10px 90%;
  position: absolute;

  svg {
    cursor: pointer;
  }
`;

export const CardContainer = styled.div`
  gap: 12px;
  width: 100%;
  height: 90%;
  overflow-x: auto;
  scroll-behavior: smooth;
  align-items: center;
  display: flex;
  margin: 10px auto;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #121212;
  }
`;

export const Article = styled.article`
  flex: 0 0 auto;
  width: 339px;
  height: 100%;
  gap: 12px;
  display: flex;
  cursor: pointer;
`;

export const ItemMembers = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  gap: 12px;
  border-radius: 24px;
  box-sizing: border-box;
  background: #1e1e1e;

  img {
    width: 100%;
    // height: 200px;
    object-fit: cover;
    border-radius: 16px;
  }
`;

export const StarsDiv = styled.div`
  width: 100%;
  // height: 32px;
  margin-top: 8px;
  line-height: 0px;

  strong {
    display: flex;
    align-items: center;
  }

  p {

  }

`;

export const TextDiv = styled.div`
  margin-top: 8px;
  color: #eeeeee;
`;

export const SpanTetx = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 20.8px;
  text-align: left;
  color: #eeeeee;

  p {
    margin: 8px 0;
    font-size: 17px;
    font-weight: 600;
  }
`;

export const ThemeText = styled.div`
  margin: 20px 0;

  a {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
    color: #eeeeee;
    cursor: pointer;
    text-decoration: none;
    background: #EEEEEE40;
    width: 184px;
    height: 40px;
    padding: 12px;
    gap: 8px;
    border-radius: 12px;
    opacity: 0px;


    &:hover {
      text-decoration: underline;
    }
  }

  h3 {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
    color: #eeeeee;;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BaseUILog = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 24px;
  gap: 12px;
  border-radius: 24px;
  background: #121212;
  overflow: hidden;
  margin: 20px auto;
`

interface BaseUI {
    children: ReactNode;
}
const BaseUI: React.FC<BaseUI> =  ({children}) => {
    return<BaseUIComponent>{children}</BaseUIComponent>
}

export default BaseUI;
