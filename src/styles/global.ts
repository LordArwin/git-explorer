import { createGlobalStyle } from 'styled-components';
import backImage from '../assets/img/back-image.svg';

export default createGlobalStyle`
        *{
          margin:0;
          padding:0;
          outline:0;
          box-sizing:border-box;
        }
        body
        {
          background: #F0F0F5 url(${backImage}) no-repeat 70% top;
          -webkit-font-smoothing:antialiased;

        }
        body,input,button{
          font:16px Roboto, sans-serif;
        }
        #root{
          max-width:900px;
          padding:5px;
          margin:0 auto;
        }
        button{
          cursor:pointer;
        }
`;
