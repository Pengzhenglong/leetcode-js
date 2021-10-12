### JavaScript中sort（）方法

sort()方法主要是用于对数组进行排序，默认情况下该方法是将数组元素转换成字符串，然后按照ASC码进行排序，这个大家都能理解，但如果数组元素是一个Object呢，转不了字符串，难道不能进行排序？答案当然是否定的,那么我们就来详细探讨下sort()方法的使用。

语法：arrayObject.sort(sortby)；参数sortby可选。规定排序顺序。必须是函数。

sort() 方法用于对数组的元素进行排序。如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。

比较函数应该具有两个参数 a 和 b，其返回值如下：

1. 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。

2. 若 a 等于 b，则返回 0。

3. 若 a 大于 b，则返回一个大于 0 的值。

用js中的sort()方法排序数字

```
<script>
  var arr = [23,12,1,34,116,8,18,37,56,50];
  alert(arr.sort();
</script>
返回：[1, 116, 12, 18, 23, 34, 37, 50, 56, 8]
```

上面的代码没有按照数值的大小对数字进行排序，要实现这一点，就必须使用一个排序函数：

```

<script>
  var arr = [23,12,1,34,116,8,18,37,56,50];
  function sequence(a,b){
    if (a>b) {
      return 1;
    }else if(a<b){
      return -1
    }else{
      return 0;
    }
  }
  console.log(arr.sort(sequence));
</script>

返回：[1, 8, 12, 18, 23, 34, 37, 50, 56, 116] (没有问题)
```

当然也可以把排序函数写到sort()方法里面：

```
<script>
  var arr = [23,12,1,34,116,8,18,37,56,50];
  var arr2 = arr.sort(function(a,b){
     if (a>b) {
      return 1;
    }else if(a<b){
      return -1
    }else{
      return 0;
    }  
  })
  console.log(arr2);
</script>
```

返回：[1, 8, 12, 18, 23, 34, 37, 50, 56, 116] (也没有问题)

也可以简化成这样的写法：
因为：若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。

若 a 等于 b，则返回 0。

若 a 大于 b，则返回一个大于 0 的值，类似于冒泡排序法。

```
<script>
  var arr = [23,12,1,34,116,8,18,37,56,50];
  function sequence(a,b){
    return a - b;
  }
  console.log(arr.sort(sequence));
</script>
```

返回：[1, 8, 12, 18, 23, 34, 37, 50, 56, 116] (也是正确的)。

原理解析：

```
<script type="text/javascript">
    function sortNumber(a,b){return a - b}
    var arr = new Array(3)
    arr[0] = "10";
    arr[1] = "5";
    arr[2] = "4";
    document.write(arr + "<br />");
    document.write(arr.sort(sortNumber));
</script>
```

原本是10,5,4的排列就会变成4,5,10.这里说明一下这个过程，明明sortNumber应该是有两个参数，但是我们在调用时却一个参数都没有，怎么进行比较啊？这里是这样的，当arr从第一个数开始调用sort时，10前面是没有数与它比较的，所以就到第二个，就是5，这时10就会与5比较，于是就会调用sortNumber并将10和5传进去，这是sort（）的特性。

关系字母顺序进行排序 就简单多了，直接用sort()方法就OK了：

```
<script>
  var arr = ['fanda','banner','find','zoom','index','width','javascript'];
  console.log(arr.sort());
</script>
返回：["banner", "fanda", "find", "index", "javascript", "width", "zoom"]
```
