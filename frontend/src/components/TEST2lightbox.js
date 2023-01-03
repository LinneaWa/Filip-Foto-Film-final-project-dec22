import Lightroom from 'react-lightbox-gallery';
// import Sanna from "./Sanna.jpg";
//import Flisby from '/assets/foto/foretag/Flisby.jpg';
//import Smaland from '/assets/foto/foretag/Smaland.jpg';
//import Raski from '/assets/foto/foretag/Raski.jpg';

var images = [
    {
      src:"https://usercontent.one/wp/www.filippilthammar.se/wp-content/gallery/foretagsbilder/cache/Flisby.jpg-nggid0227-ngg0dyn-530x1000x100-00f0w010c010r110f110r010t010.jpg",
      desc: "Flisby",
    },
    {
      src:"https://usercontent.one/wp/www.filippilthammar.se/wp-content/gallery/foretagsbilder/cache/Foretag-7.jpg-nggid0220-ngg0dyn-530x1000x100-00f0w010c010r110f110r010t010.jpg",
      desc: "Woman with camera ",
    }, 
    {
      src:"https://usercontent.one/wp/www.filippilthammar.se/wp-content/gallery/foretagsbilder/cache/Raski.jpg-nggid0225-ngg0dyn-530x1000x100-00f0w010c010r110f110r010t010.jpg",
      desc: "porträtt",
    },
    {
      src:"https://usercontent.one/wp/www.filippilthammar.se/wp-content/gallery/foretagsbilder/cache/Foretag-9.jpg-nggid0222-ngg0dyn-530x1000x100-00f0w010c010r110f110r010t010.jpg",
      desc: "Gruppfoto",
    }
  ];

  var settings = {
    columnCount: {
      default: 3,
      mobile: 3,
      tab: 4
    },
    mode: "dark",
    loop: true
  };

export const TEST2lightbox = () => {

  return (
    <div className="App">
      Karusell företagsfoto (klicka på bilderna)
      <Lightroom images={images} settings={settings} />
    </div>
  );
}