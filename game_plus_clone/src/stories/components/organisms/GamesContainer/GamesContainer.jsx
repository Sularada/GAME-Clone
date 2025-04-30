"use client";
import { Form } from "react-bootstrap";
import GameCard from "../../molecules/GameCard/GameCard";

const GamesContainer = ({ games }) => {
  return (
    <section className=" px-4 w-100">
      <Form.Control
        className="bg-dark border-0 text-light w-100 fs-5 mb-3"
        type="search"
        placeholder="Oyun ismine göre ara"
      />
      <div className="d-flex flex-wrap gap-2 justify-content-between">
        {games.map((game) => {
          return <GameCard game={game} />;
        })}
      </div>
    </section>
  );
};

export default GamesContainer;
