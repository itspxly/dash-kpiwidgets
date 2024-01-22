# Dash KPI Widgets

## KPI Widget React Functional Component
#### Used to show the **KPI value (with or without units) and difference between current and previous value**.

- **Color** (green, red, grey) of the KPI depends on the difference between current and previous value.
- **Color treatment** can be inverted (going up -> bad, going down -> good)

#### Shows 
- **Value**, 
- **Difference from Previuos Value in %**, 
- **Target Value**, 
- **Difference from Target Value in %**

#### Can Calculate Difference from Target Value in 4 ways (using **preValue** paremeter):
- _'progress'_ - (default) difference between current and target value, divided by difference between target and baseline value
- _'variance'_ - difference between current and target value, divided by target value
- _'performance'_ - difference between current and minimum value, divided by difference between maximum and minimum value
- _'user'_ - use custom difference method on server side and pass the result as **userTargetDiffValue**

#### Can Calculate Difference from Previous Value in 2 ways:
- _'default'_ - (default) difference between current and previous value, divided by previous value
- _'user'_ - use custom difference method on server side and pass the result as **userDiffValue**

#### Can be in 2 modes:
- _'default'_ - (default) default mode - shows all values and takes large space (used to be presented on the dashboard)
- _'compact'_ - compact mode - shows all elements, but in a more space efficient way (used to be presented in as a part of some other screens)

#### Sections of widget:
- _Caption_ - shows KPI name and units
- _Value_ - shows KPI value and difference from previous value in %
- _Target_ - shows Target value and difference from Target value in %

#### Sections can be disabled:
- _showDiff_ - show difference from previous value
- _showTarget_ - show target value
- _showTargetDiff_ - show difference from target value

#### Other Options
- The whole widget can be **disabled (greyed out)**
- User can define the **precision level** for each value (number of digits after decimal point)
- Supports **Dash's event handling** (n_clicks, n_clicks_timestamp, disable_n_clicks)


## Install

Use Python Module provided in the widgets folder, but copied the folder with the module into your Dash Sources folder,
Or use the .whl file located in the dist folder.

```shell
pip install widgets-1.0.0-py3-none-any.whl
```

## Development
### Getting Started

1. Create a new python environment:
   ```shell
   python -m venv venv
   . venv/bin/activate
   ```
   _Note: venv\Scripts\activate for windows_

2. Install python dependencies:
   ```shell
   pip install -r requirements.txt
   ```
3. Install npm packages:
   1. Optional: use [nvm](https://github.com/nvm-sh/nvm) to manage node version:
      ```shell
      nvm install
      nvm use
      ```
   2. Install:
      ```shell
      npm install
      ```
4. Build:
   ```shell
   npm run build
   ```

### Component Code

See sources `src/ts/components/KPIWidget/` for detailed explanation of each paramenters. This section will be updated.

### Styling

Current CSS styles used to visualize the widget are build separatly and located at `assets/themes/nautical/css` folder. Source SCSS files are also provided for better customization.

### Feedback is appreciated

Feel free to leave some comments and suggestions that will make the component better.