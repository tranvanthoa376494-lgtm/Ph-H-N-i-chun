/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, ShoppingBag, Sparkles } from 'lucide-react';
import { BOOK_PRICE, formatVietnameseCurrency } from '../utils/monograph';

interface HeroProps {
  onScrollToOrder: () => void;
  onScrollToMap: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToOrder,
  onScrollToMap
}) => {
  return (
    <section id="gioi-thieu" className="pt-8 pb-14 md:pt-12 md:pb-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
        {/* Cột trái: Văn bản giới thiệu sách & Kêu gọi hành động */}
        <div className="lg:col-span-6 space-y-6">
          {/* Huy hiệu nhỏ phía trên: SỔ TAY ĐIỀN DÃ VĂN HÓA & VỊ GIÁC ĐÔ THỊ */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF6F0] border border-[#DEAA48] text-[#8C4027] text-xs font-semibold tracking-wider uppercase rounded-[4px] shadow-sm">
            <span>SỔ TAY ĐIỀN DÃ VĂN HÓA &amp; VỊ GIÁC ĐÔ THỊ</span>
          </div>

          {/* Tiêu đề chính lớn */}
          <h1 className="font-display font-bold text-[#2A221E] text-4xl sm:text-5xl lg:text-[50px] xl:text-[54px] lg:leading-[58px] xl:leading-[62px] tracking-[-0.02em]">
            Hiểu Hà Nội Qua Từng Bát Phở
          </h1>

          {/* Tiêu đề phụ */}
          <p className="font-display italic text-[#8C4027] text-xl sm:text-2xl font-normal leading-snug">
            &ldquo;Đi, thưởng thức và đọc vị thành phố qua các góc quán&rdquo;
          </p>

          {/* CÂU TRÍCH DẪN LỜI BÌA SAU (ĐÚNG NGUYÊN VĂN) */}
          <div className="p-4 sm:p-5 rounded-[4px] bg-[#FAF6F0] border-l-[3px] border-[#8C4027] shadow-sm">
            <p className="font-body text-[#55433D] text-sm sm:text-base leading-relaxed italic">
              &ldquo;Cuốn sách đưa bạn đi qua những quán phở lâu năm và những gánh phở vỉa hè để học cách nếm, cách quan sát, và cách đọc vị một thành phố qua thứ người ta ăn mỗi sáng.&rdquo;
            </p>
            <div className="mt-2 text-right">
              <span className="text-xs font-semibold text-[#8C4027] uppercase tracking-wide">
                — Trích lời bìa sau cuốn sách
              </span>
            </div>
          </div>

          {/* 2 nút hành động (CTA) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* [Đặt Sách Ngay - 186.000₫] (Nút màu nâu gốm nổi bật) */}
            <button
              onClick={onScrollToOrder}
              className="btn-primary-terracotta px-7 py-3.5 text-sm uppercase tracking-wide cursor-pointer shadow-amber-ambient"
              aria-label={`Đặt Sách Ngay - ${formatVietnameseCurrency(BOOK_PRICE)}`}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Đặt Sách Ngay — {formatVietnameseCurrency(BOOK_PRICE)}
            </button>

            {/* [Mở Bản Đồ Phở Now] (Nút viền mảnh tinh tế, cuộn xuống khối Bản đồ) */}
            <button
              onClick={onScrollToMap}
              className="btn-secondary-ink px-6 py-3.5 text-sm uppercase tracking-wide cursor-pointer"
              aria-label="Mở Bản Đồ Phở Now"
            >
              <MapPin className="w-4 h-4 mr-2 text-[#DEAA48]" />
              Mở Bản Đồ Phở Now
            </button>
          </div>
        </div>

        {/* Cột phải: Khung hiển thị bìa sách màu vàng be ấm áp, nét vẽ màu nước 3 người ngồi ăn phở dưới tán cây */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="relative group w-full max-w-[480px] xl:max-w-[520px]">
            {/* Khung hiển thị bìa sách */}
            <div className="relative rounded-[8px] overflow-hidden border-2 border-[rgba(42,34,30,0.2)] shadow-2xl transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_48px_-12px_rgba(140,64,39,0.3)] bg-[#FAF6F0]">
              <img
                src="/assets/aistudio/hi_u_67dd69ed.png"
                alt="Bìa sách: Hiểu Hà Nội Qua Từng Bát Phở — Tác giả Công Khanh & Thục Anh"
                className="w-full h-auto object-contain block select-none"
                loading="eager"
              />
              {/* Lớp bóng đổ nhẹ tạo gáy sách tự nhiên */}
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/25 via-black/8 to-transparent pointer-events-none" />
              <div className="absolute inset-0 rounded-[8px] ring-1 ring-inset ring-white/20 pointer-events-none" />
            </div>

            {/* Dòng chú thích ấn bản chính thức */}
            <div className="mt-3.5 text-center">
              <span className="text-[11px] font-semibold text-[#8C4027] uppercase tracking-wider bg-[#FAF6F0] px-3.5 py-1.5 rounded-[4px] border border-[rgba(42,34,30,0.12)] inline-flex items-center gap-1.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#DEAA48]" />
                <span>Bìa sách chính thức • NXB Văn Học &amp; Liên Việt</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
