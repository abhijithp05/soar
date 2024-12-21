import React from 'react';

export const Card = (props) => (
  <div className="bg-white shadow-md rounded-3xl py-2 px-2 overflow-hidden h-full w-full">
    {props.children}
  </div>
);
