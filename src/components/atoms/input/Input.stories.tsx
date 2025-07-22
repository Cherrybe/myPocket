import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { InputProps } from "./Input.types";

const meta: Meta<InputProps> = {
  title: "UI Components/Input",
  component: Input,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<InputProps>

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
    placholder: "Placeholder",
    type: "text",
    helperText: "Helper text",
    errorText: "Error text",
    withIcon: false,
    icon: null,
    disabled: false
  },
};

export const WithHelperText: Story = {
  args: {
    ...Default.args,
    helperText: "Helper text",
  }
}

export const WithErrorText: Story = {
  args: {
    ...Default.args,
    errorText: "Error text",
  }
}

export const WithIcon: Story = {
  args: {
    ...Default.args,
    withIcon: true,
    icon: <span>🫠</span>
  }
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  }
}