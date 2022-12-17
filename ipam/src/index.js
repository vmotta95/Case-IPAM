import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore';
import DistrictPage from './pages/DistrictPage';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <DistrictPage/>
    </Provider>,
    document.getElementById("root")
);


