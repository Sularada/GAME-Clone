"use client";
import { Card } from "react-bootstrap";
import NextImage from "../../atoms/Img/NextImage";

const GameCard = ({ game }) => {
  return (
    <Card style={{ width: "10rem" }} bg="dark">
      <Card.Img variant="top" src={game.img} />
      <Card.Body>
        <Card.Title className="text-white fs-6">{game.name}</Card.Title>
        <Card.Text className="text-light" style={{ fontSize: "14px" }}>
          {game.company}
        </Card.Text>
        <Card.Text className="text-light fs-6">
          <NextImage
            src={game.platform_img}
            width={24}
            height={24}
            alt={"platform icon"}
          />
          {game.platform}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
