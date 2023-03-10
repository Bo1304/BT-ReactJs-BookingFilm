import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import listseatReducer from "./listseatReducer";
// export { rootReducer };
// ES6 object literal
export const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  user: userReducer,
 // seats:listseatReducer,
 listseatReducer
});

// export default rootReducer;
