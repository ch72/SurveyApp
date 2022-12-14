import { FormControl, FormLabel, TextareaAutosize } from "@mui/material";
import React from "react";

type TextFieldProps = {
  id: number,
  question: string,
  handleChange: (questionNumber, userResponse) => void
}

const SurveyTextField = ({questionNumber, question, handleChange}) => {

  return (
    <div>
      <FormControl>
        <FormLabel>{question}</FormLabel>
        <TextareaAutosize
          onChange={(e) => handleChange(questionNumber, e.target.value)}
          style={{width: 500}}
          />
      </FormControl>
    </div>
  )

}

export default SurveyTextField