import { useContext, useState } from "react";
import { Modal, Form, Input, Button, notification } from "antd";
import StoreContext from "../../store/store";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const ModalRegister = () => {
  const { authUser, setAuthUser } = useContext(StoreContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [modal2Open, setModal2Open] = useState(false);
  const [form] = Form.useForm();
  const handleSubmit = () => {
    const newUser = [
      {
        userName: name,
        passWord: password,
      },
    ];
    localStorage.setItem("newUsers", JSON.stringify(newUser));
    if (password === confirm) {
      notification.success({
        message: "Đăng ký thành công",
      });
      setAuthUser(newUser);
      setModal2Open(false);
    } else {
      notification.error({
        message: "Đăng ký không thành công",
      });
    }
  };

  return (
    <div>
      <Button
        type="link"
        className="text-blue"
        onClick={() => setModal2Open(true)}
      >
        Register now
      </Button>
      <Modal
        centered
        open={modal2Open}
        onOk={handleSubmit} // setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <div>
          <h1 className="text-3xl mb-2">Đăng ký</h1>
          <hr className="w-2/6 mb-3 border-2 border-[#433520] " />
        </div>
        <div className="my-10">
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={handleSubmit}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <Form.Item
              name="userName"
              label="userName"
              rules={[
                {
                  type: "userName",
                  message: "The input is not valid UserName!",
                },
                {
                  required: true,
                  message: "Please input your UserName!",
                },
              ]}
            >
              <Input onChange={(e) => setName(e.target.value)} />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password onChange={(e) => setConfirm(e.target.value)} />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalRegister;
