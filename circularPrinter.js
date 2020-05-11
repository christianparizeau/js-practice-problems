const getTime = (string) => {
  let timer = 0;
  let pointerLocation = 'A'
  for (let index = 0; index < string.length; index++) {
    const pointerCode = pointerLocation.charCodeAt(0);
    const nextCharCode = string.charCodeAt(index);
    const codeCompare = nextCharCode - pointerCode;
    if (codeCompare <= 13 && codeCompare >= 0) {
      timer += codeCompare
    }
    else if (codeCompare < 0) {
      if (codeCompare + 26 < 13) {
        timer += codeCompare + 26
      } else {
        timer -= codeCompare
      }
    }
    else {
      timer -= codeCompare - 26
    }
    pointerLocation = string[index]

  }
  return timer;
}
