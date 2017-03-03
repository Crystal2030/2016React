import React from 'react';
//Route IndexToute
//Router是顶层的，Route是在Router一条一条的配置，IndexRoute是默认展示的那一个
import { Route, IndexRoute } from 'react-router';
//container容器级组件
//component基础组件/展示型组件
import { App, Home, Profile } from '../containers';

export default (
  <Route path="/" component={App}>
    {/* 新加了profile路由 :后面是参数params */}
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
)
