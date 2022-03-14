import { useState } from 'react';
import styled from 'styled-components';

const Calculator = () => {
  const [result, setResult] = useState([0]);
  const arrOfNbr = [];

  const addingNbr = (e) => {
    let buttonValue = 0;

    if (isNaN(buttonValue)) {
      return null;
    } else if (e.target.value === 'AC') {
      setResult([0]);
    } else {
      buttonValue = parseInt(e.target.value, 10);
      arrOfNbr.push(buttonValue);
      setResult(result.concat(arrOfNbr));
    }
  };

  console.log(result);
  return (
    <Container>
      <ResultContainer>
        {result[0] === 0 && result.length >= 2 ? result.slice(1) : result[0]}
      </ResultContainer>
      <ButtonsContainer>
        <Row>
          <Button onClick={addingNbr} value={'AC'}>
            AC
          </Button>
          <Button>+ / -</Button>
          <Button>%</Button>
          <Button>/</Button>
        </Row>
        <Row>
          <Button onClick={addingNbr} value={7}>
            7
          </Button>
          <Button onClick={addingNbr} value={8}>
            8
          </Button>
          <Button onClick={addingNbr} value={9}>
            9
          </Button>
          <Button>X</Button>
        </Row>
        <Row>
          <Button onClick={addingNbr} value={4}>
            4
          </Button>
          <Button onClick={addingNbr} value={5}>
            5
          </Button>
          <Button onClick={addingNbr} value={6}>
            6
          </Button>
          <Button>-</Button>
        </Row>
        <Row>
          <Button onClick={addingNbr} value={1}>
            1
          </Button>
          <Button onClick={addingNbr} value={2}>
            2
          </Button>
          <Button onClick={addingNbr} value={3}>
            3
          </Button>
          <Button>+</Button>
        </Row>
        <Row>
          <Button onClick={addingNbr} value={0}>
            0
          </Button>
          <Button>,</Button>
          <Button> = </Button>
        </Row>
      </ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  padding: 0.5em;
  width: 50%;
`;

const ResultContainer = styled.div`
  width: 100%;
  font-size: 3em;
  padding: 0.5em;
  background-color: green;
  border-bottom: 8px solid black;
  text-align: right;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  background-color: red;
`;
const Row = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
`;
const Button = styled.button`
  border: 1px solid black;
  width: 100%;
  padding: 0.5em;
  background-color: blue;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: lightblue;
    cursor: pointer;
  }
`;

export default Calculator;
