export interface LichChieu {
  maLichChieu: number;
  ngayChieuGioChieu: string;
}

export interface CumRapChieu {
  maCumRap: string;
  tenCumRap: string;
  diaChi: string;
  lichChieuPhim: LichChieu[];
}

export interface HeThongRapChieu {
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
  cumRapChieu: CumRapChieu[];
}
