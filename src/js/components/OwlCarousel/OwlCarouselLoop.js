import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/ajax-loader.gif";

const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true
};

const events = {
  //   onDragged: event => {},
  //   onChanged: event => {}
};

export default class OwlCarouselLoop extends Component {
  state = {
    images: this.props.images
  };

  componentDidMount() {
    this.setState({ images: this.props.images });
    console.log(this.props.images);
    console.log(this.state.images);
  }

  _hydrateCarousel = () => {
    return this.state.images.map((pic, i) => {
      return (
        <div key={i} className="item">
          <img src={pic} />
        </div>
      );
    });
  };

  render() {
    return (
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        {this._hydrateCarousel()}
      </OwlCarousel>
    );
  }
}
