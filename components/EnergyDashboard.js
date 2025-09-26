const toggleChartVisibility = (chartId) => {
    setSelectedCharts(prev => ({
      ...prev,
      [activeMenu]: {
        ...prev[activeMenu],
        [chartId]: !prev[activeMenu]?.[chartId]
      }
    }));
  };

  const DataTable = () => {
    const data = viewMode === 'comparison' ? comparisonData : chartData;
    const selectedChartsList = currentConfig?.charts.filter(c => currentSelected[c.id]) || [];
    
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Data Table</h3>
          <button
            onClick={() => setShowDataTable(false)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <X size={16} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left p-2 font-semibold">Year</th>
                {selectedChartsList.map(chart => (
                  <th key={chart.id} className="text-left p-2 font-semibold">
                    {chart.name}
                    {viewMode === 'uncertainty' && (
                      <div className="text-xs font-normal text-gray-500">
                        Min / Mean / Max
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.year} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-2 font-medium">{row.year}</td>
                  {selectedChartsList.map(chart => (
                    <td key={chart.id} className="p-2">
                      {viewMode === 'comparison' ? (
                        <span>{row[chart.id]?.toLocaleString() || '-'}</span>
                      ) : (
                        <div className="text-sm">
                          <div>{row[`${chart.id}_min`]?.toLocaleString() || '-'}</div>
                          <div className="font-medium">{row[`${chart.id}_mean`]?.toLocaleString() || '-'}</div>
                          <div>{row[`${chart.id}_max`]?.toLocaleString() || '-'}</div>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };import React, { useState, useMemo } from 'react';
import { LineChart, Line, Area, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Menu, X, ChevronDown, Filter, BarChart3, TrendingUp, Table, Download, Settings } from 'lucide-react';

const EnergyDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('final-energy');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCharts, setSelectedCharts] = useState({});
  const [viewMode, setViewMode] = useState('uncertainty'); // 'uncertainty' or 'comparison'
  const [selectedYears, setSelectedYears] = useState([2030, 2040, 2050, 2060]);
  const [showDataTable, setShowDataTable] = useState(false);

  // Deterministic data with 4 time periods: 2030, 2040, 2050, 2060
  const staticData = useMemo(() => {
    return {
      'final-energy': [
        { 
          id: 'electricity', 
          name: 'Electricity', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 1400, mean: 1500, max: 1600 },
            { year: 2040, min: 1550, mean: 1650, max: 1750 },
            { year: 2050, min: 1700, mean: 1800, max: 1900 },
            { year: 2060, min: 1850, mean: 1950, max: 2050 }
          ]
        },
        { 
          id: 'transport', 
          name: 'Transportation', 
          color: '#2d5a2d',
          data: [
            { year: 2030, min: 850, mean: 950, max: 1050 },
            { year: 2040, min: 750, mean: 850, max: 950 },
            { year: 2050, min: 650, mean: 750, max: 850 },
            { year: 2060, min: 550, mean: 650, max: 750 }
          ]
        },
        { 
          id: 'heating', 
          name: 'Heating & Cooling', 
          color: '#b8860b',
          data: [
            { year: 2030, min: 750, mean: 850, max: 950 },
            { year: 2040, min: 700, mean: 800, max: 900 },
            { year: 2050, min: 650, mean: 750, max: 850 },
            { year: 2060, min: 600, mean: 700, max: 800 }
          ]
        },
        { 
          id: 'industrial', 
          name: 'Industrial Process', 
          color: '#8b2635',
          data: [
            { year: 2030, min: 1200, mean: 1300, max: 1400 },
            { year: 2040, min: 1350, mean: 1450, max: 1550 },
            { year: 2050, min: 1500, mean: 1600, max: 1700 },
            { year: 2060, min: 1650, mean: 1750, max: 1850 }
          ]
        },
        { 
          id: 'residential', 
          name: 'Residential', 
          color: '#2f4f4f',
          data: [
            { year: 2030, min: 600, mean: 700, max: 800 },
            { year: 2040, min: 650, mean: 750, max: 850 },
            { year: 2050, min: 700, mean: 800, max: 900 },
            { year: 2060, min: 750, mean: 850, max: 950 }
          ]
        }
      ],
      'primary-energy': [
        { 
          id: 'coal', 
          name: 'Coal', 
          color: '#2c2c2c',
          data: [
            { year: 2030, min: 1500, mean: 1700, max: 1900 },
            { year: 2040, min: 1200, mean: 1400, max: 1600 },
            { year: 2050, min: 900, mean: 1100, max: 1300 },
            { year: 2060, min: 600, mean: 800, max: 1000 }
          ]
        },
        { 
          id: 'oil', 
          name: 'Oil', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 1650, mean: 1750, max: 1850 },
            { year: 2040, min: 1450, mean: 1550, max: 1650 },
            { year: 2050, min: 1250, mean: 1350, max: 1450 },
            { year: 2060, min: 1050, mean: 1150, max: 1250 }
          ]
        },
        { 
          id: 'gas', 
          name: 'Natural Gas', 
          color: '#2d5a2d',
          data: [
            { year: 2030, min: 1600, mean: 1700, max: 1800 },
            { year: 2040, min: 1650, mean: 1750, max: 1850 },
            { year: 2050, min: 1500, mean: 1600, max: 1700 },
            { year: 2060, min: 1300, mean: 1400, max: 1500 }
          ]
        },
        { 
          id: 'renewable', 
          name: 'Renewables', 
          color: '#b8860b',
          data: [
            { year: 2030, min: 800, mean: 900, max: 1000 },
            { year: 2040, min: 1200, mean: 1300, max: 1400 },
            { year: 2050, min: 1600, mean: 1700, max: 1800 },
            { year: 2060, min: 2000, mean: 2100, max: 2200 }
          ]
        },
        { 
          id: 'nuclear', 
          name: 'Nuclear', 
          color: '#8b2635',
          data: [
            { year: 2030, min: 550, mean: 650, max: 750 },
            { year: 2040, min: 600, mean: 700, max: 800 },
            { year: 2050, min: 650, mean: 750, max: 850 },
            { year: 2060, min: 700, mean: 800, max: 900 }
          ]
        }
      ],
      'energy-per-capita': [
        { 
          id: 'total-capita', 
          name: 'Total per Capita', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 155, mean: 165, max: 175 },
            { year: 2040, min: 160, mean: 170, max: 180 },
            { year: 2050, min: 165, mean: 175, max: 185 },
            { year: 2060, min: 170, mean: 180, max: 190 }
          ]
        },
        { 
          id: 'urban-capita', 
          name: 'Urban per Capita', 
          color: '#2d5a2d',
          data: [
            { year: 2030, min: 185, mean: 195, max: 205 },
            { year: 2040, min: 190, mean: 200, max: 210 },
            { year: 2050, min: 195, mean: 205, max: 215 },
            { year: 2060, min: 200, mean: 210, max: 220 }
          ]
        },
        { 
          id: 'rural-capita', 
          name: 'Rural per Capita', 
          color: '#b8860b',
          data: [
            { year: 2030, min: 125, mean: 135, max: 145 },
            { year: 2040, min: 130, mean: 140, max: 150 },
            { year: 2050, min: 135, mean: 145, max: 155 },
            { year: 2060, min: 140, mean: 150, max: 160 }
          ]
        },
        { 
          id: 'industrial-capita', 
          name: 'Industrial per Capita', 
          color: '#8b2635',
          data: [
            { year: 2030, min: 220, mean: 230, max: 240 },
            { year: 2040, min: 240, mean: 250, max: 260 },
            { year: 2050, min: 260, mean: 270, max: 280 },
            { year: 2060, min: 280, mean: 290, max: 300 }
          ]
        },
        { 
          id: 'commercial-capita', 
          name: 'Commercial per Capita', 
          color: '#2f4f4f',
          data: [
            { year: 2030, min: 95, mean: 105, max: 115 },
            { year: 2040, min: 100, mean: 110, max: 120 },
            { year: 2050, min: 105, mean: 115, max: 125 },
            { year: 2060, min: 110, mean: 120, max: 130 }
          ]
        }
      ],
      'ghg-ebt': [
        { 
          id: 'coal-emissions', 
          name: 'Coal Emissions', 
          color: '#2c2c2c',
          data: [
            { year: 2030, min: 400, mean: 420, max: 440 },
            { year: 2040, min: 320, mean: 340, max: 360 },
            { year: 2050, min: 240, mean: 260, max: 280 },
            { year: 2060, min: 160, mean: 180, max: 200 }
          ]
        },
        { 
          id: 'gas-emissions', 
          name: 'Gas Emissions', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 330, mean: 350, max: 370 },
            { year: 2040, min: 340, mean: 360, max: 380 },
            { year: 2050, min: 320, mean: 340, max: 360 },
            { year: 2060, min: 280, mean: 300, max: 320 }
          ]
        },
        { 
          id: 'transport-emissions', 
          name: 'Transport Emissions', 
          color: '#2d5a2d',
          data: [
            { year: 2030, min: 370, mean: 390, max: 410 },
            { year: 2040, min: 320, mean: 340, max: 360 },
            { year: 2050, min: 270, mean: 290, max: 310 },
            { year: 2060, min: 220, mean: 240, max: 260 }
          ]
        },
        { 
          id: 'industrial-emissions', 
          name: 'Industrial Emissions', 
          color: '#b8860b',
          data: [
            { year: 2030, min: 380, mean: 400, max: 420 },
            { year: 2040, min: 400, mean: 420, max: 440 },
            { year: 2050, min: 420, mean: 440, max: 460 },
            { year: 2060, min: 440, mean: 460, max: 480 }
          ]
        },
        { 
          id: 'residential-emissions', 
          name: 'Residential Emissions', 
          color: '#8b2635',
          data: [
            { year: 2030, min: 180, mean: 200, max: 220 },
            { year: 2040, min: 170, mean: 190, max: 210 },
            { year: 2050, min: 160, mean: 180, max: 200 },
            { year: 2060, min: 150, mean: 170, max: 190 }
          ]
        }
      ],
      'ghg-fossil-reduction': [
        { 
          id: 'coal-reduction', 
          name: 'Coal Reduction', 
          color: '#2c2c2c',
          data: [
            { year: 2030, min: -80, mean: -85, max: -90 },
            { year: 2040, min: -120, mean: -125, max: -130 },
            { year: 2050, min: -160, mean: -165, max: -170 },
            { year: 2060, min: -200, mean: -205, max: -210 }
          ]
        },
        { 
          id: 'oil-reduction', 
          name: 'Oil Reduction', 
          color: '#684d7c',
          data: [
            { year: 2030, min: -60, mean: -65, max: -70 },
            { year: 2040, min: -90, mean: -95, max: -100 },
            { year: 2050, min: -120, mean: -125, max: -130 },
            { year: 2060, min: -150, mean: -155, max: -160 }
          ]
        },
        { 
          id: 'gas-reduction', 
          name: 'Gas Reduction', 
          color: '#2d5a2d',
          data: [
            { year: 2030, min: -40, mean: -45, max: -50 },
            { year: 2040, min: -50, mean: -55, max: -60 },
            { year: 2050, min: -70, mean: -75, max: -80 },
            { year: 2060, min: -100, mean: -105, max: -110 }
          ]
        },
        { 
          id: 'total-fossil-reduction', 
          name: 'Total Fossil Reduction', 
          color: '#b8860b',
          data: [
            { year: 2030, min: -180, mean: -195, max: -210 },
            { year: 2040, min: -260, mean: -275, max: -290 },
            { year: 2050, min: -350, mean: -365, max: -380 },
            { year: 2060, min: -450, mean: -465, max: -480 }
          ]
        },
        { 
          id: 'renewable-increase', 
          name: 'Renewable Increase', 
          color: '#8b2635',
          data: [
            { year: 2030, min: 120, mean: 130, max: 140 },
            { year: 2040, min: 180, mean: 190, max: 200 },
            { year: 2050, min: 240, mean: 250, max: 260 },
            { year: 2060, min: 300, mean: 310, max: 320 }
          ]
        }
      ],
      'ghg-emissions': [
        { 
          id: 'co2', 
          name: 'CO2 Emissions', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 720, mean: 780, max: 840 },
            { year: 2040, min: 650, mean: 710, max: 770 },
            { year: 2050, min: 580, mean: 640, max: 700 },
            { year: 2060, min: 510, mean: 570, max: 630 }
          ]
        },
        { 
          id: 'methane', 
          name: 'Methane (CH4)', 
          color: '#2d5a2d',
          data: [
            { year: 2030, min: 140, mean: 160, max: 180 },
            { year: 2040, min: 130, mean: 150, max: 170 },
            { year: 2050, min: 120, mean: 140, max: 160 },
            { year: 2060, min: 110, mean: 130, max: 150 }
          ]
        },
        { 
          id: 'nitrous-oxide', 
          name: 'Nitrous Oxide (N2O)', 
          color: '#b8860b',
          data: [
            { year: 2030, min: 75, mean: 85, max: 95 },
            { year: 2040, min: 70, mean: 80, max: 90 },
            { year: 2050, min: 65, mean: 75, max: 85 },
            { year: 2060, min: 60, mean: 70, max: 80 }
          ]
        },
        { 
          id: 'fluorinated', 
          name: 'Fluorinated Gases', 
          color: '#8b2635',
          data: [
            { year: 2030, min: 25, mean: 35, max: 45 },
            { year: 2040, min: 30, mean: 40, max: 50 },
            { year: 2050, min: 35, mean: 45, max: 55 },
            { year: 2060, min: 40, mean: 50, max: 60 }
          ]
        },
        { 
          id: 'total-ghg', 
          name: 'Total GHG', 
          color: '#2f4f4f',
          data: [
            { year: 2030, min: 960, mean: 1060, max: 1160 },
            { year: 2040, min: 880, mean: 980, max: 1080 },
            { year: 2050, min: 800, mean: 900, max: 1000 },
            { year: 2060, min: 720, mean: 820, max: 920 }
          ]
        }
      ]
    };
  }, []);

  // Function to generate shaded area colors
  const generateColors = (baseColor) => {
    // Convert hex to RGB
    const hex = baseColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    return {
      line: baseColor,
      lightShade: `rgba(${r}, ${g}, ${b}, 0.3)`, // Light shade for min to mean
      darkShade: `rgba(${r}, ${g}, ${b}, 0.5)`   // Darker shade for mean to max
    };
  };

  // Chart configurations using static data
  const chartConfigs = {
    'final-energy': {
      title: 'Final Energy Consumption',
      charts: staticData['final-energy']
    },
    'primary-energy': {
      title: 'Primary Energy Sources',
      charts: staticData['primary-energy']
    },
    'energy-per-capita': {
      title: 'Energy Consumption per Capita',
      charts: staticData['energy-per-capita']
    },
    'ghg-ebt': {
      title: 'Emissions by Technology (EBT)',
      charts: staticData['ghg-ebt']
    },
    'ghg-fossil-reduction': {
      title: 'Fossil Energy Reduction',
      charts: staticData['ghg-fossil-reduction']
    },
    'ghg-emissions': {
      title: 'Total GHG Emissions',
      charts: staticData['ghg-emissions']
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
    { id: 'final-energy', name: 'Final Energy', hasSubmenu: false },
    { id: 'primary-energy', name: 'Primary Energy', hasSubmenu: false },
    { id: 'energy-per-capita', name: 'Energy per Capita', hasSubmenu: false },
    {
      id: 'ghg',
      name: 'Greenhouse Gas (GHG) Reduction',
      hasSubmenu: true,
      submenu: [
        { id: 'ghg-ebt', name: 'EBT' },
        { id: 'ghg-fossil-reduction', name: 'Fossil Energy Reduction' },
        { id: 'ghg-emissions', name: 'Emissions' }
      ]
    }
  ];

  const currentConfig = chartConfigs[activeMenu];
  const currentSelected = selectedCharts[activeMenu] || {};

  // Prepare chart data with proper structure for dual shaded areas
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

  // Prepare comparison data for bar chart view
  const comparisonData = useMemo(() => {
    if (!currentConfig || viewMode !== 'comparison') return [];
    
    return selectedYears.map(year => {
      const dataPoint = { year };
      currentConfig.charts.forEach(chart => {
        if (currentSelected[chart.id]) {
          const yearData = chart.data.find(d => d.year === year);
          if (yearData) {
            dataPoint[chart.id] = yearData.mean;
          }
        }
      });
      return dataPoint;
    });
  }, [currentConfig, currentSelected, selectedYears, viewMode]);

  const toggleYear = (year) => {
    setSelectedYears(prev => 
      prev.includes(year) 
        ? prev.filter(y => y !== year)
        : [...prev, year].sort()
    );
  };

  const getUnit = (menuId) => {
    switch(menuId) {
      case 'final-energy':
      case 'primary-energy':
        return 'TWh';
      case 'energy-per-capita':
        return 'MWh/person';
      case 'ghg-ebt':
      case 'ghg-emissions':
        return 'Mt CO2eq';
      case 'ghg-fossil-reduction':
        return 'Mt CO2eq change';
      default:
        return 'Units';
    }
  };

  const exportData = () => {
    const dataToExport = viewMode === 'comparison' ? comparisonData : chartData;
    const csvContent = [
      // Header
      ['Year', ...currentConfig.charts.filter(c => currentSelected[c.id]).map(c => c.name)],
      // Data rows
      ...dataToExport.map(row => [
        row.year,
        ...currentConfig.charts.filter(c => currentSelected[c.id]).map(c => 
          viewMode === 'comparison' ? row[c.id] : row[`${c.id}_mean`]
        )
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeMenu}_data.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const relevantData = [];
      
      // Group data by chart
      const chartGroups = {};
      payload.forEach(entry => {
        if (entry.dataKey) {
          const [chartId, type] = entry.dataKey.split('_');
          if (!chartGroups[chartId]) {
            chartGroups[chartId] = {};
          }
          chartGroups[chartId][type] = entry.value;
        }
      });

      // Convert to display format
      Object.keys(chartGroups).forEach(chartId => {
        const chart = currentConfig.charts.find(c => c.id === chartId);
        const data = chartGroups[chartId];
        if (chart && data.mean !== undefined) {
          relevantData.push({
            name: chart.name,
            color: chart.color,
            min: data.min,
            mean: data.mean,
            max: data.max
          });
        }
      });

      return (
        <div className="bg-white p-4 border rounded-lg shadow-lg min-w-64">
          <p className="font-semibold text-lg mb-3">{`Year: ${label}`}</p>
          {relevantData.map((item) => (
            <div key={item.name} className="mb-2">
              <div className="flex items-center gap-2 mb-1">
                <div 
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="font-medium">{item.name}</span>
              </div>
              <div className="text-sm text-gray-600 ml-5">
                <div>Min: <span className="font-medium">{item.min?.toLocaleString()}</span></div>
                <div>Mean: <span className="font-medium text-gray-800">{item.mean?.toLocaleString()}</span></div>
                <div>Max: <span className="font-medium">{item.max?.toLocaleString()}</span></div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex h-screen bg-gray-50">
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
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {currentConfig?.title}
            </h1>
            <div className="flex items-center gap-2">
              <button
                onClick={exportData}
                className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Download size={16} />
                Export CSV
              </button>
              <button
                onClick={() => setShowDataTable(!showDataTable)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Table size={16} />
                {showDataTable ? 'Hide Table' : 'Show Table'}
              </button>
            </div>
          </div>
          
          {/* View Mode Toggle */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Settings size={20} />
                <span className="font-medium">Chart Settings</span>
              </div>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('uncertainty')}
                  className={`flex items-center gap-2 px-3 py-1 rounded transition-colors ${
                    viewMode === 'uncertainty' 
                      ? 'bg-white shadow-sm text-blue-600' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <TrendingUp size={16} />
                  Uncertainty View
                </button>
                <button
                  onClick={() => setViewMode('comparison')}
                  className={`flex items-center gap-2 px-3 py-1 rounded transition-colors ${
                    viewMode === 'comparison' 
                      ? 'bg-white shadow-sm text-blue-600' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <BarChart3 size={16} />
                  Comparison View
                </button>
              </div>
            </div>
            
            {/* Year Selection for Comparison Mode */}
            {viewMode === 'comparison' && (
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-700 mb-2 block">Select Years:</span>
                <div className="flex gap-2">
                  {[2030, 2040, 2050, 2060].map(year => (
                    <button
                      key={year}
                      onClick={() => toggleYear(year)}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        selectedYears.includes(year)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Chart toggles */}
            <div className="flex items-center gap-2 mb-3">
              <Filter size={20} />
              <span className="font-medium">Chart Visibility</span>
              <span className="text-sm text-gray-500">({getUnit(activeMenu)})</span>
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
            {viewMode === 'uncertainty' ? (
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
                
                {/* Render areas and lines for each selected chart */}
                {currentConfig?.charts.map((chart) => {
                  if (!currentSelected[chart.id]) return null;
                  
                  const colors = generateColors(chart.color);
                  
                  return (
                    <React.Fragment key={chart.id}>
                      {/* Area from min to max */}
                      <Area
                        type="monotone"
                        dataKey={`${chart.id}_max`}
                        stroke="none"
                        fill={colors.lightShade}
                        fillOpacity={0.3}
                        stackId={chart.id}
                      />
                      <Area
                        type="monotone"
                        dataKey={`${chart.id}_min`}
                        stroke="none"
                        fill="white"
                        fillOpacity={1}
                        stackId={chart.id}
                      />
                      
                      {/* Mean line */}
                      <Line
                        type="monotone"
                        dataKey={`${chart.id}_mean`}
                        stroke={colors.line}
                        strokeWidth={2}
                        dot={{ fill: colors.line, strokeWidth: 2, r: 4 }}
                        name={chart.name}
                      />
                    </React.Fragment>
                  );
                })}
              </ComposedChart>
            ) : (
              <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    value?.toLocaleString() || 0,
                    currentConfig?.charts.find(c => c.id === name)?.name || name
                  ]}
                  labelFormatter={(label) => `Year: ${label}`}
                />
                <Legend 
                  formatter={(value) => currentConfig?.charts.find(c => c.id === value)?.name || value}
                />
                
                {currentConfig?.charts.map((chart) => {
                  if (!currentSelected[chart.id]) return null;
                  
                  return (
                    <Bar
                      key={chart.id}
                      dataKey={chart.id}
                      fill={chart.color}
                      name={chart.name}
                    />
                  );
                })}
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>

        {/* Data Table */}
        {showDataTable && <DataTable />}

        {/* Legend for uncertainty bands */}
        <div className="mt-4 bg-white rounded-lg shadow-sm p-4">
          <h3 className="font-medium mb-2">Chart Legend</h3>
          {viewMode === 'uncertainty' ? (
            <div className="text-sm text-gray-600">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-4 h-0.5 bg-gray-800"></div>
                <span>Mean projection</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-3 bg-gray-300 opacity-50"></div>
                <span>Uncertainty range (min-max)</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Hover over data points to see detailed min/mean/max values for each year.
              </div>
            </div>
          ) : (
            <div className="text-sm text-gray-600">
              <div className="text-xs text-gray-500">
                Bar chart showing mean projections for selected years. Use the year toggles above to customize the comparison.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnergyDashboard;
