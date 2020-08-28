import React from 'react';
import { connect } from 'react-redux';
import { getNews, setDummy } from '../actions'

let styles = {
  backgroundColor: 'HotPink',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <React.Fragment>
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={this.props.getNews}
      >Press to see News</button>
      <button onClick={this.props.setDummy} />
      </React.Fragment>
    );
  }

};

const mapDispatchToProps = {
  getNews: getNews,
  setDummy: setDummy,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
