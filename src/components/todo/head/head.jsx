import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem, setAllToComplete } from '../../../store/todos/todos.action';

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onValueChange = (event) => {
    const { addItemToList } = this.props;
    if (!event.target.value) {
      return;
    }
    if (event.key !== 'Enter') {
      return;
    }
    this.setState({
      value: event.target.value,
    });
    const { value } = this.state;
    addItemToList(value);
    this.setState({
      value: '',
    });
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { setAllToCompleted } = this.props;
    const { value } = this.state;
    return (
      <div className="todo__head">
        <button
          type="button"
          className="todo__head-checkall"
          onClick={() => setAllToCompleted()}
        >
          ❯
        </button>
        <input
          type="text"
          placeholder="Введите то что вам нужно сделать"
          className="todo__head-input"
          value={value}
          onChange={this.handleChange}
          onKeyPress={this.onValueChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

const mapDispatchToProps = (dispatch) => ({
  setAllToCompleted: () => dispatch(setAllToComplete()),
  addItemToList: (value) => dispatch(addItem(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Head);

Head.propTypes = {
  addItemToList: PropTypes.func.isRequired,
  setAllToCompleted: PropTypes.func.isRequired,
};
