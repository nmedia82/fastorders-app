import React, { useState } from "react";
import { LoginFormProp } from "../../../../../Types/Others.type";
import CommonLogo from "./CommonLogo";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";
import { Btn, H2, P } from "../../../../../AbstractElements";
import {
  EmailAddress,
  ForgotPassword,
  Password,
  RememberPassword,
  SignIn,
  SignInAccount,
} from "../../../../../Utils/Constants";
import { Link, useNavigate } from "react-router-dom";
import SocialLinks from "../../../../../Pages/Auth/SocialLinks";
import { loginUser } from "../../../../../services/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchProducts,
} from "../../../../../ReduxToolkit/Reducers/ProductsReducer";
import { AppDispatch } from "../../../../../ReduxToolkit/Store";
import { fetchOrders } from "../../../../../ReduxToolkit/Reducers/OrdersReducer";

export default function LoginForm({ logoClass }: LoginFormProp) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggle = () => setPasswordVisible(!isPasswordVisible);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkbox1: false,
  });
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    loginUser(formData)
      .then(async (data) => {
        // disptching products/categories/orders
        await dispatch(fetchProducts());
        await dispatch(fetchCategories());
        await dispatch(fetchOrders());
        navigate(`/dashboard`);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
        setFormData((prevData) => ({
          ...prevData,
          password: "",
        }));
      });
  };
  return (
    <div>
      <div className="login-main">
        <Form className="theme-form" onSubmit={handleSubmit}>
          <H2>{SignInAccount}</H2>
          <P>{"Enter your email & password to login"}</P>
          <FormGroup>
            <Col>
              <Label>{EmailAddress}</Label>
            </Col>
            <Input
              type="email"
              required
              placeholder="Test@gmail.com"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Col>
              <Label>{Password}</Label>
            </Col>
            <div className="form-input position-relative">
              <Input
                type={isPasswordVisible ? "text" : "password"}
                name="login[password]"
                required
                placeholder="*********"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className="show-hide" onClick={toggle}>
                <span className={!isPasswordVisible ? "show" : ""}></span>
              </div>
            </div>
          </FormGroup>
          <div className="mb-0 form-group">
            <div className="checkbox p-0">
              <Input
                id="checkbox1"
                type="checkbox"
                checked={formData.checkbox1}
                onChange={handleInputChange}
              />
              <Label className="text-muted" htmlFor="checkbox1">
                {RememberPassword}
              </Label>
            </div>
            <Link
              className="link"
              to={`${process.env.PUBLIC_URL}/auth/forget_password`}
            >
              {ForgotPassword}
            </Link>
            <div className="text-end mt-3">
              <Btn color="primary" block className="w-100">
                {SignIn}
              </Btn>
            </div>
            {loading && <p className="text-success">Please wait ...</p>}
          </div>
          <SocialLinks />
        </Form>
      </div>
    </div>
  );
}
