import React, { Component } from 'react'

const DetailData = [
    { id: '01', content: '你好，中国' },
    { id: '02', content: '你好，尚硅谷' },
    { id: '03', content: '你好，未来的自己' },
]

export default class Detail extends Component {
    
    render () {
        console.log(this.props)
        const { id, title } = this.props.match.params
        const data = DetailData.find(item => item.id === id)
        return (
                <ul>
                    <li>ID：{id}</li>
                    <li>消息：{title}</li>
                    <li>{data.content}</li>
                </ul>
        )
    }
    
}
