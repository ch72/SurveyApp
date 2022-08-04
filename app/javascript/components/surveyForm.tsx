import { Button, Paper, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import SurveyQuestions from "./surveyQuestions";

type FormProps = {
  questions: string[]
  answers: string[][]
}

const SurveyForm: React.FC<FormProps> = ({questions, answers}) => {

  const [answered, setAnswered] = useState(Array(questions.length).fill(0));
  const [complete, setComplete] = useState(false);

  const checkComplete = (id, answerNumber) => {
    setAnswered(answered.map((answer, index) => 
      (index === id) ? answerNumber : answer
    ));
  }

  useEffect(() => {
    setComplete(answered.reduce((v1, v2) => v1*v2, 1) > 0)
  }, [answered]);

  return (
    <Paper variant='outlined' style={{marginTop: 24, width: 800}}>
      <div style={{padding: 24}}>
        <Typography variant='h2' align='center'>Survey Form</Typography> 
      </div>
      <div>
        { 
          questions.map((question, index) => 
            <div style={{paddingBottom: 24}}>
              <SurveyQuestions 
                key={index} 
                id={index}
                question={question} 
                answers={answers[index]} 
                handleChange={checkComplete}
              />
            </div>)
        }
      </div>
      <div style={{display: 'flex', alignContent: 'flex-end', justifyContent: "right", padding: 24}}>
        <Button variant='contained' disabled={!complete} href='/confirm'>DONE</Button>
      </div>
    </Paper>
  )

}

export default SurveyForm