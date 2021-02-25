import React from "react";
import "./Box.css";
import axios from 'axios';
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
// import Pagination from './Pagination'

const Feeds = () => {
  const [image, setImage] = useState([])


  useEffect(() => {
    getData()
  }, []

  )
  const getData = async () => {
    await axios.get(`https://assesment-aia-api.herokuapp.com/feeds`)
      .then(res => {
        setImage(res.data.photos.photo)
      })
  }

  const renderCard = (card, index) => {
    const srcPath = 'https://farm' + card.farm + '.staticflickr.com/' + card.server + '/' + card.id + '_' + card.secret + '.jpg';

    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src={srcPath} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  };

  return <div>
    <div className="grid">
      {image.map(renderCard)}
    </div>
  </div>;
};

export default Feeds;