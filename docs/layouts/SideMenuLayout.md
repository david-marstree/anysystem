# SideMenuLayout

A responsive sidebar layout with toggle functionality, mobile support, and localStorage persistence.

## Import

```tsx
import { SideMenuLayout } from 'anysystem-design';
```

## Basic Usage

```tsx
import { Outlet } from 'react-router-dom';

<SideMenuLayout>
  <Outlet />
</SideMenuLayout>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Main content area |
| `menu` | `ReactNode` | - | Sidebar menu content |
| `header` | `ReactNode` | - | Header content |
| `defaultOpen` | `boolean` | `true` | Initial menu state |
| `persistKey` | `string` | `"sideMenu"` | localStorage key |
| `className` | `object` | - | Custom styling for sections |

## Features

- **Responsive Design**: Automatically adapts to mobile and desktop
- **Toggle Functionality**: Collapse/expand sidebar
- **localStorage Persistence**: Remembers menu state
- **Mobile Overlay**: Sidebar overlays content on mobile
- **Smooth Transitions**: Animated menu transitions

## Complete Example

```tsx
import { SideMenuLayout, NavList, Navbar } from 'anysystem-design';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

function AppLayout() {
  const menuItems = [
    { label: 'Home', path: '/', icon: <FaHome /> },
    { label: 'Profile', path: '/profile', icon: <FaUser /> },
    { label: 'Settings', path: '/settings', icon: <FaCog /> }
  ];

  return (
    <SideMenuLayout
      header={
        <Navbar
          logo={<img src="/logo.png" alt="Logo" />}
          title="My App"
        />
      }
      menu={
        <NavList items={menuItems} />
      }
    >
      <Outlet />
    </SideMenuLayout>
  );
}
```

## Layout Sections

### Header
The top navigation bar area:

```tsx
<SideMenuLayout
  header={
    <div className="flex items-center justify-between p-4 bg-white shadow">
      <h1>My Application</h1>
      <div className="flex gap-4">
        <button>Notifications</button>
        <button>Profile</button>
      </div>
    </div>
  }
>
  {children}
</SideMenuLayout>
```

### Sidebar Menu
The left sidebar content:

```tsx
<SideMenuLayout
  menu={
    <div className="p-4">
      <nav>
        <ul className="space-y-2">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  }
>
  {children}
</SideMenuLayout>
```

### Main Content
The main content area (children):

```tsx
<SideMenuLayout menu={menu} header={header}>
  <div className="p-6">
    <h1>Dashboard</h1>
    <p>Main content goes here</p>
  </div>
</SideMenuLayout>
```

## Responsive Behavior

### Desktop (≥ 1024px)
- Sidebar is visible by default
- Fixed width sidebar
- Toggle button collapses to icon-only mode
- Content adjusts automatically

### Mobile (< 1024px)
- Sidebar is hidden by default
- Hamburger menu button in header
- Sidebar overlays content when open
- Backdrop closes menu when clicked

## State Persistence

The menu state is automatically saved to localStorage:

```tsx
<SideMenuLayout
  persistKey="adminPanel"  // Saves to localStorage with this key
  defaultOpen={true}       // Initial state on first visit
>
  {children}
</SideMenuLayout>
```

localStorage key format: `sideMenu-{persistKey}`

## Custom Styling

```tsx
<SideMenuLayout
  className={{
    container: "bg-gray-100",
    header: "bg-blue-600 text-white",
    sidebar: "bg-gray-800",
    content: "bg-white",
    overlay: "bg-black/50"
  }}
  menu={menu}
  header={header}
>
  {children}
</SideMenuLayout>
```

## With Navbar Component

```tsx
import { Navbar } from 'anysystem-design';

<SideMenuLayout
  header={
    <Navbar
      logo={<img src="/logo.png" className="h-8" />}
      title="Admin Panel"
      actions={
        <>
          <button className="p-2">
            <FaBell />
          </button>
          <button className="p-2">
            <FaUser />
          </button>
        </>
      }
    />
  }
  menu={<NavList items={menuItems} />}
>
  {children}
</SideMenuLayout>
```

## With NavList Component

```tsx
import { NavList } from 'anysystem-design';
import { FaHome, FaUsers, FaCog, FaChartBar } from 'react-icons/fa';

const menuItems = [
  {
    label: 'Dashboard',
    path: '/',
    icon: <FaHome />
  },
  {
    label: 'Users',
    path: '/users',
    icon: <FaUsers />,
    badge: '12'
  },
  {
    label: 'Analytics',
    path: '/analytics',
    icon: <FaChartBar />
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: <FaCog />
  }
];

<SideMenuLayout
  menu={<NavList items={menuItems} />}
  header={<Navbar />}
>
  {children}
</SideMenuLayout>
```

## Advanced Examples

### Multi-Level Navigation
```tsx
const menu = (
  <div className="p-4 space-y-2">
    <div>
      <h3 className="text-xs uppercase text-gray-500 mb-2">Main</h3>
      <NavList items={mainItems} />
    </div>

    <div>
      <h3 className="text-xs uppercase text-gray-500 mb-2">Admin</h3>
      <NavList items={adminItems} />
    </div>

    <div className="mt-auto pt-4 border-t">
      <NavList items={bottomItems} />
    </div>
  </div>
);

<SideMenuLayout menu={menu} header={header}>
  {children}
</SideMenuLayout>
```

### With User Profile in Sidebar
```tsx
const menu = (
  <div className="flex flex-col h-full">
    <div className="p-4 border-b">
      <div className="flex items-center gap-3">
        <img src="/avatar.jpg" className="w-10 h-10 rounded-full" />
        <div>
          <div className="font-semibold">John Doe</div>
          <div className="text-xs text-gray-500">john@example.com</div>
        </div>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto">
      <NavList items={menuItems} />
    </div>

    <div className="p-4 border-t">
      <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
        <FaSignOut className="inline mr-2" />
        Logout
      </button>
    </div>
  </div>
);

<SideMenuLayout menu={menu} header={header}>
  {children}
</SideMenuLayout>
```

### Collapsible Sidebar with Icons
```tsx
function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SideMenuLayout
      menu={
        <NavList
          items={menuItems}
          collapsed={collapsed}
          showLabels={!collapsed}
        />
      }
      header={
        <Navbar
          onMenuToggle={() => setCollapsed(!collapsed)}
        />
      }
      className={{
        sidebar: collapsed ? "w-16" : "w-64"
      }}
    >
      {children}
    </SideMenuLayout>
  );
}
```

## Integration with React Router

```tsx
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <SideMenuLayout menu={<NavList items={menuItems} />} header={<Navbar />}>
      <Outlet />
    </SideMenuLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

## Dark Mode Support

```tsx
<SideMenuLayout
  className={{
    sidebar: "bg-gray-900 dark:bg-black",
    content: "bg-white dark:bg-gray-800",
    header: "bg-gray-800 dark:bg-gray-900"
  }}
  menu={<NavList items={menuItems} theme="dark" />}
  header={<Navbar theme="dark" />}
>
  {children}
</SideMenuLayout>
```

## Accessibility

- Keyboard navigation support
- ARIA labels for menu toggle
- Focus management
- Screen reader friendly
- Proper landmark regions

## Mobile Considerations

- Touch-friendly menu toggle
- Swipe gesture support (if enabled)
- Overlay backdrop on mobile
- Proper z-index stacking
- Responsive breakpoints

## Type Definitions

```tsx
export type SideMenuLayoutProps = {
  children: React.ReactNode;
  menu?: React.ReactNode;
  header?: React.ReactNode;
  defaultOpen?: boolean;
  persistKey?: string;
  className?: {
    container?: string;
    header?: string;
    sidebar?: string;
    content?: string;
    overlay?: string;
  };
};
```

## Related Components

- [Navbar](../components/Navbar.md) - Top navigation bar
- [NavList](../components/NavList.md) - Navigation list/menu
- [EmptyLayout](./EmptyLayout.md) - Minimal layout alternative

## Best Practices

1. **Use with React Router**: Perfect for multi-page applications
2. **Consistent menu items**: Keep navigation consistent across pages
3. **Clear hierarchy**: Organize menu items logically
4. **Mobile-first**: Test on mobile devices
5. **Accessible**: Ensure keyboard navigation works
6. **Performance**: Avoid heavy computations in menu rendering

## Notes

- Uses `useLocalStorage` hook for state persistence
- Automatically detects window size for responsive behavior
- Menu state is synchronized across all instances with the same `persistKey`
- Smooth CSS transitions for menu open/close
- Properly handles React Router's `Outlet` component
