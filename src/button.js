// take a str, the button label and return a element
/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */
const makeButton = buttonName => {
  const btn = document.createElement('button');
  btn.innerText = buttonName;
  return btn;
};

module.exports = makeButton;
