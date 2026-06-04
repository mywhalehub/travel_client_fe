import WhiteBottomNav from "@/components/WhiteBottomNav";

export default function WhiteMainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-1">
        {children}
      </div>
      <WhiteBottomNav />
    </div>
  );
}
