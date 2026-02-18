# Component Catalog

Complete reference of all components in the AnySystem Design library.

## Form Components

### Input Components

#### [Input](./components/Input.md)
Flexible text input with decorative elements and Formik support.
```tsx
<Input name="username" placeholder="Enter username" />
<FormInput name="email" type="email" />
<Textarea name="description" rows={5} />
```

#### [PasswordInput](./components/PasswordInput.md)
Password input with visibility toggle.
```tsx
<PasswordInput name="password" />
<FormPasswordInput name="password" />
```

#### [TelephoneInput](./components/TelephoneInput.md)
Telephone number input with country code prefix and formatting.
```tsx
<TelephoneInput
  type="tel"
  name="phone"
  value={phone}
  onChange={setPhone}
  phonePrefixOptions={countryPrefixes}
  phonePrefix="+1"
/>
```

### Selection Components

#### [Selectbox](./components/Selectbox.md)
Single and multiple selection dropdown.
```tsx
<Selectbox name="country" options={countries} />
<SelectboxMultiple name="tags" options={tags} />
<FormSelectbox name="status" options={statuses} />
```

#### [AutoComplete](./components/AutoComplete.md)
Searchable autocomplete with single and multiple selection.
```tsx
<AutoComplete
  name="city"
  value={city}
  onChange={setCity}
  options={cities}
  placeholder="Search cities..."
/>
<AutoCompleteMultiple
  name="skills"
  value={skills}
  onChange={setSkills}
  options={skillOptions}
/>
```

#### [RadioGroup](./components/RadioGroup.md)
Radio button group for single selection with visual feedback.
```tsx
<RadioGroup
  name="gender"
  value={gender}
  onChange={setGender}
  options={[
    { id: '1', label: 'Male', value: 'male' },
    { id: '2', label: 'Female', value: 'female' }
  ]}
/>
```

#### [DatePicker](./components/DatePicker.md)
Date and time selection with calendar interface.
```tsx
<DatePicker
  name="birthdate"
  value={date}
  onChange={setDate}
  showTime={false}
/>
```

### Boolean Input Components

#### [Checkbox](./components/Checkbox.md)
Checkbox with Formik support.
```tsx
<Checkbox name="terms">I agree to terms</Checkbox>
<FormCheckbox name="subscribe">Subscribe to newsletter</FormCheckbox>
```

#### [Switch](./components/Switch.md)
Toggle switch for boolean values with smooth animations.
```tsx
<Switch
  name="notifications"
  value="enabled"
  checked={enabled}
  onChange={setEnabled}
/>
```

### Form Utilities

#### [FormControl](./components/FormControl.md)
Form field wrapper with label, validation, and error display.
```tsx
<FormControl
  name="email"
  label="Email Address"
  required
  description="Your contact email"
  error={errors.email}
>
  <Input name="email" type="email" />
</FormControl>
```

#### [Label](./components/Label.md)
Flexible label component with error display and layout types.
```tsx
<Label label="Username" htmlFor="username" type="normal">
  <input id="username" type="text" />
</Label>
```

## Interactive Components

### [Button](./components/Button.md)
Customizable button with variants and sizes.
```tsx
<Button variant="primary" size="lg">Submit</Button>
<Button variant="danger" rounded>Delete</Button>
```

### [Modal](./components/Modal.md)
Modal dialog with animations and configurable buttons.
```tsx
<Modal
  ref={modalRef}
  title="Confirm"
  size="lg"
  buttons={[
    { label: 'Cancel', onClick: () => modalRef.current?.hide() },
    { label: 'Confirm', variant: 'primary', onClick: handleConfirm }
  ]}
>
  Modal content here
</Modal>
```

## Layout Components

### [Container](./components/Container.md)
Main container wrapper with max-width and padding.
```tsx
<Container>
  <h1>Page Content</h1>
</Container>
```

### [Row](./components/Row.md)
Horizontal flex layout.
```tsx
<Row className="gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
</Row>
```

### [Column](./components/Column.md)
Vertical flex layout.
```tsx
<Column className="gap-4">
  <div>Row 1</div>
  <div>Row 2</div>
</Column>
```

## Page Layouts

### [SideMenuLayout](./layouts/SideMenuLayout.md)
Responsive sidebar layout with toggle and persistence.
```tsx
<SideMenuLayout
  header={<Navbar />}
  menu={<NavList items={menuItems} />}
>
  <Outlet />
</SideMenuLayout>
```

### [EmptyLayout](./layouts/EmptyLayout.md)
Minimal layout wrapper without any structure or styling.
```tsx
<EmptyLayout>
  <YourContent />
</EmptyLayout>
```

## Navigation Components

### [Navbar](./components/Navbar.md)
Responsive top navigation bar with menu toggle for SideMenuLayout.
```tsx
<Navbar title="My App" menuRef={menuRef}>
  <div>Additional content</div>
</Navbar>
```

### [NavList](./components/NavList.md)
Hierarchical navigation list with icons and nested items.
```tsx
<NavList
  list={[
    { label: 'Home', path: '/', icon: FaHome },
    { label: 'Profile', path: '/profile', icon: FaUser }
  ]}
  location={location}
/>
```

## Data Display Components

### [DataTable](./components/DataTable.md)
Feature-rich data table with selection and column chooser.
```tsx
<DataTable
  data={users}
  fields={[
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' }
  ]}
  selectable
  chooseFieldable
  name="users-table"
/>
```

### [Text](./components/Text.md)
Flexible typography component for semantic HTML text elements.
```tsx
<Text tag="h1">Heading 1</Text>
<Text tag="p">Paragraph text</Text>
<Text tag="span">Inline text</Text>
```

## Quick Reference by Use Case

### Building a Form
```tsx
<Formik initialValues={initialValues} onSubmit={handleSubmit}>
  <Form>
    <FormControl name="name" label="Name" required>
      <FormInput name="name" />
    </FormControl>

    <FormControl name="email" label="Email" required>
      <FormInput name="email" type="email" />
    </FormControl>

    <FormControl name="country" label="Country" required>
      <FormSelectbox name="country" options={countries} />
    </FormControl>

    <FormControl name="terms">
      <FormCheckbox name="terms">I agree to terms</FormCheckbox>
    </FormControl>

    <Button type="submit" variant="primary">Submit</Button>
  </Form>
</Formik>
```

### Creating a Layout
```tsx
<SideMenuLayout
  header={
    <Navbar
      logo={<img src="/logo.png" />}
      title="My App"
    />
  }
  menu={
    <NavList
      items={[
        { label: 'Dashboard', path: '/', icon: <FaHome /> },
        { label: 'Users', path: '/users', icon: <FaUsers /> },
        { label: 'Settings', path: '/settings', icon: <FaCog /> }
      ]}
    />
  }
>
  <Container>
    <Outlet />
  </Container>
</SideMenuLayout>
```

### Displaying Data
```tsx
<Container>
  <Row className="justify-between items-center mb-4">
    <h1>Users</h1>
    <Button variant="primary" onClick={() => modalRef.current?.show()}>
      Add User
    </Button>
  </Row>

  <DataTable
    data={users}
    fields={userFields}
    selectable
    chooseFieldable
    name="users-table"
  />

  <Modal ref={modalRef} title="Add User" buttons={modalButtons}>
    <UserForm />
  </Modal>
</Container>
```

## Component Props Quick Reference

### Common Props

Most components support these standard props:

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Component identifier (required for form inputs) |
| `className` | `string \| object` | Custom CSS classes |
| `disabled` | `boolean` | Disable the component |
| `required` | `boolean` | Mark as required (form inputs) |
| `placeholder` | `string` | Placeholder text (inputs) |
| `value` | `any` | Controlled value |
| `onChange` | `function` | Change handler |
| `ref` | `React.Ref` | Forward ref support |

### Formik Variants

Most form components have a `Form*` variant for Formik integration:

- `Input` → `FormInput`
- `PasswordInput` → `FormPasswordInput`
- `Selectbox` → `FormSelectbox`
- `Checkbox` → `FormCheckbox`
- `Label` → `FormLabel`

## Component Dependencies

### Required Context
All components must be wrapped in `AppProvider`:
```tsx
<AppProvider appName="My App">
  <App />
</AppProvider>
```

### Optional Dependencies
- **Formik Integration**: Install `formik` and `yup` for form components
- **Icons**: Install `react-icons` for icon support
- **Routing**: Install `react-router-dom` for navigation components
- **Date Handling**: Install `moment` for DatePicker

## Styling System

All components use:
- **Tailwind CSS** for styling
- **tailwind-merge** for class merging
- **Dark mode** support where applicable
- **Responsive** design by default

## TypeScript Support

All components are written in TypeScript with:
- Full type definitions
- Generic support for data-driven components
- IntelliSense support
- Strict type checking

## Component Variants Summary

| Component | Base | Multiple | Formik | Other |
|-----------|------|----------|--------|-------|
| Input | ✓ | - | FormInput | Textarea, InputTel |
| PasswordInput | ✓ | - | FormPasswordInput | - |
| Selectbox | ✓ | SelectboxMultiple | FormSelectbox | - |
| AutoComplete | ✓ | AutoCompleteMultiple | - | - |
| Checkbox | ✓ | - | FormCheckbox | - |
| Label | ✓ | - | FormLabel | - |

## Browser Support

All components support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

All components include:
- ARIA attributes
- Keyboard navigation
- Screen reader support
- Focus management
- Semantic HTML

## Next Steps

- Read individual component documentation for detailed API reference
- Check out the [Getting Started Guide](./README.md)
- View live examples in Storybook
- Browse the source code for advanced usage
