// src/components/TestColor.stories.tsx
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Test/Color",
};
export default meta;

type Story = StoryObj;

export const ColorTest: Story = {
  render: () => (
    <div className="text-primary-600 bg-base-white p-4" data-mode="dark">
      Color Test
    </div>
  ),
};
