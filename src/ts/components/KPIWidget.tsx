import React from 'react';
import {DashComponentProps} from '../props';
import pretifyNumber from '../utils';
import classNames from 'classnames';

type FDifferenceMethod = (new_val: number, old_val: number) => number;
type FTargetDifferenceMethod = (new_val: number, target_val: number, base_val?:number, min_value?:number, max_value?:number) => number;
type ETargetDifferenceType = 'progress' | 'variance' | "performance" | "default" | "user";
type EWidgetMode = 'default' | 'compact';

type WidgetProps = {
    name: string; // KPI name
    units?: string; // Units, used to measure KPI, e.g. 'USD', 'hrs.', etc.

    mode?: EWidgetMode; // Widget mode (default, compact)
    
    value: number; // Current KPI value
    preValue?: number; // Previous KPI value, to compare with
    baseline?: number; // Baseline (starting value, to measure progress from base -> target) value
    value_min?: number; // Minimum value of KPI (used to calculate Performace type of target difference)
    value_max?: number; // Maximum value of KPI (used to calculate Performace type of target difference)
    
    targetDiffType?: ETargetDifferenceType; // Type of scoring the difference between current and target value
    target?: number; // Target value
    
    inverted?: boolean; // Should we invert what's godd and what's bad (going up -> bas, going down -> good)
    enabled?: boolean;  // Is KPI Wisget enabled
    
    showDiff?: boolean; // Should we show difference between current and previous value
    showTarget?: boolean; // Should we show target value
    showTargetDiff?: boolean; // Should we show difference between current and target value
    
    valuePrecision?: number; // Precision of value
    diffPrecision?: number; // Precision of difference
    targetPrecision?: number; // Precision of target
    targetDiffPrecision?: number; // Precision of target difference
    
    diffMethod?: FDifferenceMethod; // Method to calculate difference between current and previous value
    targetDiffMethod?: FTargetDifferenceMethod; // Method to calculate difference between current and target value

    // Insert props
} & DashComponentProps;

/**
 * KPIWidget component
 * 
 * @param {WidgetProps.name} name - KPI name
 * @param {WidgetProps.units} units - Units, used to measure KPI, e.g. 'USD', 'hrs.', etc.
 * @param {WidgetProps.value} value - Current KPI value
 * @param {WidgetProps.mode} mode - Widget mode (default, compact)
 * @param {WidgetProps.preValue} preValue - Previous KPI value, to compare with
 * @param {WidgetProps.baseline} baseline - Baseline (starting value, to measure progress from base -> target) value
 * @param {WidgetProps.min} value_min - Minimum value of KPI (used to calculate Performace type of target difference)
 * @param {WidgetProps.max} value_max - Maximum value of KPI (used to calculate Performace type of target difference)
 * @param {WidgetProps.targetDiffType} targetDiffType - Type of scoring the difference between current and target value
 * @param {WidgetProps.target} target - Target value
 * @param {WidgetProps.inverted} inverted - Should we invert what's godd and what's bad (going up -> bas, going down -> good)
 * @param {WidgetProps.enabled} enabled - Is KPI Wisget enabled
 * @param {WidgetProps.showDiff} showDiff - Should we show difference between current and previous value
 * @param {WidgetProps.showTarget} showTarget - Should we show target value
 * @param {WidgetProps.showTargetDiff} showTargetDiff - Should we show difference between current and target value
 * @param {WidgetProps.valuePrecision} valuePrecision - Precision of value
 * @param {WidgetProps.diffPrecision} diffPrecision - Precision of difference
 * @param {WidgetProps.targetPrecision} targetPrecision - Precision of target
 * @param {WidgetProps.targetDiffPrecision} targetDiffPrecision - Precision of target difference
 * @param {WidgetProps.diffMethod} diffMethod - Method to calculate difference between current and previous value
 * @param {WidgetProps.targetDiffMethod} targetDiffMethod - Method to calculate difference between current and target value

 * @param {WidgetProps.id} id - HTML id attribute
 */
const KPIWidget = (props: WidgetProps) => {
    const { 
        name: name,
        units: units = '', 
        value: value, 
        mode: mode = 'default',
        preValue: preValue,
        baseline: baseline = 0,
        value_min: value_min,
        value_max: value_max,
        target: target,
        inverted: inverted = false,
        showDiff: showDiff = true,
        showTarget: showTarget = true,
        showTargetDiff: showTargetDiff = true,
        valuePrecision: valuePrecision = 1,
        diffPrecision: diffPrecision = 1,
        targetPrecision: targetPrecision = 1,
        targetDiffPrecision: targetDiffPrecision = 1,
        diffMethod: diffMethod = (new_val: number, old_val: number) => {
            return ((new_val - old_val) / old_val) * 100.0;
        },
        targetDiffMethod: targetDiffMethod = (new_val: number, target_val: number, base_val?:number, min_value?:number, max_value?:number) => {
            return ((new_val - base_val) / (target_val - base_val)) * 100.0;
        },
        targetDiffType: targetDiffType = 'default',
        enabled: enabled = true,
        id: id 
    } = props;

    // // TODO: add Logic for calculating difference between current and previous value
    // // TODO: add Logic for calculating difference between current and target value
    // // TODO: add Logic for calculating variance between current and target value    
    // // TODO: add Logic for customization of shown/hidden elements

    // TODO: add Logic for compact form of KPIWidget
    // // TODO: add Logic for disabled form of KPIWidget

    const diff = preValue ? diffMethod(value, preValue) : Number.NaN;
    let _targetDiffMethod = null;

    switch (targetDiffType) {
        case 'variance':
            _targetDiffMethod = (new_val: number, target_val: number, base_val?:number, min_value?:number, max_value?:number) => {
                return ((new_val - target_val) / target_val) * 100.0;
            }
            break;
        case 'performance':
            _targetDiffMethod = (new_val: number, target_val: number, base_val?:number, min_value?:number, max_value?:number) => {
                return ((new_val - min_value) / (max_value - min_value)) * 100.0;
            }
            break;
        case 'user':
            _targetDiffMethod = targetDiffMethod;
            break;
        case 'default':
        case 'progress':
        default:
            _targetDiffMethod = (new_val: number, target_val: number, base_val?:number, min_value?:number, max_value?:number) => {
                return ((new_val - base_val) / (target_val - base_val)) * 100.0;
            }
            break;
    }

    const targetDiff = target ? _targetDiffMethod(value, target, baseline, value_min, value_max) : Number.NaN;

    const containerClass = classNames({
        'kpi-widget-container': true,
        'green': preValue && enabled && value > preValue,
        'red': preValue && enabled && value < preValue,
        'inf': preValue ? value === preValue : enabled,
        'inverted': inverted,
        'compact': mode == 'compact',
        'disabled': !enabled
    });

    const valueDiffClass = classNames({
        'kpi-widget-value-diff': true,
        'green': preValue && value > preValue,
        'red': preValue && value < preValue,
        'inf': preValue ? value === preValue : true,
        'inverted': inverted,
        'disabled': !enabled,
        'compact': mode == 'compact',
    });

    const targetDiffClass = classNames({
        'target-diff': targetDiffType == 'progress' || targetDiffType == 'default' || targetDiffType == 'user' || !targetDiffType,
        'target-var': targetDiffType == 'variance',
        'target-perf': targetDiffType == 'performance',
    });

    const valueClass = classNames({
        'kpi-widget-value': true,
        'green': preValue && value > preValue,
        'red': preValue && value < preValue,
        'inf': preValue ? value === preValue : true,
        'inverted': inverted,
        'disabled': !enabled,
        'compact': mode == 'compact',
    });

    //let diff = diff_method(value, preValue || 0) * 100;

    const default_widget = (
        <div id={id} className={containerClass}>
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

    const compact_widget = (
        <div id={id} className={containerClass}>
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

    return (mode == 'compact' ? compact_widget : default_widget);
}

KPIWidget.defaultProps = {};

export default KPIWidget;
