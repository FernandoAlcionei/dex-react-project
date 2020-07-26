import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';
import Card from '../../../components/Card/index';
import { getParamUrl } from '../../../lib/utils';
import Loader from '../../../components/Loader/index';
import EmptySearch from '../../../components/EmptySearch';
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
    const { location } = nextProps;
    const nextPropsSearch = getParamUrl('search', location);
    const currentSearch = this.getSearchValue();

    return currentSearch !== nextPropsSearch;
  }

  getSearchValue() {
    const { location } = this.props;
    return getParamUrl('search', location);
  }

  getComics() {
    const { getComicList, t } = this.props;
    const search = this.getSearchValue();

    getComicList(search, t);
  }

  renderCards() {
    const { comics, loadingView } = this.props;

    if (!loadingView) {
      return comics.map((comic) => (
        <Card key={comic.id} comic={comic} />
      ));
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
    const { loadingView } = this.props;

    return (
      <div className="comic-list-view">
        <div className="wrap-list">
          <Loader show={loadingView} />

          { this.renderEmptySearch() }

          { this.renderCards() }
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
};

export default withTranslation()(ComicListView);
