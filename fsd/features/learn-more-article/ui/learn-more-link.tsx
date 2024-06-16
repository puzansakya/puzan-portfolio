import Link from "next/link"

export const LearnMoreLink = () => {
    return <Link href={"/articles"}>
        <a id="kWWV03vxh024QN57He775" className="flex gap-2  items-end py-4 rounded-md">Learn more<span
            id="uintAot5uWUA-MmqjvUQ6">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
            >
                <path
                    fillRule="evenodd"
                    stroke="none"
                    d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </span>
        </a>
    </Link>
}