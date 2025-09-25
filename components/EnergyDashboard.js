import React, { useState, useMemo } from 'react';
import { LineChart, Line, Area, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Menu, X, ChevronDown, Filter } from 'lucide-react';

const EnergyDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('final-energy');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCharts, setSelectedCharts] = useState({});

  // Static data generator - now using useMemo to prevent regeneration
  const staticData = useMemo(() => {
    const generateData = (baseValue, variance) => {
      return Array.from({ length: 10 }, (_, i) => {
        const year = 2015 + i;
        // Use year as seed for consistent random values
        const seed1 = Math.sin(year * 12.9898 + i * 78.233) * 43758.5453;
        const seed2 = Math.sin(year * 15.9898 + i * 73.233) * 43758.5453;
        const seed3 = Math.sin(year * 18.9898 + i * 68.233) * 43758.5453;
        
        const random1 = (seed1 - Math.floor(seed1));
        const random2 = (seed2 - Math.floor(seed2));
        const random3 = (seed3 - Math.floor(seed3));
        
        const mean = baseValue + (random1 - 0.5) * variance * 0.3;
        const minVariation = random2 * variance * 0.2;
        const maxVariation = random3 * variance * 0.3;
        const min = mean - minVariation;
        const max = mean + maxVariation;
        return { 
          year, 
          mean: Math.round(mean * 100) / 100, 
          min: Math.round(min * 100) / 100, 
          max: Math.round(max * 100) / 100 
        };
      });
    };

    return {
      'final-energy': [
        { id: 'electricity', name: 'Electricity', data: generateData(1200, 200), color: '#684d7c' },
        { id: 'transport', name: 'Transportation', data: generateData(900, 150), color: '#2d5a2d' },
        { id: 'heating', name: 'Heating & Cooling', data: generateData(800, 120), color: '#b8860b' },
        { id: 'industrial', name: 'Industrial Process', data: generateData(1100, 180), color: '#8b2635' },
        { id: 'residential', name: 'Residential', data: generateData(600, 100), color: '#2f4f4f' }
      ],
      'primary-energy': [
        { id: 'coal', name: 'Coal', data: generateData(2000, 300), color: '#2c2c2c' },
        { id: 'oil', name: 'Oil', data: generateData(1800, 250), color: '#684d7c' },
        { id: 'gas', name: 'Natural Gas', data: generateData(1500, 200), color: '#2d5a2d' },
        { id: 'renewable', name: 'Renewables', data: generateData(400, 80), color: '#b8860b' },
        { id: 'nuclear', name: 'Nuclear', data: generateData(600, 100), color: '#8b2635' }
      ],
      'energy-per-capita': [
        { id: 'total-capita', name: 'Total per Capita', data: generateData(150, 30), color: '#684d7c' },
        { id: 'urban-capita', name: 'Urban per Capita', data: generateData(180, 35), color: '#2d5a2d' },
        { id: 'rural-capita', name: 'Rural per Capita', data: generateData(120, 25), color: '#b8860b' },
        { id: 'industrial-capita', name: 'Industrial per Capita', data: generateData(200, 40), color: '#8b2635' },
        { id: 'commercial-capita', name: 'Commercial per Capita', data: generateData(90, 20), color: '#2f4f4f' }
      ],
      'ghg-ebt': [
        { id: 'coal-emissions', name: 'Coal Emissions', data: generateData(500, 80), color: '#2c2c2c' },
        { id: 'gas-emissions', name: 'Gas Emissions', data: generateData(300, 50), color: '#684d7c' },
        { id: 'transport-emissions', name: 'Transport Emissions', data: generateData(400, 60), color: '#2d5a2d' },
        { id: 'industrial-emissions', name: 'Industrial Emissions', data: generateData(350, 55), color: '#b8860b' },
        { id: 'residential-emissions', name: 'Residential Emissions', data: generateData(200, 35), color: '#8b2635' }
      ],
      'ghg-fossil-reduction': [
        { id: 'coal-reduction', name: 'Coal Reduction', data: generateData(-50, 15), color: '#2c2c2c' },
        { id: 'oil-reduction', name: 'Oil Reduction', data: generateData(-40, 12), color: '#684d7c' },
        { id: 'gas-reduction', name: 'Gas Reduction', data: generateData(-30, 10), color: '#2d5a2d' },
        { id: 'total-fossil-reduction', name: 'Total Fossil Reduction', data: generateData(-120, 25), color: '#b8860b' },
        { id: 'renewable-increase', name: 'Renewable Increase', data: generateData(80, 20), color: '#8b2635' }
      ],
      'ghg-emissions': [
        { id: 'co2', name: 'CO2 Emissions', data: generateData(800, 120), color: '#684d7c' },
        { id: 'methane', name: 'Methane (CH4)', data: generateData(150, 25), color: '#2d5a2d' },
        { id: 'nitrous-oxide', name: 'Nitrous Oxide (N2O)', data: generateData(80, 15), color: '#b8860b' },
        { id: 'fluorinated', name: 'Fluorinated Gases', data: generateData(30, 8), color: '#8b2635' },
        { id: 'total-ghg', name: 'Total GHG', data: generateData(1060, 150), color: '#2f4f4f' }
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
      currentConfig.charts.forEach(chart => {
        const yearData = chart.data.find(d => d.year === year);
        if (yearData && currentSelected[chart.id]) {
          dataPoint[`${chart.id}_mean`] = yearData.mean;
          dataPoint[`${chart.id}_min`] = yearData.min;
          dataPoint[`${chart.id}_max`] = yearData.max;
          // Create separate data points for the two shaded areas
          dataPoint[`${chart.id}_lower_area`] = yearData.mean - yearData.min;
          dataPoint[`${chart.id}_upper_area`] = yearData.max - yearData.mean;
        }
      });
      return dataPoint;
    });
  }, [currentConfig, currentSelected]);

  const toggleChart = (chartId) => {
    setSelectedCharts(prev => ({
      ...prev,
      [activeMenu]: {
        ...prev[activeMenu],
        [chartId]: !prev[activeMenu]?.[chartId]
      }
    }));
  };

  // Simplified Custom Tooltip - only shows range values
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // Filter out area components from tooltip, only show lines and remove duplicates
      const linePayload = payload.filter(entry => entry.dataKey && entry.dataKey.includes('_mean'));
      
      // Remove duplicates by creating a unique set based on chart ID
      const uniqueEntries = [];
      const seenChartIds = new Set();
      
      linePayload.forEach(entry => {
        const chartId = entry.dataKey.replace('_mean', '');
        if (!seenChartIds.has(chartId)) {
          seenChartIds.add(chartId);
          uniqueEntries.push(entry);
        }
      });
      
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-medium mb-2">{`Year: ${label}`}</p>
          {uniqueEntries.map((entry, index) => {
            const chartId = entry.dataKey.replace('_mean', '');
            const chart = currentConfig.charts.find(c => c.id === chartId);
            const minValue = entry.payload[`${chartId}_min`];
            const maxValue = entry.payload[`${chartId}_max`];
            
            return (
              <div key={index} className="mb-1">
                <p style={{ color: entry.color }} className="font-medium">
                  {`${chart?.name}: ${minValue?.toFixed(2)} - ${maxValue?.toFixed(2)}`}
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
      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Energy Dashboard</h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="mt-4">
          {menuItems.map((item) => (
            <div key={item.id}>
              {!item.hasSubmenu ? (
                <button
                  onClick={() => {
                    setActiveMenu(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                    activeMenu === item.id ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <div>
                  <div className="px-4 py-3 text-gray-600 font-medium flex items-center">
                    {item.name}
                    <ChevronDown className="h-4 w-4 ml-auto" />
                  </div>
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => {
                        setActiveMenu(subItem.id);
                        setIsSidebarOpen(false);
                      }}
                      className={`w-full px-8 py-2 text-left hover:bg-gray-100 transition-colors ${
                        activeMenu === subItem.id ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' : 'text-gray-600'
                      }`}
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-600 lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
              <h2 className="ml-2 text-lg font-semibold text-gray-800">
                {currentConfig?.title || 'Dashboard'}
              </h2>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4">
          {currentConfig && (
            <div className="space-y-6">
              {/* Filter Panel */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <Filter className="h-5 w-5 mr-2 text-gray-500" />
                  <h3 className="text-lg font-medium text-gray-800">Chart Filters</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                  {currentConfig.charts.map((chart) => (
                    <label key={chart.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={currentSelected[chart.id] || false}
                        onChange={() => toggleChart(chart.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: chart.color }}
                        />
                        <span className="text-sm text-gray-700">{chart.name}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="year" 
                        stroke="#666"
                        fontSize={12}
                      />
                      <YAxis 
                        stroke="#666"
                        fontSize={12}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend 
                        wrapperStyle={{ paddingTop: '20px' }}
                        iconType="line"
                      />
                      
                      {currentConfig.charts.map((chart) => {
                        if (!currentSelected[chart.id]) return null;
                        
                        const colors = generateColors(chart.color);
                        
                        return (
                          <React.Fragment key={chart.id}>
                            {/* Lower shaded area (min to mean) */}
                            <Area
                              type="monotone"
                              dataKey={`${chart.id}_mean`}
                              stroke="none"
                              fill={colors.lightShade}
                              stackId={`lower_${chart.id}`}
                            />
                            <Area
                              type="monotone"
                              dataKey={`${chart.id}_min`}
                              stroke="none"
                              fill="transparent"
                              stackId={`lower_${chart.id}`}
                            />
                            
                            {/* Upper shaded area (mean to max) */}
                            <Area
                              type="monotone"
                              dataKey={`${chart.id}_max`}
                              stroke="none"
                              fill={colors.darkShade}
                              stackId={`upper_${chart.id}`}
                            />
                            <Area
                              type="monotone"
                              dataKey={`${chart.id}_mean`}
                              stroke="none"
                              fill="transparent"
                              stackId={`upper_${chart.id}`}
                            />
                            
                            {/* Mean line on top */}
                            <Line
                              type="monotone"
                              dataKey={`${chart.id}_mean`}
                              stroke={colors.line}
                              strokeWidth={3}
                              dot={{ fill: colors.line, strokeWidth: 2, r: 4 }}
                              activeDot={{ r: 6, stroke: colors.line, strokeWidth: 2, fill: '#fff' }}
                              name={chart.name}
                            />
                          </React.Fragment>
                        );
                      })}
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Sidebar overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default EnergyDashboard;
