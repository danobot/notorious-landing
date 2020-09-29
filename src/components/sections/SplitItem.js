import React from "react";
import { SectionProps } from '../../utils/SectionProps';
import classNames from 'classnames';

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const SplitItem = ({ title, body, tagline, image,imageFill,  ...props }) => {

  return (
    <div className="split-item">
      <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
        <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
          {tagline}
          </div>
        <h3 className="mt-0 mb-12">
          {title}
          </h3>
        <p className="m-0">
          {body}
          </p>
      </div>
      <div className={
        classNames(
          'split-item-image center-content-mobile reveal-from-bottom',
          imageFill && 'split-item-image-fill'
        )}
        data-reveal-container=".split-item">
        {image}
      </div>
    </div>
  );
};

SplitItem.propTypes = propTypes;
SplitItem.defaultProps = defaultProps;

export default SplitItem;
