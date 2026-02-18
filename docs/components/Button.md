# Button

A customizable button component with multiple variants, sizes, and hover effects.

## Import

```tsx
import { Button } from 'anysystem-design';
```

## Basic Usage

```tsx
<Button>Click Me</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "primary" \| "danger"` | `"default"` | Button color variant |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | Button size |
| `rounded` | `boolean` | `false` | Use fully rounded corners |
| `disabled` | `boolean` | `false` | Disable the button |
| `className` | `string` | - | Additional CSS classes |
| ...props | `ButtonHTMLAttributes` | - | All standard button HTML attributes |

## Variants

### Default
```tsx
<Button variant="default">Default Button</Button>
```
Gray background with white text.

### Primary
```tsx
<Button variant="primary">Primary Button</Button>
```
Primary color (customizable via Tailwind) with white text.

### Danger
```tsx
<Button variant="danger">Delete</Button>
```
Red background with white text, typically used for destructive actions.

## Sizes

```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

| Size | Padding | Text Size |
|------|---------|-----------|
| `xs` | `px-4 py-2` | `text-xs` |
| `sm` | `px-4 py-2` | `text-sm` |
| `md` | `px-4 py-2` | `text-base` |
| `lg` | `px-6 py-3` | `text-base` |

## Rounded

```tsx
<Button rounded>Rounded Button</Button>
<Button rounded variant="primary">Rounded Primary</Button>
```

Applies `rounded-full` class for fully rounded corners.

## States

### Disabled
```tsx
<Button disabled>Disabled Button</Button>
```

Disabled buttons have:
- `cursor-not-allowed` cursor
- 50% opacity
- No hover effects

### Hover
All buttons have a smooth hover animation that creates a white overlay effect with transition.

## Advanced Usage

### With Icons
```tsx
import { FaSearch } from 'react-icons/fa';

<Button variant="primary">
  <FaSearch className="mr-2" />
  Search
</Button>
```

### With Ref
```tsx
const buttonRef = useRef<HTMLButtonElement>(null);

<Button ref={buttonRef} onClick={() => buttonRef.current?.focus()}>
  Focus Me
</Button>
```

### Custom Styling
```tsx
<Button
  variant="primary"
  className="shadow-lg hover:shadow-xl"
>
  Custom Styled
</Button>
```

## Styling Details

The Button uses `tailwind-merge` to intelligently merge Tailwind classes, allowing you to override default styles:

```tsx
<Button className="bg-blue-500">
  This will override the variant background
</Button>
```

## Accessibility

- Supports all standard ARIA attributes
- Proper disabled state handling
- Keyboard accessible by default
- Focus visible states

## Examples

### Form Submit Button
```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" variant="primary" size="lg">
    Submit Form
  </Button>
</form>
```

### Button Group
```tsx
<div className="flex gap-2">
  <Button variant="default">Cancel</Button>
  <Button variant="primary">Save</Button>
  <Button variant="danger">Delete</Button>
</div>
```

### Loading State
```tsx
const [loading, setLoading] = useState(false);

<Button
  variant="primary"
  disabled={loading}
  onClick={() => {
    setLoading(true);
    // perform action
  }}
>
  {loading ? 'Loading...' : 'Submit'}
</Button>
```

## Type Definition

```tsx
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary" | "danger";
  size?: "xs" | "sm" | "md" | "lg";
  rounded?: boolean;
};
```

## Related Components

- [Modal](./Modal.md) - Uses Button in modal footers
- [FormControl](./FormControl.md) - Often used together in forms

## Notes

- The button uses `forwardRef` to allow ref forwarding
- Hover effects use CSS `::after` pseudo-element for smooth animations
- All color variants can be customized via Tailwind configuration
