import PropTypes from "prop-types";
import React from "react";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import Column from "react-virtualized/dist/commonjs/Table/Column";
import Table from "react-virtualized/dist/commonjs/Table/Table";

import { exports as gu } from "../dtale/gridUtils";
import { Trans, withTranslation } from "react-i18next";

require("./ContextVariables.css");

const displayName = "Context Variables";
const propTypes = {
  contextVars: PropTypes.array.isRequired,
};

class ContextVariables extends React.Component {
  constructor(props) {
    super(props);
    this.renderInfoForUser = this.renderInfoForUser.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  renderInfoForUser() {
    const {t} = this.props;
    return (
      <div>
        <h3>
          <Trans t={t}>Context Variables</Trans>
        </h3>
        <p>
          <Trans t={t}>context_variables_des</Trans>
        </p>
      </div>
    );
  }

  renderTable() {
    if (this.props.contextVars.length === 0) {
      return <p><Trans t={this.props.t}>No context variables are defined.</Trans></p>;
    }
    return (
      <div>
        <AutoSizer disableHeight>
          {({ width }) => (
            <Table
              className="contextVariables"
              width={width}
              height={Math.min(300, (this.props.contextVars.length + 1) * (gu.ROW_HEIGHT + 2))}
              headerHeight={gu.ROW_HEIGHT}
              headerClassName="headerCell"
              rowHeight={gu.ROW_HEIGHT}
              rowCount={this.props.contextVars.length}
              rowGetter={({ index }) => this.props.contextVars[index]}
              rowStyle={{ display: "flex" }}>
              <Column label="Name" dataKey="name" width={200} className="cell" />
              <Column label="Value" dataKey="value" width={300} flexGrow={1} className="cell" />
            </Table>
          )}
        </AutoSizer>
      </div>
    );
  }

  render() {
    return (
      <div className="container mt-5 w-100">
        {this.renderInfoForUser()}
        {this.renderTable()}
      </div>
    );
  }
}

ContextVariables.displayName = displayName;
ContextVariables.propTypes = propTypes;

export default withTranslation("filter_page")(ContextVariables);
