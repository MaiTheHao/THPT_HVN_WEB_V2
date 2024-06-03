import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const socialContactLinks = [
    {
        tag: "a",
        props: {
            href: "https://www.facebook.com/profile.php?id=100028020954560&mibextid=ZbWKwL",
            target: "_blank",
            rel: "noopener noreferrer",
            title: "facebook",
        },
        children: <FontAwesomeIcon icon={faFacebook} />,
    },
    {
        tag: "a",
        props: {
            href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hpthvnbinhduong@gmail.com",
            target: "_blank",
            rel: "noopener noreferrer",
            title: "gmail",
        },
        children: <FontAwesomeIcon icon={faEnvelope} />,
    },
    { tag: Link, props: { to: "/feedback", title: "feedback" }, children: "Feedback" },
];

export const foundingDate = {
    founding: 1959,
    total: new Date().getFullYear() - 1959,
}