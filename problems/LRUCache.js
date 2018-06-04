let cache;
let capacity;
/**
 * @param {number} cap
 */
const LRUCache = function(cap) {
  capacity = cap;
  cache = new Map()
};

/**
 * @param {number} key
 * @return {number}
 */
/*LRUCache.prototype.*/const get = function(key) {
  if (cache.has(key)) {
    updateLRU(key);
    return cache.get(key).value;
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
  updateLRU(key);
  cache.set(key, {age: 0, value});
  if (cache.size > capacity) {
    let oldest = 0;
    let key;
    for(let [k, val] of cache) {
      if (val.age > oldest) {
        oldest = val.age;
        key = k;
      }
    }
    if (key) {
      cache.delete(key);
    } else {
      console.log('key to delete was null');
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const updateLRU = function(key) {
  for(let [k, val] of cache) {
    if (k === key) {
      val.age = 0;
    } else {
      val.age += 1;
    }
  }
};

let result;
LRUCache(2);
get(2);
put(2, 1);
put(1, 1);
result = get(2);
put(4, 1);
result = get(1);
result = get(2);
put(4, 4);
result = get(1);
result = get(3);
result = get(4);
