'use client';

import Image from "next/image";
import CustomButton from "./CustomButton";
import { auto } from "openai/_shims/registry.mjs";

export default function Hero() {
    const handleScroll = () => {}
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Find, Book or Rent a car -- quickly and easily
                </h1>
                <p className="hero__subtitle">
                    Streamline your car rental experience with out 
                    effortless booking process.
                </p>
                <CustomButton 
                title={`Explore Cars`}
                containerStyles={`bg-amber-500 text-white rounded-full mt-10`}
                handleClick={handleScroll}/>
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                    src='/hero.png'
                    alt="hero"
                    fill
                    className="object-contain"/>
                </div>
            </div>
        </div>
    )
}