import './App.css';
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

const BornOn = () => {

// Create born variable and set to empty string
  const [born, updateBornOnDate] = useState("")


  // Define function to all API
  const fetchGithubData = async () => {
    const data = await API.get('cryptoapi', `https://api.github.com/users/${bottleinamessage}`);
    updateBornOnDate(data.born);
  }

  // Create a new function to allow users to update the input values
  const updateInputValues = (type, value) => {
    updateInput({ ...input, [type]: value });
  }


  // Call fetchCoins function when component loads
  useEffect(() => {
    fetchGithubData()
  }, [bottleinamessage])

}

export default BornOn;

