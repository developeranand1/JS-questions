import { FaLocationDot } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { SocialIcons } from './SocialIcons'

export const ContactInfo = ({ styles }) => {
  return (
    <>
      <div className={styles.about}>
        <FaLocationDot /> #1392 GALI NO. 2 HARI NAGAR NARWANA Jind HARYANA 126116
      </div>
      <div className={styles.about}>
        <IoCall /> +91 9138111860/61
      </div>
      <div className={styles.about}>
        <MdEmail /> info@f2df.com
      </div>
      <SocialIcons styles={styles} />
    </>
  )
}
