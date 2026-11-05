/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onScrollToOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToOrder }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F6EFE6]/95 backdrop-blur-md border-b border-[rgba(42,34,30,0.12)] transition-all">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 h-18 sm:h-20 flex items-center justify-between">
        {/* Bên trái (Logo): Icon Bát phở nhỏ + Chữ "Hiểu Hà Nội" (dòng chữ nhỏ bên dưới: "qua từng bát phở"). TUYỆT ĐỐI KHÔNG để chữ "GIỚI THIỆU" */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[4px] bg-[#8C4027] text-[#FAF6F0] flex items-center justify-center border border-[rgba(42,34,30,0.2)] shadow-sm shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M18 12c0 4-2.5 8-6 8s-6-4-6-8h12z" />
              <path d="M6 12h12" />
              <path d="M10 4c0 2-1 3-1 4" />
              <path d="M14 4c0 2-1 3-1 4" />
              <path d="M12 2v2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-[#2A221E] text-lg sm:text-xl leading-none tracking-tight">
              Hiểu Hà Nội
            </span>
            <span className="text-xs font-serif text-[#8C4027] italic font-normal tracking-wide mt-0.5">
              qua từng bát phở
            </span>
          </div>
        </div>

        {/* Bên phải (CTA duy nhất): Nút bấm màu Nâu gốm (#8C4027) với chữ "Đặt Sách" */}
        <div>
          <button
            onClick={onScrollToOrder}
            className="btn-primary-terracotta px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase cursor-pointer shadow-amber-ambient"
            aria-label="Đặt Sách"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Đặt Sách
          </button>
        </div>
      </div>
    </header>
  );
};
