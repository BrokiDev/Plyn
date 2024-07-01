import React, { Fragment } from "react";

interface CardHeroProps {
  item: [{ title: string; componentImage: React.ReactNode; paragraph: string }];
}

const CardHero = ({ item }: CardHeroProps) => {
  return (
    <div className="bg-[#0C1727] rounded-lg shadow-lg p-6 text-white flex flex-col items-center justify-center">
      {item.map((item, index) => {
        return (
          <Fragment key={index}>
            <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
            {item.componentImage}
            <p className="mt-4 text-gray-400">{item.paragraph}</p>
          </Fragment>
        );
      })}
    </div>
  );
};

export default CardHero;
