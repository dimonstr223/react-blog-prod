import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque harum quasi quia. Beatae corporis, cumque dicta dolor dolores ducimus et mollitia nihil perferendis quae, repellendus, tempora! Consequuntur, nemo soluta?\n',
  isOpen: true
}

export const Dark = Template.bind({})
Dark.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque harum quasi quia. Beatae corporis, cumque dicta dolor dolores ducimus et mollitia nihil perferendis quae, repellendus, tempora! Consequuntur, nemo soluta?\n',
  isOpen: true
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
