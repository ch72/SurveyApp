import React, { FC, useState } from "react";
import { FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography } from "@mui/material";

type QuestionsProps = {
  id: number
  question: string
  answers: string[]
  handleChange: (key, answerNumber) => void
}

const SurveyQuestions: React.FC<QuestionsProps> = ({id, question, answers, handleChange}) => {

  return ( 
    <div style={{paddingLeft: 24}}>
      <FormControl>
        <FormLabel>{question}</FormLabel>
          <RadioGroup defaultValue={0}>
            { answers.map((answer, index) => 
              <FormControlLabel 
                key={index} 
                value={index+1} 
                control={<Radio/>} 
                label={answer} 
                onChange={() => handleChange(id, index+1)}
                />) 
              }
          </RadioGroup>
      </FormControl>
    </div>
  )

}

export default SurveyQuestions