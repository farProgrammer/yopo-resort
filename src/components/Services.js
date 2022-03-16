import React, { Component } from "react";

import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: (
          <img
            src="https://ap-hotelsresorts.com/wp-content/uploads/2021/02/Principal-1-scaled.jpg"
            width="50"
            height="50"
            alt=""
          />
        ),
        title: "SPA",
        info: "Lounge Hotel has a SPA where you can find a sauna, steam bath, hydromassage and an indoor pool (heated during winter) with free access.For your well-being to be even more complete, it also offers rooms where you can enjoy various therapeutic and beauty treatments, at an additional cost and by appointment.Opening hours SPA – 8 am – 8 pm Treatment / Massage rooms – 10 am – 1 pm and from 2 pm – 7 pm. Monday and Tuesday, treatment / massage rooms closed. ",
      },
      {
        icon: (
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/0c/ed/52/2a/olympic-size-swimming.jpg"
            width="50"
            height="50"
            alt=""
          />
        ),
        title: "Swimming Pool",
        info: " Hotel has two swimming pools: one outdoor, located in the unit’s gardens and offering free parasols and sunbeds; and another indoor, located in the hotel’s SPA, the latter being heated during the winter.The outdoor pool also has a Pool Bar in the same area that serves cocktails and light meals. You can also enjoy a drink at the Pool Bar counter while cooling off at the pool.",
      },

      {
        icon: (
          <img
            src="https://ap-hotelsresorts.com/wp-content/uploads/2021/02/Gym-scaled.jpg"
            width="50"
            height="50"
            alt=""
          />
        ),
        title: "Gym",
        info: "For those who like to stay active, AP Maria Nova Lounge Hotel has at your disposal a gym, overlooking the hotel’s gardens and with natural light, where you can keep your daily training plan. ",
      },
      {
        icon: (
          <img
            src="https://us.123rf.com/450wm/oksun70/oksun701411/oksun70141100309/33932085-kid-girl-playing-guitar-toy-at-home.jpg?ver=6"
            width="50"
            height="50"
            alt=""
          />
        ),

        title: "Kid's Club",
        info: "Our Kids’ Club offers a selection of toys and games for all ages. Young guests and their families play, among others, table football, board games, or even get creative at the special drawing tables! Our experienced staff also organizes kids’ entertainment sessions with fun activities and face painting.",
      },
      {
        icon: (
          <img
            src="https://www.clubcar.com/-/media/project/milky-way/clubcar/clubcar-images/villager/villager-6/villager-6-resort-guest-transport-1.jpg?h=533&iar=0&w=800"
            width="50"
            height="50"
            alt=""
          />
        ),
        title: "Club Car",
        info: "Club Car has the solutions you need with two-wheel and automatic four-wheel drive work utility vehicles, street-legal low speed vehicles (LSVs) and transport vehicles that carry up to eight passengers.Our vehicles are built on rustproof, aircraft-grade aluminum frames that resist the salt, water and chemicals often found on resorts. We also offer the widest range of commercial accessories in the industry.And, our trained Transportation Solutions Experts will audit your fleet -- department by department and vehicle by vehicle -- and prepare a Comprehensive Transportation Strategy for your review, at no cost.",
      },
      {
        icon: (
          <img
            src="https://millionmilesecrets.com/wp-content/uploads/shutterstock_102034054.jpg"
            width="50"
            height="50"
            alt=""
          />
        ),
        title: "Complimentary Breakfast",
        info: "Staying at a hotel that offers free breakfast is a terrific way to save money and time because you don’t need to run around looking for your morning meal or spend a fortune. Some hotels offer free breakfast to everyone, but you can often get a fancier, more substantial meal when you have hotel elite status And you might be surprised to find out you can earn status which gets you free breakfast just by holding the right travel credit card or hotel credit card. You don’t need to be a frequent traveler or spend tons of money to get in on this perk. Let’s take a look at all the major hotels with free breakfast. We’ll show you the best chains to look for and how you can do even better by earning elite status with rewards credit cards.",
      },
    ],
  };
  render() {
    return (
      <section
        className="services"
        style={{ backgroundColor: "orange", color: "green" }}
      >
        <Title title="Complimentary Services From Us" />
        <a href="/">
          <h2
            style={{
              backgroundColor: "orange",
              color: "green",
              borderRadius: "50%",
            }}
          >
            Yopo Resort
            <img
              src="https://ap-hotelsresorts.com/wp-content/uploads/cache/2020/09/01_Hotel-4-scaled/2735907229.jpg"
              width="250px"
              height="250px"
              style={{
                backgroundColor: "orange",
                color: "green",
                borderRadius: "50%",
              }}
            />
          </h2>
        </a>

        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <p>{item.url}</p>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
