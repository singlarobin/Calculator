import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import data from "./data";

const Container = styled.div`
  margin: 0rem auto;
  padding: 1rem 0rem;
  background: #dca3a4;
  height: 66vh;
`;

const Div = styled.div`
  background: #867162;
  padding: 0.5rem;
  margin: 3rem auto;
  width: 300px;
  border-radius: 1rem;

  @media (max-width: 500px) {
    width: 250px;
  }
`;

const Output = styled.h1`
  margin: 0.5rem 0.5rem 0rem 0.5rem;
  padding: 1rem;
  text-align: right;
  font-size: 1.5em;
  color: #1b2021;
  background: #ffcead;
  border-radius: 1rem;
`;

const Element = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 60px);
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: #1b2021;
  margin: 0rem auto;
  padding: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: repeat(4, 50px);
  }
`;

const Content = () => {
  const [output, setOutput] = useState("0");
  useEffect(() => {});
  return (
    <Container>
      <Div>
        <Output>{output}</Output>
        <Element>
          {data.map((element, index) => {
            return (
              <Item
                key={element}
                value={element}
                output={output}
                handleClick={setOutput}
              />
            );
          })}
        </Element>
      </Div>
    </Container>
  );
};

export default Content;
