import Image from "next/image"
import Link from "next/link"

const socialMediaList = [
    { img: "/imgs/social-media/footer-facebook.svg", link: "/", title: "Facebook" },
    { img: "/imgs/social-media/twitter.svg", link: "/", title: "Twitter" },
    { img: "/imgs/social-media/footer-instagram.svg", link: "/", title: "Instagram" },
    { img: "/imgs/social-media/footer-linkedin.svg", link: "/", title: "Linkedin" },
    { img: "/imgs/social-media/footer-youtube.svg", link: "/", title: "youtube" },
]

function SocialMedia() {
    return (<>
        <div style={{ marginTop: "130px" }}>

            <div className="text-center my-2">
                Follow us on Social Media
            </div>
            <div className="d-flex justify-content-center align-items-center my-3">
                {socialMediaList && socialMediaList.map((item, index) => (
                    <Link key={index} className="ms-2" href={item.link}><Image src={item.img} width={30} height={30} alt={item.title} /> </Link>
                ))}

            </div>
        </div>
    </>)
}

export default SocialMedia