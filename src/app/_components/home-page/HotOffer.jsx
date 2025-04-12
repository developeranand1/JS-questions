
"use client"

import { useEffect, useState } from "react";

function HotOffer() {
    const [timeLeft, setTimeLeft] = useState({
        day: 0, hours: 0, minutes: 0, seconds: 0,
    });


    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 87);

        const timer = setInterval(() => {
      
            const now = new Date().getTime();

            const difference = targetDate.getTime() - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);
            setTimeLeft({ days, hours, minutes, seconds });

            if (difference <= 0) clearInterval(timer);
  
            
        },1000);

        return () => clearInterval(timer);
    }, [])


    return <>
        <div style={{ backgroundImage: "url('https://www.f2df.com/assets/web/img/bg/27.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 col-lg-7 col-sm-4"></div>
                    <div className="col-md-6 col-lg-5 col-sm-8">
                        <h5 className="my-2">
                            Todays Hot Offer</h5>
                        <h3 className="heading my-2">Get Hot Deals
                            at 30% offer</h3>
                        <div><small>Get extra cashback with great deals and discounts</small></div>
                        <div className="d-flex gap-3 my-3">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hrs", value: timeLeft.hours },
                  { label: "Mins", value: timeLeft.minutes },
                  { label: "Secs", value: timeLeft.seconds },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center px-3 py-2 bg-white rounded"
                    style={{ minWidth: "70px" }}
                  >
                    <div className="fw-bold fs-5 text-success">{item.value}</div>
                    <div className="text-muted small">{item.label}</div>
                  </div>
                ))}
              </div>

                        <div>
                            <button className="btn btn-primary  me-4 btn-sm">Shop Now</button>
                            <button className="btn btn-outline-primary btn-sm"> Deal of The Day</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default HotOffer;