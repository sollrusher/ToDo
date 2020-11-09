import {
  SHOW_ALL,
  SHOW_COMPLETE,
  SHOW_ACTIVE,
} from '../actionTypes';

const filter = (state = 'all', action) => {
  switch (action.type) {
    case SHOW_ALL:
    {
      const newState = 'all';
      return newState;
    }
    case SHOW_ACTIVE:
    {
      const newState = 'active';
      return newState;
    }
    case SHOW_COMPLETE:
    {
      const newState = 'complete';
      return newState;
    }
    default:
      return state;
  }
};

export default filter;
