import React from "react";
import "./Contact.css";
import {FiMap} from "react-icons/fi";
import {AiOutlineMail} from "react-icons/ai";
import {BiMobileAlt} from "react-icons/bi";

export default function Contact() {

    return <div className={"contact"} id={"contact"}>
        <h2>Get in Touch with me</h2>
        <p>
            I'm seeking out opportunities to collaborate companies and agencies.<br/>
            Reach out through any platforms below:</p>
        <div className={"contact-details"}>
            {
                [
                    {
                        icon: <FiMap/>,
                        text: <>
                            <div>Goindwal Sahib,Taran-Taran</div>
                            Punjab</>
                    },

                    {
                        icon: <BiMobileAlt/>,
                        text: <>
                            <div>Message or Call</div>
                            8528083391</>
                    },
                    {
                        icon: <AiOutlineMail/>,
                        text: <>
                            <div>gurjantrandhawa74456@gmail.com</div>
                            gurjantrandhawa744@gmail.com</>
                    },

                ].map(((value, index) => {
                    return <div key={index}>
                        <div className={"contact-details-icons"}>
                            {value.icon}
                        </div>
                        <p>{value.text}</p>
                    </div>
                }))
            }
        </div>

    </div>
}