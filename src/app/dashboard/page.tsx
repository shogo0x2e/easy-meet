/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dRVbKcq8pNK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <main className="flex-1 overflow-y-auto">
        <div className="grid gap-4 p-4">
          <div className="grid gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm dark:bg-gray-950">
              <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="flex-1 border-0 focus:ring-0 dark:bg-gray-950 dark:text-white"
              />
              <Button variant="ghost" size="icon" className="rounded-full">
                <SearchIcon className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <div className="gap-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
              <div className="flex items-start pb-4">
                <FaMapMarkerAlt size={20} className="mr-2" />
                <div className="font-medium">View map</div>
              </div>
              <div className="h-[200px] bg-gray-200"></div>
            </div>
            <div className="gap-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
              <div className="flex items-start pb-4">
                <FaRegCalendarAlt size={20} className="mr-2" />
                <div className="font-medium">Calendar</div>
              </div>
              <div className="h-[200px] bg-gray-200"></div>
            </div>
          </div>
        </div>
      </main>
      <nav className="flex items-center justify-around border-t border-gray-200 bg-white px-4 py-2 dark:border-gray-800 dark:bg-gray-950">
        <Link
          href="#"
          className="flex flex-col items-center gap-1 text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          prefetch={false}
        >
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-1 text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          prefetch={false}
        >
          <SearchIcon className="h-6 w-6" />
          <span className="text-xs">Search</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-1 text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          prefetch={false}
        >
          <CompassIcon className="h-6 w-6" />
          <span className="text-xs">Explore</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-1 text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          prefetch={false}
        >
          <UserIcon className="h-6 w-6" />
          <span className="text-xs">Profile</span>
        </Link>
      </nav>
    </div>
  );
}

function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
