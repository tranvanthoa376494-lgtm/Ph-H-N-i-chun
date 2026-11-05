/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const BOOK_PRICE = 186000;
export const BOOK_TITLE = "Hiểu Hà Nội Qua Từng Bát Phở";
export const BOOK_SUBTITLE = "Đi, thưởng thức và đọc vị thành phố qua các góc quán";
export const AUTHORS = "Công Khanh — Thục Anh";
export const PUBLISHERS = "NXB Văn học & Liên Việt";

export interface PhoSpotFull {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  gu_vi: string;
  gio_mo_cua: string;
  muc_gia: string;
  mon_nen_goi: string;
  dau_an: string;
  luu_y: string;
}

export const HOAN_KIEM_15_SPOTS: PhoSpotFull[] = [
  {
    id: 1,
    name: "Phở Bát Đàn",
    address: "49 Bát Đàn, Cửa Đông, Hoàn Kiếm",
    lat: 21.0345,
    lng: 105.8471,
    gu_vi: "Gu Thanh",
    gio_mo_cua: "06:00 – 11:00 & 17:00 – 21:30",
    muc_gia: "55.000 – 70.000đ",
    mon_nen_goi: "Bát Tái Nạm + quẩy giòn + chén đầu hành chần",
    dau_an: "4 năm liền đạt Michelin Bib Gourmand (2023 - 2026)",
    luu_y: "Xếp hàng trả tiền trước và tự bưng bát; bàn có ớt ngâm ngũ sắc; nên dùng giấm tỏi tía, tránh vắt nhiều chanh làm mất vị ngọt sá sùng."
  },
  {
    id: 2,
    name: "Phở Thìn Bờ Hồ",
    address: "19 Hàng Vôi (dời từ 61 Đinh Tiên Hoàng)",
    lat: 21.0325,
    lng: 105.8562,
    gu_vi: "Gu Béo",
    gio_mo_cua: "06:00 – 13:00 & 17:30 – 21:00",
    muc_gia: "55.000 – 100.000đ",
    mon_nen_goi: "Bát Tái Chín hoặc Tái Gầu giòn + trứng chần nước trong",
    dau_an: "Thương hiệu phở gia truyền dòng họ Bùi hơn 70 năm",
    luu_y: "Tôn thờ kỹ nghệ 'tái đập' trên mặt thớt và hương gừng nướng xém; khác biệt với phở tái lăn mỡ tỏi Lò Đúc."
  },
  {
    id: 3,
    name: "Phở Tư Lùn",
    address: "23C Hai Bà Trưng, Tràng Tiền, Hoàn Kiếm",
    lat: 21.0252,
    lng: 105.8524,
    gu_vi: "Gu Đậm",
    gio_mo_cua: "06:00 – 09:00 & 18:00 – 22:30",
    muc_gia: "55.000 – 90.000đ",
    mon_nen_goi: "Tái Đập Chín Nạm (hoặc Tái Đập Sốt Vang) + quẩy giòn",
    dau_an: "Biển hiệu gia truyền nức tiếng ngã tư Hàng Bài từ thập niên 1940",
    luu_y: "Nước dùng đục ngà ngả nâu sánh đậm tủy ninh ròng rã 24h, đậm đà mắm cốt cá cơm; bát bưng ra thịt còn ánh hồng, nhanh tay dùng đũa dìm thịt xuống nước sôi."
  },
  {
    id: 4,
    name: "Phở Sướng",
    address: "24B ngõ Trung Yên, Đinh Liệt, Hoàn Kiếm",
    lat: 21.0337,
    lng: 105.8519,
    gu_vi: "Gu Thanh (sắc thái Béo nhẹ)",
    gio_mo_cua: "05:30 – 12:15 & 17:00 – 21:30",
    muc_gia: "60.000 – 85.000đ",
    mon_nen_goi: "Bát Đặc Biệt (nạm - gầu - gân - mọc) hoặc Chín Nạm",
    dau_an: "Khởi phát từ gánh 'cụ Tàu áo xanh' phố cổ thập niên 1930",
    luu_y: "Nước dùng vàng nhạt ngọt đượm thịt luộc tảng; cọng hành hoa để nguyên cả cây dài cắm dọc trong bát."
  },
  {
    id: 5,
    name: "Phở Khôi Hói",
    address: "50C Hàng Vải (ngã ba Hàng Vải - Phùng Hưng)",
    lat: 21.0366,
    lng: 105.8465,
    gu_vi: "Gu Thanh",
    gio_mo_cua: "06:00 – 11:30 & 17:30 – 21:30",
    muc_gia: "60.000 – 120.000đ",
    mon_nen_goi: "Bát Lõi Gầu giòn hoặc Bắp Lõi tái",
    dau_an: "Michelin Bib Gourmand các năm 2024 - 2026",
    luu_y: "Khách gọi đến đâu mới lạng thịt tươi đến đó; menu thịt bò chuyên sâu (lõi rùa, bắp hoa, gầu giòn); nước mộc thanh tôn thịt."
  },
  {
    id: 6,
    name: "Phở Gà Nguyệt",
    address: "5B Phủ Doãn, Hàng Trống, Hoàn Kiếm",
    lat: 21.0305,
    lng: 105.8483,
    gu_vi: "Gu Thanh",
    gio_mo_cua: "06:30 – 13:00 (nước) & 17:30 – 00:30 (trộn đêm)",
    muc_gia: "50.000 – 90.000đ",
    mon_nen_goi: "Phở nước đùi chặt da giòn (ngày) / Phở gà trộn đùi (đêm)",
    dau_an: "Michelin Bib Gourmand liên tiếp từ 2023 đến 2026",
    luu_y: "Gà đẻ hai lứa da đanh giòn; ca đêm có phở trộn chua ngọt rưới sốt độc quyền, rắc lạc rang và hành phi."
  },
  {
    id: 7,
    name: "Phở Cồ Chiêu Việt",
    address: "48 Hàng Đồng, Hàng Bồ, Hoàn Kiếm",
    lat: 21.0361,
    lng: 105.8494,
    gu_vi: "Gu Thanh",
    gio_mo_cua: "06:00 – 13:00 (chỉ bán sáng)",
    muc_gia: "50.000 – 90.000đ",
    mon_nen_goi: "Bát Chín Gầu giòn hoặc Tái Nạm ngọt mộc + quẩy",
    dau_an: "Truyền nhân dòng họ Cồ (làng Vân Cù, Nam Định) trên đất kinh kỳ",
    luu_y: "TUYỆT ĐỐI KHÔNG DÙNG CHANH QUẤT suốt 40 năm qua; bàn phở chỉ phục vụ giấm tỏi gạo để giữ trọn vị ngọt mộc tủy xương."
  },
  {
    id: 8,
    name: "Phở Gà Châm",
    address: "64 - 68 Yên Ninh, Quán Thánh, Ba Đình",
    lat: 21.0428,
    lng: 105.8449,
    gu_vi: "Gu Thanh",
    gio_mo_cua: "06:30 – 14:00 (bán sáng đến trưa)",
    muc_gia: "75.000 – 120.000đ (bát đặc biệt đùi tràng trứng đến 150k-200k)",
    mon_nen_goi: "Bát Đùi chặt da giòn gọi thêm trứng tràng + quẩy",
    dau_an: "Michelin Selected bốn năm liền (2023 - 2026)",
    luu_y: "Phân khúc cao cấp, chất lượng gà thả vườn da giòn thịt đanh; nước dùng gà thanh khiết thoang thoảng lá chanh tươi."
  },
  {
    id: 9,
    name: "Phở Thìn Lò Đúc",
    address: "13 Lò Đúc, Phạm Đình Hổ, Hai Bà Trưng",
    lat: 21.0181,
    lng: 105.8576,
    gu_vi: "Gu Béo",
    gio_mo_cua: "05:00 – 22:00 (mở cả ngày)",
    muc_gia: "70.000 – 90.000đ",
    mon_nen_goi: "Bát Tái Lăn truyền thống ngập hành + đĩa quẩy giòn",
    dau_an: "Khai sinh trường phái Phở Tái Lăn chảo gang từ năm 1979",
    luu_y: "Thịt thăn đảo lửa lớn bốc khói cùng gừng và vốc tỏi băm; bát phở ngập tràn mỡ tỏi phi thơm nức; trả tiền trước tại quầy."
  },
  {
    id: 10,
    name: "Phở Bò Thanh Béo",
    address: "36 Nguyễn Du (cơ sở 2: 33 Quang Trung)",
    lat: 21.0195,
    lng: 105.8489,
    gu_vi: "Gu Thanh",
    gio_mo_cua: "06:00 – 14:00 & 17:30 – 22:00",
    muc_gia: "50.000 – 100.000đ",
    mon_nen_goi: "Bát Phở Lõi giòn hoặc Tái Lăn + xin thêm bát cơm nguội",
    dau_an: "Mô hình phở hiện đại hai tầng sạch sẽ phố Nguyễn Du",
    luu_y: "Hành lá cắt khúc dài độc đáo; nét hào sảng tặng kèm bát cơm nguội miễn phí để trút vào nước dùng ăn no ấm bụng."
  },
  {
    id: 11,
    name: "Phở Gà Huyền Hương",
    address: "20 Bảo Khánh, Hàng Trống, Hoàn Kiếm",
    lat: 21.0312,
    lng: 105.8517,
    gu_vi: "Gu Thanh",
    gio_mo_cua: "06:30 – 22:30",
    muc_gia: "90.000 – 160.000đ",
    mon_nen_goi: "Bát Phở Gà Đầy Đủ Đặc Biệt hoặc Đĩa Gà Rút Xương",
    dau_an: "Địa chỉ Michelin Selected trong căn nhà cổ hai tầng ven hồ Gươm",
    luu_y: "Thịt gà được lóc dao tỉ mỉ từng phần; không gian ấm cúng, lịch sự mang phong cách nhà hàng phố cổ."
  },
  {
    id: 12,
    name: "Phở Gà Tiến",
    address: "103 Nguyễn Trường Tộ, Quán Thánh, Ba Đình",
    lat: 21.0441,
    lng: 105.8427,
    gu_vi: "Gu Thanh",
    gio_mo_cua: "06:00 – 13:30 (bán ca sáng và trưa)",
    muc_gia: "50.000 – 85.000đ",
    mon_nen_goi: "Bát phở đùi chặt da giòn kèm tràng trứng non",
    dau_an: "Michelin Selected (các năm 2023, 2025, 2026)",
    luu_y: "Gà ta thả vườn thịt ngọt da đanh; nước dùng ninh từ xương gà và sá sùng đượm vị mộc tự nhiên."
  },
  {
    id: 13,
    name: "Phở Bò Ấu Triệu",
    address: "34 Ấu Triệu, Hàng Trống, Hoàn Kiếm",
    lat: 21.0298,
    lng: 105.8491,
    gu_vi: "Gu Đậm (sắc thái Béo ngậy)",
    gio_mo_cua: "06:30 – 10:30 (chỉ bán ca sáng)",
    muc_gia: "65.000 – 90.000đ",
    mon_nen_goi: "Bát Tái Sốt Vang hoặc Gầu Sốt Vang + quẩy giòn",
    dau_an: "Michelin Bib Gourmand (2023 - 2025), tiếp nối trực hệ cụ Tư Lùn",
    luu_y: "Ngay chân Nhà thờ Lớn; nức tiếng với món bò sốt vang gân om nâu cánh gián dẻo quánh hòa cùng nước tủy đục ngậy."
  },
  {
    id: 14,
    name: "Phở 10 Lý Quốc Sư",
    address: "Số 10 Lý Quốc Sư, Hàng Trống, Hoàn Kiếm",
    lat: 21.0308,
    lng: 105.8496,
    gu_vi: "Gu Thanh",
    gio_mo_cua: "06:00 – 22:00 (mở thông trưa)",
    muc_gia: "75.000 – 160.000đ",
    mon_nen_goi: "Bát Tái Nạm hoặc Tái Gầu Giòn",
    dau_an: "Michelin Bib Gourmand 4 năm liên tiếp (2023 – 2026)",
    luu_y: "Bếp mở bọc kính mặt phố; lát tái thăn mềm hồng ngọt; nước hầm xương ống 12h ổn định; không gian máy lạnh tiện nghi."
  },
  {
    id: 15,
    name: "Phở Cuốn Chinh Thắng",
    address: "7 Mạc Đĩnh Chi, Ngũ Xã, Trúc Bạch, Ba Đình",
    lat: 21.0456,
    lng: 105.8415,
    gu_vi: "Gu Thanh mát",
    gio_mo_cua: "10:00 – 14:30 & 16:30 – 21:00",
    muc_gia: "45.000 – 90.000đ",
    mon_nen_goi: "Đĩa Phở cuốn (10 cái) + Phở chiên phồng giòn xốp",
    dau_an: "Michelin Selected (2025 - 2026), cái nôi khai sinh phở cuốn Ngũ Xã",
    luu_y: "Lá bánh phở tươi cuộn thịt bò xào lửa lớn chấm nước mắm chua ngọt; thích hợp ăn trưa hoặc chiều mát giải nhiệt, không bán phở nước sáng sớm."
  }
];

export interface TakeawayItem {
  id: number;
  title: string;
  desc: string;
  iconName: 'utensils' | 'compass' | 'mic' | 'mapPin';
}

export const TAKEAWAYS_DATA: TakeawayItem[] = [
  {
    id: 1,
    title: "Giải mã 5 tầng\nhương vị",
    desc: "Nắm vững nghệ thuật Nhìn – Ngửi – Nếm mẻ nước dùng đầu 5:30 sáng; nhận biết vị ngọt sâu từ sá sùng nướng tự nhiên thay vì phụ thuộc bột ngọt công nghiệp.",
    iconName: 'utensils'
  },
  {
    id: 2,
    title: "Định vị gu vị cá nhân",
    desc: "Xác định phong cách vị giác của riêng mình giữa 3 trường phái: Gu Thanh (trong mộc, thơm gừng nướng), Gu Béo (sánh ngậy mỡ gầu, dậy khói chảo gang) hay Gu Đậm (nồng mắm cốt).",
    iconName: 'compass'
  },
  {
    id: 3,
    title: "Tự tin gọi món như người sành phố",
    desc: "Nằm lòng 6 khẩu lệnh gọi món chuẩn xác trong 3 giây và cuốn từ điển biệt ngữ bếp phở (bát chiết yêu, gầu giòn, bắp hoa, lõi rùa).",
    iconName: 'mic'
  },
  {
    id: 4,
    title: "La bàn thực địa không\nbao giờ cũ",
    desc: "Sở hữu 15 tọa độ Hoàn Kiếm tích hợp mã mở bản đồ số Phở Now trên Google Maps, cập nhật chỗ gửi xe và giờ mở cửa thực tế.",
    iconName: 'mapPin'
  }
];

export interface JourneyStage {
  stage: number;
  title: string;
  desc: string;
}

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    stage: 1,
    title: "Chặng 1: Giải Mã Một Bát Phở",
    desc: "5 tầng hương vị & nghệ thuật cảm quan Nhìn – Ngửi – Nếm trong 60 giây đầu."
  },
  {
    stage: 2,
    title: "Chặng 2: Phở Trong Dòng Chảy Thời Gian",
    desc: "Dấu chân thế kỷ từ gánh phở 1908 đến thời bao cấp 'không người lái' và di sản văn hóa phi vật thể quốc gia."
  },
  {
    stage: 3,
    title: "Chặng 3: Bản Đồ Vị Giác Thực\nĐịa",
    desc: "Hồ sơ khảo sát điền dã 15 quán phở Hoàn Kiếm kèm phân loại gu vị."
  },
  {
    stage: 4,
    title: "Chặng 4: Phở Trong Kỷ Nguyên\nSố",
    desc: "Bếp gia truyền đối thoại cùng chuỗi công nghiệp và làn sóng Michelin Guide."
  },
  {
    stage: 5,
    title: "Chặng 5: Sổ Tay Người Đi Phố",
    desc: "Từ điển biệt ngữ bếp phở, 6 khẩu lệnh gọi món và bộ 27 thử thách vị giác thực địa."
  }
];

export interface FiveLayerItem {
  roman: string;
  name: string;
  subtitle: string;
  desc: string;
  isHighlighted?: boolean;
}

export const FIVE_LAYERS_DATA: FiveLayerItem[] = [
  {
    roman: "TẦNG I",
    name: "Nước dùng",
    subtitle: "Ngọt thanh từ xương ống",
    desc: "Xương bò ninh liu riu 12 tiếng cùng sá sùng nướng thơm, ngọt đậm đà tự nhiên, không mì chính hoá học."
  },
  {
    roman: "TẦNG II",
    name: "Bánh phở",
    subtitle: "Dải lụa bánh phở",
    desc: "Tráng mỏng từ gạo tẻ cũ, mặt ráp vừa đủ để ngấm trọn nước dùng, mềm mướt mà không nát.",
    isHighlighted: true
  },
  {
    roman: "TẦNG III",
    name: "Thịt bò",
    subtitle: "Miếng thịt trên thớt",
    desc: "Thăn tái đập dập mềm mọng, nạm dẻo thơm, gầu giòn sần sật thái đều tay."
  },
  {
    roman: "TẦNG IV",
    name: "Váng mỡ",
    subtitle: "Áo mỡ giữ nhiệt",
    desc: "Lớp màng mỡ mỏng giữ bát phở luôn nóng hổi và khóa trọn mùi thơm thảo mộc."
  },
  {
    roman: "TẦNG V",
    name: "Gia vị",
    subtitle: "Hương sương khói",
    desc: "Hành hoa cọng nhỏ cay dịu, gừng nướng xém cùng tiêu bắc xay thơm nồng."
  }
];

export interface FieldPhoto {
  id: number;
  imageSrc: string;
  tag: string;
  title: string;
  desc: string;
}

export const FIELD_PHOTOS_DATA: FieldPhoto[] = [
  {
    id: 1,
    imageSrc: "/assets/aistudio/image_92ffb9ec.png",
    tag: "Bếp lửa sớm",
    title: "Nồi nước dùng 5:30 sáng",
    desc: "Đôi tay thoăn thoắt múc từng muôi nước dùng trong vắt, bốc khói ấm nồng tỏa khắp phố."
  },
  {
    id: 2,
    imageSrc: "/assets/aistudio/image_7d07b7e9.png",
    tag: "Bát phở chuẩn vị",
    title: "Tái lăn ngập hành hoa",
    desc: "Thớ thịt bò hồng hào mềm mọng, điểm xuyết giấm tỏi và hạt tiêu thơm nức mũi."
  },
  {
    id: 3,
    imageSrc: "/assets/aistudio/image_65a5aadd.png",
    tag: "Nhịp sống hè phố",
    title: "Phở Bò Ấu Triệu",
    desc: "Dãy ghế nhựa san sát, nhân viên áo đỏ tất bật phục vụ thực khách từ mờ sáng."
  },
  {
    id: 4,
    imageSrc: "/assets/aistudio/image_64b6d323.png",
    tag: "Góc quán quen",
    title: "Phở Cuốn Chinh Thắng",
    desc: "Thực khách đủ mọi thế hệ quây quần bàn nhỏ dưới bóng mát hiên nhà đường Mạc Đĩnh Chi."
  },
  {
    id: 5,
    imageSrc: "/assets/aistudio/image_f305a3e7.png",
    tag: "Chứng thư di sản",
    title: "Chứng Nhận Di Sản",
    desc: "Bằng khen của Bộ Ngoại giao và chứng nhận UNESCO dành cho quán Phở Thìn Bờ Hồ."
  }
];

export interface OrderFormValues {
  fullName: string;
  phone: string;
  address: string;
  quantity: number;
  note: string;
}

export function calculateBookTotal(quantity: number): {
  unitPrice: number;
  subtotal: number;
  shippingFee: number;
  total: number;
} {
  const qty = Math.max(1, quantity);
  const subtotal = BOOK_PRICE * qty;
  const shippingFee = 0;
  return {
    unitPrice: BOOK_PRICE,
    subtotal,
    shippingFee,
    total: subtotal + shippingFee
  };
}

export function formatVietnameseCurrency(amount: number): string {
  return new Intl.NumberFormat('vi-VN').format(amount) + '₫';
}

export function validateBookOrder(values: Partial<OrderFormValues>): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!values.fullName || values.fullName.trim().length < 2) {
    errors.fullName = "Vui lòng nhập họ và tên người nhận sách (tối thiểu 2 ký tự).";
  }

  const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
  if (!values.phone || !phoneRegex.test(values.phone.trim().replace(/\s+/g, ''))) {
    errors.phone = "Vui lòng nhập số điện thoại hợp lệ (10 chữ số, ví dụ: 0912 307 657).";
  }

  if (!values.address || values.address.trim().length < 6) {
    errors.address = "Vui lòng cung cấp địa chỉ nhận sách chi tiết (số nhà, ngõ/đường, phường/xã, quận/huyện).";
  }

  if (!values.quantity || values.quantity < 1) {
    errors.quantity = "Số lượng mua tối thiểu là 1 cuốn.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
