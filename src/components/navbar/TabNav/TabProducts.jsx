import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
const items = [
  {
    key: "1",
    label: <Link to="/san-pham">Gạo tấm Việt Nam</Link>,
  },
  {
    key: "2",
    label: <Link to="/san-pham">Gạo thơm Việt Nam</Link>,
  },
  {
    key: "3",
    label: <Link to="/san-pham">Gạo thơm cao cấp</Link>,
  },
];

const TabProducts = () => {
  return (
    <div>
      {" "}
      <Dropdown
        menu={{
          items,
        }}
      >
        <Space>
          <Link to="/san-pham">Sản phẩm</Link>
          <DownOutlined className="text-xs" />
        </Space>
      </Dropdown>
    </div>
  );
};

export default TabProducts;
