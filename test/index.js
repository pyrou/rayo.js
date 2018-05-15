/* eslint no-console: 0 */

const rayo = require('../bin/rayo');

const middlewareOne = (req, res, next) => {
  req.test = 10;
  next();
};

const middlewareTwo = (req, res, next) => {
  req.test *= 3;
  next();
};

const middlewareThree = (req, res) => {
  res.send({ hello: 'world', test: req.test });
};

rayo({ port: 9000 })
  .through(middlewareOne, middlewareTwo)
  .get('/', middlewareThree)
  .start(() => {
    console.log('Up!');
  });

// router.route('/on').get(middlewareThree);
// router.route('/off').through(middlewareOne, middlewareTwo).get(middlewareThree);
