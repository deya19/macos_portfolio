import React from "react";
import WindowControlls from "#components/WindowControlls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const TextFile = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControlls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="bg-white h-full overflow-auto p-6">
        <div className="max-w-2xl space-y-4">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-24 h-24 rounded-lg object-cover"
            />
          ) : null}

          {subtitle ? <h3 className="text-lg font-semibold">{subtitle}</h3> : null}

          {Array.isArray(description)
            ? description.map((p, i) => (
                <p key={i} className="text-sm text-black/80 leading-relaxed">
                  {p}
                </p>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");

export default TextFileWindow;
