"use client";
import { Card } from "react-bootstrap";
import NextImage from "../../atoms/Img/NextImage";
import "./style.scss";
import Link from "../../atoms/Link/Link";
const GameCard = ({ game }) => {
  return (
    <Card className="game-card" bg="dark">
      <div className="game-card-top position-relative">
        <div className="card-img">
          <Card.Img variant="top" src={game.img} />
        </div>
        <Link
          href={game.link}
          classes="position-absolute btn btn-primary rounded-0 text-white fw-bolder"
          text="OYNAT"
          rightIcon="https://gameplus.com.tr/static/media/icon-play.914b7f60.webp"
        />
      </div>

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
