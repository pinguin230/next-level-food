"use client";

import style from "./image-picker.module.css";
import {useRef, useState} from "react";
import Image from "next/image";

const ImagePicker = ({label, name}) => {

  const [pickedImage, setPickedImage] = useState()

  const imageInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
  }

  const handlePickClick = () => {
    imageInputRef.current.click();
  }

  return (
    <div className={style.picker}>
      <label htmlFor="image">{label}</label>
      <div className={style.controls}>
        <div className={style.preview}>
          {!pickedImage && <p>No image picker yet</p>}
          {pickedImage &&
          <Image src={pickedImage} alt="The image selected by user" fill/>
          }
        </div>
        <input
          className={style.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button onClick={handlePickClick} className={style.button} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;