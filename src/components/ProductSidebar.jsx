
import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
    productCategories,
    slugify,
} from "../data/productCategories";

const ProductSidebar = () => {
    return (
        <aside className="promax-product-sidebar">
            <h2 className="section-heading">
                Other Products
            </h2>

            <div className="promax-sidebar-products">
                {productCategories.map((category) => (
                    <div key={category.title}>
                        <h3 className="promax-sidebar-category">
                            {category.title}
                        </h3>

                        {category.products.map((name) => (
                            <NavLink
                                key={name}
                                to={`/products/${slugify(name)}`}
                                className={({ isActive }) =>
                                    `promax-sidebar-link ${isActive ? "active" : ""
                                    }`
                                }
                            >
                                <span>{name}</span>
                                <ArrowUpRight size={15} />
                            </NavLink>
                        ))}
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default ProductSidebar;
