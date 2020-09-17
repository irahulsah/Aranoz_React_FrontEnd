import React, { useRef, useState, useEffect } from "react";

import "./ImagePicker.css";

const ImagePicker = (props) => {
  const [file, setFile] = useState();
  const [isValid, setIsValid] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);
  // console.log(previewUrl);

  const pickedHandler = (event) => {
    let pickedFile;
    let fileISValid = isValid;

    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];

      setFile(pickedFile);
      setIsValid(true);
      fileISValid = true;
    } else {
      setIsValid(false);
      fileISValid = false;
    }

    props.onInput(props.id, pickedFile, fileISValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };
  return (
    <div className="form-control">
      <input
        type="file"
        id={props.id}
        style={{ display: "none" }}
        onChange={pickedHandler}
        ref={filePickerRef}
        accept=".jpg,.png,.jprg"
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="preview" />}
          {!previewUrl && <p>Please,pick a image.</p>}
        </div>
        <button type="button" className="btn_3" onClick={pickImageHandler}>
          Pick Image
        </button>
      </div>
      {!isValid && <p>{props.errortext}</p>}
    </div>
  );
};

export default ImagePicker;
