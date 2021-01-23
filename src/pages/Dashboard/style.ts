import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 40px;
  color: #3a3a3a;
  margin-top: 60px;
  max-width: 400px;
  line-height: 50px;
`;

export const Img = styled.img`
  padding: 25px 0px 10px 0px;
`;
export const Error = styled.div`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 650px;
  display: flex;
  input {
    flex: 1;
    height: 60px;
    padding: 0px 24px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    color: #a8a8b3;
    border: 2px solid #fff;
    border-right: 0px;
    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 170px;
    height: 60px;
    background: #6a5acd;
    color: #fff;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#6a5acd')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 60px;
  max-width: 650px;
  margin-bottom: 60px;
  a {
    transition: transform 0.3s;
    &:hover {
      transform: translateX(10px);
    }
    & + a {
      margin-top: 10px;
    }
    background: #fff;
    display: block;
    width: 100%;
    padding: 24px;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 18px;
        color: #3d3d4d;
      }
      p {
        font-size: 16px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
