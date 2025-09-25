import React, { useState, useMemo } from 'react';
import { LineChart, Line, Area, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Menu, X, ChevronDown, Filter } from 'lucide-react';

const EnergyDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('final-energy');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCharts, setSelectedCharts] = useState({});

  // Sample data generator with more realistic ranges
  const generateData = (baseValue, variance) => {
    return Array.from({ length: 10 }, (_, i) => {
      const year = 2015 + i;
      const mean = baseValue + (Math.random() - 0.5) * variance * 0.3;
      const minVariation = Math.random() * variance * 0.2;
      const maxVariation = Math.random() * variance * 0.3;
      const min = mean - minVariation;
      const max = mean + maxVariation;
      return { year, mean: Math.round(mean * 100) / 100, min: Math.round(min * 100) / 100, max: Math.round(max * 100) / 100 };
    });
  };

  // Function to generate shaded colors
  const generateColors = (baseColor) => {
    // Convert hex to RGB
    const hex = baseColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Generate lighter color for min-to-mean area (30% opacity equivalent)
    const lightR = Math.round(r + (255 - r) * 0.7);
    const lightG = Math.round(g + (255 - g) * 0.7);
    const lightB = Math.round(b + (255 - b) * 0.7);
    
    // Generate medium color for mean-to-max area (60% opacity equivalent)
    const mediumR = Math.round(r + (255 - r) * 0.4);
    const mediumG = Math.round(g + (255 - g) * 0.4);
    const mediumB = Math.round(b + (255 - b) * 0.4);
    
    return {
      line: baseColor,
      lightArea: `rgb(${lightR}, ${lightG}, ${lightB})`,
      mediumArea: `rgb(${mediumR}, ${mediumG}, ${mediumB})`
    };
  };

  // Chart configurations with color variants
  const chartConfigs = {
    'final-energy': {
      title: 'Final Energy Consumption',
      charts: [
        { id: 'electricity', name: 'Electricity', data: generateData(1200, 200), color: '#8884d8' },
        { id: 'transport', name: 'Transportation', data: generateData(900, 150), color: '#82ca9d' },
        { id: 'heating', name: 'Heating & Cooling', data: generateData(800, 120), color: '#ffc658' },
        { id: 'industrial', name: 'Industrial Process', data: generateData(1100, 180), color: '#ff7c7c' },
        { id: 'residential', name: 'Residential', data: generateData(600, 100), color: '#8dd1e1' }
      ]
    },
    'primary-energy': {
      title: 'Primary Energy Sources',
      charts: [
        { id: 'coal', name: 'Coal', data: generateData(2000, 300), color: '#2c2c2c' },
        { id: 'oil', name: 'Oil', data: generateData(1800, 250), color: '#8884d8' },
        { id: 'gas', name: 'Natural Gas', data: generateData(1500, 200), color: '#82ca9d' },
        { id: 'renewable', name: 'Renewables', data: generateData(400, 80), color: '#ffc658' },
        { id: 'nuclear', name: 'Nuclear', data: generateData(600, 100), color: '#ff7c7c' }
      ]
    },
    'energy-per-capita': {
      title: 'Energy Consumption per Capita',
      charts: [
        { id: 'total-capita', name: 'Total per Capita', data: generateData(150, 30), color: '#8884d8' },
        { id: 'urban-capita', name: 'Urban per Capita', data: generateData(180, 35), color: '#82ca9d' },
        { id: 'rural-capita', name: 'Rural per Capita', data: generateData(120, 25), color: '#ffc658' },
        { id: 'industrial-capita', name: 'Industrial per Capita', data: generateData(200, 40), color: '#ff7c7c' },
        { id: 'commercial-capita', name: 'Commercial per Capita', data: generateData(90, 20), color: '#8dd1e1' }
      ]
    },
    'ghg-ebt': {
      title: 'Emissions by Technology (EBT)',
      charts: [
        { id: 'coal-emissions', name: 'Coal Emissions', data: generateData(500, 80), color: '#2c2c2c' },
        { id: 'gas-emissions', name: 'Gas Emissions', data: generateData(300, 50), color: '#8884d8' },
        { id: 'transport-emissions', name: 'Transport Emissions', data: generateData(400, 60), color: '#82ca9d' },
        { id: 'industrial-emissions', name: 'Industrial Emissions', data: generateData(350, 55), color: '#ffc658' },
        { id: 'residential-emissions', name: 'Residential Emissions', data: generateData(200, 35), color: '#ff7c7c' }
      ]
    },
    'ghg-fossil-reduction': {
      title: 'Fossil Energy Reduction',
      charts: [
        { id: 'coal-reduction', name: 'Coal Reduction', data: generateData(-50, 15), color: '#2c2c2c' },
        { id: 'oil-reduction', name: 'Oil Reduction', data: generateData(-40, 12), color: '#8884d8' },
        { id: 'gas-reduction', name: 'Gas Reduction', data: generateData(-30, 10), color: '#82ca9d' },
        { id: 'total-fossil-reduction', name: 'Total Fossil Reduction', data: generateData(-120, 25), color: '#ffc658' },
        { id: 'renewable-increase', name: 'Renewable Increase', data: generateData(80, 20), color: '#ff7c7c' }
      ]
    },
    'ghg-emissions': {
      title: 'Total GHG Emissions',
      charts: [
        { id: 'co2', name: 'CO2 Emissions', data: generateData(800, 120), color: '#8884d8' },
        { id: 'methane', name: 'Methane (CH4)', data: generateData(150, 25), color: '#82ca9d' },
        { id: 'nitrous-oxide', name: 'Nitrous Oxide (N2O)', data: generateData(80, 15), color: '#ffc658' },
        { id: 'fluorinated', name: 'Fluorinated Gases', data: generateData(30, 8), color: '#ff7c7c' },
        { id: 'total-ghg', name: 'Total GHG', data: generateData(1060, 150), color: '#8dd1e1' }
      ]
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

  // Prepare chart data with proper structure for range areas
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
          // Create range areas
          dataPoint[`${chart.id}_range_lower`] = [yearData.min, yearData.mean];
          dataPoint[`${chart.id}_range_upper`] = [yearData.mean, yearData.max];
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

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-medium">{`Year: ${label}`}</p>
          {payload.map((entry, index) => {
            if (entry.dataKey.includes('_mean')) {
              const chartId = entry.dataKey.replace('_mean', '');
              const chart = currentConfig.charts.find(c => c.id === chartId);
              const minValue = entry.payload[`${chartId}_min`];
              const maxValue = entry.payload[`${chartId}_max`];
              
              return (
                <div key={index} className="mt-1">
                  <p style={{ color: entry.color }}>
                    {`${chart?.name}: ${entry.value?.toFixed(2)}`}
                  </p>
                  <p className="text-xs text-gray-500">
                    {`Range: ${minValue?.toFixed(2)} - ${maxValue?.toFixed(2)}`}
                  </p>
                </div>
              );
            }
            return null;
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
                      <Legend />
                      
                      {currentConfig.charts.map((chart) => {
                        if (!currentSelected[chart.id]) return null;
                        
                        const colors = generateColors(chart.color);
                        
                        return (
                          <React.Fragment key={chart.id}>
                            {/* Area from min to max */}
                            <Area
                              type="monotone"
                              dataKey={`${chart.id}_max`}
                              stroke="none"
                              fill={colors.lightArea}
                              fillOpacity={1}
                            />
                            {/* Area from min to mean (creating the lower shaded region) */}
                            <Area
                              type="monotone"
                              dataKey={`${chart.id}_min`}
                              stroke="none"
                              fill="#ffffff"
                              fillOpacity={1}
                            />
                            {/* Area from mean to max (creating the upper shaded region) */}
                            <Area
                              type="monotone"
                              dataKey={`${chart.id}_max`}
                              stroke="none"
                              fill={colors.mediumArea}
                              fillOpacity={1}
                            />
                            <Area
                              type="monotone"
                              dataKey={`${chart.id}_mean`}
                              stroke="none"
                              fill="#ffffff"
                              fillOpacity={1}
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
