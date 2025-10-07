"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import Image from "next/image";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <i className="fa-solid fa-chart-pie text-blue-400"></i>,
    label: <Link href="/dashboard">Dashboard</Link>,
  },
  {
    key: "2",
    icon: <i className="fa-solid fa-list text-blue-400"></i>,
    label: <Link href="/projects">To do list</Link>,
  },
  {
    key: "3",
    icon: <i className="fa-solid fa-code-pull-request text-blue-400"></i>,
    label: <Link href="/reports">My requests</Link>,
  },
  {
    key: "sub1",
    label: <Link href="/attendance">Leave & Time</Link>,
    icon: <i className="fa-solid fa-calendar-days"></i>,
  },
  //   {
  //     key: "sub2",
  //     label: "Settings",
  //     icon: <i className="fa-solid fa-cog"></i>,
  //     children: [
  //       { key: "9", label: <Link href="/settings/general">General</Link> },
  //       { key: "10", label: <Link href="/settings/profile">Profile</Link> },
  //     ],
  //   },
];

export const MenuSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <div
      className={`${
        collapsed ? "w-[80px]" : "w-[240px]"
      } transition-all duration-300 h-full bg-white rounded-t-[40px] overflow-hidden shadow-md flex-shrink-0`}
    >
      <div
        className={`flex h-[62px] items-center ${
          collapsed ? "justify-center" : "justify-between"
        } `}
      >
        {!collapsed && (
          <Image
            src="https://res.cdn.avepointonlineservices.com/hris/myhr.svg"
            alt="Logo"
            width={120}
            height={40}
            className="ml-[32px]"
          />
        )}
        <button
          onClick={toggleCollapsed}
          className={` bg-[#486cfe] ${
            collapsed
              ? "rounded-full h-[40px] w-[40px]"
              : "rounded-tr-[40px] rounded-bl-[40px] h-full w-[48px]"
          }`}
        >
          {collapsed ? (
            <i className="fa-solid fa-chevron-up rotate-90 text-white text-[16px]"></i>
          ) : (
            <i className="fa-solid fa-chevron-up -rotate-90 text-white text-[16px]"></i>
          )}
        </button>
      </div>

      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
