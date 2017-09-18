import handleReducers from '../util/handleReducers';
import request from '../util/request';
import { GET_HELLO_WORLD_URL } from '../api/constants';

const ADD_TODO_ING = 'ADD_TODO_ING';
const ADD_TODO_SUC = 'ADD_TODO_SUC';
const ADD_TODO_ERROR = 'ADD_TODO_ERROR';

const initialState = {
  result: '',
  requestStatus: ''
};

function todosIng(state = initialState) {
  return { ...state };
}

function todosSuc(state = initialState, actionObj) {
  const result = actionObj.result.body.result;
  return { ...state, requestStatus: 'success', result };
}

function todosError(state = initialState) {
  return { ...state, requestStatus: 'error', result: 'error' };
}

const handleReduces = {
  [ADD_TODO_ING]: todosIng,
  [ADD_TODO_SUC]: todosSuc,
  [ADD_TODO_ERROR]: todosError
};

export default handleReducers(initialState, handleReduces);

export function addTodo(action) {
  return {
    types: [ADD_TODO_ING, ADD_TODO_SUC, ADD_TODO_ERROR],
    promise: request.post(GET_HELLO_WORLD_URL).send(action).exec(),
    action
  };
}
