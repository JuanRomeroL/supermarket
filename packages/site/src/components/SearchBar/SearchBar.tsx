import React from "react";
import "./SearchBar.css";

interface SearchBarProps {
  searchSong: Function;
}

interface SearchBarState {
  songName: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: any) {
    super(props);
    this.state = { songName: "" };
  }

  changeProp = (e: any) => {
    const songName = e.target.value;
    this.setState({ songName });
    this.props.searchSong(songName);
  };

  render() {
    return (
      <div className='search-bar'>
        <input onChange={this.changeProp} placeholder='Search by Name ...' />
      </div>
    );
  }
}

export default SearchBar;
