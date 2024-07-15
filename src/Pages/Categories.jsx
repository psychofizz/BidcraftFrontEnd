import React from "react";
import { useParams, Link } from "react-router-dom";
import MainNavbar from "../Components/navBar/mainNavbar";
import Footer from "../Components/page-essentials/Footer";
import PageHeader from "../Components/page-essentials/PageHeader";

const Categories = () => {
    const { category } = useParams();

    const breadcrumbs = [
        { text: "Categorias", link: "/home" },
        { text: category || "Categoría", link: `/category/${category}` }
    ];

    return (
        <div>
            <MainNavbar />
            <PageHeader title={category || "Categoría"} breadcrumbs={breadcrumbs} />

            <Footer />
        </div>
    );
}

export default Categories;