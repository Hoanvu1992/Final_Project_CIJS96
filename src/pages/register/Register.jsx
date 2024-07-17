import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { BiPencil } from "react-icons/bi";

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
const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [modal2Open, setModal2Open] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      password: password,
    };
  };
  return (
    <div>
      <Button
        type="link"
        className="text-black"
        onClick={() => setModal2Open(true)}
      >
        <BiPencil />
        <p>Đăng ký</p>
      </Button>
      <Modal
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <div>
          <h1>Đăng ký</h1>
          <hr className="w-2/5" />
        </div>
        <div>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={handleSubmit}
            initialValues={{
              residence: ["vunguyen"],
              prefix: "86",
            }}
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
              <Input.Password />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default Register;
