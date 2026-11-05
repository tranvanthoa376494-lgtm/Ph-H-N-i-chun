/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { FIELD_PHOTOS_DATA } from '../utils/monograph';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const FieldPhotosCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 md:py-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
      {/* Tiêu đề chính, mô tả phụ và Mũi tên 2 đầu điều hướng ở góc trên bên phải */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
        <div className="space-y-2.5 max-w-[720px]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF6F0] border border-[#DEAA48] text-[#8C4027] text-xs font-semibold uppercase tracking-wider rounded-[4px]">
            <Camera className="w-3.5 h-3.5 text-[#DEAA48]" />
            <span>KÝ HỌA THỰC ĐỊA BẰNG HÌNH ẢNH</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2A221E] tracking-tight">
            Không khí quán phở qua ống kính thực địa
          </h2>
          <p className="font-body text-[#55433D] text-base leading-relaxed">
            Ghi lại những khoảnh khắc chân thực nhất bên bàn thớt, nồi nước dùng sôi và nếp sinh hoạt vỉa hè Hà Nội.
          </p>
        </div>

        {/* Hướng dẫn điều hướng: Biểu tượng MŨI TÊN 2 ĐẦU (< >) nổi bật ở góc trên bên phải */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-[rgba(42,34,30,0.2)] bg-[#FAF6F0] text-[#2A221E] hover:bg-[#8C4027] hover:text-white transition-colors flex items-center justify-center cursor-pointer shadow-xs"
            aria-label="Xem ảnh trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-[rgba(42,34,30,0.2)] bg-[#FAF6F0] text-[#2A221E] hover:bg-[#8C4027] hover:text-white transition-colors flex items-center justify-center cursor-pointer shadow-xs"
            aria-label="Xem ảnh tiếp theo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bố cục hiển thị: Thanh trượt Carousel ngang (vuốt hoặc kéo ngang) gồm đúng 5 thẻ ảnh */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {FIELD_PHOTOS_DATA.map((item) => (
          <div
            key={item.id}
            className="min-w-[280px] sm:min-w-[320px] max-w-[320px] snap-start bg-[#FAF6F0] rounded-[16px] overflow-hidden border border-[rgba(42,34,30,0.14)] shadow-sm hover:shadow-amber-ambient transition-all flex flex-col justify-between shrink-0 group"
          >
            {/* Ảnh minh họa chụp thực tế */}
            <div className="relative aspect-[3/4] overflow-hidden bg-black/5">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-[#8C4027] text-white text-[11px] font-semibold tracking-wider uppercase rounded-[4px] shadow-sm">
                  {item.tag}
                </span>
              </div>
            </div>

            {/* Thông tin mô tả bên dưới ảnh */}
            <div className="p-5 space-y-2 bg-[#FAF6F0]">
              <h3 className="font-display font-bold text-lg text-[#2A221E] leading-snug">
                {item.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dòng lưu ý nhỏ ở dưới cùng */}
      <p className="text-xs text-[#87726C] text-center italic mt-5">
        (*) 100% hình ảnh khảo sát điền dã thực tế từ nhóm tác giả. Vuốt ngang để khám phá thêm các góc quán.
      </p>
    </section>
  );
};
