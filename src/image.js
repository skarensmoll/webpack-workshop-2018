const makeImage = (url) => {
  const image  = document.createElement('img');
  image.src = url;
  image.height = '400';
  image.width = '500';
  return image
}


export default makeImage;