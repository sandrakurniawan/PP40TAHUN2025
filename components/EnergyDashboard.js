import React, { useState, useMemo } from 'react';
import { LineChart, Line, Area, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Menu, X, ChevronDown, Filter } from 'lucide-react';

const EnergyDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('final-energy');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCharts, setSelectedCharts] = useState({});

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

  // Function to generate transparent colors for overlapping
  const generateColors = (baseColor) => {
    // Convert hex to RGB
    const hex = baseColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    return {
      line: baseColor,
      areaFill: `rgba(${r}, ${g}, ${b}, 0.15)` // Single transparent fill for uncertainty band
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

  // Improved Custom Tooltip - shows range in format like reference
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // Filter out area components and get unique chart entries
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

      // Only show entries that have complete data (mean values)
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
  );
};

export default EnergyDashboard;
