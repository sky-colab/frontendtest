/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import { DetailedHTMLProps, ImgHTMLAttributes, useState } from "react";

import { css } from "@emotion/react";
import { Spinner } from "./Spinner";
import { useOnScreen } from "./useOnScreen";
import React from "react";

type ImgElementProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

interface ImageProps extends ImgElementProps {
  threshold?: number;
  loadingIcon?: React.ReactNode;
}

export const Image: React.FC<ImageProps> = ({ threshold = 0.9, loadingIcon, ...other }) => {
  const [el, setElement] = useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  useOnScreen(el, () => setVisible(true), { threshold });

  return (
    <div
      ref={setElement}
      css={css`
        margin-bottom: 20px;
        height: 700px;
        width: 100%;
        max-width: 100%;
        background-color: #F5F5F5;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;  
    `}
    >
      {
        visible && <img
          {...other}
          onLoad={() => setLoading(false)}
          css={css`
            position: absolute;
            opacity: ${loading ? 0 : 1};
            transition: opacity .7s ease-in;
            width: 100%;
            height: 100%;
          `}
        />
      }
      {loading && (loadingIcon || <Spinner />)}
    </div>
  );
}

export default Image
