# FormControl

A comprehensive form field wrapper that provides labels, validation, error display, and consistent styling.

## Import

```tsx
import { FormControl } from 'anysystem-design';
```

## Basic Usage

```tsx
<FormControl name="username" label="Username">
  <Input name="username" />
</FormControl>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Field name (used for error association) |
| `label` | `string` | - | Field label text |
| `required` | `boolean` | `false` | Show required indicator |
| `description` | `string` | - | Help text below field |
| `error` | `string` | - | Error message to display |
| `children` | `ReactNode` | **required** | Form input component |
| `className` | `string` | - | Additional CSS classes |

## With Label

### Basic Label
```tsx
<FormControl name="email" label="Email Address">
  <Input name="email" type="email" />
</FormControl>
```

### Required Field
```tsx
<FormControl name="username" label="Username" required>
  <Input name="username" />
</FormControl>
```

The required prop adds a red asterisk (*) next to the label.

## With Description

```tsx
<FormControl
  name="password"
  label="Password"
  description="Must be at least 8 characters long"
  required
>
  <PasswordInput name="password" />
</FormControl>
```

## With Error

### Static Error
```tsx
<FormControl
  name="email"
  label="Email"
  error="This email is already taken"
>
  <Input name="email" type="email" />
</FormControl>
```

### Conditional Error
```tsx
const [error, setError] = useState('');

<FormControl
  name="username"
  label="Username"
  error={error}
>
  <Input
    name="username"
    onChange={(e) => {
      if (e.target.value.length < 3) {
        setError('Username must be at least 3 characters');
      } else {
        setError('');
      }
    }}
  />
</FormControl>
```

## Formik Integration

FormControl works seamlessly with Formik for automatic error handling:

```tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
  username: Yup.string().required('Username is required').min(3, 'Too short'),
  email: Yup.string().email('Invalid email').required('Email is required')
});

<Formik
  initialValues={{ username: '', email: '' }}
  validationSchema={schema}
  onSubmit={handleSubmit}
>
  {({ errors, touched }) => (
    <Form>
      <FormControl
        name="username"
        label="Username"
        required
        error={touched.username ? errors.username : ''}
      >
        <FormInput name="username" />
      </FormControl>

      <FormControl
        name="email"
        label="Email"
        required
        error={touched.email ? errors.email : ''}
      >
        <FormInput name="email" type="email" />
      </FormControl>

      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  )}
</Formik>
```

## Layout Examples

### Vertical Form
```tsx
<div className="space-y-4">
  <FormControl name="firstName" label="First Name" required>
    <Input name="firstName" />
  </FormControl>

  <FormControl name="lastName" label="Last Name" required>
    <Input name="lastName" />
  </FormControl>

  <FormControl name="email" label="Email" required>
    <Input name="email" type="email" />
  </FormControl>
</div>
```

### Grid Layout
```tsx
<div className="grid grid-cols-2 gap-4">
  <FormControl name="firstName" label="First Name" required>
    <Input name="firstName" />
  </FormControl>

  <FormControl name="lastName" label="Last Name" required>
    <Input name="lastName" />
  </FormControl>

  <FormControl name="email" label="Email" required className="col-span-2">
    <Input name="email" type="email" />
  </FormControl>
</div>
```

## With Different Input Types

### Select
```tsx
<FormControl name="country" label="Country" required>
  <Selectbox
    name="country"
    options={[
      { label: 'USA', value: 'us' },
      { label: 'Canada', value: 'ca' }
    ]}
  />
</FormControl>
```

### Textarea
```tsx
<FormControl
  name="description"
  label="Description"
  description="Provide a detailed description"
>
  <Textarea name="description" rows={5} />
</FormControl>
```

### Checkbox
```tsx
<FormControl name="terms" error={errors.terms}>
  <Checkbox name="terms">
    I agree to the terms and conditions
  </Checkbox>
</FormControl>
```

### Radio Group
```tsx
<FormControl name="gender" label="Gender" required>
  <RadioGroup
    name="gender"
    options={[
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' }
    ]}
  />
</FormControl>
```

### DatePicker
```tsx
<FormControl name="birthdate" label="Date of Birth" required>
  <DatePicker name="birthdate" />
</FormControl>
```

## Advanced Examples

### Complex Form with Validation
```tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const profileSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be less than 20 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  bio: Yup.string()
    .max(500, 'Bio must be less than 500 characters'),
  country: Yup.string()
    .required('Please select a country'),
  notifications: Yup.boolean()
});

function ProfileForm() {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        bio: '',
        country: '',
        notifications: false
      }}
      validationSchema={profileSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <FormControl
            name="username"
            label="Username"
            required
            description="This will be your public display name"
            error={touched.username ? errors.username : ''}
          >
            <FormInput name="username" />
          </FormControl>

          <FormControl
            name="email"
            label="Email"
            required
            error={touched.email ? errors.email : ''}
          >
            <FormInput name="email" type="email" />
          </FormControl>

          <FormControl
            name="bio"
            label="Bio"
            description="Tell us about yourself (max 500 characters)"
            error={touched.bio ? errors.bio : ''}
          >
            <Textarea name="bio" rows={4} />
          </FormControl>

          <FormControl
            name="country"
            label="Country"
            required
            error={touched.country ? errors.country : ''}
          >
            <Selectbox
              name="country"
              options={[
                { label: 'United States', value: 'us' },
                { label: 'Canada', value: 'ca' },
                { label: 'United Kingdom', value: 'uk' }
              ]}
            />
          </FormControl>

          <FormControl name="notifications">
            <Checkbox name="notifications">
              Send me email notifications
            </Checkbox>
          </FormControl>

          <Button type="submit" variant="primary" size="lg">
            Save Profile
          </Button>
        </Form>
      )}
    </Formik>
  );
}
```

### Multi-Step Form
```tsx
function MultiStepForm() {
  const [step, setStep] = useState(1);

  return (
    <Formik
      initialValues={{ /* ... */ }}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Step 1: Personal Info</h2>
              <FormControl name="firstName" label="First Name" required>
                <FormInput name="firstName" />
              </FormControl>
              <FormControl name="lastName" label="Last Name" required>
                <FormInput name="lastName" />
              </FormControl>
              <Button onClick={() => setStep(2)}>Next</Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Step 2: Contact Info</h2>
              <FormControl name="email" label="Email" required>
                <FormInput name="email" type="email" />
              </FormControl>
              <FormControl name="phone" label="Phone">
                <TelephoneInput name="phone" />
              </FormControl>
              <div className="flex gap-2">
                <Button onClick={() => setStep(1)}>Back</Button>
                <Button type="submit" variant="primary">Submit</Button>
              </div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
```

## Styling

### Default Styling
FormControl provides consistent spacing and layout:
- Label styling with optional required indicator
- Error messages in red
- Description text in muted color
- Proper spacing between elements

### Custom Styling
```tsx
<FormControl
  name="custom"
  label="Custom Styled"
  className="bg-gray-50 p-4 rounded-lg shadow"
>
  <Input name="custom" className={{ input: "bg-white" }} />
</FormControl>
```

## Accessibility

- Proper label association with `htmlFor`
- ARIA attributes for error states
- Required field indication
- Screen reader friendly error messages
- Keyboard navigation support

## Type Definitions

```tsx
export type FormControlProps = {
  name: string;
  label?: string;
  required?: boolean;
  description?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
};
```

## Related Components

- [Input](./Input.md) - Text input
- [Selectbox](./Selectbox.md) - Select dropdown
- [Checkbox](./Checkbox.md) - Checkbox input
- [RadioGroup](./RadioGroup.md) - Radio buttons
- [DatePicker](./DatePicker.md) - Date selection
- [Label](./Label.md) - Label component

## Best Practices

1. **Always use with Formik**: For automatic error handling and validation
2. **Consistent naming**: Use the same `name` prop for FormControl and the input component
3. **Clear labels**: Use descriptive labels that explain what the field is for
4. **Helpful descriptions**: Add descriptions for complex fields
5. **Proper validation**: Use Yup schemas for comprehensive validation
6. **Error feedback**: Show errors only after field is touched

## Notes

- FormControl automatically handles label-input association
- Error messages are displayed below the input with appropriate styling
- Required indicator is automatically added when `required={true}`
- Works with any child component, not just inputs
- Provides consistent spacing and layout across your forms
