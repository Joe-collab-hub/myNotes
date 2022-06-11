import React, { Component } from 'react';
import './index.css';

export default class List extends Component {
    
    render () {
        const { users, isFirst, isLoading, err } = this.props;
        return (
                <div className="row">
                    {
                        isFirst ? <h2>欢迎使用，输入关键词，随后展示数据</h2> :
                                isLoading ? <h2>Loading......</h2> :
                                        err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                                users.map((item) => {
                                                    return (
                                                            <div className="card" key={item.id}>
                                                                <a href={item.html_url} rel="noreferrer" target="_blank">
                                                                    <img src={item.avatar_url} style={{ width: '100px' }} alt="avatar"/>
                                                                    <p className="card-text">{item.login}</p>
                                                                </a>
                                                            </div>
                                                    );
                                                })
                    }
                </div>
        );
    }
    
}
