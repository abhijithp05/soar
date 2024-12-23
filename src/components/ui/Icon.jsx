import React from 'react';
import styled from 'styled-components';

// Wrapper component for the SVG
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

// Styled component for the SVG itself
const StyledIcon = styled.svg`
  width: 100%;
  height: 100%;
  transition: fill 0.2s ease;

  // Apply styles to the child <path> element(s)
  & path {
    fill: ${(props) => props.fill || ''};

    transition:
      fill 0.2s ease,
      stroke 0.2s ease;
  }
`;

const Icon = ({
  icon: IconComponent,
  className,
  width,
  height,
  color,
  disabled,
  ...rest
}) => {
  if (!IconComponent) return null;

  return (
    <StyledIconWrapper
      color={color}
      disabled={disabled}
      className={className}
      width={width}
      height={height}
      {...rest}
    >
      <StyledIcon as={IconComponent} fill={color} />
    </StyledIconWrapper>
  );
};

export default Icon;
