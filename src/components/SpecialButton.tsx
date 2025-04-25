import Image from "next/image"
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

import { useState } from "react"
import { ComponentPropsWithoutRef } from "react"

interface SpecialButtonProps extends ComponentPropsWithoutRef<"button"> {
    logoName: string
    primaryLogo: StaticImport | string
    secondaryLogo: StaticImport |string
    backgroundColor: string
}

function SpecialButton({ logoName, primaryLogo, secondaryLogo, backgroundColor, ...props }: SpecialButtonProps) {
    const [isHovering, setIsHovering] = useState(false)
    return (
        <button {...props}
            className={`w-70 flex items-center justify-center bg-white/50 rounded-4xl shadow hover:scale-105 hover:shadow-md py-5 px-10 transition duration-100 space-x-5`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
                backgroundColor: isHovering ? backgroundColor : undefined
            }}
        >
            <Image
                src={isHovering ? secondaryLogo : primaryLogo}
                alt={`${logoName} + Logo`}
                width={50}
                height={50}
                className="object-contain" />
            <p className={`text-xl ${isHovering ? "text-white" : ""}`}>{logoName}</p>
        </button>
    )
}

export default SpecialButton