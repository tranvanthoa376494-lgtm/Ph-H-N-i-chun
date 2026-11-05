/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FIVE_LAYERS_DATA } from '../utils/monograph';
import { Utensils } from 'lucide-react';

export const FiveLayersSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
      {/* Nhãn phụ nhỏ phía trên: ĐỌC VỊ BÁT PHỞ */}
      <div className="text-center max-w-[760px] mx-auto mb-10 md:mb-14 space-y-3">
        <span className="label-caps text-[#8C4027] font-semibold tracking-widest block">
          ĐỌC VỊ BÁT PHỞ
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2A221E] tracking-tight">
          5 lớp vị tạo nên bát phở ngon
        </h2>
        <p className="font-body text-[#55433D] text-base leading-relaxed">
          Một bát phở chuẩn vị không đến từ ngẫu nhiên, mà đúc kết từ kỹ nghệ nấu nướng tinh tế qua từng chi tiết nhỏ.
        </p>
      </div>

      {/* 5 cột thẻ dọc ngang hàng (Tầng I đến Tầng V) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {FIVE_LAYERS_DATA.map((layer) => {
          const isHighlighted = !!layer.isHighlighted;
          return (
            <div
              key={layer.roman}
              className={`rounded-[12px] p-5 sm:p-6 flex flex-col justify-between transition-all ${
                isHighlighted
                  ? 'bg-[#FAF6F0] border-2 border-[#8C4027] shadow-amber-ambient ring-1 ring-[#8C4027]/30'
                  : 'bg-[#FAF6F0] border border-[rgba(42,34,30,0.12)] shadow-sm'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold tracking-wider ${isHighlighted ? 'text-[#8C4027]' : 'text-[#DEAA48]'}`}>
                    {layer.roman} — {layer.name}
                  </span>
                  {isHighlighted && (
                    <span className="w-2 h-2 rounded-full bg-[#8C4027]" />
                  )}
                </div>

                <h3 className="font-display font-bold text-lg text-[#2A221E] leading-snug">
                  {layer.subtitle}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
                  {layer.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Khối card bên dưới: CARD MÀU NÂU GỐM ĐẬM (#7A3E26 hoặc #8C4027) */}
      <div className="mt-10 sm:mt-12 bg-[#7A3E26] rounded-[16px] p-7 sm:p-9 shadow-amber-ambient text-white">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
          {/* Icon: Chiếc thìa & nĩa đan chéo màu vàng kem sáng (#E8B86D) */}
          <div className="w-14 h-14 rounded-full bg-white/10 border border-[#E8B86D]/40 flex items-center justify-center shrink-0">
            <Utensils className="w-7 h-7 text-[#E8B86D] stroke-[1.8]" />
          </div>

          <div className="space-y-1.5">
            {/* Nhãn nhỏ: KINH NGHIỆM THƯỞNG THỨC */}
            <span className="text-[11px] font-bold text-[#E8B86D] tracking-widest uppercase block">
              KINH NGHIỆM THƯỞNG THỨC
            </span>
            {/* Tiêu đề: Cách thưởng thức đúng vị */}
            <h3 className="font-display font-bold text-2xl text-white">
              Cách thưởng thức đúng vị
            </h3>
            {/* Trích dẫn in nghiêng màu trắng sáng (sử dụng font-body tiếng Việt chuẩn để không bị lỗi font từ 'đầu' và 'giấm') */}
            <p className="font-body italic text-white/95 text-base sm:text-lg leading-relaxed pt-1 font-normal">
              &ldquo;Húp thìa nước dùng đầu tiên để cảm nhận trọn vẹn vị ngọt xương trước khi thêm chanh, ớt, giấm tỏi.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
