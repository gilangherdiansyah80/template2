/* eslint-disable react/prop-types */
const Button = ({ children, onClick }) => {
    return (
        <button type="submit" className="bg-transparent border-solid border-2 rounded-3xl py-2 px-5 hover:bg-slate-900 hover:border-none text-white md:px-14 md:rounded-full" onClick={onClick}>{children}</button>
    )
}

export default Button;