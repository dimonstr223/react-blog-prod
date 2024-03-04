import { ArticlesPageFilters } from './ArticlesPageFilters'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title    : 'pages/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes : {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof ArticlesPageFilters>

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />

export const Normal = Template.bind({})
Normal.args = {}
