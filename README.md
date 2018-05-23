# Redux

## 关于 store 更新触发页面 render

    😂 Store 会把两个参数传入 reducer： 当前的 state 和 action，所以不能直接修改state，redux会比较新旧state的值，直接修改state会导致store内部的也发生改变，那么新旧state也就没有发生变化。页面就不会重新渲染。