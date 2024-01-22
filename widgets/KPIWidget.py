# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class KPIWidget(Component):
    """A KPIWidget component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- baseline (number; optional):
    Baseline (starting value, to measure progress from base -> target)
    value @,default,0.

- diffPrecision (number; optional):
    Precision of difference from previous KPI value (number of digits
    after decimal point) @,default,1.

- diffType (a value equal to: 'default', 'user'; optional):
    Type of scoring the difference between current and previous value
    @,default,'default' @,see,EDifferenceType, ,*
    @,requires,userDiffValue.

- disable_n_clicks (boolean; optional):
    When True, this will disable the n_clicks prop.   Use this to
    remove event listeners that may interfere with screen readers.

- enabled (boolean; optional):
    Is KPI Wisget enabled @,default,True.

- inverted (boolean; optional):
    Should we invert what's godd and what's bad (going up -> bas,
    going down -> good) @,default,False.

- mode (a value equal to: 'default', 'compact'; optional):
    Widget mode (default, compact) @,default,'default'.

- n_clicks (number; optional):
    An integer that represents the number of times that this element
    has been clicked on. @,default,0 @,param,n_clicks, ,- Number of
    times the component has been clicked on.

- n_clicks_timestamp (number; optional):
    An integer that represents the time (in ms since 1970) at which
    n_clicks changed.   This can be used to tell which button was
    changed most recently. @,default,-1 - means never clicked.

- name (string; required):
    KPI name (required).

- preValue (number; optional):
    Previous KPI value, to compare with (value from the previous
    reporting period). Used to calculate the difference and define the
    COLOR of the KPI @,default,undefined.

- showDiff (boolean; optional):
    Should we show difference between current and previous value
    @,default,True.

- showTarget (boolean; optional):
    Should we show target value @,default,True.

- showTargetDiff (boolean; optional):
    Should we show difference between current and target value
    @,default,True.

- target (number; optional):
    Target value @,default,undefined @,requires,targetDiffType
    @,requires,targetDiffMethod @,see,ETargetDifferenceType, ,*
    @,see,targetDiffMethod.

- targetDiffPrecision (number; optional):
    Precision of target difference (number of digits after decimal
    point) @,default,1.

- targetDiffType (a value equal to: 'default', 'user', 'progress', 'variance', 'performance'; optional):
    Type of scoring the difference between current and target value
    @,default,'default' @,see,ETargetDifferenceType, ,*
    @,requires,target.

- targetPrecision (number; optional):
    Precision of target (number of digits after decimal point)
    @,default,1.

- units (string; optional):
    Units, used to measure KPI, e.g. 'USD', 'hrs.', etc. @,default,''.

- userDiffValue (number; optional):
    set the number if you want to use custom difference method on
    server side @,requires,diffType='user'.

- userTargetDiffValue (number; optional):
    set the number if you want to use custom difference method on
    server side @,requires,targetDiffType='user'.

- value (number; required):
    Current KPI value (in the current reporting period) (required).

- valueMax (number; optional):
    Maximum value of KPI (used to calculate Performace type of target
    difference) @,default,0.

- valueMin (number; optional):
    Minimum value of KPI (used to calculate Performace type of target
    difference) @,default,0.

- valuePrecision (number; optional):
    Precision of value (number of digits after decimal point)
    @,default,1."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'widgets'
    _type = 'KPIWidget'
    @_explicitize_args
    def __init__(self, children=None, name=Component.REQUIRED, units=Component.UNDEFINED, mode=Component.UNDEFINED, value=Component.REQUIRED, preValue=Component.UNDEFINED, baseline=Component.UNDEFINED, valueMin=Component.UNDEFINED, valueMax=Component.UNDEFINED, userDiffValue=Component.UNDEFINED, diffType=Component.UNDEFINED, targetDiffType=Component.UNDEFINED, target=Component.UNDEFINED, userTargetDiffValue=Component.UNDEFINED, inverted=Component.UNDEFINED, enabled=Component.UNDEFINED, showDiff=Component.UNDEFINED, showTarget=Component.UNDEFINED, showTargetDiff=Component.UNDEFINED, valuePrecision=Component.UNDEFINED, diffPrecision=Component.UNDEFINED, targetPrecision=Component.UNDEFINED, targetDiffPrecision=Component.UNDEFINED, n_clicks=Component.UNDEFINED, n_clicks_timestamp=Component.UNDEFINED, disable_n_clicks=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'baseline', 'diffPrecision', 'diffType', 'disable_n_clicks', 'enabled', 'inverted', 'mode', 'n_clicks', 'n_clicks_timestamp', 'name', 'preValue', 'showDiff', 'showTarget', 'showTargetDiff', 'target', 'targetDiffPrecision', 'targetDiffType', 'targetPrecision', 'units', 'userDiffValue', 'userTargetDiffValue', 'value', 'valueMax', 'valueMin', 'valuePrecision']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'baseline', 'diffPrecision', 'diffType', 'disable_n_clicks', 'enabled', 'inverted', 'mode', 'n_clicks', 'n_clicks_timestamp', 'name', 'preValue', 'showDiff', 'showTarget', 'showTargetDiff', 'target', 'targetDiffPrecision', 'targetDiffType', 'targetPrecision', 'units', 'userDiffValue', 'userTargetDiffValue', 'value', 'valueMax', 'valueMin', 'valuePrecision']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['name', 'value']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(KPIWidget, self).__init__(children=children, **args)
