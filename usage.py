from widgets import KPIWidget
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div([
    KPIWidget(id='component', value=-888465482, name="Gross Profit"),
    KPIWidget(id='component', value=9876543210, name="Gross Profit", units="USD", inverted=True),
    KPIWidget(id='component', value=100, name="Gross Profit", units="USD", inverted=True, enabled = False),
], style={'display': 'flex', 'flex-direction': 'row', 'justify-content': 'space-around'})


if __name__ == '__main__':
    app.run_server(debug=True, port=8051)
