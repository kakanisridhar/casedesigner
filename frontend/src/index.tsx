import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store";

const render = () => {
  const App = require("./App").default;

  ReactDOM.render(
    <Provider store={store}>
      <ChakraProvider>
        <CSSReset />
        <App />
      </ChakraProvider>
    </Provider>,
    document.getElementById("root")
  );
};

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", render);
}
