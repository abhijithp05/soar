import React, { useState } from 'react';

const Tabs = () => {
  // State to manage the active tab index
  const [activeTab, setActiveTab] = useState(0);

  // Tab titles and content for demonstration
  const tabs = [
    { name: 'Tab 1', content: 'Content for Tab 1' },
    { name: 'Tab 2', content: 'Content for Tab 2' },
    { name: 'Tab 3', content: 'Content for Tab 3' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      {/* Tab navigation */}
      <div className="flex border-b border-gray-200 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 -mb-px text-sm font-medium focus:outline-none ${
              activeTab === index
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-4 border rounded-lg bg-white">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default Tabs;
