import { Paper } from "@mui/material";
import React from "react";
import Navbar from "./navbar";

function MainResume(changePage: (changeUrl: string) => void) {

  return (
    <>
      <Navbar label="Resume" button="SURVEY" changePage={changePage} buttonRedirect='/survey' />
      <Paper style={{ marginTop: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={'/images/Resume.png'}
            alt="Resume Missing :("
            style={{ maxWidth: 1000 }}
          />
        </div>
      </Paper>
    </>
  )

}

export default MainResume;