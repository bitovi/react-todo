import React from 'react'
import TodoItem from './TodoItem'
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'TodoItem',
  component: TodoItem,
  decorators: [withKnobs],
}

export const TodoItemStory = () => (
  <TodoItem
    todo={{text: "Take out garbage", completed: false}}
    onToggle={action('onToggle')}
    onDestroy={action('onDestroy')}
    onEdit={action('onEdit')}
    editing={boolean('editing', false)}
    onSave={action('onSave')}
    onCancel={action('onCancel')}
  />
)
