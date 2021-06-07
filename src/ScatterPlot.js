import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class ScatterPlot extends PureComponent {
 
  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer
        height={400}
      >
        <ScatterChart
          margin={{
            top: 20, right: 20, bottom: 20, left: -20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={data} fill="#55a393" />
        </ScatterChart>
  
 
      </ResponsiveContainer>
    );
  }
}

export default ScatterPlot;