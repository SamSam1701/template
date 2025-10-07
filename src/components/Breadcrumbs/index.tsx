"use client";

import { Breadcrumb } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // tách các phần trong URL: /dashboard/users -> ["dashboard", "users"]
  const pathParts = pathname.split("/").filter((p) => p);

  // tạo mảng breadcrumb item cho Antd
  const items = pathParts.map((part, index) => {
    const href = "/" + pathParts.slice(0, index + 1).join("/");
    const label = part.charAt(0).toUpperCase() + part.slice(1);
    return {
      title:
        index === pathParts.length - 1 ? (
          <span>{label}</span>
        ) : (
          <Link href={href}>{label}</Link>
        ),
    };
  });

  // thêm Home vào đầu
  items.unshift({
    title: <Link href="/">Home</Link>,
  });

  return (
    <Breadcrumb
      items={items}
      separator={
        <i className="fa-solid fa-chevron-right text-white text-[10px] font-black"></i>
      }
      style={{
        color: "#fff",
      }}
    />
  );
}
