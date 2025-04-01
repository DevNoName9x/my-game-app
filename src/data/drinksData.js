// src/data/drinksData.js
export const cardTypes = [
  { name: "Cà Phê", imageUrl: "/images/ca-phe.png" },
  { name: "Sữa Đặc", imageUrl: "/images/sua-dac.png" },
  { name: "Sữa Tươi", imageUrl: "/images/sua-tuoi.png" },
  { name: "Trà", imageUrl: "/images/tra.png" },
  { name: "Nước", imageUrl: "/images/nuoc.png" },
  { name: "Đường", imageUrl: "/images/duong.png" },
  { name: "Đá", imageUrl: "/images/da.png" },
  { name: "Đá Xay", imageUrl: "/images/da-xay.png" },
  { name: "Cacao", imageUrl: "/images/cacao.png" },
  { name: "Matcha", imageUrl: "/images/matcha.png" },
  { name: "Chocolate", imageUrl: "/images/chocolate.png" },
  { name: "Trân Châu", imageUrl: "/images/tran-chau.png" },
  { name: "Chanh", imageUrl: "/images/chanh.png" },
  { name: "Mật Ong", imageUrl: "/images/mat-ong.png" },
  { name: "Đào", imageUrl: "/images/dao.png" },
  { name: "Sả", imageUrl: "/images/sa.png" },
  { name: "Dâu Tây", imageUrl: "/images/dau-tay.png" },
  { name: "Xoài", imageUrl: "/images/xoai.png" },
  { name: "Bơ", imageUrl: "/images/bo.png" },
  { name: "Ổi", imageUrl: "/images/oi.png" },
  { name: "Dứa", imageUrl: "/images/dua.png" },
  { name: "Táo", imageUrl: "/images/tao.png" },
  { name: "Vải", imageUrl: "/images/vai.png" },
  { name: "Soda", imageUrl: "/images/soda.png" },
  { name: "Dừa", imageUrl: "/images/dua.png" },
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
  "Bạc xỉu": { ingredients: ["Cà Phê", "Sữa Đặc", "Sữa Tươi"], imageUrl: "/images/bac-xiu.png" },
  "Trà Chanh": { ingredients: ["Trà", "Chanh", "Đường", "Đá"], imageUrl: "/images/tra-chanh.png", price: 20000 },
  "Trà Tắc": { ingredients: ["Trà", "Tắc", "Đường", "Đá"], imageUrl: "/images/tra-tac.png", price: 20000 },
  "Trà Gừng Nóng": { ingredients: ["Trà", "Gừng", "Mật Ong"], imageUrl: "/images/tra-gung.png", price: 25000 },
  "Trà Đào Cam Sả": { ingredients: ["Trà", "Đào", "Cam", "Sả", "Đá"], imageUrl: "/images/tra-dao-cam-sa.png", price: 35000 },
  "Trà Vải": { ingredients: ["Trà", "Vải", "Đường", "Đá"], imageUrl: "/images/tra-vai.png", price: 30000 },
  "Trà Dâu Tây": { ingredients: ["Trà", "Dâu Tây", "Đường", "Đá"], imageUrl: "/images/tra-dau-tay.png", price: 35000 },
  "Trà Xoài": { ingredients: ["Trà", "Xoài", "Đường", "Đá"], imageUrl: "/images/tra-xoai.png", price: 35000 },
  "Sữa Tươi Trân Châu Đường Đen": {
    ingredients: ["Sữa Tươi", "Trân Châu", "Đường Đen"],
    imageUrl: "/images/sua-tuoi-tran-chau-duong-den.png",
    price: 40000,
  },
  "Sữa Tươi Cacao": { ingredients: ["Sữa Tươi", "Cacao", "Đường", "Đá"], imageUrl: "/images/sua-tuoi-cacao.png", price: 35000 },
  "Sữa Tươi Matcha": { ingredients: ["Sữa Tươi", "Matcha", "Đường", "Đá"], imageUrl: "/images/sua-tuoi-matcha.png", price: 35000 },
  "Matcha Latte": { ingredients: ["Matcha", "Sữa Tươi", "Đường"], imageUrl: "/images/matcha-latte.png", price: 35000 },
  "Cacao Latte": { ingredients: ["Cacao", "Sữa Tươi", "Đường"], imageUrl: "/images/cacao-latte.png", price: 35000 },
  "Chocolate Nóng": { ingredients: ["Chocolate", "Sữa Tươi", "Đường"], imageUrl: "/images/chocolate-nong.png", price: 35000 },
  "Sinh Tố Bơ": { ingredients: ["Bơ", "Sữa Tươi", "Sữa Đặc", "Đá"], imageUrl: "/images/sinh-to-bo.png", price: 40000 },
  "Sinh Tố Dâu": { ingredients: ["Dâu Tây", "Sữa Tươi", "Sữa Đặc", "Đá"], imageUrl: "/images/sinh-to-dau.png", price: 40000 },
  "Sinh Tố Xoài": { ingredients: ["Xoài", "Sữa Tươi", "Sữa Đặc", "Đá"], imageUrl: "/images/sinh-to-xoai.png", price: 40000 },
  "Sinh Tố Chuối": { ingredients: ["Chuối", "Sữa Tươi", "Sữa Đặc", "Đá"], imageUrl: "/images/sinh-to-chuoi.png", price: 35000 },
  "Nước Cam Ép": { ingredients: ["Cam", "Đường", "Đá"], imageUrl: "/images/nuoc-cam-ep.png", price: 30000 },
  "Nước Ép Ổi": { ingredients: ["Ổi", "Đường", "Đá"], imageUrl: "/images/nuoc-ep-oi.png", price: 30000 },
  "Nước Ép Dưa Hấu": { ingredients: ["Dưa Hấu", "Đường", "Đá"], imageUrl: "/images/nuoc-ep-dua-hau.png", price: 30000 },
  "Nước Ép Dứa": { ingredients: ["Dứa", "Đường", "Đá"], imageUrl: "/images/nuoc-ep-dua.png", price: 30000 },
  "Nước Ép Táo": { ingredients: ["Táo", "Đường", "Đá"], imageUrl: "/images/nuoc-ep-tao.png", price: 35000 },
  "Soda Chanh Dây": { ingredients: ["Soda", "Chanh Dây", "Đường", "Đá"], imageUrl: "/images/soda-chanh-day.png", price: 35000 },
  "Soda Việt Quất": { ingredients: ["Soda", "Việt Quất", "Đường", "Đá"], imageUrl: "/images/soda-viet-quat.png", price: 35000 },
  "Soda Xoài": { ingredients: ["Soda", "Xoài", "Đường", "Đá"], imageUrl: "/images/soda-xoai.png", price: 35000 },
  "Nước Dừa": { ingredients: ["Dừa", "Đá"], imageUrl: "/images/nuoc-dua.png", price: 30000 },
  "Chanh Đá Xay": { ingredients: ["Chanh", "Đường", "Đá Xay"], imageUrl: "/images/chanh-da-xay.png", price: 30000 },
  "Dâu Đá Xay": { ingredients: ["Dâu Tây", "Đường", "Đá Xay"], imageUrl: "/images/dau-da-xay.png", price: 35000 },
  "Xoài Đá Xay": { ingredients: ["Xoài", "Đường", "Đá Xay"], imageUrl: "/images/xoai-da-xay.png", price: 35000 },
  "Matcha Đá Xay": { ingredients: ["Matcha", "Sữa Tươi", "Đường", "Đá Xay"], imageUrl: "/images/matcha-da-xay.png", price: 40000 },
};
