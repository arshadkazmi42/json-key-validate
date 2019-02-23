const isObj = require('is-obj');
const arrayContains = require('arr-contains');


const jkValidate = function (json, requiredKeys) {

  // If json is not array or object
  if (!isObj(json)) {
    return false;
  }
 
  // if its object, matching all the keys with required values
  if (json instanceof Object) {
    return arrayContains(Object.keys(json), requiredKeys);
  }
  
  for (let key in json) {
    if (!jkValidate(json[key], requiredKeys)) {
      return false;
    }
  }

  return true;
};


module.exports = jkValidate;
