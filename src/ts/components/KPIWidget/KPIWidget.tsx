import React from 'react';

import {KPIWidgetProps, FDifferenceMethod, FTargetDifferenceMethod} from './KPIWidgetTypes';

import pretifyNumber from '../../utils';
import classNames from 'classnames';



/**
 * KPI Widget React Functional Component
 * @param props - props for React Functional Component
 * @returns React Functional Component
 * @see WidgetProps
 * 
 * Used to show the KPI value (with or without units) and difference between current and previous value
 * Color (green, red, grey) of the KPI depends on the difference between current and previous value
 * Color treatment can be inverted (going up -> bad, going down -> good)
 * 
 * Shows Value, Difference from Previuos Value in %, Target Value, Difference from Target Value in %
 * 
 * Can Calculate Difference from Target Value in 4 ways (using **preValue** paremeter):
 * - 'progress' - (default) difference between current and target value, divided by difference between target and baseline value
 * - 'variance' - difference between current and target value, divided by target value
 * - 'performance' - difference between current and minimum value, divided by difference between maximum and minimum value
 * - 'user' - use custom difference method on server side and pass the result as **userTargetDiffValue**
 * 
 * Can Calculate Difference from Previous Value in 2 ways:
 * - 'default' - (default) difference between current and previous value, divided by previous value
 * - 'user' - use custom difference method on server side and pass the result as **userDiffValue**
 * 
 * Can be in 2 modes:
 * - 'default' - (default) default mode - shows all values and takes large space (used to be presented on the dashboard)
 * - 'compact' - compact mode - shows all elements, but in a more space efficient way (used to be presented in as a part of some other screens)
 *
 * Sections of widget:
 * - **Caption** - shows KPI name and units
 * - **Value** - shows KPI value and difference from previous value in %
 * - **Target** - shows Target value and difference from Target value in %
 * 
 * Sections can be disabled:
 * - **showDiff** - show difference from previous value
 * - **showTarget** - show target value
 * - **showTargetDiff** - show difference from target value
 * 
 * The whole widget can be disabled (greyed out)
 * 
 * User can define the precision level for each value (number of digits after decimal point)
 * 
 * Supports Dash's event handling (n_clicks, n_clicks_timestamp, disable_n_clicks)
 */
const KPIWidget: React.FC<KPIWidgetProps> = (props: KPIWidgetProps) => {
    const { 
        name: name,
        units: units = '', 
        value: value, 
        mode: mode = 'default',
        preValue: preValue,
        baseline: baseline = 0,
        valueMin: value_min = 0,
        valueMax: value_max = 0,
        userDiffValue: user_diff_value = 0,
        diffType: diff_type = 'default',
        target: target,
        userTargetDiffValue: user_target_diff_value = 0,
        inverted: inverted = false,
        showDiff: showDiff = true,
        showTarget: showTarget = true,
        showTargetDiff: showTargetDiff = true,
        valuePrecision: valuePrecision = 1,
        diffPrecision: diffPrecision = 1,
        targetPrecision: targetPrecision = 1,
        targetDiffPrecision: targetDiffPrecision = 1,
        targetDiffType: targetDiffType = 'default',
        enabled: enabled = true,
        n_clicks_timestamp: n_clicks_timestamp = -1,
        disable_n_clicks: disable_n_clicks = false,
        id: id 
    } = props;


    const [n_clicks, set_n_clicks] = React.useState(props.n_clicks || 0);


    /**
     * Method used to calculate difference between current and previous value
     * @param new_val 
     * @param old_val 
     * @returns difference between current and previous value in %
     */
    const diffMethod: FDifferenceMethod = (new_val: number, old_val: number) => {
        return ((new_val - old_val) / old_val) * 100.0;
    }
    
    /**
     * Difference between current and previous value calculated based on the mode provided
     * Is userDiffValue if diff_type == 'user'
     * 
     * Else:
     *    * Is NaN if previous value is not provided
     *    * Is calculated value (diffMethod) if previous value is provided
     * 
     */
    let diff:number = diff_type == 'user' ? user_diff_value : (preValue ? diffMethod(value, preValue) : Number.NaN);

    /**
     * Method used to calculate difference between current and target value
     */
    let _targetDiffMethod: FTargetDifferenceMethod = null;

    /**
     * Define method used to calculate difference between current and target value based on the mode provided
     */
    switch (targetDiffType) {
        case 'variance':
            _targetDiffMethod = (new_val: number, target_val: number, base_val?:number, min_value?:number, max_value?:number, user_value?:number) => {
                return ((new_val - target_val) / target_val) * 100.0;
            }
            break;
        case 'performance':
            _targetDiffMethod = (new_val: number, target_val: number, base_val?:number, min_value?:number, max_value?:number, user_value?:number) => {
                return ((new_val - min_value) / (max_value - min_value)) * 100.0;
            }
            break;
        case 'user':
            _targetDiffMethod = (new_val: number, target_val: number, base_val?:number, min_value?:number, max_value?:number, user_value?:number) => {
                return Number(user_value);
            };
            break;
        case 'default':
        case 'progress':
        default:
            _targetDiffMethod = (new_val: number, target_val: number, base_val?:number, min_value?:number, max_value?:number, user_value?:number) => {
                return ((new_val - base_val) / (target_val - base_val)) * 100.0;
            }
            break;
    }

    /**
     * Difference between current and target value calculated based on the mode provided
     */
    const targetDiff = target ? _targetDiffMethod(value, target, baseline, value_min, value_max, user_diff_value) : Number.NaN;

    /**
     * Define a CSS Class for the whole widget container
     */
    const containerClass = classNames({
        'kpi-widget-container': true,
        'green': preValue && enabled && value > preValue,
        'red': preValue && enabled && value < preValue,
        'inf': preValue ? value === preValue : enabled,
        'inverted': inverted,
        'compact': mode == 'compact',
        'disabled': !enabled
    });

    /**
     * Define a CSS Class for the difference between current and previous value
     */
    const valueDiffClass = classNames({
        'kpi-widget-value-diff': true,
        'green': preValue && value > preValue,
        'red': preValue && value < preValue,
        'inf': preValue ? value === preValue : true,
        'inverted': inverted,
        'disabled': !enabled,
        'compact': mode == 'compact',
    });

    /**
     * Define a CSS Class for the difference between current and target value
     */
    const targetDiffClass = classNames({
        'target-diff': targetDiffType == 'progress' || targetDiffType == 'default' || targetDiffType == 'user' || !targetDiffType,
        'target-var': targetDiffType == 'variance',
        'target-perf': targetDiffType == 'performance',
    });

    /**
     * Define a CSS Class for the value of the widget
     */
    const valueClass = classNames({
        'kpi-widget-value': true,
        'green': preValue && value > preValue,
        'red': preValue && value < preValue,
        'inf': preValue ? value === preValue : true,
        'inverted': inverted,
        'disabled': !enabled,
        'compact': mode == 'compact',
    });

    /**
     * Event Handler for Dash Clicks n_clicks
     * Done to be compliant with Dash's event handling
     * @param e 
     */
    const clickHandler: React.MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();

        if (!disable_n_clicks) {
            const ts: number = Date.now();
            set_n_clicks(n_clicks + 1);

            props.setProps({n_clicks: n_clicks + 1, n_clicks_timestamp: n_clicks_timestamp});
        }
    }

    // TODO: add other HTML related tags to the widget to increase usability

    /**
     * Default Widget rendering JSX code
     */
    const default_widget = (
        <div id={id} className={containerClass} onClick={clickHandler}>
            <div className="kpi-widget-caption-container">
                {units && <div className="kpi-widget-caption-units">{units}</div>}
                <div className="kpi-widget-caption-title">{name}</div>
            </div>
            <div className='kpi-widget-value-container'>
                <div className="kpi-widget-value">{pretifyNumber(value, valuePrecision)}</div>
                {showDiff && (
                    <div className={valueDiffClass}>
                        {!Number.isNaN(diff) ? ((diff > 0 ? '+' : '') + pretifyNumber(diff, diffPrecision) + '%') : 'n/a'}
                    </div>
                )}
            </div>
            { (showTarget || showTargetDiff) && (
                <div className="kpi-widget-target-container">
                    {showTarget && (
                        <div className="target">
                            {(target !== undefined) && !Number.isNaN(target) ? (pretifyNumber(target, targetPrecision)) : '---'}
                        </div>
                    )}
                    {showTargetDiff && (
                        <div className={targetDiffClass}>
                            {(targetDiff !== undefined) && !Number.isNaN(targetDiff) ? (pretifyNumber(targetDiff, targetDiffPrecision)) + '%' : '---'}
                        </div>
                    )}
                </div>
            )}
        </div>
    );


    /**
     * Compact Widget rendering JSX code
     */
    const compact_widget = (
        <div id={id} className={containerClass} onClick={clickHandler}>
            <div className="kpi-widget-caption-container compact">
                {units && <div className="kpi-widget-caption-units compact">{units}</div>}
                <div className="kpi-widget-caption-title compact">{name}</div>
            </div>
            <div className="kpi-widget-compact-container">
                <div className="kpi-widget-compact-container-value">
                    <div className={valueClass}>{pretifyNumber(value, valuePrecision)}</div>
                </div>
                { (showTarget || showTargetDiff || showDiff) && (
                    <div className="kpi-widget-target-container compact">
                        {showDiff && (
                            <div className={valueDiffClass}>
                                 {!Number.isNaN(diff) ? ((diff > 0 ? '+' : '') + pretifyNumber(diff, diffPrecision) + '%') : 'n/a'}
                            </div>
                        )}
                        {showTarget && (
                            <div className="target">
                                 {(target !== undefined) && !Number.isNaN(target) ? (pretifyNumber(target, targetPrecision)) : '---'}
                            </div>
                        )}
                         {showTargetDiff && (
                            <div className={targetDiffClass}>
                                {(targetDiff !== undefined) && !Number.isNaN(targetDiff) ? (pretifyNumber(targetDiff, targetDiffPrecision)) + '%' : '---'}
                            </div>
                         )}
                    </div>
                )}
            </div>
        </div>
    );

    /**
     * Return JSX code for the widget based on the mode
     */
    return (mode == 'compact' ? compact_widget : default_widget);
}

KPIWidget.defaultProps = {};

export default KPIWidget;
