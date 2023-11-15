import { CommentCard } from './CommentCard'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title    : 'pages/CommentCard',
  component: CommentCard,
  argTypes : {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
