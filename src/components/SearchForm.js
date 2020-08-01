import React from "react";
import "../styles/SearchForm.css";

function SearchForm(props) {
  return (
    <form>
      <div className="input-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          type="search"
          className="form-control"
          placeholder="Search for an employee"
          id="employees"
        />
        <button 
          onClick={props.handleSearch}
          className="btn btn-outline-secondary"
          type="submit"
          >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
