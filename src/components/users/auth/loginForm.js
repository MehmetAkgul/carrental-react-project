import React, {useState} from 'react';
import {Button, Form, Spinner} from "react-bootstrap";
import * as Yup from "yup";
import {useFormik} from "formik";
import {getUser, login} from "../../../api/userService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useStore} from "../../../stores";
import {loginSuccess} from "../../../stores/user/userActions";

const LoginForm = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {dispatchUser} = useStore();


    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string().email().required("Please enter your email"),
        password: Yup.string().required("Please enter your password")
    });

    const onSubmit = (values) => {
        setLoading(true); // loading islemeini baslat

        login(values).then(response => {
            localStorage.setItem('token', response.data.token);
            getUser().then(responseUser => {
                setLoading(false); // loading islemeini durdur
                dispatchUser(loginSuccess(responseUser.data));
                navigate(-1); // bir onceki sayfaya don
            }).catch(error => {
                toast(error.response.data.message);
                setLoading(false);
            })

        }).catch(error => {
            toast(error.response.data.message)
            setLoading(false);
        })
    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })
    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                              {...formik.getFieldProps("email")}
                              isInvalid={formik.touched.email && !!formik.errors.email}
                              isValid={formik.touched.email && !formik.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                              {...formik.getFieldProps("password")}
                              isInvalid={formik.touched.password && !!formik.errors.password}
                              isValid={formik.touched.password && !formik.errors.password}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
                {loading && <Spinner animation="border" size="sm"/>} Login
            </Button>
        </Form>
    );
};

export default LoginForm;