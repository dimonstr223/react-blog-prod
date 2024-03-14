import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema'
import { ArticleDetailsRecsSchema } from '../types/articleDetailsRecsSchema'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema
  recs: ArticleDetailsRecsSchema
}
