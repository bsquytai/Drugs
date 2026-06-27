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
    },
    {
        "id": "amikacin",
        "activeIngredient": "Amikacin",
        "drugClass": "Kháng sinh - Nhóm Aminoglycoside",
        "brandNames": [
            { "name": "Amikin", "strength": "250mg/2ml, 500mg/2ml", "form": "Ống tiêm/truyền tĩnh mạch" },
            { "name": "Amikacin (Generic)", "strength": "500mg/2ml", "form": "Ống tiêm" }
        ],
        "mechanism": "Gắn vào tiểu đơn vị 30S của ribosome vi khuẩn, ức chế quá trình tổng hợp protein và gây dịch mã sai, dẫn đến tác dụng diệt khuẩn mạnh.",
        "routes": [
            {
                "routeType": "Tiêm bắp (TB) / Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn nặng", "dose": "15 - 22.5 mg/kg/ngày", "interval": "Chia mỗi 8 - 24 giờ", "maxDose": "Căn cứ theo TDM" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "I (Tăng khoảng cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Mỗi 12 - 18 giờ (Liều không đổi)" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "Mỗi 18 - 24 giờ (Liều không đổi)" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "Mỗi 48 - 72 giờ (Liều không đổi)" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Bệnh nhược cơ (Myasthenia gravis) do nguy cơ phong bế thần kinh cơ. Quá mẫn với nhóm Aminoglycoside.",
        "sideEffects": "Độc tính cao trên thận (Nephrotoxicity) gây hoại tử ống thận cấp. Độc tính trên tai (Ototoxicity) gây điếc không hồi phục và tổn thương tiền đình.",
        "targetLevel": "Đo nồng độ đỉnh (Peak) 20 - 30 mcg/mL và nồng độ đáy (Trough) < 5 mcg/mL để tránh độc thận.",
        "administration": "KHÔNG trộn chung bơm tiêm hoặc đường truyền với kháng sinh Beta-lactam do nguy cơ kết tủa và làm bất hoạt thuốc.",
        "monitoring": "Đo TDM, theo dõi sát Creatinin máu, lượng nước tiểu và thính lực."
    },
    {
        "id": "amoxicillin",
        "activeIngredient": "Amoxicillin",
        "drugClass": "Kháng sinh - Nhóm Penicillin",
        "brandNames": [
            { "name": "Clamoxyl", "strength": "250mg, 500mg", "form": "Gói bột, Viên nang" },
            { "name": "Ospamox", "strength": "500mg", "form": "Viên nén" }
        ],
        "mechanism": "Gắn vào PBP, ức chế tổng hợp peptidoglycan của thành tế bào vi khuẩn.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Liều chuẩn", "dose": "40 - 45 mg/kg/ngày", "interval": "Chia mỗi 8 - 12 giờ", "maxDose": "4 g/ngày" },
                    { "indication": "Liều cao (Nhiễm khuẩn nặng)", "dose": "80 - 90 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "4 g/ngày" },
                    { "indication": "Viêm tai giữa do Phế cầu kháng Penicillin", "dose": "150 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "Theo dõi lâm sàng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "DI (Giảm liều + Giãn cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Nhẹ: Mỗi 8 giờ | Nặng: Mỗi 12 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "8 - 20 mg/kg/liều, dùng mỗi 12 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "8 - 20 mg/kg/liều, dùng mỗi 24 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng phản vệ với Penicillin.",
        "sideEffects": "Tiêu chảy, phát ban da (rất hay gặp nếu bệnh nhi đang nhiễm virus như EBV).",
        "targetLevel": "",
        "administration": "Có thể uống trước hoặc sau ăn, thức ăn không ảnh hưởng đáng kể đến hấp thu.",
        "monitoring": "Theo dõi tình trạng phân (tiêu chảy) và dấu hiệu dị ứng da."
    },
    {
        "id": "azithromycin",
        "activeIngredient": "Azithromycin",
        "drugClass": "Kháng sinh - Nhóm Macrolide",
        "brandNames": [
            { "name": "Zithromax", "strength": "200mg/5ml", "form": "Bột pha hỗn dịch uống" },
            { "name": "Zithromax", "strength": "500mg", "form": "Viên nén" }
        ],
        "mechanism": "Gắn vào tiểu đơn vị 50S của ribosome vi khuẩn, ngăn chặn tổng hợp protein.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Viêm tai giữa / Viêm phổi (Cách 1)", "dose": "Ngày 1: 10 mg/kg. Ngày 2-5: 5 mg/kg", "interval": "Mỗi 24 giờ", "maxDose": "500 mg/ngày (Tổng liều 1.5g)" },
                    { "indication": "Viêm tai giữa (Cách 2)", "dose": "10 mg/kg/ngày", "interval": "Mỗi 24 giờ (Dùng 3 ngày)", "maxDose": "500 mg/ngày" },
                    { "indication": "Viêm tai giữa (Cách 3)", "dose": "30 mg/kg", "interval": "Một liều duy nhất", "maxDose": "1.5 g/liều" },
                    { "indication": "Viêm họng", "dose": "12 mg/kg/ngày", "interval": "Mỗi 24 giờ (Dùng 5 ngày)", "maxDose": "500 mg/ngày" }
                ]
            },
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn nặng", "dose": "10 mg/kg/ngày", "interval": "Mỗi 24 giờ", "maxDose": "500 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Không cần hiệu chỉnh liều khi eGFR > 10. Sử dụng cực kỳ cẩn thận nếu eGFR < 10 mL/min/1.73m²." },
            "hepatic": { "isWarning": true, "instruction": "Thuốc thải trừ chủ yếu qua gan / mật. Chống chỉ định ở bệnh nhi có tiền sử vàng da hoặc suy gan nặng." }
        },
        "contraindications": "Tiền sử rối loạn nhịp tim (Kéo dài khoảng QT), suy gan nặng.",
        "sideEffects": "Rối loạn tiêu hóa (đau bụng quặn), kéo dài khoảng QT trên điện tâm đồ.",
        "targetLevel": "",
        "administration": "Không uống cùng thuốc kháng acid chứa Nhôm/Magie. Truyền tĩnh mạch phải pha loãng và truyền tối thiểu trong 60 phút.",
        "monitoring": "Theo dõi nhịp tim (ECG) nếu đang dùng chung với các thuốc kéo dài QT khác."
    },
    {
        "id": "ceftriaxone",
        "activeIngredient": "Ceftriaxone",
        "drugClass": "Kháng sinh - Cephalosporin thế hệ 3",
        "brandNames": [
            { "name": "Rocephin", "strength": "1g, 2g", "form": "Lọ bột pha tiêm/truyền tĩnh mạch" }
        ],
        "mechanism": "Ức chế tổng hợp thành tế bào vi khuẩn. Có thời gian bán thải rất dài so với các Cephalosporin khác.",
        "routes": [
            {
                "routeType": "Tiêm bắp (TB) / Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Liều chuẩn", "dose": "50 - 75 mg/kg/ngày", "interval": "Mỗi 24 giờ", "maxDose": "2 g/ngày" },
                    { "indication": "Viêm màng não mủ", "dose": "100 mg/kg/ngày", "interval": "Chia mỗi 12 - 24 giờ", "maxDose": "4 g/ngày" },
                    { "indication": "Viêm tai giữa", "dose": "50 mg/kg/ngày", "interval": "Dùng 1 - 3 ngày", "maxDose": "1 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "KHÔNG CẦN CHỈNH LIỀU. Giữ nguyên 100% liều ở tất cả các mức eGFR (Do thải trừ kép qua gan và thận)." },
            "hepatic": { "isWarning": true, "instruction": "Thuốc bài tiết nhiều qua mật, có thể kết tủa tạo sỏi giả (biliary pseudolithiasis) gây cơn đau quặn mật." }
        },
        "contraindications": "Trẻ sơ sinh < 28 ngày tuổi có tăng bilirubin máu. CẤM dùng chung với dịch truyền chứa Canxi (như Ringer Lactate) ở trẻ nhũ nhi.",
        "sideEffects": "Sỏi bùn túi mật, tăng men gan, tiêu chảy.",
        "targetLevel": "",
        "administration": "Tuyệt đối không pha hoặc truyền cùng lúc (chung line) với dung dịch có chứa Calci.",
        "monitoring": "Siêu âm bụng nếu bệnh nhi có cơn đau bụng cấp nghi ngờ sỏi mật do thuốc."
    },
    {
        "id": "meropenem",
        "activeIngredient": "Meropenem",
        "drugClass": "Kháng sinh - Nhóm Carbapenem",
        "brandNames": [
            { "name": "Meronem", "strength": "500mg, 1g", "form": "Lọ bột pha tiêm tĩnh mạch" }
        ],
        "mechanism": "Kháng sinh phổ cực rộng. Ức chế tổng hợp thành tế bào, bền vững với hầu hết các enzyme Beta-lactamase và Cephalosporinase.",
        "routes": [
            {
                "routeType": "Tiêm tĩnh mạch (TM) / Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn nặng", "dose": "60 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "3 g/ngày" },
                    { "indication": "Viêm màng não mủ", "dose": "120 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "6 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "DI (Giảm liều + Giãn cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Giữ nguyên liều, mỗi 12 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "50% liều tiêu chuẩn, mỗi 12 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "50% liều tiêu chuẩn, mỗi 24 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Quá mẫn phản vệ với Carbapenem hoặc Penicillin.",
        "sideEffects": "Viêm tĩnh mạch tại chỗ tiêm, tăng men gan. Ít gây co giật hơn Imipenem nhưng vẫn cần cẩn trọng ở trẻ có tiền sử động kinh.",
        "targetLevel": "",
        "administration": "Có thể truyền kéo dài (Extended infusion over 3 hours) để tối ưu hóa thời gian nồng độ thuốc vượt qua MIC (T>MIC).",
        "monitoring": "Theo dõi chức năng thận và tri giác."
    },
    {
        "id": "fluconazole",
        "activeIngredient": "Fluconazole",
        "drugClass": "Kháng nấm - Nhóm Triazole",
        "brandNames": [
            { "name": "Diflucan", "strength": "50mg, 150mg", "form": "Viên nang" },
            { "name": "Diflucan", "strength": "2mg/ml", "form": "Chai dịch truyền" }
        ],
        "mechanism": "Ức chế enzyme 14-alpha demethylase, ngăn cản tổng hợp ergosterol làm suy yếu màng tế bào nấm.",
        "routes": [
            {
                "routeType": "Đường Uống / Truyền tĩnh mạch",
                "dosingList": [
                    { "indication": "Nhiễm nấm Candida thông thường", "dose": "6 - 12 mg/kg/ngày", "interval": "Mỗi 24 giờ", "maxDose": "800 mg/ngày" },
                    { "indication": "Nhiễm nấm Thần kinh trung ương", "dose": "Liều cao cá thể hóa", "interval": "Mỗi 24 giờ", "maxDose": "800 - 1000 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Thuốc đào thải chủ yếu qua thận nguyên vẹn. Nếu eGFR < 50 mL/min, GIẢM 50% LIỀU DUY TRÌ (Liều tải đầu tiên giữ nguyên 100%)." },
            "hepatic": { "isWarning": true, "instruction": "Gây tăng men gan, đôi khi hoại tử gan. Theo dõi sát chức năng gan." }
        },
        "contraindications": "Dùng chung với các thuốc kéo dài QT (như Erythromycin, Terfenadine).",
        "sideEffects": "Rối loạn tiêu hóa, tăng men gan, hội chứng Stevens-Johnson (hiếm).",
        "targetLevel": "",
        "administration": "Dạng uống hấp thu rất tốt, sinh khả dụng tương đương đường tĩnh mạch.",
        "monitoring": "Theo dõi men gan định kỳ."
    },
    {
        "id": "amphotericin_b",
        "activeIngredient": "Amphotericin B (Deoxycholate)",
        "drugClass": "Kháng nấm - Nhóm Polyene",
        "brandNames": [
            { "name": "Fungizone", "strength": "50mg", "form": "Lọ bột pha truyền tĩnh mạch" }
        ],
        "mechanism": "Liên kết trực tiếp với ergosterol trên màng tế bào nấm, tạo ra các lỗ thủng làm rò rỉ ion nội bào gây chết tế bào.",
        "routes": [
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm nấm hệ thống nặng", "dose": "1 - 1.5 mg/kg/ngày", "interval": "Mỗi 24 giờ", "maxDose": "150 mg/ngày" },
                    { "indication": "Nấm Candida thực quản/bàng quang", "dose": "0.5 mg/kg", "interval": "Mỗi 24 giờ", "maxDose": "Theo dõi lâm sàng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "ĐỘC TÍNH THẬN RẤT CAO. Gây co thắt mạch máu thận, hoại tử ống thận và hạ Kali/Magie máu nghiêm trọng. Bắt buộc truyền dịch (Hydration) trước khi dùng thuốc." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Quá mẫn với Amphotericin B.",
        "sideEffects": "Sốt, rét run (ớn lạnh) dữ dội khi truyền, hạ huyết áp, suy thận cấp, hạ Kali máu.",
        "targetLevel": "",
        "administration": "CHỈ pha trong dung dịch Dextrose 5% (Cấm pha nước muối sinh lý). Phải test liều nhỏ (1mg) trước. Truyền chậm trong 2 - 4 giờ.",
        "monitoring": "Đo Creatinin, Kali, Magie máu mỗi ngày. Theo dõi mạch/nhiệt độ sát sao trong lúc truyền."
    },
    {
        "id": "acyclovir",
        "activeIngredient": "Acyclovir",
        "drugClass": "Kháng virus",
        "brandNames": [
            { "name": "Zovirax", "strength": "200mg, 400mg", "form": "Viên nén" },
            { "name": "Zovirax", "strength": "250mg", "form": "Lọ bột pha truyền tĩnh mạch" }
        ],
        "mechanism": "Ức chế enzyme DNA polymerase của virus Herpes (HSV, VZV), ngăn chặn sự nhân lên của virus.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm HSV/VZV", "dose": "Lên tới 80 mg/kg/ngày", "interval": "Chia mỗi 6 - 8 giờ", "maxDose": "3.2 g/ngày" }
                ]
            },
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm trùng nặng / Viêm não", "dose": "15 - 45 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "Theo cân nặng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Gây kết tủa tinh thể trong ống thận (Crystal nephropathy). Bắt buộc phải bù đủ dịch cho bệnh nhi. Cần giãn khoảng cách liều (12h - 24h) tùy mức eGFR." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Quá mẫn với Acyclovir hoặc Valacyclovir.",
        "sideEffects": "Tổn thương thận cấp (đặc biệt khi truyền tĩnh mạch nhanh ở người mất nước), viêm tĩnh mạch.",
        "targetLevel": "",
        "administration": "Truyền tĩnh mạch chậm tối thiểu 1 giờ. KHÔNG tiêm tĩnh mạch nhanh (bolus).",
        "monitoring": "Đảm bảo truyền đủ dịch và đo lượng nước tiểu. Kiểm tra Creatinin máu."
    },
    {
        "id": "oseltamivir",
        "activeIngredient": "Oseltamivir",
        "drugClass": "Kháng virus (Ức chế Neuraminidase)",
        "brandNames": [
            { "name": "Tamiflu", "strength": "30mg, 45mg, 75mg", "form": "Viên nang" }
        ],
        "mechanism": "Ức chế enzyme Neuraminidase của virus cúm A và B, ngăn chặn sự giải phóng virus mới ra khỏi tế bào bị nhiễm.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Trẻ < 12 tháng (Điều trị 5 ngày)", "dose": "3 - 7 mg/kg/ngày (Chi tiết theo tháng tuổi)", "interval": "Chia 12 giờ", "maxDose": "Tùy tuổi" },
                    { "indication": "Trẻ ≥ 12 tháng (≤ 15 kg)", "dose": "60 mg/ngày", "interval": "Chia 12 giờ", "maxDose": "60 mg/ngày" },
                    { "indication": "Trẻ 15 - 23 kg", "dose": "90 mg/ngày", "interval": "Chia 12 giờ", "maxDose": "90 mg/ngày" },
                    { "indication": "Trẻ 23 - 40 kg", "dose": "120 mg/ngày", "interval": "Chia 12 giờ", "maxDose": "120 mg/ngày" },
                    { "indication": "Trẻ > 40 kg", "dose": "150 mg/ngày", "interval": "Chia 12 giờ", "maxDose": "150 mg/ngày" },
                    { "indication": "Dự phòng cúm", "dose": "Bằng 1/2 tổng liều điều trị", "interval": "Uống 1 lần/ngày", "maxDose": "Theo cân nặng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Giảm liều (giảm một nửa) nếu eGFR < 30 mL/min/1.73m²." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Quá mẫn với Oseltamivir.",
        "sideEffects": "Buồn nôn, nôn mửa (rất phổ biến). Đôi khi ghi nhận ảo giác hoặc rối loạn hành vi ở trẻ em.",
        "targetLevel": "",
        "administration": "Thuốc đạt hiệu quả cao nhất nếu uống trong vòng 48 giờ đầu sau khi khởi phát triệu chứng.",
        "monitoring": "Theo dõi các dấu hiệu thần kinh/tâm thần bất thường ở trẻ."
    },
    {
        "id": "isoniazid",
        "activeIngredient": "Isoniazid (INH)",
        "drugClass": "Thuốc Kháng Lao",
        "brandNames": [
            { "name": "Rimifon", "strength": "50mg, 150mg", "form": "Viên nén" }
        ],
        "mechanism": "Ức chế tổng hợp acid mycolic, thành phần thiết yếu của thành tế bào vi khuẩn Mycobacteria.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Điều trị hàng ngày", "dose": "10 - 15 mg/kg/ngày", "interval": "Mỗi 24 giờ", "maxDose": "300 mg/ngày" },
                    { "indication": "Phác đồ mỗi tuần 2 lần", "dose": "20 - 30 mg/kg/ngày", "interval": "Mỗi 24 giờ (vào ngày uống)", "maxDose": "900 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Giảm liều nếu bệnh nhi có suy thận nặng (eGFR < 10 mL/min) HOẶC khi có kèm theo bệnh lý gan." },
            "hepatic": { "isWarning": true, "instruction": "CẢNH BÁO ĐEN: Gây viêm gan hoại tử tế bào nặng, có thể gây tử vong. Nguy cơ tăng lên khi dùng chung Rifampin." }
        },
        "contraindications": "Bệnh gan cấp tính, tiền sử tổn thương gan do Isoniazid.",
        "sideEffects": "Viêm gan do thuốc, viêm dây thần kinh ngoại biên (do thiếu hụt Vitamin B6).",
        "targetLevel": "",
        "administration": "Nên bổ sung kèm Vitamin B6 (Pyridoxine) để dự phòng viêm đa dây thần kinh.",
        "monitoring": "Đo men gan (AST, ALT) định kỳ. Ngừng thuốc ngay nếu men gan tăng > 5 lần hoặc > 3 lần kèm triệu chứng vàng da."
    },
    {
        "id": "rifampin",
        "activeIngredient": "Rifampin (Rifampicin)",
        "drugClass": "Thuốc Kháng Lao / Kháng sinh",
        "brandNames": [
            { "name": "Rifampicin", "strength": "150mg, 300mg", "form": "Viên nang" }
        ],
        "mechanism": "Ức chế enzyme RNA polymerase phụ thuộc DNA của vi khuẩn, ngăn cản quá trình phiên mã RNA.",
        "routes": [
            {
                "routeType": "Đường Uống / Truyền tĩnh mạch",
                "dosingList": [
                    { "indication": "Điều trị Lao (Hàng ngày / Tuần 2 lần)", "dose": "10 - 20 mg/kg/ngày", "interval": "Mỗi 24 giờ", "maxDose": "600 mg/ngày" },
                    { "indication": "Dự phòng Não mô cầu", "dose": "20 mg/kg/ngày", "interval": "Chia mỗi 12 giờ (Dùng trong 2 ngày)", "maxDose": "1.2 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Theo phương pháp D: Giảm 50% liều nếu eGFR 10-29. Nếu eGFR < 10, cân nhắc 50-100% liều tùy lâm sàng." },
            "hepatic": { "isWarning": true, "instruction": "Gây viêm gan (đặc biệt khi kết hợp INH) và vàng da ứ mật." }
        },
        "contraindications": "Vàng da, sử dụng đồng thời với thuốc ức chế protease.",
        "sideEffects": "Làm nước tiểu, mồ hôi, nước mắt đổi thành MÀU ĐỎ CAM (cần giải thích trước cho phụ huynh). Rối loạn tiêu hóa.",
        "targetLevel": "",
        "administration": "Uống lúc đói (1h trước hoặc 2h sau ăn). Là chất cảm ứng enzyme gan CYP450 RẤT MẠNH, làm giảm tác dụng của rất nhiều thuốc dùng kèm.",
        "monitoring": "Theo dõi men gan, Bilirubin máu. Kiểm tra tương tác thuốc nghiêm ngặt trước khi kê đơn."
    },
    {
        "id": "ethambutol",
        "activeIngredient": "Ethambutol",
        "drugClass": "Thuốc Kháng Lao",
        "brandNames": [
            { "name": "Dexambutol", "strength": "400mg", "form": "Viên nén" }
        ],
        "mechanism": "Ức chế enzyme arabinosyl transferase, cản trở sự hình thành thành tế bào của vi khuẩn Lao.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Điều trị hàng ngày", "dose": "15 - 25 mg/kg/ngày", "interval": "Mỗi 24 giờ", "maxDose": "2.5 g/ngày" },
                    { "indication": "Phác đồ mỗi tuần 2 lần", "dose": "40 mg/kg/ngày", "interval": "Mỗi 24 giờ (vào ngày uống)", "maxDose": "Theo lâm sàng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Thuốc đào thải qua thận. Nếu eGFR < 30 mL/min, kéo dài khoảng cách liều ra mỗi 48 giờ hoặc giảm liều lượng." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Viêm dây thần kinh thị giác. Trẻ nhỏ không thể hợp tác để đo thị lực (chống chỉ định tương đối).",
        "sideEffects": "Viêm dây thần kinh thị giác (giảm thị lực, mù màu xanh-đỏ). Tăng acid uric máu.",
        "targetLevel": "",
        "administration": "Nên uống 1 lần duy nhất trong ngày để đạt nồng độ đỉnh tốt nhất.",
        "monitoring": "Khám mắt (thị lực, sắc giác) trước khi điều trị và hàng tháng. Dừng thuốc ngay lập tức nếu có dấu hiệu mờ mắt."
    },
    {
        "id": "ceftazidime",
        "activeIngredient": "Ceftazidime",
        "drugClass": "Kháng sinh - Cephalosporin thế hệ 3",
        "brandNames": [
            { "name": "Fortum", "strength": "500mg, 1g, 2g", "form": "Lọ bột pha tiêm" },
            { "name": "Zidim", "strength": "1g", "form": "Lọ bột pha tiêm" }
        ],
        "mechanism": "Ức chế tổng hợp thành tế bào vi khuẩn. Có hoạt tính mạnh chống lại Pseudomonas aeruginosa.",
        "routes": [
            {
                "routeType": "Tiêm tĩnh mạch (TM) / Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "90 - 150 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "6 g/ngày" },
                    { "indication": "Nhiễm Pseudomonas nặng", "dose": "200 - 300 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "12 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "DI (Giảm liều + Giãn cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Giữ liều, mỗi 12 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "Giữ liều, mỗi 24 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "50% liều tiêu chuẩn, mỗi 24 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng phản vệ với Cephalosporin hoặc Beta-lactam.",
        "sideEffects": "Phản ứng tại chỗ tiêm, tăng bạch cầu toan tính, tăng men gan thoáng qua. Nguy cơ độc thần kinh (co giật) nếu không chỉnh liều khi suy thận.",
        "targetLevel": "",
        "administration": "Truyền tĩnh mạch chậm hoặc tiêm tĩnh mạch chậm trong 3-5 phút.",
        "monitoring": "Công thức máu, chức năng thận, men gan."
    },
    {
        "id": "cefepime",
        "activeIngredient": "Cefepime",
        "drugClass": "Kháng sinh - Cephalosporin thế hệ 4",
        "brandNames": [
            { "name": "Maxipime", "strength": "1g", "form": "Lọ bột pha tiêm" }
        ],
        "mechanism": "Kháng sinh phổ rộng, bền vững với nhiều loại Beta-lactamase.",
        "routes": [
            {
                "routeType": "Tiêm/Truyền tĩnh mạch (IV)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "100 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "2 g/lần" },
                    { "indication": "Pseudomonas aeruginosa", "dose": "150 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "3 g/lần" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "DI (Giảm liều + Giãn cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Nhẹ: 50-100% liều, mỗi 24 giờ | Nặng: 100% liều, mỗi 24 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "Nhẹ: 50-100% liều, mỗi 24 giờ | Nặng: 100% liều, mỗi 24 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "Nhẹ: 25-50% liều, mỗi 24 giờ | Nặng: 50% liều, mỗi 24 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng phản vệ với Cephalosporin.",
        "sideEffects": "Độc thần kinh (lú lẫn, co giật) khi dùng liều cao ở bệnh nhân suy thận.",
        "targetLevel": "",
        "administration": "Truyền tĩnh mạch trong 30 phút.",
        "monitoring": "Tri giác (đặc biệt ở bệnh nhân suy thận)."
    },
    {
        "id": "imipenem_cilastatin",
        "activeIngredient": "Imipenem-Cilastatin",
        "drugClass": "Kháng sinh - Carbapenem",
        "brandNames": [
            { "name": "Tienam", "strength": "500mg/500mg", "form": "Lọ bột pha tiêm" }
        ],
        "mechanism": "Kháng sinh phổ rộng nhất, ức chế tổng hợp thành tế bào.",
        "routes": [
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn nặng", "dose": "60 - 100 mg/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "4 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "DI (Giảm liều + Giãn cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "7.5 - 12.5 mg/kg/liều, mỗi 8 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "7.5 - 12.5 mg/kg/liều, mỗi 12 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "7.5 - 12.5 mg/kg/liều, mỗi 24 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Tiền sử co giật, dị ứng Carbapenem.",
        "sideEffects": "Co giật (tăng nguy cơ ở trẻ bị bệnh lý thần kinh trung ương), tăng men gan.",
        "targetLevel": "",
        "administration": "Truyền tĩnh mạch chậm từ 20-30 phút.",
        "monitoring": "Trạng thái thần kinh, nhịp tim."
    },
    {
        "id": "gentamicin",
        "activeIngredient": "Gentamicin",
        "drugClass": "Kháng sinh - Aminoglycoside",
        "brandNames": [
            { "name": "Gentamicin (Generic)", "strength": "80mg/2ml", "form": "Ống tiêm" }
        ],
        "mechanism": "Gắn vào ribosome 30S, gây ức chế tổng hợp protein.",
        "routes": [
            {
                "routeType": "Tiêm/Truyền tĩnh mạch",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn nặng", "dose": "3 - 7.5 mg/kg/ngày", "interval": "Chia mỗi 8 - 24 giờ", "maxDose": "Theo TDM" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "I (Tăng khoảng cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Mỗi 12 - 18 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "Mỗi 18 - 24 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "Mỗi 48 - 72 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Nhược cơ, suy thận nặng (cần thận trọng tối đa).",
        "sideEffects": "Độc thận, độc tai (không hồi phục).",
        "targetLevel": "Đỉnh (Peak) 5 - 10 mcg/mL; Đáy (Trough) < 2 mcg/mL.",
        "administration": "Tránh truyền chung line với kháng sinh nhóm Penicillin.",
        "monitoring": "TDM định kỳ, chức năng thận."
    },
    {
        "id": "cefotaxime",
        "activeIngredient": "Cefotaxime",
        "drugClass": "Kháng sinh - Cephalosporin thế hệ 3",
        "brandNames": [
            { "name": "Claforan", "strength": "1g", "form": "Lọ bột pha tiêm/truyền tĩnh mạch" }
        ],
        "mechanism": "Ức chế tổng hợp thành tế bào vi khuẩn bằng cách gắn vào các protein gắn penicillin (PBP). Thuốc qua được hàng rào máu não rất tốt.",
        "routes": [
            {
                "routeType": "Tiêm bắp (TB) / Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "150 - 180 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "8 g/ngày" },
                    { "indication": "Viêm màng não mủ", "dose": "225 - 300 mg/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "12 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "I (Tăng khoảng cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Giữ nguyên liều, mỗi 8 - 12 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "Giữ nguyên liều, mỗi 12 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "Giữ nguyên liều, mỗi 24 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng phản vệ với Cephalosporin.",
        "sideEffects": "Phản ứng tại chỗ tiêm, tiêu chảy, viêm đại tràng giả mạc, tăng men gan thoáng qua.",
        "targetLevel": "",
        "administration": "Nên tiêm tĩnh mạch chậm trong 3 - 5 phút hoặc truyền tĩnh mạch trong 20 - 30 phút.",
        "monitoring": "Kiểm tra chức năng thận nếu dùng phối hợp với Aminoglycoside."
    },
    {
        "id": "cefuroxime",
        "activeIngredient": "Cefuroxime (Axetil / Sodium)",
        "drugClass": "Kháng sinh - Cephalosporin thế hệ 2",
        "brandNames": [
            { "name": "Zinnat", "strength": "125mg, 250mg, 500mg", "form": "Gói bột, Viên nén (Dạng Axetil)" },
            { "name": "Zinacef", "strength": "750mg, 1.5g", "form": "Lọ bột pha tiêm (Dạng Sodium)" }
        ],
        "mechanism": "Kháng sinh phổ rộng, kháng lại enzyme beta-lactamase của vi khuẩn, ức chế tổng hợp vách tế bào.",
        "routes": [
            {
                "routeType": "Đường Uống (PO) - Dạng Axetil",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn nhẹ - trung bình", "dose": "20 - 30 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "1 g/ngày" },
                    { "indication": "Nhiễm trùng xương khớp / Nặng", "dose": "Tăng đến 100 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "3 g/ngày" }
                ]
            },
            {
                "routeType": "Tiêm/Truyền tĩnh mạch (IV) - Dạng Sodium",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn nặng", "dose": "100 - 150 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "6 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "I (Tăng khoảng cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "100% liều, mỗi 8 - 12 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "100% liều, mỗi 12 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "100% liều, mỗi 24 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Quá mẫn với Cephalosporin.",
        "sideEffects": "Rối loạn tiêu hóa (đặc biệt dạng uống Axetil có vị đắng, trẻ dễ nôn trớ), tăng bạch cầu ái toan.",
        "targetLevel": "",
        "administration": "Dạng uống: Hấp thu tốt nhất ngay sau bữa ăn. Dạng tiêm: Không pha chung với Aminoglycoside trong cùng bơm tiêm.",
        "monitoring": "Lâm sàng tiêu hóa, đáp ứng điều trị."
    },
    {
        "id": "tmp_smx",
        "activeIngredient": "Trimethoprim / Sulfamethoxazole (TMP-SMX / Co-trimoxazole)",
        "drugClass": "Kháng sinh - Sulfonamide",
        "brandNames": [
            { "name": "Biseptol", "strength": "480mg (80mg TMP/400mg SMX)", "form": "Viên nén" },
            { "name": "Bactrim", "strength": "240mg/5ml", "form": "Hỗn dịch uống" }
        ],
        "mechanism": "Ức chế tổng hợp acid folic của vi khuẩn theo hai bước liên tiếp (ức chế enzyme dihydrofolate reductase và dihydropteroate synthetase), mang lại hiệu quả diệt khuẩn mạnh.",
        "routes": [
            {
                "routeType": "Đường Uống / Truyền tĩnh mạch (Tính theo TMP)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "8 - 12 mg TMP/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "640 mg TMP/ngày" },
                    { "indication": "Dự phòng Nhiễm trùng tiết niệu (NTĐT)", "dose": "2 mg TMP/kg/ngày", "interval": "Uống 1 lần/ngày", "maxDose": "160 mg TMP/ngày" },
                    { "indication": "Điều trị Viêm phổi P. jirovecii", "dose": "15 - 20 mg TMP/kg/ngày", "interval": "Chia mỗi 6 - 8 giờ", "maxDose": "Cá thể hóa" },
                    { "indication": "Dự phòng Viêm phổi P. jirovecii", "dose": "5 mg TMP/kg/ngày", "interval": "Uống 1 lần/ngày", "maxDose": "160 mg TMP/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "D (Giảm liều)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "100% liều tiêu chuẩn" },
                    { "moc": "15 - 30 mL/min/1.73m²", "lieu": "50% liều tiêu chuẩn" },
                    { "moc": "< 15 mL/min/1.73m²", "lieu": "KHÔNG SỬ DỤNG (Trừ khi có chỉ định lọc máu)" }
                ]
            },
            "hepatic": { "isWarning": true, "instruction": "Chống chỉ định ở bệnh nhi tổn thương nhu mô gan nặng." }
        },
        "contraindications": "Trẻ < 2 tháng tuổi (nguy cơ vàng da nhân não). Trẻ thiếu hụt G6PD. Suy thận nặng (eGFR <15). Dị ứng nhóm Sulfa.",
        "sideEffects": "Phát ban da (Hội chứng Stevens-Johnson, TEN cực kỳ nguy hiểm), giảm bạch cầu/tiểu cầu, tăng Kali máu, kết tủa tinh thể tại thận.",
        "targetLevel": "",
        "administration": "Bệnh nhi phải uống thật nhiều nước để tránh sỏi thận, kết tủa tinh thể Sulfonamide trong ống thận.",
        "monitoring": "Kiểm tra công thức máu định kỳ. Theo dõi các dấu hiệu phát ban da liễu và nồng độ Kali máu."
    },
    {
        "id": "ampicillin_sulbactam",
        "activeIngredient": "Ampicillin-Sulbactam",
        "drugClass": "Kháng sinh - Nhóm Penicillin & Ức chế Beta-lactamase",
        "brandNames": [
            { "name": "Unasyn", "strength": "1.5g (1g Ampicillin/0.5g Sulbactam)", "form": "Lọ bột pha tiêm tĩnh mạch" }
        ],
        "mechanism": "Ampicillin ức chế tổng hợp thành tế bào, trong khi Sulbactam bảo vệ vòng beta-lactam khỏi bị phá hủy bởi enzyme của vi khuẩn.",
        "routes": [
            {
                "routeType": "Tiêm bắp (TB) / Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Liều theo Ampicillin", "dose": "200 mg ampicillin/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "8 g ampicillin/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "I (Tăng khoảng cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Mỗi 8 giờ (Liều không đổi)" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "Mỗi 12 giờ (Liều không đổi)" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "Mỗi 24 giờ (Liều không đổi)" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng Penicillin.",
        "sideEffects": "Viêm tĩnh mạch tại chỗ tiêm, tiêu chảy, ban da.",
        "targetLevel": "",
        "administration": "Truyền tĩnh mạch chậm 15-30 phút. Thuốc sau khi pha kém bền, cần sử dụng ngay.",
        "monitoring": "Chức năng thận và tình trạng viêm tĩnh mạch."
    },
    {
        "id": "colistimethate",
        "activeIngredient": "Colistimethate Sodium (Colistin)",
        "drugClass": "Kháng sinh - Nhóm Polymyxin",
        "brandNames": [
            { "name": "Colomycin", "strength": "1 triệu UI (Tương đương ~33mg Colistin cơ bản)", "form": "Lọ bột pha tiêm/khí dung" }
        ],
        "mechanism": "Gắn vào lipopolysaccharide và phospholipid ở màng ngoài của vi khuẩn Gram âm, làm thay đổi tính thấm khiến tế bào rò rỉ và chết. Là kháng sinh cứu cánh cho trực khuẩn mủ xanh và Acinetobacter đa kháng.",
        "routes": [
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn đa kháng", "dose": "75.000 - 150.000 đơn vị/kg/ngày (Tăng đến 210.000 đv/kg)", "interval": "Chia mỗi 8 giờ", "maxDose": "480 mg dạng cơ bản/ngày" }
                ]
            },
            {
                "routeType": "Khí dung",
                "dosingList": [
                    { "indication": "Nhiễm trùng hô hấp", "dose": "75 mg dạng cơ bản (Khoảng 2.25 triệu đơn vị)/liều", "interval": "Mỗi 8 - 12 giờ", "maxDose": "Cá thể hóa" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "DI (Giảm liều + Giãn cách)",
                "eGFRTable": [
                    { "moc": "30 - 49 mL/min/1.73m²", "lieu": "75.000 đơn vị/kg/ngày, chia mỗi 12 - 24 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "45.000 đơn vị/kg/liều, mỗi 36 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "Tuân thủ phác đồ lọc máu chuyên sâu" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Quá mẫn với Colistin. Hạn chế dùng chung với thuốc phong bế thần kinh cơ.",
        "sideEffects": "RẤT ĐỘC CHO THẬN (Nephrotoxicity) gây suy thận cấp. Độc thần kinh (Neurotoxicity) gây dị cảm, yếu cơ, ngưng thở.",
        "targetLevel": "Mục tiêu tĩnh nồng độ (Css) khoảng 2 mg/L đối với trực khuẩn Gram âm đa kháng.",
        "administration": "Luôn tính liều cẩn thận, tránh nhầm lẫn giữa đơn vị quốc tế (UI), miligam Colistimethate (CMS) và miligam Colistin dạng cơ bản (CBA).",
        "monitoring": "Bắt buộc theo dõi chức năng thận (Creatinin, BUN) hàng ngày. Theo dõi các dấu hiệu yếu cơ."
    },
    {
        "id": "linezolid",
        "activeIngredient": "Linezolid",
        "drugClass": "Kháng sinh - Nhóm Oxazolidinone",
        "brandNames": [
            { "name": "Zyvox", "strength": "600mg", "form": "Viên nén" },
            { "name": "Zyvox", "strength": "2mg/ml", "form": "Chai dịch truyền tĩnh mạch" }
        ],
        "mechanism": "Kháng sinh kìm khuẩn (nhưng diệt khuẩn với Streptococci), ức chế tổng hợp protein sớm ở tiểu đơn vị 50S. Chỉ định cho VRE và MRSA.",
        "routes": [
            {
                "routeType": "Đường Uống / Truyền tĩnh mạch (Tương đương nhau)",
                "dosingList": [
                    { "indication": "Trẻ ≤ 11 tuổi", "dose": "30 mg/kg/ngày (MIC ≥ 2 dùng 45 mg/kg/ngày)", "interval": "Chia mỗi 8 giờ", "maxDose": "600 mg/liều" },
                    { "indication": "Trẻ > 11 tuổi", "dose": "1.2 g/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "1.2 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "Không cần hiệu chỉnh liều theo eGFR, tuy nhiên các chất chuyển hóa có thể tích lũy ở bệnh nhân suy thận nặng." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Đang sử dụng thuốc ức chế MAO (trong vòng 2 tuần).",
        "sideEffects": "Ức chế tủy xương (Giảm tiểu cầu, thiếu máu) nếu dùng > 2 tuần. Bệnh lý thần kinh ngoại biên, viêm thần kinh thị giác. Hội chứng Serotonin.",
        "targetLevel": "",
        "administration": "Đường uống sinh khả dụng ~100%, có thể chuyển từ tiêm sang uống mà không cần chỉnh liều.",
        "monitoring": "Bắt buộc làm công thức máu hàng tuần nếu điều trị kéo dài > 14 ngày. Khám mắt nếu mờ mắt."
    },
    {
        "id": "clindamycin",
        "activeIngredient": "Clindamycin",
        "drugClass": "Kháng sinh - Nhóm Lincosamide",
        "brandNames": [
            { "name": "Dalacin C", "strength": "150mg, 300mg", "form": "Viên nang" },
            { "name": "Dalacin C", "strength": "300mg/2ml, 600mg/4ml", "form": "Ống tiêm tĩnh mạch" }
        ],
        "mechanism": "Gắn vào tiểu đơn vị 50S, ức chế tổng hợp protein. Hiệu quả tốt với vi khuẩn kỵ khí và ức chế sinh độc tố của tụ cầu/liên cầu.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "10 - 25 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "1.8 g/ngày" },
                    { "indication": "MRSA cộng đồng / Nhiễm khuẩn nặng", "dose": "30 - 40 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "1.8 g/ngày" }
                ]
            },
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn nặng", "dose": "20 - 40 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "2.7 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "Không cần hiệu chỉnh liều theo chức năng thận." },
            "hepatic": { "isWarning": true, "instruction": "Có thể cần giảm liều ở bệnh nhi suy gan nặng và kèm theo rối loạn chuyển hóa." }
        },
        "contraindications": "Viêm ruột khu trú, viêm loét đại tràng.",
        "sideEffects": "Viêm đại tràng màng giả do C. difficile (Tiêu chảy nghiêm trọng, phân có máu).",
        "targetLevel": "",
        "administration": "Không tiêm tĩnh mạch trực tiếp (bolus), phải pha loãng và truyền chậm > 30 phút.",
        "monitoring": "Theo dõi sát tình trạng tiêu hóa. Ngừng thuốc ngay nếu trẻ bị tiêu chảy nặng."
    },
    {
        "id": "valganciclovir",
        "activeIngredient": "Valganciclovir",
        "drugClass": "Kháng virus (Dự phòng CMV sau ghép tạng)",
        "brandNames": [
            { "name": "Valcyte", "strength": "450mg", "form": "Viên nén" }
        ],
        "mechanism": "Là tiền chất của Ganciclovir, được hấp thu tốt qua đường tiêu hóa, ức chế sự tổng hợp DNA của virus Cytomegalovirus (CMV).",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "CMV bẩm sinh", "dose": "32 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "900 mg/ngày" },
                    { "indication": "Dự phòng CMV (Sau ghép thận)", "dose": "Liều = 7 x BSA x eGFR (Schwartz)", "interval": "Uống 1 lần/ngày", "maxDose": "900 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Thuốc đào thải qua thận. Liều dự phòng sau ghép thận bắt buộc phải dựa vào công thức tính toán kết hợp Diện tích da (BSA) và eGFR." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Bạch cầu trung tính < 500/mm³, tiểu cầu < 25.000/mm³, Hb < 8 g/dL.",
        "sideEffects": "Ức chế tủy xương rất mạnh (giảm bạch cầu, tiểu cầu, thiếu máu), có khả năng gây quái thai và ức chế sinh dục.",
        "targetLevel": "",
        "administration": "Nên uống cùng với thức ăn để tối đa hóa sự hấp thu. Viên thuốc KHÔNG được bẻ/nghiền do là thuốc độc tế bào.",
        "monitoring": "Kiểm tra công thức máu (đặc biệt bạch cầu trung tính) và Creatinin thường xuyên (1-2 lần/tuần trong giai đoạn đầu)."
    },
    {
        "id": "voriconazole",
        "activeIngredient": "Voriconazole",
        "drugClass": "Kháng nấm - Nhóm Triazole thế hệ mới",
        "brandNames": [
            { "name": "Vfend", "strength": "50mg, 200mg", "form": "Viên nén" },
            { "name": "Vfend", "strength": "200mg", "form": "Lọ bột pha truyền tĩnh mạch" }
        ],
        "mechanism": "Ức chế enzyme 14-alpha-sterol demethylase phụ thuộc cytochrome P450, ức chế tổng hợp ergosterol màng tế bào nấm. Đặc trị nấm Aspergillus xâm lấn.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Trẻ ≥ 2 tuổi và < 50 kg", "dose": "18 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "700 mg/ngày" },
                    { "indication": "Trẻ ≥ 50 kg", "dose": "400 - 600 mg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "700 mg/ngày" }
                ]
            },
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Trẻ ≥ 2 tuổi và < 50 kg", "dose": "Ngày 1: 18 mg/kg | Duy trì: 16 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "Theo TDM" },
                    { "indication": "Trẻ ≥ 50 kg", "dose": "Ngày 1: 12 mg/kg | Duy trì: 8 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "Theo TDM" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Dạng truyền tĩnh mạch chứa tá dược SBECD. Nếu eGFR < 50 mL/min, tá dược sẽ tích lũy gây độc thận. KHUYẾN CÁO CHUYỂN SANG ĐƯỜNG UỐNG." },
            "hepatic": { "isWarning": true, "instruction": "Độc tính trên gan cao. Phải giảm liều duy trì (giảm một nửa) ở bệnh nhân xơ gan nhẹ đến trung bình." }
        },
        "contraindications": "Chống chỉ định phối hợp với thuốc cảm ứng/ức chế CYP450 mạnh (như Rifampin, Carbamazepin, Phenobarbital).",
        "sideEffects": "Rối loạn thị giác thoáng qua (sợ ánh sáng, ảo thị màu sắc), viêm gan, độc tính da do nhạy cảm ánh sáng.",
        "targetLevel": "Đo nồng độ đáy (Trough) từ 1 - 5.5 mcg/mL để đảm bảo hiệu quả và tránh độc tính trên gan/thần kinh.",
        "administration": "Uống trước hoặc sau ăn 1 giờ. Tương tác thuốc cực kỳ phức tạp (ức chế CYP3A4, CYP2C9, CYP2C19).",
        "monitoring": "TDM định kỳ, xét nghiệm men gan, đánh giá thị giác, tránh tiếp xúc trực tiếp với ánh nắng mặt trời."
    },
    {
        "id": "pyrazinamide",
        "activeIngredient": "Pyrazinamide (PZA)",
        "drugClass": "Thuốc Kháng Lao",
        "brandNames": [
            { "name": "Pyrazinamide", "strength": "500mg", "form": "Viên nén" }
        ],
        "mechanism": "Chuyển đổi thành acid pyrazinoic trong trực khuẩn lao, làm gián đoạn chuyển hóa màng tế bào. Diệt khuẩn cực mạnh với các vi khuẩn lao nằm trong đại thực bào (môi trường acid).",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Điều trị hàng ngày", "dose": "30 - 40 mg/kg/ngày", "interval": "Uống 1 lần/ngày", "maxDose": "2 g/ngày" },
                    { "indication": "Phác đồ mỗi tuần 2 lần", "dose": "40 - 80 mg/kg/ngày", "interval": "Uống vào ngày chỉ định", "maxDose": "2 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Nếu eGFR < 30 mL/min, kéo dài khoảng cách liều ra (Thường giảm tần suất xuống 3 lần/tuần) để tránh tích lũy acid uric và chất chuyển hóa." },
            "hepatic": { "isWarning": true, "instruction": "CẢNH BÁO ĐỎ: Độc tính trên gan rất cao. Thường gây viêm gan phụ thuộc liều. Thận trọng đặc biệt khi dùng chung với INH và Rifampin." }
        },
        "contraindications": "Suy gan nặng, đợt cấp bệnh Gout.",
        "sideEffects": "Viêm gan do thuốc, tăng acid uric máu (đau khớp), rối loạn tiêu hóa.",
        "targetLevel": "",
        "administration": "Thường uống cùng với các thuốc lao khác vào 1 thời điểm trong ngày để đạt nồng độ đỉnh cao nhất.",
        "monitoring": "Đo men gan (AST, ALT), Bilirubin và Acid uric máu định kỳ."
    }
];
