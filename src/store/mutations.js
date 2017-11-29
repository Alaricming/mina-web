export default {
  add(state) {
    state.count++
  },
  reduce(state) {
    state.count--
  },
  refineUserId(state,id){
    state.userId = id
  }
}
