# README

**Summary**
This project is an individual side project that I am using to learn more about Rails and React.
Currently, the project has a survey frontend with a couple accompanying web pages. Still in the
early stages though.

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
- If any errors occur when creating a new project, it may be best to fix the issue then recreate it
  - If you run into a permission error with bundler: https://bundler.io/doc/troubleshooting.html
