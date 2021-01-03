import PropTypes from "prop-types";
import React from "react";

import { Trans, withTranslation } from "react-i18next";

class DuplicatesOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;
    return (
      <li className="hoverable">
        <span className="toggler-action">
          <button className="btn btn-plain" onClick={this.props.open}>
            <i className="fas fa-clone ml-2 mr-4" />
            <span className="font-weight-bold">
              <Trans t={t} ns="menu">Duplicates</Trans>
            </span>
          </button>
        </span>
        <div className="hoverable__content menu-description">
          <Trans t={t} ns="menu_description">duplicates</Trans>
        </div>
      </li>
    );
  }
}
DuplicatesOption.displayName = "DuplicatesOption";
DuplicatesOption.propTypes = {
  open: PropTypes.func,
};

export default withTranslation(["menu", "menu_description"])(DuplicatesOption);
