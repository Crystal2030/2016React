##redux的顶层API 5个
    ```
        export {
          createStore,
          combineReducers,
          bindActionCreators,
          applyMiddleware,
          compose
        }
    
    ```
    
        ```
          
            let store = createStore(reducer);
            
            store:数据仓库
            
            API:
            store = {
                dispatch,
                subscribe,
                getState,
                replaceReducer,
                [$$observable]: observable
              }
            
        
        
        1. action 动作 指令  告诉机器人要做什么 描述事情的
        2. reducer 具体的事情由reducer完成  实施者
        3. store  数据仓库 唯一的 单一数据源  dispatch 分发 调度 更新 数据
        
        ? 仓库里数据更新了， 怎么反应到我们的view的更新  react-redux
        
        ```
        
        //react 组件里面最顶层的数据从哪里来
        1. ajax http setState ui展示view
        2. redux管理我们应用的数据 store数据仓库 组件数据的来源 仓库怎么和我们的顶层的组件链接
        3. 连接是什么意思 仓库的数据更新 自动更新view 
        4. DOM MVVM V VM 单向数据传递
##react-redux
     ```
     Provider component
     
     Provider.propTypes = {
       store: _storeShape2["default"].isRequired,
       children: _react.PropTypes.element.isRequired
     };
     
     <Provider store = {store}
        <RootComponent/>
     </Provider>
     ```
     
     
      ```
          connect API
          
          function connect(
              mapStateToProps, 
              mapDispatchToProps,
              mergeProps, 
              options={}){
            ...
          }
          
          
          ...
          
          return function wrapWithConnect(WrappedComponent){}
          
          
          
          1.
          let tmp =  connect (() => {}, ()={})
          
          let ConnectedComp = tmp(MyComponent);
          
          ConnectedComp：
          
          ConnectedComp: store 仓库里面的数据都可以通过this.props拿到，state tree如果很多，而我的组件只需要2条，那么无用的，多余的都会传过来，造成diff，性能消耗
          
          2.
          //返回回来的还是一个组件
          //这是一个连接之后的组件
          export default connect(state => state, () => {})(MyComponent);
          
          ```