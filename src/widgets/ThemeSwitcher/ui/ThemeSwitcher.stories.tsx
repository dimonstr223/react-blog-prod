import { ThemeSwitcher } from './ThemeSwitcher'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = args => <ThemeSwitcher {...args} />

export const Light = Template.bind({})
Light.args = {
  theme: Theme.NORMAL
}

export const Dark = Template.bind({})
Dark.args = {
  theme: Theme.DARK
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
