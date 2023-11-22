import { CommentList } from './CommentList'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title    : 'entities/CommentList',
  component: CommentList,
  argTypes : {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

const comments = [
  {
    id: '1',
    text: 'comment1',
    user: { id: '1', username: 'User1' }
  },
  {
    id: '2',
    text: 'comment2',
    user: { id: '1', username: 'User1' }
  }
]

export const Normal = Template.bind({})
Normal.args = {
  comments
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}

export const Error = Template.bind({})
Error.args = {
  comments: []
}


