import { Page } from './Page'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title    : 'pages/Page',
  component: Page,
  argTypes : {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const Normal = Template.bind({})
Normal.args = {}
