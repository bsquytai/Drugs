/**
 * Tệp: data_thuoc.js
 * Cấu trúc: Medical English Keys - Vietnamese Values
 * Mô tả: Cơ sở dữ liệu thuốc Nhi Khoa chuẩn hóa. Đã tích hợp 3 thuốc minh họa cấu trúc phức tạp.
 */

const drugDatabase = [
  {
    "id": "amoxicillin_clavulanic",
    "activeIngredient": "Amoxicillin / Acid clavulanic",
    "drugClass": "Kháng sinh - Nhóm Penicillin & Chất ức chế Beta-lactamase",
    "brandNames": [
      { "name": "Augmentin", "strength": "250mg/31.25mg, 500mg/62.5mg", "form": "Gói bột, Viên nén" },
      { "name": "Klamoks", "strength": "228.5mg/5ml, 457mg/5ml", "form": "Hỗn dịch uống" }
    ],
    "mechanism": "Amoxicillin diệt khuẩn bằng cách ức chế tổng hợp thành tế bào vi khuẩn. Acid clavulanic ức chế enzyme beta-lactamase, giúp bảo vệ amoxicillin khỏi bị phân hủy bởi các chủng vi khuẩn sinh men kháng thuốc.",
    "routes": [
      {
        "routeType": "Đường Uống (PO)",
        "dosingList": [
          {
            "indication": "Nhiễm khuẩn nhẹ - trung bình",
            "dose": "Dạng 7:1: 25 - 45 mg amoxicillin/kg/ngày",
            "interval": "Chia mỗi 12 giờ",
            "maxDose": "1.75 g amoxicillin/ngày"
          },
          {
            "indication": "Nhiễm khuẩn nặng / Viêm tai giữa",
            "dose": "Dạng 14:1: 90 mg amoxicillin/kg/ngày",
            "interval": "Chia mỗi 12 giờ",
            "maxDose": "4 g amoxicillin/ngày"
          }
        ]
      }
    ],
    "organWarnings": {
      "renal": {
        "isWarning": true,
        "method": "DI (Giảm liều + Giãn cách)",
        "eGFRTable": [
          { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Mỗi 8 giờ (Liều không đổi)" },
          { "moc": "10 - 29 mL/min/1.73m²", "lieu": "50% liều tiêu chuẩn, mỗi 12 giờ" },
          { "moc": "< 10 mL/min/1.73m²", "lieu": "50% liều tiêu chuẩn, mỗi 24 giờ" }
        ]
      },
      "hepatic": {
        "isWarning": true,
        "instruction": "Thuốc có thể gây viêm gan ứ mật (đặc biệt dùng kéo dài). Thận trọng khi dùng cho bệnh nhi có rối loạn chức năng gan nền."
      }
    },
    "contraindications": "Tiền sử dị ứng nặng với Penicillin hoặc bất kỳ kháng sinh Beta-lactam nào. Tiền sử vàng da/suy gan liên quan đến Amoxicillin/Clavulanate.",
    "sideEffects": "Tiêu chảy (rất phổ biến, đặc biệt với tỷ lệ Clavulanate cao), buồn nôn, phát ban da, nấm mạc (Candida).",
    "targetLevel": "",
    "administration": "Nên uống ngay trước bữa ăn (hoặc lúc bắt đầu ăn) để giảm thiểu bất dung nạp dạ dày-ruột.",
    "monitoring": "Lâm sàng: Tình trạng phân (tiêu chảy), dấu hiệu dị ứng da.\nCận lâm sàng: Công thức máu, men gan nếu sử dụng phác đồ kéo dài."
  },
  {
    "id": "vancomycin",
    "activeIngredient": "Vancomycin",
    "drugClass": "Kháng sinh - Nhóm Glycopeptide",
    "brandNames": [
      { "name": "Vancocin", "strength": "500mg, 1g", "form": "Lọ bột pha tiêm truyền" }
    ],
    "mechanism": "Ức chế giai đoạn hai của quá trình tổng hợp peptidoglycan thành tế bào vi khuẩn, đồng thời làm thay đổi tính thấm màng tế bào và ức chế tổng hợp RNA của vi khuẩn.",
    "routes": [
      {
        "routeType": "Truyền tĩnh mạch (TTM)",
        "dosingList": [
          {
            "indication": "Nhiễm trùng trung bình đến nặng",
            "dose": "45 - 60 mg/kg/ngày",
            "interval": "Chia mỗi 6 - 8 giờ",
            "maxDose": "2 g/ngày"
          },
          {
            "indication": "Nhiễm trùng MRSA nặng",
            "dose": "60 - 80 mg/kg/ngày",
            "interval": "Chia mỗi 6 - 8 giờ",
            "maxDose": "3 - 3.6 g/ngày"
          }
        ]
      }
    ],
    "organWarnings": {
      "renal": {
        "isWarning": true,
        "method": "I (Tăng khoảng cách)",
        "eGFRTable": [
          { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Mỗi 12 giờ" },
          { "moc": "10 - 29 mL/min/1.73m²", "lieu": "Mỗi 18 - 24 giờ" },
          { "moc": "< 10 mL/min/1.73m²", "lieu": "10 mg/kg mỗi 24 giờ. Liều tiếp theo ĐƯỢC QUYẾT ĐỊNH DỰA VÀO NỒNG ĐỘ HUYẾT THANH (TDM)." }
        ]
      },
      "hepatic": {
        "isWarning": false,
        "instruction": ""
      }
    },
    "contraindications": "Quá mẫn (phản vệ) đã biết với Vancomycin.",
    "sideEffects": "Hội chứng người đỏ (Red Man Syndrome: ban đỏ mặt/cổ do giải phóng histamin). Độc tính trên tai. Độc tính trên thận (Nephrotoxicity) đặc biệt khi dùng chung Aminoglycoside.",
    "targetLevel": "Nhiễm trùng MRSA nặng: Dựa vào TDM để đạt AUC > 400 mg/L*giờ. Thường nhắm tới nồng độ đáy (Trough) 15-20 mcg/mL đối với nhiễm trùng sâu.",
    "administration": "TUYỆT ĐỐI KHÔNG TIÊM BẮP HOẶC TIÊM TĨNH MẠCH NHANH. Truyền tĩnh mạch chậm trong ít nhất 60 phút để tránh Hội chứng người đỏ.",
    "monitoring": "Lâm sàng: Sinh hiệu lúc truyền, thể tích nước tiểu, thính lực.\nCận lâm sàng: Xét nghiệm Creatinine huyết thanh cơ bản và 2-3 ngày/lần. Đo nồng độ đáy trước liều thứ 4."
  },
  {
    "id": "ciprofloxacin",
    "activeIngredient": "Ciprofloxacin",
    "drugClass": "Kháng sinh - Nhóm Fluoroquinolone",
    "brandNames": [
      { "name": "Cipro", "strength": "250mg, 500mg", "form": "Viên nén" },
      { "name": "Ciprofloxacin (Generic)", "strength": "200mg/100ml", "form": "Chai dịch truyền IV" }
    ],
    "mechanism": "Ức chế enzyme DNA gyrase và topoisomerase IV, ngăn cản sự sao chép, phiên mã, sửa chữa và tái tổ hợp DNA của vi khuẩn nhạy cảm.",
    "routes": [
      {
        "routeType": "Đường Uống (PO)",
        "dosingList": [
          {
            "indication": "Nhiễm khuẩn thông thường",
            "dose": "20 - 40 mg/kg/ngày",
            "interval": "Chia mỗi 12 giờ",
            "maxDose": "1.5 g/ngày"
          }
        ]
      },
      {
        "routeType": "Truyền tĩnh mạch (TTM)",
        "dosingList": [
          {
            "indication": "Nhiễm khuẩn nặng / Bệnh nhi không thể uống",
            "dose": "20 - 30 mg/kg/ngày",
            "interval": "Chia mỗi 12 giờ",
            "maxDose": "1.2 g/ngày"
          }
        ]
      }
    ],
    "organWarnings": {
      "renal": {
        "isWarning": true,
        "method": "I (Tăng khoảng cách)",
        "eGFRTable": [
          { "moc": "30 - 50 mL/min/1.73m²", "lieu": "100% liều tiêu chuẩn, giữ nguyên khoảng cách" },
          { "moc": "10 - 29 mL/min/1.73m²", "lieu": "10 - 15 mg/kg/liều, giãn cách mỗi 18 giờ" },
          { "moc": "< 10 mL/min/1.73m²", "lieu": "10 mg/kg/liều, giãn cách mỗi 24 giờ" }
        ]
      },
      "hepatic": {
        "isWarning": true,
        "instruction": "Có nguy cơ hoại tử gan cấp tính hoặc suy gan đe dọa tính mạng. Đã có báo cáo viêm gan do thuốc, cần theo dõi sát ở bệnh nhi có bệnh lý gan nền."
      }
    },
    "contraindications": "Tiền sử quá mẫn với Ciprofloxacin. Tiền sử đứt gân hoặc viêm gân liên quan đến Fluoroquinolone. Dùng đồng thời với tizanidine.",
    "sideEffects": "Tổn thương sụn khớp (cần cân nhắc lợi ích/nguy cơ rất kỹ ở trẻ em). Kéo dài khoảng QT. Nguy cơ viêm gân và đứt gân (đặc biệt gót Achilles).",
    "targetLevel": "",
    "administration": "TTM: Truyền chậm trong ít nhất 60 phút để giảm thiểu kích ứng tĩnh mạch.\nPO: Tránh uống cùng lúc với các chế phẩm chứa Canxi, Sắt, Kẽm, hoặc thuốc kháng acid (phải uống cách nhau ít nhất 2 giờ do tạo phức chelate làm mất tác dụng thuốc).",
    "monitoring": "Lâm sàng: Đau khớp, sưng gân (đặc biệt gót chân), điện tâm đồ (nếu có tiền sử bệnh tim hoặc dùng chung thuốc kéo dài QT).\nCận lâm sàng: Đánh giá chức năng thận (Creatinine) và gan (AST, ALT) định kỳ."
  }
];
