import { Paper } from "@mui/material";
import React from "react";
import { createRoot } from 'react-dom/client';

function surveyConfirm() {

  return (
    <h1>Hello!</h1>
  )

}

const container = document.getElementById('confirm');
const root = createRoot(container!); 
root.render(surveyConfirm());