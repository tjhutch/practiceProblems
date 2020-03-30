/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  s = s.toUpperCase();
  s = s.split('-').join('');
  if (s.length === 1) {
    return s;
  }
  const mod = s.length % k;
  for(let i = s.length - 1; i > mod; i--) {
    if ((i - mod) % k === 0) {
      s = insertDash(s, i);
    }
  }
  if (mod > 0) {
    s = insertDash(s, mod);
  }
  return s;
};

const insertDash = function(s, i) {
  return s.slice(0, i) + '-' + s.slice(i);
};

console.log(licenseKeyFormatting('a0001afds-', 4));
console.log(licenseKeyFormatting('2-5g-3-J', 2));
//licenseKeyFormatting('5F3Z-2e-9-w', 4);
//licenseKeyFormatting('5F3Z-2e-9-w', 4);