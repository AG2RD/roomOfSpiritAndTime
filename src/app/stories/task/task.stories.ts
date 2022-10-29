import { Meta, Story } from '@storybook/angular/types-6-0';

import { TaskComponent } from './task.component';

// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Task',
  component: TaskComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TaskComponent> = (args: TaskComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  label: 'primary ',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'small',
};
