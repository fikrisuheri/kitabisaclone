import React from 'react';
import './css/tailwind.output.css'
import Router from './router'
import './css/tailwind.output.css'
import 'aos/dist/aos.css';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;