import React from 'react';
import { IoIosMail, IoIosPin } from "react-icons/io";
import { TbPhoneFilled } from "react-icons/tb";

const ContactPage = () => {

    const contactMethods = [
        {
            icon: <IoIosPin fontSize={30} />,
            contact: "Sri Krishna College Of Engineering and Technology",
            title: "Address"
        },
        {
            icon: <TbPhoneFilled fontSize={30} />,
            contact: "+91 6366662690",
            title: "Phone"
        },
        {
            icon: <IoIosMail fontSize={30} />,
            contact: "shreevarshang2003@gmail.com",
            title: "Email"
        },
    ]

    return (
        <>
            <div className="grid p-12 bg-white text-black" name="contact">
                <div className="">
                    <div className="text-5xl">
                        <h2 className="font-extrabold">
                            Contact
                        </h2>
                        <h1 className="font-light mt-3 mb-3">
                            Reach me out
                        </h1>
                    </div>
                    <div>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3" style={{ cursor: 'none' }}>
                            {
                                contactMethods.map((item, idx) => (
                                    <li key={idx} style={{ cursor: "initial", marginRight: "30px", fontSize:"20px" }}>
                                        <div style={{ display: "flex" }}>
                                            <div>
                                                {item.icon}
                                            </div>
                                            <h4 style={{ fontWeight: "800", marginLeft: "10px" }}>{item.title}</h4>
                                        </div>
                                        <div className="">
                                            <p style={{ marginTop: "5px" }}>{item.contact}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default ContactPage;
