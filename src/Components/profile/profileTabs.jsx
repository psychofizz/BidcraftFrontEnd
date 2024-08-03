import React from 'react';

function TabItem({ href, target, ariaControls, ariaSelected, children }) {
    return (
        <li role="presentation" className="flex-grow basis-0 text-center">
            <a
                href={href}
                className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-white hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                data-twe-toggle="pill"
                data-twe-target={target}
                role="tab"
                aria-controls={ariaControls}
                aria-selected={ariaSelected}
            >
                {children}
            </a>
        </li>
    );
}

function ProfileTabs() {
    return (
        <ul className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0" role="tablist" data-twe-nav-ref>
            <TabItem
                href="#tabs-home02"
                target="#tabs-home02"
                ariaControls="tabs-home02"
                ariaSelected="true"
            >
                Historial de Subastas
            </TabItem>
            <TabItem
                href="#tabs-resenas"
                target="#tabs-resenas"
                ariaControls="tabs-resenas"
                ariaSelected="false"
            >
                Reseñas
            </TabItem>
            <TabItem
                href="#tabs-miSubastas"
                target="#tabs-miSubastas"
                ariaControls="tabs-miSubastas"
                ariaSelected="false"
            >
                Mis subastas
            </TabItem>
        </ul>
    );
}

export default ProfileTabs;
