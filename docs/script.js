window.onload = init;
function init(){
    const map = new ol.Map({
        target: 'map',
        layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'watercolor',})
        }),
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'terrain-labels'})
        })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([ -65.477783,-24.836145]),
            zoom:10
        })
    });


//Agregar vector//

/*const exampleLayer = new ol.layer.VectorImage({
    source:new ol.source.Vector({
        
        format: new ol.format.GeoJSON(),
        url: 'deptos.geojson'
    }),
    visible:true,
    title: 'example poligono'
    
})
map.addlayer(exampleLayer);
}*/


var mygeojson = new ol.layer.Vector({
    source: new ol.source.Vector({
        format:new ol.format.GeoJSON(),
        url:'deptos.geojson'
    })
})
map.addLayer(mygeojson)
}


