import { ProfileCard } from './ProfileCard'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import AvatarImg from 'shared/assets/tests/avatar.jpg'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: {
    first: 'Dimonstr',
    lastname: '223',
    age: 22,
    currency: Currency.USD,
    country: Country.China,
    city: 'Shanghai',
    username: 'admin',
    avatar: AvatarImg,
  },
  readonly: true
}

export const IsLoading = Template.bind({})
IsLoading.args = {
  isLoading: true
}

export const WithError = Template.bind({})
WithError.args = {
  error: 'error'
}
