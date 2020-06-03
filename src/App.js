import React from "react";
import "./App.css";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "CQUXKWBDK6",
  "4cb5729fb60da3c903c218f9783834d3"
);

const Hit = ({ hit }) => {
  return (
    <p>
      {hit.make_display}, from {hit.make_country}
    </p>
  );
};

function App() {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="carmakes">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </>
  );
}

export default App;
