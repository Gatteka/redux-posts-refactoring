import { combineReducers, } from 'redux'
import form from './form'
import posts from './posts'
import postViewPage from './postViewPage'


 export default combineReducers({
     form,
     postViewPage,
     posts
})
