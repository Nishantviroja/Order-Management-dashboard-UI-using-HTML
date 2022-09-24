if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}

$(function() {
    "use strict";

    // Stock Quality
    var options = {
        series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 43]
        }],
        chart: {
            type: 'bar',
            height: 220,
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },
        colors: ['var(--chart-color3)'],
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                borderRadius: 8,
                horizontal: false,
            },
        },
        xaxis: {
            categories: ['2017', '2018', '2019', '2020'],
        },
        legend: {
            position: 'bottom',
        },
        fill: {
            opacity: 1
        }
    };  
    var chart = new ApexCharts(document.querySelector("#apex-StockQuality"), options); chart.render();
    
    // Average Cost
    var options = {
        series: [{
            name: "STOCK ABC",
            data: [0, 9, 5, 43]
        }],
        chart: {
            type: 'area',
            height: 220,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        colors: ['var(--chart-color3)'],
        fill: {
            type: "gradient",
            gradient: {
                gradientToColors: ['var(--chart-color3)' , 'var(--chart-color2)'],
                shadeIntensity: 4,
                opacityFrom: 0.5,
                opacityTo: 0.1,
                stops: [0, 100]
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        
        xaxis: {
            categories: ['2017', '2018', '2019', '2020'],
        },
        yaxis: {
            opposite: true
        },
        legend: {
            horizontalAlign: 'left'
        }
    };
    var chart = new ApexCharts(document.querySelector("#apex-AverageCost"), options); chart.render();
    
    // Quality Purchase
    var options = {
        series: [{
            name: 'PRODUCT A',
            data: [56, 50, 32, 9]
        }],
        chart: {
            type: 'bar',
            height: 220,
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },
        colors: ['var(--chart-color2)'],
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                borderRadius: 8,
                horizontal: false,
            },
        },
        xaxis: {
            categories: ['2017', '2018', '2019', '2020'],
        },
        legend: {
            position: 'bottom',
        },
        fill: {
            opacity: 1
        }
    };
    var chart = new ApexCharts(document.querySelector("#apex-QualityPurchase"), options); chart.render();
    
    // Top Selling Plans
    var options = {
        series: [32, 56, 12],
        chart: {
            type: 'donut',
            width: 340,
            toolbar: {
                show: false,
            },
        },
        responsive: [{
            breakpoint: 1200,
            options: {
                chart: {
                    width: 260
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        labels: ['Plan 1', 'Plan 2', 'Plan 3'],
        colors: ['var(--chart-color1)', 'var(--chart-color2)', 'var(--chart-color3)'],
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'bottom', // top, bottom
            enabled: false
        }
    };
    var chart = new ApexCharts(document.querySelector("#apex-TopSellingPlans"), options); chart.render();

    // Sales Statistics
    var options = {
        series: [{
            name: 'Revenue',
            data: [13, 23, 20, 8, 13, 27, 33, 12, 67, 22, 43, 21, 49, 13, 23]
        }, {
            name: 'Cost',
            data: [44, 55, 41, 67, 22, 43, 21, 49, 13, 23, 20, 8, 13, 27, 33]
        }],
        chart: {
            type: 'bar',
            height: 190,
            stacked: true,
            //stackType: '100%',
            toolbar: {
                show: false,
            },
        },
        colors: ['var(--chart-color1)', 'var(--chart-color2)'],
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        xaxis: {
            categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15',],
        },
        fill: {
            opacity: 1
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            position: 'bottom',
        },
        tooltip: {
            y: [{
                title: {
                    formatter: function (val) {
                        return val + " (K)"
                    }
                }
            },{
                title: {
                    formatter: function (val) {
                        return val + " (K)"
                    }
                }
            }]
        },
    };
    var chart = new ApexCharts(document.querySelector("#apex-SalesStatistics"), options); chart.render();

});