import { ArticleViewSelector } from './ArticleViewSelector'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title    : 'pages/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes : {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof ArticleViewSelector>

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {}
