import PropTypes from "prop-types";
import React from "react";

import app from "../../reducers/dtale";
import { Trans, withTranslation } from "react-i18next";

class InstancesOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const processCt = app.getHiddenValue("processes");
    const {t} = this.props;
    return (
      <li className="hoverable">
        <span className="toggler-action">
          <button className="btn btn-plain" onClick={this.props.open}>
            <i className="ico-apps" />
            <span className="font-weight-bold">
              <Trans t={t} ns="menu">{"Instances "}</Trans>
              <span className="badge badge-secondary">{processCt}</span>
            </span>
          </button>
        </span>
        <div className="hoverable__content menu-description">
          <span>
            <Trans t={t} ns="menu_description">instances</Trans>
          </span>
        </div>
      </li>
    );
  }
}
InstancesOption.displayName = "InstancesOption";
InstancesOption.propTypes = {
  open: PropTypes.func,
};

export default withTranslation(["menu", "menu_description"])(InstancesOption);
