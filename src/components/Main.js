import React, {Component} from "react";
import SearchForm from "./SearchForm";
import API from '../utils/API';
import Table from './Table';
import Header from './Header';

class Main extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""
    };

    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results
        })).catch(err => console.log(err))
    }

    sortByName = () => {
        const filtered = this.state.filteredEmployees;
        if(this.state.order === "asc") {
            const sorted = filtered.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            console.log(sorted)

            this.setState({
                filteredEmployees: sorted,
                order: "desc"
            })
        } else {
            const sorted = filtered.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            console.log(sorted)

            this.setState({
                filteredEmployees: sorted,
                order: "asc"
            })
        }
    }
    handleInputChange = event => {
        const employees = this.state.employees;
        const UserInput = event.target.value;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1)
        this.setState({
            filteredEmployees,
        })
    }
    
    employeeSearch = () => {
        API.getUsers()
            .then(res => this.setState({
                filteredEmployees: res.data.results,
                employees: res.data.results
            })).catch(err => console.log(err))
    }
    
    handleSearch = event => {
        event.preventdefault();
        if(!this.state.search) {
            alert("Enter a valid name")
        }
        const {employees, search} = this.state;
        
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));

        this.setState({
            filteredEmployees
        });
    }


    render() {
        return (
            <div>
                <Header/>
                <SearchForm 
                    employee={this.state.employees}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange}
                />
                <Table results={this.state.filteredEmployees} sortByName={this.sortByName} />

            </div>
        )
    }
}

export default Main;
