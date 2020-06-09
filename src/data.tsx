export interface ProductType {
    id: number;
    title: string;
    img: string;
    price: number;
    company: string;
    info: string;
    inCart: Boolean;
    count: number;
    total: number;
}

export const storeProducts: ProductType[] = [
  {
    id: 1,
    title: "Google Pixel - Black",
    img: "img/product-1.jpg",
    price: 2549,
    company: "GOOGLE",
    info:
      "Google Pixel är den första helt egna smartphone från Google som de själva marknadsför som Made by Google. Den är en exakt kopia av sin storebror Pixel XL med de enda undantagen för skärmen och batteriet.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 2,
    title: "Blackview",
    img: "img/product-2.jpg",
    price: 6299,
    company: "Android",
    info:
      "Blackview BV9800 Pro är en helt ny premiumtelefon från Blackview som sätter en ny standard för tåliga telefoner. En vattentät och stöttålig smartphone med stort batteri och rejält kraftfulla komponenter. Den är dessutom utrustad med en FLIR värmekamera! En smartphone för dig som vill ha en telefon som tål hårda tag och klarar tunga applikationer med sina kraftfulla komponenter.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 3,
    title: "Huawei P Smart Pro",
    img: "img/product-3.jpg",
    price: 2990,
    company: "Huawei",
    info:
      "Huawei P Smart Pro är allt som kännetecknar P Smart, taget till nästa nivå. Telefonen har getts en stor 6,59 tums Ultra FullView-skärm, helt utan flärp. På kamera-sidan är P Smart Pro utrustad med en trelinsig AI-kamera, som kompletteras med en snabb selfiekamera, som dessutom automatiskt fälls in och ut när du är på selfie-humör. Alla dina snygga foton får plats, med 128 GB lagring och med 6 GB internminne kan du förvänta dig snabb och smidig drift - även när många appar körs samtidigt.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 4,
    title: "Iphone 11",
    img: "img/product-4.jpg",
    price: 8490,
    company: "Apple",
    info:
      "Öppna ögonen och upplev världens skönhet från ett nytt perspektiv med iPhone 11 och dess skärm på 6.1 tum. Telefonen kommer med ett snabbt chip, avancerad teknik, smidig drift och innovativa funktioner.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 5,
    title: "HTC Desire 626s",
    img: "img/product-5.jpg",
    price: 2799,
    company: "HTC",
    info:
      "HTC Desire 626 lanseras i en dual tone-design som är utförd i genomfärgad polykarbonat. Tack vare att materialet genomfärgas behåller telefonen sitt snygga yttre även efter längre tids användning, och kombinationen av dimensionerna och en vikt på 144 gram gör att den både ligger och känns bra i handen.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 6,
    title: "Nokia 2.3 Smartphone",
    img: "img/product-6.jpg",
    price: 1390,
    company: "Nokia",
    info:
      "Nokia 2.3 smartphone har ett 4 000 mAh-batteri kan driva telefonen i upp till 2 dagar på en laddning, och på sidan har du en praktisk Google Assistant-knapp som er redo att hjälpa dig med allt.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 7,
    title: "OnePlus 7 Pro",
    img: "img/product-7.jpg",
    price: 5685,
    company: "OnePlus",
    info:
      "OnePlus 7T Pro-smarttelefonen har en kropp helt i glas som är fullpackad med kraftfulla funktioner. Med Snapdragon 855 Plus-processorn klarar enheten även de mest krävande av uppgifter.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 8,
    title: "OnePlus 8",
    img:  "img/product-8.jpg",
    price: 7690,
    company: "OnePlus",
    info:
      "OnePlus 8 smartphone har en 6,55 tum stor pekskärm med 90Hz uppdateringsfrekvens, 48+16+2Mpx kamera och en kraftfull Snapdragon 865-processor som stödjer 5G-nätverksanslutning. Det 4300mAh batteriet stödjer Warp Charge 30T-snabbladdning.",
    inCart: false,
    count: 0,
    total: 0
  }
];
