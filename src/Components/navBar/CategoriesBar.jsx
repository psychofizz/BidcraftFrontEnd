import React from "react";
import CategoryItem from "./CategoryItem";

const CategoriesBar = () => {
  return (
    <div className="bg-black text-white flex overflow-x-auto ">
      <span className="p-2 font-bold">Categorias </span>
      <CategoryItem
        name="Calzado"
        url="/busqueda?category=calzado"
        hoverText="Explora nuestra colección de calzado"
      />

      <CategoryItem
        name="Ropa"
        url="/busqueda?category=ropa"
        hoverText="Encuentra la mejor ropa"
      />

      <CategoryItem
        name="Accesorios"
        url="/busqueda?category=accesorios"
        hoverText="Descubre nuestros accesorios únicos"
      />

      <CategoryItem
        name="Electrónica"
        url="/busqueda?category=electronica"
        hoverText="Explora lo último en tecnología"
      />

      <CategoryItem
        name="Hogar"
        url="/busqueda?category=hogar"
        hoverText="Mejora tu hogar con nuestros productos"
      />

      <CategoryItem
        name="Juguetes"
        url="/busqueda?category=juguetes"
        hoverText="Encuentra los mejores juguetes para los niños"
      />

      <CategoryItem
        name="Libros"
        url="/busqueda?category=libros"
        hoverText="Explora nuestra selección de libros"
      />

      <CategoryItem
        name="Deportes"
        url="/busqueda?category=deportes"
        hoverText="Todo lo que necesitas para tus actividades deportivas"
      />

      <CategoryItem
        name="Belleza"
        url="/busqueda?category=belleza"
        hoverText="Descubre nuestros productos de belleza"
      />

      <CategoryItem
        name="Automóviles"
        url="/busqueda?category=automoviles"
        hoverText="Encuentra lo mejor para tu coche"
      />
    </div>
  );
};

export default CategoriesBar;
