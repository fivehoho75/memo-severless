// @flow
import configure from './configure';

const store = configure();

export default store;

export type State = {
  pender: {
    pending: any,
    success: any,
    failure: any,
  },
};
