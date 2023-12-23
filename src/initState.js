import { observer } from './observe/index'

export function initState(vm) {
  const ops = vm.$options

  if (ops.props) {
    initProps()
  }

  if (ops.data) {
    initData(vm)
  }

  if (ops.computed) {
    initComputed()
  }

  if (ops.watch) {
    initWatch()
  }

  if (ops.methods) {
    initMethods()
  }

  function initProps() { }
  /**
   * data 数据初始化，分2种情况
   * data 为函数(组件)
   * data 为对象(根实例)
   */
  function initData(vm) {
    let { data } = vm.$options
    data = vm._data = typeof data === 'function' ? data.call(vm) : data

    // 开始正式的数据劫持
    observer(data)

  }
  function initComputed() { }
  function initWatch() { }
  function initMethods() { }
}