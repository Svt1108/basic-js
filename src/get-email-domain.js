const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index = email.lastIndexOf("@");
  if (index < 0) return false;
  let domain = email.slice(index + 1);
  return domain;
}

module.exports = {
  getEmailDomain,
};

console.log(getEmailDomain("prettyandsimple@example.com"));
