/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
      {/* Nhãn phụ nhỏ phía trên (có icon cuốn sách mở): LỘ TRÌNH CUỐN SÁCH */}
      <div className="text-center max-w-[760px] mx-auto mb-10 md:mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF6F0] border border-[#DEAA48] text-[#8C4027] text-xs font-semibold uppercase tracking-wider rounded-[4px]">
          <BookOpen className="w-3.5 h-3.5 text-[#DEAA48]" />
          <span>LỘ TRÌNH CUỐN SÁCH</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2A221E] tracking-tight">
          Hành trình 5 chặng
        </h2>
        <p className="font-body text-[#55433D] text-base leading-relaxed">
          Hành trình từ lịch sử trăm năm đến những góc quán hôm nay qua 5 phần sách.
        </p>
      </div>

      {/* 5 cột thẻ ngang hoặc thanh tiến trình có đường kẻ viền màu vàng đất (#D4881A) trên đầu mỗi thẻ */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {/* Chặng 1 */}
        <div className="bg-[#FAF6F0] rounded-[8px] p-5 sm:p-6 border border-[rgba(42,34,30,0.12)] border-t-[4px] border-t-[#D4881A] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold text-[#8C4027] tracking-wider uppercase block">
              CHẶNG 01
            </span>
            <h3 className="font-display font-bold text-lg text-[#2A221E] leading-snug">
              Chặng 1: Giải Mã Một Bát Phở
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
              5 tầng hương vị &amp; nghệ thuật cảm quan Nhìn – Ngửi – Nếm trong 60 giây đầu.
            </p>
          </div>
        </div>

        {/* Chặng 2 */}
        <div className="bg-[#FAF6F0] rounded-[8px] p-5 sm:p-6 border border-[rgba(42,34,30,0.12)] border-t-[4px] border-t-[#D4881A] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold text-[#8C4027] tracking-wider uppercase block">
              CHẶNG 02
            </span>
            <h3 className="font-display font-bold text-lg text-[#2A221E] leading-snug">
              Chặng 2: Phở Trong Dòng Chảy Thời Gian
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
              Dấu chân thế kỷ từ gánh phở 1908 đến thời bao cấp 'không người lái' và di sản văn hóa phi vật thể quốc gia.
            </p>
          </div>
        </div>

        {/* Chặng 3 */}
        <div className="bg-[#FAF6F0] rounded-[8px] p-5 sm:p-6 border border-[rgba(42,34,30,0.12)] border-t-[4px] border-t-[#D4881A] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold text-[#8C4027] tracking-wider uppercase block">
              CHẶNG 03
            </span>
            <h3 className="font-display font-bold text-lg text-[#2A221E] leading-snug">
              Chặng 3: Bản Đồ Vị Giác Thực Địa
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
              Hồ sơ khảo sát điền dã 15 quán phở Hoàn Kiếm kèm phân loại gu vị.
            </p>
          </div>
        </div>

        {/* Chặng 4 */}
        <div className="bg-[#FAF6F0] rounded-[8px] p-5 sm:p-6 border border-[rgba(42,34,30,0.12)] border-t-[4px] border-t-[#D4881A] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold text-[#8C4027] tracking-wider uppercase block">
              CHẶNG 04
            </span>
            <h3 className="font-display font-bold text-lg text-[#2A221E] leading-snug">
              Chặng 4: Phở Trong Kỷ Nguyên Số
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
              Bếp gia truyền đối thoại cùng chuỗi công nghiệp và làn sóng Michelin Guide.
            </p>
          </div>
        </div>

        {/* Chặng 5 */}
        <div className="bg-[#FAF6F0] rounded-[8px] p-5 sm:p-6 border border-[rgba(42,34,30,0.12)] border-t-[4px] border-t-[#D4881A] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold text-[#8C4027] tracking-wider uppercase block">
              CHẶNG 05
            </span>
            <h3 className="font-display font-bold text-lg text-[#2A221E] leading-snug">
              Chặng 5: Sổ Tay Người Đi Phố
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
              Từ điển biệt ngữ bếp phở, 6 khẩu lệnh gọi món và bộ 27 thử thách vị giác thực địa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
