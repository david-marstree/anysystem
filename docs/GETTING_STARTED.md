# Getting Started with AnySystem Design

This guide will help you quickly get started with AnySystem Design in your React application.

## Installation

### 1. Install the Package

```bash
npm install anysystem-design
```

### 2. Install Peer Dependencies

```bash
npm install react react-dom tailwind-merge formik yup moment react-icons react-router-dom @headlessui/react @floating-ui/react @aliakbarazizi/headless-datepicker @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities @xyflow/react
```

### 3. Setup Tailwind CSS

AnySystem Design requires Tailwind CSS. If you haven't set it up yet:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/anysystem-design/**/*.{js,ts,jsx,tsx}", // Important!
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // Default primary
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}
```

Add Tailwind directives to your CSS file (e.g., `src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Basic Setup

### 1. Wrap Your App with AppProvider

All components require the `AppProvider` context wrapper. Add it to your root component:

```tsx
// src/main.tsx or src/App.tsx
import { AppProvider } from 'anysystem-design';

function App() {
  return (
    <AppProvider appName="My Application">
      {/* Your app components */}
    </AppProvider>
  );
}

export default App;
```

### 2. Import and Use Components

```tsx
import { Button, Input, FormControl } from 'anysystem-design';

function MyComponent() {
  return (
    <div className="p-4">
      <FormControl name="email" label="Email" required>
        <Input name="email" type="email" placeholder="Enter email" />
      </FormControl>

      <Button variant="primary" className="mt-4">
        Submit
      </Button>
    </div>
  );
}
```

## Your First Form

Here's a complete example of a simple form using Formik:

```tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  FormInput,
  FormSelectbox,
  FormCheckbox
} from 'anysystem-design';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  country: Yup.string().required('Please select a country'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms')
});

function SignupForm() {
  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          country: '',
          terms: false
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <FormControl
              name="name"
              label="Full Name"
              required
              error={touched.name ? errors.name : ''}
            >
              <FormInput name="name" placeholder="John Doe" />
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
              name="country"
              label="Country"
              required
              error={touched.country ? errors.country : ''}
            >
              <FormSelectbox
                name="country"
                options={[
                  { label: 'United States', value: 'us' },
                  { label: 'Canada', value: 'ca' },
                  { label: 'United Kingdom', value: 'uk' }
                ]}
                placeholder="Select your country"
              />
            </FormControl>

            <FormControl name="terms" error={touched.terms ? errors.terms : ''}>
              <FormCheckbox name="terms">
                I agree to the terms and conditions
              </FormCheckbox>
            </FormControl>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Create Account
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignupForm;
```

## Your First Layout

Create a responsive layout with sidebar navigation:

```tsx
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import {
  AppProvider,
  SideMenuLayout,
  Navbar,
  NavList,
  Container
} from 'anysystem-design';
import { FaHome, FaUsers, FaCog } from 'react-icons/fa';

// Page components
function Dashboard() {
  return <Container><h1>Dashboard</h1></Container>;
}

function Users() {
  return <Container><h1>Users</h1></Container>;
}

function Settings() {
  return <Container><h1>Settings</h1></Container>;
}

// Layout component
function Layout() {
  const menuItems = [
    { label: 'Dashboard', path: '/', icon: <FaHome /> },
    { label: 'Users', path: '/users', icon: <FaUsers /> },
    { label: 'Settings', path: '/settings', icon: <FaCog /> }
  ];

  return (
    <SideMenuLayout
      header={
        <Navbar
          logo={<img src="/logo.png" alt="Logo" className="h-8" />}
          title="My App"
        />
      }
      menu={<NavList items={menuItems} />}
    >
      <Outlet />
    </SideMenuLayout>
  );
}

// App component
function App() {
  return (
    <BrowserRouter>
      <AppProvider appName="My Application">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
```

## Your First Data Table

Display data in a table with selection and column chooser:

```tsx
import { useState, useEffect } from 'react';
import { DataTable, Container, Button } from 'anysystem-design';
import type { DataTableField } from 'anysystem-design';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
};

function UserTable() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch users from API
    fetchUsers().then(setUsers);
  }, []);

  const fields: DataTableField<User>[] = [
    {
      key: 'id',
      label: 'ID',
      width: '80px',
      default: true
    },
    {
      key: 'name',
      label: 'Name',
      default: true,
      render: (row) => (
        <span className="font-semibold">{row.name}</span>
      )
    },
    {
      key: 'email',
      label: 'Email',
      default: true
    },
    {
      key: 'role',
      label: 'Role'
    },
    {
      key: 'status',
      label: 'Status',
      render: (row) => (
        <span className={`px-2 py-1 rounded text-xs ${
          row.status === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {row.status}
        </span>
      )
    }
  ];

  return (
    <Container>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <Button variant="primary">Add User</Button>
      </div>

      <DataTable
        name="users-table"
        data={users}
        fields={fields}
        selectable
        chooseFieldable
      />
    </Container>
  );
}

export default UserTable;
```

## Next Steps

Now that you have the basics:

1. **Explore Components**: Check the [Component Catalog](./COMPONENT_CATALOG.md) for all available components
2. **Read Component Docs**: Each component has detailed documentation with examples
3. **View Storybook**: Run `npm run storybook` to see live component examples
4. **Customize**: Learn about Tailwind customization for theming
5. **TypeScript**: All components are fully typed for great IDE support

## Common Patterns

### Form with Modal
```tsx
function UserManagement() {
  const modalRef = useRef<ModalHandler>(null);

  return (
    <>
      <Button onClick={() => modalRef.current?.show()}>
        Add User
      </Button>

      <Modal
        ref={modalRef}
        title="Add User"
        size="lg"
        buttons={[
          { label: 'Cancel', onClick: () => modalRef.current?.hide() },
          { label: 'Save', variant: 'primary', onClick: handleSave }
        ]}
      >
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            {/* Form fields */}
          </Form>
        </Formik>
      </Modal>
    </>
  );
}
```

### Responsive Grid
```tsx
<Row className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</Row>
```

## Troubleshooting

### Components not styled correctly
- Make sure Tailwind CSS is properly configured
- Add `node_modules/anysystem-design/**/*.{js,ts,jsx,tsx}` to your Tailwind content array
- Import Tailwind directives in your CSS file

### "AppProvider is required"
- Wrap your app with `<AppProvider appName="Your App">`

### Formik components not working
- Use `Form*` variants (e.g., `FormInput` instead of `Input`)
- Wrap in Formik's `<Form>` component
- Provide proper `name` props matching Formik's initialValues

## Need Help?

- Check individual component documentation
- View examples in Storybook
- Review the source code for advanced usage patterns
