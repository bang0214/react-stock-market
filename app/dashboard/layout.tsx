import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="w-full border-b">
        <div className="max-w-[75%] mx-auto">
          <Header />
        </div>
      </div>
      <div className="w-3/4 mx-auto p-5">{children}</div>
    </div>
  );
}
