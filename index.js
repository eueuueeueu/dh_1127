// // 如何定义一个字符串
// // 1.通过字符串字面量来定义[常见]
// let s1 = 'index'
// // 2.通过构造函数的方式来定义[罕见]
// let s2 = new String('index')
// // 字符串的特性
// // 特性一：任何一个字符串都具备长度(length)属性  该属性表达了当前字符串由多少个字符组成
// let s3 = 'hello,world!'  // 长度为12
// let s4 = 'hello world!'  // 长度为12包含空格
// console.log(s3.length); //12
// console.log(s4.length); //12


// let s5 = ''  // 空字符串,长度为0,在逻辑运算中的逻辑值为假

// // 特性三：字符串的不可变性


// // 特性四：针对英文字母的大小写转换
// // 属性 数据.属性名
// // 方法 数据.属性名()
// var s9 = 'hello world'
// var s10 = s9.toUpperCase()
// console.log(s10);  //HELLO WORLD

// 练习：把string变成String
// let s1 = 'string'
// let s2 = ''
// for (let i = 0; i < s1.length; i++) {
//   if (i === 0) {
//     s2 += s1[0].toUpperCase()
//   } else {
//     s2 += s1[i]
//   }
// }
// console.log(s2);
// console.log(s1[0].toUpperCase() + s1.substring(1, s1.length));

// slice切片
// let s15 = 'how are you?'
// console.log(s15.slice(4));  //are you?
// console.log(s15.slice(4, 7));  //are
// console.log(s15.slice(-8, -5));  //are


// let s21 = '[Object Object]'
// let s22 = '[Object Array]'
// let s23 = '[Object Regexp]'
// let s24 = '[Object Date]'
// let s25 = '[Object A]'
// // 需求：取到后面一截,不包含']'
// let s211 = s21.substring(8, 14)
// let s212 = s22.substring(8, 13)
// let s213 = s23.substring(8, 14)
// let s214 = s24.substring(8, 12)
// let s215 = s25.substring(8, 9)
// console.log(s211, s212, s213, s214, s215);  //Object Array Regexp Date A

// let s221 = s21.slice(8, -1)
// let s222 = s22.slice(8, -1)
// let s223 = s23.slice(8, -1)
// let s224 = s24.slice(8, -1)
// let s225 = s25.slice(8, -1)
// console.log(s221, s222, s223, s224, s225);  //Object Array Regexp Date A


// trim 去除字符串首尾的空格
// let s27 = '             HA  HA                       ';
// console.log(s27.trim());  //HA  HA

// let start = 0
// let end = s27.length - 1
// while (s27[start] === ' ') {
//   start++
// }
// while (s27[end] === ' ') {
//   end--
// }
// console.log(start, end + 1);
// console.log(s27.slice(start, end + 1));


// split 字符串转数组的方法,按分隔符来分成数组
// let s29 = '192.168.68.178'
// console.log(s29.split('.'));  //['192', '168', '68', '178']
// console.log(s29.split(''));  //['1', '9', '2', '.', '1', '6', '8', '.', '6', '8', '.', '1', '7', '8']
// let s30 = 'WebClass/11.27/code/index.html'
// console.log(s30.split('/'));  //['WebClass', '11.27', 'code', 'index.html']
// let s31 = 'abc_def_ghi_xyz'
// console.log(s31.split('_'));  //['abc', 'def', 'ghi', 'xyz']

// // 如何定义数组
// // 1、通过字面量去定义数组
// let arr1 = [1, 2, 3, 4, 5, 6]
// // 数组的成员的个数 就是数组的长度 用length属性获取
// console.log(arr1.length); //6
// // 数组的成员可以为任意类型
// var arr2 = [1, '2', true, undefined, null, []]
// // 获取数组的第一个元素
// var arr2_first_item = arr2[0]  //1
// // 获取数组的最后一个元素
// var arr2_last_item = arr2[arr2.length - 1]  //

// 当数组中一个元素都不存在时，它是空数组
// 当数组中某些位置不提供任何数据的情况下 就会形成稀疏数组
// let arr3 = [1, , 3, , 4]
// console.log(arr3);
// let arr4 = ['abc', false, null, NaN]
// for (let i = 0; i < arr4.length; i++) {
//   console.log(arr4[i]);
// }


// // 练习：下划线命名法转换为驼峰命名法/帕斯卡命名法
// let msg = 'abc_def_ghi'
// let result = ''
// let msg2 = msg.split('_')
// console.log(msg2);
// for (let i = 0; i < msg2.length; i++) {
//   let temp = ''
//   for (let j = 0; j < msg2[i].length; j++) {
//     if (j === 0) {
//       temp += msg2[i][j].toUpperCase()
//     } else {
//       temp += msg2[i][j]
//     }
//   }
//   result += temp
// }
// console.log(result);


// 数组的方法
// 放数组中增加成员(4种)
// 1.通过索引赋值的方式
// let arr7 = []
// arr7[0] = 123
// arr7[1] = 234
// arr7[2] = 345
// console.log(arr7);  //[123,234,345]

// let arr8 = [1, 2, 3, 4, 5, 6, 6, 4, 3, 2, 4, 3, 2, 3, 43, 2, 3]
// arr8[arr8.length] = null
// arr8[arr8.length] = null
// arr8[arr8.length] = null
// arr8[arr8.length] = null
// arr8[arr8.length] = null
// console.log(arr8);  //[1, 2, 3, 4, 5, 6, 6, 4, 3, 2, 4, 3, 2, 3, 43, 2, 3, null, null, null, null, null]

// 2.通过push在数组尾部追加元素
// let arr9 = [1, 2, 3]
// arr9.push('我是通过push追加的成员')
// console.log(arr9);

// // 3.通过unshift在数组的头部追加元素
// arr9.unshift('666')
// console.log(arr9);

// 4.

let str = 'javaScript html AJAX'
console.log(str.lastIndexOf('A'));  //16
console.log(str.indexOf('N'));  //-1