import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabPanels = ({ tabs, activeTab }) => {
    const [visibleTab, setVisibleTab] = useState(activeTab);

    useEffect(() => {
        if (activeTab) {
            const timer = setTimeout(() => {
                setVisibleTab(activeTab);
            }, 200);

            return () => clearTimeout(timer);
        }
    }, [activeTab]);

    return (
        <div className="mb-6 min-h-[400]">
            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    className={classNames(
                        'transition-opacity duration-200 ease-in-out',
                        {
                            'opacity-100': activeTab === tab.id,
                            'opacity-0': activeTab !== tab.id,
                            'block': visibleTab === tab.id,
                            'hidden': visibleTab !== tab.id,
                        }
                    )}
                    id={tab.id}
                    role="tabpanel"
                    aria-labelledby={`${tab.id}-tab`}
                >
                    {tab.content}
                </div>
            ))}
        </div>
    );
};

TabPanels.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired
        })
    ).isRequired,
    activeTab: PropTypes.string.isRequired
};

export default TabPanels;
