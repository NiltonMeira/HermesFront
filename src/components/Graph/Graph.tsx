import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Fila 1',
    Vagas: 8,
    amt: 10,
  },
  {
    name: 'Fila 2',
    Vagas: 2,
    amt: 10,
  },
  {
    name: 'Fila 3',
    Vagas: 6,
    amt: 10,
  },
  {
    name: 'Fila 4',
    Vagas: 4,
    amt: 10,
  },
  {
    name: 'Fila 5',
    Vagas: 1,
    amt: 10,
  },
  {
    name: 'Fila 6',
    Vagas: 7,
    amt: 10,
  },
  {
    name: 'Fila 7',
    Vagas: 3,
    amt: 10,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-has-background-32n2fm';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Vagas" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
