import React, { FC, useState } from "react";

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        name="searchTerm"
        value={searchTerm}
        placeholder="Search for something"
        onChange={(event) => {
          handleSearch(event);
        }}
      />
      {searchTerm && <div>SearchTerm: {searchTerm}</div>}
    </>
  );
};

export default Search;
