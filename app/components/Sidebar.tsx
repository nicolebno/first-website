// FILE: app/components/Sidebar.tsx
// Basic Placeholder for Sidebar Component
export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4">Navigation</h2>
      <nav>
        <ul>
          <li className="mb-2"><a href="/dashboard" className="hover:text-blue-600">Dashboard</a></li>
          <li className="mb-2"><a href="/dashboard/settings" className="hover:text-blue-600">Settings</a></li>
          {/* Add more links */}
        </ul>
      </nav>
    </aside>
  );
}
