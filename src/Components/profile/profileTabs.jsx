import React from 'react';

const TabItem = ({ href, target, role, ariaControls, ariaSelected, children, className }) => {
    return (
        <a
            href={href}
            className={className}
            data-twe-toggle="pill"
            data-twe-target={target}
            role={role}
            aria-controls={ariaControls}
            aria-selected={ariaSelected}
        >
            {children}
        </a>
    );
};

const TabHeader = () => {
    return (
        <ul
            className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0 "
            role="tablist"
            data-twe-nav-ref>
            <li role="presentation">
                <TabItem
                    href="#tabs-home"
                    target="#tabs-home"
                    role="tab"
                    ariaControls="tabs-home"
                    ariaSelected="true"
                    className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                >
                    Home
                </TabItem>
            </li>
            <li role="presentation">
                <TabItem
                    href="#tabs-profile"
                    target="#tabs-profile"
                    role="tab"
                    ariaControls="tabs-profile"
                    ariaSelected="false"
                    className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                >
                    Profile
                </TabItem>
            </li>
            <li role="presentation">
                <TabItem
                    href="#tabs-messages"
                    target="#tabs-messages"
                    role="tab"
                    ariaControls="tabs-messages"
                    ariaSelected="false"
                    className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                >
                    Messages
                </TabItem>
            </li>
            <li role="presentation">
                <TabItem
                    href="#tabs-contact"
                    target="#tabs-contact"
                    role="tab"
                    ariaControls="tabs-contact"
                    ariaSelected="false"
                    className="disabled pointer-events-none my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
                >
                    Contact
                </TabItem>
            </li>
        </ul>
    );
};

export default TabHeader;
