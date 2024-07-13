import { useState } from "react";
import { Modal, Form, Input, Button } from "antd";

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
  const [modal2Open, setModal2Open] = useState(false);
  const [form] = Form.useForm();
  const handleSubmit = (value) => {
    console.log("🚀 ~ handleSubmit ~ handleSubmit:", handleSubmit);
    console.log("🚀 ~ handleSubmit ~ value:", value);
    if (value.password === value.confirm) {
      alert("Đăng ký thành công");
      setModal2Open(false);
    } else {
      alert("Mật khẩu không khớp");
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
        onOk={() => setModal2Open(false)}
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
              <Input />
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
              <Input.Password />
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
              <Input.Password />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalRegister;
