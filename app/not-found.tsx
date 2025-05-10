// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="hero min-h-[calc(100vh-8rem)] bg-base-200"> {/* Adjust min-height based on your navbar/footer total height */}
      <div className="hero-content text-center">
        <div className="max-w-lg px-4"> {/* Max width for content */}

          {/* Interactive Link */}
          <div className="mt-6"> {/* Added margin top for spacing */}
            <Link
              href="/"
              // Add 'group' to the Link component itself
              // Add some padding, optional hover background for better link affordance
              className="group inline-block px-4 py-2 rounded-lg transition duration-150 ease-in-out hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {/* Default text: Display normally, hide when parent Link is hovered */}
              <span className="inline group-hover:hidden text-2xl font-semibold text-base-content">
                It's not you, it's me...
              </span>

              {/* Hover text: Hide normally, display when parent Link is hovered */}
              <span className="hidden group-hover:inline text-2xl font-semibold text-secondary">
                JK, it is you.
              </span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}