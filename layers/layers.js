ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([10.240103, 4.872240, 10.993021, 5.279823]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Dpartements_1 = new ol.format.GeoJSON();
var features_Dpartements_1 = format_Dpartements_1.readFeatures(json_Dpartements_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Dpartements_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartements_1.addFeatures(features_Dpartements_1);
var lyr_Dpartements_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dpartements_1, 
                style: style_Dpartements_1,
                interactive: true,
                title: '<img src="styles/legend/Dpartements_1.png" /> Départements'
            });
var format_villagesduNDE_2 = new ol.format.GeoJSON();
var features_villagesduNDE_2 = format_villagesduNDE_2.readFeatures(json_villagesduNDE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_villagesduNDE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_villagesduNDE_2.addFeatures(features_villagesduNDE_2);
var lyr_villagesduNDE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_villagesduNDE_2, 
                style: style_villagesduNDE_2,
                interactive: true,
                title: '<img src="styles/legend/villagesduNDE_2.png" /> villages du NDE'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Dpartements_1.setVisible(true);lyr_villagesduNDE_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Dpartements_1,lyr_villagesduNDE_2];
lyr_Dpartements_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SCE_GEO': 'SCE_GEO', 'SCE_SEM': 'SCE_SEM', 'DATE_': 'DATE_', 'ORIGINE': 'ORIGINE', 'NOM': 'NOM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_villagesduNDE_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ANNOTXT': 'ANNOTXT', 'Type': 'Type', 'OBJECTID_2': 'OBJECTID_2', 'SCE_GEO': 'SCE_GEO', 'SCE_SEM': 'SCE_SEM', 'DATE_': 'DATE_', 'ORIGINE': 'ORIGINE', 'NOM': 'NOM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Dpartements_1.set('fieldImages', {'OBJECTID': 'Range', 'SCE_GEO': 'TextEdit', 'SCE_SEM': 'TextEdit', 'DATE_': 'DateTime', 'ORIGINE': 'TextEdit', 'NOM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_villagesduNDE_2.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'ANNOTXT': 'TextEdit', 'Type': 'TextEdit', 'OBJECTID_2': 'Range', 'SCE_GEO': 'TextEdit', 'SCE_SEM': 'TextEdit', 'DATE_': 'DateTime', 'ORIGINE': 'TextEdit', 'NOM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Dpartements_1.set('fieldLabels', {'OBJECTID': 'no label', 'SCE_GEO': 'no label', 'SCE_SEM': 'no label', 'DATE_': 'no label', 'ORIGINE': 'no label', 'NOM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_villagesduNDE_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'ANNOTXT': 'no label', 'Type': 'no label', 'OBJECTID_2': 'no label', 'SCE_GEO': 'no label', 'SCE_SEM': 'no label', 'DATE_': 'no label', 'ORIGINE': 'no label', 'NOM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_villagesduNDE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});