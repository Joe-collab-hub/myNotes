(async function () {
    // 尝试请求酷我音乐
    // 如果访问当前服务器，路径可以直接以 / 开头，表示要访问当前服务器
    const res = await fetch('/kuwo/api/www/classify/playlist/getRcmPlayList?pn=1&rn=30&order=new&httpsStatus=1&reqId=0fed3c40-b0ce-11ec-8534-af24b921d746');
    const data = await res.json();
    console.log(data);
})();
