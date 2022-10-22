import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };
  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  handleSearch = () => {
    this.props.searchMovies(this.state.search, this.state.type);
  };
  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field ">
          <input
            placeholder="Search.."
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn purple darken-2 search-btn "
            type="submit"
            name="action"
            onClick={this.handleSearch}
          >
            Search
          </button>
        </div>
        <div className="movie-type">
          <p>
            <label>
              <input
                onChange={this.handleFilter}
                name="type"
                type="radio"
                value=""
                data-type="all"
                checked={this.state.type === "all"}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                onChange={this.handleFilter}
                name="type"
                type="radio"
                value="movie"
                data-type="movie"
                checked={this.state.type === "movie"}
              />
              <span>Movies only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                onChange={this.handleFilter}
                name="type"
                type="radio"
                value="series"
                data-type="series"
                checked={this.state.type === "series"}
              />
              <span>Series only</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}
export { Search };
