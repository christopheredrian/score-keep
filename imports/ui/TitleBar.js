import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component{

  renderSubtitle(){
    if (this.props.subtitle) {
      return <small>({this.props.subtitle.toLowerCase()})</small>;
    } 
  }

  render(){
    return (
      <div>
        <h1>{this.props.title} {this.renderSubtitle()}</h1>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  // subtitle: PropTypes.string.isRequired
};

TitleBar.defaultProps = {
  title: 'Default Title'
}
