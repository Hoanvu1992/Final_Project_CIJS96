const newLists = [
  {
    id: 1,
    title:
      "Giống Lúa Làm Nên Gạo Ngon Nhất Thế Giới Sẽ Được Trồng Tại Bạc Liêu",
    imageNew: "../../public/tin_tuc/photo_2024-06-01 14_18_45.jpeg",
    content:
      "Giống lúa ST25 làm nên hạt gạo ngon nhất thế giới sẽ chính thức được trồng tại Bạc Liêu trong năm nay. Đây là kết quả của sự hợp tác giữa UBND tỉnh Bạc Liêu và nhóm tác giả sở hữu gạo ngon nhất thế giới.",
  },
  {
    id: 2,
    title: "Sẽ Có Nhà Máy Chuyên Chế Biến Gạo Ngon Nhất Thế Giới ST25",
    imageNew:
      "../../public/tin_tuc/se-co-nha-may-chuyen-che-bien-gao-ngon-nhat-the-gioi-st25-2.jpg",
    content:
      "Ngoài việc xây dựng nhà máy chuyên chế biến gạo ngon nhất thế giới ST25, khu vực nhà máy còn phục dựng quá trình lai tạo giống lúa ST25 ...",
  },
  {
    id: 3,
    title: "Vì Sao Người Việt Thích Ăn Gạo Hữu Cơ Campuchia?",
    imageNew:
      "../../public/tin_tuc/vi-sao-nguoi-viet-thich-an-gao-huu-co-campuchia-6.jpg",
    content:
      "Mấy năm gần đây nhiều người tiêu dùng khu vực phía Nam tiêu thụ mạnh gạo Campuchia hơn là gạo Việt. Vì sao đất nước đang xuất khẩu gạo nhiều nhất nhì thế giới như chúng ta lại có chuyện nghịch lý như thế này?",
  },
  {
    id: 4,
    title: "Gạo Ngon Chất Lượng Uy Tín Cho Bữa Cơm Gia Đình Việt Nam",
    imageNew:
      "../../public/tin_tuc/gao-ngon-chat-luong-uy-tin-cho-bua-com-gia-dinh-viet-nam-2.png",
    content:
      "Bữa cơm sum họp, đoàn viên, đầm ấm bên gia đình - có lẽ với mỗi người con đất Việt, cảm giác đó là hạnh phúc, thân thương và lắng đọng lâu nhất trong tâm trí. Cũng chính vì thế gạo ngon cho bữa cơm gia đình luôn có ý nghĩa sâu sắc trong mỗi người Việt chúng ta.",
  },
  {
    id: 5,
    title: "Cách Phân Biệt Gạo Lứt Thường Và Gạo Lứt Huyết Rồng",
    imageNew:
      "../../public/tin_tuc/cach-phan-biet-gao-lut-thuong-va-gao-lut-huyet-rong.jpg",
    content:
      "Ngày nay, việc chữa bệnh và làm đẹp bằng gạo lứt đang dần phổ biến và được nhiều người tin dùng. Chúng ta hay sử dụng gạo lứt để ăn hàng ngày, pha trà, làm sữa uống thường xuyên nhưng đa số lại không có nhiều hiểu biết về loại thực phẩm bổ dưỡng này. Đặc biệt, có rất ít người nắm vững kiến thức về sự khác nhau giữa gạo lức thường và gạo huyết rồng.",
  },
  {
    id: 6,
    title: "Gạo Ngon Chất Lượng Uy Tín Cho Bữa Cơm Gia Đình Việt Nam",
    imageNew:
      "../../public/tin_tuc/gao-ngon-chat-luong-uy-tin-cho-bua-com-gia-dinh-viet-nam-2.png",
    content:
      "Bữa cơm sum họp, đoàn viên, đầm ấm bên gia đình - có lẽ với mỗi người con đất Việt, cảm giác đó là hạnh phúc, thân thương và lắng đọng lâu nhất trong tâm trí. Cũng chính vì thế gạo ngon cho bữa cơm gia đình luôn có ý nghĩa sâu sắc trong mỗi người Việt chúng ta.",
  },
  {
    id: 7,
    title: "Hướng Dẫn Nấu Cơm Gạo Lứt Tím Mềm Dẻo Thơm Ngon",
    imageNew:
      "../../public/tin_tuc/huong-dan-nau-com-gao-lut-tim-mem-deo-thom-ngon-2.jpg",
    content: "Gạo tím than được nấu như các loại gạo thông thường khác.",
  },
  {
    id: 8,
    title: "Chia Sẻ Cách Chế Biến Món Ăn Từ Gạo Việt Nam Ngon Nhất Thế Giới",
    imageNew:
      "../../public/tin_tuc/chia-se-cach-che-bien-mon-an-tu-gao-viet-nam-ngon-nhat-the-gioi-3.jpg",
    content:
      "Gạo đặc sản Sóc Trăng ST25 còn được biết đến là loại gạo Việt Nam ngon nhất thế giới. Vậy bạn biết cách chế biến các món ăn từ loại gạo tuyệt vời này chưa.",
  },
  {
    id: 9,
    title: "6 Món Ăn Vặt Từ Gạo Hấp Dẫn Nhất Lại Dễ Làm",
    imageNew:
      "../../public/tin_tuc/6-mon-an-vat-tu-gao-hap-dan-nhat-lai-de-lam-3.jpg",
    content:
      "Món ăn vặt từ gạo của Việt Nam phải nói là vô cùng phong phú và hấp dẫn.",
  },
  {
    id: 10,
    title: "Những Món Ăn Ngon Từ Gạo Sạch Việt Nam",
    imageNew: "../../public/tin_tuc/nhung-mon-an-ngon-tu-gao-sach-viet-nam.jpg",
    content:
      "Nói đến ẩm thực Việt Nam phải nhắc đến phở, bún, hủ tiếu, bánh căn, bánh bèo, bánh xèo, cơm tấm, cơm lam, cơm nị, cơm cháy chà bông, ... Đây là những món ăn được chế biến từ gạo gắn bó lâu đời với người Việt.",
  },
];

export default newLists;
