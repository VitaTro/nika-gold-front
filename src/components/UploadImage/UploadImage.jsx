import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("photo", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const filePath = response.data.filePath;
      const fileType = determineFileType(file.name); // Функція для визначення типу файлу

      if (fileType === "gold") {
        navigate("/products/gold");
      } else if (fileType === "silver") {
        navigate("/products/silver");
      } else if (fileType === "set") {
        navigate("/products/set");
      } else if (fileType === "box") {
        navigate("/products/box");
      }
    } catch (error) {
      console.error("Failed to upload image", error);
    }
  };

  const determineFileType = (fileName) => {
    if (fileName.includes("gold")) {
      return "gold";
    } else if (fileName.includes("silver")) {
      return "silver";
    } else if (fileName.includes("set")) {
      return "set";
    } else if (fileName.includes("box")) {
      return "box";
    } else {
      return "unknown";
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadImage;
