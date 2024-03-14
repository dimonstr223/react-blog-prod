import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsRecsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading
export const getArticleDetailsRecsError = (state: StateSchema) => state.articleDetailsPage?.recs?.error
