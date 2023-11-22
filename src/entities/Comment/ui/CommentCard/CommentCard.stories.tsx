import { CommentCard } from './CommentCard'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title    : 'entities/CommentCard',
  component: CommentCard,
  argTypes : {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
  comment: {
    id: '1',
    text: 'comment1',
    user: { id: '1', username: 'User1' }
  }
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
