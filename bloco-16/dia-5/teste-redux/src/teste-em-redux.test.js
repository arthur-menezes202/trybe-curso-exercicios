import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Store provido pela nossa aplicação. Nos testes, precisamos prover um novo store para podermos controlá-lo
const renderWithRedux = (
    component,
    { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
  ) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    }
  }
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

describe('testing clicks', () => {
    beforeEach(cleanup);
    test('the page should has a button and a text 0', () => {
      const { queryByText } = renderWithRedux(<App />);
      const buttonAdicionar = queryByText('Clique aqui');
  
      expect(buttonAdicionar).toBeInTheDocument();
      expect(queryByText('0')).toBeInTheDocument();
    });
  });
