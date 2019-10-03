import * as React from "react";
import { render } from "react-dom";
import "font-awesome/css/font-awesome.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
const style = "col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4";

const IMAGES = [
  {
    image: "https://cdn.wallpapersafari.com/41/58/0Xwqxv.jpg",
    id: 1
  },
  {
    image:
      "https://www.friyey.com/blog/wp-content/uploads/2018/05/1000x1000-1-3.jpg",
    id: 2
  },
  {
    image: "https://cdn.wallpapersafari.com/41/58/0Xwqxv.jpg",
    id: 3
  },
  {
    image:
      "https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/nature-wildlife/naturewildlife-1000x1000.jpg",

    id: 4
  },
  {
    image:
      "http://www.oum.ox.ac.uk/bacterialworld/assets/ZCdhJjDGNg/earth-from-space-adobestock_196391051_cmyk-1000x1000.jpeg",

    id: 5
  },
  {
    image: "https://i.imgur.com/aIAZsYj.jpg?1",
    id: 6
  },
  {
    image:
      "http://www.gigslutz.co.uk/wp-content/uploads/2016/04/artwork_oceanbyocean-1000x1000.jpg",
    id: 7
  },
  {
    image: "https://cdn.wallpapersafari.com/41/58/0Xwqxv.jpg",
    id: 8
  },
  {
    image:
      "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&w=1000&q=80",
    id: 9
  },
  {
    image: "https://i.imgur.com/aIAZsYj.jpg?1",
    id: 6
  },
  {
    image:
      "http://www.gigslutz.co.uk/wp-content/uploads/2016/04/artwork_oceanbyocean-1000x1000.jpg",
    id: 7
  },
  {
    image: "https://i.imgur.com/aIAZsYj.jpg?1",
    id: 6
  }
];
class ImageGallery extends React.Component {
  state = {
    source: "",
    isOpen: false
  };
  handleClick = src => this.setState({ source: src, isOpen: true });
  render() {
    const { source, isOpen } = this.state;
    return (
      <div className="row no-gutters">
        {IMAGES.map((item, key) => {
          return (
            <div className={style}>
              <img
                key={key}
                src={item.image}
                onClick={() => this.handleClick(item.image)}
                width="100%"
                height="auto"
                alt="altimage"
              />
            </div>
          );
        })}

        <div className={isOpen ? "modal display-block" : "modal display-none"}>
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => this.setState({ isOpen: false })}
            >
              <span className="fa fa-times"> </span>
            </button>

            <img src={source} width="100%" alt="imagee" height="auto" />
          </div>
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
render(<ImageGallery />, rootElement);
