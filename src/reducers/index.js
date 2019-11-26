import { combineReducers, } from 'redux'
import form from './form'
import posts from './posts'
import postViewPage from './postViewPage'
import postsFilter from './postsFilter'


 export default combineReducers({
     form,
     postViewPage,
     posts,
     postsFilter
})
