import React from "react";
import { Provider } from "react-redux";
import {store} from './store';



export function App() {
  return (
  <Provider store={store}>
    <div>IPAM</div>
  </Provider>
  );
}


