import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Doctor from "./Doctor";
import Search from "./Search";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)





const DOCTOR_API_URL = "https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=070848a6480b0ab3b8a5d83425b4b2cc";


const App = () => {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
    fetch(DOCTOR_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setDoctors(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

    const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.betterdoctor.com/?s=${searchValue}&apikey=070848a6480b0ab3b8a5d83425b4b2cc`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setDoctors(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  	};

    
    return (
     <div className="App">
      <Header text="Doctor search" />
      <Search search={search} />
      <p className="App-intro">Enter your symptom and find a doctor!</p>
      <div className="doctors">
        {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          doctors.map((doctor, index) => (
            <Doctor key={`${index}-${doctor.Title}`} doctor={doctor} />
          ))
        )}
      </div>
    </div>
  );
};


export default App;