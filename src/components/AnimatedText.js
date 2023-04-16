import React from "react";

const AnimatedText = ({ text, classname }) => {
  console.log(text);
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <h1 className={`${classname}`}>
        {text.split(" ").map((word, index) => {
          <span key={word + "-" + index}>{word}</span>;
        })}
      </h1>
    </div>
  );
};

export default AnimatedText;
