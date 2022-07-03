function Search({ onSearch, searchTerm }) {
  return (
    <section>
      <input
        type="text"
        placeholder="Search for movie by name"
        data-testid="search"
        value={searchTerm}
        onChange={(e) =>
          onSearch({ type: "SEARCH", payload: e.target.value.toLowerCase() })
        }
      />
    </section>
  );
}

export default Search;
