import React from "react";

const styles = {
    a: {
        color: "black",
        textUnderlineOffset: "4px"
    }

}


function Results(props) {
    return (
        <tr>
            <td className="text-center">
                <img src={props.picture} alt="profile" />
            </td>
            <td className="text-center align-middle">
                {props.first} {props.last}
            </td>
            <td className="text-center align-middle">
                {props.phone}
            </td>
            <td className="text-center align-middle links">
                <a style={styles.a} href="mailto:someone@yoursite.com">{props.email}</a>
            </td>
            <td className="text-center align-middle">
                {props.city}, {props.country}
            </td>
            <td className="text-center align-middle">
                {props.dateOfBirth}
            </td>

        </tr >
    )
}

export default Results;