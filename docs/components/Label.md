# Label

A flexible label component with support for error messages, multiple layout types, and variants.

## Import

```tsx
import { Label } from 'anysystem-design';
import type { LabelBaseProps } from 'anysystem-design';
```

## Basic Usage

```tsx
<Label label="Username" htmlFor="username">
  <input id="username" type="text" />
</Label>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | **required** | Label text or content |
| `children` | `ReactNode` | **required** | Input element |
| `htmlFor` | `string` | - | Associated input ID |
| `isError` | `boolean` | `false` | Show error state |
| `errorMessage` | `string` | - | Error message to display |
| `type` | `"border" \| "normal" \| "horizontal"` | `"border"` | Layout type |
| `variant` | `"sm" \| "md"` | `"md"` | Size variant |
| `className` | `string` | - | Additional CSS classes |

## Label Types

### Border Type (default)
Floating label that appears inside a border:

```tsx
<Label label="Email" htmlFor="email" type="border">
  <input id="email" type="email" />
</Label>
```

### Normal Type
Traditional label above input:

```tsx
<Label label="Password" htmlFor="password" type="normal">
  <input id="password" type="password" />
</Label>
```

### Horizontal Type
Label and input side by side:

```tsx
<Label label="Remember me" htmlFor="remember" type="horizontal">
  <input id="remember" type="checkbox" />
</Label>
```

## Examples

### Basic Label
```tsx
<Label label="Full Name" htmlFor="name">
  <input id="name" type="text" />
</Label>
```

### With Error
```tsx
<Label
  label="Email"
  htmlFor="email"
  isError={true}
  errorMessage="Invalid email address"
>
  <input id="email" type="email" className="border-red-500" />
</Label>
```

### Small Variant
```tsx
<Label label="Username" htmlFor="username" variant="sm">
  <input id="username" type="text" className="text-sm" />
</Label>
```

### Horizontal Layout
```tsx
<Label label="Subscribe to newsletter" type="horizontal">
  <input type="checkbox" />
</Label>
```

### Normal Layout
```tsx
<Label label="Password" type="normal">
  <input type="password" />
</Label>
```

## With Different Input Types

### Text Input
```tsx
<Label label="First Name" htmlFor="firstName">
  <input id="firstName" type="text" className="w-full p-2 border rounded" />
</Label>
```

### Textarea
```tsx
<Label label="Description" htmlFor="description">
  <textarea id="description" rows={4} className="w-full p-2 border rounded" />
</Label>
```

### Select
```tsx
<Label label="Country" htmlFor="country">
  <select id="country" className="w-full p-2 border rounded">
    <option>Select...</option>
    <option>USA</option>
    <option>Canada</option>
  </select>
</Label>
```

### Checkbox
```tsx
<Label label="Agree to terms" type="horizontal">
  <input type="checkbox" />
</Label>
```

## Complete Form Example

```tsx
import { useState } from 'react';
import { Label, Button } from 'anysystem-design';

function ContactForm() {
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};
    if (!data.name) newErrors.name = 'Name is required';
    if (!data.email) newErrors.email = 'Email is required';
    if (!data.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const newErrors = validate(data);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', data);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <Label
        label="Name"
        htmlFor="name"
        type="normal"
        isError={!!errors.name}
        errorMessage={errors.name}
      >
        <input
          id="name"
          name="name"
          type="text"
          className="w-full p-2 border rounded"
        />
      </Label>

      <Label
        label="Email"
        htmlFor="email"
        type="normal"
        isError={!!errors.email}
        errorMessage={errors.email}
      >
        <input
          id="email"
          name="email"
          type="email"
          className="w-full p-2 border rounded"
        />
      </Label>

      <Label
        label="Message"
        htmlFor="message"
        type="normal"
        isError={!!errors.message}
        errorMessage={errors.message}
      >
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full p-2 border rounded"
        />
      </Label>

      <Button type="submit" variant="primary">Send Message</Button>
    </form>
  );
}
```

## Error Display

### Error Icon
When `isError={true}`, displays alert icon (FiAlertCircle) with error message:

```tsx
<Label
  label="Password"
  htmlFor="password"
  isError={true}
  errorMessage="Password must be at least 8 characters"
>
  <input id="password" type="password" />
</Label>
```

### Error Styling
```css
- Text color: text-red-600
- Icon: FiAlertCircle
- Display: Flex with gap-1
- Font size: text-sm
```

## Layout Types Comparison

### Border Layout
```tsx
<Label label="Email" type="border">
  <input type="email" />
</Label>
```
- Label floats inside border
- Border: `border border-gray-400`
- Rounded corners
- Label initially hidden/transparent

### Normal Layout
```tsx
<Label label="Email" type="normal">
  <input type="email" />
</Label>
```
- Label above input
- Traditional form layout
- No border wrapper
- Label always visible

### Horizontal Layout
```tsx
<Label label="Remember me" type="horizontal">
  <input type="checkbox" />
</Label>
```
- Label and input side by side
- Flexbox row layout
- Gap between elements
- Good for checkboxes

## Variants

### Medium (default)
```tsx
<Label label="Field" variant="md">
  <input type="text" />
</Label>
```

### Small
```tsx
<Label label="Field" variant="sm">
  <input type="text" className="text-sm" />
</Label>
```

## Styling

### Label Styling
```css
- Font weight: font-semibold
- Font size: text-sm
- Margin bottom: mb-1
```

### Border Type Specific
```css
- Border: border border-gray-400
- Border radius: rounded
- Label color: text-gray-600
- Dark mode label: dark:text-white
```

### Horizontal Type Specific
```css
- Layout: flex-row
- Gap: gap-2
- Alignment: items-center justify-center
```

### Error State
```css
- Class added: error
- Error text color: text-red-600
- Error icon: w-4
```

## Dark Mode

The Label component supports dark mode:
- Label text: `dark:text-white`
- Maintains readability in dark themes

## Accessibility

- Proper `htmlFor` association with input ID
- Error messages announced to screen readers
- Semantic HTML structure
- Label text always accessible
- Error icon with text description

## Custom Styling

```tsx
<Label
  label="Custom Field"
  className="bg-gray-50 p-4 rounded-lg"
  type="normal"
>
  <input type="text" className="w-full" />
</Label>
```

## Advanced Examples

### With Icon
```tsx
import { FaUser } from 'react-icons/fa';

<Label
  label={
    <div className="flex items-center gap-2">
      <FaUser />
      <span>Username</span>
    </div>
  }
  type="normal"
>
  <input type="text" />
</Label>
```

### Conditional Error
```tsx
function ValidatedInput() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validate = (val) => {
    if (val.length < 3) {
      setError('Minimum 3 characters required');
    } else {
      setError('');
    }
  };

  return (
    <Label
      label="Username"
      isError={!!error}
      errorMessage={error}
      type="normal"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          validate(e.target.value);
        }}
        className={`w-full p-2 border rounded ${error ? 'border-red-500' : ''}`}
      />
    </Label>
  );
}
```

### With Required Indicator
```tsx
<Label
  label={
    <span>
      Email <span className="text-red-500">*</span>
    </span>
  }
  type="normal"
>
  <input type="email" required />
</Label>
```

### Multiple Inputs Group
```tsx
<div className="space-y-4">
  <Label label="First Name" type="normal">
    <input type="text" className="w-full p-2 border rounded" />
  </Label>

  <Label label="Last Name" type="normal">
    <input type="text" className="w-full p-2 border rounded" />
  </Label>

  <Label label="Email" type="normal">
    <input type="email" className="w-full p-2 border rounded" />
  </Label>
</div>
```

## Type Definitions

```tsx
export type LabelBaseProps = {
  label: React.ReactNode;
  className?: string;
  htmlFor?: string;
  isError?: boolean;
  errorMessage?: string;
  type?: "border" | "normal" | "horizontal";
  variant?: "sm" | "md";
};

export type LabelProps = LabelBaseProps & {
  children: React.ReactNode;
};
```

## Related Components

- [Input](./Input.md) - Text input with label support
- [FormControl](./FormControl.md) - More comprehensive form wrapper
- [Checkbox](./Checkbox.md) - Checkbox with label
- [RadioGroup](./RadioGroup.md) - Radio buttons with labels

## Common Use Cases

- Form fields
- Input validation
- Error display
- Accessibility compliance
- Consistent form layouts
- Custom form designs

## Best Practices

1. **Always use htmlFor**: Associate labels with inputs
2. **Clear text**: Use descriptive label text
3. **Error feedback**: Show validation errors clearly
4. **Consistent types**: Use same type throughout form
5. **Required indicators**: Mark required fields
6. **Accessibility**: Ensure proper association
7. **Responsive**: Test on different screen sizes

## Notes

- The `Label` component wraps inputs with proper label association
- Error messages appear below the input with an alert icon
- Border type creates a floating label effect
- Horizontal type is ideal for checkboxes and radios
- Uses `tailwind-merge` for class management
- Supports both controlled and uncontrolled inputs
- Error icon is from `react-icons/fi` (FiAlertCircle)
