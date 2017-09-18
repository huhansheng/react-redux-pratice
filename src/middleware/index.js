import loggerMiddleware from './loggerMiddleware';
import promiseMiddleware from './promiseMiddleware';
import { debug } from '../api/constants';

const middlewares = [
  promiseMiddleware,
  debug && loggerMiddleware
].filter(Boolean);

export default middlewares;
