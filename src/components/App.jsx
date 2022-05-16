import React from "react";

import { api } from "../api/unsplash";
import { SearchBar } from "./SearchBar";

export class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    const res = await api.get("/search/photos", { params: { query: term } });
    this.setState({ images: res.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={(term) => this.onSearchSubmit(term)} />
        Found: {this.state.images.length} images.
      </div>
    );
  }
}
