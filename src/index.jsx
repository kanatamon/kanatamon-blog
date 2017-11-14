import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';
import App from './App';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
}

injectGlobal`
  body {
    margin: 0;
  }
`;

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
