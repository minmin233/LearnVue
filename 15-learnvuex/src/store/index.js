import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    counter:100,
    students:[
      {id:110,name:'minmin',age:18},
      { id: 111, name: 'fenfen', age: 19 },
      { id: 112, name: 'jiejie', age: 20 },
    ],
    info:{
      name:'haha',
      age:8,
    }
  },
  //同步 修改state唯一的途径
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    /* incrementCount(state,count) {
      state.counter +=count
    }, */
    incrementCount(state, payload) {
      state.counter += payload.count
    },
    addStudent(state,stu) {
      state.students.push(stu)
    },
    updateInfo(state){
      state.info.name='heihei'
    }

  },
  actions:{
    aupdateInfo(context){
      setTimeout(() => {
        context.commit('updateInfo')
      }, 1000);
    }
  },
  getters:{
    powerCounter(state){
      return state.counter * state.counter
    },
    more19stu(state) {
      return state.students.filter(s => {
        return s.age >= 19
      })
    },
    more19stuL(state) {
      return state.students.filter(s => {
        return s.age >= 19
      }).length
    },
    more19stuLength(state,getters) {
      return getters.more19stu.length
    },
    moreAgestu(state){
      return function(age){
        return state.students.filter(s=> s.age>age)
      }
    }
  },
  modules:{

  }
})

export default store
