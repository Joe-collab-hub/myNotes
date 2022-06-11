// 单独导出，导入需要借用解构赋值
// 导入语法：   import { a, b } from "路径";
export function a() {
    console.log('我是add中的a');
}
export function b() {
    console.log('我是add中的b函数');
}

const x = 1;
const y = 2;
export default {
    x,
    y
}