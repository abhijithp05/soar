import React, { useState } from 'react';
import { ReactComponent as AvatarIcon } from 'assets/icons/avatar.svg';
import { settingsFields } from 'constants/mockData';
import Icon from 'components/ui/Icon';
import { Button, Input } from 'components/ui';

const Tabs = () => {
  // State to manage the active tab index
  const [activeTab, setActiveTab] = useState(0);

  // Tab titles and content for demonstration
  const tabs = [
    { name: 'Edit Profile', disabled: false },
    { name: 'Preferences', disabled: true },
    { name: 'Security', disabled: true },
  ];

  const [formData, setFormData] = useState(
    settingsFields.reduce((acc, { field }) => {
      acc[field] = '';
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <div className="w-full mx-auto h-full">
      {/* Tab navigation */}
      <div className="flex border-b border-gray-200 h-[10%]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            disabled={tab.disabled}
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
      <div className="p-2 flex flex-col w-full h-[90%]">
        <div className="flex flex-row w-full gap-4 h-[90%]">
          <Icon icon={AvatarIcon} />

          <div className="flex flex-col gap-5 h-60 w-full items-end">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {settingsFields.map(({ label, field, type }) => (
                <div key={field} className="flex flex-col items-start">
                  <label
                    htmlFor={field}
                    className="text-base leading-5 font-normal  text-black mb-1"
                  >
                    {label}
                  </label>
                  <Input
                    type={type}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="px-4 py-2 border h-12 md:w-96 rounded-2xl shadow-sm focus:outline-none focus:light-gray focus:light-gray"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end h-[10%]">
          <Button
            type="submit"
            className="px-2 py-2  h-12 w-48 text-sm rounded-2xl font-medium text-white bg-black "
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
