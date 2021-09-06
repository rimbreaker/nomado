# Nomado

An application for choosing travel destinations for digital nomads

## Run Locally

Clone the project

```bash
  git clone https://github.com/rimbreaker/nomado.git
```

Go to the project directory

```bash
  cd nomado
```

Node.js is required for this application to be used

Install `yarn` if you haven't already

```bash
  npm i -g yarn
```

Install dependencies

```bash
  yarn install
```

Start the application

```bash
  yarn start
```

## Demo

A working application is deployed to https://rimbreaker.github.io/nomado/

## Deployment

Project uses gh-pages library to automatically deploy an instance of the app to location supplied in `package.json`

```bash
  yarn deploy
```

## Main Features

- Randomly selecting a location by 'throwing a dart' at a spining globe
- Exploring the world by dragging and clicking in dart mode
- Searching for city info on teleport widget site
- Viewing the latest visited cities from a list

## Running Tests

The project has bare minimum e2e tests written in cypress. In order to execute them one needs to run

```bash
  yarn run cypress open
```

and from cypress open `basicFlows.spec.js` test suite

## Documentation

### Technical intro

Application is written in TypeScript using React library. App was bootstrapped with `create-react-app`.

For state management app uses redux with sagas for handling more complex data flows and persisted with redux persist in localStorage.

All the animations and styles are written in plain css.

The project gets automatically linted on pushes to repository. Same hooks can be used to trigger testing.

Project uses Cesium library for rendering the globe background. Some of interface functions had to be implemented for use in the application. Also because of Cesium the default script runner had to be replaced with craco.js which has more compatible webpack configurations.

### UX

User is first greeted with a splash screen welcoming them to the application and asking for their name. User is allowed to skip this view if they don't want to give their name.

Next an animation unveils like a curtain the main screen of the application. The time needed for going through the initial splash screen should be enough for the globe in the background to fully load.

On desktop user can see two cards for each of main exploring modes with 3d animations. On mobile phones those are replaced with single card with multiple tabs.

In dart mode when user clicks on globe the cordinates are calculated and as animation moving camera to clicked on place is happening there is a fetch for nearest city to the given coordinates being sent to teleport API. if such a city is found then current ainmation is changed to show the fetched city.

When on a city view, depending on wether the city belongs to a larger urban area, or not, additional information can be seen. The details tabs use teleport widget embeded into iframes.

From a city view user can try exploring the world by dragging mouse on the screen as well as using mouse wheel.

Other mode of data exploration is through widget subpage. This site is dedicated to teleport widget with option of changing the current city. All the data displayed is the same as in the dart view, but it's easier to search for urban areas from there.

Clicked on username in upper right corner allows user to either change his name, or view the list of last 40 locations viewed from their machines.

### Architecture

Data layer is separated from visual layer of the application via sagas. The fetch functions are only trigerred inside sagas, and visual components can only trigger actions sending data to redux store. All sagas include fallbacks and preventions to ensure as smooth usage of application as possible.

State is persisted in localStorage in case of users exit. For a potential PWA it is a crucial feature.

## TODOs

### Simple potentional additions

- ensure PWA compatibility and full responsivity
- improve styling/switch to aready component library
- add indicators for data loading like skeletons and spinners (redux foundations is ready)
- Geolocation and showing current location relatively to the searched place
- marking spots on the globe
- add library like framer-motion for smoother transition animations
- add translations (localization setup already in place; label text is missing)
- replace emojis with icons
- internet connection notifier
- using helmet.js for dynamic page header title changing
- using CSS preprocessor

### Backend dependent TODOs

- use of Gun.js for keeping global list of recently and most often viewed places
- posibility to connect with for example google account via firebase authentication
- redis for caching the teleport api results
- beacon api for logging user activity in the app
- url cityId hiding through proxy
- sharing found location via webshareAPI

### DevOps and Testing

- CI/CD pipelines with github actions
- redux clearing storage when detecting newer version of the application live
- more complex testing
