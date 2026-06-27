const drugDatabase = [
    {
        "name": "Captopril",
        "class": "Nhóm ức chế men chuyển - ACEI",
        "dosing": "0.3 – 0.5 mg/kg/liều; liều tối đa 6 mg/kg/ngày; chia 2 - 3 lần/ngày. Bổ sung trong bệnh thận IgA: trẻ nhũ nhi dùng 0.05 mg/kg x 4 lần/ngày; trẻ lớn dùng 0.5 mg/kg/lần x 3 lần/ngày.",
        "renal_adj": "Giãn tiểu động mạch đi => giảm áp lực thuỷ tĩnh trong cầu thận => giảm eGFR => suy thận cấp. Tránh sử dụng nhóm thuốc này trong các đợt viêm cầu thận cấp hoặc tổn thương thận cấp có tình trạng thiểu niệu, vô niệu hoặc tăng kali.",
        "side_effects": "Giảm Aldosteron => giảm hấp thu Na => giảm thải K => tăng K máu. Gây tăng Kali máu, nguy cơ tổn thương thận cấp (đặc biệt khi giảm khối lượng tuần hoàn hoặc phối hợp thuốc).",
        "contraindications": "Chống chỉ định tuyệt đối ở phụ nữ có thai, hẹp động mạch thận hai bên hoặc đang tăng kali máu.",
        "brand_names": "Capoten 25mg (viên nén), Captagim 25mg (viên nén)",
        "note": "Thức ăn làm giảm hấp thu thuốc từ 30 - 40%. Bắt buộc dùng lúc bụng đói (1 giờ trước ăn hoặc 2 giờ sau ăn). Theo dõi: Bắt buộc theo dõi điện giải đồ (đặc biệt nồng độ Kali) và nồng độ Creatinin huyết tương trong quá trình sử dụng."
    },
    {
        "name": "Enalapril",
        "class": "Nhóm ức chế men chuyển - ACEI",
        "dosing": "0.08 – 0.6 mg/kg; liều tối đa 1 mg/kg/ngày hoặc 40 mg/ngày; chia 1 - 2 lần dùng.",
        "renal_adj": "",
        "side_effects": "Tương tự Captopril (tăng Kali máu, nguy cơ tổn thương thận cấp).",
        "contraindications": "",
        "brand_names": "Renitec 5mg/10mg (viên nén), Ednyt 5mg (viên nén), Enap 5mg (viên nén)",
        "note": "Theo dõi: Điện giải đồ và Creatinin huyết tương."
    },
    {
        "name": "Ramipril",
        "class": "Nhóm ức chế men chuyển - ACEI",
        "dosing": "1.6 mg/m²/ngày hoặc khởi đầu 0.05 – 0.2 mg/kg/ngày; liều tối đa 10 mg; dùng 1 lần/ngày.",
        "renal_adj": "",
        "side_effects": "Tương tự Captopril.",
        "contraindications": "",
        "brand_names": "Triatec 2.5mg/5mg (viên nén), Cardace 2.5mg (viên nén)",
        "note": "Theo dõi: Điện giải đồ và Creatinin huyết tương."
    },
    {
        "name": "Lisinopril",
        "class": "Nhóm ức chế men chuyển - ACEI",
        "dosing": "Áp dụng cho trẻ > 6 tuổi với liều 0.07 mg/kg/ngày; tối đa 0.6 mg/kg/ngày hoặc 20 mg; dùng 1 lần/ngày.",
        "renal_adj": "",
        "side_effects": "Tương tự Captopril.",
        "contraindications": "",
        "brand_names": "Zestril 5mg/10mg (viên nén), Prinivil 5mg (viên nén)",
        "note": "Theo dõi: Điện giải đồ và Creatinin huyết tương."
    },
    {
        "name": "Losartan",
        "class": "Nhóm chẹn thụ thể - ARB",
        "dosing": "0.5 – 0.7 mg/kg/ngày; tối đa 1.4 mg/kg/ngày hoặc 100 mg/ngày. Trong chỉ định giảm protein niệu có thể dùng liều 0.5 – 2.0 mg/kg/ngày.",
        "renal_adj": "",
        "side_effects": "Có chung tác dụng phụ cốt lõi với nhóm ACEI (nguy cơ tăng Kali máu, suy giảm chức năng thận).",
        "contraindications": "",
        "brand_names": "Cozaar 50mg (viên nén), Lifezar 50mg (viên nén)",
        "note": "Theo dõi: Điện giải đồ và Creatinin huyết tương."
    },
    {
        "name": "Amlodipin",
        "class": "Nhóm chẹn kênh Calci",
        "dosing": "Trẻ 1 - 5 tuổi dùng 0.1 mg/kg/ngày. Trẻ > 6 tuổi dùng khởi đầu 2.5 mg/ngày (tối đa 10 mg/ngày). Dùng 1 - 2 lần/ngày.",
        "renal_adj": "Cơ tim, mạch máu cần Calci để co bóp => Chẹn Calci => Giảm co bóp cơ tim + Giãn cơ trơn mạch máu (vasodilation) và giảm sức cản ngoại vi.",
        "side_effects": "",
        "contraindications": "Chống chỉ định hoặc thận trọng tối đa sử dụng trong trường hợp suy tim sung huyết.",
        "brand_names": "Amlor 5mg (viên nang), Norvasc 5mg (viên nén)",
        "note": "Theo dõi: Theo dõi sát mạch và huyết áp của bệnh nhi."
    },
    {
        "name": "Nifedipin",
        "class": "Nhóm chẹn kênh Calci",
        "dosing": "Uống 0.04 – 0.25 mg/kg/liều (tối đa 1 – 2 mg/kg/liều); chia 4 - 6 lần. Trong điều trị cấp tính viêm cầu thận, liều uống là 2.5 – 10 mg/lần mỗi 4 - 6 giờ. Dạng viên kéo dài dùng 0.25 – 0.5 mg/kg/ngày (tối đa 3 mg/kg/ngày), chia 1 - 2 lần.",
        "renal_adj": "",
        "side_effects": "",
        "contraindications": "Chống chỉ định trong suy tim sung huyết.",
        "brand_names": "Adalat 10mg (viên nang mềm), Adalat LA 30mg (viên phóng thích kéo dài)",
        "note": "Theo dõi: Theo dõi mạch và huyết áp."
    },
    {
        "name": "Nicardipin",
        "class": "Nhóm chẹn kênh Calci - Cấp cứu",
        "dosing": "Truyền tĩnh mạch chậm 1 – 3 mcg/kg/phút (liều tối đa 250 mcg/phút).",
        "renal_adj": "",
        "side_effects": "Có thể gây hạ huyết áp quá mức nếu không kiểm soát tốc độ truyền.",
        "contraindications": "",
        "brand_names": "Loxen 10mg/10ml (ống tiêm tĩnh mạch)",
        "note": "Theo dõi: Bắt buộc lắp monitor theo dõi huyết áp động mạch liên tục tại khoa hồi sức/cấp cứu."
    },
    {
        "name": "Atenolol",
        "class": "Nhóm chẹn Beta giao cảm",
        "dosing": "0.5 – 1 mg/kg; tối đa 2 mg/kg/ngày; chia 1 - 2 lần.",
        "renal_adj": "",
        "side_effects": "Hệ giao cảm làm tăng nhịp tim, giãn phế quản => chẹn beta => tim giảm co bóp + co thắt phế quản + giảm triệu chứng trong hạ đường huyết. Tránh dùng kèm thuốc chủ vận receptor dopamin do nguy cơ tụt huyết áp nghiêm trọng.",
        "contraindications": "Chống chỉ định với bệnh nhân có tiền sử hen phế quản, suy tim, đái tháo đường.",
        "brand_names": "Tenormin 50mg (viên nén)",
        "note": "Theo dõi: Kiểm tra chặt chẽ nhịp tim, nghe tim phổi trước và trong quá trình điều trị để phát hiện co thắt phế quản hoặc nhịp chậm."
    },
    {
        "name": "Propranolol",
        "class": "Nhóm chẹn Beta giao cảm",
        "dosing": "0.2 – 0.5 mg/kg/liều; tối đa 1.5 mg/kg/liều; chia 2 - 4 lần.",
        "renal_adj": "",
        "side_effects": "Tương tự Atenolol.",
        "contraindications": "",
        "brand_names": "Dorocardyl 40mg (viên nén), Inderal 10mg (viên nén)",
        "note": "Theo dõi: Nhịp tim, nghe tim phổi."
    },
    {
        "name": "Labetalol",
        "class": "Nhóm chẹn Beta giao cảm",
        "dosing": "1 – 2 mg/kg/liều; tối đa 10 mg/kg/liều; chia 2 - 4 lần.",
        "renal_adj": "",
        "side_effects": "Tương tự Atenolol.",
        "contraindications": "",
        "brand_names": "Trandate 100mg/200mg (viên nén), Trandate 50mg/10ml (ống tiêm tĩnh mạch)",
        "note": "Theo dõi: Nhịp tim, nghe tim phổi."
    },
    {
        "name": "Glyceryl trinitrate",
        "class": "Thuốc giãn mạch cấp cứu",
        "dosing": "Truyền tĩnh mạch 1 – 10 mcg/kg/phút; tối đa 400 mcg/phút.",
        "renal_adj": "",
        "side_effects": "Nguy cơ hạ huyết áp đột ngột, đau đầu dữ dội, tim đập nhanh do giãn mạch cấp.",
        "contraindications": "",
        "brand_names": "Nitrocine 10mg/10ml (ống tiêm truyền tĩnh mạch), Nitromint 2.6mg (viên giải phóng chậm)",
        "note": "Theo dõi: Bắt buộc lắp monitor theo dõi huyết áp động mạch liên tục và dấu hiệu sinh tồn."
    },
    {
        "name": "Furosemid",
        "class": "Lợi tiểu quai - Thải Kali",
        "dosing": "Uống/tiêm thông thường 0.5 – 1 mg/kg/liều (tối đa 12 mg/kg/ngày). Tiêm tĩnh mạch trong phù nặng/viêm cầu thận cấp: 1 – 5 mg/kg/liều mỗi 4 - 6 giờ (tối đa 10 mg/kg/24 giờ hoặc 240 mg/liều). Truyền tĩnh mạch liên tục 0.1 – 1.0 mg/kg/giờ.",
        "renal_adj": "",
        "side_effects": "Gây hạ Kali máu nặng, giảm khối lượng tuần hoàn đột ngột dẫn đến suy thận chức năng. Ở bệnh nhân Hội chứng thận hư (HCTH), lợi tiểu quá mức làm cô đặc máu gây nguy cơ cao dẫn đến biến chứng tắc mạch/huyết khối do tăng đông.",
        "contraindications": "",
        "brand_names": "Lasix 40mg (viên nén), Vinzâm 40mg (viên nén), Lasix 20mg/2ml (ống tiêm tĩnh mạch)",
        "note": "Theo dõi: Cân nặng hàng ngày, lượng dịch vào - ra, kiểm tra định kỳ nồng độ Creatinin và điện giải đồ (đặc biệt Kali, Natri máu)."
    },
    {
        "name": "Bumetanide",
        "class": "Lợi tiểu quai - Thải Kali",
        "dosing": "Tiêm tĩnh mạch 25 – 50 µg/kg/ngày; tối đa 3 mg/ngày.",
        "renal_adj": "",
        "side_effects": "Gây rối loạn điện giải (hạ Kali máu nặng), chuột rút, tăng acid uric máu và độc tính tai nếu dùng liều cao.",
        "contraindications": "",
        "brand_names": "Bumex 1mg (viên nén), Burinex 0.5mg/ml (ống tiêm tĩnh mạch)",
        "note": "Theo dõi: Giám sát điện giải đồ, nồng độ Creatinin huyết tương, lượng nước tiểu, cân nặng và theo dõi thêm thính lực lâm sàng của trẻ."
    },
    {
        "name": "Hydrochlorothiazide",
        "class": "Lợi tiểu Thiazide - Thải Kali",
        "dosing": "1 mg/kg/ngày; tối đa 2 mg/kg/ngày; chia 1 - 2 lần.",
        "renal_adj": "",
        "side_effects": "Gây hạ Kali máu, hạ Natri máu, làm tăng đường huyết (cần thận trọng ở bệnh nhân đái tháo đường).",
        "contraindications": "",
        "brand_names": "Hypothiazid 25mg (viên nén)",
        "note": "Theo dõi: Định lượng các chất điện giải trong máu (Natri, Kali) và theo dõi sát chỉ số huyết áp, cân nặng, lượng nước tiểu."
    },
    {
        "name": "Metolazone",
        "class": "Lợi tiểu giống Thiazide - Thải Kali",
        "dosing": "0.1 – 0.5 mg/kg/ngày; tối đa 30 mg/ngày.",
        "renal_adj": "",
        "side_effects": "Hạ huyết áp tư thế đứng, mất nước trầm trọng, hạ kali và hạ natri máu.",
        "contraindications": "",
        "brand_names": "Zaroxolyn 2.5mg/5mg (viên nén)",
        "note": "Theo dõi: Đánh giá tình trạng mất nước lâm sàng, kiểm tra lượng nước tiểu và các chỉ số điện giải đồ."
    },
    {
        "name": "Spironolactone",
        "class": "Lợi tiểu kháng Aldosterone - Giữ Kali",
        "dosing": "Trẻ 0 - 10 kg: 6.25 mg/liều; Trẻ 11 - 20 kg: 12.5 mg/liều; Trẻ > 21 kg: 25 mg/liều. Chia 2 lần/ngày (phối hợp phù kéo dài dùng 0.5 – 2 mg/kg/ngày).",
        "renal_adj": "",
        "side_effects": "Nguy cơ giữ Kali dẫn đến tăng Kali máu nguy hiểm (đặc biệt nguy hiểm nếu phối hợp với nhóm thuốc ACEI/ARB hoặc ở bệnh nhân đang suy giảm chức năng thận).",
        "contraindications": "Chống chỉ định (hoặc thận trọng) ở người chơi thể thao, đái tháo đường hoặc suy giảm chức năng thận.",
        "brand_names": "Verospiron 25mg (viên nang), Aldactone 25mg (viên nén)",
        "note": "Theo dõi: Bắt buộc theo dõi rất sát điện giải đồ (chú ý nồng độ Kali máu) và chức năng thận để tránh ngộ độc gây rối loạn nhịp tim."
    },
    {
        "name": "Prednisone / Prednisolone",
        "class": "Nhóm Glucocorticoid",
        "dosing": "Tấn công hội chứng thận hư (HCTH): 60 mg/m²/ngày (tối đa 80 mg/ngày) trong 4 tuần. Duy trì HCTH: 40 mg/m²/ngày uống cách nhật (tối đa 60 mg). Viêm thận Lupus: Khởi đầu 0.25 – 0.5 mg/kg/ngày (tối đa 30 mg/ngày), giảm dần trong 3 - 6 tháng. Bệnh thận IgA/HSP: 1 mg/kg/ngày từ 6 - 12 tháng.",
        "renal_adj": "",
        "side_effects": "Ngộ độc Steroid (Hội chứng Cushing, tăng huyết áp, tăng đường huyết/đái tháo đường, đục thủy tinh thể). Tăng nguy cơ nhiễm trùng nặng, huyết khối, và gây rối loạn tăng trưởng (chậm phát triển chiều cao rõ rệt ở trẻ nhỏ).",
        "contraindications": "",
        "brand_names": "Solupred 20mg (viên sủi), Cortancyl 5mg (viên nén)",
        "note": "Theo dõi: Kiểm tra chiều cao, cân nặng, đo huyết áp thường quy, theo dõi đường máu và biểu hiện nhiễm khuẩn. Không cần định lượng nồng độ thuốc trong máu."
    },
    {
        "name": "Methylprednisolone",
        "class": "Nhóm Glucocorticoid - Truyền tĩnh mạch",
        "dosing": "HCTH kháng steroid muộn: Truyền liều cao (Pulse therapy) 15 mg/kg/24 giờ (tối đa 500 mg/ngày) trong 3 ngày. Viêm cầu thận tiến triển nhanh (RPGN): 1000 mg/1.73 m²/24 giờ trong 3 ngày. Viêm thận HSP nặng: 30 mg/kg/ngày (tối đa 1 g/ngày).",
        "renal_adj": "",
        "side_effects": "Nguy cơ ngộ độc Steroid, tăng huyết áp, đái tháo đường, nhiễm trùng cơ hội tương tự Prednisone.",
        "contraindications": "",
        "brand_names": "Medrol 4mg/16mg (viên nén), Solu-Medrol 40mg/125mg/500mg (lọ bột pha tiêm tĩnh mạch)",
        "note": "Theo dõi: Theo dõi chặt chẽ huyết áp, đường máu và các dấu hiệu nhiễm trùng."
    },
    {
        "name": "Cyclosporin A",
        "class": "Nhóm ức chế Calcineurin - CNI",
        "dosing": "Khởi đầu 3 – 5 mg/kg/ngày (Lupus dùng 3 - 6 mg/kg/ngày) chia 2 lần uống cách nhau 12 giờ.",
        "renal_adj": "Co thắt tiểu động mạch đến và xơ hóa mô kẽ thận.",
        "side_effects": "Độc tính trực tiếp lên nhu mô thận (gây ngộ độc thận làm tăng Creatinin máu), tăng huyết áp, rậm lông, phì đại lợi.",
        "contraindications": "",
        "brand_names": "Neoral 25mg/100mg (viên nang mềm), Sandimmun Neoral 100mg/ml (dung dịch uống)",
        "note": "Theo dõi: Lấy mẫu đo nồng độ C2 (2 giờ sau uống). Đích nồng độ trong HCTH là 80 – 150 microgam/L (hạ thấp nhất khi đã thuyên giảm). Lupus đích duy trì là 150 – 200 microgam/L. Nếu kháng thuốc có thể tăng lên 250 – 300 microgam/L nhưng bắt buộc theo dõi sát Creatinin máu."
    },
    {
        "name": "Tacrolimus",
        "class": "Nhóm ức chế Calcineurin - CNI",
        "dosing": "Khởi đầu 0.15 mg/kg/liều x 2 lần/ngày (Lupus dùng tổng liều 0.2 mg/kg/ngày chia 2 lần).",
        "renal_adj": "Co thắt tiểu động mạch đến và xơ hóa mô kẽ thận.",
        "side_effects": "Độc tính lên thận tương tự Cyclosporin, nhưng có nguy cơ rất cao gây hạ Magie máu, tăng đường huyết và run tay.",
        "contraindications": "",
        "brand_names": "Prograf 0.5mg/1mg (viên nang cứng), Advagraf 0.5mg/1mg (viên phóng thích kéo dài)",
        "note": "Theo dõi: Lấy mẫu đo nồng độ đáy C0 (ngay trước liều tiếp theo). Đích HCTH là 4 – 8 microgam/L; Lupus là 8 – 10 microgam/L; kháng thuốc nâng lên 12 – 15 microgam/L. Bắt buộc làm xét nghiệm Đường máu, HbA1C, Magie máu và Creatinin máu thường quy."
    },
    {
        "name": "Mycophenolate Mofetil (MMF)",
        "class": "Thuốc chống chuyển hóa",
        "dosing": "HCTH: 600 mg/m²/liều x 2 lần/ngày (tương đương 15 – 23 mg/kg/liều x 2 lần/ngày); tối đa 2 g/ngày. RPGN: 1200 mg/m²/24 giờ hoặc 30 mg/kg/24 giờ chia 2 lần.",
        "renal_adj": "",
        "side_effects": "Độc tính chọn lọc trên hệ tủy xương gây giảm bạch cầu trung tính, rối loạn tiêu hóa (đau bụng, tiêu chảy) và tăng men gan.",
        "contraindications": "",
        "brand_names": "CellCept 250mg (viên nang), CellCept 500mg (viên nén)",
        "note": "Theo dõi: Bắt buộc kiểm tra công thức máu hàng tháng; phải ngừng thuốc ngay nếu bạch cầu trung tính < 1.5 x 10^9/L. Định kỳ xét nghiệm men gan (GOT, GPT, GGT). Có thể theo dõi nồng độ thuốc trong máu nếu cần (đích 2 - 4 mg/L)."
    },
    {
        "name": "Myfortic (Dạng muối Natri của Acid Mycophenolic)",
        "class": "Thuốc chống chuyển hóa",
        "dosing": "800 mg/m²/24 giờ chia 2 lần; tối đa 1.44 g/ngày. Tỷ lệ quy đổi: viên Myfortic 180 mg có hoạt tính tương đương viên Cellcept 250 mg.",
        "renal_adj": "",
        "side_effects": "Tương tự Cellcept (giảm bạch cầu trung tính, thiếu máu) nhưng có phần giảm kích ứng dạ dày hơn.",
        "contraindications": "",
        "brand_names": "Myfortic 180mg/360mg (viên bao tan trong ruột)",
        "note": "Theo dõi: Công thức máu hàng tháng (ngừng nếu bạch cầu trung tính < 1.5 x 10^9/L) và kiểm tra các men gan."
    },
    {
        "name": "Azathioprine",
        "class": "Thuốc chống chuyển hóa",
        "dosing": "2 mg/kg/ngày chia làm 2 lần (Trong duy trì RPGN dùng 2 – 5 mg/kg/ngày).",
        "renal_adj": "",
        "side_effects": "Suy tủy xương (giảm bạch cầu, tiểu cầu), nhiễm độc gan, tăng nguy cơ nhiễm trùng cơ hội.",
        "contraindications": "",
        "brand_names": "Imuran 50mg (viên nén)",
        "note": "Theo dõi: Kiểm tra định kỳ công thức máu và chức năng gan."
    },
    {
        "name": "Cyclophosphamid",
        "class": "Thuốc độc tế bào nhóm Alkyl hóa",
        "dosing": "Đường uống: 2.0 – 2.5 mg/kg/ngày x 8 tuần (chỉ dùng cho trẻ > 5 tuổi). Truyền tĩnh mạch: 500 – 1000 mg/m² mỗi tháng x 6 tháng; hoặc phác đồ EURO 500 mg/m² mỗi 2 tuần x 6 lần.",
        "renal_adj": "",
        "side_effects": "Độc tính rất nặng lên tủy xương, rụng tóc, viêm bàng quang chảy máu cấp, vô sinh/suy tuyến sinh dục.",
        "contraindications": "Chống chỉ định đường tĩnh mạch khi bệnh nhi đang nhiễm khuẩn nặng.",
        "brand_names": "Endoxan 50mg (viên bọc đường), Endoxan 500mg/1g (lọ bột pha tiêm truyền tĩnh mạch)",
        "note": "Theo dõi: Bắt buộc kiểm tra công thức máu rất sát sao sau các đợt truyền, phân tích nước tiểu thường xuyên. Dặn dò bệnh nhi uống/truyền nhiều dịch để phòng viêm bàng quang."
    },
    {
        "name": "Rituximab",
        "class": "Kháng thể đơn dòng",
        "dosing": "Truyền tĩnh mạch 375 mg/m²/liều (tối đa 1 g/liều), truyền từ 2 - 4 liều tùy mặt bệnh.",
        "renal_adj": "",
        "side_effects": "Phản ứng dị ứng/phản vệ khi truyền, hội chứng giải phóng cytokine, suy giảm miễn dịch B kéo dài gây nhiễm trùng cơ hội (như viêm gan B tái hoạt động).",
        "contraindications": "",
        "brand_names": "MabThera 100mg/10ml (lọ truyền tĩnh mạch), MabThera 500mg/50ml (lọ truyền tĩnh mạch)",
        "note": "Theo dõi: Lắp monitor theo dõi sinh tồn (mạch, huyết áp, nhiệt độ, SpO2) suốt lúc truyền. Đo số lượng tế bào CD19/CD20 lympho B sau điều trị."
    },
    {
        "name": "Levamisol",
        "class": "Thuốc ức chế miễn dịch khác",
        "dosing": "2.5 mg/kg uống cách nhật (tối đa 150 mg/liều).",
        "renal_adj": "",
        "side_effects": "Nguy cơ mất bạch cầu hạt (hiếm gặp nhưng rất nặng), rối loạn tiêu hóa, phát ban da.",
        "contraindications": "",
        "brand_names": "Decaris 50mg (viên nén)",
        "note": "Theo dõi: Kiểm tra công thức máu định kỳ để theo dõi lượng bạch cầu."
    },
    {
        "name": "Thuốc hạ mỡ máu nhóm Statin (Lovastatin, Atorvastatin)",
        "class": "Thuốc hạ mỡ máu nhóm Statin",
        "dosing": "Bác sĩ chỉ định cá thể hóa cho bệnh nhi HCTH kháng steroid có tăng cholesterol. Lovastatin: 0.4 - 0.8 mg/kg vào buổi tối (tối đa 40 mg mỗi 12 giờ). Atorvastatin: 0.2 mg - 1.6 mg/kg vào buổi tối (tối đa 80 mg).",
        "renal_adj": "",
        "side_effects": "Gây tăng men gan và có nguy cơ tiêu cơ vân.",
        "contraindications": "",
        "brand_names": "Lipitor 10mg/20mg (viên nén), Atorlip 10mg/20mg (viên nén)",
        "note": "Theo dõi: Làm xét nghiệm men gan (GOT, GPT) và nồng độ Creatine Kinase (CK) hàng tháng trong 3 tháng đầu, sau đó duy trì kiểm tra mỗi 3 tháng."
    },
    {
        "name": "Kháng viêm Non-steroid (Indomethacin)",
        "class": "Kháng viêm Non-steroid",
        "dosing": "Dùng hỗ trợ giảm protein niệu. 1-2mg/kg/ngày.",
        "renal_adj": "Co tiểu động mạch đến.",
        "side_effects": "Kích ứng dạ dày, nguy cơ suy giảm chức năng thận khi kết hợp với thuốc hạ áp.",
        "contraindications": "",
        "brand_names": "Indomethacin 25mg (viên nang), Indo 25mg (viên nang)",
        "note": "Theo dõi: Theo dõi protein niệu và chức năng thận định kỳ."
    },
    {
        "name": "Albumin 20%",
        "class": "Dịch truyền",
        "dosing": "Truyền tĩnh mạch trong các trường hợp sốc/tiền sốc, Albumin máu < 25 g/L hoặc phù nhiều kéo dài không đáp ứng lợi tiểu. Liều 1g/kg trong 4-6 giờ, tiêm furosemide 0.5 - 2 mg/kg giữa quá trình truyền và/ hoặc sau truyền albumin.",
        "renal_adj": "",
        "side_effects": "Quá tải thể tích tuần hoàn.",
        "contraindications": "",
        "brand_names": "Human Albumin 20% 50ml/100ml (chai truyền tĩnh mạch), Albutein 20% 50ml (chai truyền tĩnh mạch)",
        "note": "Theo dõi: Theo dõi nồng độ Albumin máu, huyết áp và đáp ứng giảm phù."
    },
    {
        "name": "Thuốc chống đông (Heparin / Acenocoumarol)",
        "class": "Thuốc chống đông",
        "dosing": "Dùng trong điều trị hoặc dự phòng huyết khối tĩnh mạch.",
        "renal_adj": "",
        "side_effects": "Nguy cơ xuất huyết cao.",
        "contraindications": "",
        "brand_names": "Sintrom 1mg/4mg (viên nén), Heparin Sodium 25.000 UI/5ml (lọ tiêm tĩnh mạch)",
        "note": "Theo dõi: Bắt buộc theo dõi chức năng đông máu (PT, INR với Sintrom; aPTT với Heparin)."
    },
    {
        "name": "Kháng sinh",
        "class": "Kháng sinh",
        "dosing": "Áp dụng khi trẻ có biểu hiện nhiễm trùng.",
        "renal_adj": "",
        "side_effects": "Tùy thuộc vào loại kháng sinh được chỉ định.",
        "contraindications": "",
        "brand_names": "Augmentin 250mg/500mg (gói bột uống), Zinnat 125mg/250mg (gói bột uống), Rocephin 1g (lọ bột pha tiêm tĩnh mạch)",
        "note": "Theo dõi: Đánh giá đáp ứng lâm sàng đối với tình trạng nhiễm khuẩn."
    },
    {
        "name": "Thuốc bảo vệ dạ dày (PPIs)",
        "class": "Thuốc bảo vệ dạ dày",
        "dosing": "0.5 - 1 mg/kg (kết hợp khi dùng chung với thuốc MMF hoặc thuốc có nguy cơ viêm loét).",
        "renal_adj": "",
        "side_effects": "Ít có tác dụng phụ nghiêm trọng được ghi nhận trong điều trị bảo vệ dạ dày.",
        "contraindications": "",
        "brand_names": "Pariet 10mg/20mg (viên bao tan trong ruột), Nexium 10mg (gói bột uống)",
        "note": "Theo dõi: Theo dõi các triệu chứng đường tiêu hóa lâm sàng."
    },
    {
        "name": "Erythropoietin",
        "class": "Kích thích tạo hồng cầu",
        "dosing": "Tiêm tĩnh mạch hoặc dưới da: 50 - 100 đơn vị/ kg/ 1 liều (tối đa 240UI/kg/ 1 liều/ 3 lần 1 tuần).",
        "renal_adj": "",
        "side_effects": "",
        "contraindications": "",
        "brand_names": "Epogen 2000 UI/4000 UI (bơm tiêm đóng sẵn), Eprex 2000 UI (bơm tiêm đóng sẵn)",
        "note": ""
    }
];
