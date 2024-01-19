# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''KPIWidget <- function(id=NULL, baseline=NULL, diffMethod=NULL, diffPrecision=NULL, enabled=NULL, inverted=NULL, mode=NULL, name=NULL, preValue=NULL, showDiff=NULL, showTarget=NULL, showTargetDiff=NULL, target=NULL, targetDiffMethod=NULL, targetDiffPrecision=NULL, targetDiffType=NULL, targetPrecision=NULL, units=NULL, value=NULL, valuePrecision=NULL, value_max=NULL, value_min=NULL) {
    
    props <- list(id=id, baseline=baseline, diffMethod=diffMethod, diffPrecision=diffPrecision, enabled=enabled, inverted=inverted, mode=mode, name=name, preValue=preValue, showDiff=showDiff, showTarget=showTarget, showTargetDiff=showTargetDiff, target=target, targetDiffMethod=targetDiffMethod, targetDiffPrecision=targetDiffPrecision, targetDiffType=targetDiffType, targetPrecision=targetPrecision, units=units, value=value, valuePrecision=valuePrecision, value_max=value_max, value_min=value_min)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'KPIWidget',
        namespace = 'widgets',
        propNames = c('id', 'baseline', 'diffMethod', 'diffPrecision', 'enabled', 'inverted', 'mode', 'name', 'preValue', 'showDiff', 'showTarget', 'showTargetDiff', 'target', 'targetDiffMethod', 'targetDiffPrecision', 'targetDiffType', 'targetPrecision', 'units', 'value', 'valuePrecision', 'value_max', 'value_min'),
        package = 'widgets'
        )

    structure(component, class = c('dash_component', 'list'))
}
