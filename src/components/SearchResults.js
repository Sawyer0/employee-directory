import React, { Component } from "react";
import Results from "./Results";
import Search from "./Search";
import API from "../utils/API";

class SearchResults extends Component {
    constructor() {
        super();

        this.state = {
            search: "",
            results: []
        };
    }


    searchSpace = (evt) => {
        let keyword = evt.target.value;
        this.setState({ search: keyword })
    }

    componentDidMount() {
        this.searchUser();
    }

    searchUser = () => {
        API.search()
            .then((res) => this.setState({ results: res.data.results }))
            .then(() => console.log(this.state.results))
            .catch((error) => {
                console.log(error);
            });
    };

    // sort by name descending 
    sortNameDown() {
        this.setState({
            results: this.state.results.sort((a, b) => {
                let nameA = a.name.first.toUpperCase();
                let nameB = b.name.first.toUpperCase();
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;

            })
        })
    }

    // sort by name ascending
    sortNameUp() {
        this.setState({
            results: this.state.results.sort((b, a) => {
                let nameA = a.name.first.toUpperCase();
                let nameB = b.name.first.toUpperCase();
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;

            })
        })
    }
    // sort by phone descending
    sortPhoneDown() {
        this.setState({
            results: this.state.results.sort((a, b) => {
                let phoneA = a.phone;
                let phoneB = b.phone;
                if (phoneA < phoneB) {
                    return -1
                }
                if (phoneA > phoneB) {
                    return 1;
                }
                return 0;

            })
        })
    }

    // sort by phone ascending
    sortPhoneUp() {
        this.setState({
            results: this.state.results.sort((b, a) => {
                let phoneA = a.phone;
                let phoneB = b.phone;
                if (phoneA < phoneB) {
                    return -1
                }
                if (phoneA > phoneB) {
                    return 1;
                }
                return 0;

            })
        })
    }
    // sort by email descending 
    sortEmailDown() {
        this.setState({
            results: this.state.results.sort((a, b) => {
                let emailA = a.email;
                let emailB = b.email;
                if (emailA < emailB) {
                    return -1
                }
                if (emailA > emailB) {
                    return 1;
                }
                return 0;

            })
        })
    }

    // sort by email ascending 
    sortEmailUp() {
        this.setState({
            results: this.state.results.sort((b, a) => {
                let emailA = a.email;
                let emailB = b.email;
                if (emailA < emailB) {
                    return -1
                }
                if (emailA > emailB) {
                    return 1;
                }
                return 0;

            })
        })
    }

    // sort by email descending 
    sortLocationDown() {
        this.setState({
            results: this.state.results.sort((a, b) => {
                let locationA = a.location.city;
                let locationB = b.location.city;
                if (locationA < locationB) {
                    return -1
                }
                if (locationA > locationB) {
                    return 1;
                }
                return 0;

            })
        })
    }

    // sort by email ascending 
    sortLocationUp() {
        this.setState({
            results: this.state.results.sort((b, a) => {
                let locationA = a.location.city;
                let locationB = b.location.city;
                if (locationA < locationB) {
                    return -1
                }
                if (locationA > locationB) {
                    return 1;
                }
                return 0;

            })
        })
    }
    // sort by date of birth descending
    sortDobDown() {
        this.setState({
            results: this.state.results.sort((a, b) => {
                let dobA = a.dob.date;
                let dobB = b.dob.date;
                if (dobA < dobB) {
                    return -1
                }
                if (dobA > dobB) {
                    return 1;
                }
                return 0;

            })
        })
    }

    // sort by date of birth ascending
    sortDobUp() {
        this.setState({
            results: this.state.results.sort((b, a) => {
                let dobA = a.dob.date;
                let dobB = b.dob.date;
                if (dobA < dobB) {
                    return -1
                }
                if (dobA > dobB) {
                    return 1;
                }
                return 0;

            })
        })
    }




    render() {

        return (
            <div>
                <Search
                    search={this.searchSpace}
                />
                <table className="table table-striped table-hover table-light">
                    <thead className="thead-dark">
                        <tr>
                            <th className="text-center scope=col">
                                Image
                             </th>
                            <th className="text-center scope=col">
                                <i className="fa fa-caret-down p-2" onClick={() => this.sortNameDown()}></i>
                                Name
                                <i className="fa fa-caret-up p-2" onClick={() => this.sortNameUp()}></i>
                            </th>
                            <th className="text-center scope=col">
                                <i className="fa fa-caret-down p-2" onClick={() => this.sortPhoneDown()}></i>
                                Phone
                                <i className="fa fa-caret-up p-2" onClick={() => this.sortPhoneUp()}></i>

                            </th>
                            <th className="text-center scope=col">
                                <i className="fa fa-caret-down p-2" onClick={() => this.sortEmailDown()}></i>
                                Email
                                <i className="fa fa-caret-up p-2" onClick={() => this.sortEmailUp()}></i>

                            </th>
                            <th className="text-center scope=col">
                                <i className="fa fa-caret-down p-2" onClick={() => this.sortLocationDown()}></i>
                                Location
                                <i className="fa fa-caret-up p-2" onClick={() => this.sortLocationUp()}></i>

                            </th>
                            <th className="text-center scope=col">
                                <i className="fa fa-caret-down p-2" onClick={() => this.sortDobDown()}></i>
                                Date Of Birth
                                <i className="fa fa-caret-up p-2" onClick={() => this.sortDobUp()}></i>

                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.filter((item) => {
                            if (this.state.search === "")
                                return item;
                            else if (item.name.first.toLowerCase().includes(this.state.search.toLowerCase())
                                || item.name.last.toLowerCase().includes(this.state.search.toLowerCase())
                                || item.phone.includes(this.state.search)
                                || item.email.toLowerCase().includes(this.state.search)
                                || item.location.city.toLowerCase().includes(this.state.search)
                                || item.location.country.toLowerCase().includes(this.state.search)
                                || item.dob.date.includes(this.state.search)) {
                                return item;
                            }

                            return false;
                        })
                            .map(item => {
                                let dobArr = item.dob.date.slice(0, -14).split("-");
                                let newDOB = `${dobArr[1]}-${dobArr[2]}-${dobArr[0]}`;

                                return (
                                    <Results
                                        picture={item.picture.medium}
                                        first={item.name.first}
                                        last={item.name.last}
                                        phone={item.phone}
                                        email={item.email}
                                        city={item.location.city}
                                        country={item.location.country}
                                        dateOfBirth={newDOB}
                                    />
                                );
                            })}

                    </tbody>
                </table >
            </div >
        );
    }
}

export default SearchResults;