import { connect } from 'react-redux';
import ComicDetailsView from './ComicDetailsView';
import { clearReducer, sagaComicDetails } from '../actions';

const ComicDetailsContainer = ComicDetailsView;

const mapStateToProps = (state) => ({
  comic: state.comicDetailsReducer.comic,
  loadingView: state.comicDetailsReducer.loadingView,
});

const mapDispatchToProps = (dispatch) => ({
  clearReducer: () => dispatch(clearReducer()),
  getComicDetails: (id, t) => dispatch(sagaComicDetails(id, t)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComicDetailsContainer);
