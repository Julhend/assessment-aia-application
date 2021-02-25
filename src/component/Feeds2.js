import React from "react";
import "./Box.css";
import axios from 'axios';
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import search from "../component/Navbar";


const Feeds2 = (props) => {
  const [image, setImage] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [total, setTotal] = useState();
  const [result, setResult] = useState([]);


  useEffect(() => {
    const url = 'https://assesment-aia-api.herokuapp.com/feeds';
    getData(url)
  }, []

  )
  const handlePageChange = (page, tags) => {
    console.log(page);
    const urlApi = `https://assesment-aia-api.herokuapp.com/feeds?page=${page}&tags=${tags}`
    getData(urlApi);
    setActivePage(page);
  }


  const getData = async (url) => {
    await axios.get(url)
      .then((res) => {
        setImage(res.data.photos.photo)
        setTotal(res.data.photos.perpage)
      }).catch((err) => console.log(err));
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
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <hr />
      <Pagination
        activePage={activePage}
        totalItemsCount={total}
        onChange={handlePageChange}
        itemsCountPerPage={10}
        prevPageText="Previous"
        nextPageText="Next"
        itemClass="page-item"
        linkClass="page-link"
      />
      <hr />
    </div>
  </div>;
};

export default Feeds2;