# AUTO GENERATED FILE - DO NOT EDIT

export ''_kpiwidget

"""
    ''_kpiwidget(;kwargs...)
    ''_kpiwidget(children::Any;kwargs...)
    ''_kpiwidget(children_maker::Function;kwargs...)


A KPIWidget component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `baseline` (Real; optional): Baseline (starting value, to measure progress from base -> target) value
@,default,0
- `diffPrecision` (Real; optional): Precision of difference from previous KPI value (number of digits after decimal point)
@,default,1
- `diffType` (a value equal to: 'default', 'user'; optional): Type of scoring the difference between current and previous value
@,default,'default'
@,see,EDifferenceType, ,*
@,requires,userDiffValue
- `disable_n_clicks` (Bool; optional): When True, this will disable the n_clicks prop. 
Use this to remove event listeners that may interfere with screen readers.
- `enabled` (Bool; optional): Is KPI Wisget enabled
@,default,true
- `inverted` (Bool; optional): Should we invert what's godd and what's bad (going up -> bas, going down -> good)
@,default,false
- `mode` (a value equal to: 'default', 'compact'; optional): Widget mode (default, compact)
@,default,'default'
- `n_clicks` (Real; optional): An integer that represents the number of times that this element has been clicked on.
@,default,0
@,param,n_clicks, ,- Number of times the component has been clicked on.
- `n_clicks_timestamp` (Real; optional): An integer that represents the time (in ms since 1970) at which n_clicks changed. 
This can be used to tell which button was changed most recently.
@,default,-1 - means never clicked
- `name` (String; required): KPI name (required)
- `preValue` (Real; optional): Previous KPI value, to compare with (value from the previous reporting period). Used to calculate the difference and define the COLOR of the KPI
@,default,undefined
- `showDiff` (Bool; optional): Should we show difference between current and previous value
@,default,true
- `showTarget` (Bool; optional): Should we show target value
@,default,true
- `showTargetDiff` (Bool; optional): Should we show difference between current and target value
@,default,true
- `target` (Real; optional): Target value
@,default,undefined
@,requires,targetDiffType
@,requires,targetDiffMethod
@,see,ETargetDifferenceType, ,*
@,see,targetDiffMethod
- `targetDiffPrecision` (Real; optional): Precision of target difference (number of digits after decimal point)
@,default,1
- `targetDiffType` (a value equal to: 'default', 'user', 'progress', 'variance', 'performance'; optional): Type of scoring the difference between current and target value
@,default,'default'
@,see,ETargetDifferenceType, ,*
@,requires,target
- `targetPrecision` (Real; optional): Precision of target (number of digits after decimal point)
@,default,1
- `units` (String; optional): Units, used to measure KPI, e.g. 'USD', 'hrs.', etc.
@,default,''
- `userDiffValue` (Real; optional): set the number if you want to use custom difference method on server side
@,requires,diffType='user'
- `userTargetDiffValue` (Real; optional): set the number if you want to use custom difference method on server side
@,requires,targetDiffType='user'
- `value` (Real; required): Current KPI value (in the current reporting period) (required)
- `valueMax` (Real; optional): Maximum value of KPI (used to calculate Performace type of target difference)
@,default,0
- `valueMin` (Real; optional): Minimum value of KPI (used to calculate Performace type of target difference)
@,default,0
- `valuePrecision` (Real; optional): Precision of value (number of digits after decimal point)
@,default,1
"""
function ''_kpiwidget(; kwargs...)
        available_props = Symbol[:children, :id, :baseline, :diffPrecision, :diffType, :disable_n_clicks, :enabled, :inverted, :mode, :n_clicks, :n_clicks_timestamp, :name, :preValue, :showDiff, :showTarget, :showTargetDiff, :target, :targetDiffPrecision, :targetDiffType, :targetPrecision, :units, :userDiffValue, :userTargetDiffValue, :value, :valueMax, :valueMin, :valuePrecision]
        wild_props = Symbol[]
        return Component("''_kpiwidget", "KPIWidget", "widgets", available_props, wild_props; kwargs...)
end

''_kpiwidget(children::Any; kwargs...) = ''_kpiwidget(;kwargs..., children = children)
''_kpiwidget(children_maker::Function; kwargs...) = ''_kpiwidget(children_maker(); kwargs...)

