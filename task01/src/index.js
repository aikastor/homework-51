import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import cards from "./App";

ReactDOM.render(cards, document.getElementById('root'));


serviceWorker.unregister();
