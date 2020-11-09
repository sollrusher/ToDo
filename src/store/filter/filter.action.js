import {
  SHOW_ALL,
  SHOW_COMPLETE,
  SHOW_ACTIVE,
} from '../actionTypes';

export const setFilterAll = () => ({
  type: SHOW_ALL,
});
export const setFilterComplete = () => ({
  type: SHOW_COMPLETE,
});
export const setFilterActive = () => ({
  type: SHOW_ACTIVE,
});
