import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const MyHero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
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
        <div className={innerClasses}>
            <div className="hero-content"><div class="mb-32">
                <Image src={require("../../assets/images/notorious-logo.png")} width={200} classNames="mb-32" />

            </div>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Private, Fast,   <span className="text-color-primary">Notorious.</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                The open source hierarchical notebook application.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://github.com/danobot/notorious/releases/latest">
                    Download
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/danobot/notorious">
                    Star on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <Image
              className="has-shadow"
              src={require('./../../assets/gifs/global-search.gif')}
              alt="Hero"
              width={896}
              height={504} />
          </div>

        </div>
      </div>
    </section>
  );
}

MyHero.propTypes = propTypes;
MyHero.defaultProps = defaultProps;

export default MyHero;