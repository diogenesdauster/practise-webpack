function component() {
  const element = document.createElement('div');

  //Loadsh, currently included via a script, is required form this line to work
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
