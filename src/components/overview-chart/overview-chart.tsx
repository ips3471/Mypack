import React, { useMemo } from 'react';
import styles from './overview-chart.module.css';
import { Pie } from 'react-chartjs-2';
import { Item } from '../main/main';

interface OverviewChartProps {
    pickedItems: Item[];
}

const OverviewChart = ({pickedItems}: OverviewChartProps) => {
    const sumOfEssentials = pickedItems
    .filter(item => item.category === 'essential')
    .reduce((acc, item) => acc + Number(item.weight), 0);

    const sumOfCookwares = pickedItems
    .filter(item => item.category === 'cookware')
    .reduce((acc, item) => acc + Number(item.weight), 0);

    const sumOfEquipments = pickedItems
    .filter(item => item.category === 'equipment')
    .reduce((acc, item) => acc + Number(item.weight), 0);

    const sumOfClothes = pickedItems
    .filter(item => item.category === 'clothes')
    .reduce((acc, item) => acc + Number(item.weight), 0);

    const sumOfEtcs = pickedItems
    .filter(item => item.category === 'etc')
    .reduce((acc, item) => acc + Number(item.weight), 0);

    const totalWeight = pickedItems.reduce((acc, item) => acc + Number(item.weight), 0);

    return useMemo(() => 
    <div className={styles.overviewChart}>
    <Pie
        data={{
            labels: ['필수장비', '취사용품', '편의장비', '의류용품', '기타장비'],
            datasets: [
                {
                    label: '# of votes',
                    data: [sumOfEssentials, sumOfCookwares, sumOfEquipments, sumOfClothes, sumOfEtcs],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(255, 206, 86, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(153, 102, 255, 0.4)',
                    ],
                }
            ]
        }}
        height={200}
        width={200}
        className={styles.chart}
    />
    <div className={styles.totalWeight}>총 무게: {totalWeight} g</div>
</div>, [totalWeight, sumOfEtcs, sumOfEssentials, sumOfEquipments, sumOfCookwares, sumOfClothes])
};

export default OverviewChart;