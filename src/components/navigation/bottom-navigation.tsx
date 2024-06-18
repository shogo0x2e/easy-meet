import Link from "next/link";

const BottomNavigation = () => {
  return (
    <nav className="flex items-center justify-around border-t border-gray-200 bg-white px-4 py-2 dark:border-gray-800 dark:bg-gray-950">
      <Link
        href={"/home"}
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
        href="/map"
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
  );
};

export default BottomNavigation;

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
