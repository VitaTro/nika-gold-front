import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

const ImageComponent = ({ publicID }) => {
  console.log("Rendering image with publicID:", publicID); // Дебаг-інформація
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dblh78pvc",
    },
  });

  const img = cld
    .image(publicID)
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(400).height(500));

  return <AdvancedImage cldImg={img} />;
};

export default ImageComponent;
