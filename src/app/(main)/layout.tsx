import { HeaderNav, MenuSidebar } from "@/components";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <main className={"app-main main main-pri bg-[#f3f6ff] h-screen "}>
      <div className="flex pt-4 px-4 gap-4 h-full">
        <MenuSidebar />
        <div className="w-full">
          <HeaderNav />
          {props.children}
        </div>
      </div>
    </main>
  );
}
