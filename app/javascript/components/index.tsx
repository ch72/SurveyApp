import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import MainResume from "./resumeMain";
import MainSurvey from "./surveyMain";
import SurveyConfirm from "./surveyConfirm";

const PageToRender: React.FC = () => {

  const [page, setPage] = useState(window.location.pathname);

  const changePage = (pageUrl) => {
    window.location.href = pageUrl;
    setPage(pageUrl);
  }

  if (page === '/confirm') return SurveyConfirm();
  if (page === '/resume') return MainResume();
  return MainSurvey(changePage);

}

const container = document.getElementById('main');
const root = createRoot(container!);
root.render(<PageToRender />);