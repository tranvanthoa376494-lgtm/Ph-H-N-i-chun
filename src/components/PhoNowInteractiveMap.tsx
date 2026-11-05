/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HOAN_KIEM_15_SPOTS, PhoSpotFull } from '../utils/monograph';
import { MapPin, ExternalLink, Clock, DollarSign, Utensils, Award, Lightbulb } from 'lucide-react';

export const PhoNowInteractiveMap: React.FC = () => {
  const [selectedGu, setSelectedGu] = useState<string>('all');
  const [activeSpotId, setActiveSpotId] = useState<number>(1);

  const filteredSpots = selectedGu === 'all'
    ? HOAN_KIEM_15_SPOTS
    : HOAN_KIEM_15_SPOTS.filter(s => s.gu_vi.toLowerCase().includes(selectedGu.toLowerCase()));

  const activeSpot = HOAN_KIEM_15_SPOTS.find(s => s.id === activeSpotId) || HOAN_KIEM_15_SPOTS[0];

  return (
    <section id="ban-do-pho-now" className="py-12 md:py-20 bg-[#FAF6F0] border-y border-[rgba(42,34,30,0.12)]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Tiêu đề & Giới thiệu khối */}
        <div className="text-center max-w-[840px] mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F6EFE6] border border-[#DEAA48] text-[#8C4027] text-xs font-semibold uppercase tracking-wider rounded-[4px]">
            <MapPin className="w-3.5 h-3.5 text-[#DEAA48]" />
            <span>Dữ liệu thực địa - Hoàn Kiếm</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2A221E] tracking-tight">
            Bản Đồ Phở Now - 15 Toạ Độ Thực Địa Khu Vực Hoàn Kiếm
          </h2>
          <p className="font-body text-[#55433D] text-base leading-relaxed">
            Tấm bản đồ số mở đồng bộ theo thời gian thực, dẫn đường vào từng con ngõ nhỏ, định vị điểm gửi xe thuận tiện và cập nhật khung giờ mở cửa chính xác của từng góc quán.
          </p>
        </div>

        {/* Bố cục 2 cột tương tác trực tiếp */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bên trái: Bộ lọc tabs + Danh sách 15 thẻ quán cuộn dọc */}
          <div className="lg:col-span-5 space-y-4">
            {/* Bộ lọc tabs theo 3 Gu vị */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedGu('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-[4px] border transition-all cursor-pointer ${
                  selectedGu === 'all'
                    ? 'bg-[#8C4027] text-[#FAF6F0] border-[#8C4027] shadow-sm'
                    : 'bg-[#F6EFE6] text-[#2A221E] border-[rgba(42,34,30,0.15)] hover:border-[#8C4027]'
                }`}
              >
                Tất cả (15)
              </button>
              <button
                onClick={() => setSelectedGu('thanh')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-[4px] border transition-all cursor-pointer ${
                  selectedGu === 'thanh'
                    ? 'bg-[#8C4027] text-[#FAF6F0] border-[#8C4027] shadow-sm'
                    : 'bg-[#F6EFE6] text-[#2A221E] border-[rgba(42,34,30,0.15)] hover:border-[#8C4027]'
                }`}
              >
                Gu Thanh
              </button>
              <button
                onClick={() => setSelectedGu('beo')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-[4px] border transition-all cursor-pointer ${
                  selectedGu === 'beo'
                    ? 'bg-[#8C4027] text-[#FAF6F0] border-[#8C4027] shadow-sm'
                    : 'bg-[#F6EFE6] text-[#2A221E] border-[rgba(42,34,30,0.15)] hover:border-[#8C4027]'
                }`}
              >
                Gu Béo
              </button>
              <button
                onClick={() => setSelectedGu('dam')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-[4px] border transition-all cursor-pointer ${
                  selectedGu === 'dam'
                    ? 'bg-[#8C4027] text-[#FAF6F0] border-[#8C4027] shadow-sm'
                    : 'bg-[#F6EFE6] text-[#2A221E] border-[rgba(42,34,30,0.15)] hover:border-[#8C4027]'
                }`}
              >
                Gu Đậm
              </button>
            </div>

            {/* Danh sách 15 thẻ quán cuộn dọc */}
            <div className="space-y-3 max-h-[620px] overflow-y-auto pr-2 scrollbar-thin">
              {filteredSpots.map((spot) => {
                const isSelected = spot.id === activeSpotId;
                return (
                  <div
                    key={spot.id}
                    onClick={() => setActiveSpotId(spot.id)}
                    className={`p-4 rounded-[10px] border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#F6EFE6] border-2 border-[#8C4027] shadow-sm'
                        : 'bg-white/70 border-[rgba(42,34,30,0.12)] hover:bg-[#F6EFE6]/70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="font-display font-bold text-base text-[#2A221E]">
                        {spot.id}. {spot.name}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-[2px] bg-[#8C4027]/10 text-[#8C4027] shrink-0">
                        {spot.gu_vi}
                      </span>
                    </div>

                    <p className="text-xs text-[#55433D] flex items-center gap-1.5 mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8C4027] shrink-0" />
                      <span>{spot.address}</span>
                    </p>

                    <p className="text-xs text-[#2A221E] font-medium pt-1.5 border-t border-[rgba(42,34,30,0.06)] line-clamp-1">
                      🍜 {spot.mon_nen_goi}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Nút liên kết mở My Maps */}
            <div className="pt-1">
              <a
                href="https://www.google.com/maps/d/viewer?hl=vi&mid=1JeW6y1IwHxTwPrlTENiH1wWKEaH0xPo&ll=21.033623700000014%2C105.84651470000003&z=13"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-terracotta w-full py-3.5 text-xs sm:text-sm uppercase tracking-wider font-semibold inline-flex items-center justify-center gap-2 shadow-amber-ambient"
              >
                <MapPin className="w-4 h-4" />
                <span>Mở Bản Đồ Trên Google Maps</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Bên phải: Bản đồ Google Maps nhúng + THẺ THÔNG TIN CHI TIẾT CỦA QUÁN */}
          <div className="lg:col-span-7 space-y-5">
            {/* Khung bản đồ tự động chuyển tâm vào đúng tọa độ của quán được click */}
            <div className="bg-white rounded-[16px] overflow-hidden border border-[rgba(42,34,30,0.15)] shadow-amber-ambient">
              <iframe
                key={`${activeSpot.lat}-${activeSpot.lng}`}
                src={`https://maps.google.com/maps?q=${activeSpot.lat},${activeSpot.lng}&z=17&output=embed`}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title={`Vị trí ${activeSpot.name} trên Google Maps`}
              />
            </div>

            {/* THẺ THÔNG TIN CHI TIẾT CỦA QUÁN (Info Card nổi bật) */}
            <div className="bg-[#FAF6F0] rounded-[16px] p-6 sm:p-7 border-2 border-[#8C4027] shadow-amber-ambient space-y-4">
              {/* Tên quán (Tiêu đề lớn màu đỏ/nâu gốm) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[rgba(42,34,30,0.1)] pb-3">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#8C4027]">
                  {activeSpot.name}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-[4px] bg-[#8C4027] text-white self-start sm:self-auto">
                  {activeSpot.address}
                </span>
              </div>

              {/* Các mục chi tiết chuẩn hóa theo yêu cầu */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#2A221E] shrink-0">🌿 GU VỊ:</span>
                  <span className="text-[#8C4027] font-semibold">{activeSpot.gu_vi}</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#2A221E] shrink-0">🕒 GIỜ MỞ CỬA:</span>
                  <span className="text-[#55433D]">{activeSpot.gio_mo_cua}</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#2A221E] shrink-0">💰 MỨC GIÁ:</span>
                  <span className="text-[#55433D] font-medium">{activeSpot.muc_gia}</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#2A221E] shrink-0">🏅 DẤU ẤN ẨM THỰC:</span>
                  <span className="text-[#745200] font-medium">{activeSpot.dau_an}</span>
                </div>
              </div>

              {/* Món nên gọi */}
              <div className="p-3.5 rounded-[8px] bg-[#F6EFE6] border-l-[3px] border-[#DEAA48] text-xs sm:text-sm">
                <span className="font-bold text-[#2A221E] block mb-1">🍜 MÓN NÊN GỌI:</span>
                <span className="text-[#8C4027] font-semibold">{activeSpot.mon_nen_goi}</span>
              </div>

              {/* Lưu ý thực khách */}
              <div className="p-3.5 rounded-[8px] bg-white/80 border border-[rgba(42,34,30,0.1)] text-xs sm:text-sm space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#8C4027]">
                  <Lightbulb className="w-4 h-4 text-[#DEAA48]" />
                  <span>💡 LƯU Ý THỰC KHÁCH:</span>
                </div>
                <p className="text-[#55433D] leading-relaxed">
                  {activeSpot.luu_y}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
