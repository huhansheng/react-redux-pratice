
const promiseMiddleware = () => next => (action) => {
  if (!action.promise) {
    return next(action);
  }

  const { types, promise } = action;

  const [LOADING, SUCCESS, ERROR] = types;

  next({ ...action, type: LOADING });

  return promise.then((res) => {
    if (res.body.feedbackMsg) {
      return next({ ...action, type: SUCCESS, result: res });
    }

    if (res.body.errorMsg) {
      return next({ ...action, type: ERROR });
    }
  }, () =>
    next({ ...action, type: ERROR }),
  );
};

export default promiseMiddleware;
