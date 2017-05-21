/*
@desc:主要用于对store变更时的通用处理
*/
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import settings from './settings';
import reducers from './reducers';

export default function configureStore() {
    let web = combineReducers(reducers);
    /*这里设计一个显式的state中心，初始化所有的state*/
    const store = createStore( web, settings, applyMiddleware(thunk));
    /*返回store*/
    return store ;
};
