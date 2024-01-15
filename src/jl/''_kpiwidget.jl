# AUTO GENERATED FILE - DO NOT EDIT

export ''_kpiwidget

"""
    ''_kpiwidget(;kwargs...)

A KPIWidget component.
Component description
Keyword arguments:
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `enabled` (Bool; optional)
- `inverted` (Bool; optional)
- `name` (String; required)
- `preValue` (Real; optional)
- `target` (Real; optional)
- `units` (String; optional)
- `value` (Real; required)
- `variance` (Bool; optional)
"""
function ''_kpiwidget(; kwargs...)
        available_props = Symbol[:id, :enabled, :inverted, :name, :preValue, :target, :units, :value, :variance]
        wild_props = Symbol[]
        return Component("''_kpiwidget", "KPIWidget", "widgets", available_props, wild_props; kwargs...)
end

