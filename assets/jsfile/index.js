const staffs = [
    {
        id: 1,
        MSC: "NV0016",
        idst: 10016,
        name: "PHAN BÁCH",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 2,
        MSC: "NV0016",
        idst: 10016,
        name: "HOÀNG THỊ THU TRANG",
        description: "BAN TÀI CHÍNH KẾ TOÁN"
    },
    {
        id: 3,
        MSC: "MV0022",
        idst: 10022,
        name: "TRẦN QUỲNH VI",
        description: "TTKD KHỐI KHÁCH HÀNG VIỄN THÔNG VÀ TRUYỀN HÌNH"
    },
    {
        id: 4,
        MSC: "NV0027",
        idst: 10027,
        name: "NGUYỄN THÀNH AN",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 5,
        MSC: "NV0028",
        idst: 10028,
        name: "NGUYỄN VIỆT AN",
        description: "TTKD KHỐI KHÁCH HÀNG VIỄN THÔNG VÀ TRUYỀN HÌNH"
    },
    {
        id: 6,
        MSC: "NV0031",
        idst: 10031,
        name: "NGUYỄN THĂNG LONG",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 7,
        MSC: "NV0042",
        idst: 10042,
        name: "NGUYỄN ĐỨC ANH",
        description: "TTKD KHỐI KHÁCH HÀNG CHÍNH PHỦ NGÂN HÀNG DOANH NGHIỆP"
    },
    {
        id: 8,
        MSC: "NV0042	",
        idst: 10042,
        name: "NGUYỄN THANH TUẤN",
        description: "TTKD KHỐI KHÁCH HÀNG CHÍNH PHỦ NGÂN HÀNG DOANH NGHIỆP"
    },
    {
        id: 9,
        MSC: "NV0068	",
        idst: 10068,
        name: "BẠCH HOÀI KHANH",
        description: "TTKD KHỐI KHÁCH HÀNG CHÍNH PHỦ NGÂN HÀNG DOANH NGHIỆP"
    },
    {
        id: 10,
        MSC: "NV0085",
        idst: 10085,
        name: "PHẠM THU TRANG",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 11,
        MSC: "NV0086",
        idst: 10086,
        name: "MAI THỊ HƯƠNG",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 12,
        MSC: "NV0096",
        idst: 10096,
        name: "PHAN MINH HẢI",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 13,
        MSC: "NV0108",
        idst: 10108,
        name: "ĐINH THỊ MINH KHÁNH",
        description: "MUA HÀNG & HTKD"
    },
    {
        id: 15,
        MSC: "NV0149",
        idst: 10149,
        name: "NGUYỄN THỊ HẢI LINH",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 16,
        MSC: "NV0185",
        idst: 10185,
        name: "TẠ CÔNG CHIẾN",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 17,
        MSC: "NV0195",
        idst: 10195,
        name: "NGUYỄN ĐỨC THIỆN",
        description: "TTKD KHỐI KHÁCH HÀNG VIỄN THÔNG VÀ TRUYỀN HÌNH"
    },
    {
        id: 18,
        MSC: "NV0266",
        idst: 10266,
        name: "HUỲNH PHƯỚC THUẬN",
        description: "DỊCH VỤ TRIỂN KHAI- ĐÀ NẴNG"
    },
    {
        id: 19,
        MSC: "NV0270",
        idst: 10270,
        name: "TRẦN MẠNH HÀ",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 20,
        MSC: "NV0279",
        idst: 10279,
        name: "NGUYỄN QUỐC TOẢN",
        description: "TTKD KHỐI KHÁCH HÀNG CHÍNH PHỦ NGÂN HÀNG DOANH NGHIỆP"
    },
    {
        id: 21,
        MSC: "NV0345",
        idst: 10345,
        name: "TÔ DUY LINH",
        description: "TTKD KHỐI KHÁCH HÀNG CHÍNH PHỦ NGÂN HÀNG DOANH NGHIỆP"
    },
    {
        id: 22,
        MSC: "NV0347",
        idst: 10347,
        name: "ĐINH TỐ QUYÊN",
        description: "TTKD KHỐI KHÁCH HÀNG CHÍNH PHỦ NGÂN HÀNG DOANH NGHIỆP"
    },
    {
        id: 23,
        MSC: "NV0356",
        idst: 10356,
        name: "ĐẶNG TÙNG ANH",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 24,
        MSC: "NV0384",
        idst: 10384,
        name: "NGUYỄN THU HÀ",
        description: "TTKD DỊCH VỤ ĐÀO TẠO"
    },
    {
        id: 25,
        MSC: "NV0389",
        idst: 10389,
        name: "BÙI TUẤN ANH",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 26,
        MSC: "NV0395",
        idst: 10395,
        name: "LÊ THANH HIẾU",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 27,
        MSC: "NV0401",
        idst: 10401,
        name: "HUỲNH THÀNH CÔNG",
        description: "DỊCH VỤ TRIỂN KHAI- ĐÀ NẴNG"
    },
    {
        id: 28,
        MSC: "NV0402",
        idst: 10402,
        name: "ĐINH VIẾT LUÂN",
        description: "TTKD KHỐI KHÁCH HÀNG VIỄN THÔNG VÀ TRUYỀN HÌNH"
    },
    {
        id: 29,
        MSC: "NV0421",
        idst: 10421,
        name: "NGUYỄN MẠNH DŨNG",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 30,
        MSC: "NV0438	",
        idst: 10438,
        name: "PHẠM VĂN QUYẾT",
        description: "TTKD KHỐI KHÁCH HÀNG CHÍNH PHỦ NGÂN HÀNG DOANH NGHIỆP"
    },
    {
        id: 31,
        MSC: "NV0440",
        idst: 10440,
        name: "NGUYỄN XUÂN QUANG",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 32,
        MSC: "NV0446",
        idst: 10446,
        name: "LÊ VIỆT HƯNG",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 33,
        MSC: "NV0453",
        idst: 10453,
        name: "RẦN VIỆT PHƯƠNG",
        description: "TTKD KHỐI KHÁCH HÀNG VIỄN THÔNG VÀ TRUYỀN HÌNH"
    },
    {
        id: 34,
        MSC: "NV0454",
        idst: 10454,
        name: "NGUYỄN THỊ PHƯỢNG",
        description: "BAN TÀI CHÍNH KẾ TOÁN"
    },
    {
        id: 35,
        MSC: "NV0461",
        idst: 10461,
        name: "LÊ ĐỨC CƯỜNG",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 36,
        MSC: "NV3003",
        idst: 13003,
        name: "BÙI ĐÌNH KHÁNH",
        description: "TRUNG TÂM PHẦN MỀM"
    },
    {
        id: 37,
        MSC: "NV3004",
        idst: 13004,
        name: "VŨ ĐÌNH ĐỨC",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 38,
        MSC: "NV3012",
        idst: 13012,
        name: "BÙI NGỌC HƯƠNG",
        description: "MUA HÀNG & HTKD"
    },
    {
        id: 39,
        MSC: "NV3013",
        idst: 13013,
        name: "NGUYỄN THU TRANG",
        description: "TRUNG TÂM PHẦN MỀM"
    },
    {
        id: 40,
        MSC: "NV3017",
        idst: 13017,
        name: "VÕ QUÝ ĐỨC",
        description: "TRUNG TÂM PHẦN MỀM"
    },
    {
        id: 41,
        MSC: "NV3019",
        idst: 13019,
        name: "LÊ KIM THANH",
        description: "TTKD DỊCH VỤ ĐÀO TẠO"
    },
    {
        id: 42,
        MSC: "NV3022",
        idst: 13022,
        name: "PHẠM NGỌC HOÀNG NGÂN",
        description: "NHÂN SỰ & TRUYỀN THÔNG"
    },
    {
        id: 43,
        MSC: "NV3024",
        idst: 13024,
        name: "NGUYỄN HỮU DUY",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 44,
        MSC: "NV3029",
        idst: 13029,
        name: "NGUYỄN ANH TUẤN",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 45,
        MSC: "NV3032",
        idst: 13032,
        name: "NGUYỄN VIỆT HƯNG",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 46,
        MSC: "NV3040",
        idst: 13040,
        name: "LÊ THỊ THÙY AN",
        description: "NHÂN SỰ & TRUYỀN THÔNG"
    },
    {
        id: 47,
        MSC: "NV3041",
        idst: 13041,
        name: "NGUYỄN QUANG THUẬN",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 48,
        MSC: "NV3043",
        idst: 13043,
        name: "TRẦN VĂN DUY",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 49,
        MSC: "NV3045",
        idst: 13045,
        name: "NGÔ MỸ NHẬT LINH",
        description: "BAN TÀI CHÍNH KẾ TOÁN"
    },
    {
        id: 50,
        MSC: "NV3047",
        idst: 13047,
        name: "PHẠM THẾ CƯỜNG",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 51,
        MSC: "NV3048",
        idst: 13048,
        name: "PHẠM THANH HIẾU",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 52,
        MSC: "NV3053",
        idst: 13053,
        name: "VŨ ĐỨC MINH HIẾU",
        description: "TTKD KHỐI KHÁCH HÀNG VIỄN THÔNG VÀ TRUYỀN HÌNH"
    },
    {
        id: 53,
        MSC: "NV3054",
        idst: 13054,
        name: "NGUYỄN TUẤN DŨNG",
        description: "TTKD KHỐI KHÁCH HÀNG CHÍNH PHỦ NGÂN HÀNG DOANH NGHIỆP"
    },
    {
        id: 54,
        MSC: "NV3055",
        idst: 13055,
        name: "TRẦN VĂN NGHĨA",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 55,
        MSC: "NV3056",
        idst: 13056,
        name: "NGUYỄN PHÚC THANH",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 56,
        MSC: "NV3057",
        idst: 13057,
        name: "NGUYỄN THU THUỲ",
        description: "NHÂN SỰ & TRUYỀN THÔNG"
    },
    {
        id: 57,
        MSC: "NV3058",
        idst: 13058,
        name: "NGUYỄN THUÝ HÀ",
        description: "MUA HÀNG & HTKD"
    },
    {
        id: 58,
        MSC: "NV3061",
        idst: 13061,
        name: "ĐOÀN VIẾT HÙNG",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 59,
        MSC: "NV3063",
        idst: 13063,
        name: "NGUYỄN VIẾT ĐỨC",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 60,
        MSC: "NV3065",
        idst: 13065,
        name: "NGÔ VĂN NHẬT",
        description: "TTKD KHỐI KHÁCH HÀNG CHÍNH PHỦ NGÂN HÀNG DOANH NGHIỆP"
    },
    {
        id: 61,
        MSC: "NV3065",
        idst: 13065,
        name: "NGÔ VĂN NHẬT",
        description: "TTKD KHỐI KHÁCH HÀNG CHÍNH PHỦ NGÂN HÀNG DOANH NGHIỆP"
    },
    {
        id: 62,
        MSC: "NV3068",
        idst: 13068,
        name: "CAO MINH THỊNH",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 63,
        MSC: "NV3070",
        idst: 13070,
        name: "NGUYỄN MẠNH THẮNG",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 64,
        MSC: "NV3075	",
        idst: 13075,
        name: "HÀ ĐỨC TÀI",
        description: "DỊCH VỤ TRIỂN KHAI- ĐÀ NẴNG"
    },
    {
        id: 65,
        MSC: "NV3079",
        idst: 13079,
        name: "ĐỖ MINH ANH",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 66,
        MSC: "NV3081",
        idst: 13081,
        name: "NGUYỄN QUỐC THÁI",
        description: "TTKD KHỐI KHÁCH HÀNG VIỄN THÔNG VÀ TRUYỀN HÌNH"
    },
    {
        id: 67,
        MSC: "NV3085",
        idst: 13085,
        name: "TẠ HOÀNG TRANG",
        description: "MUA HÀNG & HTKD"
    },
    {
        id: 68,
        MSC: "NV3083",
        idst: 13083,
        name: "NGUYỄN THỊ HOÀI TRANG",
        description: "MUA HÀNG & HTKD"
    },
    {
        id: 69,
        MSC: "NV3086",
        idst: 13086,
        name: "HOÀNG VŨ DƯƠNG",
        description: "TTKD KHỐI KHÁCH HÀNG VIỄN THÔNG VÀ TRUYỀN HÌNH"
    },
    {
        id: 70,
        MSC: "NV3090",
        idst: 13090,
        name: "NGUYỄN DUY THÀNH",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 71,
        MSC: "NV3091",
        idst: 13091,
        name: "NGUYỄN ĐỨC HOÀNG",
        description: "TTKD DỊCH VỤ ĐÀO TẠO"
    },
    {
        id: 72,
        MSC: "NV3094",
        idst: 13094,
        name: "NGUYỄN THỊ HÀ ANH",
        description: "TTKD DỊCH VỤ ĐÀO TẠO"
    },
    {
        id: 73,
        MSC: "NV3095",
        idst: 13095,
        name: "NGUYỄN HOÀNG NAM",
        description: "TTKD KHỐI KHÁCH HÀNG VIỄN THÔNG VÀ TRUYỀN HÌNH"
    },
    {
        id: 74,
        MSC: "NV3098",
        idst: 13098,
        name: "NGUYỄN THANH TÙNG",
        description: "ÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 75,
        MSC: "NV3099",
        idst: 13099,
        name: "DƯƠNG HOÀNG GIANG",
        description: "TRUNG TÂM PHẦN MỀM"
    },
    {
        id: 76,
        MSC: "NV3100",
        idst: 13100,
        name: "TRƯƠNG KHÁNH LINH",
        description: "HÂN SỰ & TRUYỀN THÔNG"
    },
    {
        id: 77,
        MSC: "NV3101",
        idst: 13101,
        name: "TÔ THẾ DŨNG",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 78,
        MSC: "NV3102",
        idst: 13102,
        name: "CHỬ VĂN HOÀNG",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 79,
        MSC: "NV3104",
        idst: 13104,
        name: "DƯƠNG QUANG PHÚC",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 80,
        MSC: "NV3106",
        idst: 13106,
        name: "LÊ NGỌC ANH",
        description: "MUA HÀNG & HTKD"
    },
    {
        id: 81,
        MSC: "NV3108",
        idst: 13108,
        name: "VŨ ĐÌNH TRUNG",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 82,
        MSC: "NV3109",
        idst: 13109,
        name: "NGUYỄN THỊ UYÊN",
        description: "TTKD DỊCH VỤ ĐÀO TẠO"
    },
    {
        id: 83,
        MSC: "NV3111",
        idst: 13111,
        name: "NGUYỄN KHÁNH LINH",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 84,
        MSC: "NV3112",
        idst: 13112,
        name: "LÊ THỊ THU HƯƠNG",
        description: "TTKD DỊCH VỤ ĐÀO TẠO"
    },
    {
        id: 85,
        MSC: "NV3113",
        idst: 13113,
        name: "NGUYỄN DUY LINH",
        description: "RUNG TÂM PHẦN MỀM"
    },
    {
        id: 86,
        MSC: "NV3114",
        idst: 13114,
        name: "TRẦN VŨ VINH",
        description: "TTKD DỊCH VỤ ĐÀO TẠO"
    },
    {
        id: 87,
        MSC: "NV3115",
        idst: 13115,
        name: "NGUYỄN THỊ HẠNH",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 88,
        MSC: "NV3117",
        idst: 13117,
        name: "NGUYỄN HOÀNG DƯƠNG",
        description: "HÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 89,
        MSC: "NV3118",
        idst: 13118,
        name: "NGUYỄN HOÀNG MINH",
        description: "DTS TELECOM"
    },
    {
        id: 90,
        MSC: "NV3120",
        idst: 13120,
        name: "PHẠM DUY HIỆP",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 91,
        MSC: "NV3121",
        idst: 13121,
        name: "NGÔ THẾ CHUNG",
        description: "TTKD KHỐI KHÁCH HÀNG CHÍNH PHỦ NGÂN HÀNG DOANH NGHIỆP"
    },
    {
        id: 92,
        MSC: "NV3122	",
        idst: 13122,
        name: "LÂM BẢO YẾN",
        description: "NHÂN SỰ & TRUYỀN THÔNG"
    },
    {
        id: 93,
        MSC: "NV3123",
        idst: 13123,
        name: "NGUYỄN NGUYỆT MINH",
        description: "TTKD DỊCH VỤ ĐÀO TẠO"
    },
    {
        id: 94,
        MSC: "NV3124",
        idst: 13124,
        name: "DƯƠNG QUỐC VIỆT",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 95,
        MSC: "NV3126",
        idst: 13126,
        name: "PHẠM TUẤN NAM",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 96,
        MSC: "NV3128",
        idst: 13128,
        name: "NGUYỄN THẾ HƯỞNG",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 97,
        MSC: "NV3131",
        idst: 13131,
        name: "ĐẶNG XUÂN DUY",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 98,
        MSC: "NV3132",
        idst: 13132,
        name: "VŨ HOÀNG",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 99,
        MSC: "NV3133",
        idst: 13133,
        name: "PHẠM VĂN ĐẠT",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 100,
        MSC: "NV3134",
        idst: 13134,
        name: "PHẠM DIỆU HUYỀN",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 101,
        MSC: "NV3135",
        idst: 13135,
        name: "TRỊNH XUÂN ĐẠT",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 102,
        MSC: "NV3136",
        idst: 13136,
        name: "NGUYỄN HOÀNG DƯƠNG",
        description: "DỊCH VỤ TRIỂN KHAI"
    },
    {
        id: 103,
        MSC: "NV3137",
        idst: 13137,
        name: "NGUYỄN CÔNG TÌNH",
        description: "TTKD KHỐI KHÁCH HÀNG CHÍNH PHỦ NGÂN HÀNG DOANH NGHIỆP"
    },
    {
        id: 104,
        MSC: "NV3140",
        idst: 13140,
        name: "BÙI ĐÌNH THIÊN TÌNH",
        description: "TRUNG TÂM PHẦN MỀM"
    },
    {
        id: 105,
        MSC: "NV3141",
        idst: 13141,
        name: "LÊ CÔNG MẠNH",
        description: "TTKD KHỐI KHÁCH HÀNG VIỄN THÔNG VÀ TRUYỀN HÌNH"
    },
    {
        id: 106,
        MSC: "NV3142",
        idst: 13142,
        name: "VŨ HỮU MINH ",
        description: "ÀNH CHÍNH TỔNG HỢP"
    },
    {
        id: 107,
        MSC: "NV3143",
        idst: 13143,
        name: "LÊ TRUNG KIÊN",
        description: "TTKD KHỐI KHÁCH HÀNG VIỄN THÔNG VÀ TRUYỀN HÌNH"
    }
    //    {
    //     id: 108,
    //     MSC:"NV3144",
    //     idst: 13144,
    //     name: "NGUYEN VAN TUNG",
    //     description:"TRUNG TÂM PHẦN MỀM"
    // },
]


//#region - start of - number counter animation

const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        target.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};




//#endregion - end of - number counter animation
function randomArray(numberRandom) {
    return staffs.filter(function (staff, index) {
        return numberRandom === staff.id
    })
}
const inPrize = document.querySelector('.lable-give');
function setHtml(people) {
    let html;
    html = (`<p>Chúc mừng <a style="color: cornflowerblue;"> ${people.name} </a>
         mã số <a style="color: cornflowerblue;"> ${people.MSC} </a>đã trúng giải </p>`)
    inPrize.innerHTML = html;
    console.log(people.name);
}

var newArr = [];
newArr = staffs;

function clickk() {

    const valueas = document.querySelector(".form-control").value;

    if (valueas === "option") {
        doubleClickk();
        alert('Chọn giải thưởng mới được bấm nút');
    }
    else {
        const indexRandom = Math.floor(Math.random() * staffs.length);
        const arrNew = newArr[indexRandom];
        const arr = arrNew.idst.toString().split("")
        // console.log(setHtml(arr));
        // countPriez();
        var c = newArr.filter(function (people) {
            return people.id !== indexRandom;
        });
        console.log(newArr);

        counterAnim(".number-random_1", 0, 0, 1000);
        setTimeout(() => {
            counterAnim(".number-random_2", 0, arr[1], 200);
        }, 2000);
        setTimeout(() => {
            counterAnim(".number-random_3", 0, arr[2], 200);
        }, 4000);
        setTimeout(() => {
            counterAnim(".number-random_4", 0, arr[3], 200);
        }, 6000);
        setTimeout(() => {
            counterAnim(".number-random_5", 0, arr[4], 200);
        }, 8000);
        
        inPrize.innerHTML = "Ai sẽ là người may mắn nào ..."

        setTimeout(() => {
            setHtml(arrNew);
        }, 10000);
       
        newArr = c;

    }

}



