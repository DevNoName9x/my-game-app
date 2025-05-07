/**
 * Rút gọn chuỗi nếu dài hơn maxLength ký tự
 * @param {string} str - Chuỗi cần rút gọn
 * @param {number} maxLength - Độ dài tối đa trước khi rút gọn
 * @param {string} suffix - Ký tự hiển thị sau khi rút gọn (mặc định là "...")
 * @returns {string} Chuỗi đã rút gọn
 */
export const truncateString = (str, maxLength = 20, suffix = "...") => {
  if (!str) return "";
  if (str.length <= maxLength) return str;
  
  // Rút gọn chuỗi và thêm hậu tố
  return str.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Rút gọn chuỗi nhưng giữ nguyên các từ hoàn chỉnh
 * @param {string} str - Chuỗi cần rút gọn
 * @param {number} maxLength - Độ dài tối đa trước khi rút gọn
 * @param {string} suffix - Ký tự hiển thị sau khi rút gọn (mặc định là "...")
 * @returns {string} Chuỗi đã rút gọn
 */
export const truncateByWords = (str, maxLength = 20) => {
  if (!str) return "";
  str = str.trim();
  if (str.length <= maxLength) return str;
  
  const  suffix = "...";
  // Tìm vị trí khoảng trắng cuối cùng trong phạm vi maxLength
  const subString = str.substring(0, maxLength - suffix.length);
  const lastSpace = subString.lastIndexOf(" ");
  
  // Nếu không có khoảng trắng, cắt chuỗi tại maxLength
  if (lastSpace === -1) return subString + suffix;
  
  // Cắt tại vị trí khoảng trắng cuối cùng để giữ nguyên từ
  return str.substring(0, lastSpace) + suffix;
};

/**
 * Định dạng chuỗi sang dạng in hoa chữ cái đầu
 * @param {string} str - Chuỗi cần định dạng
 * @returns {string} Chuỗi đã được định dạng
 */
export const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Loại bỏ dấu tiếng Việt từ chuỗi
 * @param {string} str - Chuỗi cần xử lý
 * @returns {string} Chuỗi không dấu
 */
export const removeVietnameseAccents = (str) => {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}; 