import Lightroom from 'react-lightbox-gallery';

var images = [
    {
      src:"https://filippilthammar.se/FilipFotoFilm/Images/Flisby.jpg",
      desc: "Flisby",
    },
    {
      src:"https://filippilthammar.se/FilipFotoFilm/Images/Sanna.jpg",
      desc: "Woman with camera ",
    }, 
    {
      src:"https://filippilthammar.se/FilipFotoFilm/Images/Raski.jpg",
      desc: "porträtt",
    },
    {
      src:"https://filippilthammar.se/FilipFotoFilm/Images/Smaland.jpg",
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