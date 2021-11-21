import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/img-card (1).jpg";
import imgCard2 from "../img/img-card (2).jpg";
import imgCard3 from "../img/img-card (3).jpg";
import imgCard4 from "../img/img-card (4).jpg";
import imgCard5 from "../img/img-card (5).jpg";
import imgCard6 from "../img/img-card (6).jpg";
import imgCard7 from "../img/img-card (7).jpg";
import imgCard8 from "../img/img-card (8).jpg";
import imgCard9 from "../img/img-card (9).jpg";
import imgBarobaybay from "../img/barobaybay.jpg";
const tours = [
  {
    id: 1,
    category: ["resort", "honeymoon"],
    img: imgCard1,
    alt: "Live your life",
    title: "Bogmallo Resort",
    subtitle: "Goa"
  },
  {
    id: 2,
    category: ["beach", "mountain"],
    img: imgCard2,
    alt: "Enjoy your life",
    title: "Yarda",
    subtitle: "Andhra Pradesh"
  },
  {
    id: 3,
    category: ["resort", "honeymoon"],
    img: imgCard3,
    alt: "Beautiful view",
    title: "IHG Hotel",
    subtitle: "Goa"
  },
  {
    id: 4,
    category: ["climbing", "mountain"],
    img: imgCard4,
    alt: "Take the risk",
    title: "Nanda Devi",
    subtitle: "Uttarakhand"
  },
  {
    id: 5,
    category: ["resort", "honeymoon", "beach"],
    img: imgCard5,
    alt: "Take a deep breathe",
    title: "Vythiri Resort",
    subtitle: "Vythiri Village"
  },
  {
    id: 6,
    category: ["climbing", "mountain"],
    img: imgCard6,
    alt: "Too much fun",
    title: "Kamet",
    subtitle: "Garhwal"
  },
  {
    id: 7,
    category: ["beach", "climbing"],
    img: imgCard7,
    alt: "Live your life",
    title: "Parvati valley",
    subtitle: "Himachal Pradesh"
  },
  {
    id: 8,
    category: ["honeymoon", "beach", "resort"],
    img: imgCard8,
    alt: "Enjoy your life",
    title: "Hotel Kences",
    subtitle: "Palm Beach"
  },
  {
    id: 9,
    category: ["beach", "resort"],
    img: imgCard9,
    alt: "Feel the view",
    title: "Taj Green Cove",
    subtitle: "Kovalam"
  },
  {
    id: 10,
    category: ["camping", "beach"],
    img: imgBarobaybay,
    alt: "Fun with Beauty",
    title: "Kovalam",
    subtitle: "Kerala"
  }
];

const itemCategories = [
  "all",
  "beach",
  "mountain",
  "resort",
  "climbing",
  "camping",
  "honeymoon"
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Tour Packages</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                    return tourcard.category.map(catItem => {
                      return catItem === category ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null;
                    });
                  })
                  : cards.map(tourcard => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
