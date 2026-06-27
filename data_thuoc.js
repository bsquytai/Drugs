/**
 * Tệp: data_thuoc.js
 * Cấu trúc: Medical English Keys - Vietnamese Values
 * Mô tả: Cơ sở dữ liệu thuốc Nhi Khoa chuẩn hóa, hỗ trợ Đa đường dùng, eGFR Ma trận, TDM.
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
        "routeType": "PO (Đường Uống)",
        "dosingList": [
          {
            "indication": "Nhiễm khuẩn nhẹ - trung bình",
            "dose": "Dạng 7:1 (Ví dụ 400/57): 25 - 45 mg amoxicillin/kg/ngày",
            "interval": "Chia mỗi 12 giờ",
            "maxDose": "1.75 g amoxicillin/ngày"
          },
          {
            "indication": "Nhiễm khuẩn nặng / Viêm tai giữa",
            "dose": "Dạng 14:1 (Ví dụ 600/42.9): 90 mg amoxicillin/kg/ngày",
            "interval": "Chia mỗi 12 giờ",
            "maxDose": "4 g amoxicillin/ngày"
          },
          {
            "indication": "Dạng 4:1 truyền thống",
            "dose": "20 - 40 mg amoxicillin/kg/ngày",
            "interval": "Chia mỗi 8 giờ",
            "maxDose": "1.5 g amoxicillin/ngày"
          }
        ]
      }
    ],
    "organWarnings": {
      "renal": {
        "isWarning": true,
        "method": "DI (Giảm liều + Tăng khoảng cách)",
        "eGFRTable": [
          { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Mỗi 8 giờ (Liều không đổi)" },
          { "moc": "10 - 29 mL/min/1.73m²", "lieu": "50% liều tiêu chuẩn, mỗi 12 giờ" },
          { "moc": "< 10 mL/min/1.73m²", "lieu": "50% liều tiêu chuẩn, mỗi 24 giờ" }
        ]
      },
      "hepatic": {
        "isWarning": true,
        "instruction": "Thận trọng khi dùng cho bệnh nhân suy gan. Thuốc có thể gây viêm gan ứ mật (đặc biệt ở người lớn tuổi hoặc dùng kéo dài). Cần theo dõi chức năng gan định kỳ."
      }
    },
    "contraindications": "Tiền sử dị ứng nặng với Penicillin hoặc bất kỳ kháng sinh Beta-lactam nào. Tiền sử vàng da/suy gan liên quan đến Amoxicillin/Clavulanate.",
    "sideEffects": "Tiêu chảy (rất phổ biến, đặc biệt với tỷ lệ Clavulanate cao), buồn nôn, phát ban da, nấm mạc (Candida).",
    "targetLevel": "",
    "administration": "Nên uống ngay trước bữa ăn (hoặc lúc bắt đầu ăn) để giảm thiểu bất dung nạp dạ dày-ruột và tối ưu hóa sự hấp thu của Acid clavulanic.",
    "monitoring": "Lâm sàng: Tình trạng phân (tiêu chảy), dấu hiệu dị ứng da, tình trạng cải thiện nhiễm trùng.\nCận lâm sàng: Công thức máu, chức năng gan thận nếu sử dụng phác đồ kéo dài."
  },
  {
    "id": "vancomycin",
    "activeIngredient": "Vancomycin",
    "drugClass": "Kháng sinh - Nhóm Glycopeptide",
    "brandNames": [
      { "name": "Vancocin", "strength": "500mg, 1g", "form": "Lọ bột pha tiêm truyền" },
      { "name": "Vancomycin (Generic)", "strength": "500mg, 1g", "form": "Lọ bột pha tiêm" }
    ],
    "mechanism": "Ức chế giai đoạn hai của quá trình tổng hợp peptidoglycan thành tế bào vi khuẩn, đồng thời làm thay đổi tính thấm màng tế bào và ức chế tổng hợp RNA của vi khuẩn.",
    "routes": [
      {
        "routeType": "TTM (Truyền tĩnh mạch)",
        "dosingList": [
          {
            "indication": "Nhiễm trùng thông thường",
            "dose": "40 mg/kg/ngày",
            "interval": "Chia mỗi 6 giờ",
            "maxDose": "500 mg/liều"
          },
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
    "sideEffects": "Hội chứng người đỏ (Red Man Syndrome: ban đỏ mặt/cổ, tụt huyết áp do giải phóng histamin). Độc tính trên tai (giảm thính lực/điếc). Độc tính trên thận (Nephrotoxicity) đặc biệt khi dùng chung với thuốc độc thận khác (Aminoglycoside).",
    "targetLevel": "Nhiễm trùng MRSA nặng: Dựa vào TDM để đạt AUC > 400 mg/L*giờ. Trên lâm sàng thực hành thường nhắm tới nồng độ đáy (Trough level) 10-15 mcg/mL (nhiễm trùng nhẹ) hoặc 15-20 mcg/mL (nhiễm trùng sâu, nặng).",
    "administration": "TUYỆT ĐỐI KHÔNG TIÊM BẮP HOẶC TIÊM TĨNH MẠCH NHANH. Phải pha loãng thuốc (nồng độ tối đa thường 5 mg/mL) và truyền tĩnh mạch chậm trong ít nhất 60 phút (hoặc tốc độ tối đa 10 mg/phút) để tránh Hội chứng người đỏ.",
    "monitoring": "Lâm sàng: Sinh hiệu lúc truyền, thể tích nước tiểu, thính lực.\nCận lâm sàng: Xét nghiệm Creatinine huyết thanh cơ bản và 2-3 ngày/lần. Đo nồng độ đáy của Vancomycin trước liều thứ 4."
  }
];
