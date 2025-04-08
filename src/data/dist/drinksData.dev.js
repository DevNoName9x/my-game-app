"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recipes = exports.cardTypes = void 0;
// src/data/drinksData.js
var cardTypes = [{
  name: "Cà Phê",
  imageUrl: "/images/ca-phe.png",
  quantity: 16
}, {
  name: "Sữa Đặc",
  imageUrl: "/images/sua-dac.png",
  quantity: 16
}, {
  name: "Sữa Tươi",
  imageUrl: "/images/sua-tuoi.png",
  quantity: 16
}, {
  name: "Trà",
  imageUrl: "/images/tra.png",
  quantity: 20
}, {
  name: "Nước",
  imageUrl: "/images/nuoc.png",
  quantity: 16
}, {
  name: "Đường",
  imageUrl: "/images/duong.png",
  quantity: 30
}, {
  name: "Đá",
  imageUrl: "/images/da.png",
  quantity: 30
}, {
  name: "Đá Xay",
  imageUrl: "/images/da-xay.png",
  quantity: 10
}, {
  name: "Cacao",
  imageUrl: "/images/cacao.png",
  quantity: 10
}, {
  name: "Matcha",
  imageUrl: "/images/matcha.png",
  quantity: 10
}, {
  name: "Soda",
  imageUrl: "/images/soda.png",
  quantity: 10
}, {
  name: "Chocolate",
  imageUrl: "/images/chocolate.png",
  quantity: 6
}, {
  name: "Trân Châu",
  imageUrl: "/images/tran-chau.png",
  quantity: 6
}, {
  name: "Mật Ong",
  imageUrl: "/images/mat-ong.png",
  quantity: 6
}, {
  name: "Chanh",
  imageUrl: "/images/chanh.png",
  quantity: 6
}, {
  name: "Đào",
  imageUrl: "/images/dao.png",
  quantity: 6
}, {
  name: "Sả",
  imageUrl: "/images/sa.png",
  quantity: 6
}, {
  name: "Dâu Tây",
  imageUrl: "/images/dau-tay.png",
  quantity: 6
}, {
  name: "Xoài",
  imageUrl: "/images/xoai.png",
  quantity: 6
}, {
  name: "Bơ",
  imageUrl: "/images/bo.png",
  quantity: 6
}, {
  name: "Ổi",
  imageUrl: "/images/oi.png",
  quantity: 6
}, {
  name: "Dứa",
  imageUrl: "/images/dua.png",
  quantity: 6
}, {
  name: "Táo",
  imageUrl: "/images/tao.png",
  quantity: 6
}, {
  name: "Vải",
  imageUrl: "/images/vai.png",
  quantity: 6
}, {
  name: "Chuối",
  imageUrl: "/images/vai.png",
  quantity: 6
}, {
  name: "Dừa",
  imageUrl: "/images/dua.png",
  quantity: 6
}, {
  name: "Cam",
  imageUrl: "/images/cam.png",
  quantity: 6
}, {
  name: "Tắc",
  imageUrl: "/images/dua.png",
  quantity: 6
}, {
  name: "Chanh Dây",
  imageUrl: "/images/dua.png",
  quantity: 6
}, {
  name: "Việt Quất",
  imageUrl: "/images/dua.png",
  quantity: 6
}, {
  name: "Gừng",
  imageUrl: "/images/dua.png",
  quantity: 6
}];
exports.cardTypes = cardTypes;
var recipes = [{
  id: 1,
  name: "Bạc xỉu",
  ingredients: ["Cà Phê", "Sữa Đặc", "Sữa Tươi"],
  imageUrl: "/images/bac-xiu.png",
  price: 25000
}, {
  id: 2,
  name: "Cacao Latte",
  ingredients: ["Cacao", "Đường", "Sữa Tươi"],
  imageUrl: "/images/cacao-latte.png",
  price: 25000
}, {
  id: 3,
  name: "Cacao Nóng",
  ingredients: ["Cacao", "Đường", "Sữa Tươi"],
  imageUrl: "/images/cacao-nong.png",
  price: 25000
}, {
  id: 4,
  name: "Cà Phê Đen",
  ingredients: ["Cà Phê", "Đường", "Nước"],
  imageUrl: "/images/ca-phe-den.png",
  price: 15000
}, {
  id: 5,
  name: "Cà Phê Đen Đá",
  ingredients: ["Cà Phê", "Đá", "Đường", "Nước"],
  imageUrl: "/images/ca-phe-den-da.png",
  price: 15000
}, {
  id: 6,
  name: "Cà Phê Đen Đá Không Đường",
  ingredients: ["Cà Phê", "Đá", "Nước"],
  imageUrl: "/images/ca-phe-den-da-khong-duong.png",
  price: 15000
}, {
  id: 7,
  name: "Cà Phê Sữa",
  ingredients: ["Cà Phê", "Sữa Đặc"],
  imageUrl: "/images/ca-phe-sua.png",
  price: 20000
}, {
  id: 8,
  name: "Cà Phê Sữa Đá",
  ingredients: ["Cà Phê", "Đá", "Sữa Đặc"],
  imageUrl: "/images/ca-phe-sua-da.png",
  price: 20000
}, {
  id: 9,
  name: "Chanh Đá Xay",
  ingredients: ["Chanh", "Đá Xay", "Đường"],
  imageUrl: "/images/chanh-da-xay.png",
  price: 30000
}, {
  id: 10,
  name: "Chocolate Nóng",
  ingredients: ["Chocolate", "Đường", "Sữa Tươi"],
  imageUrl: "/images/chocolate-nong.png",
  price: 35000
}, {
  id: 11,
  name: "Dâu Đá Xay",
  ingredients: ["Dâu Tây", "Đá Xay", "Đường"],
  imageUrl: "/images/dau-da-xay.png",
  price: 35000
}, {
  id: 12,
  name: "Matcha Đá Xay",
  ingredients: ["Đá Xay", "Đường", "Matcha", "Sữa Tươi"],
  imageUrl: "/images/matcha-da-xay.png",
  price: 40000
}, {
  id: 13,
  name: "Matcha Latte",
  ingredients: ["Đường", "Matcha", "Sữa Tươi"],
  imageUrl: "/images/matcha-latte.png",
  price: 35000
}, {
  id: 14,
  name: "Nước Dừa",
  ingredients: ["Dừa", "Đá"],
  imageUrl: "/images/nuoc-dua.png",
  price: 30000
}, {
  id: 15,
  name: "Nước Ép Cam",
  ingredients: ["Cam", "Đá", "Đường"],
  imageUrl: "/images/nuoc-cam-ep.png",
  price: 30000
}, {
  id: 16,
  name: "Nước Ép Dứa",
  ingredients: ["Dứa", "Đá", "Đường"],
  imageUrl: "/images/nuoc-ep-dua.png",
  price: 30000
}, {
  id: 17,
  name: "Nước Ép Ổi",
  ingredients: ["Đá", "Đường", "Ổi"],
  imageUrl: "/images/nuoc-ep-oi.png",
  price: 30000
}, {
  id: 18,
  name: "Nước Ép Táo",
  ingredients: ["Táo", "Đá", "Đường"],
  imageUrl: "/images/nuoc-ep-tao.png",
  price: 35000
}, {
  id: 19,
  name: "Soda Chanh Dây",
  ingredients: ["Chanh Dây", "Đá", "Đường", "Soda"],
  imageUrl: "/images/soda-chanh-day.png",
  price: 35000
}, {
  id: 20,
  name: "Soda Việt Quất",
  ingredients: ["Đá", "Đường", "Soda", "Việt Quất"],
  imageUrl: "/images/soda-viet-quat.png",
  price: 35000
}, {
  id: 21,
  name: "Soda Xoài",
  ingredients: ["Đá", "Đường", "Soda", "Xoài"],
  imageUrl: "/images/soda-xoai.png",
  price: 35000
}, {
  id: 22,
  name: "Sinh Tố Bơ",
  ingredients: ["Bơ", "Đá", "Sữa Đặc", "Sữa Tươi"],
  imageUrl: "/images/sinh-to-bo.png",
  price: 40000
}, {
  id: 23,
  name: "Sinh Tố Chuối",
  ingredients: ["Chuối", "Đá", "Sữa Đặc", "Sữa Tươi"],
  imageUrl: "/images/sinh-to-dau.png",
  price: 35000
}, {
  id: 24,
  name: "Sinh Tố Dâu",
  ingredients: ["Dâu Tây", "Đá", "Sữa Đặc", "Sữa Tươi"],
  imageUrl: "/images/sinh-to-dau.png",
  price: 40000
}, {
  id: 25,
  name: "Sinh Tố Xoài",
  ingredients: ["Đá", "Sữa Đặc", "Sữa Tươi", "Xoài"],
  imageUrl: "/images/sinh-to-xoai.png",
  price: 40000
}, {
  id: 26,
  name: "Sữa Tươi Cacao",
  ingredients: ["Cacao", "Đá", "Đường", "Sữa Tươi"],
  imageUrl: "/images/sua-tuoi-cacao.png",
  price: 35000
}, {
  id: 27,
  name: "Sữa Tươi Matcha",
  ingredients: ["Đá", "Đường", "Matcha", "Sữa Tươi"],
  imageUrl: "/images/sua-tuoi-matcha.png",
  price: 35000
}, {
  id: 28,
  name: "Sữa Tươi Trân Châu Đường Đen",
  ingredients: ["Đường", "Sữa Tươi", "Trân Châu"],
  imageUrl: "/images/sua-tuoi-tran-chau-duong-den.png",
  price: 40000
}, {
  id: 29,
  name: "Trà Chanh",
  ingredients: ["Chanh", "Đá", "Đường", "Trà"],
  imageUrl: "/images/tra-chanh.png",
  price: 20000
}, {
  id: 30,
  name: "Trà Dâu Tây",
  ingredients: ["Dâu Tây", "Đá", "Đường", "Trà"],
  imageUrl: "/images/tra-dau-tay.png",
  price: 35000
}, {
  id: 31,
  name: "Trà Đào Cam Sả",
  ingredients: ["Cam", "Đá", "Đào", "Sả", "Trà"],
  imageUrl: "/images/tra-dao-cam-sa.png",
  price: 35000
}, {
  id: 32,
  name: "Trà Gừng Nóng",
  ingredients: ["Gừng", "Mật Ong", "Trà"],
  imageUrl: "/images/tra-gung.png",
  price: 25000
}, {
  id: 33,
  name: "Trà Nóng",
  ingredients: ["Đường", "Nước", "Trà"],
  imageUrl: "/images/tra-nong.png",
  price: 15000
}, {
  id: 34,
  name: "Trà Sữa",
  ingredients: ["Đá", "Đường", "Sữa Tươi", "Trà"],
  imageUrl: "/images/tra-sua.png",
  price: 20000
}, {
  id: 35,
  name: "Trà Tắc",
  ingredients: ["Đá", "Đường", "Tắc", "Trà"],
  imageUrl: "/images/tra-tac.png",
  price: 20000
}, {
  id: 36,
  name: "Trà Vải",
  ingredients: ["Đá", "Đường", "Trà", "Vải"],
  imageUrl: "/images/tra-vai.png",
  price: 30000
}, {
  id: 37,
  name: "Trà Xoài",
  ingredients: ["Đá", "Đường", "Trà", "Xoài"],
  imageUrl: "/images/tra-xoai.png",
  price: 35000
}];
exports.recipes = recipes;