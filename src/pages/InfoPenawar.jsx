import React from "react";
import orang from "../images/orang.png";

const InfoPenawar = () => {
    return (
        <div className="mx-auto mt-4 w-full space-y-7 px-4 sm:mt-10 sm:w-[650px]">
            <div className="flex items-center gap-6 rounded-2xl border border-neutral-200 p-4 shadow-low">
                <img src={orang} alt="" />
                <div className="space-y-1">
                    <div>Nama Pembeli</div>
                    <div className="text-xs text-neutral-03">Kota</div>
                </div>
            </div>
            <p className="font-medium">Daftar Produkmu yang Ditawar</p>
            <div className="flex gap-6 rounded-2xl">
                <img
                    src="/img/jam-2.png"
                    alt=""
                    className="h-14 w-14 rounded-xl object-cover"
                />
                <div className="w-full space-y-1">
                    <div className="flex justify-between text-xs text-neutral-03">
                        <p>Penawaran Produk</p>
                        <p>20 Apr, 14:04</p>
                    </div>
                    <p className="">Jam Tangan Casio</p>
                    <p className="">Rp 250.000</p>
                    <p className="">Ditawar Rp 200.000</p>
                    <div className="flex justify-end">
                        <button className="mr-4 w-1/3 rounded-2xl border border-primary-purple-04 py-2">
                            Tolak
                        </button>
                        <button className="w-1/3 rounded-2xl bg-primary-purple-04 py-2 text-white">
                            Terima
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-px bg-[#E5E5E5]"></div>
        </div>
    );
};

export default InfoPenawar;