import Button from "../components/button/Button";

export default {
  title: 'Button',
  component: Button,
  // add onClick to the args
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  size: 'md',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  size: 'md',
  backgroundColor: '#F0F0F0',
  color: '#333333',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large',
  size: 'lg',
};

export const LargeBlueRed = Template.bind({});
LargeBlueRed.args = {
  label: 'Large blue button with dark red text',
  size: 'lg',
  color: '#9E180B',
};

export const Tiny = Template.bind({});
Tiny.args = {
  label: "Tiny",
  size: 'sm'
}
