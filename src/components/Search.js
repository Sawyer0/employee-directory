import React from "react";


const styles = {
    form: {
        background: "#f0f0f1",
        display: "flex",
        justifyContent: "center",
        padding: "15px"
    },

    input: {
        width: "20%",
        textAlign: "center",
    }
}


function Search(props) {

    return (
        <form>
            <div style={styles.form} >
                <input
                    onChange={props.search}
                    style={styles.input}
                    type="text"
                    placeholder="Search Employees"
                />
            </div>
        </form>
    )
}

export default Search;