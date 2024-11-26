import { AdvancedImage } from "@cloudinary/react";
import styled from "styled-components";

export const ImagePlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 350px;
  border: 1px solid #ccc;
  margin: 0 auto;
  background-color: #f0f0f0;
`;
export const StyledImage = styled(AdvancedImage)`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1/1;
`;
