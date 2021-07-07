/// THis is CommonJs , which is different to ES Modules
// This way it is a default and not a name being exported
// module.exports = buttonName => {
//   return `Button: ${buttonName}`
// }


/**
 * @param {string} buttonName
 * @returns {Element}
 */
const makeButton = buttonName => {
  return `Button: ${buttonName}`;
}

module.exports = makeButton;
