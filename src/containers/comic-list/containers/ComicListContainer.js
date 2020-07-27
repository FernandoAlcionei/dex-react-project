import { connect } from 'react-redux';
import ComicListView from './ComicListView';
import { clearReducer, sagaComicList } from '../actions';

const ComicListContainer = ComicListView;

const mapStateToProps = (state) => ({
  comics: state.comicListReducer.comics,
  totalResults: state.comicListReducer.totalResults,
  totalPages: state.comicListReducer.totalPages,
  loadingView: state.comicListReducer.loadingView,
});

const mapDispatchToProps = (dispatch) => ({
  clearReducer: () => dispatch(clearReducer()),
  getComicList: (search, page, t) => dispatch(sagaComicList(search, page, t)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComicListContainer);
