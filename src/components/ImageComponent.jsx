import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

const ImageComponent = ({ publicID }) => {
  const cld = new Cloudinary({ cloud: { cloudName: "dblh78pvc" } });
  const img = cld
    .image(publicID)
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(400).height(500));
  return <AdvancedImage cldImg={img} />;
};

export default ImageComponent;
