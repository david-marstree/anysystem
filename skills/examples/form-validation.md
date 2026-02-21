---
id: form-validation
aliases: []
tags: []
---

# Form with Validation Example

Complete example of a form with Formik and Yup validation.

## Code

```tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormInput,
  FormPasswordInput,
  FormSelectbox,
  FormCheckbox,
  Button
} from 'anysystem-design';

// Validation schema
const signupSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Too short')
    .max(20, 'Too long')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be 8+ characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
  country: Yup.string()
    .required('Please select a country'),
  terms: Yup.boolean()
    .oneOf([true], 'You must accept')
});

// Component
function SignupForm() {
  const countries = [
    { id: 'us', label: 'United States', value: 'us' },
    { id: 'uk', label: 'United Kingdom', value: 'uk' },
    { id: 'ca', label: 'Canada', value: 'ca' }
  ];

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form data:', values);
    // API call here
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          country: '',
          terms: false
        }}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-4">
            <FormControl
              name="username"
              label="Username"
              required
              description="3-20 characters"
              error={touched.username ? errors.username : ''}
            >
              <FormInput name="username" placeholder="johndoe" />
            </FormControl>

            <FormControl
              name="email"
              label="Email"
              required
              error={touched.email ? errors.email : ''}
            >
              <FormInput name="email" type="email" placeholder="john@example.com" />
            </FormControl>

            <FormControl
              name="password"
              label="Password"
              required
              description="Minimum 8 characters"
              error={touched.password ? errors.password : ''}
            >
              <FormPasswordInput name="password" />
            </FormControl>

            <FormControl
              name="confirmPassword"
              label="Confirm Password"
              required
              error={touched.confirmPassword ? errors.confirmPassword : ''}
            >
              <FormPasswordInput name="confirmPassword" />
            </FormControl>

            <FormControl
              name="country"
              label="Country"
              required
              error={touched.country ? errors.country : ''}
            >
              <FormSelectbox
                name="country"
                options={countries}
                placeholder="Select your country"
              />
            </FormControl>

            <FormControl
              name="terms"
              error={touched.terms ? errors.terms : ''}
            >
              <FormCheckbox name="terms">
                I agree to the terms and conditions
              </FormCheckbox>
            </FormControl>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating account...' : 'Create Account'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignupForm;
```

## Key Points

1. **Validation Schema**: Define with Yup, matches field names
2. **Form* Components**: Use FormInput, FormPasswordInput, etc. with Formik
3. **Error Display**: Pass `touched.field ? errors.field : ''` to FormControl
4. **Submit State**: Use `isSubmitting` for button state
5. **FormControl**: Wraps inputs for consistent layout and error display

## Variations

### With Auto-save

```tsx
<Formik
  enableReinitialize
  initialValues={savedValues}
  onSubmit={handleSubmit}
>
  {({ values }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        localStorage.setItem('formDraft', JSON.stringify(values));
      }, 1000);
      return () => clearTimeout(timer);
    }, [values]);

    return <Form>{/* fields */}</Form>;
  }}
</Formik>
```

### Multi-Step Form

```tsx
function MultiStepForm() {
  const [step, setStep] = useState(1);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        {step === 1 && <Step1Fields />}
        {step === 2 && <Step2Fields />}
        {step === 3 && <Step3Fields />}

        <div className="flex gap-2">
          {step > 1 && (
            <Button onClick={() => setStep(step - 1)}>Back</Button>
          )}
          {step < 3 ? (
            <Button onClick={() => setStep(step + 1)}>Next</Button>
          ) : (
            <Button type="submit" variant="primary">Submit</Button>
          )}
        </div>
      </Form>
    </Formik>
  );
}
```

## Related

- [FormControl Documentation](../docs/components/FormControl.md)
- [Input Documentation](../docs/components/Input.md)
- [Button Documentation](../docs/components/Button.md)
