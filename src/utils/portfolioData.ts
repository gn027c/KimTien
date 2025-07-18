// [AI edited] Tách dữ liệu sản phẩm từ Portfolio.tsx
import { Package, Palette, Utensils, Heart } from 'lucide-react';

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  gallery: string[];
  brands?: string[];
  isPopular?: boolean;
  isNew?: boolean;
}

// [AI edited] Dữ liệu sinh tự động từ ảnh trong imageProduct, có tên, popular, new random
export const portfolioItemsData: PortfolioItem[] = [
  { id: 1, title: 'Dangler 47', category: 'Dangler', image: '/imageProduct/Dangler/47.png', description: '', gallery: [], brands: ['Acecook'], isPopular: true, isNew: false },
  { id: 2, title: 'Dangler 42', category: 'Dangler', image: '/imageProduct/Dangler/42.png', description: '', gallery: [], isPopular: false, isNew: true },
  { id: 3, title: 'Dangler 41', category: 'Dangler', image: '/imageProduct/Dangler/41.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 4, title: 'Dangler 29', category: 'Dangler', image: '/imageProduct/Dangler/29.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 5, title: 'Dangler 23', category: 'Dangler', image: '/imageProduct/Dangler/23.png', description: '', gallery: [], isPopular: true, isNew: true },
  { id: 6, title: 'Carton 78', category: 'Carton', image: '/imageProduct/Carton/78.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 7, title: 'Carton 49', category: 'Carton', image: '/imageProduct/Carton/49.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 8, title: 'Carton 48', category: 'Carton', image: '/imageProduct/Carton/48.png', description: '', gallery: [], isPopular: false, isNew: true },
  { id: 9, title: 'Carton 4', category: 'Carton', image: '/imageProduct/Carton/4.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 10, title: 'Carton 2', category: 'Carton', image: '/imageProduct/Carton/2.png', description: '', gallery: [], isPopular: false, isNew: false },

  { id: 11, title: 'Hộp mềm 79', category: 'Hộp mềm', image: '/imageProduct/Hộp mềm/79.png', description: '', gallery: [], isPopular: true, isNew: true },
  { id: 12, title: 'Hộp mềm 5', category: 'Hộp mềm', image: '/imageProduct/Hộp mềm/5.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 13, title: 'Hộp mềm 3', category: 'Hộp mềm', image: '/imageProduct/Hộp mềm/3.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 14, title: 'Hộp mềm 19', category: 'Hộp mềm', image: '/imageProduct/Hộp mềm/19.png', description: '', gallery: [], isPopular: false, isNew: true },
  { id: 15, title: 'Hộp mềm 18', category: 'Hộp mềm', image: '/imageProduct/Hộp mềm/18.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 16, title: 'Hộp mềm 17', category: 'Hộp mềm', image: '/imageProduct/Hộp mềm/17.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 17, title: 'Hộp mềm 16', category: 'Hộp mềm', image: '/imageProduct/Hộp mềm/16.png', description: '', gallery: [], isPopular: true, isNew: true },
  { id: 18, title: 'Hộp mềm 15', category: 'Hộp mềm', image: '/imageProduct/Hộp mềm/15.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 19, title: 'Hộp mềm 11', category: 'Hộp mềm', image: '/imageProduct/Hộp mềm/11.png', description: '', gallery: [], isPopular: true, isNew: false },

  { id: 20, title: 'Hộp cứng 77', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/77.png', description: '', gallery: [], isPopular: false, isNew: true },
  { id: 21, title: 'Hộp cứng 76', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/76.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 22, title: 'Hộp cứng 69', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/69.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 23, title: 'Hộp cứng 68', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/68.png', description: '', gallery: [], isPopular: true, isNew: true },
  { id: 24, title: 'Hộp cứng 67', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/67.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 25, title: 'Hộp cứng 66', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/66.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 26, title: 'Hộp cứng 65', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/65.png', description: '', gallery: [], isPopular: false, isNew: true },
  { id: 27, title: 'Hộp cứng 64', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/64.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 28, title: 'Hộp cứng 63', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/63.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 29, title: 'Hộp cứng 62', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/62.png', description: '', gallery: [], isPopular: true, isNew: true },
  { id: 30, title: 'Hộp cứng 61', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/61.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 31, title: 'Hộp cứng 60', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/60.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 32, title: 'Hộp cứng 59', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/59.png', description: '', gallery: [], isPopular: false, isNew: true },
  { id: 33, title: 'Hộp cứng 58', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/58.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 34, title: 'Hộp cứng 57', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/57.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 35, title: 'Hộp cứng 56', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/56.png', description: '', gallery: [], isPopular: true, isNew: true },
  { id: 36, title: 'Hộp cứng 55', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/55.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 37, title: 'Hộp cứng 54', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/54.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 38, title: 'Hộp cứng 53', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/53.png', description: '', gallery: [], isPopular: false, isNew: true },
  { id: 39, title: 'Hộp cứng 52', category: 'Hộp cứng', image: '/imageProduct/Hộp cứng/52.png', description: '', gallery: [], isPopular: true, isNew: false },

  { id: 40, title: 'Túi giấy 9', category: 'Túi giấy', image: '/imageProduct/Túi giấy/9.png', description: '', gallery: [], isPopular: false, isNew: true },
  { id: 41, title: 'Túi giấy 74', category: 'Túi giấy', image: '/imageProduct/Túi giấy/74.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 42, title: 'Túi giấy 73', category: 'Túi giấy', image: '/imageProduct/Túi giấy/73.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 43, title: 'Túi giấy 14', category: 'Túi giấy', image: '/imageProduct/Túi giấy/14.png', description: '', gallery: [], isPopular: true, isNew: true },
  { id: 44, title: 'Túi giấy 13', category: 'Túi giấy', image: '/imageProduct/Túi giấy/13.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 45, title: 'Túi giấy 10', category: 'Túi giấy', image: '/imageProduct/Túi giấy/10.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 46, title: 'Túi giấy 1', category: 'Túi giấy', image: '/imageProduct/Túi giấy/1.png', description: '', gallery: [], isPopular: false, isNew: true },

  { id: 47, title: 'Standee 22', category: 'Standee', image: '/imageProduct/Standee/22.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 48, title: 'Standee 21', category: 'Standee', image: '/imageProduct/Standee/21.png', description: '', gallery: [], isPopular: false, isNew: true },

  { id: 49, title: 'Showcase 8', category: 'Showcase', image: '/imageProduct/Showcase/8.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 50, title: 'Showcase 72', category: 'Showcase', image: '/imageProduct/Showcase/72.png', description: '', gallery: [], isPopular: false, isNew: true },
  { id: 51, title: 'Showcase 71', category: 'Showcase', image: '/imageProduct/Showcase/71.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 52, title: 'Showcase 7', category: 'Showcase', image: '/imageProduct/Showcase/7.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 53, title: 'Showcase 6', category: 'Showcase', image: '/imageProduct/Showcase/6.png', description: '', gallery: [], isPopular: true, isNew: true },
  { id: 54, title: 'Showcase 51', category: 'Showcase', image: '/imageProduct/Showcase/51.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 55, title: 'Showcase 46', category: 'Showcase', image: '/imageProduct/Showcase/46.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 56, title: 'Showcase 45', category: 'Showcase', image: '/imageProduct/Showcase/45.png', description: '', gallery: [], isPopular: false, isNew: true },
  { id: 57, title: 'Showcase 44', category: 'Showcase', image: '/imageProduct/Showcase/44.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 58, title: 'Showcase 37', category: 'Showcase', image: '/imageProduct/Showcase/37.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 59, title: 'Showcase 36', category: 'Showcase', image: '/imageProduct/Showcase/36.png', description: '', gallery: [], isPopular: true, isNew: true },
  { id: 60, title: 'Showcase 33', category: 'Showcase', image: '/imageProduct/Showcase/33.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 61, title: 'Showcase 27', category: 'Showcase', image: '/imageProduct/Showcase/27.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 62, title: 'Showcase 20', category: 'Showcase', image: '/imageProduct/Showcase/20.png', description: '', gallery: [], isPopular: false, isNew: true },

  { id: 63, title: 'Áp phích 43', category: 'Áp phích', image: '/imageProduct/Áp phích/43.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 64, title: 'Áp phích 40', category: 'Áp phích', image: '/imageProduct/Áp phích/40.png', description: '', gallery: [], isPopular: false, isNew: true },
  { id: 65, title: 'Áp phích 32', category: 'Áp phích', image: '/imageProduct/Áp phích/32.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 66, title: 'Áp phích 31', category: 'Áp phích', image: '/imageProduct/Áp phích/31.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 67, title: 'Áp phích 30', category: 'Áp phích', image: '/imageProduct/Áp phích/30.png', description: '', gallery: [], isPopular: true, isNew: true },

  { id: 68, title: 'Hanger 80', category: 'Hanger', image: '/imageProduct/Hanger/80.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 69, title: 'Hanger 75', category: 'Hanger', image: '/imageProduct/Hanger/75.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 70, title: 'Hanger 70', category: 'Hanger', image: '/imageProduct/Hanger/70.png', description: '', gallery: [], isPopular: false, isNew: true },
  { id: 71, title: 'Hanger 50', category: 'Hanger', image: '/imageProduct/Hanger/50.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 72, title: 'Hanger 39', category: 'Hanger', image: '/imageProduct/Hanger/39.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 73, title: 'Hanger 38', category: 'Hanger', image: '/imageProduct/Hanger/38.png', description: '', gallery: [], isPopular: true, isNew: true },
  { id: 74, title: 'Hanger 35', category: 'Hanger', image: '/imageProduct/Hanger/35.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 75, title: 'Hanger 34', category: 'Hanger', image: '/imageProduct/Hanger/34.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 76, title: 'Hanger 28', category: 'Hanger', image: '/imageProduct/Hanger/28.png', description: '', gallery: [], isPopular: false, isNew: true },
  { id: 77, title: 'Hanger 26', category: 'Hanger', image: '/imageProduct/Hanger/26.png', description: '', gallery: [], isPopular: true, isNew: false },
  { id: 78, title: 'Hanger 25', category: 'Hanger', image: '/imageProduct/Hanger/25.png', description: '', gallery: [], isPopular: false, isNew: false },
  { id: 79, title: 'Hanger 24', category: 'Hanger', image: '/imageProduct/Hanger/24.png', description: '', gallery: [], isPopular: true, isNew: true },
  { id: 80, title: 'Hanger 12', category: 'Hanger', image: '/imageProduct/Hanger/12.png', description: '', gallery: [], isPopular: false, isNew: false },
];

// Danh sách id sản phẩm tiêu biểu (chỉ id)
export const featuredProductIds: number[] = [
  1, 5, 7, 11, 15, 17, 23, 27, 31, 41, 45, 47, 51, 53, 59, 61, 63, 65, 67, 73
]; 