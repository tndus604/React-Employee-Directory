import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
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
          className="btn btn-primary mt-3"
          type="submit"
          >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
