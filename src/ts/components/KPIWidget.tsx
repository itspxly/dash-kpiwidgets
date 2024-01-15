import React from 'react';
import {DashComponentProps} from '../props';

type Props = {
    // Insert props
} & DashComponentProps;

/**
 * Component description
 */
const KPIWidget = (props: Props) => {
    const { id } = props;
    return (
        <div id={id}>
            {/* Insert code */}
        </div>
    )
}

KPIWidget.defaultProps = {};

export default KPIWidget;
