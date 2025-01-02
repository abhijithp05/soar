// import { StyledIcon } from 'components/styles/StyledIcon';
// import React from 'react';
// import styled from 'styled-components';

// // Wrapper component for the SVG
// const StyledIconWrapper = styled.div`
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   width: ${(props) => props.width || '24px'}; // Default size
//   height: ${(props) => props.height || '24px'}; // Default size
//   color: ${(props) =>
//     props.color || ''}; // Allow dynamic color using Tailwind-like color
//   opacity: ${(props) => (props.disabled ? 0.5 : 1)};
//   cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
// `;

// const Icon = ({
//   icon: IconComponent,
//   className,
//   width,
//   height,
//   color,
//   disabled,
//   ...rest
// }) => {
//   if (!IconComponent) return null;

//   return (
//     <StyledIconWrapper
//       color={color}
//       disabled={disabled}
//       className={className}
//       width={width}
//       height={height}
//       {...rest}
//     >
//       <StyledIcon as={IconComponent} fill={color} />
//     </StyledIconWrapper>
//   );
// };

// export default Icon;

import React from 'react';
import styled from 'styled-components';
// import { StyledIcon } from 'components/styles/StyledIcon';

// Wrapper component for the icon
const StyledIconWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '24px'}; // Default size
  height: ${(props) => props.height || '24px'}; // Default size
  color: ${(props) =>
    props.color || ''}; // Allow dynamic color using Tailwind-like color
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Icon = ({
  icon: IconComponent,
  src, // Path to image (WebP, PNG, etc.)
  className,
  width,
  height,
  color,
  disabled,
  alt = 'Icon', // Alt text for image
  ...rest
}) => {
  if (!IconComponent && !src) return null; // If no icon or src provided, return null

  // Check if the passed `icon` is a React component (SVG)
  // const isSvg = typeof IconComponent === 'function';

  return (
    <StyledIconWrapper
      color={color}
      disabled={disabled}
      className={className}
      width={width}
      height={height}
      {...rest}
    >
      {/* {isSvg ? (
        // Render SVG icon
        <StyledIcon
          as={IconComponent}
          fill={color}
          width={width}
          height={height}
        />
      ) : ( */}
      {/* // Render Image (WebP, PNG, etc.) */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
      />
      {/* )} */}
    </StyledIconWrapper>
  );
};

export default Icon;
