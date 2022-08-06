import React from "react";
import { createRoot } from 'react-dom/client';
import SurveyForm from "./surveyForm";
import Navbar from "./navbar"

function MainSurvey() {
  
  return (
    <>
      <Navbar label='Survey' button='RESUME'/>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <SurveyForm
          questions={[
            'Which of these is the most enjoyable to you?',
            'What would you classify yourself as?',
            'Who is the greatest of all time?'
          ]}
          answers={[[
              'Good Food', 
              'TV Shows',
              'Sports',
              'Reading'
            ],
            [
              'Extrovert',
              'Introvert'              
            ],
            [
              ''
            ]
            ]}
            types={[
              'radio',
              'radio',
              'textfield'
            ]}
          />
      </div>
    </>
  )

}

const container = document.getElementById('main');
const root = createRoot(container!); 
root.render(MainSurvey());