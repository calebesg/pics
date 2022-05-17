import React from "react";

import { api } from "../api/unsplash";
import { SearchBar } from "./SearchBar";
import { ImageList } from "./ImageList";

export class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    const res = await api.get("/search/photos", { params: { query: term } });
    this.setState({ images: res.data.results });
    console.log(this.state.images);
  }

  render() {
    return (
      <main className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={(term) => this.onSearchSubmit(term)} />
        <ImageList images={this.state.images} />
      </main>
    );
  }
}
