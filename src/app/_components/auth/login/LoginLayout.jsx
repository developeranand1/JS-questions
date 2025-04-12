import Link from 'next/link'
import styles from '../../../styles/modules/authLogin.module.css'
import LoginForm from './LoginForm'
import SocialMedia from '../../social-media/SocialMedia'

function LoginLayout(){
    return (<>
    <div className={styles.loginBgStyle}>
        <div className="container-fluid ">
            <div className="row py-3 mb-5 justify-content-center">
                <div className="col-md-8 col-12 text-center mb-3 ">
                    <h3 className='text-center'>Login / Register to f2df.com</h3>
                    <p className='text-center'>Haven't Register Yet ? <Link href={"/"}> please register here.</Link></p>
                </div>
            </div>
            
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
               <div >
               <LoginForm />
               </div>
               <SocialMedia/>
            </div>
        </div>
    </div>
    </>)
}

export default LoginLayout