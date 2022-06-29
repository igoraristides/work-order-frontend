import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import { GetReports } from "../../api/api";
import { keyValueSelect } from "../../components/HookForm/Select";
import Select from "../../components/Select/Select";

import { MdOutlineQueryStats } from "react-icons/md";
import { BsCalendarWeek } from "react-icons/bs";
import { number } from "yup/lib/locale";

export interface DataChart {
    series: number[];
    options: any;
}

export interface IReport {
    count: number,
    revenue: number,
    average_revenue: number,
    average_attendances: number,
    average_time_to_complete: number
}

const Statistic: React.FC<any> = () => {

    const [dataChart1, setDataChart1] = React.useState<any>();
    const [dataChart2, setDataChart2] = React.useState<any>();
    const [dataChart3, setDataChart3] = React.useState<any>();
    const [isEnabled, setIsEnabled] = React.useState(false);
    const [selectOptions, setSelectOptions] = React.useState<keyValueSelect[]>([
        { key: "Última Semana", value: "1" },
        { key: "Último mês", value: "2" },
        { key: "Último Ano", value: "3" },
    ]);

    const [reports, setReports] = React.useState<string>("");

    const init = async () => {
        try {
            const slcOption = onSelectOptions(reports);
            const data = (await GetReports(slcOption)).data;

            setDataChart1(CreateData(data.average_revenue, "Média Receitas"));
            setDataChart2(CreateData(data.average_attendances, "Média atendimentos"));
            setDataChart3(CreateData(data.average_time_to_complete, "Média duração serviço"));

            setIsEnabled(true);
            //const data2 = (await GetForecast()).data;
        } catch (error) { }
    };


    //switch on selectOptions function

    const onSelectOptions = (value: string) => {
        switch (value) {
            case "1":
                return {
                    "startDate": new Date(new Date().setDate(new Date().getDate() - 7)).getTime(),
                    "endDate": new Date().getTime()
                };
            case "2":
                return {
                    "startDate": new Date(new Date().setMonth(new Date().getMonth() - 1)).getTime(),
                    "endDate": new Date().getTime()
                };
            case "3":
                return {
                    "startDate": new Date(new Date().setFullYear(new Date().getFullYear() - 1)).getTime(),
                    "endDate": new Date().getTime()
                }
            default:
                return "";
        }
    }


    const CreateData = (data: any, title: any): DataChart => {

        var config: any = {

            series: [data],
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
                                    return (Math.round(val * 100) / 100).toFixed(2);
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
                        stops: [0, 5000]
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: [title],
            },


        }
        var dataOut: DataChart = {
            series: config.series,
            options: config.options
        }
        return dataOut;
    }


    const getNames = (value: string) => {
        switch (value) {
            case "1":
                return "última semana";
            case "2":
                return "último mês";
            case "3":
                return "último ano";
            default:
                return "";
        }
    }



    return (
        <Box display="flex" flexDirection="column" width="100%" flexWrap="wrap" padding="30px">

            {!isEnabled ? (
                <>

                    <Box
                        sx={{
                            marginLeft: "30px",
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            position: "relative",
                            width: '100%',
                            alignItems: 'center',
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            background: '#bde0fe',
                            borderRadius: "10px",
                            padding: '30px',
                            width: '540px',
                            marginTop: '30px',
                            alignItems: 'center',
                        }}>
                            <div style={{ width: "100%", display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <MdOutlineQueryStats style={{ width: '100%', height: '50px', color: '#036ba2', display: 'flex', alignItems: 'center' }} />
                                <Typography variant="h5" p={4} align="center" color='#036ba2'>
                                    Geração de relatórios
                                </Typography>
                                <Select
                                    items={selectOptions}
                                    setItemName={setReports}
                                    itemName={reports}
                                    label="Período de Tempo"
                                />

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                        init();
                                    }}

                                >
                                    Gerar estatísticas
                                </Button>
                            </div>

                        </div>
                    </Box>

                </>
            ) : (
                <Box sx={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: 'center' }} >
                        <Typography variant="h5" p={4} align="center" color='#036ba2'>
                            Estatísticas {getNames(reports)}
                        </Typography>
                        <BsCalendarWeek style={{ width: '25px', height: '25px', color: '#036ba2' }} />
                    </Box>

                    <Box style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center" }}>
                        <Chart options={dataChart1.options} series={dataChart1.series} type="radialBar" height={350} />
                        <Chart options={dataChart2.options} series={dataChart2.series} type="radialBar" height={350} />
                        <Chart options={dataChart3.options} series={dataChart3.series} type="radialBar" height={350} />
                    </Box>
                </Box>
            )}

        </Box>

    );
};

export default Statistic;
