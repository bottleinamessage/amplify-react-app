import './App.css';
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

const BornOn = () => {

  // Create coins variable and set to empty array
  const [born, setBornDateState] = useState([])

  const fetchGithubData = async () => {
    const response = await API.get('cryptoapi', `/born`);
    setBornDateState(response.born.created_at);
  }

  // Call fetchGithubData function when component loads
  useEffect(() => {
    fetchGithubData()
  }, [])

  return (
    <>
      <h3>Github was born on {born} </h3>
    </>
  );
}

export default BornOn;

