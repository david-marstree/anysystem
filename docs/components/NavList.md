# NavList

A hierarchical navigation list component with support for icons, nested items, and active state highlighting.

## Import

```tsx
import { NavList } from 'anysystem-design';
import type { NavItemObject } from 'anysystem-design';
```

## Basic Usage

```tsx
const items = [
  { label: 'Dashboard', path: '/' },
  { label: 'Users', path: '/users' },
  { label: 'Settings', path: '/settings' }
];

<NavList list={items} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `list` | `NavItemObject[]` | **required** | Array of navigation items |
| `location` | `{ pathname: string }` | - | Current location for active state |

## NavItemObject Type

```tsx
type NavItemObject = {
  label: string;                          // Display text
  path?: string;                          // Link URL
  icon?: React.ComponentType<{ size?: number }>; // Icon component
  title?: boolean;                        // Render as section title
  list?: NavItemObject[];                 // Nested sub-items
  onClick?: () => void;                   // Click handler
};
```

## Examples

### Simple Navigation
```tsx
const items = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

<NavList list={items} />
```

### With Icons
```tsx
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const items = [
  { label: 'Dashboard', path: '/', icon: FaHome },
  { label: 'Profile', path: '/profile', icon: FaUser },
  { label: 'Settings', path: '/settings', icon: FaCog }
];

<NavList list={items} />
```

### With Active State
```tsx
import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const items = [
    { label: 'Dashboard', path: '/' },
    { label: 'Users', path: '/users' },
    { label: 'Settings', path: '/settings' }
  ];

  return <NavList list={items} location={location} />;
}
```

### With Nested Items
```tsx
import { FaHome, FaUsers, FaCog, FaChartBar } from 'react-icons/fa';

const items = [
  {
    label: 'Dashboard',
    path: '/',
    icon: FaHome
  },
  {
    label: 'Users',
    icon: FaUsers,
    list: [
      { label: 'All Users', path: '/users' },
      { label: 'Add User', path: '/users/new' },
      { label: 'Roles', path: '/users/roles' }
    ]
  },
  {
    label: 'Reports',
    icon: FaChartBar,
    list: [
      { label: 'Sales', path: '/reports/sales' },
      { label: 'Analytics', path: '/reports/analytics' }
    ]
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: FaCog
  }
];

<NavList list={items} location={location} />
```

### With Section Titles
```tsx
import { FaHome, FaUsers, FaCog } from 'react-icons/fa';

const items = [
  { label: 'Main', title: true },
  { label: 'Dashboard', path: '/', icon: FaHome },
  { label: 'Users', path: '/users', icon: FaUsers },

  { label: 'Admin', title: true },
  { label: 'Settings', path: '/settings', icon: FaCog }
];

<NavList list={items} />
```

### With Click Handlers
```tsx
const items = [
  {
    label: 'Home',
    path: '/',
    onClick: () => console.log('Home clicked')
  },
  {
    label: 'Logout',
    onClick: () => handleLogout()
  }
];

<NavList list={items} />
```

## Complete SideMenu Example

```tsx
import { useRef } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import {
  SideMenuLayout,
  Navbar,
  NavList,
  Container
} from 'anysystem-design';
import type { SideMenuHandler, NavItemObject } from 'anysystem-design';
import {
  FaHome,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt
} from 'react-icons/fa';

function Layout() {
  const menuRef = useRef<SideMenuHandler>(null);
  const location = useLocation();

  const menuItems: NavItemObject[] = [
    {
      label: 'Main',
      title: true
    },
    {
      label: 'Dashboard',
      path: '/',
      icon: FaHome
    },
    {
      label: 'Users',
      icon: FaUsers,
      list: [
        { label: 'All Users', path: '/users' },
        { label: 'Add User', path: '/users/new' },
        { label: 'User Roles', path: '/users/roles' }
      ]
    },
    {
      label: 'Analytics',
      icon: FaChartBar,
      list: [
        { label: 'Overview', path: '/analytics' },
        { label: 'Reports', path: '/analytics/reports' },
        { label: 'Export', path: '/analytics/export' }
      ]
    },
    {
      label: 'Settings',
      title: true
    },
    {
      label: 'Preferences',
      path: '/settings',
      icon: FaCog
    },
    {
      label: 'Logout',
      icon: FaSignOutAlt,
      onClick: () => handleLogout()
    }
  ];

  return (
    <SideMenuLayout
      menuRef={menuRef}
      header={<Navbar title="Admin Panel" menuRef={menuRef} />}
      menu={<NavList list={menuItems} location={location} />}
    >
      <Container>
        <Outlet />
      </Container>
    </SideMenuLayout>
  );
}
```

## Item Types

### Regular Link
```tsx
{
  label: 'Dashboard',
  path: '/',
  icon: FaHome
}
```

### Section Title
```tsx
{
  label: 'Admin',
  title: true
}
```

### Expandable Group
```tsx
{
  label: 'Users',
  icon: FaUsers,
  list: [
    { label: 'All Users', path: '/users' },
    { label: 'Add User', path: '/users/new' }
  ]
}
```

### Action Button
```tsx
{
  label: 'Logout',
  icon: FaSignOut,
  onClick: () => handleLogout()
}
```

## Styling

### Active State
Active items (matching current path) receive:
- Background: `bg-primary-50` (light mode)
- Background: `bg-gray-800` (dark mode)

### Hover State
- Light mode: `hover:bg-primary-50`
- Dark mode: `hover:bg-gray-800`

### Nested Items
- Indentation: `pl-9` (left padding)
- Smaller font size
- Lighter text color

### Section Titles
- Smaller text: `text-sm`
- Bold font: `font-bold`
- Extra padding: `px-3 py-2`

## Nested Navigation

### Two Levels
```tsx
const items = [
  {
    label: 'Products',
    icon: FaBox,
    list: [
      { label: 'All Products', path: '/products' },
      { label: 'Categories', path: '/products/categories' }
    ]
  }
];
```

### Collapsible Groups
Nested items are automatically collapsible:
- Click parent to expand/collapse
- Chevron icon indicates state
- Smooth animation
- Remember state per group

## Dark Mode

Automatic dark mode support:
- Background: `dark:bg-gray-950`
- Text: `dark:text-white`
- Hover: `dark:hover:bg-gray-800`
- Active: `dark:bg-gray-800`

## Custom Styling

```tsx
<nav className="custom-nav-container">
  <NavList list={items} location={location} />
</nav>
```

## With React Router

### Basic Integration
```tsx
import { useLocation } from 'react-router-dom';

function SideMenu() {
  const location = useLocation();

  return <NavList list={menuItems} location={location} />;
}
```

### With Navigation
```tsx
import { useNavigate, useLocation } from 'react-router-dom';

function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      label: 'Dashboard',
      path: '/',
      onClick: () => {
        navigate('/');
        // Additional logic
      }
    }
  ];

  return <NavList list={items} location={location} />;
}
```

## Accessibility

- Semantic `<nav>` element
- Proper `<ul>` and `<li>` structure
- Keyboard navigation
- ARIA labels on disclosure buttons
- Focus visible states
- Screen reader support

## Advanced Examples

### Multi-Level with Icons
```tsx
const items = [
  {
    label: 'E-Commerce',
    icon: FaShoppingCart,
    list: [
      { label: 'Products', path: '/products' },
      { label: 'Orders', path: '/orders' },
      {
        label: 'Customers',
        list: [
          { label: 'All Customers', path: '/customers' },
          { label: 'Groups', path: '/customers/groups' }
        ]
      }
    ]
  }
];
```

### With Badges
```tsx
const items = [
  {
    label: 'Messages',
    path: '/messages',
    icon: FaEnvelope,
    badge: '5' // You'll need to customize the component for this
  }
];
```

### Conditional Items
```tsx
const items = [
  { label: 'Dashboard', path: '/', icon: FaHome },
  ...(isAdmin ? [
    { label: 'Admin', title: true },
    { label: 'Users', path: '/admin/users', icon: FaUsers },
    { label: 'Settings', path: '/admin/settings', icon: FaCog }
  ] : [])
];

<NavList list={items} />
```

## Type Definitions

```tsx
export type NavItemObject = {
  label: string;
  path?: string;
  icon?: React.ComponentType<{ size?: number }>;
  title?: boolean;
  list?: NavItemObject[];
  onClick?: () => void;
};

export type NavListProps = {
  list: NavItemObject[];
  location?: {
    pathname: string;
  };
};
```

## Related Components

- [SideMenuLayout](../layouts/SideMenuLayout.md) - Sidebar layout
- [Navbar](./Navbar.md) - Top navigation bar
- [Container](./Container.md) - Content container

## Best Practices

1. **Use Icons**: Add icons for better visual hierarchy
2. **Group Related Items**: Use section titles and nested lists
3. **Active State**: Pass location for active highlighting
4. **Keep Shallow**: Limit nesting to 2-3 levels
5. **Clear Labels**: Use descriptive, action-oriented labels
6. **Logical Order**: Most used items first
7. **Consistent Structure**: Maintain similar patterns across items

## Notes

- Uses Headless UI's Disclosure for expandable items
- Chevron icon indicates expandable groups
- Active state automatically highlights current route
- Supports unlimited nesting levels (though 2-3 is recommended)
- Icons are passed as components (not elements)
- Click on nested item automatically closes disclosure on mobile
