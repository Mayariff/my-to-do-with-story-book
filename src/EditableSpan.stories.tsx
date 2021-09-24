import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddItemForm, AddItemFormPropsType } from './AddItemForm';
import {action} from '@storybook/addon-actions'
import { EditableSpan } from './EditableSpan';


export default {
    title: 'TODOLIST/EditableSpan',
    component: EditableSpan,
    argTypes: {
        changeTitle: {
            description:'value EditableSpan changed',
        },
        value: {
            defaultValue: "HTML",
            description:'Start value EditableSpan',
        }
    },
} as ComponentMeta<typeof EditableSpan>;

const EditableSpanTemplate: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args} />;

export const EditableSpanFormStory = EditableSpanTemplate.bind({});
EditableSpanFormStory.args = {
    changeTitle: action('value EditableSpan changed')
}

