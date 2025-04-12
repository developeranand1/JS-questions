import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export const SocialIcons = ({ styles }) => {
  return (
    <div className={styles.about}>
      <IoLogoFacebook />
      <FaYoutube />
      <FaXTwitter />
      <FaLinkedinIn />
    </div>
  );
}
