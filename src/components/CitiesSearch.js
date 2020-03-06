import React, { Component } from "react";
import { connect } from "react-redux";
import CitiesSearchResults from "./CitiesSearchResults";
import {
  fetchCities,
  getCurrentWeather,
  setCurrentCity
} from "../actions/search.actions";

import { FormWrapperStyle } from "../styles/FormWrapperStyle";
import { FormInputFrapper } from "../styles/FormInputFrapper";
import { SearchIconStyle } from "../styles/SearchIconStyle";
import { SearchInputStyle } from "../styles/SearchInputStyle";
import { SearchButtonStyle } from "../styles/SearchButtonStyle";
import { SpinnerStyle } from "../styles/SpinnerStyle";
import { SpinnerWrapperStyle } from "../styles/SpinnerWrapperStyle";
import { withRouter } from "react-router-dom";

class CitiesSearch extends Component {
  state = {
    query: "",
    id: "",
    isDropDownOpen: true
  };

  componentDidMount = () => {
    if (Object.keys(this.props.currentCity).length > 0) {
      this.handleSelected(this.props.currentCity);
      console.log("im here");
      ///history.replace();
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.currentCity.Key !== prevProps.currentCity.Key) {
      this.handleSelected(this.props.currentCity);
      this.props.fetchCities(this.props.currentCity.LocalizedName);
    }
  }
  onInputfocus = e => {
    this.setState({ isDropDownOpen: true });
  };

  handleOnInputChange = e => {
    const query = e.target.value;

    this.setState({ query }, () => {
      query !== "" && this.props.fetchCities(query);
    });
  };

  handleSelected = city => {
    this.setState({ query: city.LocalizedName, isDropDownOpen: false });
    this.props.getCurrentWeather(city.Key);
    this.props.setCurrentCity(city);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.fetchCities(this.state.query);
  };

  render() {
    const { query, isDropDownOpen } = this.state;
    const { loading } = this.props;
    return (
      <>
        <FormWrapperStyle
          onSubmit={this.handleSubmit}
          onBlur={e => {
            e.preventDefault();
            console.log("onBlur");
            // this.setState({ isDropDownOpen: false });
          }}
        >
          <FormInputFrapper>
            <SearchIconStyle className="fas fa-search"></SearchIconStyle>
            <SearchInputStyle
              type="text"
              value={query}
              onChange={this.handleOnInputChange}
              placeholder="Tel Aviv"
              onFocus={this.onInputfocus}
            />
          </FormInputFrapper>
          {loading ? (
            <SpinnerWrapperStyle>
              <SpinnerStyle className="fas fa-spinner"></SpinnerStyle>
              <p>LOADING...</p>
            </SpinnerWrapperStyle>
          ) : (
            isDropDownOpen && (
              <CitiesSearchResults
                id={this.state.id}
                query={this.state.query}
                cities={this.props.results}
                handleSelected={this.handleSelected}
              />
            )
          )}

          <SearchButtonStyle type="submit">search</SearchButtonStyle>
        </FormWrapperStyle>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.results.loading,
    currentCity: state.results.currentCity,
    results: state.results
  };
};

export default connect(mapStateToProps, {
  fetchCities,
  getCurrentWeather,
  setCurrentCity
})(withRouter(CitiesSearch));
