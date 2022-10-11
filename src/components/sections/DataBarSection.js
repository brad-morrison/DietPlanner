import React, { useEffect, useState } from "react"
import styled from "styled-components"
import DataBar from "../objects/DataBar"
import { meals, times, goals } from "../../data/MyData"

export default function DataBars() {
  var caloriesCount = 0
  var proteinCount = 0
  var fatCount = 0
  var sugarCount = 0
  const [calories, setCalories] = useState(0)
  const [protein, setProtein] = useState(0)
  const [fat, setFat] = useState(0)
  const [sugar, setSugar] = useState(0)

  useEffect(() => {
    // Calculate each stat from all meals together
    meals.forEach(meal => {
      caloriesCount += meal.calories
      proteinCount += meal.protein
      fatCount += meal.fat
      sugarCount += meal.sugar
    })

    setCalories(caloriesCount)
    setProtein(proteinCount)
    setFat(fatCount)
    setSugar(sugarCount)
  }, [])

  return (
    <Wrapper>
      <Databars>
        <DataBar
          title="CALORIES"
          value={calories}
          goal={goals[0].value}
          peak="200px"
        ></DataBar>
        <DataBar
          title="PROTEIN"
          value={protein}
          goal={goals[1].value}
          peak="200px"
        ></DataBar>
        <DataBar
          title="FAT"
          value={fat}
          goal={goals[2].value}
          peak="200px"
        ></DataBar>
        <DataBar
          title="SUGAR"
          value={sugar}
          goal={goals[3].value}
          peak="200px"
        ></DataBar>
      </Databars>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 80px;
  margin-top: 100px;
`
const Databars = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
`
