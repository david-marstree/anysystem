import type { Meta, StoryObj } from "@storybook/react-vite";
import Modal from "../../lib/components/Modal/Modal";
import type { ModalButton } from "../../lib/components/Modal/Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean", description: "是否顯示 Modal" },
    size: { control: { type: "radio" }, options: ["md", "lg", "xl", "full"], description: "彈窗尺寸" },
    title: { control: "text", description: "標題" },
    children: { control: "text", description: "內容 (children)" },
    onClickBackdropClose: { control: "boolean", description: "點擊遮罩是否關閉" },
    buttons: { control: "object", description: "底部按鈕陣列 (ModalButton[])" },
    className: { control: "object", description: "自訂 header/footer 樣式" },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  args: {
    open: true,
    title: "標準彈窗",
    children: "這是彈窗內容。你可以在這裡放任何 React 元素。",
    size: "md",
    onClickBackdropClose: true,
    buttons: [
      {
        label: "確定",
        variant: "primary",
        onClick: () => alert("點擊了確定")
      },
      {
        label: "取消",
        onClick: () => alert("點擊了取消"),
        className: "btn-cancel"
      }
    ] as ModalButton[],
  },
};
