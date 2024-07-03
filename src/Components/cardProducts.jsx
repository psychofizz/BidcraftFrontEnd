function CardProducts({nombreProducto,descripcion,precio}) {
    return( <section className="w-full" id="historialSubastas">
                
        <div className="mt-10 bg-white shadow-2xl overflow-hidden w-full">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img
                        className="h-48 w-full object-cover md:h-full md:w-full"
                        src="https://loremflickr.com/g/320/240/team"
                        alt="example"
                    />
                </div>
                <div className="p-8 xs:p-4 lg:p-8 w-full">
                    <div className="h-5/6">
                        <h4 className='text-4xl'>{nombreProducto} {descripcion} </h4>
                        <p className="text-2xl">{precio}</p>
                    </div>
                    <div className="text-right">Satisfacción *****</div>
                </div>
            </div>
        </div>
    </section>)
}
export default CardProducts