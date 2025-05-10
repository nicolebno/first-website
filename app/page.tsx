// app/page.tsx
import Link from 'next/link';

export default function PublicHomePage() {
  return (
    <div className="hero min-h-[calc(100vh-4rem)] bg-base-500"> {/* Adjust 4rem based on your navbar height */}
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-primary">
            My Portal {/* Or a more specific name for your portal */}
          </h1>
          <p className="py-6 text-lg text-base-content">
            Access your dashboard to manage clients, renewals, quotes, proposals, and audits.
          </p>
          <Link href="/dashboard" className="btn btn-primary btn-lg">
            Go to Dashboard
          </Link>
          {/* You might not even need a separate login button if "Go to Dashboard" 
            will handle the auth check and redirect to login if not authenticated.
            But if you want an explicit login link:
            <Link href="/login" className="btn btn-outline btn-lg ml-4">
              Login
            </Link>
          */}
        </div>
      </div>
    </div>
  );
}