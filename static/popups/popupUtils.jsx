/* eslint max-lines: "off" */
import _ from "lodash";
import React from "react";

import About from "./About";
import { CodeExport } from "./CodeExport";
import { Confirmation } from "./Confirmation";
import { CopyRangeToClipboard } from "./CopyRangeToClipboard";
import { Correlations } from "./Correlations";
import { Error } from "./ErrorPopup";
import { Filter } from "./Filter";
import { RangeHighlight } from "./RangeHighlight";
import { Rename } from "./Rename";
import { Upload } from "./Upload";
import { XArrayDimensions } from "./XArrayDimensions";
import { XArrayIndexes } from "./XArrayIndexes";
import { ColumnAnalysis } from "./analysis/ColumnAnalysis";
import { CreateColumn } from "./create/CreateColumn";
import { Duplicates } from "./duplicates/Duplicates";
import Instances from "./instances/Instances";
import { PredictivePowerScore } from "./pps/PredictivePowerScore";
import { CreateReplacement } from "./replacement/CreateReplacement";
import { Reshape } from "./reshape/Reshape";
import { Variance } from "./variance/Variance";
import { Trans } from "react-i18next";

function buildFilter(props) {
  const title = (
    <React.Fragment>
      <i className="fa fa-filter" />
      <strong>
        <Trans t={props.t} ns="menu">Custom Filter</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <Filter />;
  return { title, body };
}

function buildColumnAnalysis(props) {
  const title = (
    <React.Fragment>
      <i className="ico-equalizer" />
        <Trans t={props.t} ns="popup">{" Column Analysis for "}</Trans>
      <strong>{_.get(props, "chartData.selectedCol")}</strong>
      <div id="describe" />
    </React.Fragment>
  );
  const body = <ColumnAnalysis />;
  return { title, body };
}

function buildCorrelations(props) {
  const title = (
    <React.Fragment>
      <i className="ico-bubble-chart" />
      <strong>{_.get(props, "chartData.title")}</strong>
    </React.Fragment>
  );
  const body = <Correlations propagateState={props.propagateState} />;
  return { title, body };
}

function buildPps(props) {
  const title = (
    <React.Fragment>
      <i className="ico-bubble-chart" />
      <strong>
          <Trans t={props.t} ns="menu">Predictive Power Score</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <PredictivePowerScore propagateState={props.propagateState} />;
  return { title, body };
}

function buildCreateColumn(props) {
  const title = (
    <React.Fragment>
      <i className="ico-build" />
      <strong>
          <Trans t={props.t} ns="menu">Build Column</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <CreateColumn />;
  return { title, body };
}

function buildTypeConversion(props) {
  const title = (
    <React.Fragment>
      <i className="ico-build" />
        <Trans t={props.t} ns="popup">{" Type Conversion of "}</Trans>
      <strong>{_.get(props, "chartData.selectedCol")}</strong>
    </React.Fragment>
  );
  const body = (
    <CreateColumn
      prePopulated={{
        type: "type_conversion",
        saveAs: "inplace",
        cfg: { col: _.get(props, "chartData.selectedCol") },
      }}
    />
  );
  return { title, body };
}

function buildCleaners(props) {
  const title = (
    <React.Fragment>
      <i className="ico-build" />
        <Trans t={props.t} ns="popup">{" Clean "}</Trans>
      <strong>{_.get(props, "chartData.selectedCol")}</strong>
    </React.Fragment>
  );
  const body = (
    <CreateColumn
      prePopulated={{
        type: "cleaning",
        cfg: { col: _.get(props, "chartData.selectedCol") },
      }}
    />
  );
  return { title, body };
}

function buildReshape(props) {
  const title = (
    <React.Fragment>
      <i className="fas fa-tools" />
      <strong>
          <Trans t={props.t} ns="menu">Summarize Data</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <Reshape />;
  return { title, body };
}

function buildAbout(props) {
  const title = (
    <React.Fragment>
      <i className="fa fa-info-circle la-lg" />
      <strong>
          <Trans t={props.t} ns="menu">About</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <About />;
  return { title, body };
}

function buildConfirm(props) {
  const title = (
    <React.Fragment>
      <i className="ico-check-circle" />
      <strong>
          <Trans t={props.t} ns="popup">Yes/No</Trans>
      </strong>
      <small className="pl-3">({_.get(props, "chartData.title")})</small>
    </React.Fragment>
  );
  const body = <Confirmation />;
  return { title, body };
}

function buildCopyRange(props) {
  const title = (
    <React.Fragment>
      <i className="fas fa-clipboard" />
        <strong>
            <Trans t={props.t} ns="popup">Yes/No</Trans>
        </strong>
      <small className="pl-3">({_.get(props, "chartData.title")})</small>
    </React.Fragment>
  );
  const body = <CopyRangeToClipboard propagateState={props.propagateState} />;
  return { title, body };
}

function buildRange(props) {
  const title = (
    <React.Fragment>
      <i className="ico-flag" />
      <strong>
          <Trans t={props.t} ns="menu">Range Highlights</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <RangeHighlight {...props} />;
  return { title, body };
}

function xarrayDimensions(props) {
  const title = (
    <React.Fragment>
      <i className="ico-key" />
      <strong>
          <Trans t={props.t} ns="menu">XArray Dimensions</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <XArrayDimensions {...props} />;
  return { title, body };
}

function xarrayIndexes(props) {
  const title = (
    <React.Fragment>
      <i className="ico-tune" />
      <strong>
          <Trans t={props.t} ns="menu">Convert To XArray</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <XArrayIndexes {...props} />;
  return { title, body };
}

function buildRename(props) {
  const title = (
    <React.Fragment>
      <i className="ico-edit" />
      <strong>
          <Trans t={props.t} ns="menu">Rename</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <Rename {...props} />;
  return { title, body };
}

function buildReplacement(props) {
  const title = (
    <React.Fragment>
      <i className="fas fa-backspace" />
        <Trans t={props.t} ns="popup">{" Replacements for "}</Trans>
      <strong>{_.get(props, "chartData.selectedCol")}</strong>
    </React.Fragment>
  );
  const body = <CreateReplacement {...props} />;
  return { title, body };
}

function buildError(props) {
  const title = (
    <React.Fragment>
      <i className="ico-cancel" />
      <strong>
          <Trans t={props.t} ns="popup">Error</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <Error {...props} />;
  return { title, body };
}

function buildInstances(props) {
  const title = (
    <React.Fragment>
      <i className="ico-apps" />
      <strong>
          <Trans t={props.t} ns="popup">{"Active D-Tale Instances"}</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <Instances {...props} />;
  return { title, body };
}

function buildCode(props) {
  const title = (
    <React.Fragment>
      <i className="ico-code" />
      <strong>
          <Trans t={props.t} ns="menu">Code Export</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <CodeExport {...props} />;
  return { title, body };
}

function buildVariance(props) {
  const title = (
    <React.Fragment>
      <i className="fas fa-chart-bar" />
        <Trans t={props.t} ns="popup">{" Variance Report for "}</Trans>
        {`"`}
      <strong>{_.get(props, "chartData.selectedCol")}</strong>
      {`"`}
    </React.Fragment>
  );
  const body = <Variance {...props} />;
  return { title, body };
}

function buildUpload(props) {
  const title = (
    <React.Fragment>
      <i className="ico-file-upload" />
      <strong>
          <Trans t={props.t} ns="menu">Load Data</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <Upload {...props} />;
  return { title, body };
}

function buildDuplicates(props) {
  const title = (
    <React.Fragment>
      <i className="fas fa-clone" />
      <strong>
          <Trans t={props.t} ns="menu">Duplicates</Trans>
      </strong>
    </React.Fragment>
  );
  const body = <Duplicates />;
  return { title, body };
}

const POPUP_MAP = {
  filter: buildFilter,
  "column-analysis": buildColumnAnalysis,
  correlations: buildCorrelations,
  pps: buildPps,
  build: buildCreateColumn,
  "type-conversion": buildTypeConversion,
  cleaners: buildCleaners,
  reshape: buildReshape,
  about: buildAbout,
  confirm: buildConfirm,
  "copy-range": buildCopyRange,
  "copy-column-range": buildCopyRange,
  "copy-row-range": buildCopyRange,
  range: buildRange,
  "xarray-dimensions": xarrayDimensions,
  "xarray-indexes": xarrayIndexes,
  rename: buildRename,
  replacement: buildReplacement,
  error: buildError,
  instances: buildInstances,
  code: buildCode,
  variance: buildVariance,
  upload: buildUpload,
  duplicates: buildDuplicates,
};

export function buildBodyAndTitle(props) {
  const builder = _.get(POPUP_MAP, _.get(props, "chartData.type"));
  if (builder) {
    return builder(props);
  }
  return { body: null, title: null };
}
