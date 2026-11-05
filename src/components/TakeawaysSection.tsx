/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Utensils, Compass, Mic, MapPin } from 'lucide-react';

export const TakeawaysSection: React.FC = () => {
  return (
    <section className="py-12 md:py-18 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
      {/* Tiêu đề chính & dòng mô tả phụ */}
      <div className="text-center max-w-[800px] mx-auto mb-10 md:mb-14 space-y-3">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2A221E] tracking-tight">
          Bạn mang theo gì sau khi gấp sách?
        </h2>
        <p className="font-body text-[#55433D] text-base leading-relaxed">
          Không chỉ là câu chuyện lịch sử, cuốn sổ tay trang bị cho bạn cách nếm chuẩn vị, 
          khẩu lệnh gọi món trong 3 giây và tấm bản đồ tìm đúng quán hợp gu mình.
        </p>
      </div>

      {/* Lưới 4 thẻ: nền card trắng kem (#FAF6F0), viền mảnh bo góc 16px, icon nét vẽ màu nâu gốm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Thẻ 1 */}
        <div className="bg-[#FAF6F0] rounded-[16px] p-6 sm:p-7 border border-[rgba(42,34,30,0.12)] shadow-sm hover:shadow-amber-ambient transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-[10px] bg-[#8C4027]/10 text-[#8C4027] flex items-center justify-center">
              <Utensils className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#2A221E] leading-snug">
              Giải mã 5 tầng hương vị
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
              Nắm vững nghệ thuật Nhìn – Ngửi – Nếm mẻ nước dùng đầu 5:30 sáng; nhận biết vị ngọt sâu từ sá sùng nướng tự nhiên thay vì phụ thuộc bột ngọt công nghiệp.
            </p>
          </div>
        </div>

        {/* Thẻ 2 */}
        <div className="bg-[#FAF6F0] rounded-[16px] p-6 sm:p-7 border border-[rgba(42,34,30,0.12)] shadow-sm hover:shadow-amber-ambient transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-[10px] bg-[#8C4027]/10 text-[#8C4027] flex items-center justify-center">
              <Compass className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#2A221E] leading-snug">
              Định vị gu vị cá nhân
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
              Xác định phong cách vị giác của riêng mình giữa 3 trường phái: Gu Thanh (trong mộc, thơm gừng nướng), Gu Béo (sánh ngậy mỡ gầu, dậy khói chảo gang) hay Gu Đậm (nồng mắm cốt).
            </p>
          </div>
        </div>

        {/* Thẻ 3 */}
        <div className="bg-[#FAF6F0] rounded-[16px] p-6 sm:p-7 border border-[rgba(42,34,30,0.12)] shadow-sm hover:shadow-amber-ambient transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-[10px] bg-[#8C4027]/10 text-[#8C4027] flex items-center justify-center">
              <Mic className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#2A221E] leading-snug">
              Tự tin gọi món như người sành phố
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
              Nằm lòng 6 khẩu lệnh gọi món chuẩn xác trong 3 giây và cuốn từ điển biệt ngữ bếp phở (bát chiết yêu, gầu giòn, bắp hoa, lõi rùa).
            </p>
          </div>
        </div>

        {/* Thẻ 4 */}
        <div className="bg-[#FAF6F0] rounded-[16px] p-6 sm:p-7 border border-[rgba(42,34,30,0.12)] shadow-sm hover:shadow-amber-ambient transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-[10px] bg-[#8C4027]/10 text-[#8C4027] flex items-center justify-center">
              <MapPin className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#2A221E] leading-snug">
              La bàn thực địa không bao giờ cũ
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#55433D] leading-relaxed">
              Sở hữu 15 tọa độ Hoàn Kiếm tích hợp mã mở bản đồ số Phở Now trên Google Maps, cập nhật chỗ gửi xe và giờ mở cửa thực tế.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
