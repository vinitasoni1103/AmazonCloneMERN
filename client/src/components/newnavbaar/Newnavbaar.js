import React, { useState } from "react";
import "./newnavbaar.css";

const Newnav = () => {
    // State to manage the visibility of subcategory options
    const [showDropdown, setShowDropdown] = useState(false);
    // State to manage the currently selected category
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Function to handle clicking on a category
    const handleCategoryClick = (category) => {
        // Toggle visibility of dropdown
        setShowDropdown(selectedCategory !== category || !showDropdown);
        setSelectedCategory(category);
    };

    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    {/* Map through categories */}
                    {["All", "Electronics", "Fashion", "Accessories"].map(category => (
                        <div key={category} className="category">
                            <p onClick={() => handleCategoryClick(category)}>{category}</p>
                            {/* Display subcategory options */}
                            {showDropdown && selectedCategory === category && (
                                <div className="dropdown">
                                    {/* Add subcategory options based on selected category */}
                                    
                                    {category === "All" && (
                                        <>
                                            <p>Electronics</p>
                                            <p>Fashion</p>
                                            <p>Accessories</p>
                                        </>
                                    )}

                                    {category === "Electronics" && (
                                        <>
                                            <a href="/electronics/mobile-phones"><p>Mobile Phones</p></a>
                                            <a href="/electronics/laptops"><p>Laptops</p></a>
                                            <a href="/electronics/watches"><p>Watches</p></a>
                                        </>
                                    )}
                                    {category === "Fashion" && (
                                        <>
                                            <a href="/fashion/womens-collection"><p>Women's Collection</p></a>
                                            <a href="/fashion/mens-collection"><p>Men's Collection</p></a>
                                            <a href="/fashion/kids"><p>Kids</p></a>
                                        </>
                                    )}
                                    {category === "Accessories" && (
                                        <>
                                            <a href="/accessories/beauty"><p>Beauty</p></a>
                                            <a href="/accessories/fitness-tools"><p>Fitness Tools</p></a>
                                        </>
                                    )}
                                    {/* You can add more subcategories */}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="right_data">
                    <img src="./nav.jpg" alt="navata" />
                </div>
            </div>
        </div>
    );
};

export default Newnav;
