import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/lahiruSanjeewa2971" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/lahiru-sanjeewa-180910201/",
  },
];

const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((icon, index) => {
        return (
          <Link 
            key={index} 
            href={icon.path} 
            className={iconStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
