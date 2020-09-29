import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const CenterImage = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  image,
  tagline,
  title,
  body,
  ...props
}) => {


  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">

        <div className="split-item-content center-content-mobile" data-reveal-container=".split-item">
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
        <div className={innerClasses}>
           <div className="hero-figure reveal-from-bottom illustration-element-02" data-reveal-value="20px" data-reveal-delay="800">
            <Image
              className="has-shadow"
              src={image}
              alt="Hero"
              width={896}
              height={504} />
          </div>

        </div>
      </div>
    </section>
  );
}

CenterImage.propTypes = propTypes;
CenterImage.defaultProps = defaultProps;

export default CenterImage;