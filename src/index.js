import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

const button = makeButton('Hey there');
button.style = makeColorStyle('purple');

document.body.append(button);
document.body.appendChild(footer);

console.log(
  nav(),
  top,
  bottom,
  makeColorStyle("cyan")
);
