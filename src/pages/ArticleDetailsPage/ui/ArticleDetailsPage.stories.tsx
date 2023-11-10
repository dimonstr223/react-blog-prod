import ArticleDetailsPage from './ArticleDetailsPage'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title    : 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes : {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof ArticleDetailsPage>

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage/>

export const Normal = Template.bind({})
Normal.args = {}
