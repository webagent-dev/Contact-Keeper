import { createStore } from 'redux'
import rootReducer from '../services/reducers/RootReducer'

const store = createStore(rootReducer)

export default store