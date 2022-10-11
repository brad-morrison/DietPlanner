import React, { useState, useEffect } from "react"
import styled from "styled-components"

export default function Name(props) {
  var peakValue = props.peak
  var dataNum = props.value
  var dataGoal = props.goal

  const [percent, setPercent] = useState(0)
  const [barSize, setBarSize] = useState("0px")

  useEffect(() => {
    // Calculate and return the percentage rounded to 0 decimal places
    setPercent(Math.round((dataNum / dataGoal) * 100))
  })

  useEffect(() => {
    // Calculate the bar size in pixels using the percentage
    var barSizeFloat = parseFloat(peakValue)
    barSizeFloat = Math.round(barSizeFloat)
    var barSizeString = ""
    barSizeFloat = barSizeFloat * (percent / 100)
    barSizeString = String(barSizeFloat) + "px"
    setBarSize(barSizeString)
  })

  return (
    <ContentWrapper>
      <BarWrapper>
        <Bar size={barSize}></Bar>
        <BarBackground size={peakValue}></BarBackground>
      </BarWrapper>
      <Title>{props.title}</Title>
      <Percentage>
        <p>{percent}%</p>
      </Percentage>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  width: 74px;
`

const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${props => props.size || "0px"};
  background-color: #c3c3c3;
  border-radius: 15px;
  transition: 2s ease 0.3s;
`

const Percentage = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 5px;
  font-size: 12px;
`

const BarBackground = styled.div`
  height: ${props => props.size || "0px"};
`

const BarWrapper = styled.div`
  position: relative;
  background-color: black;
  width: 30px;
  border-radius: 15px 15px 15px 15px;
  overflow: hidden;
  margin: auto;
  margin-bottom: 15px;
`

const Title = styled.h3`
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  text-align: center;
`
