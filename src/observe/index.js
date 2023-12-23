export function observer(data) {
  if (typeof data !== 'object' || data === null) {
    return data
  }

  new Observer(data)
}

function defineReactive(data, key, value) {
  // 递归
  observer(value)

  Object.defineProperty(data, key, {
    get() {
      console.log('获取')
      return value
    },
    set(newVal) {
      if (value === newVal) {
        return
      }
      value = newVal
      observer(newVal)
    }
  })
}

class Observer {
  constructor(value) {
    this.walk(value)
  }

  walk(data) {
    const keys = Object.keys(data)

    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i]
      const value = data[key]

      defineReactive(data, key, value)
    }
  }
}