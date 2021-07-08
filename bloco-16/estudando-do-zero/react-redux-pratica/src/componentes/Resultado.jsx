import React from 'react';
import { connect } from 'react-redux';

class Resultado extends React.Component {
  constructor(props) {
      super()
      this.state = {
        resultado: '',
      }
      }
  render() {
      const { resultado } = this.state;
    return (
      <p>resultado: {resultado}</p>
   )
 }
}

const mapStateToProps = state => ({
  myFirstState: state.myReducer.state});

export default connect(mapStateToProps, null)(Resultado);