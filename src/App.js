import React, { Component } from "react";
import * as API from "./service/service-api";
import { mapper } from "./helpers/maper";
import FilmGallery from "./Components/filmGallery/FilmGallery";
import Button from "./Components/button/Button";
import LoaderSp from "./Components/LoaderJs/LoaderJs"

const INITIAL_STATE = {
  page: 1,
  films: []
}

class App extends Component {

  state = {
    ...INITIAL_STATE,
    isLoading: false,
    text: ''
  };
  
  componentDidMount() {
    const { page } = this.state;
    this.getFilms(page);

  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (prevState.page !== page ) {
      this.getFilms(page);
    }
  }

getFilms = (page) => {
    this.setState({ isLoading: true });
    API.getImages(page)
      .then(({ data }) => {
        console.log(data.results);
        this.setState((prevState) => {
          return {
            films: [...prevState.films, ...mapper(data.results)],
          };
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
};
  
  onLoadMore = () => {
    let { page } = this.state;
	 	page += 1;
	 	this.setState({ page });
  }



  render() {
    const { isLoading } = this.state;
  return (
    <div>
      <FilmGallery films={this.state.films} />
      <Button onClick={this.onLoadMore} />
      {isLoading && <LoaderSp />}
    </div>

    );
  }
}

export default App;
