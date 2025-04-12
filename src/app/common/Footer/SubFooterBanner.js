import styles from '../../styles/Footer.module.css'

export const SubFooterBanner = () => {
  return (
    <div className={styles.subFooterPosition}>
      <div className={styles.subFooterPositionFixed}>
        <div className="container">
          <div className="bg-warning text-dark text-center py-4">
            <div className="row">
              <div className="col-md-8">
                <h2 className="fw-bold">
                  Buy the best products for farmers to protect your crop!
                </h2>
              </div>
              <div className="col-md-4">
                <button className="btn btn-light mt-3">Explore Products</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
