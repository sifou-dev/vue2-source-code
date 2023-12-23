const vm = new Vue({
  el: '#app',
  data() {
    return {
      name: '李四',
      a: {
        b: 2
      }
    }
  },
  methods: {

  }
})
vm._data.a = { c: 3 }

console.log('@:vm', vm)