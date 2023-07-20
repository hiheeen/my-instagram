import { createGlobalStyle } from 'styled-components'; //styled컴포넌트에서 리셋할 것
import reset from 'styled-reset'; // 리셋한다

export const darkTheme = {
    backgroundColor: '#FAFAFA',
    fontColor: 'rgb(38, 38, 38)',
    border: '1px solid black',
};
export const whiteTheme = {
    backgroundColorColor: 'white',
    fontColor: '#000',
};

export const GlobalStyle = createGlobalStyle`
${reset} //css 리셋 - 기본값으로 만들어 주는 것
* {
    box-sizing : border-box;
    
}
input {
    all : unset;
}
body {
    font-size : 14px;
    color : ${(props) => props.theme.fontColor}
    background-color : ${(props) => props.theme.backgroundColor}
}
`;
