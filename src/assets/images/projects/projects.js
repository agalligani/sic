import projImg1 from "./pic10.29.png";
import projImg2 from "./pic10.57.png";
import projImg3 from "./pic11.15.png";
import projImg4 from "./pic11.26.png";
import projImg5 from "./pic11.40.png";
import projImg6 from "./pic12.39.png";
import projImg7 from "./pic12.55.png";
import projImg8 from "./pic13.29.png";

export default projectImages = () => {
  const images = [
    projImg1,
    projImg2,
    projImg3,
    projImg4,
    projImg5,
    projImg6,
    projImg7,
    projImg8
  ];

  let n = images.map((img, i) => {
    return { url: img, alt: `pic ${i}` };
  });
  console.log("project images:", n);
  return n;
};
