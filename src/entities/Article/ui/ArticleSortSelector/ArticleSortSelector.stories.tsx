import { ArticleSortSelector } from './ArticleSortSelector'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title    : 'pages/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes : {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof ArticleSortSelector>

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {}
