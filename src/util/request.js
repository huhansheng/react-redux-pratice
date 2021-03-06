
import request, { Request } from 'superagent';

Request.prototype.exec = function () {
  const req = this;

  return new Promise((resolve, reject) => {
    req.end((error, res) => {
      if (error) {
        return reject(error);
      }
      resolve(res);
    });
  });
};

export default request;
