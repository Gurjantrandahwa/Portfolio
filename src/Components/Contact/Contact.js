import React from "react";
import "./Contact.css";


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

                        text: <>
                            <div>Goindwal Sahib,Taran-Taran</div>
                            Punjab</>
                    },

                    {

                        text: <>
                            <div>Message or Call</div>
                            8528083391</>
                    },
                    {

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