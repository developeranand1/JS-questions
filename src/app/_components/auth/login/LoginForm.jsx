import Link from 'next/link';
import styles from '../../../styles/modules/authLogin.module.css'

function LoginForm(){
    return (<>

    <div className="d-flex justify-content-center align-items-center position-relative">
    <div className={`card position-absolute ${styles.noBoxShadow}`}>
        <div className="card-body">
            <form >
              <div className="mb-3">
              <label htmlFor="" className="form-label">Email / Mobile no.</label>
              <input type="text" className="form-control" placeholder="Enter Email / Mobile no." />
              </div>
              <div className="mb-2">
                <button className="btn btn-primary rounded-1  w-100">Login</button>
              </div>
            </form>
            <p className='text-center'><small>By proceeding ahead you expressly agree to the F2DF <Link href={"/"}>terms and conditions</Link> </small></p>
        </div>
    </div>
    </div>
  
    </>)
}

export default LoginForm;