import styled from "styled-components";
import {
  BaseButon,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles.jsx";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButon},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    background: white;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 5px;
  }

  overflow-y: auto;
`;
