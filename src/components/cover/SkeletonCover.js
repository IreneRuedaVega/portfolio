import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "../../stylesheets/layout/cover.scss";

const SkeletonCover = () => {
  return (
    <section className="skeletonCover">
      <h2 className="skeletonCover__name">
        &#60;Irene
        <span className="skeletonCover__name--surname">RuedaVega</span>{" "}
        &#47;&#62;
      </h2>
      <SkeletonTheme color="#8787ff" highlightColor="white">
        <Skeleton duration={1} height={15} width={15} count={3} circle={true} />
      </SkeletonTheme>
    </section>
  );
};

export default SkeletonCover;
