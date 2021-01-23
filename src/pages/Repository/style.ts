import { shade } from 'polished';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 25px 0px 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    background: #6a5acd;
    padding: 6px;
    color: #fff;
    border-radius: 5px;
    transition: background-color 0.3s;
    &:hover {
      background: ${shade(0.3, '#6a5acd')};
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 70px;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    flex-wrap: wrap;
    li {
      & + li {
        margin-left: 70px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        font-size: 18px;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 60px;
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
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 67px);
`;
