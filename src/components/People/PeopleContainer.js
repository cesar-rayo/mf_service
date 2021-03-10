import React, { useEffect, useState } from 'react'
import './PeopleContainer.css';
import { PeopleTable } from './';
import axios from 'axios';

export const PeopleContainer = () => {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/people")
      .then(res => setPeople(res.data))
  }, [])

  return (
    <div className="PeopleContainer">
      <h1 className="title">People's App</h1>
      <h2 className="subtitle"><strong>Contract Testing</strong> Proof of concept</h2>
      <PeopleTable people={people}/>
    </div>
  )
}
