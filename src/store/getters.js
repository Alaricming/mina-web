export default {
  sqrt(state) {
    return state.count * state.count
  },
  addNum: (state,getters)=>(n)=>{
      return state.count + n
  }
}
