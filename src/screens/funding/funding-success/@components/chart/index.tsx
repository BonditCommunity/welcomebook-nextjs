'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import { useTheme } from '@/hooks/common/use-theme';
import { color } from '@/theme/theme';
import { typography } from '@/theme/typography';
import { ChartProps } from './@types';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const Chart: React.FC<ChartProps> = ({ style, percent }) => {
    const { theme } = useTheme();

    return (
        <div style={{ width: 240, height: 240, ...style }}>
            <ApexChart
                type={'radialBar'}
                series={[percent]}
                width={'100%'}
                height={'100%'}
                options={{
                    chart: {
                        sparkline: {
                            enabled: true,
                        },
                        toolbar: {
                            show: false,
                        },
                        parentHeightOffset: 0,
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorStops: [
                                [
                                    {
                                        offset: 0,
                                        color: '#000F95',
                                        opacity: 1,
                                    },
                                    {
                                        offset: 100,
                                        color: '#B337FF',
                                        opacity: 1,
                                    },
                                ],
                            ],
                        },
                    },
                    legend: {
                        show: false,
                    },
                    plotOptions: {
                        radialBar: {
                            track: {
                                background: color.primary['3'],
                                strokeWidth: '100%',
                            },
                            dataLabels: {
                                name: {
                                    show: false,
                                },
                                value: {
                                    fontSize: `${typography.FH2.fontSize}px`,
                                    fontFamily: typography.FH2.fontFamily,
                                    fontWeight: typography.FH2.fontWeight,
                                    color: theme.text.default,
                                    formatter: function (val) {
                                        return val + '%';
                                    },
                                },
                            },
                        },
                    },
                    states: {
                        hover: {
                            filter: {
                                type: 'none',
                            },
                        },
                        active: {
                            filter: {
                                type: 'none',
                            },
                        },
                    },
                    stroke: {
                        width: 8,
                        lineCap: 'round',
                    },
                }}
            />
        </div>
    );
};
