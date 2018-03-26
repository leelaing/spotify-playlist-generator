import React from 'react';
import PropTypes from 'prop-types';

// Components
import ResultAvatar from './ResultAvatar/ResultAvatar';

// Styles
import './result-item.scss';

class ResultItem extends React.Component {
  render() {
    return (
      <div className="result">
        <ResultAvatar {...this.props}/>
        <div className="result__content">
          <p className="result__content__sub-title">
            {this.props.subTitle}
          </p>
          <h3 className="result__content__title">
            {this.props.title}
          </h3>
        </div>
      </div>
    )
  }
}

export default ResultItem;

ResultItem.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  avatarUrl: PropTypes.string,
  currentlyPlaying: PropTypes.string,
  previewUrl: PropTypes.string,
  togglePlay: PropTypes.func,
  id: PropTypes.string,
  onDestroy: PropTypes.func
};
