import { combineReducers } from '@reduxjs/toolkit'
import { articleDetailsRecReducer } from './articleDetailsRecsSlice'
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice'

export const articleDetailsPageReducer = combineReducers({
  comments: articleDetailsCommentsReducer,
  recs: articleDetailsRecReducer
})
