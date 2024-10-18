import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaXing } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/Hina-samreen"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/hina-samreen-5131bba0/"},
    {icon: <FaXing/>, path:"https://www.xing.com/profile/Hina_Samreen/web_profiles?expandNeffi=true"}
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles} target="_blank">
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social