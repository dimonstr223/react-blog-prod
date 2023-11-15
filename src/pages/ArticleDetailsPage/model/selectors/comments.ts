import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleCommnetsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading

export const getArticleCommnetsError = (state: StateSchema) => state.articleDetailsComments?.error
