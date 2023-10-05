import React from "react";
import "./StaticSection.css";
const StaticSection = () => {
  return (
    <div className="static-section">
      <div className="image-block">
        <img src="/beautiful-girl-is-engaged-yoga-studio (1).jpg" alt="yoga" />
      </div>
      <div className="content-block">
        <a className="link-Pharmaceuticals" href="https://example.com">
          Pharmaceuticals
        </a>
        <h2 className="content-block-h">
          A Sure Way To Get Rid Of Your Back Ache Problem
        </h2>
        <p className="content-block-text">
          If you have tried everything, but still seem to suffer from snoring,
          don’t give up. Before turning to surgery, consider shopping for
          anti-snore devices. These products do not typically require a
          prescription, are economically priced and may just be the answer that
          you are looking for. However, as is the case when shopping for
          anything, there are a lot of anti-snore devices out there and…
        </p>
        <div className="info-block">
          <span className="info-block-date">28 Feb 2021</span>
          <a className="link-JimSullivan" href="https://example.com">
            Jim Sullivan
          </a>
          <div className="clock-time">
            <img className="clock" src="/Clock.svg" alt="clock" />
            <span className="time">6 min read</span>
          </div>
        </div>
      </div>
      <div className="card-block">
        <h2 className="card-block-h">Our Latest News</h2>
        <div className="column-block-massage">
          <img
            className="massage-img"
            src="/anti-cellulite-massage-luxury-spa.jpg"
            alt="massage"
          />
          <h4 className="column-text">Basic Swedish Back Massage Techniques</h4>
          <span className="date">28 Feb 2021</span>
        </div>
        <div className="column-block-coding">
          <img
            className="massage-img"
            src="/close-up-man-writing-code-laptop.jpg"
            alt="laptop"
          />
          <h4 className="column-text">How to Learn Coding for Beginners</h4>
          <span className="date">28 Feb 2021</span>
        </div>
        <div className="column-block-Googles">
          <img
            className="massage-img"
            src="/side-view-cropped-unrecognizable-business-people-working-common-desk.jpg"
            alt="people-working"
          />
          <h4 className="column-text">Google’s Influence Over Think Tanks</h4>
          <span className="date">28 Feb 2021</span>
        </div>
      </div>
    </div>
  );
};

export default StaticSection;
