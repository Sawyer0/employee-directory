  
import React from "react";

function ListItem(props) {
  const styles = {
    img: {
      width: "75px",
    },
  };
  return (
    <tr text-center>
      <td className="border-0 text-center">
        <img style={styles.img} src={props.picture} alt="" />
      </td>
      <td className="border-0 align-middle text-center">
        {props.first} {props.last}
      </td>
      <td className="border-0 align-middle text-center">
        {props.phone
          .replace(/[-\(\) ]/gi, "")
          .replace(/(\d{3})(\d{3})(\d{4})/, "($1)-$2-$3")}
      </td>
      <td className="border-0 align-middle text-center">
        <a href="emailto:">{props.email}</a>
      </td>
      <td className="border-0 align-middle text-center">{props.DOB}</td>
    </tr>
  );
}

export default ListItem;