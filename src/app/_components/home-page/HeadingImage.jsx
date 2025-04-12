import Image from "next/image";

function HeadingImage() {
    return (
      <div className="text-center my-4">
       <Image
  src="/imgs/home/web.jpg"
  alt="Heading Banner"
  width={1200}
  height={600}
  className="img-fluid bg-warning"
  style={{ maxWidth: "100%", height: "auto" }}
/>
      </div>
    );
  }
  
  export default HeadingImage;
  