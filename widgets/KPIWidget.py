# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class KPIWidget(Component):
    """A KPIWidget component.
Component description

Keyword arguments:

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- enabled (boolean; optional)

- inverted (boolean; optional)

- name (string; required)

- preValue (number; optional)

- target (number; optional)

- units (string; optional)

- value (number; required)

- variance (boolean; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'widgets'
    _type = 'KPIWidget'
    @_explicitize_args
    def __init__(self, name=Component.REQUIRED, units=Component.UNDEFINED, value=Component.REQUIRED, preValue=Component.UNDEFINED, target=Component.UNDEFINED, variance=Component.UNDEFINED, inverted=Component.UNDEFINED, enabled=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'enabled', 'inverted', 'name', 'preValue', 'target', 'units', 'value', 'variance']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'enabled', 'inverted', 'name', 'preValue', 'target', 'units', 'value', 'variance']
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
