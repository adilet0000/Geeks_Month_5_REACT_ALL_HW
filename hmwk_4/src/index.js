import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './store';


// const store = createStore(rootReducer, applyMiddleware(thunk, logger)); redux toolkit заменяет папку редакс и все составляющие

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);