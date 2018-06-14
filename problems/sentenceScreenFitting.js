/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
  if (!sentence || sentence.length === 0 || rows === 0 || cols === 0) {
    return 0;
  }

  let sentenceLength = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length > cols) {
      return 0;
    }
    sentenceLength += sentence[i].length + 1;
  }
  // don't need last space
  sentenceLength -= 1;
  let curLength = 0;
  let nextLength = 0;
  let word = 0;
  let sentences = 0;
  for (let i = 0; i < rows; i++) {
    while (curLength < cols) {
      if (word === 0 && cols - curLength >= sentenceLength) {
        let numSentences = Math.floor((cols - curLength) / (sentenceLength + 1));
        if (numSentences === 0) {
          // space enough for exactly 1
          sentences++;
          break;
        }
        curLength += (sentenceLength + 1) * numSentences;
        sentences += numSentences;
        continue;
      }
      nextLength = curLength + sentence[word].length;
      if (nextLength <= cols) {
        // attempt to add a space
        if (nextLength + 1 <= cols) {
          nextLength += 1;
        }
        curLength = nextLength;
        word++;
        if (word === sentence.length) {
          word = 0;
          sentences += 1;
        }
      } else {
        break;
      }
    }
    curLength = 0;
  }
  return sentences;
};

const sentence = ["f","p","a"];
console.log(wordsTyping(sentence, 8, 7));
// ['try', 'to', 'be', 'better']; 10000 9001
