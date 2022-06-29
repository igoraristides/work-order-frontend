import { Box, Typography } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import { MdShowChart } from "react-icons/md";
import { GetForecast } from "../../api/api";
import CircularProgress from "@mui/material/CircularProgress";

const Prediction: React.FC<any> = () => {

  const [series, setSeries] = React.useState<any>();

  const init = async () => {
    try {
      var response: any = (await GetForecast({})).data;

      var config: any = {

        series: [response.average_forecast],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
                }
              },

              dataLabels: {
                show: true,
                name: {
                  offsetY: -10,
                  show: true,
                  color: '#888',
                  fontSize: '17px'
                },
                value: {
                  formatter: function (val: number) {
                    return "R$ " + (Math.round(val * 100) / 100).toFixed(2);
                  },
                  color: '#111',
                  fontSize: '36px',
                  show: true,
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#ABE5A1'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 1000]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ["Receitas"]
        }

      }

      setSeries(config);

    } catch (error) { }
  };

  React.useEffect(() => {
    init();
  }, []);





  return (

    <Box display="flex" flexDirection="column" width="100%" flexWrap="wrap" padding="30px">
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: 'center' }} >
          <Typography variant="h5" p={4} align="center" color='#036ba2'>
            Previsão de receitas para os próximos 6 meses
          </Typography>
          <MdShowChart style={{ width: '25px', height: '25px', color: '#036ba2' }} />
        </Box>

        <Box style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center" }}>
          {
            series ?
              (<Chart options={series.options} series={series.series} type="radialBar" height={450} width={450} />)
              : <CircularProgress size={300} />
          }
        </Box>
      </Box>
    </Box>
  )

};

export default Prediction;
