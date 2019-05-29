import * as React from 'react';
import { reactHot } from 'tsrex/utils';
import { appModelStore } from './model-store';
import { Provider } from 'react-redux';
import UserContainer from '@containers/user/user-container';
import { ThemeProvider } from 'react-jss';

const theme = {
  background: 'red',
  color: '#24292e'
};

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={appModelStore.createStore()}>
          <h1>React+exredux+typescript</h1>
          <UserContainer />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default reactHot(module, App);
