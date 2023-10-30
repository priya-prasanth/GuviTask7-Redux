import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Notes from './Notes';
import "./index.css";
import { Provider } from 'react-redux';
import { CrudStore } from './Crud/CrudStore';

const App = () => {
  return (
    <Provider store={CrudStore}>
      <Notes />
    </Provider>
  );
};

export default App;
