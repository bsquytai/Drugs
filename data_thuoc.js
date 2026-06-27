/**
 * Tệp: data_thuoc.js
 * Cấu trúc: Medical English Keys - Vietnamese Values
 * Trạng thái: Đã độc lập hóa dữ liệu, xóa bỏ tham chiếu chéo ("Tương tự thuốc A").
 */

const drugDatabase = [
    {
        "id": "captopril",
        "activeIngredient": "Captopril",
        "drugClass": "Nhóm ức chế men chuyển - ACEI",
        "brandNames": [
            { "name": "Capoten", "strength": "25mg", "form": "Viên nén" },
            { "name": "Captagim", "strength": "25mg", "form": "Viên nén" }
        ],
        "mechanism": "Ức chế enzyme chuyển đổi Angiotensin I thành Angiotensin II, gây giãn mạch và giảm tiết Aldosterone.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Tăng huyết áp / Chung", "dose": "0.3 – 0.5 mg/kg/liều", "interval": "Chia 2 - 3 lần/ngày", "maxDose": "6 mg/kg/ngày" },
                    { "indication": "Bệnh thận IgA (Trẻ nhũ nhi)", "dose": "0.05 mg/kg/liều", "interval": "4 lần/ngày", "maxDose": "Theo dõi lâm sàng" },
                    { "indication": "Bệnh thận IgA (Trẻ lớn)", "dose": "0.5 mg/kg/liều", "interval": "3 lần/ngày", "maxDose": "Theo dõi lâm sàng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Giãn tiểu động mạch đi => giảm áp lực thuỷ tĩnh trong cầu thận => giảm eGFR => suy thận cấp. Tránh sử dụng trong đợt viêm cầu thận cấp hoặc tổn thương thận cấp có tình trạng thiểu niệu, vô niệu hoặc tăng kali máu." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Chống chỉ định tuyệt đối ở phụ nữ có thai, hẹp động mạch thận hai bên hoặc đang tăng kali máu.",
        "sideEffects": "Giảm Aldosteron => giảm hấp thu Na => giảm thải K => tăng K máu. Gây tăng Kali máu, nguy cơ tổn thương thận cấp (đặc biệt khi giảm khối lượng tuần hoàn hoặc phối hợp thuốc).",
        "targetLevel": "",
        "administration": "Thức ăn làm giảm hấp thu thuốc từ 30 - 40%. Bắt buộc dùng lúc bụng đói (1 giờ trước ăn hoặc 2 giờ sau ăn).",
        "monitoring": "Điện giải đồ (đặc biệt nồng độ Kali) và nồng độ Creatinin huyết tương trong quá trình sử dụng."
    },
    {
        "id": "enalapril",
        "activeIngredient": "Enalapril",
        "drugClass": "Nhóm ức chế men chuyển - ACEI",
        "brandNames": [
            { "name": "Renitec", "strength": "5mg/10mg", "form": "Viên nén" },
            { "name": "Ednyt", "strength": "5mg", "form": "Viên nén" },
            { "name": "Enap", "strength": "5mg", "form": "Viên nén" }
        ],
        "mechanism": "Ức chế enzyme chuyển đổi Angiotensin I thành Angiotensin II, gây giãn mạch và giảm tiết Aldosterone.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Liều chuẩn", "dose": "0.08 – 0.6 mg/kg", "interval": "Chia 1 - 2 lần/ngày", "maxDose": "1 mg/kg/ngày hoặc 40 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Nguy cơ làm giảm eGFR. Tránh sử dụng trong đợt viêm cầu thận cấp hoặc tổn thương thận cấp có tình trạng thiểu niệu, vô niệu hoặc tăng kali máu." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Chống chỉ định tuyệt đối ở phụ nữ có thai, hẹp động mạch thận hai bên hoặc đang tăng kali máu.",
        "sideEffects": "Gây tăng Kali máu, nguy cơ tổn thương thận cấp (đặc biệt khi giảm khối lượng tuần hoàn hoặc phối hợp thuốc).",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Điện giải đồ (chú ý Kali máu) và Creatinin huyết tương."
    },
    {
        "id": "ramipril",
        "activeIngredient": "Ramipril",
        "drugClass": "Nhóm ức chế men chuyển - ACEI",
        "brandNames": [
            { "name": "Triatec", "strength": "2.5mg/5mg", "form": "Viên nén" },
            { "name": "Cardace", "strength": "2.5mg", "form": "Viên nén" }
        ],
        "mechanism": "Ức chế enzyme chuyển đổi Angiotensin I thành Angiotensin II, gây giãn mạch và giảm tiết Aldosterone.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Liều chuẩn", "dose": "1.6 mg/m²/ngày hoặc khởi đầu 0.05 – 0.2 mg/kg/ngày", "interval": "Dùng 1 lần/ngày", "maxDose": "10 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Nguy cơ làm giảm eGFR. Tránh sử dụng trong đợt viêm cầu thận cấp hoặc tổn thương thận cấp có tình trạng thiểu niệu, vô niệu hoặc tăng kali máu." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Chống chỉ định tuyệt đối ở phụ nữ có thai, hẹp động mạch thận hai bên hoặc đang tăng kali máu.",
        "sideEffects": "Gây tăng Kali máu, nguy cơ tổn thương thận cấp (đặc biệt khi giảm khối lượng tuần hoàn hoặc phối hợp thuốc).",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Điện giải đồ (chú ý Kali máu) và Creatinin huyết tương."
    },
    {
        "id": "lisinopril",
        "activeIngredient": "Lisinopril",
        "drugClass": "Nhóm ức chế men chuyển - ACEI",
        "brandNames": [
            { "name": "Zestril", "strength": "5mg/10mg", "form": "Viên nén" },
            { "name": "Prinivil", "strength": "5mg", "form": "Viên nén" }
        ],
        "mechanism": "Ức chế enzyme chuyển đổi Angiotensin I thành Angiotensin II, gây giãn mạch và giảm tiết Aldosterone.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Trẻ > 6 tuổi", "dose": "0.07 mg/kg/ngày", "interval": "Dùng 1 lần/ngày", "maxDose": "0.6 mg/kg/ngày hoặc 20 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Nguy cơ làm giảm eGFR. Tránh sử dụng trong đợt viêm cầu thận cấp hoặc tổn thương thận cấp có tình trạng thiểu niệu, vô niệu hoặc tăng kali máu." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Chống chỉ định tuyệt đối ở phụ nữ có thai, hẹp động mạch thận hai bên hoặc đang tăng kali máu.",
        "sideEffects": "Gây tăng Kali máu, nguy cơ tổn thương thận cấp (đặc biệt khi giảm khối lượng tuần hoàn hoặc phối hợp thuốc).",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Điện giải đồ (chú ý Kali máu) và Creatinin huyết tương."
    },
    {
        "id": "losartan",
        "activeIngredient": "Losartan",
        "drugClass": "Nhóm chẹn thụ thể - ARB",
        "brandNames": [
            { "name": "Cozaar", "strength": "50mg", "form": "Viên nén" },
            { "name": "Lifezar", "strength": "50mg", "form": "Viên nén" }
        ],
        "mechanism": "Đối kháng đặc hiệu tại thụ thể Angiotensin II (AT1), ngăn chặn tác dụng co mạch và tiết Aldosterone.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Tăng huyết áp", "dose": "0.5 – 0.7 mg/kg/ngày", "interval": "Dùng 1 lần/ngày", "maxDose": "1.4 mg/kg/ngày hoặc 100 mg/ngày" },
                    { "indication": "Chỉ định giảm protein niệu", "dose": "0.5 – 2.0 mg/kg/ngày", "interval": "Dùng 1 lần/ngày", "maxDose": "Theo dõi sát lâm sàng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Giảm áp lực lọc cầu thận, có thể làm nặng thêm tình trạng tổn thương thận cấp." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Phụ nữ có thai, hẹp động mạch thận hai bên.",
        "sideEffects": "Có chung tác dụng phụ cốt lõi với nhóm ACEI: nguy cơ tăng Kali máu, suy giảm chức năng thận.",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Điện giải đồ và Creatinin huyết tương."
    },
    {
        "id": "amlodipin",
        "activeIngredient": "Amlodipin",
        "drugClass": "Nhóm chẹn kênh Calci",
        "brandNames": [
            { "name": "Amlor", "strength": "5mg", "form": "Viên nang" },
            { "name": "Norvasc", "strength": "5mg", "form": "Viên nén" }
        ],
        "mechanism": "Chẹn kênh Calci (cơ tim, mạch máu cần Calci để co bóp) => Giảm co bóp cơ tim + Giãn cơ trơn mạch máu và giảm sức cản ngoại vi.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Trẻ 1 - 5 tuổi", "dose": "0.1 mg/kg/ngày", "interval": "Chia 1 - 2 lần/ngày", "maxDose": "Theo dõi lâm sàng" },
                    { "indication": "Trẻ > 6 tuổi", "dose": "Khởi đầu 2.5 mg/ngày", "interval": "Chia 1 - 2 lần/ngày", "maxDose": "10 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "" },
            "hepatic": { "isWarning": true, "instruction": "Thời gian bán thải kéo dài ở bệnh nhân suy gan, cần bắt đầu với liều thấp nhất." }
        },
        "contraindications": "Chống chỉ định hoặc thận trọng tối đa sử dụng trong trường hợp suy tim sung huyết.",
        "sideEffects": "Phù ngoại vi, đỏ bừng mặt, đau đầu, đánh trống ngực.",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Theo dõi sát mạch và huyết áp của bệnh nhi."
    },
    {
        "id": "nifedipin",
        "activeIngredient": "Nifedipin",
        "drugClass": "Nhóm chẹn kênh Calci",
        "brandNames": [
            { "name": "Adalat", "strength": "10mg", "form": "Viên nang mềm" },
            { "name": "Adalat LA", "strength": "30mg", "form": "Viên phóng thích kéo dài" }
        ],
        "mechanism": "Ngăn chặn dòng ion calci đi qua màng tế bào vào cơ tim và cơ trơn mạch máu, gây giãn mạch.",
        "routes": [
            {
                "routeType": "Đường Uống (PO) - Tác dụng nhanh",
                "dosingList": [
                    { "indication": "Điều trị thông thường", "dose": "0.04 – 0.25 mg/kg/liều", "interval": "Chia 4 - 6 lần/ngày", "maxDose": "1 – 2 mg/kg/liều" },
                    { "indication": "Cấp cứu viêm cầu thận cấp", "dose": "2.5 – 10 mg/liều", "interval": "Mỗi 4 - 6 giờ", "maxDose": "Theo dõi sinh tồn" }
                ]
            },
            {
                "routeType": "Đường Uống (PO) - Phóng thích kéo dài (LA)",
                "dosingList": [
                    { "indication": "Điều trị duy trì", "dose": "0.25 – 0.5 mg/kg/ngày", "interval": "Chia 1 - 2 lần/ngày", "maxDose": "3 mg/kg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "" },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Chống chỉ định trong suy tim sung huyết.",
        "sideEffects": "Nhịp tim nhanh phản xạ, đỏ bừng mặt, đau đầu, phù ngoại vi.",
        "targetLevel": "",
        "administration": "Viên LA không được nhai, bẻ hoặc nghiền nát.",
        "monitoring": "Theo dõi mạch và huyết áp."
    },
    {
        "id": "nicardipin",
        "activeIngredient": "Nicardipin",
        "drugClass": "Nhóm chẹn kênh Calci - Cấp cứu",
        "brandNames": [
            { "name": "Loxen", "strength": "10mg/10ml", "form": "Ống tiêm tĩnh mạch" }
        ],
        "mechanism": "Giãn cơ trơn mạch máu mạnh, làm giảm sức cản ngoại vi, hạ huyết áp nhanh chóng.",
        "routes": [
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Cơn tăng huyết áp cấp cứu", "dose": "1 – 3 mcg/kg/phút", "interval": "Truyền liên tục", "maxDose": "250 mcg/phút" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "" },
            "hepatic": { "isWarning": true, "instruction": "Chuyển hóa mạnh ở gan, thận trọng giảm liều ở bệnh nhi suy chức năng gan." }
        },
        "contraindications": "Hẹp van động mạch chủ tiến triển.",
        "sideEffects": "Có thể gây hạ huyết áp quá mức nếu không kiểm soát tốc độ truyền, nhịp tim nhanh.",
        "targetLevel": "",
        "administration": "Dùng qua bơm tiêm điện để kiểm soát chính xác tốc độ truyền.",
        "monitoring": "Bắt buộc lắp monitor theo dõi huyết áp động mạch liên tục tại khoa hồi sức/cấp cứu."
    },
    {
        "id": "atenolol",
        "activeIngredient": "Atenolol",
        "drugClass": "Nhóm chẹn Beta giao cảm",
        "brandNames": [
            { "name": "Tenormin", "strength": "50mg", "form": "Viên nén" }
        ],
        "mechanism": "Ức chế chọn lọc thụ thể beta-1 ở tim, làm giảm nhịp tim và sức co bóp cơ tim.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Liều chuẩn", "dose": "0.5 – 1 mg/kg/ngày", "interval": "Chia 1 - 2 lần/ngày", "maxDose": "2 mg/kg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Thuốc đào thải qua thận nguyên vẹn, cần giảm liều và tăng khoảng cách khi eGFR suy giảm." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Chống chỉ định với bệnh nhân có tiền sử hen phế quản, suy tim, đái tháo đường.",
        "sideEffects": "Làm tim giảm co bóp, co thắt phế quản, che lấp triệu chứng hạ đường huyết. Tránh dùng kèm thuốc chủ vận receptor dopamin do nguy cơ tụt huyết áp nghiêm trọng.",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Kiểm tra chặt chẽ nhịp tim, nghe tim phổi trước và trong quá trình điều trị để phát hiện co thắt phế quản hoặc nhịp chậm."
    },
    {
        "id": "propranolol",
        "activeIngredient": "Propranolol",
        "drugClass": "Nhóm chẹn Beta giao cảm",
        "brandNames": [
            { "name": "Dorocardyl", "strength": "40mg", "form": "Viên nén" },
            { "name": "Inderal", "strength": "10mg", "form": "Viên nén" }
        ],
        "mechanism": "Ức chế không chọn lọc cả thụ thể beta-1 và beta-2, làm giảm nhịp tim và gây co thắt cơ trơn phế quản.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Liều chuẩn", "dose": "0.2 – 0.5 mg/kg/liều", "interval": "Chia 2 - 4 lần/ngày", "maxDose": "1.5 mg/kg/liều" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "" },
            "hepatic": { "isWarning": true, "instruction": "Chuyển hóa qua gan rất mạnh, thận trọng trong suy gan." }
        },
        "contraindications": "Chống chỉ định với bệnh nhân có tiền sử hen phế quản, suy tim, đái tháo đường.",
        "sideEffects": "Làm tim giảm co bóp, co thắt phế quản, che lấp triệu chứng hạ đường huyết. Tránh dùng kèm thuốc chủ vận receptor dopamin do nguy cơ tụt huyết áp nghiêm trọng.",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Nhịp tim, nghe tim phổi để phát hiện co thắt phế quản."
    },
    {
        "id": "labetalol",
        "activeIngredient": "Labetalol",
        "drugClass": "Nhóm chẹn Beta giao cảm",
        "brandNames": [
            { "name": "Trandate", "strength": "100mg/200mg", "form": "Viên nén" },
            { "name": "Trandate", "strength": "50mg/10ml", "form": "Ống tiêm tĩnh mạch" }
        ],
        "mechanism": "Ức chế đồng thời thụ thể alpha-1 và beta, gây giãn mạch hạ huyết áp mà không làm tăng nhịp tim phản xạ.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Liều chuẩn", "dose": "1 – 2 mg/kg/liều", "interval": "Chia 2 - 4 lần/ngày", "maxDose": "10 mg/kg/liều" }
                ]
            },
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Cơn tăng HA cấp cứu", "dose": "0.2 - 1 mg/kg/liều", "interval": "Tiêm tĩnh mạch chậm, lặp lại nếu cần", "maxDose": "Theo dõi sát sinh tồn" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "" },
            "hepatic": { "isWarning": true, "instruction": "Có độc tính trên gan ở một số bệnh nhân, thận trọng." }
        },
        "contraindications": "Chống chỉ định với bệnh nhân có tiền sử hen phế quản, suy tim, đái tháo đường.",
        "sideEffects": "Hạ huyết áp tư thế, co thắt phế quản, che lấp triệu chứng hạ đường huyết.",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Nhịp tim, huyết áp động mạch liên tục (khi truyền tĩnh mạch) và nghe tim phổi."
    },
    {
        "id": "glyceryl_trinitrate",
        "activeIngredient": "Glyceryl trinitrate (Nitroglycerin)",
        "drugClass": "Thuốc giãn mạch cấp cứu",
        "brandNames": [
            { "name": "Nitrocine", "strength": "10mg/10ml", "form": "Ống tiêm truyền tĩnh mạch" },
            { "name": "Nitromint", "strength": "2.6mg", "form": "Viên giải phóng chậm" }
        ],
        "mechanism": "Giải phóng oxit nitric (NO) trong tế bào cơ trơn, làm tăng cGMP gây giãn mạch hệ tĩnh mạch và động mạch vành.",
        "routes": [
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Cấp cứu", "dose": "1 – 10 mcg/kg/phút", "interval": "Truyền liên tục", "maxDose": "400 mcg/phút" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "" },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Tăng áp lực nội sọ, hạ huyết áp nghiêm trọng, sử dụng chung với thuốc ức chế PDE5.",
        "sideEffects": "Nguy cơ hạ huyết áp đột ngột, đau đầu dữ dội, tim đập nhanh do giãn mạch cấp.",
        "targetLevel": "",
        "administration": "Phải dùng dây truyền chuyên dụng không hấp thụ nhựa PVC.",
        "monitoring": "Bắt buộc lắp monitor theo dõi huyết áp động mạch liên tục và dấu hiệu sinh tồn."
    },
    {
        "id": "furosemid",
        "activeIngredient": "Furosemid",
        "drugClass": "Lợi tiểu quai - Thải Kali",
        "brandNames": [
            { "name": "Lasix", "strength": "40mg", "form": "Viên nén" },
            { "name": "Vinzâm", "strength": "40mg", "form": "Viên nén" },
            { "name": "Lasix", "strength": "20mg/2ml", "form": "Ống tiêm tĩnh mạch" }
        ],
        "mechanism": "Ức chế kênh đồng vận chuyển Na+/K+/2Cl- ở nhánh lên quai Henle, gây tăng đào thải Na, K, Cl và nước.",
        "routes": [
            {
                "routeType": "Đường Uống / Tiêm tĩnh mạch ngắt quãng",
                "dosingList": [
                    { "indication": "Liều thông thường", "dose": "0.5 – 1 mg/kg/liều", "interval": "Lặp lại theo y lệnh", "maxDose": "12 mg/kg/ngày" },
                    { "indication": "Phù nặng / Viêm cầu thận cấp (IV)", "dose": "1 – 5 mg/kg/liều", "interval": "Mỗi 4 - 6 giờ", "maxDose": "10 mg/kg/24h hoặc 240 mg/liều" }
                ]
            },
            {
                "routeType": "Truyền tĩnh mạch liên tục (TTM)",
                "dosingList": [
                    { "indication": "Kháng lợi tiểu / Phù kháng trị", "dose": "0.1 – 1.0 mg/kg/giờ", "interval": "Truyền liên tục", "maxDose": "Theo đáp ứng nước tiểu" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Lợi tiểu quá mức làm giảm khối lượng tuần hoàn đột ngột => giảm tưới máu thận => Suy thận chức năng." },
            "hepatic": { "isWarning": true, "instruction": "Rối loạn điện giải do lợi tiểu có thể thúc đẩy bệnh não gan ở trẻ suy gan." }
        },
        "contraindications": "Vô niệu, tiền hôn mê gan, mất điện giải trầm trọng.",
        "sideEffects": "Gây hạ Kali máu nặng, hạ Magie, hạ Canxi. Ở bệnh nhân Hội chứng thận hư (HCTH), lợi tiểu quá mức làm cô đặc máu gây nguy cơ cao biến chứng tắc mạch/huyết khối do tăng đông.",
        "targetLevel": "",
        "administration": "Nếu tiêm tĩnh mạch liều cao, phải tiêm thật chậm (không quá 4mg/phút) để tránh độc tính gây điếc tai.",
        "monitoring": "Cân nặng hàng ngày, lượng dịch vào - ra, kiểm tra định kỳ nồng độ Creatinin và điện giải đồ (đặc biệt Kali, Natri máu)."
    },
    {
        "id": "bumetanide",
        "activeIngredient": "Bumetanide",
        "drugClass": "Lợi tiểu quai - Thải Kali",
        "brandNames": [
            { "name": "Bumex", "strength": "1mg", "form": "Viên nén" },
            { "name": "Burinex", "strength": "0.5mg/ml", "form": "Ống tiêm tĩnh mạch" }
        ],
        "mechanism": "Hoạt động tương tự Furosemid nhưng có hiệu lực mạnh hơn gấp 40 lần tính trên khối lượng.",
        "routes": [
            {
                "routeType": "Tiêm tĩnh mạch (IV)",
                "dosingList": [
                    { "indication": "Liều chuẩn", "dose": "25 – 50 µg/kg/ngày", "interval": "Dùng 1 lần hoặc chia nhỏ", "maxDose": "3 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Gây suy thận trước thận nếu lợi tiểu quá mức." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Vô niệu, mất nước nặng.",
        "sideEffects": "Gây rối loạn điện giải (hạ Kali máu nặng), chuột rút, tăng acid uric máu và độc tính tai nếu dùng liều cao.",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Giám sát điện giải đồ, nồng độ Creatinin huyết tương, lượng nước tiểu, cân nặng và theo dõi thính lực."
    },
    {
        "id": "hydrochlorothiazide",
        "activeIngredient": "Hydrochlorothiazide",
        "drugClass": "Lợi tiểu Thiazide - Thải Kali",
        "brandNames": [
            { "name": "Hypothiazid", "strength": "25mg", "form": "Viên nén" }
        ],
        "mechanism": "Ức chế tái hấp thu Na+ và Cl- ở ống lượn xa.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Liều chuẩn", "dose": "1 mg/kg/ngày", "interval": "Chia 1 - 2 lần/ngày", "maxDose": "2 mg/kg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Kém hoặc không có tác dụng khi eGFR < 30 mL/min/1.73m² (Trừ khi phối hợp với lợi tiểu quai)." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Vô niệu, quá mẫn với Thiazide hoặc thuốc nhóm Sulfonamide.",
        "sideEffects": "Gây hạ Kali máu, hạ Natri máu, làm tăng đường huyết (cần thận trọng ở bệnh nhân đái tháo đường).",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Định lượng các chất điện giải trong máu (Natri, Kali) và theo dõi sát chỉ số huyết áp, cân nặng, lượng nước tiểu."
    },
    {
        "id": "metolazone",
        "activeIngredient": "Metolazone",
        "drugClass": "Lợi tiểu giống Thiazide - Thải Kali",
        "brandNames": [
            { "name": "Zaroxolyn", "strength": "2.5mg/5mg", "form": "Viên nén" }
        ],
        "mechanism": "Tác động vào ống lượn xa giống Thiazide, nhưng vẫn có hiệu quả khi eGFR rất thấp.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Kháng lợi tiểu (Dùng kèm Furosemid)", "dose": "0.1 – 0.5 mg/kg/ngày", "interval": "Uống 1 lần trước Furosemid 30 phút", "maxDose": "30 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Rất mạnh khi phối hợp với Furosemid, nguy cơ mất nước trầm trọng làm suy thận cấp." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Hôn mê gan, vô niệu.",
        "sideEffects": "Hạ huyết áp tư thế đứng, mất nước trầm trọng, hạ kali và hạ natri máu sâu.",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Đánh giá tình trạng mất nước lâm sàng, kiểm tra lượng nước tiểu và các chỉ số điện giải đồ."
    },
    {
        "id": "spironolactone",
        "activeIngredient": "Spironolactone",
        "drugClass": "Lợi tiểu kháng Aldosterone - Giữ Kali",
        "brandNames": [
            { "name": "Verospiron", "strength": "25mg", "form": "Viên nang" },
            { "name": "Aldactone", "strength": "25mg", "form": "Viên nén" }
        ],
        "mechanism": "Đối kháng cạnh tranh với Aldosterone tại ống lượn xa và ống góp, làm tăng bài tiết Na+ và nước nhưng giữ lại K+.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Trẻ 0 - 10 kg", "dose": "6.25 mg/liều", "interval": "Chia 2 lần/ngày", "maxDose": "Theo dõi đáp ứng" },
                    { "indication": "Trẻ 11 - 20 kg", "dose": "12.5 mg/liều", "interval": "Chia 2 lần/ngày", "maxDose": "Theo dõi đáp ứng" },
                    { "indication": "Trẻ > 21 kg", "dose": "25 mg/liều", "interval": "Chia 2 lần/ngày", "maxDose": "Theo dõi đáp ứng" },
                    { "indication": "Phối hợp phù kéo dài", "dose": "0.5 – 2 mg/kg/ngày", "interval": "Chia 2 lần/ngày", "maxDose": "Theo dõi đáp ứng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Nguy cơ tăng Kali máu chết người, đặc biệt nếu eGFR suy giảm hoặc đang dùng ACEI/ARB." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Chống chỉ định (hoặc thận trọng) ở người chơi thể thao, đái tháo đường hoặc suy giảm chức năng thận.",
        "sideEffects": "Nguy cơ giữ Kali dẫn đến tăng Kali máu nguy hiểm, chứng vú to ở nam giới.",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Bắt buộc theo dõi rất sát điện giải đồ (chú ý nồng độ Kali máu) và chức năng thận để tránh ngộ độc gây rối loạn nhịp tim."
    },
    {
        "id": "prednisone",
        "activeIngredient": "Prednisone / Prednisolone",
        "drugClass": "Nhóm Glucocorticoid",
        "brandNames": [
            { "name": "Solupred", "strength": "20mg", "form": "Viên sủi" },
            { "name": "Cortancyl", "strength": "5mg", "form": "Viên nén" }
        ],
        "mechanism": "Ức chế miễn dịch phổ rộng, chống viêm bằng cách ức chế quá trình tổng hợp các chất trung gian hóa học (Prostaglandin, Leukotriene).",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Tấn công Hội chứng thận hư (HCTH)", "dose": "60 mg/m²/ngày", "interval": "Uống hàng ngày x 4 tuần", "maxDose": "80 mg/ngày" },
                    { "indication": "Duy trì HCTH", "dose": "40 mg/m²/ngày", "interval": "Uống cách nhật", "maxDose": "60 mg/ngày" },
                    { "indication": "Viêm thận Lupus", "dose": "Khởi đầu 0.25 – 0.5 mg/kg/ngày", "interval": "Giảm liều dần trong 3 - 6 tháng", "maxDose": "30 mg/ngày" },
                    { "indication": "Bệnh thận IgA / HSP", "dose": "1 mg/kg/ngày", "interval": "Duy trì 6 - 12 tháng", "maxDose": "Theo phác đồ" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "" },
            "hepatic": { "isWarning": false, "instruction": "Prednisone cần được gan chuyển hóa thành Prednisolone để có hoạt tính. Thận trọng ở bệnh nhi suy gan nặng." }
        },
        "contraindications": "Nhiễm khuẩn nặng chưa được kiểm soát bằng kháng sinh, nhiễm virus (thủy đậu, herpes giác mạc).",
        "sideEffects": "Ngộ độc Steroid: Hội chứng Cushing, tăng huyết áp, đái tháo đường, đục thủy tinh thể, tăng nguy cơ nhiễm trùng, huyết khối, loãng xương. Gây chậm phát triển chiều cao rõ rệt ở trẻ nhỏ.",
        "targetLevel": "Không cần định lượng nồng độ thuốc trong máu.",
        "administration": "Nên uống vào buổi sáng (sau ăn) để phù hợp với nhịp tiết sinh lý của tuyến thượng thận.",
        "monitoring": "Kiểm tra chiều cao, cân nặng, đo huyết áp thường quy, theo dõi đường máu và biểu hiện nhiễm khuẩn."
    },
    {
        "id": "methylprednisolone",
        "activeIngredient": "Methylprednisolone",
        "drugClass": "Nhóm Glucocorticoid - Truyền tĩnh mạch",
        "brandNames": [
            { "name": "Medrol", "strength": "4mg/16mg", "form": "Viên nén" },
            { "name": "Solu-Medrol", "strength": "40mg/125mg/500mg", "form": "Lọ bột pha tiêm tĩnh mạch" }
        ],
        "mechanism": "Chống viêm và ức chế miễn dịch cực mạnh, giảm phù nề mô.",
        "routes": [
            {
                "routeType": "Truyền tĩnh mạch (Pulse Therapy)",
                "dosingList": [
                    { "indication": "HCTH kháng steroid muộn", "dose": "15 mg/kg/24 giờ", "interval": "Truyền mỗi ngày x 3 ngày", "maxDose": "500 mg/ngày" },
                    { "indication": "Viêm cầu thận tiến triển nhanh (RPGN)", "dose": "1000 mg/1.73m²/24 giờ", "interval": "Truyền mỗi ngày x 3 ngày", "maxDose": "1 g/ngày" },
                    { "indication": "Viêm thận HSP nặng", "dose": "30 mg/kg/ngày", "interval": "Truyền tĩnh mạch", "maxDose": "1 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "" },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Nhiễm khuẩn toàn thân chưa được kiểm soát.",
        "sideEffects": "Nguy cơ ngộ độc Steroid, tăng huyết áp kịch phát, rối loạn nhịp tim (nếu truyền nhanh), đái tháo đường, nhiễm trùng cơ hội.",
        "targetLevel": "",
        "administration": "Phải truyền tĩnh mạch rất chậm (thường từ 1 - 2 giờ đối với liều cao) để tránh rối loạn nhịp tim và đột tử.",
        "monitoring": "Theo dõi chặt chẽ huyết áp, nhịp tim trong lúc truyền, kiểm tra đường máu và các dấu hiệu nhiễm trùng."
    },
    {
        "id": "cyclosporin_a",
        "activeIngredient": "Cyclosporin A",
        "drugClass": "Nhóm ức chế Calcineurin - CNI",
        "brandNames": [
            { "name": "Neoral", "strength": "25mg/100mg", "form": "Viên nang mềm" },
            { "name": "Sandimmun Neoral", "strength": "100mg/ml", "form": "Dung dịch uống" }
        ],
        "mechanism": "Ức chế enzyme Calcineurin, ngăn cản quá trình phiên mã IL-2, từ đó ức chế sự hoạt hóa và tăng sinh của tế bào T.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "HCTH phụ thuộc/kháng Steroid", "dose": "Khởi đầu 3 – 5 mg/kg/ngày", "interval": "Chia 2 lần uống (cách nhau 12 giờ)", "maxDose": "Dựa vào TDM" },
                    { "indication": "Viêm thận Lupus", "dose": "3 - 6 mg/kg/ngày", "interval": "Chia 2 lần uống (cách nhau 12 giờ)", "maxDose": "Dựa vào TDM" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Gây co thắt tiểu động mạch đến và xơ hóa mô kẽ thận. Làm giảm eGFR và tăng Creatinin trực tiếp do độc tính." },
            "hepatic": { "isWarning": true, "instruction": "Chuyển hóa qua CYP3A4, cần hiệu chỉnh ở bệnh nhân suy gan." }
        },
        "contraindications": "Suy thận không kiểm soát được, tăng huyết áp ác tính.",
        "sideEffects": "Độc tính trực tiếp lên nhu mô thận (ngộ độc thận), tăng huyết áp, rậm lông, phì đại lợi, run tay.",
        "targetLevel": "Đo nồng độ đỉnh C2 (2 giờ sau uống). Đích HCTH: 80 – 150 µg/L. Lupus: 150 – 200 µg/L (Kháng thuốc tăng lên 250 – 300 µg/L nhưng phải soi kĩ Creatinin).",
        "administration": "Giữ khoảng cách dùng thuốc thật đều đặn (đúng 12 giờ). Không uống cùng nước ép bưởi (Grapefruit) do ức chế enzyme gan làm tăng vọt nồng độ thuốc.",
        "monitoring": "Lấy mẫu đo nồng độ C2. Bắt buộc theo dõi huyết áp và Creatinin máu thường quy."
    },
    {
        "id": "tacrolimus",
        "activeIngredient": "Tacrolimus",
        "drugClass": "Nhóm ức chế Calcineurin - CNI",
        "brandNames": [
            { "name": "Prograf", "strength": "0.5mg/1mg", "form": "Viên nang cứng" },
            { "name": "Advagraf", "strength": "0.5mg/1mg", "form": "Viên phóng thích kéo dài" }
        ],
        "mechanism": "Liên kết với FKBP12, tạo phức hợp ức chế Calcineurin mạnh gấp 10-100 lần Cyclosporin, khóa đường dẫn truyền tín hiệu tế bào T.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "HCTH phụ thuộc/kháng Steroid", "dose": "Khởi đầu 0.15 mg/kg/liều", "interval": "Chia 2 lần/ngày", "maxDose": "Dựa vào TDM" },
                    { "indication": "Viêm thận Lupus", "dose": "Tổng liều 0.2 mg/kg/ngày", "interval": "Chia 2 lần/ngày", "maxDose": "Dựa vào TDM" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Độc tính thận (Nephrotoxicity) - Gây co thắt tiểu động mạch đến và xơ hóa mô kẽ tương tự Cyclosporin." },
            "hepatic": { "isWarning": true, "instruction": "Chuyển hóa qua CYP3A4, kéo dài thời gian bán thải ở trẻ suy gan." }
        },
        "contraindications": "Quá mẫn với Tacrolimus.",
        "sideEffects": "Nguy cơ rất cao gây hạ Magie máu, tăng đường huyết (PTDM - Đái tháo đường do thuốc), rụng tóc và run tay. Ít gây phì đại lợi hơn Cyclosporin.",
        "targetLevel": "Đo nồng độ đáy C0 (ngay trước liều tiếp theo). Đích HCTH: 4 – 8 µg/L; Lupus: 8 – 10 µg/L; Kháng thuốc nâng lên 12 – 15 µg/L.",
        "administration": "Uống lúc bụng đói (1h trước ăn hoặc 2h-3h sau ăn).",
        "monitoring": "Bắt buộc làm xét nghiệm Đường máu, HbA1C, Magie máu và Creatinin máu thường quy."
    },
    {
        "id": "mmf",
        "activeIngredient": "Mycophenolate Mofetil (MMF)",
        "drugClass": "Thuốc chống chuyển hóa (Ưc chế tổng hợp Purine)",
        "brandNames": [
            { "name": "CellCept", "strength": "250mg", "form": "Viên nang" },
            { "name": "CellCept", "strength": "500mg", "form": "Viên nén" }
        ],
        "mechanism": "Ức chế enzyme IMPDH, từ đó ngăn cản đặc hiệu quá trình tổng hợp DNA của tế bào lympho B và T.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Hội chứng thận hư", "dose": "600 mg/m²/liều (Hoặc 15 - 23 mg/kg/liều)", "interval": "Uống 2 lần/ngày", "maxDose": "2 g/ngày" },
                    { "indication": "Viêm cầu thận tiến triển nhanh (RPGN)", "dose": "1200 mg/m²/24 giờ (Hoặc 30 mg/kg/24 giờ)", "interval": "Chia 2 lần/ngày", "maxDose": "Theo dõi lâm sàng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Không khuyến cáo khi eGFR < 25 mL/min/1.73m² (Trừ giai đoạn hậu ghép thận)." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Phụ nữ có thai (gây quái thai), suy tủy xương nặng.",
        "sideEffects": "Độc tính chọn lọc trên hệ tủy xương gây giảm bạch cầu trung tính, rối loạn tiêu hóa rất phổ biến (đau bụng, tiêu chảy) và tăng men gan.",
        "targetLevel": "Có thể đo diện tích dưới đường cong (AUC) đích 30-60 mg*h/L, nồng độ đáy tham khảo 2 - 4 mg/L.",
        "administration": "Uống lúc đói để tối ưu hấp thu. Viên nén/nang không được nghiền hoặc bẻ.",
        "monitoring": "Bắt buộc kiểm tra công thức máu hàng tháng; ngừng thuốc ngay nếu bạch cầu trung tính < 1.5 x 10^9/L. Định kỳ xét nghiệm men gan (GOT, GPT, GGT)."
    },
    {
        "id": "myfortic",
        "activeIngredient": "Acid Mycophenolic (Dạng muối Natri)",
        "drugClass": "Thuốc chống chuyển hóa",
        "brandNames": [
            { "name": "Myfortic", "strength": "180mg/360mg", "form": "Viên bao tan trong ruột" }
        ],
        "mechanism": "Dạng bao tan trong ruột của MMF, giải phóng tại ruột non, ức chế enzyme IMPDH.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Chỉ định miễn dịch chung", "dose": "800 mg/m²/24 giờ", "interval": "Chia 2 lần/ngày", "maxDose": "1.44 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Tương tự MMF." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Phụ nữ có thai.",
        "sideEffects": "Tương tự Cellcept (giảm bạch cầu trung tính, thiếu máu) nhưng có phần giảm kích ứng dạ dày hơn.",
        "targetLevel": "",
        "administration": "Tỷ lệ quy đổi: viên Myfortic 180 mg có hoạt tính tương đương viên Cellcept 250 mg. Nuốt nguyên viên, không nhai bẻ.",
        "monitoring": "Công thức máu hàng tháng (ngừng nếu bạch cầu trung tính < 1.5 x 10^9/L) và kiểm tra men gan."
    },
    {
        "id": "azathioprine",
        "activeIngredient": "Azathioprine",
        "drugClass": "Thuốc chống chuyển hóa",
        "brandNames": [
            { "name": "Imuran", "strength": "50mg", "form": "Viên nén" }
        ],
        "mechanism": "Chất đối kháng purine, ức chế tổng hợp RNA và DNA, ngăn cản sự nhân lên của tế bào T và B.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Duy trì miễn dịch thông thường", "dose": "2 mg/kg/ngày", "interval": "Chia 2 lần/ngày", "maxDose": "Theo dõi lâm sàng" },
                    { "indication": "Duy trì RPGN", "dose": "2 – 5 mg/kg/ngày", "interval": "Chia 2 lần/ngày", "maxDose": "Theo dõi lâm sàng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Cần giảm liều ở bệnh nhi suy thận (Khoảng cách tăng lên 36-48h nếu eGFR < 10)." },
            "hepatic": { "isWarning": true, "instruction": "Nhiễm độc gan, vàng da, tăng men gan." }
        },
        "contraindications": "Mẫn cảm với thuốc, dùng chung với Allopurinol (gây độc tủy xương tử vong).",
        "sideEffects": "Suy tủy xương (giảm bạch cầu, tiểu cầu), nhiễm độc gan, tăng nguy cơ nhiễm trùng cơ hội.",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Kiểm tra định kỳ công thức máu và chức năng gan."
    },
    {
        "id": "cyclophosphamid",
        "activeIngredient": "Cyclophosphamid",
        "drugClass": "Thuốc độc tế bào nhóm Alkyl hóa",
        "brandNames": [
            { "name": "Endoxan", "strength": "50mg", "form": "Viên bọc đường" },
            { "name": "Endoxan", "strength": "500mg/1g", "form": "Lọ bột pha tiêm truyền tĩnh mạch" }
        ],
        "mechanism": "Tạo liên kết chéo với các chuỗi DNA, cản trở sao chép DNA, gây chết tế bào (đặc biệt tế bào B phân chia nhanh).",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Chỉ định uống (Trẻ > 5 tuổi)", "dose": "2.0 – 2.5 mg/kg/ngày", "interval": "Dùng liên tục trong 8 tuần", "maxDose": "Theo phác đồ" }
                ]
            },
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Phác đồ kinh điển", "dose": "500 – 1000 mg/m²/liều", "interval": "Mỗi tháng x 6 tháng", "maxDose": "Theo phác đồ" },
                    { "indication": "Phác đồ EURO (Viêm thận Lupus)", "dose": "500 mg/m²/liều", "interval": "Mỗi 2 tuần x 6 lần", "maxDose": "Theo phác đồ" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Giảm liều khi eGFR < 30 mL/min để tránh tích lũy chất chuyển hóa độc." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Chống chỉ định đường tĩnh mạch khi bệnh nhi đang nhiễm khuẩn nặng. Suy tủy xương.",
        "sideEffects": "Độc tính rất nặng lên tủy xương, rụng tóc, viêm bàng quang chảy máu cấp (do chất chuyển hóa Acrolein), vô sinh/suy tuyến sinh dục sau này.",
        "targetLevel": "",
        "administration": "Luôn dự phòng bằng Uromitexan (Mesna) để bảo vệ bàng quang khi truyền tĩnh mạch liều cao.",
        "monitoring": "Bắt buộc kiểm tra công thức máu rất sát sao sau các đợt truyền, phân tích nước tiểu thường xuyên. Dặn dò uống/truyền nhiều dịch."
    },
    {
        "id": "rituximab",
        "activeIngredient": "Rituximab",
        "drugClass": "Kháng thể đơn dòng (Anti-CD20)",
        "brandNames": [
            { "name": "MabThera", "strength": "100mg/10ml", "form": "Lọ truyền tĩnh mạch" },
            { "name": "MabThera", "strength": "500mg/50ml", "form": "Lọ truyền tĩnh mạch" }
        ],
        "mechanism": "Gắn đặc hiệu vào kháng nguyên CD20 trên bề mặt tế bào lympho B, gây ly giải và tiêu diệt tế bào B.",
        "routes": [
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Bệnh thận miễn dịch / HCTH", "dose": "375 mg/m²/liều", "interval": "Truyền từ 2 - 4 liều tùy mặt bệnh", "maxDose": "1 g/liều" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "" },
            "hepatic": { "isWarning": true, "instruction": "Nguy cơ viêm gan B bùng phát (Reactivation), phải sàng lọc virus viêm gan B trước khi dùng." }
        },
        "contraindications": "Nhiễm khuẩn nặng tiến triển, nhiễm Viêm gan B mạn tính chưa điều trị dự phòng.",
        "sideEffects": "Phản ứng dị ứng/phản vệ khi truyền, hội chứng giải phóng cytokine, suy giảm miễn dịch B kéo dài gây nhiễm trùng cơ hội.",
        "targetLevel": "",
        "administration": "Phải dùng thuốc tiền mê (Corticoid, Kháng histamin, Paracetamol) trước khi truyền để giảm phản ứng bề mặt.",
        "monitoring": "Lắp monitor theo dõi sinh tồn (mạch, huyết áp, SpO2) suốt lúc truyền. Định kỳ đo số lượng tế bào CD19/CD20 lympho B sau điều trị."
    },
    {
        "id": "levamisol",
        "activeIngredient": "Levamisol",
        "drugClass": "Thuốc ức chế miễn dịch khác",
        "brandNames": [
            { "name": "Decaris", "strength": "50mg", "form": "Viên nén" }
        ],
        "mechanism": "Điều hòa miễn dịch, tăng cường chức năng tế bào T và đại thực bào.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "HCTH phụ thuộc Steroid", "dose": "2.5 mg/kg", "interval": "Uống cách nhật", "maxDose": "150 mg/liều" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "" },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Tiền sử rối loạn huyết học nghiêm trọng.",
        "sideEffects": "Nguy cơ mất bạch cầu hạt (hiếm gặp nhưng rất nặng), rối loạn tiêu hóa, phát ban da.",
        "targetLevel": "",
        "administration": "",
        "monitoring": "Kiểm tra công thức máu định kỳ để theo dõi lượng bạch cầu trung tính."
    },
    {
        "id": "indomethacin",
        "activeIngredient": "Indomethacin",
        "drugClass": "Kháng viêm Non-steroid (NSAID)",
        "brandNames": [
            { "name": "Indo", "strength": "25mg", "form": "Viên nang" }
        ],
        "mechanism": "Ức chế cyclooxygenase (COX), làm giảm tổng hợp prostaglandin, gây co tiểu động mạch đến của cầu thận, giúp giảm áp lực lọc và giảm protein niệu.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Hỗ trợ giảm protein niệu", "dose": "1 - 2 mg/kg/ngày", "interval": "Chia nhỏ liều", "maxDose": "Theo dõi đáp ứng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Co tiểu động mạch đến làm giảm tưới máu thận, nguy cơ tổn thương thận cấp (đặc biệt khi kết hợp thuốc hạ áp hoặc mất nước)." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Viêm loét dạ dày tá tràng tiến triển, suy thận nặng.",
        "sideEffects": "Kích ứng dạ dày, loét tiêu hóa, rối loạn chức năng tiểu cầu, độc tính trên thận.",
        "targetLevel": "",
        "administration": "Uống sau bữa ăn để giảm kích ứng dạ dày.",
        "monitoring": "Theo dõi protein niệu, Creatinin huyết thanh và siêu âm kiểm tra chức năng thận định kỳ."
    },
    {
        "id": "albumin_20",
        "activeIngredient": "Albumin 20%",
        "drugClass": "Dịch truyền thay thế huyết tương",
        "brandNames": [
            { "name": "Human Albumin 20%", "strength": "50ml/100ml", "form": "Chai truyền tĩnh mạch" },
            { "name": "Albutein 20%", "strength": "50ml", "form": "Chai truyền tĩnh mạch" }
        ],
        "mechanism": "Tạo áp lực keo huyết tương, kéo nước từ khoảng gian bào vào lòng mạch, giúp phục hồi thể tích tuần hoàn và tăng hiệu quả của lợi tiểu.",
        "routes": [
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Sốc / Albumin < 25g/L / Phù kháng trị", "dose": "1 g/kg (Tương đương 5 ml/kg loại 20%)", "interval": "Truyền chậm trong 4 - 6 giờ", "maxDose": "Theo tình trạng lâm sàng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "" },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Quá tải thể tích (Phù phổi cấp), suy tim nặng.",
        "sideEffects": "Phù phổi cấp do quá tải thể tích tuần hoàn nếu truyền quá nhanh, phản ứng dị ứng.",
        "targetLevel": "",
        "administration": "Thường tiêm Furosemide tĩnh mạch (0.5 - 2 mg/kg) vào giữa quá trình truyền hoặc ngay sau khi kết thúc truyền để ép nước tiểu.",
        "monitoring": "Theo dõi nồng độ Albumin máu, huyết áp, nhịp tim và nghe phổi để phát hiện rales (dấu hiệu quá tải thể tích)."
    },
    {
        "id": "anticoagulants",
        "activeIngredient": "Heparin / Acenocoumarol (Sintrom)",
        "drugClass": "Thuốc chống đông",
        "brandNames": [
            { "name": "Sintrom", "strength": "1mg/4mg", "form": "Viên nén" },
            { "name": "Heparin Sodium", "strength": "25.000 UI/5ml", "form": "Lọ tiêm tĩnh mạch" }
        ],
        "mechanism": "Heparin kích hoạt Antithrombin III. Acenocoumarol đối kháng Vitamin K, ức chế tổng hợp các yếu tố đông máu tại gan.",
        "routes": [
            {
                "routeType": "Hệ thống đa đường dùng",
                "dosingList": [
                    { "indication": "Điều trị / Dự phòng huyết khối tĩnh mạch", "dose": "Cá thể hóa theo cân nặng và xét nghiệm", "interval": "Theo chỉ định lâm sàng", "maxDose": "Theo dõi bằng xét nghiệm" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Cần chỉnh liều Acenocoumarol khi suy thận do tăng nguy cơ chảy máu." },
            "hepatic": { "isWarning": true, "instruction": "Gan tổng hợp yếu tố đông máu, bệnh gan làm tăng độ nhạy cảm với thuốc chống đông Vitamin K." }
        },
        "contraindications": "Đang chảy máu tiến triển, rối loạn đông máu nặng, tăng huyết áp ác tính.",
        "sideEffects": "Nguy cơ xuất huyết cao (chảy máu cam, xuất huyết tiêu hóa, xuất huyết não).",
        "targetLevel": "Sintrom đích INR từ 2.0 - 3.0. Heparin đích aPTT kéo dài 1.5 - 2.5 lần bình thường.",
        "administration": "Acenocoumarol uống cố định 1 giờ trong ngày. Tránh ăn thay đổi đột ngột lượng rau xanh đậm (chứa nhiều Vit K).",
        "monitoring": "Bắt buộc theo dõi chức năng đông máu liên tục (PT, INR với Sintrom; aPTT với Heparin)."
    },
    {
        "id": "erythropoietin",
        "activeIngredient": "Erythropoietin (EPO)",
        "drugClass": "Kích thích tạo hồng cầu",
        "brandNames": [
            { "name": "Epogen", "strength": "2000 UI/4000 UI", "form": "Bơm tiêm đóng sẵn" },
            { "name": "Eprex", "strength": "2000 UI", "form": "Bơm tiêm đóng sẵn" }
        ],
        "mechanism": "Kích thích sinh sản và phân hóa tế bào tiền thân hồng cầu trong tủy xương, làm tăng lượng hồng cầu trong máu.",
        "routes": [
            {
                "routeType": "Tiêm dưới da (SC) hoặc Tiêm tĩnh mạch (IV)",
                "dosingList": [
                    { "indication": "Thiếu máu do bệnh thận mạn", "dose": "50 - 100 đơn vị/kg/liều", "interval": "Dùng 3 lần/tuần", "maxDose": "240 UI/kg/liều (3 lần/tuần)" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "" },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Tăng huyết áp không kiểm soát được, quá mẫn với albumin người.",
        "sideEffects": "Tăng huyết áp đột ngột, đau đầu, nguy cơ huyết khối, triệu chứng giả cúm.",
        "targetLevel": "Mục tiêu Hb duy trì từ 10 - 11.5 g/dL ở bệnh nhi bệnh thận mạn.",
        "administration": "Tiêm dưới da có thời gian tác dụng kéo dài hơn tiêm tĩnh mạch.",
        "monitoring": "Kiểm tra dự trữ Sắt (Ferritin, TSAT) trước khi dùng. Đo huyết áp sát sao, theo dõi Hb định kỳ để tránh Hb tăng quá nhanh."
    }
];
