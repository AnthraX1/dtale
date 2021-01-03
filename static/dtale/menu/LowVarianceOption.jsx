import PropTypes from "prop-types";
import React from "react";
import { Trans, withTranslation } from "react-i18next";

require("./LowVarianceOption.css");

class LowVarianceOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { toggleLowVarianceBackground, backgroundMode, t } = this.props;
    const iconClass = `ico-check-box${backgroundMode == "lowVariance" ? "" : "-outline-blank"}`;
    return (
      <li className="hoverable low-variance">
        <span className="toggler-action">
          <button className="btn btn-plain" onClick={toggleLowVarianceBackground}>
            <i className={iconClass} style={{ marginTop: "-.25em" }} />
            <span className="font-weight-bold">
              <Trans t={t} ns={"menu"}>Low Variance Flag</Trans>
            </span>
          </button>
        </span>
        <div className="hoverable__content menu-description">
          <span>
            <Trans t={t} ns={"menu_description"}>low_variance_1</Trans>
          </span>
          <ul className="low-variance-conditions">
            <li>
              <Trans t={t} ns={"menu_description"}>low_variance_2</Trans>
            </li>
            <li>
              <Trans t={t} ns={"menu_description"}>low_variance_3</Trans>
            </li>
          </ul>
          <span>
            <Trans t={t} ns={"menu_description"}>low_variance_4</Trans>
          </span>
        </div>
      </li>
    );
  }
}
LowVarianceOption.displayName = "LowVarianceOption";
LowVarianceOption.propTypes = {
  backgroundMode: PropTypes.string,
  toggleLowVarianceBackground: PropTypes.func,
};

export default withTranslation("menu")(LowVarianceOption);
