# Survey Application

**This website is now live on Heroku! Check it out: https://mysterious-atoll-59338.herokuapp.com/**

**Development Information**

Kanban board for project: https://ch72.atlassian.net/jira/software/projects/SA/boards/1 \
Or alternatively, see screenshot of board (may be outdated): https://tinyurl.com/5e8ezpjf

**Summary**

This project is an individual side project that I am using to learn more about Ruby on Rails and ReactJS.
It's a survey application that collects feedback from users on the strengths/weaknesses of my resume.
Still in the early stages...

**Prerequisites**
- Ruby 3.0.0+
- Bundler (bundle) 2.2.11+
- Node Package Manager (npm) 7.1.0+
- Yarn 1.22.10+

**Setup**

Clone and use the repository
```
git@github.com:chrishong23/SurveyApp.git
cd SurveyApp
```
Install and run the project
```
bundle install
bin/dev
```

**Optional**

If bin/dev (or foreman) does not work, one workaround is to run web and javascript separately...
```
bin/rails server -p 3000
yarn build --watch
```
If you need postgresql
```
brew install postgresql
brew services restart postgresql
```

**To create your own project with the same configuration as this one...**
```
rails new ProjectTitle -j esbuild --database=postgresql
cd ProjectTitle
yarn add @mui/material @emotion/react @emotion/styled
yarn add react react-dom
```
- If any errors occur when creating the rails project (first statement), it may be best to create a whole new project to install the rest of the dependencies
  - If you run into a permission error with bundler: https://bundler.io/doc/troubleshooting.html
