import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';
import './styles.scss';
import Loader from '../../../components/Loader';
import Comic from '../components/Comic';

class ComicDetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getComicDetails, t } = this.props;
    const { match: { params: { id } } } = this.props;

    window.scrollTo(0, 0);

    getComicDetails(id, t);
  }

  componentWillUnmount() {
    const { clearReducer } = this.props;
    clearReducer();
  }

  buy() {
    const { t, comic: { id }, buyComic } = this.props;

    buyComic(id, t);
  }

  renderComic() {
    const { loadingView, comic } = this.props;

    if (!loadingView && comic.id) {
      document.title = comic.title;

      return (
        <Comic buy={() => this.buy()} comic={comic} />
      );
    }

    return null;
  }

  render() {
    const { loadingView } = this.props;

    return (
      <div className="comic-view">
        <Loader show={loadingView} />

        { this.renderComic() }
      </div>
    );
  }
}

ComicDetailsView.propTypes = {
  t: PropTypes.func.isRequired,
  clearReducer: PropTypes.func.isRequired,
  getComicDetails: PropTypes.func.isRequired,
  buyComic: PropTypes.func.isRequired,
  comic: PropTypes.object.isRequired,
  loadingView: PropTypes.bool.isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }).isRequired }).isRequired,
};

export default withTranslation()(ComicDetailsView);
