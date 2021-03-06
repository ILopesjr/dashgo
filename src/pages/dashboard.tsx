import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import moment from 'moment';
import { useEffect, useState } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    // type:'datetime'
    labels: {
      formatter: function (val, timestamp) {
        return moment(new Date(val)).format('DD MMM YY');
      },
    },
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-05-31T00:00:00.000',
      '2022-06-01T00:00:00.000',
      '2022-06-02T00:00:00.000',
      '2022-06-03T00:00:00.000',
      '2022-06-04T00:00:00.000',
      '2022-06-05T00:00:00.000',
      '2022-06-06T00:00:00.000',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }];

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowChart(true), 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            {showChart && (
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            )}
          </Box>

          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            {showChart && (
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            )}
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
