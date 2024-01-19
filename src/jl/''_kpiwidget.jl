# AUTO GENERATED FILE - DO NOT EDIT

export ''_kpiwidget

"""
    ''_kpiwidget(;kwargs...)

A KPIWidget component.
KPIWidget component

@param {WidgetProps.name} name - KPI name
@param {WidgetProps.units} units - Units, used to measure KPI, e.g. 'USD', 'hrs.', etc.
@param {WidgetProps.value} value - Current KPI value
@param {WidgetProps.mode} mode - Widget mode (default, compact)
@param {WidgetProps.preValue} preValue - Previous KPI value, to compare with
@param {WidgetProps.baseline} baseline - Baseline (starting value, to measure progress from base -> target) value
@param {WidgetProps.min} value_min - Minimum value of KPI (used to calculate Performace type of target difference)
@param {WidgetProps.max} value_max - Maximum value of KPI (used to calculate Performace type of target difference)
@param {WidgetProps.targetDiffType} targetDiffType - Type of scoring the difference between current and target value
@param {WidgetProps.target} target - Target value
@param {WidgetProps.inverted} inverted - Should we invert what's godd and what's bad (going up -> bas, going down -> good)
@param {WidgetProps.enabled} enabled - Is KPI Wisget enabled
@param {WidgetProps.showDiff} showDiff - Should we show difference between current and previous value
@param {WidgetProps.showTarget} showTarget - Should we show target value
@param {WidgetProps.showTargetDiff} showTargetDiff - Should we show difference between current and target value
@param {WidgetProps.valuePrecision} valuePrecision - Precision of value
@param {WidgetProps.diffPrecision} diffPrecision - Precision of difference
@param {WidgetProps.targetPrecision} targetPrecision - Precision of target
@param {WidgetProps.targetDiffPrecision} targetDiffPrecision - Precision of target difference
@param {WidgetProps.diffMethod} diffMethod - Method to calculate difference between current and previous value
@param {WidgetProps.targetDiffMethod} targetDiffMethod - Method to calculate difference between current and target value
@param {WidgetProps.id} id - HTML id attribute
Keyword arguments:
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `baseline` (Real; optional)
- `diffMethod` (optional): . diffMethod has the following type: lists containing elements .
Those elements have the following types:

- `diffPrecision` (Real; optional)
- `enabled` (Bool; optional)
- `inverted` (Bool; optional)
- `mode` (a value equal to: 'default', 'compact'; optional)
- `name` (String; required)
- `preValue` (Real; optional)
- `showDiff` (Bool; optional)
- `showTarget` (Bool; optional)
- `showTargetDiff` (Bool; optional)
- `target` (Real; optional)
- `targetDiffMethod` (optional): . targetDiffMethod has the following type: lists containing elements .
Those elements have the following types:

- `targetDiffPrecision` (Real; optional)
- `targetDiffType` (a value equal to: 'default', 'progress', 'variance', 'performance', 'user'; optional)
- `targetPrecision` (Real; optional)
- `units` (String; optional)
- `value` (Real; required)
- `valuePrecision` (Real; optional)
- `value_max` (Real; optional)
- `value_min` (Real; optional)
"""
function ''_kpiwidget(; kwargs...)
        available_props = Symbol[:id, :baseline, :diffMethod, :diffPrecision, :enabled, :inverted, :mode, :name, :preValue, :showDiff, :showTarget, :showTargetDiff, :target, :targetDiffMethod, :targetDiffPrecision, :targetDiffType, :targetPrecision, :units, :value, :valuePrecision, :value_max, :value_min]
        wild_props = Symbol[]
        return Component("''_kpiwidget", "KPIWidget", "widgets", available_props, wild_props; kwargs...)
end

