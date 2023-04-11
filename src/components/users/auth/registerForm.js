import React, {useState} from 'react';
import {Button, Form, Spinner} from "react-bootstrap";
import Spacer from "../common/spacer/spacer";
import * as Yup from "yup"
import InputMask from 'react-input-mask'
import {useFormik} from "formik";
import {register} from "../../../api/userService";
import {toast} from "react-toastify";

const RegisterForm = ({setDefaultTab}) => {

    const [loading, setLoading] = useState(false);

    const initialValues = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        zipCode: "",
        email: "",
        password: "",
        confirmPassword: "",
    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required("Please Enter Your First Name") .min(4, "Must be at least 4 character"),
        lastName: Yup.string().required("Please Enter Your Last Name") .min(4, "Must be at least 4 character"),
        phoneNumber: Yup.string()
            .required("Please Enter Your Phone Number")
            .test("includes_", "Please Enter Your Phone Number", (value) =>
                value && !value.includes("_")
            ),
        address: Yup.string().required("Please Enter Your Address") .min(16, "Must be at least 16 character"),
        email: Yup.string().email().required("Please Enter Your Email"),
        zipCode: Yup.string().required("Please Enter Your Zip Code").min(4, "Must be at least 4 character"),
        password: Yup.string().required("Please Enter Your Password")
            .min(8, "Must be at least 8 character")
            .matches(/[a-z]+/, "One lowercase character")
            .matches(/[A-Z]+/, "One uppercase character")
            .matches(/[@$%ˆ&*]+/, "One special character")
            .matches(/\d+/, "One number"),
        confirmPassword: Yup.string().required("Please Re-Enter Your Password")
            .oneOf([Yup.ref("password")], "Password fields doesn't match")
    })

    const onSubmit = async (values) => {
        setLoading(true);
        try {
            const resp = await register(values)
            toast("You are registered successfully")
            setDefaultTab("login")
            setLoading(false);
        } catch (e) {
            console.log(e)
            toast(e.response.data.message)
            setLoading(false)
        }
    }

    const formik = useFormik({
        initialValues, validationSchema, onSubmit,
    })
    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text"
                              {...formik.getFieldProps("firstName")}
                              isInvalid={formik.touched.firstName && formik.errors.firstName}
                              isvalid={formik.touched.firstName && !formik.errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.firstName}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"
                              {...formik.getFieldProps("lastName")}
                              isInvalid={formik.touched.lastName && formik.errors.lastName}
                              isvalid={formik.touched.lastName && !formik.errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.lastName}
                </Form.Control.Feedback>

            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" as={InputMask} mask="(999) 999-9999"
                              {...formik.getFieldProps("phoneNumber")}
                              isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
                              isvalid={formik.touched.phoneNumber && !formik.errors.phoneNumber}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.phoneNumber}
                </Form.Control.Feedback>

            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text"
                              {...formik.getFieldProps("address")}
                              isInvalid={formik.touched.address && formik.errors.address}
                              isvalid={formik.touched.address && !formik.errors.address}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.address}
                </Form.Control.Feedback>

            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="number"
                              {...formik.getFieldProps("zipCode")}
                              isInvalid={formik.touched.zipCode && formik.errors.zipCode}
                              isvalid={formik.touched.zipCode && !formik.errors.zipCode}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.zipCode}
                </Form.Control.Feedback>

            </Form.Group>

            <Spacer height={20}/>
            <hr/>
            <Spacer height={20}/>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                              {...formik.getFieldProps("email")}
                              isInvalid={formik.touched.email && formik.errors.email}
                              isvalid={formik.touched.email && !formik.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                              {...formik.getFieldProps("password")}
                              isInvalid={formik.touched.password && formik.errors.password}
                              isvalid={formik.touched.password && !formik.errors.password}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control type="password"
                              {...formik.getFieldProps("confirmPassword")}
                              isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
                              isvalid={formik.touched.confirmPassword && !formik.errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.confirmPassword}
                </Form.Control.Feedback>

            </Form.Group>

            <Button variant="primary" type="submit" disabled={loading}>
                {loading && <Spinner animation="border" size="sm" />} Register
            </Button>
        </Form>
    );
};

export default RegisterForm;