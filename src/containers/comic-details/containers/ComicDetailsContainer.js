import { connect } from 'react-redux';
import ComicDetailsView from './ComicDetailsView';
import { clearReducer, sagaComicDetails, sagaBuyComic } from '../actions';

const ComicDetailsContainer = ComicDetailsView;

const mapStateToProps = (state) => ({
  comic: state.comicDetailsReducer.comic,
  loadingView: state.comicDetailsReducer.loadingView,
});

const mapDispatchToProps = (dispatch) => ({
  clearReducer: () => dispatch(clearReducer()),
  getComicDetails: (id, t) => dispatch(sagaComicDetails(id, t)),
  buyComic: (id, t) => dispatch(sagaBuyComic(id, t)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComicDetailsContainer);
