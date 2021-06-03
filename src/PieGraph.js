import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const PieGraph = ({ events }) => {
  const [data, setData] = useState([]);
  
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setData(() => getData()); }, [events]);


  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter(({summary}) =>
      summary.includes(genre)).length;
      return { name: genre, value };
    });
    // returns data but filters out values less than one to avoid overlap on reCharts
    return data.filter((data) => data.value >= 1);
  }

  const COLORS = ['#b5302b', '#e77431', '#503431', '#55a393', '#4b6c57'];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            // innerRadius={40}
            outerRadius={80}
            // paddingAngle={4}
            fill="#8884d8"
            dataKey="value"
            stroke="white"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  
}

export default PieGraph;