import widgets
import dash

app = dash.Dash(__name__)

app.layout = widgets.KPIWidget(id='component')


if __name__ == '__main__':
    app.run_server(debug=True, port=8051)
