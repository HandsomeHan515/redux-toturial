# Redux

## 关于 store 更新触发页面 render

    😂 Store 会把两个参数传入 reducer： 当前的 state 和 action，所以不能直接修改state，redux会比较新旧state的值，直接修改state会导致store内部的也发生改变，那么新旧state也就没有发生变化。页面就不会重新渲染。

### shallowEqual

```shallowEqual.js
const hasOwn = Object.prototype.hasOwnProperty

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y
  } else {
    return x !== x && y !== y
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  console.log(keysA, keysB);

  if (keysA.length !== keysB.length) return false

  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) ||
        !is(objA[keysA[i]], objB[keysA[i]])) {
      return false
    }
  }

  return true
}

const a = [
  {id: 1, name: '111'},
  {id: 2, name: '222'},
  {id: 3, name: '333'},
  {id: 4, name: '444'}
]

const b = [
  {id: 1, name: '111'},
  {id: 2, name: '333'},
  {id: 3, name: '333'},
  {id: 4, name: '444'}
]

shallowEqual(a, b);
```