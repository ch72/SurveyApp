import React from "react";
import SurveyForm from "./surveyForm";
import Navbar from "./navbar"

function MainSurvey(changePage: (pageUrl: string) => void) {

  return (
    <>
      <Navbar label='Survey' button='RESUME' buttonRedirect='/' changePage={changePage} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SurveyForm
          questions={[
            'Which label best describes you?',
            'Which area do you think is the strongest on my resume?',
            'If I want to be a better software engineer, which area should I focus on the most?',
            'Any general feedback on how I can improve?'
          ]}
          answers={[[
            'Student',
            'Teacher',
            'Recruiter',
            'Other'
          ],
          [
            'Education',
            'Experience',
            'Projects',
            'Skills'
          ],
          [
            'Education',
            'Experience',
            'Projects',
            'Skills',
            'Certifications'
          ],
          [
            ''
          ]
          ]}
          types={[
            'radio',
            'radio',
            'radio',
            'textfield'
          ]}
          changePage={changePage}
        />
      </div>
    </>
  )

}

export default MainSurvey;