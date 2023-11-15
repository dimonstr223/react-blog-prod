import { Code } from './Code'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title    : 'shared/Code',
  component: Code,
  argTypes : {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Normal = Template.bind({})
Normal.args = {
  text: `export default {
  title    : 'pages/Code',
  component: Code,
  argTypes : {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = () => <Code/>`
}
