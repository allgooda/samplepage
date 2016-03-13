var _ = require('lodash');

var localEnvVars = {
  TITLE:      'samplepage',
  SAFE_TITLE: 'sample-page',
  SECRET_KEY: 'secret'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
