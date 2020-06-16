import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, radios, boolean, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import { Button } from '../components/Button'
import { intent, variant, size } from '../components/Button/Button.types';

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({
  info: {
    text: `
      Button component to trigger event.
    `,
  }
})
// Intent
const intentLabel = 'Intents'
const intentOptions: Record<string, intent> = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  error: 'error',
}
const intentDefaultValue = 'primary'

// Variant
const variantLabel = 'Variants'
const variantOptions: Record<string, variant> = {
  solid: 'solid',
  outline: 'outline',
  ghost: 'ghost',
}
const variantDefaultValue = 'solid'

// Size
const sizeLabel = 'Sizes'
const sizeOptions: Record<string, size> = {
  default: 'default',
  large: 'large',
  small: 'small'
}
const sizeDefaultValue = 'default'

// Icon
const iconLabel = 'Icon'
const iconOptions = {
  user: 'user',
  search: 'search',
  shoppingCart: 'shopping--cart',
  close: 'close'
}
const iconDefaultValue = 'user'

const groupId = 'BUTTON_PROPS'

stories.add('Basic', () => {
  return (
    <Button
      size={radios(sizeLabel, sizeOptions, sizeDefaultValue, groupId)}
      variant={radios(variantLabel, variantOptions, variantDefaultValue, groupId)}
      intent={radios(intentLabel, intentOptions, intentDefaultValue, groupId)}
      loading={boolean('Loading', false, groupId)}
    >{text('Text', 'Text', groupId)}
    </Button>
  )
})

stories.add('withIcon', () => {
  return (
    <Button
      size={radios(sizeLabel, sizeOptions, sizeDefaultValue, groupId)}
      variant={radios(variantLabel, variantOptions, variantDefaultValue, groupId)}
      icon={select(iconLabel, iconOptions, iconDefaultValue, groupId)}
      intent={radios(intentLabel, intentOptions, intentDefaultValue, groupId)}
      loading={boolean('Loading', false, groupId)}
    >{text('Text', 'Text', groupId)}
    </Button>
  )
})

stories.add('onlyIcon', () => {
  return (
    <Button
      intent={radios(intentLabel, intentOptions, intentDefaultValue, groupId)}
      size={radios(sizeLabel, sizeOptions, sizeDefaultValue, groupId)}
      variant="icon"
      icon={select(iconLabel, iconOptions, iconDefaultValue, groupId)}
    />
  )
})