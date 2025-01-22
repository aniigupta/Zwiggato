import React from "react";

interface Card {
    imageUrl: string;
    name: string;
    price: number;
}

const Card: React.FC<Card> = ({ imageUrl, name, price }) => {
    return (
        <div
            style={{
                width: "250px",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                margin: "10px",
                textAlign: "center",
                backgroundColor: "#fff",
            }}
        >
            <img
                src={imageUrl}
                alt={name}
                style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderBottom: "2px solid #ddd",
                }}
            />
            <div
                style={{
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <h3
                    style={{
                        margin: "10px 0",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#333",
                    }}
                >
                    {name}
                </h3>
                <p
                    style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#f76c6c",
                        margin: "5px 0",
                    }}
                >
                    ₹{price.toFixed(1)}
                </p>
            </div>
        </div>
    );
};

export default Card;
