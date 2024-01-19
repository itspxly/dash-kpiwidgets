from widgets import KPIWidget
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div([
    html.H1("Compact Test"),
    html.Div(style={'display': 'flex', 'flexFlow': 'row nowrap', 'justifyContent': 'center', 'gap': '1rem'}, children=[
        KPIWidget(value=120, units='$', preValue=100, name="Up Positive", mode='compact'),
        KPIWidget(value=-88808888885482, preValue=31654455623100, name="Down Negative", target=153564654454, mode='compact', targetDiffType='variance', units='USD'),
        KPIWidget(value=120, name="Inf, No Value", mode='compact', targetDiffType='performance', units='USD'),
        KPIWidget(value=120, preValue=119, name="Disabled", enabled=False, mode='compact'),
    ]),
    html.H1("Value Test"),
    html.Div(style={'display': 'flex', 'flexFlow': 'row nowrap', 'justifyContent': 'center', 'gap': '1rem'}, children=[
        KPIWidget(value=120, units='$', preValue=100, name="Up Positive", mode='compact'),
        KPIWidget(value=312310, preValue=3123100, name="Down Negative", target=1534, mode='compact', targetDiffType='variance', units='USD'),
        KPIWidget(value=120, name="Inf, No Value", mode='compact', targetDiffType='performance'),
        KPIWidget(value=120, preValue=119, name="Disabled", enabled=False, mode='compact'),
    ]),
    html.H1("Compact Test Inverted"),
    html.Div(style={'display': 'flex', 'flexFlow': 'row nowrap', 'justifyContent': 'center', 'gap': '1rem'}, children=[
        KPIWidget(value=120, units='$', preValue=100, name="Up Positive", mode='compact', inverted=True),
        KPIWidget(value=120, preValue=120.1, name="Down Negative", target=1534, mode='compact', inverted=True),
        KPIWidget(value=120, name="Inf, No Value", mode='compact', inverted=True),
        KPIWidget(value=120, preValue=119, name="Disabled", enabled=False, mode='compact', inverted=True),
    ]),
    html.H1("Color Test"),
    html.Div(style={'display': 'flex', 'flexFlow': 'row nowrap', 'justifyContent': 'center', 'gap': '2rem'}, children=[
        KPIWidget(value=120, units='$', preValue=100, name="Up Positive"),
        KPIWidget(value=120, preValue=120.1, name="Down Negative", target=1534),
        KPIWidget(value=120, name="Inf, No Value"),
        KPIWidget(value=120, preValue=119, name="Disabled", enabled=False),
    ]),
    html.H1("Inverted Test"),
    html.Div(style={'display': 'flex', 'flexFlow': 'row nowrap', 'justifyContent': 'center', 'gap': '2rem'}, children=[
        KPIWidget(value=120, preValue=100, name="Up Negative", inverted=True),
        KPIWidget(value=120, preValue=120.1, name="Down Positive", inverted=True),
        KPIWidget(value=120, name="Inf, No Value", inverted=True),
        KPIWidget(value=120, preValue=119, name="Disabled", enabled=False, inverted=True),
    ]),
    html.H1("Units Test"),
    html.Div(style={'display': 'flex', 'flexFlow': 'row nowrap', 'justifyContent': 'center', 'gap': '2rem'}, children=[ 
        KPIWidget(value=100, name="Gross Profit", units="USD", inverted=True, enabled = False),
        KPIWidget(value=888465482, name="No Diff", showDiff=False),
        KPIWidget(value=888465482, name="ND, NT", showDiff=False, showTarget=False),
        KPIWidget(value=888465482, name="ND, NTD", showDiff=False, showTargetDiff=False),
        KPIWidget(value=888465482, name="ND, NT, NTD", showDiff=False, showTargetDiff=False, showTarget=False),
        KPIWidget(value=888465482, name="NT, NTD", showTargetDiff=False, showTarget=False, preValue=120),
        KPIWidget(value=9876543210, name="Gross Profit", units="USD", inverted=True, preValue=564654658),
        KPIWidget(value=100, name="Gross Profit", units="USD", inverted=False, enabled = False, preValue=50),
        KPIWidget(id='zero_change', value=100, preValue=50, name="Zero Change"),
    ]),
    html.H1("Target Test"),
    html.Div(style={'display': 'flex', 'flexFlow': 'row nowrap', 'justifyContent': 'center', 'gap': '2rem'}, children=[
        KPIWidget(value=120, preValue=100, name="No Target"),
        KPIWidget(value=120, preValue=100, name="Target", target=150),
        KPIWidget(value=120, preValue=100, name="Target Based", target=150, baseline=100),
        KPIWidget(value=120, preValue=100, name="Target Var", target=150, targetDiffType='variance'),
        KPIWidget(value=120, preValue=100, name="Target Perf", target=150, targetDiffType='performance', value_min=100, value_max=180, showTarget=False),
        KPIWidget(value=120, preValue=100, name="Target Perf ERR", target=150, targetDiffType='performance'),
    ]),
    html.H1("Units Test"),
], style={'display': 'flex', 'flexFlow': 'column nowrap', 'justifyContent': 'center'})


if __name__ == '__main__':
    app.run_server(debug=True, port=8051)
