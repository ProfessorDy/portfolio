import Link from "next/link"



const Button = ({ route, text }) => {
    return (
        <Link href={route} className="inline-block bg-white hover:bg-grayish-dark-blue border  border-grayish-dark-blue py-4 px-8 text-grayish-dark-blue hover:text-very-light-grey text-[0.75rem] font-normal tracing-[0.125rem] uppercase">{text}</Link>
    )
}

export default Button  