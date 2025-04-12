import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaSignInAlt } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";

export const TopBar = () => {
  return (
    <div className="container-fluid border-bottom py-2 bg-light">
      <div className="row align-items-center">
        {/* Left Side - Google Play Button */}
        <div className="col-md-6">
          <Link href="https://play.google.com/store/apps/details?id=com.f2df.mcsofttech" target="_blank">
            <Image
              src="/imgs/header/payment-4.png"
              alt="Get it on Google Play"
              width={100}
              height={40}
              
            />
          </Link>
        </div>

        {/* Right Side - Registration, Language, Social Media */}
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          {/* Registration Dropdown */}
          <div className="dropdown me-3">
            <button
              className="btn btn-light dropdown-toggle d-flex align-items-center"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaSignInAlt className="me-1" /> Registration
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" href="/login" target="_blank">Free Registration</Link></li>
              <li><Link className="dropdown-item" href="/login" target="_blank">Login</Link></li>
            </ul>
          </div>

          {/* Language Dropdown */}
          <div className="dropdown me-3">
            <button
              className="btn btn-light dropdown-toggle d-flex align-items-center"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <IoMdGlobe className="me-1" /> English
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" href="#">English</Link></li>
              <li><Link className="dropdown-item" href="#">हिन्दी</Link></li>
              <li><Link className="dropdown-item" href="#">Panjabi</Link></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <Link href="https://www.facebook.com/f2dfsupport" target="_blank" className="me-2 text-dark">
            <FaFacebookF size={20} />
          </Link>
          <Link href="https://www.youtube.com/c/F2DFOFFICIAL" target="_blank" className="me-2 text-dark">
            <FaYoutube size={20} />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="me-2 text-dark">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://twitter.com/F2DF11" target="_blank" className="me-2 text-dark">
            <FaTwitter size={20} />
          </Link>
          <Link href="https://www.linkedin.com/company/f2df-pvt-ltd/" target="_blank" className="text-dark">
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};
