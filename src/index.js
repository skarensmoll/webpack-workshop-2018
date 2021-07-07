// We cannot use CommonJs and ES modules on the same file


import nav from './nav';
import { top, bottom } from './footer';
import makeButton from './button';
import { red, blue, makeColorStyle } from './button-styles'

console.log(nav(),
  top,
  bottom,
  makeButton('My first button'),
  makeColorStyle("cyan"));