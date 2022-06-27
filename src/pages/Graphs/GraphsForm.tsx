import { Box } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import * as React from "react";
import Select from "../../components/Select/Select";
import FirstGrapth from "./Forms/FirstGraph";
import SecondGrapth from "./Forms/SecondGraph";
import ThirdGrapth from "./Forms/ThirdGraph";
import { Graphs } from "./Graphs.types";


const GraphForm: React.FC<any> = () => {

    const FORM_ID = 'Graphs'

    const [loading, setLoading] = React.useState<boolean>(false);

    const [serie, setSerie] = React.useState<any>([]);

    const [serie2, setSerie2] = React.useState<any>([]);

    const [serie3, setSerie3] = React.useState<any>([]);

    const [data, setData] = React.useState<any>();

    const [graph, setGraph] = React.useState<string>("");

    console.log(serie, serie2, serie3)

    const graphData: Graphs[] = [
        {
            id: "1",
            type: "Total de ordem de serviço por período ",
        },
        {
            id: "2",
            type: "Serviços mais comuns por marca e modelo de aparelho",
        },
        {
            id: "3",
            type: "Receitas de serviços realizados por período "
        }];

    React.useEffect(() => {
        GetTopFiveDevices();
    }, [serie2]);

    React.useEffect(() => {
        GetTotalOrderByInterval();
    }, [serie]);

    React.useEffect(() => {
        setSerie([]);
        setSerie2([]);
        setSerie3([]);
        setData(undefined);
    }, [graph]);



    const handleGraphs = () => {
        return graphData.map((graph) => ({
            value: graph.id,
            key: graph.type,
        }));
    };

    const Render = () => {

        switch (graph) {

            case "1":
                return (
                    <div style={{ width: '100%' }}>
                        <FirstGrapth setData={setSerie} />

                        {serie.length > 0 && (
                            <ReactEcharts
                                style={{
                                    height: "400px",
                                    width: "100%",
                                    marginBottom: "50px",
                                }}
                                option={data}
                            />
                        )
                        }
                    </div>
                );
            case "2":

                return (
                    <div style={{ width: '100%' }}>
                        <SecondGrapth setData={setSerie2} />

                        {serie2.length > 0 &&
                            <ReactEcharts
                                style={{
                                    height: "400px",
                                    width: "100%",
                                    marginBottom: "50px",
                                }}
                                option={data}
                            />
                        }

                    </div>
                );

            case "3":

                return (
                    <div style={{ width: '100%' }}>
                        <ThirdGrapth setData={setSerie3} />

                        {/* <ReactEcharts
                            style={{
                                height: "400px",
                                width: "100%",
                                marginBottom: "50px",
                            }}
                            option={serie3}
                        /> */}
                    </div>
                );

        }
    }

    const GetTotalOrderByInterval = () => {

        let out = {
            labels: serie.map((item: any) => new Date(item.day).toLocaleDateString("pt-BR")),
            series: serie.map((item: any) => item.count),
        }

        const dataForChart = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    label: {
                        backgroundColor: "#6a7985",
                    },
                },
            },
            dataZoom: [
                {
                    type: "slider",
                    height: 8,
                    bottom: 20,
                    borderColor: "transparent",
                    backgroundColor: "#e2e2e2",
                    handleIcon:
                        "M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z", // jshint ignore:line
                    handleSize: 20,
                    handleStyle: {
                        shadowBlur: 6,
                        shadowOffsetX: 1,
                        shadowOffsetY: 2,
                        shadowColor: "#aaa",
                    },
                },
                {
                    type: "inside",
                },
            ],
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true,
            },
            xAxis: {
                type: "category",
                data: out.labels,
                show: true,

            },
            yAxis: {
                type: "value",
                axisLabel: {
                    color: "gray",
                    inside: true,
                },
            },
            series: [
                {
                    type: "bar",
                    data: out.series,
                    symbol: "none",
                    color: "#f7d917",
                }
            ],
        };
        setData(dataForChart);
    }

    const GetTopFiveDevices = () => {
        let out = {
            labels: serie2.map((item: any) => item.service_description),
            series: serie2.map((item: any) => item.service_count),
        }

        const dataForChart = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    label: {
                        backgroundColor: "#6a7985",
                    },
                },
            },
            legend: {
                data: out.labels
            },
            dataZoom: [
                {
                    type: "slider",
                    height: 8,
                    bottom: 20,
                    borderColor: "transparent",
                    backgroundColor: "#e2e2e2",
                    handleIcon:
                        "M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z", // jshint ignore:line
                    handleSize: 20,
                    handleStyle: {
                        shadowBlur: 6,
                        shadowOffsetX: 1,
                        shadowOffsetY: 2,
                        shadowColor: "#aaa",
                    },
                },
                {
                    type: "inside",
                },
            ],
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true,
            },
            xAxis: {
                type: "category",
                data: out.labels,
                show: true,

            },
            yAxis: {
                type: "value",
                axisLabel: {
                    color: "gray",
                    inside: true,
                },
            },
            series: [
                {
                    type: "bar",
                    data: out.series,
                    symbol: "none",
                    color: "#f7d917",
                }
            ],
        };
        setData(dataForChart);
    }



    return (
        <Box display="flex" flexDirection="row" width="100%" flexWrap="wrap">
            <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div
                    style={{ display: "flex", flexDirection: "column", width: "100%" }}
                >
                    <Select
                        items={handleGraphs()}
                        setItemName={setGraph}
                        itemName={graph}
                        placeholder="Selecione o gráfico"
                        label="Graficos"
                        sx={{
                            root: {
                                margin: "0px",
                            }
                        }}
                    />
                </div>
            </Box>
            {graph != "0" && Render()}
        </Box>
    );
};

export default GraphForm;
