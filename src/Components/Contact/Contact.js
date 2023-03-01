import React from "react";
import "./Contact.css";
import {Button, TextField} from "@mui/material";

export default function Contact() {
    return <div className={"contact"}
                id={"contact"}
    >
        <h3>Contact me</h3>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6815.278506213998!2d75.12388963435299!3d31.34133444341954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a2fb3984b32db%3A0x62defdf476e79c92!2sDhunda%2C%20Punjab%20143422!5e0!3m2!1sen!2sin!4v1677647919647!5m2!1sen!2sin"
            width="50%" height="350" style={{border: 0}} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">

        </iframe>

        <div className={"details"}>
            <p>Mobile: 8528083391</p>
            <p>Email: gurjantrandhawa74456@gmail.com</p>

        </div>
        <div className={"form-container"}>
            <p>You can send me message here...</p>
            <div className={"contact-form"}>

                {/*<Formik>*/}
                <form action={"https://formspree.io/f/xzbqpbed"} method={"POST"}>
                    <div>
                        <TextField
                            margin={"normal"}
                            sx={{width: "100%", marginBottom: "20px"}}
                            size={"small"}
                            type={"text"}
                            placeholder={"Username"}
                            name={"Username"}
                            required
                            autoComplete={"off"}
                            variant={"outlined"}

                        />
                    </div>
                    <div>
                        <TextField
                            sx={{width: "100%", marginBottom: "20px"}}
                            size={"small"}
                            type={"email"}
                            placeholder={"Email"}
                            name={"Email"}
                            required
                            autoComplete={"off"}
                            variant={"outlined"}
                        />
                    </div>
                    <div>
                        <TextField

                            multiline
                            sx={{width: "100%", marginBottom: "20px", border: "1px solid #F7AB0A", color: "white"}}
                            placeholder={"Enter your message"}
                            cols={"59"}
                            minRows={"6"}
                            autoComplete={"off"}
                            name={"Message"}
                            required
                        />
                    </div>

                    <Button
                        variant={"contained"}
                        value={"send"}
                        type={"submit"}
                        sx={{width: "100%", marginBottom: "20px", bgcolor: "maroon"}}
                    >
                        Send
                    </Button>
                </form>
                {/*</Formik>*/}

            </div>
        </div>
    </div>
}