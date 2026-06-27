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
        "activeIngredient": "Cyclosporin A (CsA)",
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
        "activeIngredient": "Tacrolimus (Tac)",
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
                    { "indication": "Nhiễm trùng hô hấp", "dose": "75 mg dạng cơ bản (Khoảng 2.250.000 đơn vị)/liều", "interval": "Mỗi 8 - 12 giờ", "maxDose": "Cá thể hóa" }
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
        "administration": "1mg colistimethate = 12.500 đơn vị ; 1mg colistin dạng cơ bản = 30.000 đơn vị. Luôn tính liều cẩn thận, tránh nhầm lẫn giữa đơn vị quốc tế (UI), miligam Colistimethate (CMS) và miligam Colistin dạng cơ bản (CBA).",
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
    },
    {
        "id": "ampicillin",
        "activeIngredient": "Ampicillin",
        "drugClass": "Kháng sinh - Nhóm Penicillin phổ rộng",
        "brandNames": [
            { "name": "Ampicillin", "strength": "500mg, 1g", "form": "Lọ bột pha tiêm" }
        ],
        "mechanism": "Ức chế tổng hợp thành tế bào vi khuẩn (gắn vào PBP). Bị phá hủy bởi men beta-lactamase.",
        "routes": [
            {
                "routeType": "Tiêm tĩnh mạch / Tiêm bắp (IV/IM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "50 - 200 mg/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "8 g/ngày" },
                    { "indication": "Viêm màng não mủ / Viêm nội tâm mạc", "dose": "300 - 400 mg/kg/ngày", "interval": "Chia mỗi 4 - 6 giờ", "maxDose": "12 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "I (Tăng khoảng cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Giữ nguyên liều, mỗi 6 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "Giữ nguyên liều, mỗi 8 - 12 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "Giữ nguyên liều, mỗi 12 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng Penicillin. Nhiễm virus Epstein-Barr (gây phát ban đỏ toàn thân).",
        "sideEffects": "Phát ban da (rất phổ biến), tiêu chảy, viêm tĩnh mạch huyết khối.",
        "targetLevel": "",
        "administration": "Phải test lẩy da trước khi tiêm. Tiêm tĩnh mạch chậm từ 3 - 5 phút.",
        "monitoring": "Theo dõi dấu hiệu dị ứng, phản vệ trong 30 phút đầu sau tiêm."
    },
    {
        "id": "cloxacillin",
        "activeIngredient": "Cloxacillin",
        "drugClass": "Kháng sinh - Penicillin kháng Penicillinase",
        "brandNames": [
            { "name": "Cloxacillin", "strength": "500mg", "form": "Viên nang, Lọ tiêm" }
        ],
        "mechanism": "Ức chế tổng hợp thành tế bào. Kháng lại enzyme penicillinase của tụ cầu (Staphylococcus).",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Trẻ ≤ 20 kg", "dose": "25 - 50 mg/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "Theo dõi lâm sàng" },
                    { "indication": "Trẻ > 20 kg", "dose": "1 - 2 g/ngày (có thể tăng liều)", "interval": "Chia mỗi 6 giờ", "maxDose": "6 g/ngày" }
                ]
            },
            {
                "routeType": "Tiêm/Truyền tĩnh mạch (IV)",
                "dosingList": [
                    { "indication": "Trẻ ≤ 20 kg", "dose": "25 - 50 mg/kg/ngày (có thể tăng tới 200-300 mg/kg/ngày)", "interval": "Chia mỗi 4 - 6 giờ", "maxDose": "Theo dõi lâm sàng" },
                    { "indication": "Trẻ > 20 kg", "dose": "4 - 12 g/ngày", "interval": "Chia mỗi 4 - 6 giờ", "maxDose": "12 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "Đào thải nhiều qua gan và mật. Không cần hiệu chỉnh liều khi suy thận." },
            "hepatic": { "isWarning": true, "instruction": "Thận trọng ở trẻ có tiền sử rối loạn chức năng gan, có nguy cơ gây viêm gan ứ mật." }
        },
        "contraindications": "Dị ứng Penicillin.",
        "sideEffects": "Rối loạn tiêu hóa, viêm gan ứ mật, phát ban.",
        "targetLevel": "",
        "administration": "Đường uống: Bắt buộc uống lúc bụng đói (1h trước hoặc 2h sau ăn) để hấp thu tốt nhất.",
        "monitoring": "Theo dõi men gan nếu dùng liều cao kéo dài."
    },
    {
        "id": "oxacillin",
        "activeIngredient": "Oxacillin",
        "drugClass": "Kháng sinh - Penicillin kháng Penicillinase",
        "brandNames": [
            { "name": "Oxacillin", "strength": "500mg, 1g", "form": "Lọ bột pha tiêm" }
        ],
        "mechanism": "Diệt khuẩn bằng cách ức chế tổng hợp thành tế bào. Kháng lại enzyme beta-lactamase của vi khuẩn tụ cầu vàng (MSSA).",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn nhẹ - trung bình", "dose": "50 - 100 mg/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "Theo dõi lâm sàng" }
                ]
            },
            {
                "routeType": "Tiêm/Truyền tĩnh mạch (IV)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "100 mg/kg/ngày", "interval": "Chia mỗi 4 - 6 giờ", "maxDose": "12 g/ngày" },
                    { "indication": "Viêm màng não mủ", "dose": "150 - 200 mg/kg/ngày", "interval": "Chia mỗi 4 - 6 giờ", "maxDose": "12 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "D (Giảm liều)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "100% liều tiêu chuẩn" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "100% liều tiêu chuẩn" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "Sử dụng liều thấp hơn so với liều thông thường" }
                ]
            },
            "hepatic": { "isWarning": true, "instruction": "Có khả năng gây viêm gan, ứ mật. Cần theo dõi men gan thường xuyên." }
        },
        "contraindications": "Dị ứng với các thuốc nhóm Penicillin.",
        "sideEffects": "Viêm tĩnh mạch tại chỗ tiêm, tăng men gan, ức chế tủy xương (giảm bạch cầu) khi dùng kéo dài.",
        "targetLevel": "",
        "administration": "Thuốc uống nên dùng lúc đói. Thuốc tiêm có thể gây đau, có thể pha loãng truyền tĩnh mạch chậm.",
        "monitoring": "Kiểm tra men gan và công thức máu nếu điều trị > 2 tuần."
    },
    {
        "id": "penicillin_g",
        "activeIngredient": "Penicillin G (Potassium/Sodium)",
        "drugClass": "Kháng sinh - Penicillin phổ hẹp",
        "brandNames": [
            { "name": "Penicillin G", "strength": "1 triệu UI, 5 triệu UI", "form": "Lọ bột pha tiêm" }
        ],
        "mechanism": "Kháng sinh diệt khuẩn, ức chế tổng hợp thành tế bào. Hiệu quả cao với liên cầu (Streptococcus), phế cầu nhạy cảm, và vi khuẩn giang mai.",
        "routes": [
            {
                "routeType": "Tiêm bắp / Truyền tĩnh mạch (IV/IM)",
                "dosingList": [
                    { "indication": "Liều thông thường", "dose": "100.000 - 300.000 đơn vị/kg/ngày (Tối đa lên tới 400.000 đv/kg)", "interval": "Chia mỗi 4 - 6 giờ", "maxDose": "24 triệu đơn vị/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "D (Giảm liều)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "75% liều tiêu chuẩn" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "75% liều tiêu chuẩn" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "20 - 50% liều tiêu chuẩn" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Quá mẫn với Penicillin.",
        "sideEffects": "Co giật (đặc biệt khi dùng liều rất cao ở bệnh nhân suy thận), phản vệ, viêm tĩnh mạch.",
        "targetLevel": "",
        "administration": "Muối Kali có thể gây tăng Kali máu nguy hiểm nếu truyền nhanh; Muối Natri có thể gây quá tải Natri.",
        "monitoring": "Điện giải đồ (Na, K) nếu dùng liều cao. Theo dõi tri giác (để phòng co giật do thuốc)."
    },
    {
        "id": "penicillin_v",
        "activeIngredient": "Penicillin V (Phenoxymethylpenicillin)",
        "drugClass": "Kháng sinh - Penicillin đường uống",
        "brandNames": [
            { "name": "Ospen", "strength": "400.000 UI, 1.000.000 UI", "form": "Viên nén, Siro" }
        ],
        "mechanism": "Tương tự Penicillin G nhưng bền với môi trường acid dạ dày nên dùng được đường uống. Đặc trị viêm họng do liên cầu tan huyết nhóm A.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn đường hô hấp trên", "dose": "25 - 50 mg/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "2 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Bệnh nhi suy thận nặng (eGFR < 10) nên kéo dài khoảng cách liều ra mỗi 8 giờ." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng Penicillin.",
        "sideEffects": "Rối loạn tiêu hóa, buồn nôn, tiêu chảy, mề đay.",
        "targetLevel": "",
        "administration": "Nên uống 30 phút trước bữa ăn hoặc 2 giờ sau ăn để đạt nồng độ tối đa.",
        "monitoring": "Theo dõi cải thiện lâm sàng (hết sốt, giảm viêm họng)."
    },
    {
        "id": "piperacillin_tazobactam",
        "activeIngredient": "Piperacillin / Tazobactam",
        "drugClass": "Kháng sinh - Penicillin phổ cực rộng & Ức chế Beta-lactamase",
        "brandNames": [
            { "name": "Tazocin", "strength": "4.5g (4g Pip / 0.5g Tazo)", "form": "Lọ bột pha truyền tĩnh mạch" }
        ],
        "mechanism": "Diệt khuẩn mạnh. Phổ tác dụng bao trùm cả trực khuẩn mủ xanh (P. aeruginosa) và vi khuẩn kỵ khí. Tazobactam bảo vệ vòng beta-lactam khỏi bị phá hủy.",
        "routes": [
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn nặng / Bệnh viện", "dose": "Tính theo Piperacillin: 240 - 300 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "16 g piperacillin/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Cần hiệu chỉnh giảm liều và tăng khoảng cách khi eGFR < 40 mL/min/1.73m² để tránh tích lũy và độc tính thần kinh." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng với Penicillin, Cephalosporin hoặc các chất ức chế beta-lactamase.",
        "sideEffects": "Tiêu chảy, tăng men gan, độc tính thận tăng lên đáng kể nếu truyền chung với Vancomycin.",
        "targetLevel": "",
        "administration": "Thường truyền tĩnh mạch chậm kéo dài (Extended infusion qua 3-4 giờ) để tối ưu hóa hiệu quả diệt khuẩn (T>MIC).",
        "monitoring": "Theo dõi sát chức năng thận (Creatinin) đặc biệt khi phối hợp thuốc khác. Theo dõi điện giải (thuốc chứa nhiều Natri)."
    },
    {
        "id": "cefaclor",
        "activeIngredient": "Cefaclor",
        "drugClass": "Kháng sinh - Cephalosporin thế hệ 2",
        "brandNames": [
            { "name": "Ceclor", "strength": "125mg, 250mg", "form": "Gói bột, Viên nang" }
        ],
        "mechanism": "Ức chế tổng hợp thành tế bào vi khuẩn. Phổ tác dụng tốt trên vi khuẩn Gram dương và một số vi khuẩn Gram âm hô hấp.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn hô hấp / tiết niệu nhẹ", "dose": "20 - 40 mg/kg/ngày", "interval": "Chia mỗi 8 - 12 giờ", "maxDose": "1 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "D (Giảm liều)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "100% liều tiêu chuẩn" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "100% liều tiêu chuẩn" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "50% liều tiêu chuẩn" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng với Cephalosporin.",
        "sideEffects": "Bệnh lý huyết thanh (Serum sickness-like illness) ở trẻ em (phát ban, đau khớp, sốt) thường xuất hiện sau đợt điều trị thứ 2.",
        "targetLevel": "",
        "administration": "Có thể uống cùng thức ăn để giảm rối loạn tiêu hóa.",
        "monitoring": "Theo dõi các dấu hiệu phát ban, sưng khớp."
    },
    {
        "id": "cefazolin",
        "activeIngredient": "Cefazolin",
        "drugClass": "Kháng sinh - Cephalosporin thế hệ 1",
        "brandNames": [
            { "name": "Cefazolin", "strength": "1g", "form": "Lọ bột pha tiêm" }
        ],
        "mechanism": "Tác dụng rất mạnh trên cầu khuẩn Gram dương (đặc biệt Tụ cầu vàng MSSA). Thường dùng dự phòng phẫu thuật và nhiễm trùng da/mô mềm.",
        "routes": [
            {
                "routeType": "Tiêm bắp (TB) / Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn nhẹ - trung bình", "dose": "25 - 50 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "12 g/ngày" },
                    { "indication": "Nhiễm khuẩn nặng", "dose": "100 - 150 mg/kg/ngày", "interval": "Chia mỗi 6 - 8 giờ", "maxDose": "12 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "DI (Giảm liều + Giãn cách)",
                "eGFRTable": [
                    { "moc": "40 - 70 mL/min/1.73m²", "lieu": "60% liều tiêu chuẩn, mỗi 12 giờ" },
                    { "moc": "20 - 40 mL/min/1.73m²", "lieu": "25% liều tiêu chuẩn, mỗi 12 giờ" },
                    { "moc": "5 - 20 mL/min/1.73m²", "lieu": "10% liều tiêu chuẩn, mỗi 24 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng với Cephalosporin.",
        "sideEffects": "Phản ứng tại chỗ tiêm, phát ban, tăng men gan.",
        "targetLevel": "",
        "administration": "Khi dự phòng phẫu thuật, truyền tĩnh mạch hoàn thành trong vòng 60 phút trước khi rạch da.",
        "monitoring": "Theo dõi chức năng thận nếu dùng liều cao kéo dài."
    },
    {
        "id": "cephalexin",
        "activeIngredient": "Cephalexin",
        "drugClass": "Kháng sinh - Cephalosporin thế hệ 1",
        "brandNames": [
            { "name": "Keflex", "strength": "250mg, 500mg", "form": "Viên nang, Gói bột" }
        ],
        "mechanism": "Diệt khuẩn tương tự Cefazolin nhưng dùng đường uống. Hiệu quả tuyệt vời cho nhiễm trùng da mô mềm (nhọt, chốc lở).",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "25 - 50 mg/kg/ngày", "interval": "Chia mỗi 6 - 8 giờ", "maxDose": "2 g/ngày" },
                    { "indication": "Nhiễm khuẩn nặng / Xương khớp", "dose": "75 - 100 mg/kg/ngày", "interval": "Chia mỗi 6 - 8 giờ", "maxDose": "4 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "I (Tăng khoảng cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Giữ nguyên liều, mỗi 8 - 12 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "Giữ nguyên liều, mỗi 8 - 12 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "Giữ nguyên liều, mỗi 12 - 24 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng Cephalosporin.",
        "sideEffects": "Rối loạn tiêu hóa (đau bụng, tiêu chảy), phát ban, ngứa.",
        "targetLevel": "",
        "administration": "Thuốc hấp thu nhanh qua đường tiêu hóa, không bị ảnh hưởng bởi thức ăn.",
        "monitoring": "Lâm sàng vết thương/viêm nhiễm da."
    },
    {
        "id": "cefixime",
        "activeIngredient": "Cefixime",
        "drugClass": "Kháng sinh - Cephalosporin thế hệ 3",
        "brandNames": [
            { "name": "Suprax", "strength": "100mg, 200mg", "form": "Viên nén, Hỗn dịch uống" },
            { "name": "Meiact", "strength": "100mg", "form": "Gói bột" }
        ],
        "mechanism": "Phổ Gram âm cực mạnh (E. coli, Klebsiella), thường dùng điều trị nhiễm khuẩn đường tiết niệu ở trẻ em hoặc chuyển đổi từ đường tiêm sang uống (Step-down therapy).",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "8 mg/kg/ngày", "interval": "Uống 1 lần/ngày", "maxDose": "400 mg/ngày" },
                    { "indication": "Tiếp nối đường uống (Nhiễm trùng nặng)", "dose": "Lên tới 20 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "Theo dõi lâm sàng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Cần giảm liều (Khoảng 75% liều chuẩn) nếu eGFR từ 21 - 60, và giảm 50% liều chuẩn nếu eGFR < 20 mL/min." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng với kháng sinh nhóm Cephalosporin.",
        "sideEffects": "Tiêu chảy (khá phổ biến, đặc biệt phân lỏng sệt ở trẻ nhỏ), đau bụng.",
        "targetLevel": "",
        "administration": "Hỗn dịch sau khi pha cần bảo quản lạnh và lắc kỹ trước khi dùng. Uống cùng hoặc không cùng thức ăn đều được.",
        "monitoring": "Kiểm tra tình trạng tiêu hóa, theo dõi đáp ứng điều trị nhiễm trùng tiểu."
    },
    {
        "id": "cefdinir",
        "activeIngredient": "Cefdinir",
        "drugClass": "Kháng sinh - Cephalosporin thế hệ 3",
        "brandNames": [
            { "name": "Omnicef", "strength": "300mg", "form": "Viên nang" },
            { "name": "Cefdinir", "strength": "125mg/5ml", "form": "Hỗn dịch uống" }
        ],
        "mechanism": "Giống các Cephalosporin thế hệ 3 khác nhưng có hoạt tính Gram dương (như Tụ cầu và Liên cầu) nhỉnh hơn một chút so với Cefixime.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Viêm tai giữa, Viêm họng, Viêm phổi", "dose": "14 mg/kg/ngày", "interval": "Uống 1 lần hoặc chia 12 giờ", "maxDose": "600 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Nếu eGFR < 30 mL/min, giảm liều xuống còn 7 mg/kg/ngày (uống 1 lần duy nhất trong ngày)." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng với kháng sinh nhóm Cephalosporin.",
        "sideEffects": "Phân đổi màu đỏ/nhạt màu (do tạo phức hợp với sắt trong thức ăn - cần giải thích cho phụ huynh khỏi hoang mang). Tiêu chảy.",
        "targetLevel": "",
        "administration": "Không uống cùng lúc với các thuốc kháng acid chứa Nhôm/Magie hoặc viên bổ sung Sắt (cách nhau ít nhất 2 giờ).",
        "monitoring": "Theo dõi lâm sàng hô hấp."
    },
    {
        "id": "ertapenem",
        "activeIngredient": "Ertapenem",
        "drugClass": "Kháng sinh - Carbapenem",
        "brandNames": [
            { "name": "Invanz", "strength": "1g", "form": "Lọ bột pha tiêm" }
        ],
        "mechanism": "Kháng sinh phổ siêu rộng. Khác với Meropenem/Imipenem, Ertapenem KHÔNG có tác dụng với trực khuẩn mủ xanh (Pseudomonas) và Acinetobacter.",
        "routes": [
            {
                "routeType": "Tiêm bắp (TB) / Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn ổ bụng / tiết niệu nặng", "dose": "30 mg/kg/ngày (Trẻ ≥ 13 tuổi: 1g/ngày)", "interval": "Trẻ nhỏ chia mỗi 12 giờ. Trẻ ≥ 13T: 24 giờ", "maxDose": "1 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "D (Giảm liều)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "100% liều tiêu chuẩn" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "50% liều tiêu chuẩn" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "50% liều tiêu chuẩn" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Quá mẫn với các thuốc nhóm Carbapenem.",
        "sideEffects": "Tiêu chảy, viêm tĩnh mạch, nhức đầu. Ít gây co giật hơn Imipenem.",
        "targetLevel": "",
        "administration": "Có thể tiêm bắp (pha với Lidocain để giảm đau) hoặc truyền tĩnh mạch (truyền trong 30 phút).",
        "monitoring": "Chức năng thận, đáp ứng nhiễm khuẩn (đặc biệt vi khuẩn sinh ESBL)."
    },
    {
        "id": "cefadroxil",
        "activeIngredient": "Cefadroxil",
        "drugClass": "Kháng sinh - Cephalosporin thế hệ 1",
        "brandNames": [
            { "name": "Duricef", "strength": "250mg, 500mg", "form": "Viên nang, Hỗn dịch uống" }
        ],
        "mechanism": "Ức chế tổng hợp thành tế bào vi khuẩn. Phổ tác dụng tương tự Cephalexin nhưng thời gian bán thải dài hơn, cho phép uống ít lần hơn trong ngày.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "30 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "2 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "I (Tăng khoảng cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Giữ nguyên liều, mỗi 12 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "Giữ nguyên liều, mỗi 24 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "Giữ nguyên liều, mỗi 36 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng với Cephalosporin.",
        "sideEffects": "Rối loạn tiêu hóa (đau bụng, tiêu chảy), phát ban dị ứng.",
        "targetLevel": "",
        "administration": "Nên uống cùng thức ăn để giảm kích ứng dạ dày.",
        "monitoring": "Đánh giá lâm sàng tại vị trí nhiễm khuẩn (da, mô mềm, hô hấp)."
    },
    {
        "id": "cefpodoxime",
        "activeIngredient": "Cefpodoxime proxetil",
        "drugClass": "Kháng sinh - Cephalosporin thế hệ 3",
        "brandNames": [
            { "name": "Orelox", "strength": "40mg/5ml", "form": "Hỗn dịch uống" },
            { "name": "Orelox", "strength": "100mg, 200mg", "form": "Viên nén" }
        ],
        "mechanism": "Kháng sinh phổ rộng, kháng beta-lactamase tốt. Thuốc là tiền chất (prodrug), được hấp thu qua thành ruột và chuyển hóa thành cefpodoxime có hoạt tính.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn hô hấp / tiết niệu", "dose": "10 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "400 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Nếu eGFR < 30 mL/min/1.73m², cần tăng khoảng cách liều lên mỗi 24 giờ." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng với Cephalosporin.",
        "sideEffects": "Tiêu chảy, nôn mửa, phát ban vùng tã (ở trẻ nhũ nhi).",
        "targetLevel": "",
        "administration": "Nên uống cùng thức ăn để tăng sự hấp thu. Tránh dùng cùng thuốc kháng acid (PPIs, H2 blocker) vì làm giảm hấp thu.",
        "monitoring": "Theo dõi tình trạng tiêu hóa của trẻ."
    },
    {
        "id": "cefprozil",
        "activeIngredient": "Cefprozil",
        "drugClass": "Kháng sinh - Cephalosporin thế hệ 2",
        "brandNames": [
            { "name": "Cefzil", "strength": "125mg/5ml, 250mg/5ml", "form": "Hỗn dịch uống" }
        ],
        "mechanism": "Ức chế tổng hợp thành tế bào, phổ tác dụng bao trùm tốt các vi khuẩn hô hấp Gram dương và Gram âm.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Viêm tai giữa / Viêm họng", "dose": "15 - 30 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "1 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Nếu eGFR < 30 mL/min/1.73m², giảm 50% liều tiêu chuẩn." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng với Cephalosporin.",
        "sideEffects": "Tăng bạch cầu ái toan, tiêu chảy, mẩn ngứa.",
        "targetLevel": "",
        "administration": "Có thể uống cùng hoặc không cùng thức ăn.",
        "monitoring": "Theo dõi đáp ứng lâm sàng hô hấp."
    },
    {
        "id": "ticarcillin_clavulanic",
        "activeIngredient": "Ticarcillin / Clavulanic acid",
        "drugClass": "Kháng sinh - Penicillin kháng trực khuẩn mủ xanh",
        "brandNames": [
            { "name": "Timentin", "strength": "3.1g (3g Ticar/0.1g Clav)", "form": "Lọ bột pha tiêm tĩnh mạch" }
        ],
        "mechanism": "Ticarcillin diệt Pseudomonas rất mạnh, Clavulanic acid bảo vệ thuốc khỏi men beta-lactamase.",
        "routes": [
            {
                "routeType": "Tiêm/Truyền tĩnh mạch (IV)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "Tính theo Ticarcillin: 200 - 300 mg/kg/ngày", "interval": "Chia mỗi 4 - 6 giờ", "maxDose": "12 g Ticarcillin/ngày" },
                    { "indication": "Nhiễm khuẩn rất nặng", "dose": "300 mg/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "18 g Ticarcillin/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "I (Tăng khoảng cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Mỗi 6 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "Mỗi 8 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "Mỗi 12 giờ (Nếu có suy gan kèm theo: Mỗi 24 giờ)" }
                ]
            },
            "hepatic": { "isWarning": true, "instruction": "Nếu suy gan đi kèm suy thận nặng, bắt buộc giảm liều xuống 1 lần/ngày." }
        },
        "contraindications": "Dị ứng Penicillin.",
        "sideEffects": "Tăng Natri máu, hạ Kali máu (do thuốc chứa một lượng lớn muối Natri), rối loạn đông máu (kéo dài thời gian chảy máu).",
        "targetLevel": "",
        "administration": "Truyền tĩnh mạch chậm 30 - 45 phút.",
        "monitoring": "Điện giải đồ (Na+, K+) và chức năng đông máu (PT, aPTT)."
    },
    {
        "id": "clarithromycin",
        "activeIngredient": "Clarithromycin",
        "drugClass": "Kháng sinh - Nhóm Macrolide",
        "brandNames": [
            { "name": "Klacid", "strength": "125mg/5ml", "form": "Hỗn dịch uống" },
            { "name": "Klacid", "strength": "250mg, 500mg", "form": "Viên nén" }
        ],
        "mechanism": "Gắn vào tiểu đơn vị 50S của ribosome, ức chế tổng hợp protein. Mạnh hơn Erythromycin đối với vi khuẩn hô hấp Gram âm (H. influenzae).",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn hô hấp / H. pylori", "dose": "15 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "1 g/ngày (Duy trì thường 500mg/ngày)" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "DI (Giảm liều + Giãn cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "100% liều tiêu chuẩn" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "50% liều tiêu chuẩn, mỗi 12 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "25% liều tiêu chuẩn, mỗi 24 giờ" }
                ]
            },
            "hepatic": { "isWarning": true, "instruction": "Đào thải qua gan. Thận trọng khi dùng nếu bệnh nhi có suy gan kèm suy thận." }
        },
        "contraindications": "Kéo dài khoảng QT. Đang dùng các thuốc chuyển hóa qua CYP3A4 (Astemizol, Cisaprid, Lovastatin).",
        "sideEffects": "Rối loạn vị giác (để lại vị kim loại đắng trong miệng), đau dạ dày, buồn nôn, kéo dài QT.",
        "targetLevel": "",
        "administration": "Có thể uống cùng hoặc không cùng thức ăn. Là chất ức chế CYP3A4 rất mạnh, kiểm tra tương tác thuốc cẩn thận.",
        "monitoring": "Điện tâm đồ (ECG) nếu có yếu tố nguy cơ loạn nhịp tim."
    },
    {
        "id": "erythromycin",
        "activeIngredient": "Erythromycin",
        "drugClass": "Kháng sinh - Nhóm Macrolide",
        "brandNames": [
            { "name": "Erythromycin", "strength": "250mg, 500mg", "form": "Viên nén, Gói bột" }
        ],
        "mechanism": "Kháng sinh kìm khuẩn, gắn vào tiểu đơn vị 50S. Cũng có tác dụng kích thích nhu động dạ dày ruột.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn hô hấp / Ho gà", "dose": "30 - 50 mg/kg/ngày", "interval": "Chia mỗi 6 - 8 giờ", "maxDose": "4 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "D (Giảm liều)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "100% liều tiêu chuẩn" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "100% liều tiêu chuẩn" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "10 - 17 mg/kg/liều, mỗi 8 giờ" }
                ]
            },
            "hepatic": { "isWarning": true, "instruction": "Chống chỉ định ở bệnh nhân có tiền sử bệnh gan nặng hoặc vàng da ứ mật." }
        },
        "contraindications": "Suy gan nặng. Phối hợp với thuốc kéo dài QT.",
        "sideEffects": "Kích ứng tiêu hóa cực mạnh (đau quặn bụng, buồn nôn), viêm gan ứ mật, điếc tai tạm thời (nếu dùng liều cao).",
        "targetLevel": "",
        "administration": "Nên uống lúc bụng đói. Thuốc ức chế CYP450 mạnh, thận trọng tương tác.",
        "monitoring": "Chức năng gan, thính lực và điện tâm đồ."
    },
    {
        "id": "levofloxacin",
        "activeIngredient": "Levofloxacin",
        "drugClass": "Kháng sinh - Nhóm Fluoroquinolone",
        "brandNames": [
            { "name": "Cravit", "strength": "500mg", "form": "Viên nén" },
            { "name": "Cravit IV", "strength": "500mg/100ml", "form": "Chai dịch truyền tĩnh mạch" }
        ],
        "mechanism": "Ức chế DNA gyrase và topoisomerase IV của vi khuẩn. Diệt khuẩn cực mạnh với phổ rộng bao gồm cả vi khuẩn không điển hình.",
        "routes": [
            {
                "routeType": "Đường Uống / Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Trẻ < 5 tuổi", "dose": "20 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "500 mg/ngày (1g nếu béo phì)" },
                    { "indication": "Trẻ ≥ 5 tuổi", "dose": "10 mg/kg/ngày", "interval": "Dùng 1 lần mỗi 24 giờ", "maxDose": "500 mg/ngày (1g nếu béo phì)" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "I (Tăng khoảng cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "100% liều, khoảng cách giữ nguyên" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "100% liều, giãn cách mỗi 24 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "100% liều, giãn cách mỗi 48 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Tiền sử viêm gân/đứt gân do Quinolone.",
        "sideEffects": "Nguy cơ tổn thương sụn khớp ở trẻ đang phát triển (Cân nhắc kỹ lợi ích/nguy cơ). Kéo dài khoảng QT. Độc thần kinh ngoại biên.",
        "targetLevel": "",
        "administration": "Đường uống không được dùng cùng sữa, thuốc kháng acid (Al, Mg) hoặc viên sắt (phải cách xa 2h).",
        "monitoring": "Đau mỏi khớp/gân, điện tâm đồ (ECG)."
    },
    {
        "id": "streptomycin",
        "activeIngredient": "Streptomycin",
        "drugClass": "Kháng sinh (Aminoglycoside) / Kháng Lao",
        "brandNames": [
            { "name": "Streptomycin", "strength": "1g", "form": "Lọ bột pha tiêm bắp" }
        ],
        "mechanism": "Ức chế tổng hợp protein vi khuẩn. Được sử dụng chủ yếu trong phác đồ điều trị Lao, dịch hạch, hoặc tularemia.",
        "routes": [
            {
                "routeType": "Tiêm bắp sâu (IM) / Truyền tĩnh mạch (IV)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "20 - 40 mg/kg/ngày", "interval": "Chia mỗi 12 - 24 giờ", "maxDose": "1 g/ngày" },
                    { "indication": "Bệnh Lao (Hàng ngày)", "dose": "30 mg/kg/ngày", "interval": "Dùng 1 lần/ngày", "maxDose": "1 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "I (Tăng khoảng cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Dùng 1 liều mỗi 24 - 72 giờ" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "Dùng 1 liều mỗi 24 - 72 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "Dùng 1 liều mỗi 48 - 96 giờ" }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Bệnh nhược cơ, tổn thương dây thần kinh số 8.",
        "sideEffects": "ĐỘC TÍNH TAI RẤT CAO (Gây điếc không hồi phục và mất thăng bằng tiền đình). Độc thận.",
        "targetLevel": "",
        "administration": "Thường tiêm bắp sâu. Nếu truyền tĩnh mạch phải pha loãng và truyền trong 30-60 phút.",
        "monitoring": "Đo thính lực đồ thường xuyên. Theo dõi chức năng thận và tiền đình (chóng mặt, ù tai)."
    },
    {
        "id": "doxycycline",
        "activeIngredient": "Doxycycline",
        "drugClass": "Kháng sinh - Nhóm Tetracycline",
        "brandNames": [
            { "name": "Vibramycin", "strength": "100mg", "form": "Viên nang" }
        ],
        "mechanism": "Kháng sinh kìm khuẩn, gắn vào tiểu đơn vị 30S, cản trở tRNA mang acid amin. Hiệu quả tốt với vi khuẩn nội bào (Rickettsia, Mycoplasma, Chlamydia).",
        "routes": [
            {
                "routeType": "Đường Uống / Truyền tĩnh mạch",
                "dosingList": [
                    { "indication": "Trẻ em (Tuổi theo khuyến cáo lâm sàng)", "dose": "Ngày 1: 4.4 mg/kg. Sau đó: 2.2 - 4.4 mg/kg/ngày", "interval": "Chia mỗi 12 - 24 giờ", "maxDose": "200 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "An toàn cho thận. Không cần hiệu chỉnh liều khi suy thận vì thải trừ chủ yếu qua phân." },
            "hepatic": { "isWarning": true, "instruction": "Cần thận trọng và giảm liều ở bệnh nhi có suy gan." }
        },
        "contraindications": "Trẻ < 8 tuổi (Ngoại trừ trường hợp nhiễm Rickettsia / sốt mò do không có thuốc thay thế).",
        "sideEffects": "Làm ố vàng men răng vĩnh viễn và ức chế phát triển xương ở trẻ nhỏ. Nhạy cảm với ánh sáng (cháy nắng nghiêm trọng). Loét thực quản.",
        "targetLevel": "",
        "administration": "Phải uống với nhiều nước và giữ tư thế ngồi/đứng ít nhất 30 phút để tránh loét thực quản. Không uống cùng sữa hoặc kháng acid.",
        "monitoring": "Lâm sàng tiêu hóa. Dặn bệnh nhi bôi kem chống nắng khi ra ngoài."
    },
    {
        "id": "tetracycline",
        "activeIngredient": "Tetracycline",
        "drugClass": "Kháng sinh - Nhóm Tetracycline",
        "brandNames": [
            { "name": "Tetracycline", "strength": "250mg, 500mg", "form": "Viên nang" }
        ],
        "mechanism": "Gắn vào tiểu đơn vị 30S của ribosome vi khuẩn.",
        "routes": [
            {
                "routeType": "Đường Uống / Truyền tĩnh mạch",
                "dosingList": [
                    { "indication": "Trẻ ≥ 8 tuổi", "dose": "25 - 50 mg/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "3 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "KHÔNG DÙNG cho bệnh nhi suy thận vì gây tích lũy thuốc, tăng urê huyết (Azotemia) và độc tính nặng (Trừ Doxycycline)." },
            "hepatic": { "isWarning": true, "instruction": "Độc tính gan (gan nhiễm mỡ) đặc biệt khi dùng liều cao đường tĩnh mạch." }
        },
        "contraindications": "Trẻ < 8 tuổi, phụ nữ có thai.",
        "sideEffects": "Gây hỏng men răng, ức chế xương, nhạy cảm ánh sáng mặt trời, nấm mạc.",
        "targetLevel": "",
        "administration": "Uống lúc bụng đói. Cấm dùng chung với sữa, các chế phẩm có Sắt, Canxi, Magie.",
        "monitoring": "Chức năng thận, gan."
    },
    {
        "id": "chloramphenicol",
        "activeIngredient": "Chloramphenicol (Sodium succinate)",
        "drugClass": "Kháng sinh - Nhóm Phenicol",
        "brandNames": [
            { "name": "Chloramphenicol", "strength": "1g", "form": "Lọ bột pha tiêm" }
        ],
        "mechanism": "Kìm khuẩn mạnh phổ rộng, diệt khuẩn với H. influenzae, S. pneumoniae, N. meningitidis bằng cách ức chế tiểu đơn vị 50S. Thấm vào màng não cực kỳ tốt.",
        "routes": [
            {
                "routeType": "Tiêm tĩnh mạch (TM)",
                "dosingList": [
                    { "indication": "Viêm màng não / Nhiễm trùng do Phế cầu", "dose": "75 - 100 mg/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "4 g/ngày" },
                    { "indication": "Nhiễm khuẩn nặng khác", "dose": "50 - 100 mg/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "4 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "Không cần giảm liều ở người suy thận. Tuy nhiên các chất chuyển hóa (không hoạt tính) có thể tích lũy." },
            "hepatic": { "isWarning": true, "instruction": "Giảm liều mạnh ở bệnh nhân suy gan (do thuốc chuyển hóa chủ yếu qua glucuronyl hóa tại gan)." }
        },
        "contraindications": "Trẻ sơ sinh (Gây Hội chứng xám - Gray Baby Syndrome). Suy tủy xương.",
        "sideEffects": "Suy tủy bất sản xương không hồi phục (có thể gây tử vong, tỷ lệ 1/40.000), viêm dây thần kinh thị giác.",
        "targetLevel": "Đỉnh (Peak): 10 - 20 mcg/mL. Không vượt quá 25 mcg/mL để tránh độc tính.",
        "administration": "Chỉ dùng trong các trường hợp nhiễm khuẩn đe dọa tính mạng khi các thuốc an toàn hơn không hiệu quả.",
        "monitoring": "BẮT BUỘC kiểm tra công thức máu và hồng cầu lưới mỗi 2 ngày. Ngừng thuốc nếu có dấu hiệu suy tủy."
    },
    {
        "id": "metronidazole",
        "activeIngredient": "Metronidazole",
        "drugClass": "Kháng sinh - Nhóm Nitroimidazole",
        "brandNames": [
            { "name": "Flagyl", "strength": "250mg", "form": "Viên nén" },
            { "name": "Flagyl", "strength": "500mg/100ml", "form": "Chai dịch truyền tĩnh mạch" }
        ],
        "mechanism": "Bị khử bởi protein vận chuyển electron của vi khuẩn kỵ khí, tạo ra các gốc tự do phá hủy DNA của vi khuẩn. Đặc trị vi khuẩn kỵ khí và amip/Giardia.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn kỵ khí", "dose": "30 - 50 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "2.25 g/ngày" }
                ]
            },
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn nặng (Ổ bụng, Não)", "dose": "22.5 - 40 mg/kg/ngày", "interval": "Chia mỗi 6 - 8 giờ", "maxDose": "4 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "D (Giảm liều)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "100% liều tiêu chuẩn" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "100% liều tiêu chuẩn" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "4 mg/kg/liều, dùng mỗi 6 giờ" }
                ]
            },
            "hepatic": { "isWarning": true, "instruction": "Chuyển hóa qua gan. Giảm 50% liều ở bệnh nhân suy gan nặng." }
        },
        "contraindications": "Phụ nữ có thai (3 tháng đầu). Quá mẫn với dẫn xuất imidazole.",
        "sideEffects": "Vị kim loại trong miệng, buồn nôn. Bệnh lý thần kinh ngoại biên, co giật nếu dùng liều cao kéo dài.",
        "targetLevel": "",
        "administration": "Hiệu ứng Disulfiram: Bệnh nhi (đặc biệt vị thành niên) tuyệt đối KHÔNG ĐƯỢC tiêu thụ bất kỳ chế phẩm nào có cồn (siro ho có cồn) do gây nôn mửa dữ dội.",
        "monitoring": "Kiểm tra dấu hiệu thần kinh (tê bì tay chân)."
    },
    {
        "id": "nitrofurantoin",
        "activeIngredient": "Nitrofurantoin",
        "drugClass": "Kháng sinh - Nhiễm khuẩn tiết niệu",
        "brandNames": [
            { "name": "Macrobid", "strength": "100mg", "form": "Viên nang" },
            { "name": "Macrodantin", "strength": "50mg, 100mg", "form": "Viên nang" }
        ],
        "mechanism": "Tập trung với nồng độ rất cao ở nước tiểu, ức chế enzyme và làm tổn thương DNA của vi khuẩn. Chỉ có tác dụng tại đường tiết niệu dưới (Viêm bàng quang).",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Viêm bàng quang cấp", "dose": "5 - 7 mg/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "400 mg/ngày" },
                    { "indication": "Dự phòng Nhiễm trùng tiểu (NTĐT)", "dose": "1 - 2 mg/kg/ngày", "interval": "Uống 1 lần trước khi đi ngủ", "maxDose": "100 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "CHỐNG CHỈ ĐỊNH (TRÁNH SỬ DỤNG) ở tất cả các bệnh nhi suy thận (eGFR < 60 mL/min). Thuốc không đạt được nồng độ diệt khuẩn trong nước tiểu và tích lũy độc tính trong máu." },
            "hepatic": { "isWarning": true, "instruction": "Hiếm gặp nhưng có thể gây viêm gan ứ mật hoặc hoại tử gan." }
        },
        "contraindications": "Suy thận (eGFR < 60). Trẻ < 1 tháng tuổi. Thiếu hụt G6PD.",
        "sideEffects": "Nước tiểu có màu nâu đậm. Rối loạn tiêu hóa. Viêm phổi mô kẽ hoặc xơ phổi (nếu dùng dự phòng kéo dài hàng tháng).",
        "targetLevel": "",
        "administration": "Uống cùng thức ăn hoặc sữa để tăng hấp thu và giảm kích ứng dạ dày.",
        "monitoring": "X quang phổi định kỳ nếu cho trẻ uống dự phòng kéo dài để phát hiện xơ phổi sớm."
    },
    {
        "id": "sulfadiazine",
        "activeIngredient": "Sulfadiazine",
        "drugClass": "Kháng sinh - Sulfonamide",
        "brandNames": [
            { "name": "Sulfadiazine", "strength": "500mg", "form": "Viên nén" }
        ],
        "mechanism": "Cạnh tranh với PABA, ức chế tổng hợp acid folic. Thường được phối hợp với Pyrimethamine để điều trị Toxoplasma (Nhiễm ký sinh trùng ở bệnh nhi suy giảm miễn dịch).",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn / Toxoplasmosis", "dose": "120 - 150 mg/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "4 - 6 g/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Nguy cơ cao tạo tinh thể Sulfonamide trong ống thận gây suy thận cấp. Phải giảm liều khi eGFR giảm và duy trì lưu lượng nước tiểu cao." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Thiếu hụt G6PD, trẻ sơ sinh < 2 tháng tuổi, mẫn cảm nhóm Sulfa.",
        "sideEffects": "Hội chứng Stevens-Johnson, suy tủy xương, sỏi thận, kết tủa tinh thể niệu.",
        "targetLevel": "",
        "administration": "Uống với một cốc nước đầy. Có thể cần kiềm hóa nước tiểu bằng Sodium Bicarbonate để tránh kết tủa.",
        "monitoring": "Soi cặn nước tiểu định kỳ tìm tinh thể, công thức máu."
    },
    {
        "id": "penicillin_g_benzathine",
        "activeIngredient": "Penicillin G Benzathine",
        "drugClass": "Kháng sinh - Penicillin giải phóng chậm",
        "brandNames": [
            { "name": "Retarpen", "strength": "1.2 triệu UI", "form": "Lọ bột pha tiêm bắp" }
        ],
        "mechanism": "Hấp thu cực kỳ chậm từ vị trí tiêm bắp, cung cấp nồng độ thuốc thấp nhưng kéo dài từ 2 đến 4 tuần. Đặc trị Viêm họng liên cầu, Giang mai, dự phòng Thấp tim.",
        "routes": [
            {
                "routeType": "Tiêm bắp sâu (IM)",
                "dosingList": [
                    { "indication": "Trẻ mới sinh - 1 tuổi", "dose": "50.000 đơn vị/kg", "interval": "1 liều duy nhất", "maxDose": "Dựa theo lứa tuổi" },
                    { "indication": "Trẻ < 27 kg", "dose": "300.000 - 600.000 đơn vị", "interval": "1 liều duy nhất (Dự phòng lặp lại sau 3-4 tuần)", "maxDose": "2.4 triệu đơn vị/liều" },
                    { "indication": "Trẻ ≥ 27 kg", "dose": "900.000 đơn vị (hoặc 1.2 triệu)", "interval": "1 liều duy nhất (Dự phòng lặp lại sau 3-4 tuần)", "maxDose": "2.4 triệu đơn vị/liều" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "Đào thải chậm qua thận, nói chung không cần hiệu chỉnh liều cho 1 liều duy nhất." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Dị ứng Penicillin.",
        "sideEffects": "Đau rát dữ dội tại vị trí tiêm bắp. Phản vệ.",
        "targetLevel": "",
        "administration": "TUYỆT ĐỐI KHÔNG ĐƯỢC TIÊM TĨNH MẠCH (Gây ngừng tim tử vong). Chỉ tiêm bắp sâu ở mông (cơ mông to).",
        "monitoring": "Quan sát phản ứng dị ứng tại cơ sở y tế 30-60 phút sau tiêm."
    },
    {
        "id": "caspofungin",
        "activeIngredient": "Caspofungin",
        "drugClass": "Kháng nấm - Nhóm Echinocandin",
        "brandNames": [
            { "name": "Cancidas", "strength": "50mg, 70mg", "form": "Lọ bột pha truyền tĩnh mạch" }
        ],
        "mechanism": "Ức chế tổng hợp beta (1,3)-D-glucan (một thành phần cấu trúc cốt lõi của vách tế bào nấm mà tế bào người không có). Phổ tác dụng rất tốt với Candida và Aspergillus kháng thuốc.",
        "routes": [
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm nấm xâm lấn", "dose": "Tấn công: 70 mg/m² da. Duy trì: 50 mg/m² da", "interval": "Mỗi 24 giờ", "maxDose": "70 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "Không cần hiệu chỉnh liều ở bệnh nhi suy thận. Rất an toàn cho chức năng thận so với Amphotericin B." },
            "hepatic": { "isWarning": true, "instruction": "Chuyển hóa qua gan. Bệnh nhi suy gan mức độ trung bình (Child-Pugh B) cần giảm liều duy trì xuống 35 mg/m² da." }
        },
        "contraindications": "Quá mẫn với Caspofungin.",
        "sideEffects": "Sốt, viêm tĩnh mạch tại chỗ truyền, tăng men gan, giải phóng histamin (phát ban, sưng mặt) nếu truyền quá nhanh.",
        "targetLevel": "",
        "administration": "Cấm pha với dịch truyền có chứa Glucose. Chỉ pha bằng Nước muối sinh lý (0.9% NaCl) hoặc Ringer Lactate. Truyền chậm trong 1 giờ.",
        "monitoring": "Theo dõi men gan."
    },
    {
        "id": "flucytosine",
        "activeIngredient": "Flucytosine (5-FC)",
        "drugClass": "Kháng nấm",
        "brandNames": [
            { "name": "Ancobon", "strength": "250mg, 500mg", "form": "Viên nang" }
        ],
        "mechanism": "Xâm nhập vào tế bào nấm, chuyển hóa thành 5-fluorouracil (5-FU) ức chế tổng hợp RNA và DNA. Luôn luôn dùng kết hợp (thường với Amphotericin B) để điều trị nấm Candida hoặc Cryptococcus ở TKTW vì dễ kháng thuốc nếu dùng đơn độc.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm nấm hệ thống / Viêm màng não", "dose": "100 mg/kg/ngày (Thường kết hợp Ampho B)", "interval": "Chia mỗi 6 giờ", "maxDose": "Theo TDM" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Rất nguy hiểm khi dùng chung Amphotericin B do Ampho B làm giảm eGFR, gây tích lũy Flucytosine dẫn đến suy tủy. Phải giảm liều (Kéo dài khoảng cách lên 12 - 24 giờ) nếu eGFR giảm." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Suy thận hoàn toàn chưa lọc máu.",
        "sideEffects": "Ức chế tủy xương phụ thuộc liều (Giảm bạch cầu, giảm tiểu cầu), độc tính gan, tiêu chảy nặng.",
        "targetLevel": "Đo nồng độ đỉnh sau uống 2 giờ. Mục tiêu: 30 - 80 mcg/mL. Độc tính tủy xương xảy ra mạnh khi nồng độ > 100 mcg/mL.",
        "administration": "Uống từng viên một trong vòng 15 phút để giảm buồn nôn.",
        "monitoring": "Công thức máu (2 lần/tuần), TDM và eGFR thường xuyên."
    },
    {
        "id": "nystatin",
        "activeIngredient": "Nystatin",
        "drugClass": "Kháng nấm - Nhóm Polyene (Dùng tại chỗ)",
        "brandNames": [
            { "name": "Nystatin", "strength": "100.000 UI, 500.000 UI", "form": "Viên nén, Hỗn dịch uống, Gói bột" }
        ],
        "mechanism": "Gắn vào ergosterol màng tế bào nấm (Candida), tạo lỗ thủng. KHÔNG hấp thu qua đường tiêu hóa, chỉ có tác dụng tại chỗ (Miệng, họng, ruột).",
        "routes": [
            {
                "routeType": "Rơ miệng / Đường Uống",
                "dosingList": [
                    { "indication": "Trẻ ≤ 1 tuổi (Đẹn/Nấm miệng)", "dose": "800.000 đơn vị/ngày (200.000 đv/liều)", "interval": "Chia mỗi 6 giờ", "maxDose": "Theo lâm sàng" },
                    { "indication": "Trẻ 1 - 12 tuổi (Đẹn/Nấm miệng)", "dose": "1.6 - 2.4 triệu đơn vị/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "Theo lâm sàng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "Thuốc không hấp thu vào máu, đào thải nguyên vẹn qua phân. Rất an toàn cho trẻ suy thận." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Mẫn cảm với Nystatin.",
        "sideEffects": "Buồn nôn, tiêu chảy (nếu dùng liều cao).",
        "targetLevel": "",
        "administration": "Đối với nấm miệng: Dùng rơ lưỡi hoặc ngậm thuốc trong miệng càng lâu càng tốt trước khi nuốt.",
        "monitoring": "Lâm sàng niêm mạc miệng."
    },
    {
        "id": "ganciclovir",
        "activeIngredient": "Ganciclovir",
        "drugClass": "Kháng virus",
        "brandNames": [
            { "name": "Cymevene", "strength": "500mg", "form": "Lọ bột pha truyền tĩnh mạch" }
        ],
        "mechanism": "Ức chế cạnh tranh DNA polymerase của virus Cytomegalovirus (CMV), lồng ghép vào DNA của virus làm ngừng chuỗi sao chép.",
        "routes": [
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Điều trị nhiễm CMV cấp", "dose": "10 mg/kg/ngày", "interval": "Chia mỗi 12 giờ (Dùng 14-21 ngày)", "maxDose": "10 mg/kg/ngày" },
                    { "indication": "Ngăn chặn (Dự phòng) CMV", "dose": "5 mg/kg/ngày", "interval": "Mỗi 24 giờ (Dùng 7 ngày/tuần)", "maxDose": "5 mg/kg/ngày" },
                    { "indication": "Nhiễm VZV nặng", "dose": "10 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "Theo dõi lâm sàng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Bắt buộc giảm liều và tăng khoảng cách khi eGFR giảm (Ví dụ eGFR 10-25: Dùng liều 1.25 mg/kg mỗi 24 giờ). Rất độc." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Suy tủy xương nặng (Bạch cầu trung tính < 500, Tiểu cầu < 25.000).",
        "sideEffects": "Suy tủy (Giảm bạch cầu trung tính, tiểu cầu), độc tính trên hệ sinh sản (có thể vô sinh/quái thai).",
        "targetLevel": "",
        "administration": "Truyền tĩnh mạch chậm qua bơm tiêm điện trong 1 giờ. KHÔNG tiêm bắp hoặc tiêm tĩnh mạch nhanh.",
        "monitoring": "Công thức máu mỗi 2-3 ngày. eGFR định kỳ."
    },
    {
        "id": "valacyclovir",
        "activeIngredient": "Valacyclovir",
        "drugClass": "Kháng virus",
        "brandNames": [
            { "name": "Valtrex", "strength": "500mg", "form": "Viên nén" }
        ],
        "mechanism": "Là tiền chất (prodrug) của Acyclovir, hấp thu qua ruột tốt hơn Acyclovir rất nhiều (sinh khả dụng gấp 3-5 lần). Ức chế DNA polymerase virus.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm VZV (Thủy đậu/Zona) ≥ 3 tháng tuổi", "dose": "60 mg/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "1 g/liều (3 g/ngày)" },
                    { "indication": "Nhiễm Herpes simplex ≥ 3 tháng tuổi", "dose": "40 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "Theo dõi lâm sàng" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Kéo dài khoảng cách liều (Lên mỗi 12 - 24 giờ) ở bệnh nhi có suy thận để tránh độc thần kinh." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Mẫn cảm với Valacyclovir hoặc Acyclovir.",
        "sideEffects": "Nhức đầu, buồn nôn. Bệnh lý thần kinh ngoại biên và trung ương (ảo giác) nếu suy thận không chỉnh liều.",
        "targetLevel": "",
        "administration": "Nên uống với nhiều nước để tránh kết tủa Acyclovir trong ống thận.",
        "monitoring": "Theo dõi lượng nước tiểu và triệu chứng thần kinh."
    },
    {
        "id": "zanamivir",
        "activeIngredient": "Zanamivir",
        "drugClass": "Kháng virus (Ức chế Neuraminidase)",
        "brandNames": [
            { "name": "Relenza", "strength": "5mg/liều hít", "form": "Bột hít định liều qua miệng" }
        ],
        "mechanism": "Ức chế enzyme Neuraminidase, ngăn giải phóng virus cúm (A và B) khỏi đường hô hấp. Tác dụng trực tiếp tại phổi.",
        "routes": [
            {
                "routeType": "Đường Hít (Inhalation)",
                "dosingList": [
                    { "indication": "Điều trị cúm (Trẻ ≥ 7 tuổi)", "dose": "20 mg/ngày (2 lần hít/liều)", "interval": "Chia mỗi 12 giờ x 5 ngày", "maxDose": "20 mg/ngày" },
                    { "indication": "Dự phòng cúm (Trẻ ≥ 5 tuổi)", "dose": "10 mg/ngày (2 lần hít/liều)", "interval": "Dùng 1 lần/ngày x 10 ngày", "maxDose": "10 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": false, "instruction": "Chỉ dùng tác dụng tại chỗ đường hô hấp (hấp thu toàn thân rất ít ~10-20%), KHÔNG CẦN CHỈNH LIỀU ở bệnh nhi suy thận." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Bệnh nhi có tiền sử Hen phế quản (Asthma) hoặc COPD do nguy cơ co thắt phế quản cấp tính tử vong.",
        "sideEffects": "Co thắt phế quản, nhức đầu, các triệu chứng giống cúm.",
        "targetLevel": "",
        "administration": "Trẻ phải được hướng dẫn kỹ cách hít bột qua miệng. Luôn để sẵn thuốc giãn phế quản (Salbutamol) khi dùng.",
        "monitoring": "Theo dõi sát nhịp thở và nghe phổi. Dừng ngay lập tức nếu có khò khè."
    },
    {
        "id": "amoxicillin_clavulanic",
        "activeIngredient": "Amoxicillin / Acid clavulanic",
        "drugClass": "Kháng sinh - Nhóm Penicillin & Ức chế Beta-lactamase",
        "brandNames": [
            { "name": "Augmentin", "strength": "250mg/31.25mg, 500mg/62.5mg", "form": "Gói bột, Viên nén" },
            { "name": "Klamoks", "strength": "228.5mg/5ml, 457mg/5ml", "form": "Hỗn dịch uống" }
        ],
        "mechanism": "Amoxicillin diệt khuẩn bằng cách ức chế tổng hợp thành tế bào vi khuẩn. Acid clavulanic ức chế enzyme beta-lactamase, giúp bảo vệ vòng beta-lactam khỏi sự phân hủy của vi khuẩn kháng thuốc.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Dạng 4:1 (Ví dụ 250/62.5)", "dose": "20 - 40 mg amoxicillin/kg/ngày", "interval": "Chia mỗi 8 giờ", "maxDose": "1.5 g amoxicillin/ngày" },
                    { "indication": "Dạng 7:1 (Ví dụ 400/57)", "dose": "25 - 45 mg amoxicillin/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "1.75 g amoxicillin/ngày" },
                    { "indication": "Dạng 14:1 (Ví dụ 600/42.9)", "dose": "90 mg amoxicillin/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "4 g amoxicillin/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": {
                "isWarning": true,
                "method": "DI (Giảm liều + Giãn cách)",
                "eGFRTable": [
                    { "moc": "30 - 50 mL/min/1.73m²", "lieu": "Mỗi 8 giờ (Liều không đổi)" },
                    { "moc": "10 - 29 mL/min/1.73m²", "lieu": "Giảm 50% liều tiêu chuẩn, mỗi 12 giờ" },
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "Giảm 50% liều tiêu chuẩn, mỗi 24 giờ" }
                ]
            },
            "hepatic": { "isWarning": true, "instruction": "Thuốc có thể gây viêm gan ứ mật (đặc biệt dùng kéo dài). Thận trọng khi dùng cho bệnh nhi có rối loạn chức năng gan nền." }
        },
        "contraindications": "Tiền sử dị ứng nặng với Penicillin. Tiền sử vàng da/suy gan liên quan đến Amoxicillin/Clavulanate.",
        "sideEffects": "Tiêu chảy (rất phổ biến, đặc biệt với chế phẩm có tỷ lệ Clavulanate cao), buồn nôn, phát ban da, nấm mạc (Candida).",
        "targetLevel": "",
        "administration": "Bắt buộc uống ngay trước bữa ăn (hoặc lúc bắt đầu ăn) để giảm thiểu bất dung nạp dạ dày-ruột.",
        "monitoring": "Lâm sàng: Tình trạng phân (tiêu chảy). Cận lâm sàng: Công thức máu, men gan nếu sử dụng phác đồ kéo dài."
    },
    {
        "id": "vancomycin",
        "activeIngredient": "Vancomycin",
        "drugClass": "Kháng sinh - Nhóm Glycopeptide",
        "brandNames": [
            { "name": "Vancocin", "strength": "500mg, 1g", "form": "Lọ bột pha tiêm truyền" }
        ],
        "mechanism": "Ức chế giai đoạn hai của quá trình tổng hợp peptidoglycan thành tế bào vi khuẩn. Đặc trị các vi khuẩn Gram dương đa kháng (như MRSA).",
        "routes": [
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "40 mg/kg/ngày", "interval": "Chia mỗi 6 giờ", "maxDose": "2 g/ngày" },
                    { "indication": "Nhiễm khuẩn trung bình - nặng", "dose": "45 - 60 mg/kg/ngày", "interval": "Chia mỗi 6 - 8 giờ", "maxDose": "2 g/ngày" },
                    { "indication": "Nhiễm khuẩn MRSA nặng", "dose": "60 - 80 mg/kg/ngày", "interval": "Chia mỗi 6 - 8 giờ", "maxDose": "3 - 3.6 g/ngày" }
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
                    { "moc": "< 10 mL/min/1.73m²", "lieu": "10 mg/kg mỗi 24 giờ. Liều tiếp theo ĐƯỢC QUYẾT ĐỊNH DỰA VÀO TDM." }
                ]
            },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Quá mẫn (phản vệ) đã biết với Vancomycin.",
        "sideEffects": "Hội chứng người đỏ (Red Man Syndrome: ban đỏ mặt/cổ do giải phóng histamin). Độc tính trên tai. Độc tính trên thận (Nephrotoxicity) đặc biệt khi dùng chung Aminoglycoside.",
        "targetLevel": "Nhiễm trùng MRSA nặng: Dựa vào TDM để đạt AUC > 400 mg/L*giờ. Thường nhắm tới nồng độ đáy (Trough) 15-20 mcg/mL đối với nhiễm trùng sâu.",
        "administration": "TUYỆT ĐỐI KHÔNG TIÊM TĨNH MẠCH NHANH. Truyền tĩnh mạch chậm tối thiểu trong 60 phút để tránh Hội chứng người đỏ.",
        "monitoring": "Lâm sàng: Sinh hiệu lúc truyền, thể tích nước tiểu, thính lực. Cận lâm sàng: Creatinine máu 2-3 ngày/lần. Đo nồng độ đáy trước liều thứ 4."
    },
    {
        "id": "ciprofloxacin",
        "activeIngredient": "Ciprofloxacin",
        "drugClass": "Kháng sinh - Nhóm Fluoroquinolone",
        "brandNames": [
            { "name": "Cipro", "strength": "250mg, 500mg", "form": "Viên nén" },
            { "name": "Ciprofloxacin", "strength": "200mg/100ml", "form": "Chai dịch truyền IV" }
        ],
        "mechanism": "Ức chế enzyme DNA gyrase và topoisomerase IV, ngăn cản sự sao chép, phiên mã và sửa chữa DNA của vi khuẩn.",
        "routes": [
            {
                "routeType": "Đường Uống (PO)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn thông thường", "dose": "20 - 40 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "1.5 g/ngày" }
                ]
            },
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm khuẩn nặng", "dose": "20 - 30 mg/kg/ngày", "interval": "Chia mỗi 12 giờ", "maxDose": "1.2 g/ngày" }
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
            "hepatic": { "isWarning": true, "instruction": "Có nguy cơ hoại tử gan cấp tính hoặc suy gan đe dọa tính mạng. Thận trọng tối đa ở trẻ có bệnh lý gan nền." }
        },
        "contraindications": "Tiền sử viêm gân/đứt gân liên quan đến Fluoroquinolone.",
        "sideEffects": "Tổn thương sụn khớp (cần cân nhắc lợi ích/nguy cơ rất kỹ ở trẻ em). Kéo dài khoảng QT. Đứt gân gót Achilles.",
        "targetLevel": "",
        "administration": "PO: Tránh uống cùng lúc với các chế phẩm chứa Canxi, Sắt, Kẽm, hoặc thuốc dạ dày (phải uống cách nhau ít nhất 2 giờ do tạo phức chelate làm mất tác dụng thuốc).",
        "monitoring": "Lâm sàng: Đau khớp, sưng gân gót. ECG: Khoảng QT."
    },
    {
        "id": "amphotericin_b_lipid",
        "activeIngredient": "Amphotericin B (Phức hợp Lipid / Liposome)",
        "drugClass": "Kháng nấm - Nhóm Polyene (Dạng công nghệ cao)",
        "brandNames": [
            { "name": "AmBisome", "strength": "50mg", "form": "Lọ bột pha truyền tĩnh mạch" },
            { "name": "Abelcet", "strength": "50mg", "form": "Lọ bột pha truyền tĩnh mạch" }
        ],
        "mechanism": "Được bọc trong các vi hạt lipid/liposome, giúp thuốc tập trung tại các mô bị nhiễm nấm và giảm đáng kể sự gắn kết vào cholesterol màng tế bào thận ở người, qua đó giảm độc tính.",
        "routes": [
            {
                "routeType": "Truyền tĩnh mạch (TTM)",
                "dosingList": [
                    { "indication": "Nhiễm nấm hệ thống xâm lấn", "dose": "5 mg/kg/ngày", "interval": "Mỗi 24 giờ", "maxDose": "500 mg/ngày" }
                ]
            }
        ],
        "organWarnings": {
            "renal": { "isWarning": true, "instruction": "Mặc dù độc tính thận giảm rõ rệt so với dạng Deoxycholate, nhưng vẫn có khả năng gây suy thận và rối loạn điện giải. Vẫn cần duy trì truyền dịch đủ." },
            "hepatic": { "isWarning": false, "instruction": "" }
        },
        "contraindications": "Quá mẫn với Amphotericin B.",
        "sideEffects": "Rét run, sốt khi truyền (ít hơn dạng Deoxycholate). Hạ Kali và Magie máu.",
        "targetLevel": "",
        "administration": "Chỉ pha bằng dung dịch Dextrose 5% (Tuyệt đối không pha dung dịch muối). Luôn phải sử dụng bộ lọc (filter) chuẩn khi truyền.",
        "monitoring": "Kiểm tra Creatinin máu, Kali, Magie hàng ngày. Theo dõi nhiệt độ khi truyền."
    }
];
