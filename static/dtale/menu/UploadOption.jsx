import PropTypes from "prop-types";
import React from "react";

import { Trans, withTranslation } from "react-i18next";

class UploadOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;
    return (
      <li className="hoverable">
        <span className="toggler-action">
          <button className="btn btn-plain" onClick={this.props.open}>
            <i className="ico-file-upload" />
            <span className="font-weight-bold">
              <Trans t={t} ns="menu">Load Data</Trans>
            </span>
          </button>
        </span>
        <div className="hoverable__content menu-description">
          <Trans t={t} ns="menu_description">upload</Trans>
        </div>
      </li>
    );
  }
}
UploadOption.displayName = "UploadOption";
UploadOption.propTypes = {
  open: PropTypes.func,
};

export default withTranslation(["menu", "menu_description"])(UploadOption);
