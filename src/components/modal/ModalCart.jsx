import { Modal, Table } from "antd";
import { useContext } from "react";
import StoreContext from "../../store/store";

const ModalCart = () => {
  const { isModalOpen, setIsModalOpen } = useContext(StoreContext);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <a>Delete</a>,
    },
  ];
  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <h1 className="border-b-2 text-4xl p-2">Giỏ hàng</h1>
        <Table dataSource={dataSource} columns={columns} />
      </Modal>
    </div>
  );
};

export default ModalCart;
