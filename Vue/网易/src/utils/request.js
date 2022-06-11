import axios from 'axios'
import config from "@/utils/config";

export default (url, params = {}, method = 'GET') => {
    return new Promise((resolve, reject) => {
        axios.request({
            url: config.host + url,
            params,
            method,
            header: {
                cookie:localStorage.getItem("cookie")?localStorage.getItem("cookie"):'',
            }
        }).then(
            res => {
                if (params.isLogin) {
                    localStorage.setItem("cookies", res.data.cookie,);r
                }
                resolve(res.data)
            },
            (err) => {
                console.log(err)
                reject(err)
            }
        )
    })
}
