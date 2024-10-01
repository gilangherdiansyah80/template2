/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Url = ({ link, children }) => {
    return (
        <Link to={link}>{children}</Link>
    )
}

export default Url;