/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  BOOK_PRICE,
  calculateBookTotal,
  formatVietnameseCurrency,
  validateBookOrder,
  BOOK_TITLE,
  AUTHORS,
  PUBLISHERS
} from '../utils/monograph';
import { ShoppingBag, CheckCircle, Gift, MapPin, Truck, RefreshCw, ShieldCheck, Mail, Phone, BookMarked } from 'lucide-react';

export const OrderAndFooter: React.FC = () => {
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [note, setNote] = useState<string>('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [orderCode, setOrderCode] = useState<string>('');

  const totalSummary = calculateBookTotal(quantity);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateBookOrder({
      fullName,
      phone,
      address,
      quantity,
      note
    });

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    const randomCode = 'PHO-' + Math.floor(100000 + Math.random() * 900000);
    setOrderCode(randomCode);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName('');
    setPhone('');
    setAddress('');
    setQuantity(1);
    setNote('');
  };

  return (
    <div>
      {/* Khối Form Đặt Sách */}
      <section id="dat-sach" className="py-14 md:py-24 max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[760px] mx-auto mb-10 md:mb-12 space-y-3">
          <span className="label-caps text-[#8C4027]">SỞ HỮU TÁC PHẨM ĐIỀN DÃ</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2A221E] tracking-tight">
            Đặt sách tại đây
          </h2>
        </div>

        {isSuccess ? (
          /* Màn hình thông báo Xác Nhận Đặt Sách Thành Công */
          <div className="bg-[#FAF6F0] rounded-[16px] border-2 border-[#8C4027] p-7 sm:p-10 shadow-amber-ambient text-center max-w-[700px] mx-auto animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#8C4027] text-[#FAF6F0] mx-auto flex items-center justify-center mb-4 shadow-sm">
              <CheckCircle className="w-9 h-9" />
            </div>

            <span className="inline-block px-3.5 py-1 bg-[#C94A3D] text-white text-[11px] font-semibold tracking-wider uppercase rounded-[4px] mb-3">
              ĐĂNG KÝ ĐẶT SÁCH THÀNH CÔNG
            </span>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#2A221E] mb-2">
              Cảm Ơn Độc Giả {fullName}!
            </h3>

            <p className="text-sm font-body text-[#55433D] max-w-[500px] mx-auto mb-6">
              Yêu cầu đặt sách của bạn đã được tiếp nhận. Ban phát hành sẽ liên hệ qua số điện thoại <strong className="text-[#2A221E]">{phone}</strong> để xác nhận và giao sách sớm nhất.
            </p>

            <div className="p-4 bg-[#F6EFE6] border border-[rgba(42,34,30,0.12)] rounded-[8px] max-w-[340px] mx-auto mb-6">
              <span className="block text-[11px] font-semibold text-[#87726C] uppercase tracking-wider">Mã đơn đặt sách</span>
              <span className="font-mono text-2xl font-bold text-[#8C4027] tracking-wider">
                {orderCode}
              </span>
            </div>

            <div className="text-left bg-white/70 p-5 rounded-[8px] border border-[rgba(42,34,30,0.1)] text-xs text-[#55433D] space-y-2 max-w-[480px] mx-auto mb-8">
              <div className="flex justify-between">
                <span>Tựa sách:</span>
                <strong className="text-[#2A221E]">{BOOK_TITLE}</strong>
              </div>
              <div className="flex justify-between">
                <span>Số lượng:</span>
                <strong className="text-[#2A221E]">{quantity} cuốn</strong>
              </div>
              <div className="flex justify-between">
                <span>Quà tặng kèm:</span>
                <span className="text-[#8C4027] font-semibold">Bản đồ số Phở Now &amp; Bookmark độc bản</span>
              </div>
              <div className="flex justify-between">
                <span>Địa chỉ giao nhận:</span>
                <span className="text-[#2A221E] text-right max-w-[260px]">{address}</span>
              </div>
              <div className="flex justify-between border-t border-dashed border-[rgba(42,34,30,0.15)] pt-2 text-sm font-semibold text-[#8C4027]">
                <span>Tổng tiền thanh toán (COD):</span>
                <span>{formatVietnameseCurrency(totalSummary.total)}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-secondary-ink px-6 py-2.5 text-xs uppercase tracking-wider cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 mr-2" />
              Đặt thêm sách
            </button>
          </div>
        ) : (
          /* Biểu mẫu đặt mua sách */
          <div className="bg-[#FAF6F0] rounded-[16px] border border-[rgba(42,34,30,0.15)] p-6 sm:p-10 shadow-amber-ambient">
            {/* Giá bìa niêm yết & Quà tặng kèm (hiển thị khung viền nâu gốm trên nền kem với icon nổi bật) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-[rgba(42,34,30,0.1)] items-center">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#2A221E]">
                  Hiểu Hà Nội Qua Từng Bát Phở
                </h3>
                <div className="pt-2 flex items-baseline gap-2">
                  <span className="font-display font-bold text-3xl text-[#8C4027]">
                    186.000₫
                  </span>
                  <span className="text-xs sm:text-sm text-[#55433D] font-medium">/ một cuốn sách</span>
                </div>
              </div>

              {/* Khung viền nâu gốm trên nền kem với icon nổi bật */}
              <div className="p-4 sm:p-5 rounded-[12px] bg-[#F6EFE6] border-2 border-[#8C4027] space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8C4027]">
                  <Gift className="w-5 h-5 text-[#8C4027]" />
                  <span className="uppercase tracking-wider">Quà tặng đặc quyền đính kèm theo sách:</span>
                </div>
                <ul className="text-xs text-[#55433D] space-y-2 pl-1">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#8C4027] shrink-0 mt-0.5" />
                    <span><strong>Tặng quyền truy cập vĩnh viễn Bản đồ số Phở Now</strong> trên Google Maps tích hợp chỉ đường thời gian thực.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookMarked className="w-4 h-4 text-[#8C4027] shrink-0 mt-0.5" />
                    <span><strong>Tặng Bookmark độc bản</strong> in họa tiết Bát Phở Hà Nội trên giấy mỹ thuật.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Biểu mẫu đặt sách: Họ và tên, Số điện thoại, Địa chỉ giao hàng, Số lượng sách, Ghi chú */}
            <form onSubmit={handleSubmit} className="pt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Họ và tên */}
                <div>
                  <label className="block text-xs font-semibold text-[#2A221E] mb-1.5">
                    Họ và tên người nhận *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Văn An"
                    className="w-full bg-[#FAF6F0] text-[#2A221E] text-sm py-3 px-4 rounded-[4px] border border-[rgba(42,34,30,0.2)] focus:outline-none focus:border-[#8C4027] placeholder-[#2A221E]/45 transition-colors"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-[#C94A3D] mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Số điện thoại */}
                <div>
                  <label className="block text-xs font-semibold text-[#2A221E] mb-1.5">
                    Số điện thoại nhận sách *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ví dụ: 0912 307 657"
                    className="w-full bg-[#FAF6F0] text-[#2A221E] text-sm py-3 px-4 rounded-[4px] border border-[rgba(42,34,30,0.2)] focus:outline-none focus:border-[#8C4027] placeholder-[#2A221E]/45 transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-xs text-[#C94A3D] mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Địa chỉ giao hàng */}
              <div>
                <label className="block text-xs font-semibold text-[#2A221E] mb-1.5">
                  Địa chỉ giao hàng chi tiết *
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Số nhà, tên ngõ/đường, phường/xã, quận/huyện, tỉnh/thành phố..."
                  className="w-full bg-[#FAF6F0] text-[#2A221E] text-sm py-3 px-4 rounded-[4px] border border-[rgba(42,34,30,0.2)] focus:outline-none focus:border-[#8C4027] placeholder-[#2A221E]/45 transition-colors"
                />
                {errors.address && (
                  <p className="text-xs text-[#C94A3D] mt-1">{errors.address}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-end">
                {/* Số lượng sách */}
                <div>
                  <label className="block text-xs font-semibold text-[#2A221E] mb-1.5">
                    Số lượng sách *
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-11 h-11 rounded-[4px] border border-[rgba(42,34,30,0.2)] bg-[#FAF6F0] text-lg font-bold text-[#2A221E] hover:border-[#8C4027] transition-colors flex items-center justify-center cursor-pointer"
                      aria-label="Giảm số lượng"
                    >
                      −
                    </button>
                    <span className="font-display font-bold text-xl text-[#2A221E] w-12 text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(20, quantity + 1))}
                      className="w-11 h-11 rounded-[4px] border border-[rgba(42,34,30,0.2)] bg-[#FAF6F0] text-lg font-bold text-[#2A221E] hover:border-[#8C4027] transition-colors flex items-center justify-center cursor-pointer"
                      aria-label="Tăng số lượng"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Ghi chú */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#2A221E] mb-1.5">
                    Ghi chú đơn hàng (tùy chọn)
                  </label>
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi giao..."
                    className="w-full bg-[#FAF6F0] text-[#2A221E] text-sm py-3 px-4 rounded-[4px] border border-[rgba(42,34,30,0.2)] focus:outline-none focus:border-[#8C4027] placeholder-[#2A221E]/45 transition-colors"
                  />
                </div>
              </div>

              {/* Bảng tổng kết chi phí thanh toán */}
              <div className="p-4 rounded-[6px] bg-[#F6EFE6] border border-[rgba(42,34,30,0.12)] space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-[#55433D]">
                  <span>Giá bìa niêm yết ({quantity} cuốn):</span>
                  <span>{formatVietnameseCurrency(totalSummary.subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#55433D]">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#8C4027]" />
                    <span>Phí vận chuyển bọc chống sốc:</span>
                  </span>
                  <span className="text-[#8C4027] font-semibold">Miễn phí giao hàng toàn quốc</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[rgba(42,34,30,0.1)] text-base font-display font-bold text-[#2A221E]">
                  <span>Tổng tiền thanh toán (COD khi nhận):</span>
                  <span className="text-[#8C4027]">{formatVietnameseCurrency(totalSummary.total)}</span>
                </div>
              </div>

              {/* Nút bấm: [Xác Nhận Đặt Sách] (Nâu gốm nổi bật) */}
              <button
                type="submit"
                className="btn-primary-terracotta w-full py-4 text-sm sm:text-base uppercase tracking-wider font-semibold cursor-pointer shadow-amber-ambient"
                aria-label="Xác Nhận Đặt Sách"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Xác Nhận Đặt Sách — {formatVietnameseCurrency(totalSummary.total)}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#87726C] text-center pt-1">
                <ShieldCheck className="w-4 h-4 text-[#8C4027]" />
                <span>Thanh toán COD khi nhận sách • Độc giả được đồng kiểm hàng trước khi thanh toán</span>
              </div>
            </form>
          </div>
        )}
      </section>

      {/* Chân trang (Footer) */}
      <footer className="border-t border-[rgba(42,34,30,0.12)] bg-[#FAF6F0] text-[#55433D] pt-14 pb-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[rgba(42,34,30,0.1)]">
            {/* Cột 1: Thông tin ấn phẩm & Logo */}
            <div className="md:col-span-5 space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[4px] bg-[#8C4027] text-[#FAF6F0] flex items-center justify-center shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M18 12c0 4-2.5 8-6 8s-6-4-6-8h12z" />
                    <path d="M6 12h12" />
                    <path d="M10 4c0 2-1 3-1 4" />
                    <path d="M14 4c0 2-1 3-1 4" />
                    <path d="M12 2v2" />
                  </svg>
                </div>
                <div>
                  <span className="block font-display font-bold text-[#2A221E] text-lg leading-tight">
                    {BOOK_TITLE}
                  </span>
                  <span className="block text-xs text-[#8C4027] font-semibold tracking-wider uppercase">
                    Tác giả: {AUTHORS}
                  </span>
                </div>
              </div>

              <p className="font-body text-xs sm:text-sm leading-relaxed text-[#55433D] max-w-[380px]">
                Cuốn sổ tay điền dã văn hóa qua những góc quán phở Hà Nội, kết nối ký ức thị dân xưa với bản đồ số hiện đại.
              </p>

              <div className="text-xs text-[#87726C] space-y-1">
                <p>Mã tiêu chuẩn xuất bản: <strong>ISBN 978-604-98-1920-4</strong></p>
                <p>Giá bìa niêm yết: <strong>186.000 VNĐ</strong></p>
              </div>
            </div>

            {/* Cột 2: Đơn vị liên kết xuất bản */}
            <div className="md:col-span-3 space-y-3 text-xs">
              <span className="block text-xs font-bold text-[#2A221E] uppercase tracking-wider">
                Đơn Vị Liên Kết Xuất Bản
              </span>
              <div className="space-y-2 text-[#55433D]">
                <p>
                  <strong className="text-[#2A221E] block">Nhà xuất bản Văn học</strong>
                  Đơn vị xuất bản văn học uy tín hàng đầu Việt Nam.
                </p>
                <p>
                  <strong className="text-[#8C4027] block">Công ty CP Văn hóa và Truyền thông Liên Việt</strong>
                  Đơn vị liên kết xuất bản và phát hành chính thức.
                </p>
              </div>
            </div>

            {/* Cột 3: Kênh liên hệ */}
            <div className="md:col-span-4 space-y-3 text-xs">
              <span className="block text-xs font-bold text-[#2A221E] uppercase tracking-wider">
                Kênh Liên Hệ &amp; Hỗ Trợ Độc Giả
              </span>
              <div className="space-y-2.5 text-[#55433D]">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#8C4027] shrink-0" />
                  <span>Email: <a href="mailto:congkhanh155@gmail.com" className="text-[#8C4027] hover:underline font-medium">congkhanh155@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#8C4027] shrink-0" />
                  <span>Hotline: <a href="tel:0912307657" className="text-[#8C4027] hover:underline font-semibold">0912 307 657</a></span>
                </div>
                <div className="flex items-start gap-2 pt-1">
                  <MapPin className="w-4 h-4 text-[#DEAA48] shrink-0 mt-0.5" />
                  <span>Phát hành thực địa: Các nhà sách trên toàn quốc và qua kênh trực tuyến.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tuyên bố miễn trừ trách nhiệm pháp lý */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#87726C] gap-4">
            <p>
              © 2026 Bản quyền tác phẩm thuộc về nhóm tác giả Công Khanh &amp; Thục Anh.
            </p>
            <p className="text-center sm:text-right italic max-w-[620px]">
              Tuyên bố miễn trừ: Mọi thông tin về mức giá và giờ mở cửa tại từng quán có thể biến động theo thời gian thực địa của các hộ kinh doanh gia truyền.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
