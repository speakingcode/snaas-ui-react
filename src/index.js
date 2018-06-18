import React                  from 'react';
import ReactDOM               from 'react-dom';
import {
  Route,
  BrowserRouter
}                             from 'react-router-dom'

import { createStore }        from 'redux'
import { Provider }           from 'react-redux'

import './index.css';
import App                    from './components/App';

import registerServiceWorker  from './registerServiceWorker';

const store = createStore(()=>({}))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
