import React from "react"
import styled from "styled-components"

export default function MainTitle() {
  return (
    <Wrapper>
      <h1>Daily Diet Plan</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 80px 20px;

  h1 {
    text-align: center;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    color: rgba(255, 255, 255, 0.6);
    font-size: 60px;
    line-height: 70px;
  }
`
