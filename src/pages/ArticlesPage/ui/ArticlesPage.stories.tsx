import ArticlesPage from './ArticlesPage'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title    : 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes : {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage/>

export const Normal = Template.bind({})
Normal.args = {}
