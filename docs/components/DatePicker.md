# DatePicker

A comprehensive date and time picker component with calendar interface and responsive behavior.

## Import

```tsx
import { DatePicker } from 'anysystem-design';
```

## Basic Usage

```tsx
const [date, setDate] = useState(Math.floor(Date.now() / 1000).toString());

<DatePicker
  name="birthdate"
  value={date}
  onChange={setDate}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Input name |
| `value` | `string` | **required** | Unix timestamp (in seconds) as string |
| `onChange` | `(value: string) => void` | **required** | Change handler receives Unix timestamp |
| `showTime` | `boolean` | `false` | Enable time selection |
| `readOnly` | `boolean` | `false` | Make picker read-only |
| `labelProps` | `LabelBaseProps` | - | Label configuration |

## Important Notes

### Value Format
⚠️ The DatePicker uses **Unix timestamps in seconds** (not milliseconds) as strings:

```tsx
// Correct - Unix timestamp in seconds
const timestamp = Math.floor(Date.now() / 1000).toString(); // "1708264800"

// Get Date object from timestamp
const date = new Date(+timestamp * 1000);

// Get timestamp from Date object
const newTimestamp = Math.floor(date.getTime() / 1000).toString();
```

## Examples

### Date Only
```tsx
const [birthdate, setBirthdate] = useState(
  Math.floor(new Date('1990-01-01').getTime() / 1000).toString()
);

<DatePicker
  name="birthdate"
  value={birthdate}
  onChange={setBirthdate}
/>
```

### Date and Time
```tsx
const [appointment, setAppointment] = useState(
  Math.floor(Date.now() / 1000).toString()
);

<DatePicker
  name="appointment"
  value={appointment}
  onChange={setAppointment}
  showTime={true}
/>
```

### With Label
```tsx
<DatePicker
  name="dueDate"
  value={date}
  onChange={setDate}
  labelProps={{
    label: "Due Date",
    type: "border"
  }}
/>
```

### Read-Only
```tsx
<DatePicker
  name="created"
  value={createdDate}
  onChange={() => {}}
  readOnly={true}
/>
```

## Responsive Behavior

### Desktop (≥ 768px)
- Shows custom calendar picker
- Interactive month/year navigation
- Visual date selection

### Mobile (< 768px)
- Falls back to native date input
- Better touch experience
- Native keyboard integration

### With Time (showTime={true})
- Always shows custom picker
- Includes hour and minute selection
- Time picker is collapsible

## Features

### Calendar Interface
- Month and year navigation
- Today button for quick selection
- Current day highlighting
- Selected day highlighting
- Disabled dates from other months

### Time Selection (when showTime={true})
- Hour picker (00-23)
- Minute picker (00-59)
- Collapsible time panel
- Scroll to selected time

### Navigation
- Previous/Next month arrows
- Click month name to choose month
- Click year to choose year
- Today button returns to current date/time

## Complete Example

```tsx
import { useState } from 'react';
import { DatePicker, FormControl, Button } from 'anysystem-design';
import moment from 'moment';

function AppointmentForm() {
  const [appointment, setAppointment] = useState(
    Math.floor(Date.now() / 1000).toString()
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Convert timestamp back to readable format
    const date = new Date(+appointment * 1000);
    console.log('Selected:', moment(date).format('YYYY-MM-DD HH:mm'));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormControl
        name="appointment"
        label="Appointment Date & Time"
        description="Select your preferred appointment slot"
      >
        <DatePicker
          name="appointment"
          value={appointment}
          onChange={setAppointment}
          showTime={true}
        />
      </FormControl>

      <Button type="submit" variant="primary">
        Book Appointment
      </Button>
    </form>
  );
}
```

## With Formik

```tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
  eventDate: Yup.string().required('Date is required')
});

function EventForm() {
  return (
    <Formik
      initialValues={{
        eventDate: Math.floor(Date.now() / 1000).toString()
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        const date = new Date(+values.eventDate * 1000);
        console.log('Event date:', date);
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form>
          <FormControl
            name="eventDate"
            label="Event Date"
            required
            error={touched.eventDate ? errors.eventDate : ''}
          >
            <DatePicker
              name="eventDate"
              value={values.eventDate}
              onChange={(value) => setFieldValue('eventDate', value)}
            />
          </FormControl>

          <Button type="submit" variant="primary">
            Create Event
          </Button>
        </Form>
      )}
    </Formik>
  );
}
```

## Date Range Selection

For date ranges, use two DatePicker components:

```tsx
function DateRangeForm() {
  const [startDate, setStartDate] = useState(
    Math.floor(Date.now() / 1000).toString()
  );
  const [endDate, setEndDate] = useState(
    Math.floor(Date.now() / 1000).toString()
  );

  return (
    <div className="grid grid-cols-2 gap-4">
      <FormControl name="startDate" label="Start Date">
        <DatePicker
          name="startDate"
          value={startDate}
          onChange={setStartDate}
        />
      </FormControl>

      <FormControl name="endDate" label="End Date">
        <DatePicker
          name="endDate"
          value={endDate}
          onChange={setEndDate}
        />
      </FormControl>
    </div>
  );
}
```

## Formatting Dates

The component uses `moment` for date formatting. To display formatted dates:

```tsx
import moment from 'moment';

function DateDisplay({ timestamp }: { timestamp: string }) {
  const date = new Date(+timestamp * 1000);

  return (
    <div>
      <p>Short: {moment(date).format('L')}</p>
      <p>Long: {moment(date).format('LLLL')}</p>
      <p>Custom: {moment(date).format('YYYY-MM-DD HH:mm')}</p>
    </div>
  );
}
```

## Styling

### Calendar Styling
The calendar uses Tailwind CSS classes and can be customized:

- Primary color for selected dates: `bg-primary-600`
- Today's date: Border highlight
- Hover states: `hover:bg-primary-50`
- Dark mode: `dark:bg-gray-900`

### Custom Container
```tsx
<div className="max-w-md">
  <DatePicker
    name="date"
    value={date}
    onChange={setDate}
  />
</div>
```

## Dark Mode

The DatePicker automatically supports dark mode:

- Dark background: `dark:bg-gray-900`
- Dark text: `dark:text-white`
- Dark hover: `dark:hover:bg-gray-700`

## Accessibility

- Keyboard navigation support
- ARIA labels for screen readers
- Focus management
- Native input fallback on mobile
- Clear visual indicators

## Helper Functions

### Convert Date to Timestamp
```tsx
const dateToTimestamp = (date: Date): string => {
  return Math.floor(date.getTime() / 1000).toString();
};

// Usage
const timestamp = dateToTimestamp(new Date('2024-01-01'));
```

### Convert Timestamp to Date
```tsx
const timestampToDate = (timestamp: string): Date => {
  return new Date(+timestamp * 1000);
};

// Usage
const date = timestampToDate('1704067200');
```

### Format Timestamp
```tsx
import moment from 'moment';

const formatTimestamp = (timestamp: string, format = 'YYYY-MM-DD'): string => {
  return moment(new Date(+timestamp * 1000)).format(format);
};

// Usage
const formatted = formatTimestamp(timestamp, 'MMM D, YYYY');
```

## Performance Notes

- The picker is lazy-loaded on desktop
- Native input is used on mobile for better performance
- Date calculations are memoized
- Smooth scrolling in time picker

## Browser Support

- Desktop: Custom calendar picker
- Mobile: Native date/datetime input
- Fallback for unsupported browsers

## Type Definitions

```tsx
export type DatePickerProps = {
  name: string;
  value: string;                    // Unix timestamp in seconds
  onChange: (value: string) => void;
  showTime?: boolean;
  readOnly?: boolean;
  labelProps?: LabelBaseProps;
};
```

## Related Components

- [FormControl](./FormControl.md) - Form field wrapper
- [Input](./Input.md) - Text input component
- [Label](./Label.md) - Label component

## Common Patterns

### Birthday Selector
```tsx
<DatePicker
  name="birthday"
  value={birthday}
  onChange={setBirthday}
  labelProps={{
    label: "Date of Birth"
  }}
/>
```

### Appointment Scheduler
```tsx
<DatePicker
  name="appointment"
  value={appointment}
  onChange={setAppointment}
  showTime={true}
  labelProps={{
    label: "Appointment Time",
    type: "border"
  }}
/>
```

### Event Date
```tsx
<DatePicker
  name="eventDate"
  value={eventDate}
  onChange={setEventDate}
  labelProps={{
    label: "Event Date",
    type: "normal"
  }}
/>
```

## Notes

- Uses `@aliakbarazizi/headless-datepicker` for calendar functionality
- Requires `moment` for date formatting
- Stores values as Unix timestamps (seconds) as strings
- Responsive with native fallback on mobile
- Supports both date-only and date-time modes
- Includes "Today" quick selection button
