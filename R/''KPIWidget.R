# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''KPIWidget <- function(id=NULL, enabled=NULL, inverted=NULL, name=NULL, preValue=NULL, target=NULL, units=NULL, value=NULL, variance=NULL) {
    
    props <- list(id=id, enabled=enabled, inverted=inverted, name=name, preValue=preValue, target=target, units=units, value=value, variance=variance)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'KPIWidget',
        namespace = 'widgets',
        propNames = c('id', 'enabled', 'inverted', 'name', 'preValue', 'target', 'units', 'value', 'variance'),
        package = 'widgets'
        )

    structure(component, class = c('dash_component', 'list'))
}
