import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from '../Button/index';
import ButtonIcon from '../ButtonIcon/index';
import { convertUriParamsToObject, convertObjectToUriParams } from '../../lib/utils';

const Pagination = ({ totalResults, totalPages, currentPage, history }) => {
  const changePage = (page) => {
    const { location } = history;
    const params = convertUriParamsToObject(location.search);
    params.page = page;

    history.push(`${location.pathname}${convertObjectToUriParams(params)}`);
  };

  const renderButtonPage = () => {
    const buttons = [];
    let amountPages = 5;
    const numPageDotPrevius = 3;

    if (currentPage - numPageDotPrevius > 0) {
      buttons.push((
        <Button
          key="first-page"
          onClick={() => changePage(1)}
          label="1"
          className="btn-pagination"
        />
      ));

      buttons.push((
        <Button
          key="btn-previus"
          onClick={() => {}}
          label="..."
          disabled
          className="btn-dots"
        />
      ));
    }

    for (let i = (currentPage - 2); i < currentPage; i++) {
      if (i > 0) {
        amountPages -= 1;
        buttons.push((
          <Button
            key={`btn-pagination-${i}`}
            onClick={() => changePage(i)}
            className={`btn-pagination ${currentPage === i ? 'btn-active' : ''}`}
            label={i}
          />
        ));
      }
    }

    for (let i = currentPage; i < (currentPage + amountPages); i++) {
      if (i <= totalPages) {
        buttons.push((
          <Button
            key={`btn-pagination-${i}`}
            onClick={() => changePage(i)}
            className={`btn-pagination ${currentPage === i ? 'btn-active' : ''}`}
            label={i}
          />
        ));
      }
    }

    if (currentPage + amountPages < totalPages) {
      buttons.push((
        <Button
          key="btn-next"
          onClick={() => {}}
          label="..."
          disabled
          className="btn-dots"
        />
      ));

      buttons.push((
        <Button
          key="last-page"
          onClick={() => changePage(totalPages)}
          label={totalPages}
          className="btn-pagination"
        />
      ));
    }

    return buttons;
  };

  return (
    <div className="pagination-component">
      <div className="total-results">
        <span>
          Total de resultados: { totalResults }
        </span>
      </div>

      <div className="wrap-pagination">
        <ButtonIcon
          onClick={() => changePage(currentPage - 1)}
          className="btn-pagination"
          icon="chevron-right"
          size="14"
          disabled={currentPage === 1}
        />

        { renderButtonPage() }

        <ButtonIcon
          onClick={() => changePage(currentPage + 1)}
          className="btn-pagination"
          icon="chevron-right"
          size="14"
          disabled={currentPage === totalPages}
        />
      </div>

      <div className="empty-col" />
    </div>
  );
};

Pagination.propTypes = {
  history: PropTypes.object.isRequired,
  totalResults: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
