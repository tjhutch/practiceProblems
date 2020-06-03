function compressor(s) {
  // input = abcaaabbb
  // output = abca3b3
  // input = abcd
  // output = abcd
  // input = aaabaaaaccaaaaba
  // output = a3ba4c2a4ba
  let out = '';
  let lastSeen = s.charAt(0);
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === lastSeen) {
      count++;
    } else {
      out += lastSeen;
      if (count > 1) {
        out += count;
        count = 1;
      }
      lastSeen = s.charAt(i);
    }
  }
  out += lastSeen;
  if (count > 1) {
    out += count;
  }
  return out;
}

console.log(compressor('abcaaabbb'));
console.log(compressor('abcd'));
console.log(compressor('aaabaaaaccaaaaba'));

