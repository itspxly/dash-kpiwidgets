# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class KPIWidget(Component):
    """A KPIWidget component.
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

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- baseline (number; optional)

- diffMethod (dict; optional)

    `diffMethod` is a dict with keys:


- diffPrecision (number; optional)

- enabled (boolean; optional)

- inverted (boolean; optional)

- mode (a value equal to: 'default', 'compact'; optional)

- name (string; required)

- preValue (number; optional)

- showDiff (boolean; optional)

- showTarget (boolean; optional)

- showTargetDiff (boolean; optional)

- target (number; optional)

- targetDiffMethod (dict; optional)

    `targetDiffMethod` is a dict with keys:


- targetDiffPrecision (number; optional)

- targetDiffType (a value equal to: 'default', 'progress', 'variance', 'performance', 'user'; optional)

- targetPrecision (number; optional)

- units (string; optional)

- value (number; required)

- valuePrecision (number; optional)

- value_max (number; optional)

- value_min (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'widgets'
    _type = 'KPIWidget'
    @_explicitize_args
    def __init__(self, name=Component.REQUIRED, units=Component.UNDEFINED, mode=Component.UNDEFINED, value=Component.REQUIRED, preValue=Component.UNDEFINED, baseline=Component.UNDEFINED, value_min=Component.UNDEFINED, value_max=Component.UNDEFINED, targetDiffType=Component.UNDEFINED, target=Component.UNDEFINED, inverted=Component.UNDEFINED, enabled=Component.UNDEFINED, showDiff=Component.UNDEFINED, showTarget=Component.UNDEFINED, showTargetDiff=Component.UNDEFINED, valuePrecision=Component.UNDEFINED, diffPrecision=Component.UNDEFINED, targetPrecision=Component.UNDEFINED, targetDiffPrecision=Component.UNDEFINED, diffMethod=Component.UNDEFINED, targetDiffMethod=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'baseline', 'diffMethod', 'diffPrecision', 'enabled', 'inverted', 'mode', 'name', 'preValue', 'showDiff', 'showTarget', 'showTargetDiff', 'target', 'targetDiffMethod', 'targetDiffPrecision', 'targetDiffType', 'targetPrecision', 'units', 'value', 'valuePrecision', 'value_max', 'value_min']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'baseline', 'diffMethod', 'diffPrecision', 'enabled', 'inverted', 'mode', 'name', 'preValue', 'showDiff', 'showTarget', 'showTargetDiff', 'target', 'targetDiffMethod', 'targetDiffPrecision', 'targetDiffType', 'targetPrecision', 'units', 'value', 'valuePrecision', 'value_max', 'value_min']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['name', 'value']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(KPIWidget, self).__init__(**args)
