import BottomNavigation from "~/components/navigation/bottom-navigation";
export default function LoggedInLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex-1 overflow-y-auto">{children}</div>
      <div className="flex-shrink-0">
        <BottomNavigation />
      </div>
    </div>
  );
}
