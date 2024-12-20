import React from 'react';

// Icon component that can render an SVG passed as a prop
const Icon = ({ icon: IconComponent, className, ...rest }) => {
  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={className}
      {...rest} // Pass any other props like width, height, etc.
    />
  );
};

export default Icon;
