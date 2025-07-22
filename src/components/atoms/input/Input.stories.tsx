import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { useArgs } from "@storybook/preview-api";
import { InputProps } from "./Input.types";

const meta: Meta<InputProps> = {
  title: "UI Components/Input",
  component: Input,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<InputProps>

const Template = (args: InputProps): React.JSX.Element => {
  const [, updateArgs] = useArgs();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    updateArgs({ value: e.target.value });
    args.onChange?.(e);
  };

  return <Input {...args} onChange={handleChange} />;
};

export const Default: Story = {
  render: Template,
  args: {
    placholder: "Placeholder",
    type: "text",
    helperText: "Helper text",
    errorText: "",
    withIcon: false,
    icon: null,
    disabled: false,
  },
};

export const WithHelperText: Story = {
  render: Template,
  args: {
    ...Default.args,
    helperText: "Helper text",
  },
};

export const WithErrorText: Story = {
  render: Template,
  args: {
    ...Default.args,
    errorText: "Error text",
  },
};

export const WithIcon: Story = {
  render: Template,
  args: {
    ...Default.args,
    withIcon: true,
    icon: <span>🫠</span>,
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    ...Default.args,
    disabled: true,
  },
};