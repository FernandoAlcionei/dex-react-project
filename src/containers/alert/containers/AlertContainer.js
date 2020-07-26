import { connect } from 'react-redux';
import AlertView from './AlertView';
import { clearReducer, deleteAlert } from '../actions';

const AlertContainer = AlertView;

const mapStateToProps = (state) => ({ alerts: state.alertReducer.alerts });

const mapDispatchToProps = (dispatch) => ({
  clearReducer: () => dispatch(clearReducer()),
  deleteAlert: (id) => dispatch(deleteAlert(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
