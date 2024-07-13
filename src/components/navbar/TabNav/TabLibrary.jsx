import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: <Link to="/san-pham">Video</Link>,
  },
  {
    key: "2",
    label: <Link to="/san-pham">Ảnh</Link>,
  },
];
const TabLibrary = () => {
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
      >
        <Space>
          <Link to="/thu-vien">Thư viện</Link>
          <DownOutlined className="text-xs" />
        </Space>
      </Dropdown>
    </div>
  );
};

export default TabLibrary;
