var isValid = function (s) {
  const stack = [];
  const map = new Map();

  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else {
      if (stack.pop() !== s[i]) {
        return false;
      }
    }
  }
  if (stack.length !== null) {
    return false;
  }
  return true;
};
