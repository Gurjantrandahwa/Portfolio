import React from "react";
import "./Contact.css";
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/solid";
import {MapPinIcon} from "@heroicons/react/20/solid";
import {useForm} from "react-hook-form";

const defaultValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
}

export default function Contact() {


    return <div className={"contact"} id={"contact"}>
        <p className={"contact-header"}>
            Contact
        </p>
        <div className={"subheading-wrapper"}>
            <h4 className={"subheading"}>
                I have got just what you need.{" "}
                <span className={"underline-text"}>Lets Talk.</span>
            </h4>
            <div className={"details-wrapper"}>
                {
                    [
                        {
                            icon: <PhoneIcon/>,
                            detail: "8528083391"
                        },
                        {
                            icon: <EnvelopeIcon/>,
                            detail: "gurjantrandhawa74456@gmail.com"
                        },
                        {
                            icon: <MapPinIcon/>,
                            detail: "Goindwal Sahib,Taran-Taran Punjab"
                        },
                    ].map((value, index) => {
                        return <div key={index} className={"icon-wrapper"}>
                            <div className={"icons"}>
                                {value.icon}
                            </div>

                            <p className={"details"}>{value.detail}</p>

                        </div>
                    })
                }
            </div>
            <div>

                <form
                    className={"form-wrapper"}
                    action={"https://formspree.io/f/xzbqpbed"} method={"POST"}>

                    <input
                        placeholder={"Name"}
                        type={"name"}
                    />
                    <input

                        placeholder={"Email"}
                        type={"email"}
                    />

                    <input

                        placeholder={"Subject"}
                        type={"text"}
                    />

                    <textarea

                        rows={5}
                        placeholder={"Message"}
                        className={"contactInput"}/>

                    <button type={"submit"}
                            className={"bg-[#F7AB0A] py-3 px-5 rounded-md text-black font-bold text-ls"}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
}