# Switch

A toggle switch component for boolean values with smooth animations.

## Import

```tsx
import { Switch } from 'anysystem-design';
```

## Basic Usage

```tsx
const [enabled, setEnabled] = useState(false);

<Switch
  name="notifications"
  value="enabled"
  checked={enabled}
  onChange={setEnabled}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Input name |
| `value` | `string` | **required** | Value when checked |
| `checked` | `boolean` | `false` | Checked state |
| `onChange` | `(checked: boolean) => void` | **required** | Change handler |
| `variant` | `"sm" \| "md"` | `"md"` | Size variant (currently unused) |

## Examples

### Basic Switch
```tsx
const [notifications, setNotifications] = useState(false);

<Switch
  name="notifications"
  value="on"
  checked={notifications}
  onChange={setNotifications}
/>
```

### With Label
```tsx
<div className="flex items-center gap-3">
  <Switch
    name="darkMode"
    value="enabled"
    checked={darkMode}
    onChange={setDarkMode}
  />
  <label>Enable Dark Mode</label>
</div>
```

### In Form
```tsx
<form className="space-y-4">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="font-semibold">Email Notifications</h3>
      <p className="text-sm text-gray-500">Receive email updates</p>
    </div>
    <Switch
      name="emailNotifications"
      value="enabled"
      checked={settings.email}
      onChange={(checked) => setSettings({ ...settings, email: checked })}
    />
  </div>

  <div className="flex items-center justify-between">
    <div>
      <h3 className="font-semibold">Push Notifications</h3>
      <p className="text-sm text-gray-500">Receive push notifications</p>
    </div>
    <Switch
      name="pushNotifications"
      value="enabled"
      checked={settings.push}
      onChange={(checked) => setSettings({ ...settings, push: checked })}
    />
  </div>
</form>
```

## With FormControl

```tsx
<FormControl name="newsletter" description="Subscribe to our weekly newsletter">
  <div className="flex items-center gap-3">
    <Switch
      name="newsletter"
      value="subscribed"
      checked={subscribed}
      onChange={setSubscribed}
    />
    <span>Weekly Newsletter</span>
  </div>
</FormControl>
```

## With Formik

```tsx
import { Formik, Form } from 'formik';

function PreferencesForm() {
  return (
    <Formik
      initialValues={{
        notifications: false,
        marketing: false,
        analytics: true
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, setFieldValue }) => (
        <Form className="space-y-4">
          <div className="flex items-center justify-between">
            <label>Notifications</label>
            <Switch
              name="notifications"
              value="enabled"
              checked={values.notifications}
              onChange={(checked) => setFieldValue('notifications', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label>Marketing Emails</label>
            <Switch
              name="marketing"
              value="enabled"
              checked={values.marketing}
              onChange={(checked) => setFieldValue('marketing', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label>Analytics</label>
            <Switch
              name="analytics"
              value="enabled"
              checked={values.analytics}
              onChange={(checked) => setFieldValue('analytics', checked)}
            />
          </div>

          <Button type="submit" variant="primary">Save Preferences</Button>
        </Form>
      )}
    </Formik>
  );
}
```

## Complete Settings Example

```tsx
import { useState } from 'react';
import { Switch, Button } from 'anysystem-design';

function SettingsPanel() {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    autoSave: true,
    publicProfile: false
  });

  const updateSetting = (key: string, value: boolean) => {
    setSettings({ ...settings, [key]: value });
  };

  const handleSave = () => {
    console.log('Saving settings:', settings);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="space-y-4 bg-white p-6 rounded-lg shadow">
        <h2 className="font-semibold text-lg">Appearance</h2>

        <div className="flex items-center justify-between py-3 border-b">
          <div>
            <h3 className="font-medium">Dark Mode</h3>
            <p className="text-sm text-gray-500">Use dark theme</p>
          </div>
          <Switch
            name="darkMode"
            value="enabled"
            checked={settings.darkMode}
            onChange={(checked) => updateSetting('darkMode', checked)}
          />
        </div>
      </div>

      <div className="space-y-4 bg-white p-6 rounded-lg shadow">
        <h2 className="font-semibold text-lg">Notifications</h2>

        <div className="flex items-center justify-between py-3 border-b">
          <div>
            <h3 className="font-medium">Enable Notifications</h3>
            <p className="text-sm text-gray-500">Receive push notifications</p>
          </div>
          <Switch
            name="notifications"
            value="enabled"
            checked={settings.notifications}
            onChange={(checked) => updateSetting('notifications', checked)}
          />
        </div>

        <div className="flex items-center justify-between py-3 border-b">
          <div>
            <h3 className="font-medium">Auto Save</h3>
            <p className="text-sm text-gray-500">Automatically save changes</p>
          </div>
          <Switch
            name="autoSave"
            value="enabled"
            checked={settings.autoSave}
            onChange={(checked) => updateSetting('autoSave', checked)}
          />
        </div>
      </div>

      <div className="space-y-4 bg-white p-6 rounded-lg shadow">
        <h2 className="font-semibold text-lg">Privacy</h2>

        <div className="flex items-center justify-between py-3">
          <div>
            <h3 className="font-medium">Public Profile</h3>
            <p className="text-sm text-gray-500">Make your profile visible to others</p>
          </div>
          <Switch
            name="publicProfile"
            value="enabled"
            checked={settings.publicProfile}
            onChange={(checked) => updateSetting('publicProfile', checked)}
          />
        </div>
      </div>

      <Button variant="primary" onClick={handleSave}>
        Save Settings
      </Button>
    </div>
  );
}
```

## States

### Unchecked (Off)
- Background: `bg-gray-800/10` (light mode)
- Background: `bg-gray-50/10` (dark mode)
- Toggle position: Left

### Checked (On)
- Background: `bg-primary-500`
- Toggle position: Right (translated 7 units)
- Smooth transition

### Hover
- Focus outline available
- Cursor: Pointer

## Styling

### Switch Track
```css
- Width: 56px (w-14)
- Height: 28px (h-7)
- Border radius: Full (rounded-full)
- Padding: 4px (p-1)
```

### Switch Thumb
```css
- Size: 20px (size-5)
- Background: White
- Border radius: Full
- Shadow: Large shadow
- Transition: 200ms ease-in-out
```

## Animations

The switch includes smooth animations:
- **Thumb transition**: 200ms ease-in-out
- **Color transition**: 200ms ease-in-out
- **Transform**: Translates 28px when checked

## Dark Mode

Automatic dark mode support:
- Unchecked: `dark:bg-gray-50/10`
- Checked: `dark:bg-primary-500`
- Same primary color in both modes

## Accessibility

- Built on Headless UI's Switch component
- Proper ARIA attributes
- Keyboard accessible (Space to toggle)
- Screen reader support
- Focus visible states
- Semantic role="switch"

## Advanced Examples

### Disabled State
```tsx
<div className="opacity-50 pointer-events-none">
  <Switch
    name="disabled"
    value="enabled"
    checked={false}
    onChange={() => {}}
  />
</div>
```

### With Icon Labels
```tsx
import { FaSun, FaMoon } from 'react-icons/fa';

<div className="flex items-center gap-2">
  <FaSun className="text-yellow-500" />
  <Switch
    name="theme"
    value="dark"
    checked={isDark}
    onChange={setIsDark}
  />
  <FaMoon className="text-blue-500" />
</div>
```

### Multiple Switches
```tsx
const permissions = ['read', 'write', 'delete'];
const [enabled, setEnabled] = useState({
  read: true,
  write: false,
  delete: false
});

<div className="space-y-3">
  {permissions.map((perm) => (
    <div key={perm} className="flex items-center justify-between">
      <span className="capitalize">{perm} Permission</span>
      <Switch
        name={perm}
        value="enabled"
        checked={enabled[perm]}
        onChange={(checked) => setEnabled({ ...enabled, [perm]: checked })}
      />
    </div>
  ))}
</div>
```

### Conditional Features
```tsx
function FeatureToggle() {
  const [premium, setPremium] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span>Premium Features</span>
        <Switch
          name="premium"
          value="enabled"
          checked={premium}
          onChange={setPremium}
        />
      </div>

      {premium && (
        <div className="p-4 bg-blue-50 rounded">
          <h3>Premium Features Unlocked!</h3>
          <p>You now have access to advanced analytics and reports.</p>
        </div>
      )}
    </div>
  );
}
```

## Form Integration

The Switch includes a hidden input that submits the value when checked:

```tsx
<form>
  <Switch
    name="subscribe"
    value="yes"
    checked={subscribed}
    onChange={setSubscribed}
  />
  {/* Hidden input: <input type="hidden" name="subscribe" value={subscribed ? "yes" : ""} /> */}
</form>
```

## Type Definitions

```tsx
export type SwitchProps = {
  variant?: "sm" | "md";
  name: string;
  value: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
};
```

## Related Components

- [Checkbox](./Checkbox.md) - For multiple selections
- [RadioGroup](./RadioGroup.md) - For single selection from options
- [FormControl](./FormControl.md) - Form field wrapper

## Common Use Cases

- Feature toggles
- Settings panels
- Preferences
- Enable/disable options
- Dark mode toggle
- Notification settings
- Privacy controls
- Experimental features

## Best Practices

1. **Clear labels**: Always provide context for what the switch controls
2. **Immediate effect**: Changes should take effect immediately
3. **Visual feedback**: Use the switch for binary states only
4. **Group related switches**: Organize in logical sections
5. **Default states**: Set sensible defaults
6. **Save explicitly**: For important settings, require explicit save action
7. **Avoid for critical actions**: Don't use for destructive operations

## Notes

- Built on Headless UI's Switch component
- Uses Tailwind CSS for styling
- Smooth 200ms transitions
- Includes hidden input for form submission
- Toggle thumb is 20px, track is 56px wide
- 7-unit (28px) translation when checked
- `variant` prop is defined but not currently implemented
