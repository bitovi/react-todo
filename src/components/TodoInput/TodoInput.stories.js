import React from 'react'
import TodoInput from './TodoInput'
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'TodoInput',
  decorators: [withKnobs],
  component: TodoInput,
}

export const TodoInputStory = () =>  (
  <TodoInput
    initialValue={text('initialValue', 'take out the garbage')}
    onEnter={action('onEnter')}
    onBlur={action('onBlur')}
  />
)


