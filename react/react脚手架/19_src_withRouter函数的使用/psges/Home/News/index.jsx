import React,{Component} from 'react'

export default class News extends Component {
  
  // 组件挂载完成
  /* componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/home/message/detail')
    }, 3000)
  } */
  
  render () {
    return (
        <ul>
          <li>news001</li>
          <li>news002</li>
          <li>news003</li>
        </ul>
    )
  }
  
}
