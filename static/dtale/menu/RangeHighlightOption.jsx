import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";

import { Bouncer } from "../../Bouncer";
import { Trans, withTranslation } from "react-i18next";

class RangeHighlightOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const openRangeHightlight = () => this.props.openChart(_.assignIn({ type: "range", size: "sm" }, this.props));
    const turnOffRangeHighlight = () => {
      const rangeHighlight = { ...this.props.rangeHighlight };
      _.forEach(rangeHighlight, range => {
        range.active = false;
      });
      this.props.propagateState({ rangeHighlight, backgroundMode: null });
    };
    const {t} = this.props;
    return (
      <li className="hoverable">
        <span className="toggler-action">
          <button className="btn btn-plain" onClick={openRangeHightlight}>
            <div style={{ display: "inherit" }}>
              {this.props.backgroundMode === "range" && (
                <div className="bg-range-bouncer">
                  <Bouncer />
                </div>
              )}
              {this.props.backgroundMode !== "range" && <div className="bg-range-icon" />}
              <span className="font-weight-bold pl-4">
                <Trans t={t} ns={"menu"}>Highlight Range</Trans>
              </span>
            </div>
          </button>
        </span>
        {this.props.backgroundMode === "range" && (
          <div className="ml-auto mt-auto mb-auto">
            <i className="ico-close-circle pointer mr-3 btn-plain" onClick={turnOffRangeHighlight} />
          </div>
        )}
        <div className="hoverable__content menu-description">
          <Trans t={t} ns={"menu_description"}>highlight_range</Trans>
        </div>
      </li>
    );
  }
}
RangeHighlightOption.displayName = "RangeHighlightOption";
RangeHighlightOption.propTypes = {
  backgroundMode: PropTypes.string,
  rangeHighlight: PropTypes.object,
  propagateState: PropTypes.func,
  openChart: PropTypes.func,
};

export default withTranslation(["menu", "menu_description"])(RangeHighlightOption);
