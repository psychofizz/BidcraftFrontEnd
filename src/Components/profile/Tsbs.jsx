import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TabList from './TabList';
import TabPanels from './TabPanel';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <TabList tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
            <TabPanels tabs={tabs} activeTab={activeTab} />
        </div>
    );
};

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
            disabled: PropTypes.bool
        })
    ).isRequired
};

export default Tabs;
