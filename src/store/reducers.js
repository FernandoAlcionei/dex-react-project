import * as productListReducer from '../containers/comic-list/reducers';
import * as productDetailsReducer from '../containers/comic-details/reducers';
import * as alertReducer from '../containers/alert/reducers';

export default ({
  ...productListReducer,
  ...productDetailsReducer,
  ...alertReducer,
});
