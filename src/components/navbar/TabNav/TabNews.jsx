import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: <Link to="/san-pham">Tin tức gạo</Link>,
  },
  {
    key: "2",
    label: <Link to="/san-pham">Món ăn từ gạo</Link>,
  },
];

const TabNews = () => {
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
      >
        <Space>
          <Link to="/tin-tuc">Tin tức</Link>
          <DownOutlined className="text-xs" />
        </Space>
      </Dropdown>
    </div>
  );
};

export default TabNews;
