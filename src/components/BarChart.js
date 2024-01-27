import { Bar } from "react-chartjs-2";
export const BarChart = () => {

    const chartData = {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Users Gained',
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.6)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: [120, 150, 200, 180, 250], // Replace with your actual data
          },
        ],
      };
      const chartOptions = {
        plugins: {
          title: {
            display: true,
            text: 'Users Gained between 2016-2020',
          },
          legend: {
            display: false,
          },
        },
      };


  return (
    <>
    <h4>Users Gained between 2016-2020</h4>
    <Bar data={chartData} options={chartOptions} />
    
    </>
  );
};

export default BarChart;