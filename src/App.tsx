/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TakeawaysSection } from './components/TakeawaysSection';
import { JourneySection } from './components/JourneySection';
import { FiveLayersSection } from './components/FiveLayersSection';
import { FieldPhotosCarousel } from './components/FieldPhotosCarousel';
import { PhoNowInteractiveMap } from './components/PhoNowInteractiveMap';
import { BookExcerptsSection } from './components/BookExcerptsSection';
import { AuthorsSection } from './components/AuthorsSection';
import { OrderAndFooter } from './components/OrderAndFooter';

export default function App() {
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToOrder = () => {
    handleScrollToSection('dat-sach');
  };

  const handleScrollToMap = () => {
    handleScrollToSection('ban-do-pho-now');
  };

  return (
    <div className="min-h-screen bg-[#F6EFE6] text-[#2A221E] selection:bg-[#8C4027]/20 selection:text-[#8C4027] overflow-x-hidden">
      {/* PHẦN 1: KHỐI ĐẦU TRANG & HERO SECTION */}
      <Navbar onScrollToOrder={handleScrollToOrder} />

      <main>
        {/* Khối Hero */}
        <Hero
          onScrollToOrder={handleScrollToOrder}
          onScrollToMap={handleScrollToMap}
        />

        {/* PHẦN 2: BẠN MANG THEO GÌ SAU KHI GẤP SÁCH? */}
        <TakeawaysSection />

        {/* PHẦN 3: LỘ TRÌNH CUỐN SÁCH - HÀNH TRÌNH 5 CHẶNG */}
        <JourneySection />

        {/* PHẦN 4: 5 LỚP VỊ TẠO NÊN BÁT PHỞ NGON */}
        <FiveLayersSection />

        {/* PHẦN 5: KHÔNG KHÍ QUÁN PHỞ QUA ỐNG KÍNH THỰC ĐỊA */}
        <FieldPhotosCarousel />

        {/* PHẦN 6: BẢN ĐỒ PHỞ NOW – 15 TỌA ĐỘ THỰC ĐỊA HOÀN KIẾM */}
        <PhoNowInteractiveMap />

        {/* PHẦN 7: TRÍCH ĐOẠN SÁCH: THƯỞNG THỨC BẰNG MẮT, ĐỌC VỊ BẰNG TRẢI NGHIỆM */}
        <BookExcerptsSection />

        {/* PHẦN 8: ĐỘI NGŨ TÁC GIẢ & LỜI TỰA CHUYÊN GIA */}
        <AuthorsSection />

        {/* PHẦN 9: KHỐI FORM ĐẶT SÁCH & FOOTER */}
        <OrderAndFooter />
      </main>
    </div>
  );
}
