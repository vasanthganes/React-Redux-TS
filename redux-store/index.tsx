import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { membersReducer } from './reducer';
import { MemberState } from './models';

const reducers = combineReducers({
  members: membersReducer
});
// enhancers: include redux-dev-tools
const enhancer = compose(
   (window as any).__REDUX_DEVTOOLS_EXTENSION__ && 
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export function configureStore() {
  return createStore(reducers,compose(applyMiddleware(thunk),enhancer));
}