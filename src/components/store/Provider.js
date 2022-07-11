import { useReducer } from 'react'
import Context from './Context'
import reducer,{innitialState} from './reducer'


function Provider({children}){
    const [state,dispatch] = useReducer( reducer, innitialState)
    return (
        <Context.Provider value={[state,dispatch]}>
           
           {children}
        </Context.Provider>
    )
}
export default Provider