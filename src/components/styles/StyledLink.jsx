import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 1.125rem;
  color: text-black; /* Tailwind red-600 */
  &:hover {
    color: text-gray-700; /* Tailwind gray-700 */
  }
  border-radius: 0.25rem; /* Tailwind rounded */
`;
