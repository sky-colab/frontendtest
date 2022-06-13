/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const Spinner = () => <FontAwesomeIcon
  title="Wait.."
  css={css`
    width: 48px;
    height: 48px;
    animation: ${loadingSpinner} 1s linear infinite;
  `}
  icon={faSpinner}
/>


const loadingSpinner = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export default Spinner
