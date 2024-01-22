% Auto-generated: do not edit by hand
\name{''KPIWidget}

\alias{''KPIWidget}

\title{KPIWidget component}

\description{

}

\usage{
''KPIWidget(children=NULL, id=NULL, baseline=NULL, diffPrecision=NULL,
diffType=NULL, disable_n_clicks=NULL, enabled=NULL,
inverted=NULL, mode=NULL, n_clicks=NULL,
n_clicks_timestamp=NULL, name=NULL, preValue=NULL,
showDiff=NULL, showTarget=NULL, showTargetDiff=NULL,
target=NULL, targetDiffPrecision=NULL, targetDiffType=NULL,
targetPrecision=NULL, units=NULL, userDiffValue=NULL,
userTargetDiffValue=NULL, value=NULL, valueMax=NULL,
valueMin=NULL, valuePrecision=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. }

\item{id}{Character. Unique ID to identify this component in Dash callbacks.}

\item{baseline}{Numeric. Baseline (starting value, to measure progress from base -> target) value
@,default,0}

\item{diffPrecision}{Numeric. Precision of difference from previous KPI value (number of digits after decimal point)
@,default,1}

\item{diffType}{A value equal to: 'default', 'user'. Type of scoring the difference between current and previous value
@,default,'default'
@,see,EDifferenceType, ,*
@,requires,userDiffValue}

\item{disable_n_clicks}{Logical. When True, this will disable the n_clicks prop. 
Use this to remove event listeners that may interfere with screen readers.}

\item{enabled}{Logical. Is KPI Wisget enabled
@,default,true}

\item{inverted}{Logical. Should we invert what's godd and what's bad (going up -> bas, going down -> good)
@,default,false}

\item{mode}{A value equal to: 'default', 'compact'. Widget mode (default, compact)
@,default,'default'}

\item{n_clicks}{Numeric. An integer that represents the number of times that this element has been clicked on.
@,default,0
@,param,n_clicks, ,- Number of times the component has been clicked on.}

\item{n_clicks_timestamp}{Numeric. An integer that represents the time (in ms since 1970) at which n_clicks changed. 
This can be used to tell which button was changed most recently.
@,default,-1 - means never clicked}

\item{name}{Character. KPI name (required)}

\item{preValue}{Numeric. Previous KPI value, to compare with (value from the previous reporting period). Used to calculate the difference and define the COLOR of the KPI
@,default,undefined}

\item{showDiff}{Logical. Should we show difference between current and previous value
@,default,true}

\item{showTarget}{Logical. Should we show target value
@,default,true}

\item{showTargetDiff}{Logical. Should we show difference between current and target value
@,default,true}

\item{target}{Numeric. Target value
@,default,undefined
@,requires,targetDiffType
@,requires,targetDiffMethod
@,see,ETargetDifferenceType, ,*
@,see,targetDiffMethod}

\item{targetDiffPrecision}{Numeric. Precision of target difference (number of digits after decimal point)
@,default,1}

\item{targetDiffType}{A value equal to: 'default', 'user', 'progress', 'variance', 'performance'. Type of scoring the difference between current and target value
@,default,'default'
@,see,ETargetDifferenceType, ,*
@,requires,target}

\item{targetPrecision}{Numeric. Precision of target (number of digits after decimal point)
@,default,1}

\item{units}{Character. Units, used to measure KPI, e.g. 'USD', 'hrs.', etc.
@,default,''}

\item{userDiffValue}{Numeric. set the number if you want to use custom difference method on server side
@,requires,diffType='user'}

\item{userTargetDiffValue}{Numeric. set the number if you want to use custom difference method on server side
@,requires,targetDiffType='user'}

\item{value}{Numeric. Current KPI value (in the current reporting period) (required)}

\item{valueMax}{Numeric. Maximum value of KPI (used to calculate Performace type of target difference)
@,default,0}

\item{valueMin}{Numeric. Minimum value of KPI (used to calculate Performace type of target difference)
@,default,0}

\item{valuePrecision}{Numeric. Precision of value (number of digits after decimal point)
@,default,1}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

