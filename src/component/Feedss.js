import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const Feedss = () => {
  const cardInfo = [
    {
      image: "https://i.pinimg.com/236x/0b/e5/90/0be590755f957eac73f3df2c42c7c8e4.jpg",
      title: "Levi",
      text: "NICEEEEE",
    },
    {
      image: "https://i.pinimg.com/236x/93/02/a7/9302a768f28e3b874b1d5f3ffb1d89f2.jpg",
      title: "CAT",
      text: "SO KYOOT",
    },
    {
      image: "https://i.pinimg.com/236x/75/89/7a/75897a0400d9900c74d0bcd8295b46fb.jpg",
      title: "EREN EYAGAHH",
      text: "THE GOAT",
    },
    {
      image: "https://i.pinimg.com/236x/53/aa/3f/53aa3faa5ed93005a3dc22c5cc844ffc.jpg",
      title: "Levi COOL VERS",
      text: "NAISUU",
    }
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default Feedss;
