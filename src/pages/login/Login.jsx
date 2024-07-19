import { useContext, useEffect } from "react";
import { Button, Form, Input, notification } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import StoreContext from "../../store/store";
import ModalRegister from "../../components/modal/ModalRegister";

const Login = () => {
  const { authUser } = useContext(StoreContext);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {});
  const handleSubmit = (value) => {
    const user = authUser.find(
      (item) =>
        value.username === item.userName && value.password === item.passWord,
    );

    user
      ? localStorage.setItem("users", JSON.stringify(user)) +
        navigate("/") +
        notification.success({
          message: `Xin chào ${value.username}`,
        })
      : notification.error({
          message: "Tài khoản hoặc mật khẩu không đúng!",
        });
  };
  return (
    <div>
      <div className="border-1 absolute left-[40%] top-52 h-[450px] w-[450px] rounded-lg bg-slate-200 p-5">
        <div className="mb-10">
          <h1 className="mb-2 text-3xl">LOGIN</h1>
          <hr className="mb-3 w-2/6 border-2 border-[#433520]" />
          <h3 className="text-2xl">Hello! Welcome back.</h3>
        </div>
        <div>
          <Form
            name="normal_login"
            className="login-form"
            onFinish={handleSubmit}
            form={form}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <div className="relative right-0 mb-5">
              <Link
                to="/quen-mat-khau"
                className="login-form-forgot relative right-0"
                href=""
              >
                Forgot password
              </Link>
            </div>
            <Form.Item>
              <Button
                htmlType="submit"
                className="login-form-button w-2/5 bg-[#A5D9D0] py-5 text-xl hover:bg-[#04937C]"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="flex items-center justify-center">
          Don`t have an account ?<ModalRegister />
        </div>
      </div>
    </div>
  );
};

export default Login;
