// src/data/drinksData.js
export const cardTypes = [
  { name: "Cà Phê", imageUrl: "/images/ca-phe.png" },
  { name: "Trà", imageUrl: "/images/tra.png" },
  { name: "Sữa Tươi", imageUrl: "/images/sua-tuoi.png" },
  { name: "Sữa Đặc", imageUrl: "/images/sua-dac.png" },
  { name: "Cacao", imageUrl: "/images/cacao.png" },
  { name: "Đường", imageUrl: "/images/duong.png" },
  { name: "Muối", imageUrl: "/images/muoi.png" },
  { name: "Đá", imageUrl: "/images/da.png" },
  { name: "Nước", imageUrl: "/images/nuoc.png" },
];

export const recipes = {
  "Cà Phê Đen": ["Cà Phê", "Nước", "Đường"],
  "Cà Phê Đen Đá": ["Cà Phê", "Nước", "Đá", "Đường"],
  "Cà Phê Đen Đá Không Đường": ["Cà Phê", "Nước", "Đá"],
  "Cà Phê Sữa": ["Cà Phê", "Sữa Đặc"],
  "Cà Phê Sữa Đá": ["Cà Phê", "Sữa Đặc", "Đá"],
  "Trà Sữa": ["Trà", "Sữa Tươi", "Đường", "Đá"],
  "Cacao Nóng": ["Cacao", "Sữa Tươi", "Đường"],
  "Trà Nóng": ["Trà", "Nước", "Đường"],
};
