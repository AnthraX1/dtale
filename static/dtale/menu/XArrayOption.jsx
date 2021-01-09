import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { openChart } from "../../actions/charts";
import { Trans, withTranslation } from "react-i18next";

function renderDimensionSelection(dimensionSelection, t) {
  if (_.size(dimensionSelection)) {
    return _.join(
      _.map(dimensionSelection, (val, prop) => `${val} (${prop})`),
      ", "
    );
  }
  return t("menu_description:ALL DATA");
}

class ReactXArrayOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;
    const openXArrayPopup = type => this.props.openChart(_.assignIn({ type }, this.props));
    if (this.props.xarray) {
      return (
        <li className="hoverable">
          <span className="toggler-action">
            <button className="btn btn-plain" onClick={() => openXArrayPopup("xarray-dimensions")}>
              <i className="ico-key" />
              <span className="font-weight-bold">
                <Trans t={t}>XArray Dimensions</Trans>
              </span>
            </button>
          </span>
          <div className="hoverable__content menu-description">
            {`${t('menu_description:xarray_dim_des')} ${renderDimensionSelection(this.props.xarrayDim, this.props.t)}`}
          </div>
        </li>
      );
    }
    return (
      <li className="hoverable">
        <span className="toggler-action">
          <button className="btn btn-plain" onClick={() => openXArrayPopup("xarray-indexes")}>
            <i className="ico-tune" />
            <span className="font-weight-bold">
              <Trans t={t}>Convert To XArray</Trans>
            </span>
          </button>
        </span>
        <div className="hoverable__content menu-description">
          <Trans t={t} ns="menu_description">xarray_conversion</Trans>
        </div>
      </li>
    );
  }
}
ReactXArrayOption.displayName = "ReactXArrayOption";
ReactXArrayOption.propTypes = {
  columns: PropTypes.array, // eslint-disable-line react/no-unused-prop-types
  xarray: PropTypes.bool,
  xarrayDim: PropTypes.object,
  openChart: PropTypes.func,
};

const ReduxXArrayOption = connect(
  state => _.pick(state, ["xarray", "xarrayDim"]),
  dispatch => ({ openChart: chartProps => dispatch(openChart(chartProps)) })
)(ReactXArrayOption);

export const XArrayOption = withTranslation(["menu", "menu_description"])(ReduxXArrayOption);
export default withTranslation(["menu", "menu_description"])(ReactXArrayOption);