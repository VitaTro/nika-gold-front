import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImagePlaceholder, StyledImage } from "./ImageComponent.styled";

const ImageComponent = ({ publicID }) => {
  console.log("Rendering image with publicID:", publicID); // Дебаг-інформація
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dblh78pvc",
    },
  });

  if (!publicID) {
    console.error("publicID is undefined or empty");
    return (
      <ImagePlaceholder>
        <FontAwesomeIcon icon={faImage} size="4x" />
      </ImagePlaceholder>
    );
  }
  try {
    const img = cld
      .image(publicID)
      .format("auto")
      .quality("auto")
      .resize(auto().gravity(autoGravity()).width(400).height(500));

    return <StyledImage cldImg={img} />;
  } catch (error) {
    console.error("Error creating image:", error);
    return (
      <ImagePlaceholder>
        <FontAwesomeIcon icon={faImage} size="4x" />{" "}
      </ImagePlaceholder>
    );
  }
};
export default ImageComponent;
