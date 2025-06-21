import React, { useRef, useState } from 'react';
import { LuUpload, LuTrash, LuLuggage } from 'react-icons/lu';

const PhotoSelector = ({
  image,
  setImage,
  preview,
  setPreview,
  text = "Upload Image",
  logo ,
  className = '',
}) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const fileUrl = URL.createObjectURL(file);
      setPreview && setPreview(fileUrl);
      setPreviewUrl(fileUrl);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreview && setPreview(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div
          className="w-64 h-44 rounded-3xl bg-gray-200 relative flex flex-col items-center justify-center text-center text-gray-700 cursor-pointer"
          onClick={onChooseFile}
        >
          <div className="text-6xl mb-2">{logo}</div>
          <span className="font-medium">{text}</span>
          <button
            type="button"
            className="absolute bottom-2 right-2 bg-gray-600 text-white p-2 rounded-xl"
          >
            <LuUpload />
          </button>
        </div>
      ) : (
        <div className="relative group">
          <img
            src={preview || previewUrl}
            alt="Preview"
            className="w-40 h-40 object-cover rounded-xl shadow-md"
          />
          <button
            type="button"
            className="absolute -top-2 -right-2 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md"
            onClick={handleRemoveImage}
          >
            <LuTrash />
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoSelector;
