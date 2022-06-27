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

    const [dates, setDates] = React.useState<any>([]);

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


    const [graph, setGraph] = React.useState<string>("");

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
                    <FirstGrapth />
                );
            case "2":

                return (
                    <SecondGrapth />
                );

            case "3":

                return (
                    <ThirdGrapth />
                );

        }
    }

    const data = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                label: {
                    backgroundColor: "#6a7985",
                },
            },
        },
        legend: {
            data: [dates[1]],
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
            data: dates,
            show: true,
            axisLabel: {
                color: "gray",
                fontWeight: "bold",
                rotate: 90,
                interval: 6,
            },
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
                name: dates[1],
                type: "line",
                smooth: true,
                data: serie,
                symbol: "none",
                color: "#f7d917",
            }
        ],
    };

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

            {/* <ReactEcharts
        style={{
          height: "400px",
          width: "70%",
          marginBottom: "50px",
        }}
        option={data}
      /> */}
        </Box>
    );
};

export default GraphForm;
