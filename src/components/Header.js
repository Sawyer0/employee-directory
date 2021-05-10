import React from "react";



const styles = {
    header: {
        fontFamily: "'Montserrat', sans- serif",
        margin: 0,
        background: "#020234",
        minHeight: 150,
        textAlign: "center",
        borderBottom: "4px solid red"
    },
    heading: {
        lineHeight: 2,
        fontSize: "2.5rem",
        color: "white",
        padding: "0 20px"
    },
    content: {
        fontSize: "1rem",
        color: "white"
    }
};

function Header() {
    return (
        <header style={styles.header}>
            <h1 style={styles.heading}>Employee Directory</h1>
            <p style={styles.content}>Click on carrots to filter by heading or use the search box to narrow your results.</p>
        </header>
    );

}


export default Header;