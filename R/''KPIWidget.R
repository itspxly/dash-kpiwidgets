# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''KPIWidget <- function(id=NULL) {
    
    props <- list(id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'KPIWidget',
        namespace = 'widgets',
        propNames = c('id'),
        package = 'widgets'
        )

    structure(component, class = c('dash_component', 'list'))
}
