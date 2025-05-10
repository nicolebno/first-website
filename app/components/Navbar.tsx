// app/components/Navbar.tsx
import Link from 'next/link'; // Import the Link component for navigation

export default function Navbar() {
  // Updated menu items with your provided titles
  // Make sure the 'path' values match your actual page routes
  const menuItems = [
    { title: "Clients", path: "/clients/new" },     // Links to the client list page
    { title: "Renewals", path: "/renewals" },   // Links to the renewals page
    { title: "Quotes", path: "/quotes" },     // Links to the quotes page
    { title: "Proposals", path: "/proposals" }, // Links to the proposals page
    { title: "Audit", path: "/audit" },       // Links to the audit page
  ];

  return (
    // Using base-100 for background, will use your active theme's base color
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile Dropdown Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            // Styling for the dropdown menu panel
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
            {/* Map over menuItems to create mobile links */}
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Site Title/Logo - Linked to homepage */}
        <Link href="/" className="btn btn-ghost text-xl normal-case">
           Cavignac {/* Your updated site name */}
        </Link>
      </div>

      {/* Desktop Horizontal Menu - hidden on small screens, flex on large */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Map over menuItems to create desktop links */}
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side of the Navbar */}
      <div className="navbar-end">
        {/* Example Login/User button - customize as needed */}
        <Link href="/login" className="btn btn-primary"> {/* Uses theme's primary color */}
          Login
        </Link>
      </div>
    </div>
  );
}