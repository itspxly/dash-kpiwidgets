import {DashComponentProps} from '../../props';

/**
 * Type for method used to define difference between current and previous value
 * @param new_val - current value
 * @param old_val - previous value
 * @returns difference between current and previous value
 */
export type FDifferenceMethod = (new_val: number, old_val: number) => number;

/**
 * Type for method used to define difference between current and target value
 * @param new_val - current value
 * @param target_val - target value
 * @param base_val - baseline value (starting value, to measure progress from base -> target)
 * @param min_value - minimum value (used to calculate Performace type of target difference)
 * @param max_value - maximum value (used to calculate Performace type of target difference)
 * @param user_value - set the number if you want to use custom difference method on server side
 * @returns difference between current and target value
 */
export type FTargetDifferenceMethod = (
    new_val: number, 
    target_val: number, 
    base_val?:number, 
    min_value?:number, 
    max_value?:number, 
    user_value?: number
    ) => number;

/**
 * Type of scoring the difference between current and target value
 * 'progress' - (default) difference between current and target value, divided by difference between target and baseline value
 * 'variance' - difference between current and target value, divided by target value
 * 'performance' - difference between current and minimum value, divided by difference between maximum and minimum value
 * 'default' - (same as 'progress') difference between current and baseline value, divided by difference between target and baseline value
 * 'user' - use custom difference method on server side and pass the result as userTargetDiffValue
 */
export type ETargetDifferenceType = 'progress' | 'variance' | "performance" | "default" | "user";

/**
 * Type of scoring the difference between current and previous value
 * 'default' - (default) difference between current and previous value, divided by previous value
 * 'user' - use custom difference method on server side and pass the result as userDiffValue
 */
export type EDifferenceType = 'default' | 'user';

/**
 * Widget mode (default, compact)
 * 'default' - (default) default mode
 * 'compact' - compact mode
 */
export type EWidgetMode = 'default' | 'compact';

export type KPIWidgetProps = {
    /**
     * KPI name (required)
     */
    name: string;
    /**
     * Units, used to measure KPI, e.g. 'USD', 'hrs.', etc.
     * @default ''
     */
    units?: string;
    /**
     * Widget mode (default, compact)
     * @default 'default'
     */
    mode?: EWidgetMode; 
    /**
     * Current KPI value (in the current reporting period) (required)
     */
    value: number;
    /**
     * Previous KPI value, to compare with (value from the previous reporting period). Used to calculate the difference and define the COLOR of the KPI
     * @default undefined
     */
    preValue?: number;
    /**
     * Baseline (starting value, to measure progress from base -> target) value
     * @default 0
     */
    baseline?: number;
    /**
     * Minimum value of KPI (used to calculate Performace type of target difference)
     * @default 0
     */
    valueMin?: number;
    /**
     * Maximum value of KPI (used to calculate Performace type of target difference)
     * @default 0
     */
    valueMax?: number;

    /**
     * set the number if you want to use custom difference method on server side
     * @requires diffType='user'
     */
    userDiffValue?: number;

    /**
     * Type of scoring the difference between current and previous value
     * @default 'default'
     * @see EDifferenceType
     * @requires userDiffValue
     */
    diffType?: EDifferenceType;
    
    /**
     * Type of scoring the difference between current and target value
     * @default 'default'
     * @see ETargetDifferenceType
     * @requires target
     */
    targetDiffType?: ETargetDifferenceType;
    /**
     * Target value
     * @default undefined
     * @requires targetDiffType
     * @requires targetDiffMethod
     * @see ETargetDifferenceType
     * @see targetDiffMethod
     */
    target?: number;

    /**
     * set the number if you want to use custom difference method on server side
     * @requires targetDiffType='user'
     */
    userTargetDiffValue?: number;
    
    /**
     * Should we invert what's godd and what's bad (going up -> bas, going down -> good)
     * @default false
     */
    inverted?: boolean; 
    /**
     * Is KPI Wisget enabled
     * @default true
     */
    enabled?: boolean; 
    
    /**
     * Should we show difference between current and previous value
     * @default true
     */
    showDiff?: boolean;
    /**
     * Should we show target value
     * @default true
     */
    showTarget?: boolean;
    /**
     * Should we show difference between current and target value
     * @default true
     */
    showTargetDiff?: boolean; 
    
    /**
     * Precision of value (number of digits after decimal point)
     * @default 1
     */
    valuePrecision?: number;
    /**
     * Precision of difference from previous KPI value (number of digits after decimal point)
     * @default 1
     */
    diffPrecision?: number;
    /**
     * Precision of target (number of digits after decimal point)
     * @default 1
     */
    targetPrecision?: number;
    /**
     * Precision of target difference (number of digits after decimal point)
     * @default 1
     */
    targetDiffPrecision?: number;

    /**
     * An integer that represents the number of times that this element has been clicked on.
     * @default 0
     * 
     * 
     * @param {number} n_clicks - Number of times the component has been clicked on.
     */
    n_clicks?: number;
    
    /**
     * An integer that represents the time (in ms since 1970) at which n_clicks changed. 
     * This can be used to tell which button was changed most recently.
     * @default -1 - means never clicked
     */
    n_clicks_timestamp?: number;

    /**
     * When True, this will disable the n_clicks prop. 
     * Use this to remove event listeners that may interfere with screen readers.
     */
    disable_n_clicks?: boolean;

    // Insert props
} & DashComponentProps;