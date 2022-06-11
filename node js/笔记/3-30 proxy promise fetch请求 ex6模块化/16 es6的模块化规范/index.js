// 默认导入
import myMathFn from './math.js';
// 单独导入
// import { a, b } from './add.js';
// 对导入的数据重命名
// 将导入的a重命名为x
// import { a as x, b } from './add.js';

// 同时导入 默认导出的数据和单独导出的数据
// import obj, { a, b } from './add.js';

// 全部导入
import * as addObj from './add.js';

myMathFn();



console.log(addObj);
const { a, b, default: obj } = addObj;
console.log(a);
console.log(b);
console.log(obj);
