# PasswordInput

Password input component with visibility toggle functionality.

## Import

```tsx
import { PasswordInput, FormPasswordInput } from 'anysystem-design';
```

## Basic Usage

```tsx
<PasswordInput name="password" placeholder="Enter password" />
```

## Props

Inherits all props from [Input](./Input.md) component.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Input name |
| `placeholder` | `string` | - | Placeholder text |
| `className` | `object` | - | Custom styling |
| `labelProps` | `LabelBaseProps` | - | Label configuration |
| ...inputProps | - | - | All standard input HTML attributes |

## Features

- **Visibility Toggle**: Eye icon to show/hide password
- **Secure by Default**: Type is 'password' by default
- **Formik Integration**: FormPasswordInput variant available
- **Customizable**: Supports all Input component features

## Examples

### Basic Password Input
```tsx
<PasswordInput
  name="password"
  placeholder="Enter your password"
/>
```

### With Label
```tsx
<PasswordInput
  name="password"
  placeholder="Enter password"
  labelProps={{
    label: "Password",
    required: true,
    description: "Must be at least 8 characters"
  }}
/>
```

### With Formik
```tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
});

<Formik
  initialValues={{ password: '' }}
  validationSchema={schema}
  onSubmit={handleSubmit}
>
  {({ errors, touched }) => (
    <Form>
      <FormControl
        name="password"
        label="Password"
        required
        error={touched.password ? errors.password : ''}
      >
        <FormPasswordInput name="password" />
      </FormControl>
      <Button type="submit">Submit</Button>
    </Form>
  )}
</Formik>
```

### Password Confirmation
```tsx
<Formik
  initialValues={{ password: '', confirmPassword: '' }}
  validationSchema={Yup.object({
    password: Yup.string()
      .min(8, 'Too short')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required')
  })}
  onSubmit={handleSubmit}
>
  <Form className="space-y-4">
    <FormControl name="password" label="Password" required>
      <FormPasswordInput name="password" />
    </FormControl>

    <FormControl name="confirmPassword" label="Confirm Password" required>
      <FormPasswordInput name="confirmPassword" />
    </FormControl>

    <Button type="submit" variant="primary">Create Account</Button>
  </Form>
</Formik>
```

### Password Strength Indicator
```tsx
function PasswordWithStrength() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);

  const calculateStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[^a-zA-Z\d]/.test(pwd)) score++;
    return score;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(calculateStrength(value));
  };

  return (
    <div>
      <PasswordInput
        name="password"
        value={password}
        onChange={handleChange}
        labelProps={{
          label: "Password",
          required: true
        }}
      />

      <div className="mt-2 flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded ${
              i <= strength
                ? strength < 2
                  ? 'bg-red-500'
                  : strength < 3
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-1">
        {strength === 0 && 'Enter a password'}
        {strength === 1 && 'Weak password'}
        {strength === 2 && 'Fair password'}
        {strength === 3 && 'Good password'}
        {strength === 4 && 'Strong password'}
      </p>
    </div>
  );
}
```

## Related Components

- [Input](./Input.md) - Base input component
- [FormControl](./FormControl.md) - Form field wrapper
