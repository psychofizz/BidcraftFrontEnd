import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, HomeIcon, ChevronRightIcon } from "@heroicons/react/solid";

const PageHeader = ({ title, breadcrumbs }) => {
    const navigate = useNavigate();

    return (
        <header className="bg-bidcraft-modal-bg text-white rounded-xl mb-6 p-4">
            <div className="flex items-center flex-wrap">
                <button
                    onClick={() => navigate(-1)}
                    className="text-blue-300 hover:text-blue-100 transition-colors mr-3"
                    aria-label="Go back"
                >
                    <ArrowLeftIcon className="h-6 w-6" />
                </button>

                <nav className="flex items-center mr-4" aria-label="Breadcrumb">
                    <ol className="flex items-center">
                        <li>
                            <Link
                                to="/"
                                className="text-blue-300 hover:text-blue-100 transition-colors"
                                aria-label="Home"
                            >
                                <HomeIcon className="h-5 w-5" />
                            </Link>
                        </li>
                        {breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-2" />
                                <li>
                                    {index === breadcrumbs.length - 1 ? (
                                        <span className="text-gray-200">{crumb.text}</span>
                                    ) : (
                                        <Link
                                            to={crumb.link}
                                            className="text-blue-300 hover:text-blue-100 transition-colors"
                                        >
                                            {crumb.text}
                                        </Link>
                                    )}
                                </li>
                            </React.Fragment>
                        ))}
                    </ol>
                </nav>
            </div>

            <h1 className="text-2xl font-bold mt-2">{title}</h1>
        </header>
    );
};

export default PageHeader;