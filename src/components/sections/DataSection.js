import React from "react"
import styled from "styled-components"
import DataBars from "./DataBarSection"

export default function DataSection() {
  return (
    <Wrapper>
      <DataBars />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  max-width: 1200px;
  margin: auto;
`

const DataTextWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  border: white 1px dashed;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`

const TextWrapper = styled.div`
  color: white;
  height: 100%;
`
