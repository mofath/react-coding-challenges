import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import './styles/_main.scss';
import Routes from './routes';
import { GeneralContextProvider } from "./context";


const app = (
  <GeneralContextProvider>
    <AppContainer>
      <Routes />
    </AppContainer>
  </GeneralContextProvider>
);

ReactDOM.render(app, document.getElementById('root'));

