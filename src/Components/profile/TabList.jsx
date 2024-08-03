import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabList = ({ tabs, activeTab, onTabClick }) => (
    <div className='flex justify-center align-middle '>
        <ul className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0 " role="tablist">
            {tabs.map((tab) => (
                <li role="presentation" key={tab.id}>
                    <a
                        href={`#${tab.id}`}
                        className={classNames(
                            'my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight',
                            {
                                'text-white hover:isolate hover:border-transparent hover:bg-bidcraft-main hover:text-black focus:isolate focus:border-transparent transition-all': activeTab !== tab.id,
                                'border-bidcraft-main text-bidcraft-main transition-all': activeTab === tab.id,
                                'dark:text-white/50 dark:hover:bg-neutral-700/60 dark:border-primary dark:data-[twe-nav-active]:text-primary transition-all': activeTab === tab.id,
                                'pointer-events-none text-neutral-400 dark:text-neutral-600': tab.disabled
                            }
                        )}
                        onClick={() => !tab.disabled && onTabClick(tab.id)}
                        role="tab"
                        aria-controls={tab.id}
                        aria-selected={activeTab === tab.id}
                    >
                        {tab.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

TabList.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            disabled: PropTypes.bool
        })
    ).isRequired,
    activeTab: PropTypes.string.isRequired,
    onTabClick: PropTypes.func.isRequired
};

export default TabList;
