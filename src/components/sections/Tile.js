import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Tile = ({ title, body, icon, ...props }) => {

  return (
    <div className="tiles-item reveal-from-bottom">
      <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
          <div className="features-tiles-item-image mb-16">
          <FontAwesomeIcon icon={icon} />
          </div>
        </div>
        <div className="features-tiles-item-content">
          <h4 className="mt-0 mb-8">{title}</h4>
          <p className="m-0 text-sm">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;

export default Tile;
