const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let letters = [];
  let element1;

  if (!Array.isArray(members)) return false;
  members.forEach((element) => {
    if (typeof element === "string") {
      element1 = element.trim();
      letters.push(element1[0].toUpperCase());
    }
  });

  return letters.sort().join("");
}

module.exports = {
  createDreamTeam,
};

console.log(createDreamTeam(["  Matt", "Ann", "Dmitry", "Max"]));
