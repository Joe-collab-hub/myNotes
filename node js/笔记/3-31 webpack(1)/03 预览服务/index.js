import $ from 'jquery';
console.log('我将会自动导入');
const aab = () => {
    console.log(123);
}
aab();
$('body').text('jquery使用成功').css({
    background: 'red'
});