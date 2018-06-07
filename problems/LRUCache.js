let cache;
let accessed;
let capacity;
/**
 * @param {number} cap
 */
const LRUCache = function(cap) {
  capacity = cap;
  cache = new Map();
  accessed = new Set();
};

/**
 * @param {number} key
 * @return {number}
 */
/*LRUCache.prototype.*/const get = function(key) {
  if (cache.has(key)) {
    // move this key to most recently accessed by deleting/re-adding to accessed set
    accessed.delete(key);
    accessed.add(key);
    return cache.get(key);
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
/*LRUCache.prototype. */const put = function(key, value) {
  if (!cache.has(key) && cache.size >= capacity) {
    // if above capacity, delete the least recently accessed. This will be the last item in the set,
    // as new items are added to the front
    const last = [...accessed][0];
    cache.delete(last);
    accessed.delete(last);
  } else if (cache.has(key)) {
    // if we already had this item, re-up it's last access time
    accessed.delete(key);
  }
  cache.set(key, value);
  accessed.add(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let result;
LRUCache(2);
get(2);
put(2, 1);
put(1, 1);
put(2, 3);
put(4, 1);
result = get(1);
result = get(2);
