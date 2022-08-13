import { Button, Paper, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import SurveyQuestions from "./surveyQuestions";
import SurveyTextField from "./surveyTextField";

type FormProps = {
  questions: string[]
  answers: string[][]
  types: string[]
  changePage: (pageUrl: string) => void
}

const SurveyForm: React.FC<FormProps> = ({questions, answers, types, changePage}) => {

  const [answered, setAnswered] = useState(Array(questions.length).fill(0));
  const [complete, setComplete] = useState(false);

  const handleChange = (questionNumber, userResponse) => {
    setAnswered(answered.map((answer, index) => 
      (index === questionNumber) ? userResponse : answer
    ));
  }

  useEffect(() => {
    setComplete(answered.every(answer => answer !== '' && answer !== 0))
  }, [answered]);

  return (
    <Paper variant='outlined' style={{marginTop: 24, width: 800}}>
      <div style={{padding: 24}}>
        <Typography variant='h2' align='center'>Survey Form</Typography> 
      </div>
      <div>
        { 
          questions.map((question, index) => 
            types[index] === 'radio' ? 
            (<div style={{paddingBottom: 24}}>
              <SurveyQuestions 
                key={index} 
                questionNumber={index}
                question={question} 
                answers={answers[index]} 
                handleChange={handleChange}
              />
            </div>)
            :
            (<div style={{paddingBottom: 24, paddingLeft: 24}}>
              <SurveyTextField 
                key={100-index}
                questionNumber={index}
                question={question}
                handleChange={handleChange}
              />
            </div>))
        }
      </div>
      <div style={{display: 'flex', alignContent: 'flex-end', justifyContent: "right", padding: 24}}>
        <Button variant='contained' disabled={!complete} onClick={() => changePage('/confirm')}>
          DONE
        </Button>
      </div>
    </Paper>
  )

}

export default SurveyForm