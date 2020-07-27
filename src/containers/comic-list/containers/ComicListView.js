import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';
import Card from '../../../components/Card/index';
import { getParamUrl, convertUriParamsToObject } from '../../../lib/utils';
import Loader from '../../../components/Loader/index';
import EmptySearch from '../../../components/EmptySearch';
import Pagination from '../../../components/Pagination';
import './styles.scss';

class ComicListView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(nextProps) {
    if (this.isSearchChanged(nextProps)) {
      this.getComics();
    }
  }

  componentDidMount() {
    const { t } = this.props;
    document.title = t('Marvel');

    this.getComics();
  }

  componentWillUnmount() {
    const { clearReducer } = this.props;
    clearReducer();
  }

  isSearchChanged(nextProps) {
    const { location } = this.props;

    const nextSearch = convertUriParamsToObject(nextProps.location.search);
    const currentSearch = convertUriParamsToObject(location.search);

    return currentSearch.search !== nextSearch.search || currentSearch.page !== nextSearch.page;
  }

  getCurrentPage() {
    const { location } = this.props;
    return getParamUrl('page', location);
  }

  getComics() {
    const { getComicList, t, location } = this.props;
    const querySearch = convertUriParamsToObject(location.search);

    getComicList(querySearch.search, querySearch.page, t);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderCards() {
    const { comics } = this.props;

    return comics.map((comic) => <Card key={comic.id} comic={comic} />);
  }

  renderPagination() {
    const { comics, totalPages, totalResults, history } = this.props;
    const currentPage = parseInt(this.getCurrentPage(), 10) || 1;

    if (comics.length) {
      return <Pagination totalPages={totalPages} totalResults={totalResults} currentPage={currentPage} history={history} />;
    }

    return null;
  }

  renderEmptySearch() {
    const { comics, loadingView } = this.props;

    if (!loadingView && !comics.length) {
      return <EmptySearch />;
    }

    return null;
  }

  render() {
    const { loadingView, comics } = this.props;

    return (
      <div className="comic-list-view">

        <div className="wrap-list">
          <Loader show={loadingView} className={comics.length ? 'loader-absolute' : ''} />

          { this.renderEmptySearch() }

          { this.renderCards() }

          { this.renderPagination() }
        </div>
      </div>
    );
  }
}

ComicListView.propTypes = {
  clearReducer: PropTypes.func.isRequired,
  getComicList: PropTypes.func.isRequired,
  comics: PropTypes.array.isRequired,
  loadingView: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  totalResults: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
};

export default withTranslation()(ComicListView);
