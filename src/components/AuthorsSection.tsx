/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote, Award, CheckCircle2, BookOpen } from 'lucide-react';

export const AuthorsSection: React.FC = () => {
  return (
    <section id="tac-gia" className="py-12 md:py-20 bg-[#FAF6F0] border-y border-[rgba(42,34,30,0.12)]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Phần tiêu đề được đẩy lên trước phần trích dẫn của TS. Đỗ Thị Hương Thảo */}
        <div className="text-center max-w-[760px] mx-auto mb-10 md:mb-12 space-y-3">
          <span className="label-caps text-[#8C4027]">SỰ GIAO THOA GIỮA HAI THẾ HỆ</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2A221E] tracking-tight">
            Đội Ngũ Tác Giả &amp; Lời Tựa Chuyên Gia
          </h2>
          <p className="font-body text-[#55433D] text-base leading-relaxed">
            Sự kết hợp giữa ngòi bút báo chí lịch sử kỳ cựu và góc nhìn số hóa hiện đại của thế hệ trẻ.
          </p>
        </div>

        {/* Trích dẫn lời tựa của Tiến sĩ Đỗ Thị Hương Thảo (TRÍCH DẪN NGUYÊN VĂN ĐẦY ĐỦ, KHÔNG CÓ DẤU BA CHẤM) */}
        <div className="max-w-[960px] mx-auto mb-14">
          <div className="relative p-6 sm:p-10 rounded-[12px] border-l-[4px] border-[#8C4027] bg-[#F6EFE6] shadow-amber-ambient">
            <Quote className="w-9 h-9 text-[#8C4027]/25 mb-2 -scale-x-100" />
            
            <blockquote className="font-display italic text-[#2A221E] text-lg sm:text-2xl leading-relaxed mb-6">
              &ldquo;Một công trình của sự say mê và đối thoại thú vị giữa hai thế hệ. Phở ở đây không chỉ là ẩm thực, mà hiện lên như một lát cắt lịch sử sống động của một thành phố không ngừng biến đổi.&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[rgba(42,34,30,0.1)]">
              <div>
                <cite className="font-display not-italic font-bold text-base sm:text-lg text-[#8C4027] block">
                  TS. Đỗ Thị Hương Thảo
                </cite>
                <span className="text-xs text-[#55433D] font-medium">
                  Khoa Lịch sử, Trường ĐH Khoa học Xã hội và Nhân văn (ĐHQG Hà Nội)
                </span>
              </div>
              <span className="label-caps text-[#87726C] text-[11px] self-start sm:self-auto bg-white/70 px-2.5 py-1 rounded-[4px] border border-[rgba(42,34,30,0.08)]">
                Lời giới thiệu đầu sách
              </span>
            </div>
          </div>
        </div>

        {/* Hồ sơ 2 tác giả */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1040px] mx-auto">
          {/* Tác giả 1: Nguyễn Công Khanh */}
          <div className="bg-[#F6EFE6] rounded-[16px] p-6 sm:p-8 border border-[rgba(42,34,30,0.15)] shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#8C4027] text-[#FAF6F0] flex items-center justify-center font-display font-bold text-xl shadow-sm shrink-0">
                  CK
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#2A221E]">
                    Nguyễn Công Khanh
                  </h3>
                  <span className="text-xs text-[#8C4027] font-semibold tracking-wider uppercase block">
                    Nhà báo, Cử nhân Lịch sử
                  </span>
                </div>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
                Nhà báo theo dõi và nghiên cứu lịch sử đô thị Hà Nội. Anh là bảo chứng cho tính khách quan, trung thực và chiều sâu tư liệu của từng trang viết.
              </p>

              {/* Nguyên tắc thực địa "Ba Không" */}
              <div className="p-4 rounded-[10px] bg-[#FAF6F0] border border-[rgba(140,64,39,0.2)] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8C4027]">
                  <Award className="w-4 h-4 text-[#DEAA48]" />
                  <span>Nguyên tắc thực địa &ldquo;Ba Không&rdquo;:</span>
                </div>
                <ul className="text-xs text-[#55433D] space-y-2 pl-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8C4027] shrink-0 mt-0.5" />
                    <span><strong>Không nhận tài trợ:</strong> Tuyệt đối từ chối tiền hay quyền lợi từ các quán phở.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8C4027] shrink-0 mt-0.5" />
                    <span><strong>Không sao chép mạng:</strong> Trực tiếp trải nghiệm nhiều mẻ nước dùng khác nhau.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8C4027] shrink-0 mt-0.5" />
                    <span><strong>Không viết về nơi chưa trực tiếp ăn và trả tiền:</strong> Mỗi tọa độ đều được trả tiền như mọi thực khách bình dân.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tác giả 2: Trần Thục Anh */}
          <div className="bg-[#F6EFE6] rounded-[16px] p-6 sm:p-8 border border-[rgba(42,34,30,0.15)] shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#DEAA48] text-[#2A221E] flex items-center justify-center font-display font-bold text-xl shadow-sm shrink-0">
                  TA
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#2A221E]">
                    Trần Thục Anh
                  </h3>
                  <span className="text-xs text-[#8C4027] font-semibold tracking-wider uppercase block">
                    Học sinh giỏi Lịch sử (Vinschool Times City)
                  </span>
                </div>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
                Người mang đến góc nhìn Gen Z tươi mới, kết nối di sản văn hóa truyền thống với bản đồ số hiện đại và thói quen du khảo của giới trẻ đương thời.
              </p>

              <div className="p-4 rounded-[10px] bg-[#FAF6F0] border border-[rgba(42,34,30,0.15)] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8C4027]">
                  <BookOpen className="w-4 h-4 text-[#8C4027]" />
                  <span>Đóng góp then chốt vào công trình:</span>
                </div>
                <ul className="text-xs text-[#55433D] space-y-2 pl-1">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C4027] mt-1.5" />
                    <span>Xây dựng &amp; số hóa hệ thống Bản Đồ Phở Now trên nền tảng Google Maps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C4027] mt-1.5" />
                    <span>Thiết kế Sổ tay 27 Thử thách Vị giác dành riêng cho bạn trẻ du khảo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C4027] mt-1.5" />
                    <span>Ghi chép cảm quan vị giác chân thực của thế hệ học sinh sinh viên.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
