import { legacy_createStore as createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import allReducers from "./reducers";

const composedEnhancers = composeWithDevTools(...[applyMiddleware(thunk)])

const store = createStore(allReducers, composedEnhancers);

export default store;
