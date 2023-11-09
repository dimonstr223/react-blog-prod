import ProfilePage from './ProfilePage'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import AvatarImg from 'shared/assets/tests/avatar.jpg'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args: object) => <ProfilePage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
  profile: {
    form: {
      first: 'Dimonstr',
      lastname: '223',
      age: 22,
      currency: Currency.USD,
      country: Country.China,
      city: 'Shanghai',
      username: 'admin',
      avatar: AvatarImg,
    }
  }
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      first: 'Dimonstr',
      lastname: '223',
      age: 22,
      currency: Currency.USD,
      country: Country.China,
      city: 'Shanghai',
      username: 'admin',
      avatar: AvatarImg,
    }
  }
})]
