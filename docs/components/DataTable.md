# DataTable

A feature-rich data table component with support for selection, column chooser, and localStorage persistence.

## Import

```tsx
import { DataTable } from 'anysystem-design';
import type { DataTableField } from 'anysystem-design';
```

## Basic Usage

```tsx
type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const data: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
];

const fields: DataTableField<User>[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' }
];

<DataTable data={data} fields={fields} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `T[]` | **required** | Array of data objects |
| `fields` | `DataTableField<T>[]` | **required** | Column definitions |
| `selectable` | `boolean` | `false` | Enable row selection |
| `chooseFieldable` | `boolean` | `false` | Enable column chooser |
| `name` | `string` | `""` | Table name for localStorage persistence |

## Field Configuration

```tsx
type DataTableField<DataType> = {
  key: keyof DataType;           // Data property key
  label: string;                 // Column header text
  default?: boolean;             // Show by default (used with chooseFieldable)
  render?: (row: DataType) => ReactNode;  // Custom cell renderer
  width?: string;                // Column width
  align?: 'left' | 'center' | 'right';  // Text alignment
};
```

### Basic Fields
```tsx
const fields: DataTableField<User>[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Full Name' },
  { key: 'email', label: 'Email Address' }
];
```

### Custom Rendering
```tsx
const fields: DataTableField<User>[] = [
  {
    key: 'name',
    label: 'Name',
    render: (row) => (
      <div className="flex items-center">
        <img src={row.avatar} className="w-8 h-8 rounded-full mr-2" />
        <span className="font-bold">{row.name}</span>
      </div>
    )
  },
  {
    key: 'status',
    label: 'Status',
    render: (row) => (
      <span className={`px-2 py-1 rounded ${
        row.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {row.status}
      </span>
    )
  }
];
```

### With Width and Alignment
```tsx
const fields: DataTableField<User>[] = [
  { key: 'id', label: 'ID', width: '80px', align: 'center' },
  { key: 'name', label: 'Name', width: '200px', align: 'left' },
  { key: 'email', label: 'Email', align: 'left' },
  { key: 'actions', label: 'Actions', width: '150px', align: 'right' }
];
```

## Row Selection

Enable row selection with checkboxes:

```tsx
<DataTable
  data={data}
  fields={fields}
  selectable={true}
/>
```

Features:
- Checkbox in header for "select all"
- Individual row checkboxes
- State managed via DataTable context

### Accessing Selected Rows

Use the DataTable context to access selected rows:

```tsx
import { useDataTableContext } from 'anysystem-design';

function MyComponent() {
  const { state } = useDataTableContext();
  const selectedRows = state.DTData.filter((_, index) => state.DTChecked[index]);

  return (
    <>
      <DataTable data={data} fields={fields} selectable={true} />
      <div>Selected: {selectedRows.length} rows</div>
    </>
  );
}
```

## Column Chooser

Enable the column chooser to let users show/hide columns:

```tsx
<DataTable
  data={data}
  fields={fields}
  chooseFieldable={true}
  name="users-table"
/>
```

Features:
- Dropdown to select which columns to display
- Persisted to localStorage using the `name` prop
- Default columns can be specified with `default: true` in field configuration

### Default Columns
```tsx
const fields: DataTableField<User>[] = [
  { key: 'id', label: 'ID', default: true },      // Always shown initially
  { key: 'name', label: 'Name', default: true },  // Always shown initially
  { key: 'email', label: 'Email' },               // Hidden initially
  { key: 'phone', label: 'Phone' }                // Hidden initially
];

<DataTable
  data={data}
  fields={fields}
  chooseFieldable={true}
  name="users-table"
/>
```

If no field has `default: true`, all columns are shown by default.

## localStorage Persistence

When a `name` prop is provided, column visibility preferences are automatically saved to localStorage:

```tsx
<DataTable
  name="users-table"
  data={data}
  fields={fields}
  chooseFieldable={true}
/>
```

localStorage key format:
```
tableName-path-{pathname}-name-{name}
```

For example, on path `/admin/users` with name `users-table`:
```
tableName-path--admin-users-name-users-table
```

## Advanced Examples

### Complete Table with All Features
```tsx
type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  status: 'active' | 'inactive';
};

const products: Product[] = [
  { id: 1, name: 'Product A', price: 29.99, stock: 100, category: 'Electronics', status: 'active' },
  { id: 2, name: 'Product B', price: 49.99, stock: 50, category: 'Clothing', status: 'active' }
];

const fields: DataTableField<Product>[] = [
  {
    key: 'id',
    label: 'ID',
    width: '80px',
    align: 'center',
    default: true
  },
  {
    key: 'name',
    label: 'Product Name',
    default: true,
    render: (row) => (
      <span className="font-semibold">{row.name}</span>
    )
  },
  {
    key: 'price',
    label: 'Price',
    default: true,
    align: 'right',
    render: (row) => `$${row.price.toFixed(2)}`
  },
  {
    key: 'stock',
    label: 'Stock',
    align: 'center',
    render: (row) => (
      <span className={row.stock < 10 ? 'text-red-600' : 'text-green-600'}>
        {row.stock}
      </span>
    )
  },
  {
    key: 'category',
    label: 'Category'
  },
  {
    key: 'status',
    label: 'Status',
    render: (row) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        row.status === 'active'
          ? 'bg-green-100 text-green-800'
          : 'bg-gray-100 text-gray-800'
      }`}>
        {row.status}
      </span>
    )
  }
];

<DataTable
  name="products-table"
  data={products}
  fields={fields}
  selectable={true}
  chooseFieldable={true}
/>
```

### With Action Buttons
```tsx
const fields: DataTableField<User>[] = [
  { key: 'name', label: 'Name', default: true },
  { key: 'email', label: 'Email', default: true },
  {
    key: 'actions',
    label: 'Actions',
    align: 'right',
    render: (row) => (
      <div className="flex gap-2 justify-end">
        <Button size="xs" variant="primary" onClick={() => handleEdit(row)}>
          Edit
        </Button>
        <Button size="xs" variant="danger" onClick={() => handleDelete(row)}>
          Delete
        </Button>
      </div>
    )
  }
];
```

### With Links
```tsx
import { Link } from 'react-router-dom';

const fields: DataTableField<User>[] = [
  {
    key: 'name',
    label: 'Name',
    render: (row) => (
      <Link to={`/users/${row.id}`} className="text-blue-600 hover:underline">
        {row.name}
      </Link>
    )
  }
];
```

### With Badges and Icons
```tsx
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const fields: DataTableField<User>[] = [
  {
    key: 'verified',
    label: 'Verified',
    align: 'center',
    render: (row) => (
      row.verified
        ? <FaCheckCircle className="text-green-500" />
        : <FaTimesCircle className="text-red-500" />
    )
  }
];
```

## Context API

The DataTable provides a context for accessing table state:

```tsx
import { useDataTableContext } from 'anysystem-design';

const { state, dispatch } = useDataTableContext<User>();
```

### State Structure
```tsx
type State<DataType> = {
  DTData: DataType[];           // Table data
  DTChecked: boolean[];         // Row selection state
  DTShowFields: (keyof DataType)[];  // Visible columns
};
```

### Available Actions
```tsx
// Select all rows
dispatch({ type: 'SELECT_ALL' });

// Select specific row
dispatch({ type: 'SELECT_ROW', index: 0 });

// Toggle field visibility
dispatch({ type: 'SELECT_FIELDKEY', fieldKey: 'email' });

// Set visible fields
dispatch({
  type: 'SET_FIELD',
  fields: [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' }
  ]
});
```

## Styling

The DataTable uses standard table HTML elements with Tailwind CSS classes:

```css
.table {
  @apply w-full border-collapse;
}

.table th {
  @apply bg-gray-100 dark:bg-gray-700 border p-2 text-left;
}

.table td {
  @apply border p-2;
}
```

### Custom Table Styling
```tsx
<div className="overflow-x-auto shadow-md rounded-lg">
  <DataTable data={data} fields={fields} />
</div>
```

## Accessibility

- Proper table structure with `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- Semantic HTML for screen readers
- Keyboard navigation support
- ARIA labels for checkboxes

## Type Definitions

```tsx
export type DataTableField<DataType> = {
  key: keyof DataType;
  label: string;
  default?: boolean;
  render?: (row: DataType) => React.ReactNode;
  width?: string;
  align?: 'left' | 'center' | 'right';
};

export type DataTableProps<DataType extends object> = {
  data: DataType[];
  fields: DataTableField<DataType>[];
  selectable?: boolean;
  chooseFieldable?: boolean;
  name?: string;
};

export type State<DataType extends object> = {
  DTData: DataType[];
  DTChecked: boolean[];
  DTShowFields: (keyof DataType)[];
};
```

## Performance Considerations

- Uses React.useReducer for efficient state management
- localStorage operations are optimized
- Large datasets may benefit from pagination (implement externally)
- Custom render functions should be memoized for best performance

## Related Components

- [Button](./Button.md) - Often used in action columns
- [Checkbox](./Checkbox.md) - Used for row selection

## Notes

- The table is fully responsive but may require a horizontal scrollbar for many columns
- Generic type support ensures type safety for your data
- Column visibility preferences are stored per-route and per-table name
- The component uses lodash for utility functions
