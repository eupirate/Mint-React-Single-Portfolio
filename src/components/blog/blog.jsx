import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "./blog.scss";
import "swiper/css/swiper.css";
// Assets
import Preview01 from "../../assets/blog/story01/preview.png";
import Preview02 from "../../assets/blog/story02/preview.png";
import Preview03 from "../../assets/blog/story03/preview.png";
import Preview04 from "../../assets/blog/story04/preview.png";
import Preview05 from "../../assets/blog/story05/preview.png";
import Preview06 from "../../assets/blog/story06/preview.png";
// Components
import Title from "../ui-components/title/title";
import BlogBox from "./blogBox";

class Blog extends React.Component {
  state = {
    // LIST ARRAY OF BLOG STORIES
    stories: [
      {
        image: Preview01,
        id: "1",
        title: "APJ ops!",
        description: "In addition to the ongoing competition between the factions, there are several kinds of special events held on specific dates.",
        date: "Stay tuned",
      },
      {
        image: Preview02,
        id: "2",
        title: "North and South America ops!",
        description: "Ingress is supported by advertising. Companies would be able to pay for their locations to be used as portals in the game, thus making their stores a pilgrimage site for Ingress players, which may translate into real-world sales",
        date: "Stay tuned",
      },
      {
        image: Preview03,
        id: "3",
        title: "European ops!",
        description: "In December 2017, Niantic announced a thoroughly revamped version of the game, branded as Ingress Prime, would be released in 2018 using a completely rewritten new client and the lessons learned from the massive popularity of Pokémon Go.",
        date: "Stay tuned",
      },
      
      {
        image: Preview04,
        id: "4",
        title: "BLOG TITLE!",
        description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
        date: "2021",
      },
      {
        image: Preview05,
        id: "5",
        title: "BLOG TITLE!",
        description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
        date: "2021",
      },
      {
        image: Preview06,
        id: "6",
        title: "BLOG TITLE!",
        description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
        date: "2021",
      },
    ],
  };

  render() {
    // BLOG STORIES RENDER
    let storiesRender = null;
    if (this.state.stories) {
      storiesRender = this.state.stories.map((story) => (
        <div key={story.id}>
          <BlogBox article={story} />
        </div>
      ));
    }
    // OPTIONS FOR BLOG SLIDER
    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };

    return (
      <div className="blog" id="blog">
        <div className="wrapper">
          <Title title="BLOG." />
          <p className="font12">
            <a href= 'https://ingress.com/events/event-details'>Global Events</a><br></br>
            Each and every day, the Ingress community is mobilizing. From Anomaly Events to Cross Faction Meetups to monthly First Saturday events, Ingress is happening all around you. Learn about the different event types hosted below.<br></br>An Anomaly is a series of events in which two factions compete for control of the local XM network. The winning faction will gain special rewards.<br></br>Special Events are unique Ingress events that may be creative endeavors, exceptional challenges, or personal adventures.
            <br />Mission Days, explore and interact with highlighted landmarks during simple but fun in-game missions within a specified city. Host your own? <br />Join player-hosted local events on the first Saturday of each month to welcome new Agents into Ingress and socialize with members of both factions.
          </p>
          <div className="padding30">
            <Swiper {...params}>{storiesRender}</Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
