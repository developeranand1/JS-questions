"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CounterVariable } from "@/app/constants/CounterVariable";
import Image from "next/image";

function Counter() {
    const [startCount, setStartCount] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: false, // 👈 allows multiple triggers
        threshold: 0.3,     // trigger when 30% is visible
    });

    useEffect(() => {
        setStartCount(inView); // 👈 true when in view, false when out
    }, [inView]);

    const animateCount = (target) => {
        const isK = target.includes("K");
        const endValue = parseFloat(target.replace(/[^\d.]/g, "")) * (isK ? 1000 : 1);
        return endValue;
    };

    const useCounter = (end, duration = 2000, active = false) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let start = 0;
            let counter;

            if (active) {
                const increment = end / (duration / 20);
                counter = setInterval(() => {
                    start += increment;
                    if (start >= end) {
                        setCount(end);
                        clearInterval(counter);
                    } else {
                        setCount(Math.ceil(start));
                    }
                }, 20);
            } else {
                setCount(0); // 👈 Reset when not active
            }

            return () => clearInterval(counter);
        }, [active, end]);

        return count;
    };

    return (
        <div className="my-5" ref={ref} style={{ backgroundColor: '#e9ecef' }}>
            <div className="container">
                <div className="row">
                    {
                        CounterVariable.map((item, index) => {
                            const animatedValue = useCounter(animateCount(item.count), 2000, startCount);
                            const isK = item.count.includes("K");
                            const isPlus = item.count.includes("+");

                            return (
                                <div key={index} className="col-md-3">
                                    <div className="text-center py-4">
                                        <Image width={50} height={50} src={item?.img} alt={item?.title} />
                                        <h1 className="font-bold m-2">
                                            {startCount ? (
                                                isK
                                                    ? `${Math.floor(animatedValue / 1000)}K`
                                                    : animatedValue
                                            ) : (
                                                ""
                                            )}
                                            {isPlus && startCount && <small>+</small>}
                                        </h1>
                                        <h6>{item?.title}</h6>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Counter;



