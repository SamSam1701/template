import "./globals.css";
import AntdConfig from "@/providers/antd-config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AntdConfig>{children}</AntdConfig>
      </body>
    </html>
  );
}
