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
  "Cà Phê Đen": { ingredients: ["Cà Phê", "Nước", "Đường"], imageUrl: "/images/ca-phe-den.png" },
  "Cà Phê Đen Đá": { ingredients: ["Cà Phê", "Nước", "Đá", "Đường"], imageUrl: "/images/ca-phe-den-da.png" },
  "Cà Phê Đen Đá Không Đường": { ingredients: ["Cà Phê", "Nước", "Đá"], imageUrl: "/images/ca-phe-den-da-khong-duong.png" },
  "Cà Phê Sữa": { ingredients: ["Cà Phê", "Sữa Đặc"], imageUrl: "/images/ca-phe-sua.png" },
  "Cà Phê Sữa Đá": { ingredients: ["Cà Phê", "Sữa Đặc", "Đá"], imageUrl: "/images/ca-phe-sua-da.png" },
  "Trà Sữa": { ingredients: ["Trà", "Sữa Tươi", "Đường", "Đá"], imageUrl: "/images/tra-sua.png" },
  "Cacao Nóng": { ingredients: ["Cacao", "Sữa Tươi", "Đường"], imageUrl: "/images/cacao-nong.png" },
  "Trà Nóng": { ingredients: ["Trà", "Nước", "Đường"], imageUrl: "/images/tra-nong.png" },
};