import Link from "next/link"
import { NewGlichText } from "../../../../components/new-glich-text"

export const Footer = () => {
    return <div id="qLu7rNOyXJV0VK6xMl71X" className="bg-stone-800 text-gray-50 w-full py-24">
        <div id="TtB4verel8GqWkz_0O_qF"
            className="mx-auto flex justify-between w-full max-w-screen-lg xl:p-0 p-5 flex-col md:flex-row items-center gap-5 md:gap-0">
            <div id="2LVPT0YBuA-73XxuDA0qD" className="">
                <div id="bFRysFdzcAB8ROaIy17Yc" className="flex gap-3 items-center">
                    <div id="1_uUmfkPPM6gX6-_kSKpf" className="rounded-full bg-slate-100 h-6 w-6"></div>
                <Link href={"/"} passHref>
                    <a className="text-sm leading-5 hover:text-amber-300 transition-all duration-150">
                        <NewGlichText label="Puzan Sakya" />
                    </a>
                </Link>
                </div>
                <p id="Ks8_WOLvltU2sabsWDMim" className="mt-3">© 2024 Puzan Sakya</p>
            </div>
            <div id="-5mc8U89T37c1J8v-l1Gq" className="p-4 flex gap-10 flex-col md:flex-row">
                <Link href={"/"} passHref>
                    <a className="text-sm leading-5 hover:text-amber-300 transition-all duration-150">
                        <NewGlichText label="Home" />
                    </a>
                </Link>
                <Link href={"/about"} passHref>
                    <a className="text-sm leading-5 hover:text-amber-300 transition-all duration-150">
                        <NewGlichText label="About Me" />
                    </a>
                </Link>
                <Link href={"/"} passHref>
                    <a className="text-sm leading-5 hover:text-amber-300 transition-all duration-150">
                        <NewGlichText label="Articles" />
                    </a>
                </Link>

            </div>
        </div>
    </div>
}