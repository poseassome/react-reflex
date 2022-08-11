import React from 'react'
import Chart from "react-apexcharts";

function ApexCharts() {

  const chartData1 = {
    // chart 기본 설정
    options: {
      // char 이름, 배경
      chart: {
        id: "basic-bar",
        background : '#fff',
        toolbar : {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true, // zoom은 type: line에서 동작
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          },
        }
      },
      // x축 설정
      xaxis: {
        categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
      },
      // chart color
      colors: ["#519ca5"],
      // 데이터 내부 설정
      plotOptions: {
        bar: {
          horizontal: false,  // 가로로 보여줄지, 세로로 보여줄지
          dataLabels: {
            position: "top" // 개별 데이터값 표시 위치
          }
        },
      },
      // Legend (series 2개 이상이어야 보임)
      legend: {
        position: "right",
        markers: {
          width: 24,
          height: 24,
          strokeWidth: 0,
          strokeColor: "#000",
          fillColors: undefined,
          radius: 2,
          customHTML: undefined,
          onClick: undefined,
        }
      }
    },

    // 보여줄 데이터
    series: [
      {
        name: "수신",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 49, 60, 70, 91]
      },
    ],
  };



  const chartData2 = {
    options : {
      chart: {
        id: "basic-bar",
        background : '#fff',
        height: 350,
        type: 'line',
        toolbar : {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: true, // zoom은 type: line에서 동작
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          },
        },
        animations : {
          enabled : false,  // animation 사용여부
          easing: 'easeinout',
          speed: 500,
        }
      },
      colors: ['#310cf5', '#519ca5'],
      // graph 겉선 (line은 line 두께)
      stroke: {
        width: [0, 2]
      },
      // chart title
      title: {
        text: 'Traffic Sources'
      },
      dataLabels: {
        enabled: true,  // line graph 데이터값 표시
        enabledOnSeries: [1]
      },
      // labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
      xaxis: {
        categories : ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        tooltip: {
          enabled: false
        },
      },
      yaxis: [
        {
          title: {
            text: 'Website Blog',
          },
        }, 
        {
          opposite: true, // y축 표시방향 반대
          title: {
            text: 'Social Media'
          }
        }
      ],
      legend: {
        position: "right",
        markers: {
          width: 24,
          height: 24,
          strokeWidth: 0,
          strokeColor: "#000",
          fillColors: undefined,
          radius: 10,
          customHTML: undefined,
          onClick: undefined,
        }
      },
      tooltip : {
        x : {
          show: false
        },
      },
    },

    series : [
      {
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, 
      {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }
    ]
  }

  return (
    <div style={{display: 'flex'}}>
      <p style={{color: '#fff', fontSize: '20px', marginRight: '10px'}}>ApexChart</p>
      <Chart 
        options={chartData1.options}
        series={chartData1.series}
        type="line"
        width="700"
        style={{marginRight: '10px'}}
      />

      <Chart 
        options={chartData2.options}
        series={chartData2.series}
        type="line"
        width="700"
      />
    </div>
  )
}

export default ApexCharts