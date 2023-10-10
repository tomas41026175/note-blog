# useReducer

- 可配合useContext達成簡易版Redux
- 有三個參數 : useReducer(reducer, initialState, init);
- 
```
[狀態，指派]
const [state, dispatch] = useReducer(reducer, initialState, init);
    dispatch = obj
    ex : dispath({type:"decrement"}) , dispath({type:"increment"})


reducer = func = (state,action){
    switch(action.type){
        default:
        return{count:0}
    }
}
initialState = obj = 
    const initialState = {
      count: 0,
    };
```