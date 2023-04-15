import React, {useState} from 'react';
import {Button, Form, Spinner} from "react-bootstrap";
import * as Yup from "yup"
import InputMask from 'react-input-mask'
import {useFormik} from "formik";
 import {toast} from "react-toastify";
import {updateProfile} from "../../../api/userService";

const ProfileForm = ({user}) => {

    const [loading, setLoading] = useState(false);

    const initialValues = {
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        address: user.address,
        zipCode: user.zipCode,
        email: user.email,

    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required("Please Enter Your First Name").min(4, "Must be at least 4 character"),
        lastName: Yup.string().required("Please Enter Your Last Name").min(4, "Must be at least 4 character"),
        phoneNumber: Yup.string()
            .required("Please Enter Your Phone Number")
            .test("includes_", "Please Enter Your Phone Number", (value) =>
                value && !value.includes("_")
            ),
        address: Yup.string().required("Please Enter Your Address").min(16, "Must be at least 16 character"),
        email: Yup.string().email().required("Please Enter Your Email"),
        zipCode: Yup.string().required("Please Enter Your Zip Code").min(4, "Must be at least 4 character"),
         })

    const onSubmit = async (values) => {
        setLoading(true);
        try {
           await updateProfile(values)
            toast("You are profile successfully")
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

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                              {...formik.getFieldProps("email")}
                              isInvalid={formik.touched.email && formik.errors.email}
                              isvalid={formik.touched.email && !formik.errors.email}
                              disabled
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                </Form.Control.Feedback>

            </Form.Group>

            <Button variant="primary" type="submit" disabled={loading}>
                {loading && <Spinner animation="border" size="sm"/>} Update Profile
            </Button>
        </Form>
    );
};

export default ProfileForm;