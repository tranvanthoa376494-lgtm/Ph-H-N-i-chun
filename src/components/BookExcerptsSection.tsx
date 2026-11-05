/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const BookExcerptsSection: React.FC = () => {
  return (
    <section id="trich-doan" className="py-12 md:py-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
      {/* Tiêu đề chính */}
      <div className="text-center max-w-[840px] mx-auto mb-10 md:mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF6F0] border border-[#DEAA48] text-[#8C4027] text-xs font-semibold uppercase tracking-wider rounded-[4px]">
          <BookOpen className="w-3.5 h-3.5 text-[#DEAA48]" />
          <span>TRÍCH ĐOẠN SÁCH THỰC ĐỊA</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2A221E] tracking-tight">
          Trích Đoạn Sách: Thưởng Thức Bằng Mắt, Đọc Vị Bằng Trải Nghiệm
        </h2>
        <p className="font-body text-[#55433D] text-base leading-relaxed">
          Bước vào không gian sống động của từng góc quán qua lăng kính <br />quan sát chi tiết và ngôn ngữ đời thực.
        </p>
      </div>

      {/* Bố cục gồm 2 cột lớn cân đối hoàn hảo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Cột bên trái: KHẨU QUYẾT VỈA HÈ */}
        <div className="lg:col-span-6 bg-[#FAF6F0] rounded-[16px] p-6 sm:p-8 border border-[rgba(42,34,30,0.12)] shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-[11px] font-bold text-[#8C4027] tracking-widest uppercase block">
              KHẨU QUYẾT VỈA HÈ
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#2A221E]">
              Khẩu lệnh gọi món trong 3s
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
              Giữa tiếng thớt gỗ chát chúa và làn hơi mịt mù, một người sành ăn không bao giờ chần chừ trước người chia thịt:
            </p>

            {/* Khung hiển thị: Đặt ảnh chụp bát phở bò tái gắp đũa thịt bò mềm mọng ngập hành và đĩa chanh */}
            <div className="relative rounded-[10px] overflow-hidden border border-[rgba(42,34,30,0.12)] shadow-xs aspect-[16/10]">
              <img
                src="/assets/aistudio/image_b74ae49d.png"
                alt="Bát phở bò tái mềm mọng gắp đũa thịt ngập hành hoa và dĩa chanh"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/70 backdrop-blur-xs text-white text-[11px] rounded-[3px]">
                Ảnh thực địa: Bát phở tái ngập hành hoa
              </div>
            </div>

            {/* 3 câu khẩu lệnh kinh điển (kèm đường viền dọc đỏ nổi bật bên trái) */}
            <div className="space-y-3 pt-2">
              <div className="p-3 sm:p-3.5 bg-[#F6EFE6] rounded-r-[6px] border-l-[4px] border-[#C94A3D]">
                <p className="font-bold text-sm text-[#2A221E]">
                  &ldquo;Tái chín nước trong nhiều hành&rdquo;
                </p>
                <p className="text-xs text-[#55433D] mt-0.5">
                  — Chuẩn mực phở thanh tao buổi sớm.
                </p>
              </div>

              <div className="p-3 sm:p-3.5 bg-[#F6EFE6] rounded-r-[6px] border-l-[4px] border-[#C94A3D]">
                <p className="font-bold text-sm text-[#2A221E]">
                  &ldquo;Tái đập sốt vang nước đục&rdquo;
                </p>
                <p className="text-xs text-[#55433D] mt-0.5">
                  — Đậm đà, gợn mỡ ngậy ngày gió rét.
                </p>
              </div>

              <div className="p-3 sm:p-3.5 bg-[#F6EFE6] rounded-r-[6px] border-l-[4px] border-[#C94A3D]">
                <p className="font-bold text-sm text-[#2A221E]">
                  &ldquo;Chín nạm gầu giòn thêm hành trần&rdquo;
                </p>
                <p className="text-xs text-[#55433D] mt-0.5">
                  — Khẩu vị sành sỏi tận hưởng trọn vẹn từng thớ thịt.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cột bên phải: Gồm 2 card xếp chồng lấp đầy khoảng trắng */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-6">
          
          {/* Card trên (Nền be nhạt): TỪ VỰNG KÝ ỨC */}
          <div className="bg-[#FAF6F0] rounded-[16px] p-6 sm:p-7 border border-[rgba(42,34,30,0.12)] shadow-sm space-y-4 flex-1">
            <span className="text-[11px] font-bold text-[#DEAA48] tracking-widest uppercase block">
              TỪ VỰNG KÝ ỨC
            </span>
            <h3 className="font-display font-bold text-2xl text-[#2A221E]">
              Từ điển biệt ngữ bếp phở
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
              Giải nghĩa và phân loại các thuật ngữ chuyên ngành để thực khách đưa ra &ldquo;mệnh lệnh&rdquo; dứt khoát trong vòng 3 giây, thể hiện bản thân là một người &ldquo;sành ăn&rdquo;.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-[6px] bg-[#F6EFE6] border border-[rgba(42,34,30,0.08)]">
                <span className="font-bold text-xs text-[#8C4027] block mb-1">Bát chiết yêu</span>
                <p className="text-[11px] text-[#55433D] leading-relaxed">
                  Dáng bát gốm loe miệng thon đáy giữ nhiệt tối đa.
                </p>
              </div>

              <div className="p-3 rounded-[6px] bg-[#F6EFE6] border border-[rgba(42,34,30,0.08)]">
                <span className="font-bold text-xs text-[#8C4027] block mb-1">Phở không người lái</span>
                <p className="text-[11px] text-[#55433D] leading-relaxed">
                  Bát phở thời bao cấp chan nước béo, không thịt.
                </p>
              </div>

              <div className="p-3 rounded-[6px] bg-[#F6EFE6] border border-[rgba(42,34,30,0.08)]">
                <span className="font-bold text-xs text-[#8C4027] block mb-1">Bắp hoa &amp; Lõi rùa</span>
                <p className="text-[11px] text-[#55433D] leading-relaxed">
                  Phần thịt hiếm giòn đanh, thớ vân hoa cơ bò thượng hạng.
                </p>
              </div>
            </div>
          </div>

          {/* Card dưới (Nền nâu gốm #7A3E26, chữ trắng): HÀNH TRÌNH TRẢI NGHIỆM */}
          <div className="bg-[#7A3E26] rounded-[16px] p-6 sm:p-7 shadow-amber-ambient text-white space-y-3.5 flex-1 flex flex-col justify-center">
            <span className="text-[11px] font-bold text-[#E8B86D] tracking-widest uppercase block">
              HÀNH TRÌNH TRẢI NGHIỆM
            </span>
            <h3 className="font-display font-bold text-2xl text-white">
              Sổ tay 27 trải nghiệm vị giác Hà Nội
            </h3>
            <p className="font-body text-xs sm:text-sm text-white/90 leading-relaxed">
              Checklist điền dã dành cho người yêu phở: nhâm nhi bát phở nóng trên vỉa hè phố cổ, thưởng thức quẩy giòn ngập trong nước dùng béo ngậy, húp thìa nước mộc lúc 5:30 sáng.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-[#E8B86D] font-medium">
              <Sparkles className="w-4 h-4 text-[#E8B86D]" />
              <span>Đi kèm trang ký tên và đóng dấu lưu niệm của các chủ quán phố cổ</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
