const _sampleDeepClone = target => {
    // base case
      if (target == null || typeof target !== 'object') {
          return target;
      }
      const cloneTarget = Array.isArray(target) ? [] : {};
      for (let key in target) {
          if (target.hasOwnProperty(key)) {
              if (target[key] && typeof target[key] == 'object') {
                // 递归
                  cloneTarget[key] = _sampleDeepClone(target[key]);
              } else {
                  // 基本数据类型
                  cloneTarget[key] = target[key];
              }
          }
      }
      return cloneTarget;
  };