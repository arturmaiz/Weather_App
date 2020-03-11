import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  fetchCities,
  getCurrentWeather,
  setCurrentCity
} from "../actions/search.actions";

import CitiesSearchResults from "./CitiesSearchResults";

import { FormWrapperStyle } from "../styles/FormWrapperStyle";
import { FormInputFrapper } from "../styles/FormInputFrapper";
import { SearchIconStyle } from "../styles/SearchIconStyle";
import { SearchInputStyle } from "../styles/SearchInputStyle";
import { SpinnerStyle } from "../styles/SpinnerStyle";
import { SpinnerWrapperStyle } from "../styles/SpinnerWrapperStyle";

toast.configure();

const inputRegex = RegExp(/^[a-zA-Z\b]+$/);

class CitiesSearch extends Component {
  state = {
    query: "",
    id: "",
    isDropDownOpen: true,
    fetchCities: _.debounce(() => this.fetchCities(this.state.query), 500)
  };

  componentDidMount() {
    this.handleSelected(this.props.currentCity);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentCity.Key !== prevProps.currentCity.Key) {
      this.props.fetchCities(this.props.currentCity.LocalizedName);
      this.handleSelected(this.props.currentCity);
    }
  }
  onInputfocus = e => {
    this.setState({ isDropDownOpen: true });
  };

  handleOnInputChange = e => {
    let query = e.target.value;

    // if (inputRegex.test(query)) {

    // } else {
    //   console.log("not good");
    // }

    this.setState({ query }, () => {
      this.state.fetchCities();
    });
  };

  fetchCities = () => {
    this.props.fetchCities(this.state.query);
  };

  handleSelected = city => {
    this.setState({ query: city.LocalizedName, isDropDownOpen: false });
    this.props.getCurrentWeather(city.Key);
    this.props.setCurrentCity(city);
  };

  handleSubmit = e => {
    e.preventDefault();
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
            setTimeout(() => {
              this.setState({ isDropDownOpen: false });
            }, 100);
          }}
        >
          <FormInputFrapper>
            <SearchIconStyle className="fas fa-search"></SearchIconStyle>
            <SearchInputStyle
              type="text"
              value={query || ""}
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
                cities={this.props.cities}
                handleSelected={this.handleSelected}
              />
            )
          )}
        </FormWrapperStyle>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.cities.loading,
    currentCity: state.cities.currentCity,
    cities: state.cities.cities
  };
};

CitiesSearch.propTypes = {
  loading: PropTypes.bool.isRequired,
  currentCity: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {
  fetchCities,
  getCurrentWeather,
  setCurrentCity
})(withRouter(CitiesSearch));
