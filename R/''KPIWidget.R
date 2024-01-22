# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''KPIWidget <- function(children=NULL, id=NULL, baseline=NULL, diffPrecision=NULL, diffType=NULL, disable_n_clicks=NULL, enabled=NULL, inverted=NULL, mode=NULL, n_clicks=NULL, n_clicks_timestamp=NULL, name=NULL, preValue=NULL, showDiff=NULL, showTarget=NULL, showTargetDiff=NULL, target=NULL, targetDiffPrecision=NULL, targetDiffType=NULL, targetPrecision=NULL, units=NULL, userDiffValue=NULL, userTargetDiffValue=NULL, value=NULL, valueMax=NULL, valueMin=NULL, valuePrecision=NULL) {
    
    props <- list(children=children, id=id, baseline=baseline, diffPrecision=diffPrecision, diffType=diffType, disable_n_clicks=disable_n_clicks, enabled=enabled, inverted=inverted, mode=mode, n_clicks=n_clicks, n_clicks_timestamp=n_clicks_timestamp, name=name, preValue=preValue, showDiff=showDiff, showTarget=showTarget, showTargetDiff=showTargetDiff, target=target, targetDiffPrecision=targetDiffPrecision, targetDiffType=targetDiffType, targetPrecision=targetPrecision, units=units, userDiffValue=userDiffValue, userTargetDiffValue=userTargetDiffValue, value=value, valueMax=valueMax, valueMin=valueMin, valuePrecision=valuePrecision)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'KPIWidget',
        namespace = 'widgets',
        propNames = c('children', 'id', 'baseline', 'diffPrecision', 'diffType', 'disable_n_clicks', 'enabled', 'inverted', 'mode', 'n_clicks', 'n_clicks_timestamp', 'name', 'preValue', 'showDiff', 'showTarget', 'showTargetDiff', 'target', 'targetDiffPrecision', 'targetDiffType', 'targetPrecision', 'units', 'userDiffValue', 'userTargetDiffValue', 'value', 'valueMax', 'valueMin', 'valuePrecision'),
        package = 'widgets'
        )

    structure(component, class = c('dash_component', 'list'))
}
