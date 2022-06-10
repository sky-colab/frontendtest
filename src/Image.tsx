/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

import { css } from "@emotion/react";

type ImgElementProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

interface ImageProps extends ImgElementProps {}

export default function Image(props: ImageProps): JSX.Element {
  return (
    <img
      {...props}
      css={css`
        max-width: 100%;
      `}
    />
  );
}
