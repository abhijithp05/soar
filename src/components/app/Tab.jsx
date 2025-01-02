import React, { useState } from 'react';
import AvatarIcon from 'assets/icons/avatar.webp';
import { initialSettings } from 'constants/mockData';
import Icon from 'components/ui/Icon';
import { Button, Input } from 'components/ui';
import { settingsFields, tabs } from 'constants/appConstants';
import { useFormData } from 'hooks/useFormData';
import useLocalStorage from 'hooks/useLocalStorage';
import { useFormError } from 'hooks/useFormError';

const Tab = () => {
  // State to manage the active tab index
  const [activeTab, setActiveTab] = useState(0);
  const [settingDetail, setSettingDetails] = useLocalStorage(
    'settings',
    initialSettings
  );
  const [formData, setFormData] = useFormData(settingsFields, settingDetail);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = useFormError(settingsFields, formData);
    setError(() => error);
    if (Object.entries(error).length === 0) setSettingDetails(formData);
  };

  return (
    <div
      className="w-full mx-auto h-full"
      role="tabpanel"
      aria-labelledby={`tab-${activeTab}`}
    >
      {/* Tab navigation */}
      <div className="flex border-b border-gray-200 h-[10%]" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            id={`tab-${index}`}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tabpanel-${index}`}
            onClick={() => setActiveTab(index)}
            disabled={tab.disabled}
            className={`py-2 px-4 -mb-px text-sm font-medium focus:outline-none ${
              activeTab === index
                ? 'border-b-2 border-black text-black'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="p-2 mt-4 flex flex-col w-[95%] justify-self-center h-[90%] justify-between gap-4 min-h-[100%]"
      >
        <div className="flex flex-col items-center lg:items-start lg:flex-row w-full gap-4 lg:h-[90%]">
          <Icon src={AvatarIcon} height="90px" width="90px" alt="User Avatar" />

          <div className="flex flex-col gap-5 h-full lg:h-60 w-full items-center">
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
                    errormessage={error[field]}
                    className="px-4 py-2 border h-12 md:w-[400px] rounded-2xl shadow-sm focus:outline-none focus:light-gray focus:light-gray"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end h-[10%]">
          <Button
            type="submit"
            onClick={handleSubmit}
            className="px-2 py-2  h-12 w-48 text-sm rounded-2xl font-medium text-white bg-black "
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Tab);
