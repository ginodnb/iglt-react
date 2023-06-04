import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import '@shopify/shopify-api/adapters/node';
// import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api';
// import express from 'express';

// require('dotenv').config();


function GetData() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://quick-start-395d3b9b.myshopify.com//admin/api/2023-04/graphql.json', {
            mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setData(response.data);
        console.log(response.data); // Log the response data to the console
      } catch (error) {
        setError(error.message);
      }
    };


      return (
        <div>
          <h1>My Component</h1>
          {error ? (
            <p>Error fetching data: {error}</p>
          ) : (
            // Render the data
            data.map(item => (
              <div className="card" key={item.id}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">ID: {item.id}</p>
                </div>
              </div>
            ))
          )}
        </div>
      );
    };
export default GetData