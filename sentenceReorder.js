const arrange = (sentence) => {
  const lengths = [];
  const punctuation = sentence[sentence.length - 1]
  const trimmedSentence = sentence.substring(0, sentence.length - 1)
  for (let element of trimmedSentence.split(" ")) {
    if (lengths[element.length]) {
      lengths[element.length].push(element)
    } else {
      lengths[element.length] = [element]
    }
  }
  let reorderedSentence = '';
  for (let wordLength = 1; wordLength < lengths.length; wordLength++) {
    if (lengths[wordLength]) {
      reorderedSentence += lengths[wordLength].join(" ").toLowerCase() + ' '
    }
  }
  return reorderedSentence[0].toUpperCase() + reorderedSentence.substring(1, reorderedSentence.length - 1) + punctuation
}
