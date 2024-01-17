% Auto-generated: do not edit by hand
\name{''KPIWidget}

\alias{''KPIWidget}

\title{KPIWidget component}

\description{
KPIWidget component  @param {WidgetProps.name} name - KPI name @param {WidgetProps.units} units - Units, used to measure KPI, e.g. 'USD', 'hrs.', etc. @param {WidgetProps.value} value - Current KPI value @param {WidgetProps.mode} mode - Widget mode (default, compact) @param {WidgetProps.preValue} preValue - Previous KPI value, to compare with @param {WidgetProps.baseline} baseline - Baseline (starting value, to measure progress from base -> target) value @param {WidgetProps.min} value_min - Minimum value of KPI (used to calculate Performace type of target difference) @param {WidgetProps.max} value_max - Maximum value of KPI (used to calculate Performace type of target difference) @param {WidgetProps.targetDiffType} targetDiffType - Type of scoring the difference between current and target value @param {WidgetProps.target} target - Target value @param {WidgetProps.inverted} inverted - Should we invert what's godd and what's bad (going up -> bas, going down -> good) @param {WidgetProps.enabled} enabled - Is KPI Wisget enabled @param {WidgetProps.showDiff} showDiff - Should we show difference between current and previous value @param {WidgetProps.showTarget} showTarget - Should we show target value @param {WidgetProps.showTargetDiff} showTargetDiff - Should we show difference between current and target value @param {WidgetProps.valuePrecision} valuePrecision - Precision of value @param {WidgetProps.diffPrecision} diffPrecision - Precision of difference @param {WidgetProps.targetPrecision} targetPrecision - Precision of target @param {WidgetProps.targetDiffPrecision} targetDiffPrecision - Precision of target difference @param {WidgetProps.diffMethod} diffMethod - Method to calculate difference between current and previous value @param {WidgetProps.targetDiffMethod} targetDiffMethod - Method to calculate difference between current and target value @param {WidgetProps.id} id - HTML id attribute
}

\usage{
''KPIWidget(id=NULL, baseline=NULL, diffMethod=NULL, diffPrecision=NULL,
enabled=NULL, inverted=NULL, mode=NULL, name=NULL,
preValue=NULL, showDiff=NULL, showTarget=NULL,
showTargetDiff=NULL, target=NULL, targetDiffMethod=NULL,
targetDiffPrecision=NULL, targetDiffType=NULL,
targetPrecision=NULL, units=NULL, value=NULL,
valuePrecision=NULL, value_max=NULL, value_min=NULL)
}

\arguments{
\item{id}{Character. Unique ID to identify this component in Dash callbacks.}

\item{baseline}{Numeric. }

\item{diffMethod}{Lists containing elements .
those elements have the following types:
. }

\item{diffPrecision}{Numeric. }

\item{enabled}{Logical. }

\item{inverted}{Logical. }

\item{mode}{A value equal to: 'default', 'compact'. }

\item{name}{Character. }

\item{preValue}{Numeric. }

\item{showDiff}{Logical. }

\item{showTarget}{Logical. }

\item{showTargetDiff}{Logical. }

\item{target}{Numeric. }

\item{targetDiffMethod}{Lists containing elements .
those elements have the following types:
. }

\item{targetDiffPrecision}{Numeric. }

\item{targetDiffType}{A value equal to: 'default', 'progress', 'variance', 'performance', 'user'. }

\item{targetPrecision}{Numeric. }

\item{units}{Character. }

\item{value}{Numeric. }

\item{valuePrecision}{Numeric. }

\item{value_max}{Numeric. }

\item{value_min}{Numeric. }
}

\value{named list of JSON elements corresponding to React.js properties and their values}

