import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title',
  text: 'Description DescriptionDescription Description'
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Title'
}

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'Description DescriptionDescription Description'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title',
  text: 'Description DescriptionDescription Description'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Title'
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]


export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'Description DescriptionDescription Description'
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({})
Error.args = {
  title: 'Title',
  text: 'Description DescriptionDescription Description',
  theme: TextTheme.ERROR
}
