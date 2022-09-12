import React, {useState} from "react";
import "./Contact.css";
import {FiMap} from "react-icons/fi";
import {BsTelephone} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {BiMobileAlt} from "react-icons/bi";
import {Formik} from "formik";
import db from "../../Common/firebase";
import {Button, Form} from "react-bootstrap";

export default function Contact() {
    const [message, setMessage] = useState('')

    return <div className={"contact"}>
        <h2>Get in Touch with me</h2>
        <p>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget
            risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula,
            eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
        <div className={"contact-details"}>
            {
                [
                    {
                        icon: <FiMap/>,
                        text: <>
                            <div>Moon Street Light Avenue</div>
                            14/05 Jupiter, JP 80630</>
                    },
                    {
                        icon: <BsTelephone/>,
                        text: <>
                            <div>Moon Street Light Avenue</div>
                            14/05 Jupiter, JP 80630</>
                    },
                    {
                        icon: <BiMobileAlt/>,
                        text: <>
                            <div>Moon Street Light Avenue</div>
                            14/05 Jupiter, JP 80630</>
                    },
                    {
                        icon: <AiOutlineMail/>,
                        text: <>
                            <div>Moon Street Light Avenue</div>
                            14/05 Jupiter, JP 80630</>
                    },

                ].map(((value, index) => {
                    return <div key={index}>

                        <div className={"contact-details-icons"}>
                            {value.icon}
                        </div>
                         {value.text}
                    </div>
                }))
            }
        </div>
        <div>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                }}
                onSubmit={(values, formikHelpers) => {
                    formikHelpers.setSubmitting(false)
                    setMessage("")
                    db.collection('message').add(values).then(value => {
                        formikHelpers.resetForm({
                            name: "",
                            email: "",
                            subject: "",
                            message: "",
                        })
                        setMessage("Your Message has been added")
                    });
                }}
            >
                {({
                      values,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      touched,
                      errors,
                      handleBlur
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className={"form-wrapper"}>
                            <div>
                                <Form.Label>Name</Form.Label>
                                <div>
                                    <Form.Control
                                        onBlur={handleBlur}
                                        name={"name"}
                                        value={values.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <Form.Label>Email</Form.Label>
                                <div>
                                    <Form.Control
                                        onBlur={handleBlur}
                                        name={"email"}
                                        value={values.email}
                                        onChange={handleChange}
                                        touched={touched}
                                    />

                                </div>
                                <Form.Label>Subject</Form.Label>
                                <div>
                                    <Form.Control
                                        onBlur={handleBlur}
                                        name={"subject"}
                                        value={values.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <Form.Label>Message</Form.Label>
                                </div>

                                <Form.Control
                                    as="textarea"
                                    name={"message"}
                                    value={values.message}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <Button
                            disabled={isSubmitting}
                            type={"submit"}>
                            Send Message
                        </Button>
                    </Form>
                )}

            </Formik>

        </div>

    </div>
}