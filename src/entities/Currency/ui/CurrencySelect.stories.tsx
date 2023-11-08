import { CurrencySelect } from './CurrencySelect'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'entities/Select',
  component: CurrencySelect
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args}></CurrencySelect>

export const Primary = Template.bind({})
Primary.args = {}
