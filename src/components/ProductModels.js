export const productList = [
    {
      id: 1,
      brand: "Hall d'entree",
      category: "Chairs",
      desc: "6 items",
      price: "",
      status: "",
      isAvailable: false,
      isOnStock: false,
      configurations: 0,
      image: "https://cdn.mohd.it/cdn-cgi/image/width=1200,format=auto/media/catalog/product/h/a/hal-soft-wood.jpg", 
    },
    {
      id: 2,
      brand: "Cusine",
      category: "Armchairs",
      desc: "18 items",
      price: "",
      status: "",
      isAvailable: false,
      isOnStock: false,
      configurations: 0,
      image: "https://cdn.mohd.it/cdn-cgi/image/width=1200,format=auto/media/catalog/product/w/e/welcomesofa-unopi-2.jpg",
    },
    {
      id: 3,
      brand: "Gervasoni",
      category: "Armchairs",
      desc: "Loll 09 Girevole",
      price: "2.586,00 €",
      status: "Proposed",
      isAvailable: false,
      isOnStock: true,
      configurations: 0,
      image: "https://cdn.mohd.it/cdn-cgi/image/width=1200,format=auto/media/catalog/product/l/o/loll09swivelarmchairbearpolar.jpg",
    },
    {
      id: 4,
      brand: "Tom Dixon",
      category: "Chairs",
      desc: "Fat Lounge Chair Gentle 2 0193",
      price: "2.586,00 €",
      status: "Proposed",
      isAvailable: false,
      isOnStock: true,
      configurations: 2,
      image: "https://cdn.mohd.it/cdn-cgi/image/width=1200,format=auto/media/catalog/product/f/a/fat-chair-2-tom-dixon.jpg", 
    },
    {
      id: 5,
      brand: "Poliform",
      category: "Armchairs",
      desc: "Mad Chair Poltroncina - Base Girevole/Carbone 1404",
      price: "2.586,00 €",
      status: "Approved",
      isAvailable: true,
      isOnStock: false,
      configurations: 0,
      image: "https://cdn.mohd.it/cdn-cgi/image/width=1200,format=auto/media/catalog/product/m/a/mad-chair-prussia-girevole.jpg",
    },
    {
      id: 6,
      brand: "Vitra",
      category: "Armchairs",
      desc: "Grand Repos & Ottoman - Poltrona e Pouf - Dume...",
      price: "2.586,00 €",
      status: "Proposed",
      isAvailable: true,
      isOnStock: false,
      configurations: 3,
      image: "https://cdn.mohd.it/cdn-cgi/image/width=1200,format=auto/media/catalog/product/g/r/grand-repos-1-vitra.jpg",
    },
    {
      id: 7,
      brand: "Kriptonite",
      category: "Armchairs",
      desc: "Krossing sistema a parete",
      price: "2.586,00 €",
      status: "Proposed",
      isAvailable: false,
      isOnStock: false,
      configurations: 0,
      image: "https://cdn.mohd.it/cdn-cgi/image/width=800,format=auto/media/catalog/product/k/r/krossing-200-100-2.jpg", 
    },
    {
      id: 8,
      brand: "Flos",
      category: "Suspension Lamps",
      desc: "Snoopy white lampada",
      price: "2.586,00 €",
      status: "Proposed",
      isAvailable: false,
      isOnStock: true,
      configurations: 0,
      image: "https://cdn.mohd.it/cdn-cgi/image/width=1200,format=auto/media/catalog/product/s/n/snoopy-mohd.jpg",
    },
    {
      id: 9,
      brand: "Cassina",
      category: "Armchairs",
      desc: "637 Utrecht Blanket Stich- Armchair.",
      price: "2.586,00 €",
      status: "Proposed",
      isAvailable: false,
      isOnStock: false,
      configurations: 0,
      image: "https://cdn.mohd.it/cdn-cgi/image/width=1200,format=auto/media/catalog/product/u/t/utrecht-armchair-1-cassina.jpg",
    },
  ];
  

  export const StatusEnum = Object.freeze({
    PROPOSED: "Proposed",
    APPROVED: "Approved",
    REJECTED: "Rejected",
  });
  
 export const categoryOptions = [
    "Chaises Longues",
    "Armchairs",
    "Chairs",
    "Table Lamps",
    "Suspension Lamps",
    "Led Lamps",
    "Tables",
    "Doors",
  ];
  
  export const statusOptions = ["Proposed", "Approved", "Rejected"];
  export const brandOptions = ["Hall d'entree", "Cusine", "Gervasoni", "Tom Dixon", "Poliform", "Vitra", "Kriptonite", "Flos", "Cassina"];
  export const configurationOptions = ["0", "1", "2", "3"];