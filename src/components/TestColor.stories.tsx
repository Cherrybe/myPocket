// src/components/TestColor.stories.tsx
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "UI Components/Color",
};
export default meta;

type Story = StoryObj;

export const ColorTest: Story = {
  render: () => (
    <>
      <div className="text-primary-600 bg-[var(--accent)] p-3xl" data-mode="dark">
        Color Test
      </div>
      <p className="body-md bg-(--primary-600)">
        This is body medium text
      </p>
      <h1 className="heading-xl text-[var(--primary-800)]">This is heading XL</h1>
    </>
  ),
};
