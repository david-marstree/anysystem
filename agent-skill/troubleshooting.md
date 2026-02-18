# Troubleshooting Guide

Common issues and solutions when using AnySystem Design.

## Installation Issues

### "Cannot find module 'anysystem-design'"

**Problem**: Package not installed or not found.

**Solution**:
```bash
npm install anysystem-design
# or
yarn add anysystem-design
```

### Peer dependency warnings

**Problem**: Missing peer dependencies.

**Solution**: Install all required peer dependencies:
```bash
npm install react react-dom tailwind-merge formik yup moment react-icons react-router-dom @headlessui/react @floating-ui/react @aliakbarazizi/headless-datepicker @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities @xyflow/react
```

## Styling Issues

### Components not styled / No CSS applied

**Problem**: Tailwind not configured to include library files.

**Solution**: Update `tailwind.config.js`:
```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/anysystem-design/**/*.{js,ts,jsx,tsx}" // Add this!
  ],
  // ...
}
```

### Custom styles not working

**Problem**: Component's internal styles override custom classes.

**Solution**: Components use `tailwind-merge` which intelligently merges classes. Put more specific classes last:
```tsx
// ✅ Good
<Button className="bg-blue-500">Custom</Button>

// ❌ Won't work as expected
<Button className="bg-blue-500" variant="primary" />
// variant="primary" adds bg-primary-600 which overrides
```

## Component Issues

### "AppProvider is required"

**Problem**: Components used without AppProvider wrapper.

**Solution**: Wrap your app:
```tsx
import { AppProvider } from 'anysystem-design';

function App() {
  return (
    <AppProvider appName="My App">
      {/* Your components */}
    </AppProvider>
  );
}
```

### Formik form not updating

**Problem**: Using regular Input instead of FormInput with Formik.

**Solution**: Use Form* variants:
```tsx
// ❌ Wrong
<Formik>
  <Form>
    <Input name="email" />
  </Form>
</Formik>

// ✅ Correct
<Formik>
  <Form>
    <FormInput name="email" />
  </Form>
</Formik>
```

### Modal not showing

**Problem**: Trying to control Modal via props instead of imperative API.

**Solution**: Use ref and imperative methods:
```tsx
// ❌ Wrong
const [open, setOpen] = useState(false);
<Modal open={open} /> // No open prop

// ✅ Correct
const modalRef = useRef<ModalHandler>(null);
<Modal ref={modalRef} />
<Button onClick={() => modalRef.current?.show()}>Open</Button>
```

### DatePicker value issues

**Problem**: Passing Date object instead of Unix timestamp string.

**Solution**: Use Unix timestamps (seconds) as strings:
```tsx
// ❌ Wrong
<DatePicker value={new Date()} />
<DatePicker value={Date.now()} />

// ✅ Correct
const timestamp = Math.floor(Date.now() / 1000).toString();
<DatePicker value={timestamp} onChange={setTimestamp} />
```

### TelephoneInput format errors

**Problem**: Wrong value format.

**Solution**: Use "prefix-number" format:
```tsx
// ✅ Correct format
"+1-5551234567"
"+44-2071234567"

// ❌ Wrong
"5551234567"
"+1 555 123 4567"
```

## TypeScript Issues

### Type errors with generic components

**Problem**: TypeScript can't infer generic types.

**Solution**: Explicitly provide type parameter:
```tsx
// If getting type errors
<DataTable<User>
  data={users}
  fields={userFields}
/>

<AutoComplete<SelectOption>
  options={options}
/>
```

### "Cannot find namespace 'JSX'"

**Problem**: Old TypeScript version or misconfiguration.

**Solution**: Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "types": ["react", "react-dom"]
  }
}
```

## Layout Issues

### SideMenu not toggling

**Problem**: menuRef not passed or not set up correctly.

**Solution**: Create and pass ref properly:
```tsx
const menuRef = useRef<SideMenuHandler>(null);

<SideMenuLayout
  menuRef={menuRef}  // Pass to layout
  header={<Navbar menuRef={menuRef} />}  // Pass to navbar
  menu={<NavList list={items} />}
>
  <Content />
</SideMenuLayout>
```

### NavList items not highlighting

**Problem**: location prop not passed.

**Solution**: Pass React Router location:
```tsx
import { useLocation } from 'react-router-dom';

function SideMenu() {
  const location = useLocation();

  return <NavList list={items} location={location} />;
}
```

## Data Table Issues

### Table not showing data

**Problem**: Incorrect field configuration.

**Solution**: Ensure field keys match data properties:
```tsx
// Data
const users = [{ id: 1, name: 'John', email: 'john@example.com' }];

// ✅ Correct fields
const fields = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' }
];

// ❌ Wrong (typo in key)
const fields = [
  { key: 'userId', label: 'ID' } // doesn't match 'id'
];
```

### Column chooser not persisting

**Problem**: No name prop provided.

**Solution**: Provide unique name for localStorage:
```tsx
<DataTable
  name="users-table"  // Required for persistence
  data={users}
  fields={fields}
  chooseFieldable
/>
```

## Form Validation Issues

### Yup validation not working

**Problem**: Schema doesn't match field names.

**Solution**: Ensure schema keys match input names:
```tsx
// Schema
const schema = Yup.object({
  email: Yup.string().required(),
  password: Yup.string().required()
});

// Form fields must have matching names
<FormInput name="email" />  // ✅ matches
<FormInput name="password" />  // ✅ matches
<FormInput name="pass" />  // ❌ doesn't match
```

### Errors not displaying

**Problem**: Not passing error to FormControl or not checking touched.

**Solution**: Pass both touched and error:
```tsx
<Formik>
  {({ errors, touched }) => (
    <Form>
      <FormControl
        name="email"
        error={touched.email ? errors.email : ''}  // Check touched!
      >
        <FormInput name="email" />
      </FormControl>
    </Form>
  )}
</Formik>
```

## Performance Issues

### Slow re-renders

**Problem**: Creating new objects/arrays in render.

**Solution**: Memoize data:
```tsx
// ❌ Bad - new array every render
<DataTable
  fields={[{ key: 'id', label: 'ID' }]}
/>

// ✅ Good - memoized
const fields = useMemo(() => [
  { key: 'id', label: 'ID' }
], []);

<DataTable fields={fields} />
```

## Build Issues

### Build fails with TypeScript errors

**Problem**: Strict type checking failing.

**Solution**: Check the specific errors. Common fixes:
1. Add missing type annotations
2. Update to latest library version
3. Check peer dependency versions match

### Storybook build warnings

**Problem**: Large chunk size warnings.

**Solution**: These are normal for Storybook builds. To reduce:
```js
// .storybook/main.js
export default {
  // ...
  viteFinal: (config) => {
    config.build = {
      ...config.build,
      chunkSizeWarningLimit: 1000
    };
    return config;
  }
};
```

## Runtime Errors

### "Element type is invalid"

**Problem**: Incorrect import or component name.

**Solution**: Check import statement:
```tsx
// ✅ Correct
import { Button } from 'anysystem-design';

// ❌ Wrong
import Button from 'anysystem-design/Button';
import { button } from 'anysystem-design';  // lowercase
```

### "Cannot read property of undefined"

**Problem**: Accessing nested properties without checks.

**Solution**: Add optional chaining:
```tsx
// ❌ May crash
onClick={modalRef.current.show}

// ✅ Safe
onClick={() => modalRef.current?.show()}
```

## Common Mistakes

1. **Not using Form* variants with Formik**
   - Use FormInput, FormCheckbox, etc. with Formik

2. **Forgetting AppProvider**
   - All components need AppProvider wrapper

3. **Wrong DatePicker value format**
   - Use Unix timestamps (seconds) as strings

4. **Not passing menuRef to both Layout and Navbar**
   - SideMenuLayout needs ref in multiple places

5. **Creating components inside render**
   - Define components outside or memoize

## Getting Help

If you can't find a solution here:

1. Check component documentation in `docs/components/`
2. Look at Storybook examples
3. Search GitHub issues
4. Create a new issue with:
   - Component name
   - Code example
   - Expected vs actual behavior
   - Error messages

## Quick Fixes Checklist

- [ ] AppProvider wrapped around app?
- [ ] All peer dependencies installed?
- [ ] Tailwind configured with library path?
- [ ] Using Form* variants with Formik?
- [ ] DatePicker values are Unix timestamps (strings)?
- [ ] Modal using ref API?
- [ ] Field names match validation schema?
- [ ] menuRef passed to both Layout and Navbar?

---

**For AI Assistants**: Use this guide to help users debug issues. Always ask for specific error messages and code examples.
