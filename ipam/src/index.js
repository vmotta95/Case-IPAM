import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore';
import DistrictPage from './pages/DistrictPage';


const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <DistrictPage/>
    </Provider>,
   
);


