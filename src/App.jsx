

import React, { useState, useEffect } from "react";

const App = () => {
    // Стан
    const [selectedCategory, setSelectedCategory] = useState("Усі");
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [reviews, setReviews] = useState([
        { id: 1, name: "Іван", text: "Дуже зручні шльопанці!" },
        { id: 2, name: "Марія", text: "Гарний вибір, рекомендую!" },
    ]);
    const [newReview, setNewReview] = useState("");

    // Оновлення часу
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Товари
    const products = [
        { id: 1, name: "Сандалі Stone Island", category: "Casual", price: "$99", image: "https://images.prom.ua/5830646336_w600_h600_5830646336.jpg" },

        { id: 2, name: "Сандалі Спорт", category: "Sport", price: "$30", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm-30EtJZrMZ7kjDRb0PUmV2T_3lPHzH-1A&s" },

        { id: 3, name: "Сандалі Пляжні", category: "Beach", price: "$20", image: "https://cdn.27.ua/sc--media--prod/default/e0/d1/b4/e0d1b419-7677-4dad-9227-10722b9164c7.jpg" },

        { id: 4, name: "Сандалі Пляжні", category: "Sport", price: "$20", image: "https://ukrvzuttia.com/image/cache/data-tovar-135-135-olive-1-750x750.jpg" },

        { id: 5, name: "Сандалі Пляжні", category: "Beach", price: "$20", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6WUIS4S947eBPS4Qtiq-UUZmO_OZwSgXdcg&s" },

        { id: 6, name: "Сандалі Повсякденні", category: "Casual", price: "$20", image: "https://tapok.com.ua/products/0/94/82/8/94828/522441_middle.jpg" },

        { id: 7, name: "Сандалі Пляжні", category: "Beach", price: "$20", image: "https://images.prom.ua/5526998724_w1280_h1280_photo_1_2024_03_08_13_28_36.jpg?fresh=1" },

        { id: 8, name: "Сандалі Повсякденні", category: "Casual", price: "$20", image: "https://ukrvzuttia.com/image/cache/data-c-27-shlepki-1-750x750.jpg" },

        { id: 9, name: "Сандалі Спорт", category: "Sport", price: "$20", image: "https://images.prom.ua/1051809909_w600_h600_1051809909.jpg" },

        { id: 10, name: "Сандалі Пляжні", category: "Beach", price: "$20", image: "https://top-obuv.com.ua/site/top-obuv/files/goods/shoes-hires-804658-454921.jpg" }
    ];

    // Додавання нового відгуку
    const handleAddReview = () => {
        if (newReview.trim()) {
            setReviews([...reviews, { id: Date.now(), name: "Анонім", text: newReview }]);
            setNewReview("");
        }
    };

    return (
        <div style={styles.container}>
            {/* Меню */}
            <header style={styles.header}>
                <h1 style={styles.title}>Магазин шльопанців</h1>
                <nav style={styles.nav}>
                    <select
                        style={styles.dropdown}
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="Усі">Усі товари</option>
                        <option value="Casual">Casual</option>
                        <option value="Sport">Sport</option>
                        <option value="Beach">Beach</option>
                    </select>
                </nav>
            </header>

            {/* Час */}
            <div style={styles.timeContainer}>
                <h2 style={styles.time}>Поточний час: {currentTime}</h2>
            </div>

            {/* Список товарів */}
            <section style={styles.productsSection}>
                <h2 style={styles.sectionTitle}>Товари</h2>
                <div style={styles.productsGrid}>
                    {products
                        .filter((product) => selectedCategory === "Усі" || product.category === selectedCategory)
                        .map((product) => (
                            <div key={product.id} style={styles.productCard}>
                                <img src={product.image} alt={product.name} style={styles.productImage} />
                                <h3 style={styles.productName}>{product.name}</h3>
                                <p style={styles.productPrice}>{product.price}</p>
                            </div>
                        ))}
                </div>
            </section>

            {/* Відгуки */}
            <section style={styles.reviewsSection}>
                <h2 style={styles.sectionTitle}>Відгуки</h2>
                <div style={styles.reviewsList}>
                    {reviews.map((review) => (
                        <div key={review.id} style={styles.review}>
                            <h3 style={styles.reviewName}>{review.name}</h3>
                            <p style={styles.reviewText}>{review.text}</p>
                        </div>
                    ))}
                </div>
                <div style={styles.addReview}>
          <textarea
              style={styles.textarea}
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Напишіть свій відгук..."
          />
                    <button style={styles.addReviewButton} onClick={handleAddReview}>
                        Додати відгук
                    </button>
                </div>
            </section>

            {/* Підпис */}
            <footer style={styles.footer}>
                <p>Сайт зробив: Саша Якименко, група 1АКІТР-24б</p>
            </footer>
        </div>
    );
};

// Стили
const styles = {
    container: {
        fontFamily: "'Roboto', sans-serif",
        color: "#333",
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
    },
    title: {
        fontSize: "28px",
        fontWeight: "bold",
    },
    nav: {
        display: "flex",
        alignItems: "center",
    },
    dropdown: {
        padding: "10px",
        fontSize: "14px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
    },
    timeContainer: {
        textAlign: "center",
        marginBottom: "30px",
    },
    time: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#e74c3c",
    },
    productsSection: {
        marginBottom: "30px",
    },
    sectionTitle: {
        fontSize: "24px",
        marginBottom: "20px",
    },
    productsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
    },
    productCard: {
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        backgroundColor: "#fff",
    },
    productImage: {
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "10px",
        marginBottom: "10px",
    },
    productName: {
        fontSize: "16px",
        marginBottom: "5px",
    },
    productPrice: {
        fontSize: "14px",
        color: "#555",
    },
    reviewsSection: {
        marginTop: "30px",
    },
    reviewsList: {
        marginBottom: "20px",
    },
    review: {
        borderBottom: "1px solid #ddd",
        paddingBottom: "10px",
        marginBottom: "10px",
    },
    reviewName: {
        fontSize: "16px",
        fontWeight: "bold",
    },
    reviewText: {
        fontSize: "14px",
    },
    addReview: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    textarea: {
        width: "100%",
        height: "100px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        padding: "10px",
        fontSize: "14px",
    },
    addReviewButton: {
        padding: "10px 15px",
        fontSize: "14px",
        cursor: "pointer",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#3498db",
        color: "#fff",
        transition: "background-color 0.3s",
    },
    footer: {
        marginTop: "30px",
        textAlign: "center",
        fontSize: "14px",
        color: "#555",
    },
};

export default App;
