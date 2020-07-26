import { connect } from 'react-redux';
import ComicListView from './ComicListView';
import { clearReducer, sagaProductList } from '../actions';

const ComicListContainer = ComicListView;

const mapStateToProps = (state) => ({
  comics: state.productListReducer.products,
  loadingView: state.productListReducer.loadingView,
});

const mapDispatchToProps = (dispatch) => ({
  clearReducer: () => dispatch(clearReducer()),
  getComicList: (search, t) => dispatch(sagaProductList(search, t)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComicListContainer);
