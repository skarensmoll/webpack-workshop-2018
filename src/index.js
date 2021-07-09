import nav from "./nav";
import { top, bottom, footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import "./footer.css";
import "./button.css";
import makeImage from './image.js';
import image from './cat.jpg';
//import { Foo } from './foo.ts';  needs ts config

const button = makeButton('Hey there');
button.style = makeColorStyle('purple');

document.body.append(button);
document.body.appendChild(footer);
document.body.appendChild(makeImage(image))

console.log(
  nav(),
  top,
  bottom,
  makeColorStyle("cyan")
);
