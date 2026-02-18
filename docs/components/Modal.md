# Modal

A modal dialog component built with Headless UI, featuring smooth animations and customizable buttons.

## Import

```tsx
import { Modal, ModalHandler } from 'anysystem-design';
```

## Basic Usage

```tsx
const modalRef = useRef<ModalHandler>(null);

<>
  <Button onClick={() => modalRef.current?.show()}>
    Open Modal
  </Button>

  <Modal
    ref={modalRef}
    title="My Modal"
    buttons={[
      {
        label: "Close",
        variant: "default",
        onClick: () => modalRef.current?.hide()
      }
    ]}
  >
    <p>Modal content goes here</p>
  </Modal>
</>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Modal title displayed in header |
| `children` | `ReactNode` | **required** | Modal content |
| `open` | `boolean` | `false` | Initial open state |
| `size` | `"md" \| "lg" \| "xl" \| "full"` | `"md"` | Modal size |
| `buttons` | `ModalButton[]` | - | Array of footer buttons |
| `onClickBackdropClose` | `boolean` | `true` | Allow closing by clicking backdrop |
| `className.header` | `string` | - | Custom header styling |
| `className.footer` | `string` | - | Custom footer styling |

## Modal Sizes

```tsx
// Medium (default) - max-w-md
<Modal size="md" title="Medium Modal">
  Content
</Modal>

// Large - max-w-lg
<Modal size="lg" title="Large Modal">
  Content
</Modal>

// Extra Large - max-w-xl
<Modal size="xl" title="Extra Large Modal">
  Content
</Modal>

// Full Screen - no max width, full height
<Modal size="full" title="Full Screen Modal">
  Content
</Modal>
```

| Size | Max Width | Additional Styles |
|------|-----------|-------------------|
| `md` | `max-w-md (28rem)` | Padding: 1rem |
| `lg` | `max-w-lg (32rem)` | Padding: 1rem |
| `xl` | `max-w-xl (36rem)` | Padding: 1rem |
| `full` | `100%` | Full screen, no border radius |

## Imperative API

The Modal exposes an imperative API via ref:

```tsx
const modalRef = useRef<ModalHandler>(null);

// Show the modal
modalRef.current?.show();

// Hide the modal
modalRef.current?.hide();
```

### ModalHandler Type
```tsx
type ModalHandler = {
  show: () => void;
  hide: () => void;
};
```

## Buttons

### Button Configuration

```tsx
type ModalButton = ButtonProps & {
  label: string;
  className?: string;
  onClick: () => void;
};
```

### Single Button
```tsx
<Modal
  title="Confirm"
  buttons={[
    {
      label: "OK",
      variant: "primary",
      onClick: () => console.log("OK clicked")
    }
  ]}
>
  Content
</Modal>
```

### Multiple Buttons
```tsx
<Modal
  title="Confirm Delete"
  buttons={[
    {
      label: "Cancel",
      variant: "default",
      onClick: () => modalRef.current?.hide()
    },
    {
      label: "Delete",
      variant: "danger",
      onClick: () => handleDelete()
    }
  ]}
>
  Are you sure you want to delete this item?
</Modal>
```

### Custom Button Styling
```tsx
<Modal
  title="Custom Buttons"
  buttons={[
    {
      label: "Custom",
      variant: "primary",
      className: "bg-gradient-to-r from-blue-500 to-purple-500",
      size: "lg",
      onClick: () => console.log("Custom action")
    }
  ]}
>
  Content
</Modal>
```

## Backdrop Behavior

### Allow Backdrop Close (default)
```tsx
<Modal title="Closeable" onClickBackdropClose={true}>
  Click outside to close
</Modal>
```

### Prevent Backdrop Close
```tsx
<Modal title="Required Action" onClickBackdropClose={false}>
  You must click a button to close this modal
</Modal>
```

## Custom Styling

### Header Styling
```tsx
<Modal
  title="Custom Header"
  className={{
    header: "bg-blue-500 text-white p-4 -m-6 mb-4 rounded-t-lg"
  }}
>
  Content
</Modal>
```

### Footer Styling
```tsx
<Modal
  title="Custom Footer"
  className={{
    footer: "justify-start border-t pt-4"
  }}
  buttons={[...]}
>
  Content
</Modal>
```

## Animations

The Modal uses Headless UI transitions for smooth animations:

### Enter Animation
- Duration: 300ms
- Ease: ease-out
- From: opacity 0, scale 95%
- To: opacity 100%, scale 100%

### Leave Animation
- Duration: 200ms
- Ease: ease-in
- From: opacity 100%, scale 100%
- To: opacity 0, scale 95%

### Backdrop
- Fade in/out effect
- Dark overlay: `bg-black/25`
- Dark mode overlay: `bg-gray-500/85`

## Advanced Examples

### Confirmation Dialog
```tsx
const ConfirmDialog = ({ onConfirm }) => {
  const modalRef = useRef<ModalHandler>(null);

  return (
    <>
      <Button onClick={() => modalRef.current?.show()}>
        Delete Item
      </Button>

      <Modal
        ref={modalRef}
        title="Confirm Deletion"
        size="md"
        onClickBackdropClose={false}
        buttons={[
          {
            label: "Cancel",
            variant: "default",
            onClick: () => modalRef.current?.hide()
          },
          {
            label: "Delete",
            variant: "danger",
            onClick: () => {
              onConfirm();
              modalRef.current?.hide();
            }
          }
        ]}
      >
        <p>Are you sure you want to delete this item?</p>
        <p className="text-red-600 mt-2">This action cannot be undone.</p>
      </Modal>
    </>
  );
};
```

### Form Modal
```tsx
const FormModal = () => {
  const modalRef = useRef<ModalHandler>(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = () => {
    // Process form data
    console.log(formData);
    modalRef.current?.hide();
  };

  return (
    <>
      <Button onClick={() => modalRef.current?.show()}>
        Add User
      </Button>

      <Modal
        ref={modalRef}
        title="Add New User"
        size="lg"
        buttons={[
          {
            label: "Cancel",
            variant: "default",
            onClick: () => modalRef.current?.hide()
          },
          {
            label: "Save",
            variant: "primary",
            onClick: handleSubmit
          }
        ]}
      >
        <form className="space-y-4">
          <Input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </form>
      </Modal>
    </>
  );
};
```

### Full Screen Modal
```tsx
<Modal
  ref={modalRef}
  title="Full Screen Content"
  size="full"
  buttons={[
    {
      label: "Close",
      variant: "default",
      onClick: () => modalRef.current?.hide()
    }
  ]}
>
  <div className="h-full overflow-y-auto">
    {/* Full screen content */}
  </div>
</Modal>
```

## Dark Mode

The Modal automatically supports dark mode:

- Background: `dark:bg-gray-800`
- Title: `dark:text-white`
- Content: `dark:text-gray-400`
- Backdrop: `dark:bg-gray-500/85`

## Accessibility

- Built on Headless UI's Dialog component
- Proper ARIA attributes
- Focus trap when open
- Escape key to close (when backdrop close is enabled)
- Focus restoration on close

## Type Definitions

```tsx
export type ModalButton = ButtonProps & {
  label: string;
  className?: string;
  onClick: () => void;
};

export type ModalHandler = {
  show: () => void;
  hide: () => void;
};

export type ModalProps = {
  open?: boolean;
  size?: "md" | "lg" | "xl" | "full";
  title: string;
  children: React.ReactNode;
  buttons?: ModalButton[];
  onClickBackdropClose?: boolean;
  className?: {
    header?: string;
    footer?: string;
  };
};
```

## Related Components

- [Button](./Button.md) - Used for modal action buttons
- [FormControl](./FormControl.md) - Often used for forms within modals

## Notes

- The Modal is rendered at z-index 999 to appear above other content
- Uses React Fragments to avoid extra wrapper elements
- Button clicks automatically hide the modal unless a custom onClick is provided
- The modal maintains its own internal state but can be controlled via the imperative API
