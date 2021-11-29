import React, { useState } from 'react';

import { Container } from './styles';

const RowCustomCheckbox: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  function handleCheck() {
    setChecked(true);
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
  }

  function handleCheck1() {
    setChecked(false);
    setChecked1(true);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
  }

  function handleCheck2() {
    setChecked(false);
    setChecked1(false);
    setChecked2(true);
    setChecked3(false);
    setChecked4(false);
  }

  function handleCheck3() {
    setChecked(false);
    setChecked1(false);
    setChecked2(false);
    setChecked3(true);
    setChecked4(false);
  }

  function handleCheck4() {
    setChecked(false);
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(true);
  }

  return (
    <>
      <Container checked={checked} onClick={handleCheck}>
        <div />
      </Container>

      <Container checked={checked1} onClick={handleCheck1}>
        <div />
      </Container>

      <Container checked={checked2} onClick={handleCheck2}>
        <div />
      </Container>

      <Container checked={checked3} onClick={handleCheck3}>
        <div />
      </Container>

      <Container checked={checked4} onClick={handleCheck4}>
        <div />
      </Container>
    </>
  );
};

export default RowCustomCheckbox;
