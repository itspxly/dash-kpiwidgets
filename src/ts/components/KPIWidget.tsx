import React from 'react';
import {DashComponentProps} from '../props';
import pretifyNumber from '../utils';
import classNames from 'classnames';


type Props = {
    name: string;
    units?: string;
    value: number;
    preValue?: number;
    target?: number;
    variance?: boolean;
    inverted?: boolean;
    enabled?: boolean;

    // Insert props
} & DashComponentProps;

/**
 * Component description
 */
const KPIWidget = (props: Props) => {
    const { 
        name: name,
        units: units = '', 
        value: value, 
        preValue: preValue,
        target: target,
        variance: variance,
        inverted: inverted,
        enabled: enabled = true,
        id: id 
    } = props;



    const containerClass = classNames({
        'kpi-widget-container': true,
        'green': preValue && value > preValue,
        'red': preValue && value < preValue,
        'inf': preValue ? value === preValue : enabled,
        'inverted': inverted,
        'compact': false
    });



    return (
        <div id={id} className={containerClass}>
            <div className="kpi-widget-caption">{name}{ units && (', ' + units) }</div>
            <div className="kpi-widget-value">{pretifyNumber(value)}</div>
            <div className="kpi-widget-value-diff green inverted">+1.5K%</div>
            <div className="kpi-widget-target-container">
                <div className="target">50.7B</div>
                <div className="target-var">506.5%</div>
            </div>
        </div>
    )
}

KPIWidget.defaultProps = {};

export default KPIWidget;
