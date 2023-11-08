import { Select } from './Select'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'shared/Select',
  component: Select
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args}></Select>

export const Primary = Template.bind({})
Primary.args = {
  label: 'Выберите значение',
  options: [
    { value: '1', content: 'Превый option' },
    { value: '2', content: 'Второй option' },
    { value: '3', content: 'Третий option' },
  ]
}
