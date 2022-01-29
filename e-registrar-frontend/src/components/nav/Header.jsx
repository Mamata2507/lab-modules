import React, { useState } from "react";

import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined, HomeOutlined } from '@ant-design/icons';

const Header = () => {
  const [current, setCurrent] = useState({ current: 'home' })

  const handleClick = e => {
    setCurrent({ current: e.key });
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      onClick={handleClick}
      selectedKeys={[current]}
    >
      <Menu.Item
        key="home"
        icon={<HomeOutlined />}
        style={{ margin: "10px" }}
      >
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item
        key="student"
        icon={<UserOutlined />}
        style={{ margin: "10px" }}
      >
        <Link to="/student">Students</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
