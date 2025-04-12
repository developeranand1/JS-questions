import styles from '../../styles/Footer.module.css'
import headerStyle from '../../styles/Header.module.css'
import { SubFooterBanner } from './SubFooterBanner'
import { FooterColumn } from './FooterColumn'
import { ContactInfo } from './ContactInfo'
import { footerLinks } from './footerData'
import { BottomBar } from '../BottomBar'

export const Footer = () => {
  return (
    <>
      <SubFooterBanner />
      <footer className="bg-dark text-light py-4 pt-5">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-3">
              <div className={`${styles.companyName}`}>F2DF</div>
              <div className={`${styles.about}`}>
                F2DF is an e-Commerce Platform for Agriculture & allied services
                sector catering to both B2B & B2C segments.
              </div>
            </div>

            <FooterColumn title="Company" items={footerLinks.companyList} className="col-md-2" />
            <FooterColumn title="Other Link" items={footerLinks.otherLink} className="col-md-2" />
            <FooterColumn title="Quick Link" items={footerLinks.quickList} className="col-md-2" />

            <div className="col-md-3">
              <h5>Quick Contact Us</h5>
              <ContactInfo styles={styles} />
            </div>
          </div>
        </div>
      </footer>
      <BottomBar />
    </>
  )
}
