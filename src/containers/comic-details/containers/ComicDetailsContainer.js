import { connect } from 'react-redux';
import ComicDetailsView from './ComicDetailsView';
import { clearReducer, sagaProductDetails, sagaBuyProduct } from '../actions';

const ComicDetailsContainer = ComicDetailsView;

const mapStateToProps = (state) => ({
  comic: state.productDetailsReducer.product,
  loadingView: state.productDetailsReducer.loadingView,
});

const mapDispatchToProps = (dispatch) => ({
  clearReducer: () => dispatch(clearReducer()),
  getComicDetails: (id, t) => dispatch(sagaProductDetails(id, t)),
  buyComic: (id, t) => dispatch(sagaBuyProduct(id, t)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComicDetailsContainer);
