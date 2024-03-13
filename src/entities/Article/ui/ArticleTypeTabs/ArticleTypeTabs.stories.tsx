import { ArticleTypeTabs } from './ArticleTypeTabs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title    : 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes : {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof ArticleTypeTabs>

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />

export const Normal = Template.bind({})
Normal.args = {}
