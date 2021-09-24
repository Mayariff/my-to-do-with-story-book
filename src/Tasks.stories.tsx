import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AddItemForm, AddItemFormPropsType} from './AddItemForm';
import {action} from '@storybook/addon-actions'
import Task from './Task';
import { ReduxStoreProviderDecorator } from './stories/decorators/ReduxStoreProviderDecorator';
import { v1 } from 'uuid';

const RemoveTaskCallback = action('RemoveTask clicked')
const ChangeTaskStatusCallback = action('ChangeTaskStatus clicked')
const changeTaskTitleCallback = action('changeTaskTitle clicked')

export default {
    title: 'TODOLIST/Task',
    component: Task,
    argTypes:{
        RemoveTask: RemoveTaskCallback,
        ChangeTaskStatus: ChangeTaskStatusCallback,
        changeTaskTitle: changeTaskTitleCallback,
    },
    decorators: [ReduxStoreProviderDecorator],
} as ComponentMeta<typeof Task>;

const TaskTemplate: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStory = TaskTemplate.bind({});
TaskIsDoneStory.args ={

};

export const TaskIsNOTDoneStory = TaskTemplate.bind({});

TaskIsNOTDoneStory.args = {
    todolistID: '12',
    taskID: 'string21',
};


