# Checkbox

Checkbox component with Formik integration and custom styling.

## Import

```tsx
import { Checkbox, FormCheckbox } from 'anysystem-design';
```

## Basic Usage

```tsx
<Checkbox name="terms">
  I agree to the terms and conditions
</Checkbox>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Checkbox name |
| `checked` | `boolean` | - | Controlled checked state |
| `onChange` | `(checked: boolean) => void` | - | Change handler |
| `disabled` | `boolean` | `false` | Disable checkbox |
| `children` | `ReactNode` | - | Label text/content |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Basic Checkbox
```tsx
const [checked, setChecked] = useState(false);

<Checkbox
  name="subscribe"
  checked={checked}
  onChange={setChecked}
>
  Subscribe to newsletter
</Checkbox>
```

### Disabled State
```tsx
<Checkbox name="disabled" disabled>
  This option is disabled
</Checkbox>
```

### With Formik
```tsx
import { Formik, Form } from 'formik';

<Formik initialValues={{ terms: false }} onSubmit={handleSubmit}>
  <Form>
    <FormCheckbox name="terms">
      I agree to the terms and conditions
    </FormCheckbox>
    <FormCheckbox name="newsletter">
      Subscribe to newsletter
    </FormCheckbox>
    <Button type="submit">Submit</Button>
  </Form>
</Formik>
```

### Multiple Checkboxes
```tsx
const [preferences, setPreferences] = useState({
  email: false,
  sms: false,
  push: false
});

<div className="space-y-2">
  <Checkbox
    name="email"
    checked={preferences.email}
    onChange={(checked) => setPreferences({ ...preferences, email: checked })}
  >
    Email notifications
  </Checkbox>

  <Checkbox
    name="sms"
    checked={preferences.sms}
    onChange={(checked) => setPreferences({ ...preferences, sms: checked })}
  >
    SMS notifications
  </Checkbox>

  <Checkbox
    name="push"
    checked={preferences.push}
    onChange={(checked) => setPreferences({ ...preferences, push: checked })}
  >
    Push notifications
  </Checkbox>
</div>
```

### With Rich Content
```tsx
<Checkbox name="premium">
  <div>
    <strong>Premium Plan</strong>
    <p className="text-sm text-gray-500">
      Get access to all premium features for $9.99/month
    </p>
  </div>
</Checkbox>
```

## Related Components

- [Switch](./Switch.md) - Toggle switch alternative
- [RadioGroup](./RadioGroup.md) - For mutually exclusive options
- [FormControl](./FormControl.md) - Form field wrapper
