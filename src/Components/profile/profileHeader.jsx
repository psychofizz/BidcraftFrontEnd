import React from 'react';

function ProfileHeader({ user }) {
    return (
        <div>
            <section className="w-full overflow-hidden dark:bg-gray-900">
                <div className="w-full mx-auto relative">
                    <img
                        src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="User Cover"
                        className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                    <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
                        <img
                            src={`https://ui-avatars.com/api/?name=${user.first_name}&background=random`}
                            alt={user.first_name}
                            className="w-48 h-48 rounded-full border-2 border-white shadow-lg"
                        />
                        <div className="position relative sm:absolute sm:ml-[80%] lg:ml-[100%]">
                            <a
                                className="mt-4 flex items-center rounded bg-indigo-600 px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 active:bg-indigo-800 active:shadow-lg dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                href="/verification"
                                data-twe-dropdown-item-ref
                            >
                                Verificar
                            </a>
                        </div>
                        <h1 className="text-center text-white text-4xl font-serif">
                            {user.first_name + " " + user.last_name}
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProfileHeader;
