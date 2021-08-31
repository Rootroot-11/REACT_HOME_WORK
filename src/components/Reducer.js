const reducer = (state, action) => {
  if (action.obj === '1' && action.diya === '+') {
    return {...state, a: state.a+10}
  } else if (action.obj === '1' && action.diya === '-') {
    return {...state, a: state.a-2}
  }
}

export default reducer;