var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Sulak Alanlar ve Kuraklık  /  Wetlands and Drought',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: '1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.743,41.256],
                zoom: 10,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '1.1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/G4F1ZqWx/MEF-AAP-027-BAP-PART-II-2025-07-31-06-50-05.png',
            description: '',
            location: {
                center: [28.743,41.256],
                zoom: 11.5,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/PZ8x1V7c/MEF-AAP-027-BAP-PART-II-2025-07-31-06-54-45.png',
            description: '',
            location: {
                center: [28.743,41.256],
                zoom: 11.5,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/hRM6yfQ4/MEF-AAP-027-BAP-PART-II-2025-07-31-06-57-35.png',
            description: '',
            location: {
                center: [28.767,41.300],
                zoom: 15,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/49qzhsC/MEF-AAP-027-BAP-PART-II-2025-07-31-07-03-04.png',
            description: '',
            location: {
                center: [28.789,41.271],
                zoom: 15,
                pitch: 40,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'centered',
            hidden: false,
            title: '2000-2020 yılları arasında 3. Havalimanı Proje Alanında Toprağın Metabolik Dolaşımı / Metabolic FLow of Soil Metabolic Flows of Soil in the Context of the 3rd Airport Project (2000–2020)',
            image: 'https://i.ibb.co/Fk26sn1M/simsiz-video-Clipchamp-ile-yap-ld-10.gif',
            description: 'Toprağın Metabolik Dolaşımı / Metabolic FLow of Soil: 2000 ve 2020 yılları arasında uydu fotoğraflarının çakıştırılması ile oluşturulan görselleştirme çalışmasında, havalimanı proje alanı ve kuzeyindeki toprak hareketliliği ve toprak akışları değişimi incelendiğinde açık maden ocakları ve sulak alanlarda gerçekleşen sürekli bir doldurma ve boşaltma hamlesi gözlemlenebilir. Bir başka deyişle, betonun dolaşımı ile toprağın dolaşımı kentin metabolizmasında birbirine dolanıktır. / In the visualization study created by overlaying satellite images from the years 2000 and 2020, an examination of the airport project area and the changes in soil movement and flow in the northern part of the area reveals a continuous pattern of filling and emptying in open-pit mines and wetlands. In other words, the flow of concrete and the flow of soil are entangled within the metabolism of the city',
            location: {
                center: [28.743,41.256],
                zoom: 11.5,
                pitch: 40,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
