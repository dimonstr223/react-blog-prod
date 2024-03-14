import { combineReducers } from '@reduxjs/toolkit'
import { articleDetailsRecReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsRecsSlice'
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentSlice'

export const articleDetailsPageReducer = combineReducers({
  comments: articleDetailsCommentsReducer,
  recs: articleDetailsRecReducer
})
