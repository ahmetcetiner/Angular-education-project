import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title="Urun Listesi"

  products : any[]=[
    { id:1,
      productName: "Abra A5 V19.1 15,6\" Oyun Bilgisayarı",
      productDescription: {
        cpu:"Intel® Alder Lake Core™ i5-12500H 12C/16T; 18MB L3; E-CORE Max 3.30GHZ P-CORE Max 4.5GHZ;45W ;10nm SuperFin",
        gpu:"4 GB GTX 1650 128-Bit Max-P 60Watt + 15 Watt DB 2.0",
        screen:"15,6\" FHD 1920x1080 144Hz IPS Mat LED Ekran",
        ram:"8GB (1x8GB) DDR4 1.2V 3200MHz SODIMM",
        rom:"500GB PCIe M.2 2280 3.0 x4",
        oSys:"FreeDos (İşletim sistemi bulunmamaktadır)."},
      productPrice: "16.999"
    },
    { id:2,
      productName: "Abra A7 V14.1 17,3\" Oyun Bilgisayarı",
      productDescription: {
        cpu:"Intel® Alder Lake Core™ i5-12500H 12C/16T; 18MB L3; E-CORE Max 3.30GHZ P-CORE Max 4.5GHZ;45W ;10nm SuperFin",
        gpu:"4 GB GTX 1650 128-Bit Max-P 60Watt + 15 Watt DB 2.0",
        screen:"17,3\" FHD 1920x1080 144Hz IPS Mat LED Ekran",
        ram:"8GB (1x8GB) DDR4 1.2V 3200MHz SODIMM",
        rom:"500GB PCIe M.2 2280 3.0 x4",
        oSys:"FreeDos (İşletim sistemi bulunmamaktadır)."},
      productPrice: "17.699"
    },
    { id:3,
      productName: "Tulpar T7 V20.5 17,3\" Oyun Bilgisayarı",
      productDescription: {
        cpu:"Intel® Alder Lake Core™ i7-12700H 14C/20T; 24MB L3; E-CORE Max 3.50GHZ P-CORE Max 4.7GHZ;45W ;10nm SuperFin",
        gpu:"Nvidia RTX3060 Max-Performance 6GB GDDR6 192-Bit",
        screen:"17,3\" FHD 1920x1080 144Hz IPS Mat LED Ekran",
        ram:"16GB (2x8GB) DDR4 3200MHz",
        rom:"500GB PCIe M.2 2280 3.0 x4 (Okuma: 2050 MB/s - Yazma: 940 MB/s)",
        oSys:"FreeDos (İşletim sistemi bulunmamaktadır)."},
      productPrice: "29.999"
    },
    { id:4,
      productName: "Semruk S7 V8.1.2 17,3\" Oyun Bilgisayarı",
      productDescription: {
        cpu:"Intel Rocket Lake Core™ i9-11900K 8C/16T; 16MB L3; 8GT/s; 3.5GHz>5.3GHz; 125W; 14nm",
        gpu:"Nvidia RTX3080 Max-Performance 16GB GDDR6 256-Bit",
        screen:"17,3\" UHD 3840x2160 %100 Adobe RGB IPS Mat LED Ekran",
        ram:"128GB (4x32GB) DDR4 1.2V 2933MHz",
        rom:"3x 2TB SAMSUNG PM9A1 M.2 SATA NVME SSD",
        oSys:"Windows 11 Pro"},
      productPrice: "149.999"
    },
  ]



  ngOnInit(): void {
  }

}
