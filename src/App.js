import React from 'react'

import initialData from "./data"
import { StyledDiv, Table } from "./components"

function App() {
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Score',
        accessor: 'score',
      },
    ],
    []
  )

  const updateScore = (scoreData, correctIds) => {

    const scoreConst = 5
    const numOfParticipants = scoreData.length
    const maxScore = numOfParticipants * scoreConst

    console.log(correctIds)
    
    if(correctIds) { 
      const newScoreData = []
      const corrects = correctIds.length
      const scoreToAdd = maxScore - (corrects-1)*scoreConst
      scoreData.forEach((data) => {
        if (correctIds.includes(data.id.toString())) {
          data.score += scoreToAdd
        }
        newScoreData.push(data);
      })
      return newScoreData
    }
    else return scoreData
  }


  return (
    <StyledDiv>
      <Table columns={columns} tableData={React.useMemo( () => initialData, [])} updateData={updateScore} />
    </StyledDiv>
  )
}

export default App
