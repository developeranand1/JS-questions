import Link from "next/link";
import { FaPhoneAlt, FaSearch, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export const SubHeader = () => {
  return (
    <div className="container-fluid border-bottom py-2">
      <div className="row align-items-center">
        {/* Logo Section */}
        <div className="col-md-2 d-flex align-items-center">
          <h2 className="fw-bold"><Link className="text-decoration-none text-dark " href={'https://www.f2df.com/'} target="_blank">F2DF</Link>  </h2>
        </div>

        {/* Contact Section */}
        <div className="col-md-3 d-flex align-items-center">
          <FaPhoneAlt className="me-2 text-secondary" />
          <div>
            <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>Phone</p>
            <p className="mb-0 fw-bold">+91 9138111860</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="col-md-4">
          <div className="input-group">
            <input type="text" className="form-control rounded-pill" placeholder="Search here..." />
            <span className="input-group-text bg-transparent border-0">
              <FaSearch />
            </span>
          </div>
        </div>

        {/* User & Cart Icons */}
        <div className="col-md-3 d-flex justify-content-end align-items-center">
          {/* User Icon */}
          <Link href="#" className="me-4 text-dark">
            <FaUser size={24} />
          </Link>

          {/* Cart Icon with Counter */}
          <Link href="#" className="text-dark d-flex align-items-center">
            <div className="position-relative">
              <FiShoppingCart size={28} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                0
              </span>
            </div>
            <span className="fw-bold ms-2">YOUR CART</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
