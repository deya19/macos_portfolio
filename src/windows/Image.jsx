import React from "react";
import WindowControlls from "#components/WindowControlls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const ImageFile = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControlls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="bg-white h-full flex items-center justify-center p-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="max-h-full max-w-full object-contain rounded-lg"
          />
        ) : null}
      </div>
    </>
  );
};

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageFileWindow;
