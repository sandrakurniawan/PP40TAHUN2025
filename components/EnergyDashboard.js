import React, { useState, useMemo } from 'react';
import { LineChart, Line, Area, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Menu, X, ChevronDown, Filter } from 'lucide-react';

const EnergyDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('final-energy-sector');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCharts, setSelectedCharts] = useState({});

  // Fixed and properly structured data
  const staticData = useMemo(() => {
    return {
      'final-energy-sector': [
        { 
          id: 'final', 
          name: 'Energi Final Total', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 255.1, mean: 277.05, max: 299 },
            { year: 2040, min: 303.9, mean: 331.4, max: 358.9 },
            { year: 2050, min: 354.6, mean: 384.65, max: 414.7 },
            { year: 2060, min: 378.5, mean: 405.65, max: 432.8 }
          ]
        },
        { 
          id: 'industri', 
          name: 'Industri', 
          color: '#2d5a2d',
          data: [
            { year: 2030, min: 127.9, mean: 140.65, max: 153.4 },
            { year: 2040, min: 168.9, mean: 182.75, max: 196.6 },
            { year: 2050, min: 215.4, mean: 233.7, max: 252 },
            { year: 2060, min: 246.7, mean: 260.35, max: 274 }
          ]
        },
        { 
          id: 'transportasi', 
          name: 'Transportasi', 
          color: '#b8860b',
          data: [
            { year: 2030, min: 127.9, mean: 140.65, max: 153.4 },
            { year: 2040, min: 168.9, mean: 182.75, max: 196.6 },
            { year: 2050, min: 215.4, mean: 233.7, max: 252 },
            { year: 2060, min: 246.7, mean: 260.35, max: 274 }
          ]
        },
        { 
          id: 'komersial', 
          name: 'Komersial', 
          color: '#8b2635',
          data: [
            { year: 2030, min: 11.2, mean: 13.4, max: 15.6 },
            { year: 2040, min: 14.8, mean: 17.85, max: 20.9 },
            { year: 2050, min: 18.4, mean: 22, max: 25.6 },
            { year: 2060, min: 20.8, mean: 24, max: 27.2 }
          ]
        },
        { 
          id: 'rumahtangga', 
          name: 'Rumah Tangga', 
          color: '#2f4f4f',
          data: [
            { year: 2030, min: 29, mean: 31.65, max: 34.3 },
            { year: 2040, min: 34.3, mean: 39.45, max: 44.6 },
            { year: 2050, min: 41.2, mean: 44.05, max: 46.9 },
            { year: 2060, min: 46.3, mean: 49, max: 51.7 }
          ]
        }
      ],
      'final-energy-source': [
        { 
          id: 'final2', 
          name: 'Energi Final Total', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 255.1, mean: 277.05, max: 299 },
            { year: 2040, min: 303.9, mean: 331.4, max: 358.9 },
            { year: 2050, min: 354.6, mean: 384.65, max: 414.7 },
            { year: 2060, min: 378.5, mean: 405.65, max: 432.8 }
          ]
        },
        { 
          id: 'surya', 
          name: 'Surya', 
          color: '#2d5a2d',
          data: [
            { year: 2030, min: 1.2, mean: 1.35, max: 1.5 },
            { year: 2040, min: 1.8, mean: 1.85, max: 1.9 },
            { year: 2050, min: 4.3, mean: 4.4, max: 4.5 },
            { year: 2060, min: 11.6, mean: 12.15, max: 12.7 }
          ]
        },
        { 
          id: 'biomassa', 
          name: 'Biomassa', 
          color: '#b8860b',
          data: [
            { year: 2030, min: 15.8, mean: 19.45, max: 23.1 },
            { year: 2040, min: 21.9, mean: 23.3, max: 24.7 },
            { year: 2050, min: 30.3, mean: 32.65, max: 35 },
            { year: 2060, min: 67.5, mean: 69.7, max: 71.9 }
          ]
        },
        { 
          id: 'biogas', 
          name: 'Biogas', 
          color: '#8b2635',
          data: [
            { year: 2030, min: 0.0484, mean: 0.05625, max: 0.0641 },
            { year: 2040, min: 0.0875, mean: 0.10285, max: 0.1182 },
            { year: 2050, min: 0.1584, mean: 0.17955, max: 0.2007 },
            { year: 2060, min: 0.2867, mean: 0.3325, max: 0.3783 }
          ]
        },
        { 
          id: 'nabati', 
          name: 'Nabati', 
          color: '#2f4f4f',
          data: [
            { year: 2030, min: 18.7, mean: 20.7, max: 22.7 },
            { year: 2040, min: 21.9, mean: 23.55, max: 25.2 },
            { year: 2050, min: 18.7, mean: 20.4, max: 22.1 },
            { year: 2060, min: 13.6, mean: 16.75, max: 19.9 }
          ]
        },
        { 
          id: 'hidrogen', 
          name: 'Hidrogen', 
          color: '#1e6091',
          data: [
            { year: 2030, min: 0.0007, mean: 0.00105, max: 0.0014 },
            { year: 2040, min: 0.0054, mean: 0.0059, max: 0.0064 },
            { year: 2050, min: 0.0204, mean: 0.0218, max: 0.0232 },
            { year: 2060, min: 0.0314, mean: 0.0334, max: 0.0354 }
          ]
        },
        { 
          id: 'amonia', 
          name: 'Amonia', 
          color: '#7f5a89',
          data: [
            { year: 2030, min: 0.0024, mean: 0.00265, max: 0.0029 },
            { year: 2040, min: 1, mean: 1.1, max: 1.2 },
            { year: 2050, min: 3.5, mean: 3.9, max: 4.3 },
            { year: 2060, min: 3.5, mean: 5.5, max: 7.5 }
          ]
        },
        { 
          id: 'de', 
          name: 'Dimethyl Ether', 
          color: '#a6854b',
          data: [
            { year: 2030, min: 0, mean: 0.3, max: 0.6 },
            { year: 2040, min: 3, mean: 3.3, max: 3.6},
            { year: 2050, min: 3, mean: 3.3, max: 3.6 },
            { year: 2060, min: 3, mean: 3.3, max: 3.6 }
          ]
        },
        { 
          id: 'minyak', 
          name: 'Minyak', 
          color: '#394f49',
          data: [
            { year: 2030, min: 75.3, mean: 78.7, max: 82.1 },
            { year: 2040, min: 64.3, mean: 68.9, max: 73.5},
            { year: 2050, min: 45.8, mean: 50.25, max: 54.7},
            { year: 2060, min: 22.8, mean: 27.4, max: 32 }
          ]
        },
        { 
          id: 'gas', 
          name: 'Gas Bumi', 
          color: '#00798c',
          data: [
            { year: 2030, min: 18.8, mean: 19.45, max: 20.1 },
            { year: 2040, min: 24.9, mean: 26.1, max: 27.3},
            { year: 2050, min: 40.4, mean: 43.9, max: 47.4},
            { year: 2060, min: 56.6, mean: 63.85, max: 71.1 }
          ]
        },
        { 
          id: 'lpg', 
          name: 'LPG', 
          color: '#8b5e83',
          data: [
            { year: 2030, min: 11, mean: 11.1, max: 11.2 },
            { year: 2040, min: 2.8, mean: 2.9, max: 3},
            { year: 2050, min: 1, mean: 1, max: 1},
            { year: 2060, min: 0.8, mean: 0.85, max: 0.9 }
          ]
        },
        { 
          id: 'batubara', 
          name: 'Batubara', 
          color: '#b09e6f',
          data: [
            { year: 2030, min: 67.2, mean: 67.95, max: 68.7 },
            { year: 2040, min: 83.3, mean: 84.3, max: 85.3},
            { year: 2050, min: 80.3, mean: 81.05, max: 81.8},
            { year: 2060, min: 25.3, mean: 31.95, max: 38.6 }
          ]
        },
        { 
          id: 'listrikwocaptive', 
          name: 'Listrik (tanpa Captive Power)', 
          color: '#6d2035',
          data: [
            { year: 2030, min: 46.8, mean: 58.05, max: 69.3 },
            { year: 2040, min: 73.5, mean: 90.1, max: 106.7},
            { year: 2050, min: 106.6, mean: 121.8, max: 137},
            { year: 2060, min: 128.8, mean: 140.45, max: 152.1 }
          ]
        },
        { 
          id: 'listrikwcaptive', 
          name: 'Listrik (dengan Captive Power)', 
          color: '#5e3c27',
          data: [
            { year: 2030, min: 60.1, mean: 72.3, max: 84.5 },
            { year: 2040, min: 91.5, mean: 111.85, max: 132.2},
            { year: 2050, min: 129.2, mean: 151.7, max: 174.2},
            { year: 2060, min: 155.9, mean: 178.9, max: 201.9 }
          ]
        }
      ],
      'primary-energy': [
        { 
          id: 'primary-energy', 
          name: 'Energi Primer', 
          color: '#2c2c2c',
          data: [
            { year: 2030, min: 368, mean: 411, max: 454 },
            { year: 2040, min: 468, mean: 532, max: 596 },
            { year: 2050, min: 595, mean: 653.5, max: 712 },
            { year: 2060, min: 665, mean: 720, max: 775 }
          ]
        }
      ],
      'energy-intensity': [
        {
          id: 'energy-intensity', 
          name: 'Intensitas Energi', 
          color: '#5e3c27',
          data: [
            { year: 2030, min: 306.3, mean: 329.05, max: 351.8 },
            { year: 2040, min: 205.1, mean: 212.7, max: 220.3 },
            { year: 2050, min: 151.3, mean: 154.35, max: 157.4 },
            { year: 2060, min: 96.1, mean: 105.05, max: 114 }
          ]
        }
      ],
      'bauran-energi': [
        {
          id: 'bauran-energi', 
          name: 'Bauran Energi', 
          color: '#6d2035',
          data: [
            { year: 2030, min: 19.0, mean: 21, max: 23 },
            { year: 2040, min: 36, mean: 38, max: 40 },
            { year: 2050, min: 53, mean: 54, max: 55 },
            { year: 2060, min: 70, mean: 71, max: 72 }
          ]
        }
      ],
      'energy-per-capita': [
        { 
          id: 'pemanfaatan-capita', 
          name: 'Pemanfaatan Energi Final per Kapita', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 0.9, mean: 0.95, max: 1.0 },
            { year: 2040, min: 1.0, mean: 1.05, max: 1.1 },
            { year: 2050, min: 1.0, mean: 1.1, max: 1.2 },
            { year: 2060, min: 1.1, mean: 1.15, max: 1.2 }
          ]
        },
        { 
          id: 'penyediaan-capita', 
          name: 'Penyediaan Energi Primer per Kapita', 
          color: '#2d5a2d',
          data: [
            { year: 2030, min: 1.2, mean: 1.3, max: 1.4 },
            { year: 2040, min: 1.5, mean: 1.7, max: 1.9 },
            { year: 2050, min: 1.8, mean: 1.95, max: 2.1},
            { year: 2060, min: 1.9, mean: 2.05, max: 2.2 }
          ]
        }
      ],
      'ghg-ebt': [
        { 
          id: 'bauran-hidro', 
          name: 'Hidro', 
          color: '#2c2c2c',
          data: [
            { year: 2030, min: 1.8, mean: 2.05, max: 2.3 },
            { year: 2040, min: 3.6, mean: 3.7, max: 3.8 },
            { year: 2050, min: 4.6, mean: 4.75, max: 4.9 },
            { year: 2060, min: 4.9, mean: 5, max: 5.1 }
          ]
        },
        { 
          id: 'bauran-surya', 
          name: 'Surya', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 1.3, mean: 1.45, max: 1.6 },
            { year: 2040, min: 13.1, mean: 14.55, max: 16 },
            { year: 2050, min: 23.3, mean: 24.3, max: 25.3 },
            { year: 2060, min: 29.8, mean: 30.9, max: 32.0 }
          ]
        },
        { 
          id: 'bauran-angin', 
          name: 'Angin', 
          color: '#b8860b',
          data: [
            { year: 2030, min: 0.3, mean: 0.40, max: 0.5 },
            { year: 2040, min: 0.9, mean: 1.0, max: 1.1 },
            { year: 2050, min: 1, mean: 1.1, max: 1.2 },
            { year: 2060, min: 1.2, mean: 1.25, max: 1.3 }
          ]
        },
        { 
          id: 'bauran-biomasa', 
          name: 'Biomassa', 
          color: '#8b2635',
          data: [
            { year: 2030, min: 7.2, mean: 8.1, max: 9 },
            { year: 2040, min: 6.5, mean: 6.6, max: 6.7 },
            { year: 2050, min: 7.4, mean: 7.5, max: 7.6 },
            { year: 2060, min: 12.2, mean: 12.8, max: 13.4 }
          ]
        },
        { 
          id: 'bauran-panasbumi', 
          name: 'Panas Bumi', 
          color: '#1e6091',
          data: [
            { year: 2030, min: 3.4, mean: 3.7, max: 4 },
            { year: 2040, min: 3.8, mean: 4.1, max: 4.4 },
            { year: 2050, min: 4.8, mean: 4.95, max: 5.1 },
            { year: 2060, min: 4.9, mean: 5.05, max: 5.2 }
          ]
        },
        { 
          id: 'bauran-biogas', 
          name: 'Biogas', 
          color: '#7f5a89',
          data: [
            { year: 2030, min: 0.01, mean: 0.01, max: 0.01 },
            { year: 2040, min: 0.02, mean: 0.02, max: 0.02 },
            { year: 2050, min: 0.03, mean: 0.03, max: 0.03},
            { year: 2060, min: 0.04, mean: 0.05, max: 0.05 }
          ]
        },
        { 
          id: 'bauran-nuklir', 
          name: 'Nuklir', 
          color: '#394f49',
          data: [
            { year: 2030, min: 0.4, mean: 0.45, max: 0.5 },
            { year: 2040, min: 2.8, mean: 3.1, max: 3.4 },
            { year: 2050, min: 6.8, mean: 6.9, max: 7},
            { year: 2060, min: 11.7, mean: 11.9, max: 12.1 }
          ]
        },
        { 
          id: 'bauran-lainnya', 
          name: 'Lainnya', 
          color: '#00798c',
          data: [
            { year: 2030, min: 0.1, mean: 0.15, max: 0.2 },
            { year: 2040, min: 0.5, mean: 0.55, max: 0.6 },
            { year: 2050, min: 1.2, mean: 1.35, max: 1.5},
            { year: 2060, min: 1.5, mean: 1.55, max: 1.6 }
          ]
        },
        { 
          id: 'bauran-gasbumi', 
          name: 'Gas Bumi', 
          color: '#8b5e83',
          data: [
            { year: 2030, min: 12.9, mean: 13.55, max: 14.2 },
            { year: 2040, min: 16.7, mean: 16.75, max: 16.8 },
            { year: 2050, min: 17.8, mean: 17.2, max: 17.3},
            { year: 2060, min: 14.4, mean: 14.9, max: 15.4 }
          ]
        },
        { 
          id: 'bauran-nabati', 
          name: 'Bahan Bakar Nabati', 
          color: '#a6854b',
          data: [
            { year: 2030, min: 5.1, mean: 5.15, max: 5.2},
            { year: 2040, min: 4.2, mean: 4.45, max: 4.7 },
            { year: 2050, min: 3.1, mean: 3.15, max: 3.2},
            { year: 2060, min: 2.1, mean: 2.35, max: 2.6 }
          ]
        }
      ],
      'ghg-fossil-reduction': [
        { 
          id: 'oil-reduction', 
          name: 'Pengurangan Minyak Bumi', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 73.7, mean: 75.65, max: 77.6 },
            { year: 2040, min: 61.98, mean: 64.23, max: 66.5 },
            { year: 2050, min: 56.53, mean: 58.61, max: 60.72 },
            { year: 2060, min: 53.87, mean: 56.09, max: 58.35 }
          ]
        },
        { 
          id: 'coal-reduction', 
          name: 'Pengurangan Batubara', 
          color: '#2c2c2c',
          data: [
            { year: 2030, min: 58.4, mean: 58.58, max: 59.3 },
            { year: 2040, min: 40.3, mean: 41.22, max: 42.16 },
            { year: 2050, min: 31.87, mean: 32.98, max: 34.11 },
            { year: 2060, min: 28.08, mean: 29.73, max: 31.45}
          ]
        }
      ],
      'ghg-energysectorcapita': [
        { 
          id: 'energysectorcapita', 
          name: 'Emisi GRK Sektor Energi (CO2e) per Kapita', 
          color: '#00798c',
          data: [
            { year: 2030, min: 3.41, mean: 3.555, max: 3.7 },
            { year: 2040, min: 2.89, mean: 3.145, max: 3.4},
            { year: 2050, min: 2, mean: 2.1, max: 2.2 },
            { year: 2060, min: 0.36, mean: 0.36, max: 0.36 }
          ]
        }
      ],
      'ghg-intensityemission': [
        { 
          id: 'intensityemission', 
          name: 'Intensitas emisi Energi Primer', 
          color: '#8b5e83',
          data: [
            { year: 2030, min: 2.61, mean: 2.685, max: 2.76 },
            { year: 2040, min: 1.82, mean: 1.9, max: 1.98},
            { year: 2050, min: 1.05, mean: 1.095, max: 1.14 },
            { year: 2060, min: 0.17, mean: 0.18, max: 0.19 }
          ]
        }
      ],
      'ghg-energysector': [
        { 
          id: 'energysector', 
          name: 'Emisi GRK Sektor Energi (CO2e)', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 1017, mean: 1100.5, max: 1184 },
            { year: 2040, min: 925, mean: 1005.5, max: 1086 },
            { year: 2050, min: 676, mean: 710, max: 744 },
            { year: 2060, min: 129, mean: 129, max: 129 }
          ]
        }
      ]
    };
  }, []);

  // Function to generate transparent colors for overlapping
  const generateColors = (baseColor) => {
    const hex = baseColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    return {
      line: baseColor,
      areaFill: `rgba(${r}, ${g}, ${b}, 0.15)`
    };
  };

  // Chart configurations using static data
  const chartConfigs = {
    'final-energy-sector': {
      title: 'Pemanfaatan Energi Final per Sektor',
      charts: staticData['final-energy-sector']
    },
    'final-energy-source': {
      title: 'Pemanfaatan Energi Final per Jenis',
      charts: staticData['final-energy-source']
    },
    'primary-energy': {
      title: 'Penyediaan Energi Primer',
      charts: staticData['primary-energy']
    },
    'energy-intensity': {
      title: 'Intensitas Energi Primer',
      charts: staticData['energy-intensity']
    },
    'bauran-energi': {
      title: 'Bauran Energi Baru dan Energi Terbarukan',
      charts: staticData['bauran-energi']
    },    
    'energy-per-capita': {
      title: 'Pemanfaatan Energi per Kapita',
      charts: staticData['energy-per-capita']
    },
    'ghg-ebt': {
      title: 'Bauran Energi Baru dan Energi Terbarukan (EBT)',
      charts: staticData['ghg-ebt']
    },
    'ghg-fossil-reduction': {
      title: 'Pengurangan Energi Fosil',
      charts: staticData['ghg-fossil-reduction']
    },
    'ghg-intensityemission': {
      title: 'Intensitas emisi Energi Primer (CO2e)',
      charts: staticData['ghg-intensityemission']
    },
    'ghg-energysectorcapita': {
      title: 'Emisi GRK Sektor Energi (CO2e) per Kapita',
      charts: staticData['ghg-energysectorcapita']
    },
    'ghg-energysector': {
      title: 'Emisi GRK Sektor Energi (CO2e)',
      charts: staticData['ghg-energysector']
    }
  };

  // Initialize selected charts
  React.useEffect(() => {
    const initialSelected = {};
    Object.keys(chartConfigs).forEach(menu => {
      initialSelected[menu] = chartConfigs[menu].charts.reduce((acc, chart) => {
        acc[chart.id] = true;
        return acc;
      }, {});
    });
    setSelectedCharts(initialSelected);
  }, []);

  const menuItems = [
    {
      id: 'final-energy',
      name: 'Pemanfaatan Energi Final',
      hasSubmenu: true,
      submenu: [
        { id: 'final-energy-sector', name: 'Sektor (dalam juta TOE)' },
        { id: 'final-energy-source', name: 'Jenis (dalam juta TOE)' }
      ]
    },
    { 
      id: 'primer', 
      name: 'Energi Primer', 
      hasSubmenu: true,
      submenu: [
        { id: 'primary-energy', name: 'Penyediaan Energi Primer (dalam juta TOE)' },
        { id: 'energy-intensity', name: 'Intensitas Energi Primer (dalam TOE)' }
      ]
    },
    { id: 'energy-per-capita', name: 'Energi per Kapita', hasSubmenu: false },
    { 
      id: 'EBT', 
      name: 'EBT', 
      hasSubmenu: true,
      submenu: [
        { id: 'bauran-energi', name: 'Bauran Energi Baru dan Energi Terbarukan (dalam %)' },
        { id: 'ghg-ebt', name: 'Bauran EBT per sumber energi (dalam %)' }
      ]
    },
    
    {
      id: 'ghg',
      name: 'Greenhouse Gas (GHG) Reduction',
      hasSubmenu: true,
      submenu: [
        { id: 'ghg-fossil-reduction', name: 'Pengurangan Energi Fosil (dalam %)' },
        { id: 'ghg-energysector', name: 'Emisi GRK Sektor Energi (CO2e)' },
        { id: 'ghg-energysectorcapita', name: 'Emisi GRK Sektor Energi (CO2e) per Kapita' },
        { id: 'ghg-intensityemission', name: 'Intensitas emisi Energi Primer (CO2e)' }
      ]
    }
  ];

  const currentConfig = chartConfigs[activeMenu];
  const currentSelected = selectedCharts[activeMenu] || {};

  // Prepare chart data with proper structure for transparent overlapping areas
  const chartData = useMemo(() => {
    if (!currentConfig) return [];
    
    const years = currentConfig.charts[0]?.data.map(d => d.year) || [];
    return years.map(year => {
      const dataPoint = { year };
      
      // Add data for each chart
      currentConfig.charts.forEach(chart => {
        const yearData = chart.data.find(d => d.year === year);
        if (yearData && currentSelected[chart.id]) {
          dataPoint[`${chart.id}_min`] = yearData.min;
          dataPoint[`${chart.id}_mean`] = yearData.mean;
          dataPoint[`${chart.id}_max`] = yearData.max;
        }
      });
      
      return dataPoint;
    });
  }, [currentConfig, currentSelected]);

  const toggleChartVisibility = (chartId) => {
    setSelectedCharts(prev => ({
      ...prev,
      [activeMenu]: {
        ...prev[activeMenu],
        [chartId]: !prev[activeMenu]?.[chartId]
      }
    }));
  };

  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const chartData = {};
      payload.forEach(entry => {
        if (entry.dataKey) {
          const [chartId, dataType] = entry.dataKey.split('_');
          if (!chartData[chartId]) {
            chartData[chartId] = {};
          }
          chartData[chartId][dataType] = entry.value;
          chartData[chartId].payload = entry.payload;
        }
      });

      const validEntries = Object.entries(chartData).filter(([chartId, data]) => {
        return data.mean !== undefined && currentSelected[chartId];
      });

      if (validEntries.length === 0) return null;

      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-medium mb-2">{`Year: ${label}`}</p>
          {validEntries.map(([chartId, data]) => {
            const chart = currentConfig.charts.find(c => c.id === chartId);
            if (!chart) return null;
            
            const minValue = data.payload[`${chartId}_min`];
            const maxValue = data.payload[`${chartId}_max`];
            
            return (
              <div key={chartId} className="mb-1">
                <p style={{ color: chart.color }} className="font-bold text-sm">
                  {`${chart.name}: ${minValue?.toFixed(2)} - ${maxValue?.toFixed(2)}`}
                </p>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

return (
  <>
    {/* Header - Fixed Top */}
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg">
      <div className="px-6 py-4">
        <h1 className="text-xl md:text-2xl font-bold text-center leading-tight">
          Target yang tercantum pada Peraturan Pemerintah Nomor 40 tahun 2025
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-center mt-1 text-blue-100">
          <span className="italic">Kebijakan Energi Nasional</span> (KEN)
        </h2>
      </div>
    </div>
    
    <div className="flex h-screen bg-gray-50 pt-24">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 flex-shrink-0`}>
        <div className="p-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 w-full flex items-center justify-center"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {isSidebarOpen && (
          <nav className="mt-4">
            {menuItems.map((item) => (
              <div key={item.id}>
                {!item.hasSubmenu ? (
                  <button
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors ${
                      activeMenu === item.id ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <div className="px-4 py-2">
                    <div className="flex items-center text-gray-700 font-medium">
                      {item.name}
                      <ChevronDown size={16} className="ml-2" />
                    </div>
                    <div className="ml-4 mt-2">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => setActiveMenu(subItem.id)}
                          className={`w-full text-left px-2 py-2 hover:bg-gray-100 rounded transition-colors ${
                            activeMenu === subItem.id ? 'bg-blue-50 text-blue-600' : ''
                          }`}
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {currentConfig?.title}
          </h1>
          
          {/* Chart toggles */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Filter size={20} />
              <span className="font-medium">Chart Visibility</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentConfig?.charts.map((chart) => (
                <button
                  key={chart.id}
                  onClick={() => toggleChartVisibility(chart.id)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    currentSelected[chart.id]
                      ? 'text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  style={{
                    backgroundColor: currentSelected[chart.id] ? chart.color : undefined
                  }}
                >
                  {chart.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="year" 
                type="number" 
                scale="linear" 
                domain={['dataMin', 'dataMax']}
              />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              
              {/* First render all uncertainty areas (behind lines) */}
              {currentConfig?.charts.map((chart) => {
                if (!currentSelected[chart.id]) return null;
                
                const colors = generateColors(chart.color);
                
                return (
                  <Area
                    key={`area-${chart.id}`}
                    type="monotone"
                    dataKey={`${chart.id}_max`}
                    stroke="none"
                    fill={colors.areaFill}
                    fillOpacity={1}
                  />
                );
              })}
              
              {/* Then render all mean lines (in front of areas) */}
              {currentConfig?.charts.map((chart) => {
                if (!currentSelected[chart.id]) return null;
                
                const colors = generateColors(chart.color);
                
                return (
                  <Line
                    key={`line-${chart.id}`}
                    type="monotone"
                    dataKey={`${chart.id}_mean`}
                    stroke={colors.line}
                    strokeWidth={3}
                    dot={{ fill: colors.line, strokeWidth: 2, r: 5 }}
                    name={chart.name}
                  />
                );
              })}
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Enhanced Legend */}
        <div className="mt-4 bg-white rounded-lg shadow-sm p-4">
          <h3 className="font-medium mb-3">Chart Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Visual Elements</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-0.5 bg-gray-800"></div>
                  <span>Mean projection (solid line)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-3 bg-gray-400 opacity-30"></div>
                  <span>Uncertainty range (transparent shaded area)</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Interaction</h4>
              <div className="text-sm text-gray-600">
                <p>• Click chart toggles to show/hide individual series</p>
                <p>• Hover over chart for detailed values</p>
                <p>• All charts can be displayed simultaneously with transparent overlays</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  );
};

export default EnergyDashboard;
