import React from 'react';
import { connect } from 'react-redux';
import { newAction } from '../action';

class Input extends React.Component {
    constructor() {
        super()
        this.state = {
          valor: '',
        }
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(event) {
        this.setState({
            valor: event.target.value,
          });
          console.log(this.state.valor)
      }

  render() {
      const { valor } = this.state;
    return (
      <div>
          <input type="text" value={valor} onChange={this.handleClick} />
      </div>
   )
 }
}

const mapDispatchToProps = dispatch => ({
  myFirstDispatch: state => dispatch(newAction(state))});

  export default connect(null, mapDispatchToProps)(Input);