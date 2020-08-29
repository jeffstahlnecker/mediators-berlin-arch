import { css } from "styled-components";

export const setColor = {
  primaryColor: "#4BD6AB",
  secondaryColor: "#90dec6",
  mainWhite: "#fff",
  mainBlack: "#333",
  mainGrey: "#686868",
  lightGrey: "#ebeff2",
};

export const setFont = {
  main: "font-family: 'Roboto', sans-serif;",
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display:flex;align-items:${y};justify-content:${x};`;
};

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing: ${number / 16}rem;`;
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black",
} = {}) => {
  return `border:${width} ${style} ${color}`;
};

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => {
  return `transition: ${property} ${time} ${timing};`;
};

const sizes = {
  phone: 320,
  smallTablet: 481,
  portraitTablet: 641,
  tablet: 961,
  laptop: 1025,
  desktop: 1281,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
