import { Paper, Typography } from "@mui/material";
import React from "react";

function SurveyConfirm() {

  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center',
      paddingTop: 100 
    }}>
      <Paper>
          <Typography variant={'h2'} style={{ padding: 100 }}>
            Thanks for your response!
          </Typography>
      </Paper>
    </div>
  )

}

export default SurveyConfirm;