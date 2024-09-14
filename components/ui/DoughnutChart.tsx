'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets:[
            {
                label:'Banks',
                data:[1250,2500,2750],
                backgroundColor:['#9447b6','#8f87','#black']
            }
        ],
        labels:['HDFC','ICICI','SBI' ]
    }

  return <Doughnut data={data}
    options={{
        cutout: '70%',
        plugins:{
            legend:{
                display:false,
               
            }
        }
       
    }}
  />
}

export default DoughnutChart