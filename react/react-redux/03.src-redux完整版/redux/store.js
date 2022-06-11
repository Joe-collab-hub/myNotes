/*
	该文件专门用于创建store，整个应用只有一个store
 */
// 引入createStore，专门创建redux中最为核心的store对象
import { createStore,applyMiddleware } from 'redux';
// 引入count组件 服务reducer
import reducer from './count_seducer';

// 引入thunk中间件
import thunk from 'redux-thunk';

export default  createStore(reducer,applyMiddleware(thunk));
