import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AddItemForm, AddItemFormPropsType} from './AddItemForm';
import {action} from '@storybook/addon-actions'
import Task from './Task';
import AppWithRedux from './AppWithRedux';
import { ReduxStoreProviderDecorator } from './stories/decorators/ReduxStoreProviderDecorator';


export default {
    title: 'TODOLIST/AppWithRedux',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]

} as ComponentMeta<typeof AppWithRedux>;

const AppWithReduxTemplate: ComponentStory<typeof AppWithRedux> = (args) => <AppWithRedux />;

export const AppWithReduxStory = AppWithReduxTemplate.bind({});


AppWithReduxStory.args = {
};


