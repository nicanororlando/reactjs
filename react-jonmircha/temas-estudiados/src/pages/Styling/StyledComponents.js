import React from 'react';
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

export default function StyledComponents() {
  let colorH3 = 'blue';

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const MyH3 = styled.h3`
    padding; 0;
    font-size: 20px;
    margin-bottom: ${(props) => props.marginBottom || '0'}};
    text-align: center;
    color: ${colorH3};
    transition: ${setTransitionTime('1s')};

    // css es para utilizar styled components dentro de styled components:
    ${(props) =>
      props.isButton &&
      css`
        background-color: white;
        padding: 3px;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      `}

    &:hover {
      color: ${({ color }) => color || 'gray'};
      cursor: pointer;
    }
    `;

  const light = {
    color: '#222',
    bgColor: '#ddd',
  };
  const dark = {
    color: '#ddd',
    bgColor: '#222',
  };

  const Box = styled.div`
    padding: 0.3rem 5rem;
    margin: 0.1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
    cursor: pointer;
  `;

  //Este estilo lo ejecutamos como funcion, y va a heredar las propiedades de "Box" permitiendo tambien agregar mas props.
  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  return (
    <>
      <h2>StyledComponents</h2>
      <MyH3>1. Elemento Styled component</MyH3>
      <MyH3 color="white" marginBottom="10px">
        2. Le paso props
      </MyH3>
      <MyH3 isButton>3. H3 hecho boton</MyH3>
      <ThemeProvider theme={light}>
        <Box>Caja Light</Box>
        <BoxRounded>Caja redondeada Light</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Caja Dark</Box>
        <BoxRounded>Caja redondeada Dark</BoxRounded>
      </ThemeProvider>
    </>
  );
}
