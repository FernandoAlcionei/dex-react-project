import * as comicListReducer from '../containers/comic-list/reducers';
import * as comicDetailsReducer from '../containers/comic-details/reducers';
import * as alertReducer from '../containers/alert/reducers';

export default ({
  ...comicListReducer,
  ...comicDetailsReducer,
  ...alertReducer,
});
