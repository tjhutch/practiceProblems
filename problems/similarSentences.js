/*
Given two sentences words1, words2 (each represented as an array of strings), and a list of similar word pairs pairs,
determine if two sentences are similar.

For example, words1 = ["great", "acting", "skills"] and words2 = ["fine", "drama", "talent"] are similar,
if the similar word pairs are pairs = [["great", "good"], ["fine", "good"], ["acting","drama"], ["skills","talent"]].

Note that the similarity relation is transitive. For example, if "great" and "good" are similar,
and "fine" and "good" are similar, then "great" and "fine" are similar.

Similarity is also symmetric. For example, "great" and "fine" being similar is the same as "fine" and "great" being similar.

Also, a word is always similar with itself. For example, the sentences words1 = ["great"], words2 = ["great"],
pairs = [] are similar, even though there are no specified similar word pairs.

Finally, sentences can only be similar if they have the same number of words. So a sentence like
words1 = ["great"] can never be similar to words2 = ["doubleplus","good"].

Note:

The length of words1 and words2 will not exceed 1000.
The length of pairs will not exceed 2000.
The length of each pairs[i] will be 2.
The length of each words[i] and pairs[i][j] will be in the range [1, 20].
*/


/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(words1, words2, pairs) {
  if (words1.length !== words2.length) {
    return false;
  }
  let rel = new Map();
  for (let i = 0; i < pairs.length; i++) {
    let first = pairs[i][0];
    let second = pairs[i][1];
    addRelationship(rel, first, second);
  }
  for (let i = 0; i < words1.length; i++) {
    if (!(words1[i] === words2[i] || rel.has(words1[i]) && rel.get(words1[i]).includes(words2[i]))) {
      return false;
    }
  }
  return true;
};

const addRelationship = function(rel, first, second) {
  if (rel.has(first)) {
    const list = rel.get(first);
    if (!list.includes(second)) {
      list.push(second);
      for (let j = 0; j < list.length - 1; j++) {
        addRelationship(rel, second, list[j])
      }
    }
  } else {
    rel.set(first, [second]);
  }
  if (rel.has(second)) {
    const list = rel.get(second);
    if (!list.includes(first)) {
      list.push(first);
      for (let j = 0; j < list.length - 1; j++) {
        addRelationship(rel, first, list[j])
      }
    }
  } else {
    rel.set(second, [first]);
  }
};

const words1 = ["an","extraordinary","meal"];
const words2 = ["a","good","dinner"];
const pairs = [["great","good"],["extraordinary","good"],["well","good"],["wonderful","good"],["excellent","good"],
  ["fine","good"],["nice","good"],["any","one"],["some","one"],["unique","one"],["the","one"],["an","one"],
  ["single","one"],["a","one"],["truck","car"],["wagon","car"],["automobile","car"],["auto","car"],["vehicle","car"],
  ["entertain","have"],["drink","have"],["eat","have"],["take","have"],["fruits","meal"],["brunch","meal"],
  ["breakfast","meal"],["food","meal"],["dinner","meal"],["super","meal"],["lunch","meal"],["possess","own"],
  ["keep","own"],["have","own"],["extremely","very"],["actually","very"],["really","very"],["super","very"]];

console.log(areSentencesSimilarTwo(words1, words2, pairs));
