import React from "react"
import styled from "styled-components"

export default function Macros(props) {
  return (
    <Wrapper>
      <Macro>
        <h3>CALORIES</h3>
        <h2>{props.calories}</h2>
      </Macro>
      <Macro>
        <h3>PROTEIN</h3>
        <h2>{props.protein}</h2>
      </Macro>
      <Macro>
        <h3>FAT</h3>
        <h2>{props.fat}</h2>
      </Macro>
      <Macro>
        <h3>SUGAR</h3>
        <h2>{props.sugar}</h2>
      </Macro>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: left;
  gap: 10px;
  align-items: center;
  color: white;
  margin: 15px 0;
`

const Macro = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  padding: 0 14px;
  border: 0.5px rgba(255, 255, 255, 0.3) solid;
  border-radius: 10px;
  padding: 8px;

  h3 {
    font-weight: 600;
    font-size: 10px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
  }

  h2 {
    font-size: 30px;
    text-align: center;
    font-weight: 700;
  }
`
