import React from "react";
import RootComponent from "./Components";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <RootComponent />
    </Provider>
  );
}

export default App;
