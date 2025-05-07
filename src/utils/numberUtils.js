/**
 * Định dạng số thành chuỗi tiền tệ VND
 * @param {number} price - Giá trị tiền cần định dạng
 * @param {boolean} showSymbol - Hiển thị ký hiệu tiền tệ (VNĐ) hay không
 * @returns {string} Chuỗi định dạng tiền tệ
 */
export const priceDisplay = (price, showSymbol = true) => {
  if (price === null || price === undefined) return "";
  
  // Chuyển giá trị thành số
  const numPrice = Number(price);
  if (isNaN(numPrice)) return "";
  
  // Định dạng số với dấu chấm phân cách hàng nghìn
  const formattedPrice = numPrice.toLocaleString('vi-VN');
  
  // Trả về kết quả có hoặc không có ký hiệu tiền tệ
  return showSymbol ? `${formattedPrice} VNĐ` : formattedPrice;
};

/**
 * Định dạng số với số lượng chữ số thập phân cụ thể
 * @param {number} value - Giá trị số cần định dạng
 * @param {number} decimals - Số chữ số thập phân (mặc định: 2)
 * @returns {string} Chuỗi số đã định dạng
 */
export const formatNumber = (value, decimals = 2) => {
  if (value === null || value === undefined) return "";
  
  const numValue = Number(value);
  if (isNaN(numValue)) return "";
  
  return numValue.toLocaleString('vi-VN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
};

/**
 * Làm tròn số đến số chữ số thập phân cụ thể
 * @param {number} value - Giá trị cần làm tròn
 * @param {number} decimals - Số chữ số thập phân (mặc định: 2)
 * @returns {number} Số đã được làm tròn
 */
export const roundNumber = (value, decimals = 2) => {
  if (value === null || value === undefined) return 0;
  
  const numValue = Number(value);
  if (isNaN(numValue)) return 0;
  
  const factor = Math.pow(10, decimals);
  return Math.round(numValue * factor) / factor;
}; 