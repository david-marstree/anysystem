# Input

A flexible text input component with support for decorative elements, labels, and Formik integration.

## Import

```tsx
import { Input, FormInput } from 'anysystem-design';
```

## Basic Usage

```tsx
<Input name="username" placeholder="Enter username" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Input name and ID |
| `inputBefore` | `ReactNode` | - | Element displayed before input |
| `inputAfter` | `ReactNode` | - | Element displayed after input |
| `inputProps` | `InputHTMLAttributes` | - | Additional input props |
| `className.container` | `string` | - | Container div class |
| `className.input` | `string` | - | Input element class |
| `labelProps` | `LabelBaseProps` | - | Label configuration |
| ...props | `InputHTMLAttributes` | - | All standard input HTML attributes |

## Variants

### Standard Input
```tsx
<Input
  name="email"
  type="email"
  placeholder="Enter email"
/>
```

### FormInput (Formik Integration)
```tsx
import { Formik, Form } from 'formik';

<Formik initialValues={{ email: '' }} onSubmit={handleSubmit}>
  <Form>
    <FormInput
      name="email"
      type="email"
      placeholder="Enter email"
    />
  </Form>
</Formik>
```

### Textarea
```tsx
import { Textarea } from 'anysystem-design';

<Textarea
  name="description"
  rows={5}
  placeholder="Enter description"
/>
```

### InputTel (Telephone)
```tsx
import { InputTel } from 'anysystem-design';

<InputTel
  name="phone"
  placeholder="Enter phone number"
/>
```

## With Decorative Elements

### Input Before (Icon or Text)
```tsx
import { FaUser } from 'react-icons/fa';

<Input
  name="username"
  placeholder="Username"
  inputBefore={<FaUser />}
/>
```

### Input After
```tsx
<Input
  name="domain"
  placeholder="yoursite"
  inputAfter={<span>.com</span>}
/>
```

### Both Before and After
```tsx
import { FaDollar } from 'react-icons/fa';

<Input
  name="price"
  type="number"
  inputBefore={<FaDollar />}
  inputAfter={<span>USD</span>}
/>
```

## With Label

### Basic Label
```tsx
<Input
  name="username"
  placeholder="Enter username"
  labelProps={{
    label: "Username",
    required: true
  }}
/>
```

### Label with Description
```tsx
<Input
  name="email"
  type="email"
  labelProps={{
    label: "Email Address",
    description: "We'll never share your email",
    required: true
  }}
/>
```

## Formik Integration

### Basic Form
```tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required')
});

<Formik
  initialValues={{ username: '', email: '' }}
  validationSchema={validationSchema}
  onSubmit={(values) => console.log(values)}
>
  <Form>
    <FormInput
      name="username"
      labelProps={{ label: "Username", required: true }}
    />
    <FormInput
      name="email"
      type="email"
      labelProps={{ label: "Email", required: true }}
    />
    <Button type="submit" variant="primary">Submit</Button>
  </Form>
</Formik>
```

### With Validation
FormInput automatically displays Formik validation errors:

```tsx
<Formik
  initialValues={{ username: '' }}
  validate={(values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }
    return errors;
  }}
>
  <Form>
    <FormInput
      name="username"
      labelProps={{ label: "Username" }}
    />
    {/* Error will be displayed automatically */}
  </Form>
</Formik>
```

## Custom Styling

### Container Styling
```tsx
<Input
  name="custom"
  className={{
    container: "bg-gray-50 rounded-lg p-2"
  }}
/>
```

### Input Styling
```tsx
<Input
  name="custom"
  className={{
    input: "border-2 border-blue-500 focus:border-blue-700"
  }}
/>
```

### Combined Styling
```tsx
<Input
  name="custom"
  className={{
    container: "shadow-md",
    input: "text-lg font-bold"
  }}
/>
```

## Input States

### Disabled
```tsx
<Input
  name="disabled"
  value="Cannot edit"
  disabled
/>
```

### Read-Only
```tsx
<Input
  name="readonly"
  value="Can select but not edit"
  readOnly
/>
```

### With Default Value
```tsx
<Input
  name="username"
  defaultValue="john_doe"
/>
```

### Controlled
```tsx
const [value, setValue] = useState('');

<Input
  name="controlled"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

## Input Types

The Input component supports all standard HTML input types:

```tsx
<Input name="text" type="text" placeholder="Text" />
<Input name="email" type="email" placeholder="Email" />
<Input name="password" type="password" placeholder="Password" />
<Input name="number" type="number" placeholder="Number" />
<Input name="date" type="date" />
<Input name="time" type="time" />
<Input name="url" type="url" placeholder="URL" />
<Input name="tel" type="tel" placeholder="Phone" />
<Input name="search" type="search" placeholder="Search" />
```

## Advanced Examples

### Search Input
```tsx
import { FaSearch } from 'react-icons/fa';

<Input
  name="search"
  type="search"
  placeholder="Search..."
  inputBefore={<FaSearch />}
  className={{
    container: "bg-gray-100 rounded-full",
    input: "bg-transparent border-none focus:outline-none"
  }}
/>
```

### Email Input with Validation Indicator
```tsx
const [isValid, setIsValid] = useState(false);

<Input
  name="email"
  type="email"
  placeholder="Enter email"
  inputAfter={
    isValid ? <FaCheckCircle className="text-green-500" /> : null
  }
  onChange={(e) => {
    setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
  }}
/>
```

### Currency Input
```tsx
import { FaDollar } from 'react-icons/fa';

<Input
  name="amount"
  type="number"
  step="0.01"
  min="0"
  inputBefore={<FaDollar />}
  inputAfter={<span className="text-gray-500">USD</span>}
  labelProps={{
    label: "Amount",
    description: "Enter the transaction amount"
  }}
/>
```

### URL Input
```tsx
<Input
  name="website"
  type="url"
  inputBefore={<span className="text-gray-500">https://</span>}
  placeholder="example.com"
/>
```

## With FormControl

For more complex form layouts with labels and error handling:

```tsx
import { FormControl } from 'anysystem-design';

<FormControl
  name="username"
  label="Username"
  required
  error="Username is required"
>
  <Input name="username" placeholder="Enter username" />
</FormControl>
```

## Accessibility

- Proper `id` and `name` attributes for label association
- Supports all ARIA attributes
- Keyboard navigation
- Screen reader friendly
- Required field indication

## Type Definitions

```tsx
export type InputBaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  inputBefore?: React.ReactNode;
  inputAfter?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: {
    container?: string;
    input?: string;
  };
  labelProps?: LabelBaseProps;
};

export type InputProps = InputBaseProps;
```

## Related Components

- [PasswordInput](./PasswordInput.md) - Password input with visibility toggle
- [TelephoneInput](./TelephoneInput.md) - Telephone number input with formatting
- [FormControl](./FormControl.md) - Form field wrapper with label and validation
- [Label](./Label.md) - Label component

## Notes

- The Input uses `forwardRef` to allow ref forwarding to the underlying input element
- `inputBefore` and `inputAfter` elements are styled with `btn-before` and `btn-after` classes
- When using with Formik, prefer `FormInput` for automatic error handling
- The component uses `tailwind-merge` for intelligent class merging
