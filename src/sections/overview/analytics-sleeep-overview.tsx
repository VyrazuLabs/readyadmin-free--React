import type { CardProps } from '@mui/material';
import type { ChartOptions } from 'src/components/chart';

import React from 'react';

import { Card, useTheme, CardHeader } from '@mui/material';

import { Chart, useChart, ChartLegends } from 'src/components/chart';

type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    labels: string[];
    series: number[];
    options?: ChartOptions;
  };
};

const AnalyticsSleepOverview = ({ title, subheader, chart, ...other }: Props) => {
  const theme = useTheme();

  const chartColors = chart.colors ?? [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.info.main,
    theme.palette.success.main,
  ];

  const chartOptions = useChart({
    colors: chartColors,
    labels: chart.labels,
    stroke: { width: 2 },
    fill: { opacity: 0.8 },
    xaxis: {
      categories: chart.labels,
      labels: {
        style: { colors: [...Array(6)].map(() => theme.palette.grey[500]), fontWeight: 700 },
      },
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 10,
          size: '35%',
          background: 'transparent',
          image: undefined,
        },
        track: {
          margin: 4,
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '12px',
            fontFamily: undefined,
            fontWeight: 600,
            color: undefined,
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: '16px',
            fontWeight: 800,
            offsetY: -5,
          },
          total: {
            fontSize: '12px',
          },
        },
      },
    },
    ...chart.options,
  });

  //   const chartOptions = {
  //     colors: chartColors,
  //     series: [76, 67, 61, 90],
  //     options: {
  //       chart: {
  //         height: 390,
  //         type: 'radialBar',
  //       },
  //       plotOptions: {
  //         radialBar: {
  //           offsetY: 0,
  //           startAngle: 0,
  //           endAngle: 270,
  //           hollow: {
  //             margin: 5,
  //             size: '30%',
  //             background: 'transparent',
  //             image: undefined,
  //           },
  //           dataLabels: {
  //             name: {
  //               show: false,
  //             },
  //             value: {
  //               show: false,
  //             },
  //           },
  //           //   barLabels: {
  //           //     enabled: true,
  //           //     useSeriesColors: true,
  //           //     offsetX: -8,
  //           //     fontSize: '16px',
  //           //     formatter: function(seriesName, opts) {
  //           //       return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
  //           //     },
  //           //   },
  //         },
  //       },
  //       colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
  //       labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
  //       responsive: [
  //         {
  //           breakpoint: 480,
  //           options: {
  //             legend: {
  //               show: false,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   };

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Chart
        type="radialBar"
        series={chart.series}
        options={chartOptions}
        // width={400}
        height={280}
        sx={{ my: 1, mx: 'auto' }}
      />
      <ChartLegends
        labels={chart.labels.map((item) => item)}
        colors={chartOptions?.colors}
        sx={{ p: 3, justifyContent: 'center' }}
      />
    </Card>
  );
};

export default AnalyticsSleepOverview;
