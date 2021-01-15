import PropTypes from "prop-types";
import React from "react";
import { Trans, withTranslation } from "react-i18next";

class ColumnMenuOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <span className="toggler-action">
          <button className="btn btn-plain" onClick={this.props.open}>
            <i className={this.props.iconClass} />
            <span className="font-weight-bold">
              <Trans t={this.props.t}>{this.props.label}</Trans>
            </span>
          </button>
        </span>
      </li>
    );
  }
}
ColumnMenuOption.displayName = "ColumnMenuOption";
ColumnMenuOption.propTypes = {
  open: PropTypes.func,
  label: PropTypes.string,
  iconClass: PropTypes.string,
};

export default withTranslation("column_menu")(ColumnMenuOption);
