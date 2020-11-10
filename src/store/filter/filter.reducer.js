import {
  SHOW_ALL,
  SHOW_COMPLETE,
  SHOW_ACTIVE,
} from '../actionTypes';

const initialState = { filterSelect: 'all' };

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALL:
    {
      return {
        ...state,
        filterSelect: 'all',
      };
    }
    case SHOW_ACTIVE:
    {
      return {
        ...state,
        filterSelect: 'active',
      };
    }
    case SHOW_COMPLETE:
    {
      return {
        ...state,
        filterSelect: 'complete',
      };
    }
    default:
      return state;
  }
};

export default filter;
