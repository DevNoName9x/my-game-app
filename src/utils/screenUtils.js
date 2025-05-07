/**
 * Tính toán chiều cao dựa trên kích thước cửa sổ và trả về chuỗi CSS
 * @param {number} percentage - Phần trăm chiều cao cửa sổ (0.5 = 50%)
 * @returns {string} Chuỗi CSS với đơn vị px
 */
export const calculateScreenHeight = (percentage = 0.5) => {
  const windowHeight = window.innerHeight;
  return `${windowHeight * percentage}px`;
};

/**
 * Hook để theo dõi kích thước màn hình và trả về chiều cao dựa trên tỷ lệ phần trăm
 * @param {React} React - React object
 * @param {number} percentage - Phần trăm chiều cao cửa sổ (0.5 = 50%)
 * @returns {string} Chiều cao tính toán dựa trên kích thước màn hình
 */
export const useResponsiveHeight = (React, percentage = 0.5) => {
  const { useState, useEffect } = React;
  const [height, setHeight] = useState(calculateScreenHeight(percentage));

  useEffect(() => {
    const handleResize = () => {
      setHeight(calculateScreenHeight(percentage));
    };

    // Thêm sự kiện lắng nghe thay đổi kích thước
    window.addEventListener("resize", handleResize);

    // Dọn dẹp sự kiện khi component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [percentage]);

  return height;
}; 