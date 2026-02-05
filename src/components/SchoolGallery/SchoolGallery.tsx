import { ArrowRight } from "lucide-react";
import { galleryData } from "../../data/galleryData";
import { Link } from "react-router-dom";

const Gallery = () => {

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryData.slice(0, 6).map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden rounded-lg shadow-lg group"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <Link
                        to="/gallery"
                        className="  group flex items-center gap-2  text-black  font-semibold  px-6 py-2 border border-gray-300 rounded-full shadow hover:bg-gray-200 transition "
                    >
                        <span className="">Explore Gallery</span>

                        <ArrowRight
                            className=" w-5 h-5 transition-transform duration-300 group-hover:translate-x-1  "
                        />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Gallery;
