import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign]
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const ButtonBasic = () => <Button onClick={action('Validated')}>Validated</Button> 

ButtonBasic.story = {
    name: 'Button basic',
    parameters: {
       design: {
          type: 'figma',
          url: 'https://www.figma.com/file/8RQyaZMzX69cDcejSonfEb/Projet-Hetic-SCHOOL?node-id=12%3A128'
       }
    }
 }
