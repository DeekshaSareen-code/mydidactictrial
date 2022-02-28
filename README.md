# My e-portfolio

* *Date Created*: 04 01 2022
* *Last Modification Date*: 28 02 2022
* *Git URL*: <https://github.com/DeekshaSareen-code/mydidactictrial>
* *Deployment URL*: <https://deekshasareen.herokuapp.com/>

## Authors

* [Deeksha Sareen](deekshasareen97@gmail.com) - *(Developer)*

## Getting Started

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
* node (v16.13.2)
* heroku (heroku/7.59.2 darwin-x64 node-v12.21.0)
* homebrew (macOS) (3.3.12)
* NPM (8.1.2)

```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

A step by step series of examples that tell you how to get a development env running

```
* Homebrew: in terminal command: ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* node.js & npm: in terminal command: brew install node
* Heroku:  in terminal command: brew tap heroku/brew && brew install heroku

```
To test the installation and version, in terminal type the following:

```
node -v:  v16.13.2
npm -v:  8.1.2
heroku -v:  heroku/7.59.2 darwin-x64 node-v12.21.0

```

## Deployment

* Steps

```
heroku login
git init
heroku git:remote -a deekshasareen
add extra buildpack in the settings section of your Heroku app. <https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz>
git add .
git commit -m "First Commit"
git push heroku master
heroku open
```

## Built With

* [React](https://reactjs.org/) - The web framework used to create the react app
```
npx create-react-app mydidactictrial
cd mydidatictrial
npm start
```
## Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

