"use client";

import React from "react";
import { ConfigProvider } from "antd";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export const AntdConfig = ({ children }: Props) => {
  const cache = React.useMemo(() => createCache(), []);

  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));
  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Menu: {
            itemMarginInline: 0,
            itemBorderRadius: 0,
            itemSelectedBg: "#486cfe",
            itemSelectedColor: "#fff",
          },
          Breadcrumb: {
            itemColor: "#fff",
            linkColor: "#fff", // Màu link trắng
            linkHoverColor: "#e0e7ff", // Màu khi hover (nhạt hơn)
            lastItemColor: "#fff", // Màu item cuối (active)
            separatorColor: "#a5b4fc", // Màu dấu "/"
            fontWeightStrong: 600, // Dùng cho item cuối (active)
          },
        },
      }}
    >
      <style>
        {`

       
        `}
      </style>
      {children}
    </ConfigProvider>
  );
};

export default AntdConfig;
