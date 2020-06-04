import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from '../reducers/auth';
import questionReducer from '../reducers/question';
import timeReducer from '../reducers/timer';
import answerReducer from '../reducers/answers';
import resultReducer from '../reducers/result';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store persistence through Local Storage

function saveToLocalStorage(state) {
   try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
   }
   catch (e) {
      console.log(e);
   }
}

function loadFromLocalStorage() {
   try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
   }
   catch (e) {
      console.log(e);
      return undefined;
   }
}

const persistedState=loadFromLocalStorage();
//Store creation
export default () => {
   const store = createStore(

      combineReducers({
         auth: authReducer,
         question:questionReducer,
         timer:timeReducer,
         answer:answerReducer,
         result:resultReducer
      }),
      persistedState,
      composeEnhancers(applyMiddleware(thunk))
   );
   store.subscribe(()=>saveToLocalStorage(store.getState()));
   return store;
}

