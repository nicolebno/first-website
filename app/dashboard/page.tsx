// app/dashboard/page.tsx
import Link from 'next/link';
export default function DashboardPage() {
    // In a real app, you'd fetch user-specific data here or have it passed via props/context
    const userName = "Valued User"; // Placeholder
  
    return (
      <div className="p-4 sm:p-6 md:p-8"> {/* Overall padding for the dashboard content area */}
        <h1 className="text-3xl font-bold text-base-content mb-6">
          Welcome back, {userName}!
        </h1>
  
        {/* Grid for Dashboard Cards/Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
        <div className="card-body">
            <h2 className="card-title text-primary">Recent Quotes</h2> {/* Changed title */}
            <div className="stats stats-vertical sm:stats-horizontal shadow bg-primary text-primary-content">
            <div className="stat">
                <div className="stat-title">Drafts</div>
                <div className="stat-value">3</div> {/* Placeholder data */}
                <div className="stat-desc">Awaiting submission</div>
            </div>
            <div className="stat">
                <div className="stat-title">Sent</div>
                <div className="stat-value">15</div> {/* Placeholder data */}
                <div className="stat-desc">Waiting for response</div>
            </div>
            <div className="stat">
                <div className="stat-title">Accepted</div>
                <div className="stat-value">27</div> {/* Placeholder data */}
                <div className="stat-desc">Last 30 days</div>
            </div>
            </div>
            <div className="card-actions justify-end mt-4">
            {/* This button now links to the /quotes page */}
            <Link href="/quotes" className="btn btn-sm btn-outline btn-primary">
                View All Quotes
            </Link>
            </div>
        </div>
        </div>
  
          {/* Example Card 2: Recent Activity */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <h2 className="card-title text-secondary">Recent Activity</h2>
              <ul className="list-disc list-inside text-base-content space-y-1 text-sm">
                <li>New quote generated for "Alpha Corp".</li>
                <li>Proposal "Project Phoenix" updated.</li>
                <li>Audit for "Beta LLC" completed.</li>
                <li>Client "Gamma Inc." signed up.</li>
              </ul>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-outline btn-secondary">See All Activity</button>
              </div>
            </div>
          </div>
  
          {/* Example Card 3: Quick Actions / Links */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <h2 className="card-title text-accent">Quick Actions</h2>
              <div className="space-y-2 mt-2">
                <button className="btn btn-accent btn-block">Create New Quote</button>
                <button className="btn btn-outline btn-accent btn-block">View All Proposals</button>
                <button className="btn btn-outline btn-block">Start New Audit</button>
              </div>
            </div>
          </div>
  
          {/* Add more cards/widgets as needed */}
          {/* Example: A chart placeholder */}
          <div className="card bg-base-100 shadow-xl md:col-span-2 lg:col-span-1 hover:shadow-2xl transition-shadow">
            <div className="card-body items-center justify-center">
              <h2 className="card-title">Performance Chart</h2>
              <div className="w-full h-48 bg-base-200 rounded-lg flex items-center justify-center text-base-content/50">
                [Chart Placeholder]
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  }