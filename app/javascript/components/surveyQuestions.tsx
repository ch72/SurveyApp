import React, { FC, useState } from "react";
import { FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography } from "@mui/material";

type QuestionsProps = {
  questionNumber: number
  question: string
  answers: string[]
  handleChange: (key, answerNumber) => void
}

const SurveyQuestions: React.FC<QuestionsProps> = ({questionNumber, question, answers, handleChange}) => {

  return ( 
    <div style={{paddingLeft: 24}}>
      <FormControl>
        <FormLabel>{question}</FormLabel>
          <RadioGroup defaultValue={null}>
            { answers.map((answer, index) => 
              <FormControlLabel 
                key={index} 
                value={index+1} 
                control={<Radio/>} 
                label={answer} 
                onChange={() => handleChange(questionNumber, index+1)}
                />) 
              }
          </RadioGroup>
      </FormControl>
    </div>
  )

}

export default SurveyQuestions