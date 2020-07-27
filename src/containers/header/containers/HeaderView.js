import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Search from '../../../components/Search';
import images from '../../../config/images';
import { getParamUrl } from '../../../lib/utils';
import './styles.scss';

const { logo } = images;

class HeaderView extends Component {
  constructor(props) {
    super(props);

    const search = getParamUrl('search', props.location);

    this.state = { search };
  }

  searchComic = () => {
    const { history } = this.props;
    const { search } = this.state;

    if (search) {
      history.push(`/?search=${search}`);
    } else {
      history.push('/');
    }
  }

  render() {
    const { search } = this.state;
    const { t } = this.props;

    return (
      <div className="header-view">
        <div className="header">
          <div className="content">
            <Link to="/" onClick={() => this.setState({ search: '' })}>
              <img src={logo} className="logo" alt={t('Marvel')} />
            </Link>

            <Search
              value={search}
              onClick={() => this.searchComic()}
              onChangeValue={(value) => this.setState({ search: value })}
            />
          </div>
        </div>
      </div>
    );
  }
}

HeaderView.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(HeaderView);
