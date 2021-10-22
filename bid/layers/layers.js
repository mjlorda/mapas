var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Caminodel72_3 = new ol.format.GeoJSON();
var features_Caminodel72_3 = format_Caminodel72_3.readFeatures(json_Caminodel72_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caminodel72_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caminodel72_3.addFeatures(features_Caminodel72_3);
var lyr_Caminodel72_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Caminodel72_3, 
                style: style_Caminodel72_3,
                interactive: true,
                title: '<img src="styles/legend/Caminodel72_3.png" /> Camino del 72'
            });
var format_CaminoRuralRP50CadretOrdoquiBuenosAires_4 = new ol.format.GeoJSON();
var features_CaminoRuralRP50CadretOrdoquiBuenosAires_4 = format_CaminoRuralRP50CadretOrdoquiBuenosAires_4.readFeatures(json_CaminoRuralRP50CadretOrdoquiBuenosAires_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaminoRuralRP50CadretOrdoquiBuenosAires_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminoRuralRP50CadretOrdoquiBuenosAires_4.addFeatures(features_CaminoRuralRP50CadretOrdoquiBuenosAires_4);
var lyr_CaminoRuralRP50CadretOrdoquiBuenosAires_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CaminoRuralRP50CadretOrdoquiBuenosAires_4, 
                style: style_CaminoRuralRP50CadretOrdoquiBuenosAires_4,
                interactive: true,
                title: '<img src="styles/legend/CaminoRuralRP50CadretOrdoquiBuenosAires_4.png" /> Camino Rural RP50 Cadret - Ordoqui Buenos Aires'
            });
var format_Camino083PilaChascomus_5 = new ol.format.GeoJSON();
var features_Camino083PilaChascomus_5 = format_Camino083PilaChascomus_5.readFeatures(json_Camino083PilaChascomus_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino083PilaChascomus_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino083PilaChascomus_5.addFeatures(features_Camino083PilaChascomus_5);
var lyr_Camino083PilaChascomus_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Camino083PilaChascomus_5, 
                style: style_Camino083PilaChascomus_5,
                interactive: true,
                title: '<img src="styles/legend/Camino083PilaChascomus_5.png" /> Camino083 Pila Chascomus'
            });
var format_CaminoDelPotro_6 = new ol.format.GeoJSON();
var features_CaminoDelPotro_6 = format_CaminoDelPotro_6.readFeatures(json_CaminoDelPotro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaminoDelPotro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminoDelPotro_6.addFeatures(features_CaminoDelPotro_6);
var lyr_CaminoDelPotro_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CaminoDelPotro_6, 
                style: style_CaminoDelPotro_6,
                interactive: true,
                title: '<img src="styles/legend/CaminoDelPotro_6.png" /> CaminoDelPotro'
            });
var format_CRBragado_7 = new ol.format.GeoJSON();
var features_CRBragado_7 = format_CRBragado_7.readFeatures(json_CRBragado_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRBragado_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRBragado_7.addFeatures(features_CRBragado_7);
var lyr_CRBragado_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRBragado_7, 
                style: style_CRBragado_7,
                interactive: true,
                title: '<img src="styles/legend/CRBragado_7.png" /> CR-Bragado'
            });
var format_CRDaireaux_8 = new ol.format.GeoJSON();
var features_CRDaireaux_8 = format_CRDaireaux_8.readFeatures(json_CRDaireaux_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRDaireaux_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRDaireaux_8.addFeatures(features_CRDaireaux_8);
var lyr_CRDaireaux_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRDaireaux_8, 
                style: style_CRDaireaux_8,
                interactive: true,
                title: '<img src="styles/legend/CRDaireaux_8.png" /> CR-Daireaux'
            });
var format_CRGeneralGuido_9 = new ol.format.GeoJSON();
var features_CRGeneralGuido_9 = format_CRGeneralGuido_9.readFeatures(json_CRGeneralGuido_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRGeneralGuido_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRGeneralGuido_9.addFeatures(features_CRGeneralGuido_9);
var lyr_CRGeneralGuido_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRGeneralGuido_9, 
                style: style_CRGeneralGuido_9,
                interactive: true,
                title: '<img src="styles/legend/CRGeneralGuido_9.png" /> CR-GeneralGuido'
            });
var format_CRGonzalesChaves_10 = new ol.format.GeoJSON();
var features_CRGonzalesChaves_10 = format_CRGonzalesChaves_10.readFeatures(json_CRGonzalesChaves_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRGonzalesChaves_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRGonzalesChaves_10.addFeatures(features_CRGonzalesChaves_10);
var lyr_CRGonzalesChaves_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRGonzalesChaves_10, 
                style: style_CRGonzalesChaves_10,
                interactive: true,
                title: '<img src="styles/legend/CRGonzalesChaves_10.png" /> CR-GonzalesChaves'
            });
var format_CRGuamini_11 = new ol.format.GeoJSON();
var features_CRGuamini_11 = format_CRGuamini_11.readFeatures(json_CRGuamini_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRGuamini_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRGuamini_11.addFeatures(features_CRGuamini_11);
var lyr_CRGuamini_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRGuamini_11, 
                style: style_CRGuamini_11,
                interactive: true,
                title: '<img src="styles/legend/CRGuamini_11.png" /> CR-Guamini'
            });
var format_CRMarChiquita_12 = new ol.format.GeoJSON();
var features_CRMarChiquita_12 = format_CRMarChiquita_12.readFeatures(json_CRMarChiquita_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRMarChiquita_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRMarChiquita_12.addFeatures(features_CRMarChiquita_12);
var lyr_CRMarChiquita_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRMarChiquita_12, 
                style: style_CRMarChiquita_12,
                interactive: true,
                title: '<img src="styles/legend/CRMarChiquita_12.png" /> CR-MarChiquita'
            });
var format_CRMonteHermosoOeste_13 = new ol.format.GeoJSON();
var features_CRMonteHermosoOeste_13 = format_CRMonteHermosoOeste_13.readFeatures(json_CRMonteHermosoOeste_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRMonteHermosoOeste_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRMonteHermosoOeste_13.addFeatures(features_CRMonteHermosoOeste_13);
var lyr_CRMonteHermosoOeste_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRMonteHermosoOeste_13, 
                style: style_CRMonteHermosoOeste_13,
                interactive: true,
                title: '<img src="styles/legend/CRMonteHermosoOeste_13.png" /> CR-MonteHermoso-Oeste'
            });
var format_CRMonteHermosoSinuosoEste_14 = new ol.format.GeoJSON();
var features_CRMonteHermosoSinuosoEste_14 = format_CRMonteHermosoSinuosoEste_14.readFeatures(json_CRMonteHermosoSinuosoEste_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRMonteHermosoSinuosoEste_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRMonteHermosoSinuosoEste_14.addFeatures(features_CRMonteHermosoSinuosoEste_14);
var lyr_CRMonteHermosoSinuosoEste_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRMonteHermosoSinuosoEste_14, 
                style: style_CRMonteHermosoSinuosoEste_14,
                interactive: true,
                title: '<img src="styles/legend/CRMonteHermosoSinuosoEste_14.png" /> CR-MonteHermoso-SinuosoEste'
            });
var format_CRMonterHermosoNorte_15 = new ol.format.GeoJSON();
var features_CRMonterHermosoNorte_15 = format_CRMonterHermosoNorte_15.readFeatures(json_CRMonterHermosoNorte_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRMonterHermosoNorte_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRMonterHermosoNorte_15.addFeatures(features_CRMonterHermosoNorte_15);
var lyr_CRMonterHermosoNorte_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRMonterHermosoNorte_15, 
                style: style_CRMonterHermosoNorte_15,
                interactive: true,
                title: '<img src="styles/legend/CRMonterHermosoNorte_15.png" /> CR-MonterHermoso-Norte'
            });
var format_CRPilaPlantaRecicladoRP41_16 = new ol.format.GeoJSON();
var features_CRPilaPlantaRecicladoRP41_16 = format_CRPilaPlantaRecicladoRP41_16.readFeatures(json_CRPilaPlantaRecicladoRP41_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRPilaPlantaRecicladoRP41_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRPilaPlantaRecicladoRP41_16.addFeatures(features_CRPilaPlantaRecicladoRP41_16);
var lyr_CRPilaPlantaRecicladoRP41_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRPilaPlantaRecicladoRP41_16, 
                style: style_CRPilaPlantaRecicladoRP41_16,
                interactive: true,
                title: '<img src="styles/legend/CRPilaPlantaRecicladoRP41_16.png" /> CR-Pila-PlantaReciclado-RP41'
            });
var format_CRRanchos_17 = new ol.format.GeoJSON();
var features_CRRanchos_17 = format_CRRanchos_17.readFeatures(json_CRRanchos_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRRanchos_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRRanchos_17.addFeatures(features_CRRanchos_17);
var lyr_CRRanchos_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRRanchos_17, 
                style: style_CRRanchos_17,
                interactive: true,
                title: '<img src="styles/legend/CRRanchos_17.png" /> CR-Ranchos'
            });
var format_CRTordillo_18 = new ol.format.GeoJSON();
var features_CRTordillo_18 = format_CRTordillo_18.readFeatures(json_CRTordillo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRTordillo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRTordillo_18.addFeatures(features_CRTordillo_18);
var lyr_CRTordillo_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRTordillo_18, 
                style: style_CRTordillo_18,
                interactive: true,
                title: '<img src="styles/legend/CRTordillo_18.png" /> CR-Tordillo'
            });
var format_CRRP6CEPT33_19 = new ol.format.GeoJSON();
var features_CRRP6CEPT33_19 = format_CRRP6CEPT33_19.readFeatures(json_CRRP6CEPT33_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRRP6CEPT33_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRRP6CEPT33_19.addFeatures(features_CRRP6CEPT33_19);
var lyr_CRRP6CEPT33_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRRP6CEPT33_19, 
                style: style_CRRP6CEPT33_19,
                interactive: true,
                title: '<img src="styles/legend/CRRP6CEPT33_19.png" /> CR-RP6-CEPT33'
            });
var format_Malla104RN143LaPampa_20 = new ol.format.GeoJSON();
var features_Malla104RN143LaPampa_20 = format_Malla104RN143LaPampa_20.readFeatures(json_Malla104RN143LaPampa_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malla104RN143LaPampa_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malla104RN143LaPampa_20.addFeatures(features_Malla104RN143LaPampa_20);
var lyr_Malla104RN143LaPampa_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Malla104RN143LaPampa_20, 
                style: style_Malla104RN143LaPampa_20,
                interactive: true,
                title: '<img src="styles/legend/Malla104RN143LaPampa_20.png" /> Malla 104 RN 143 La Pampa'
            });
var format_Malla104RN152LaPampa_21 = new ol.format.GeoJSON();
var features_Malla104RN152LaPampa_21 = format_Malla104RN152LaPampa_21.readFeatures(json_Malla104RN152LaPampa_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malla104RN152LaPampa_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malla104RN152LaPampa_21.addFeatures(features_Malla104RN152LaPampa_21);
var lyr_Malla104RN152LaPampa_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Malla104RN152LaPampa_21, 
                style: style_Malla104RN152LaPampa_21,
                interactive: true,
                title: '<img src="styles/legend/Malla104RN152LaPampa_21.png" /> Malla 104 RN 152 La Pampa'
            });
var format_Malla513CRN12_22 = new ol.format.GeoJSON();
var features_Malla513CRN12_22 = format_Malla513CRN12_22.readFeatures(json_Malla513CRN12_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malla513CRN12_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malla513CRN12_22.addFeatures(features_Malla513CRN12_22);
var lyr_Malla513CRN12_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Malla513CRN12_22, 
                style: style_Malla513CRN12_22,
                interactive: true,
                title: '<img src="styles/legend/Malla513CRN12_22.png" /> Malla513C-RN12'
            });
var format_Malla131RN237_23 = new ol.format.GeoJSON();
var features_Malla131RN237_23 = format_Malla131RN237_23.readFeatures(json_Malla131RN237_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malla131RN237_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malla131RN237_23.addFeatures(features_Malla131RN237_23);
var lyr_Malla131RN237_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Malla131RN237_23, 
                style: style_Malla131RN237_23,
                interactive: true,
                title: '<img src="styles/legend/Malla131RN237_23.png" /> Malla 131 RN 237'
            });
var format_Malla131RN234_24 = new ol.format.GeoJSON();
var features_Malla131RN234_24 = format_Malla131RN234_24.readFeatures(json_Malla131RN234_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malla131RN234_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malla131RN234_24.addFeatures(features_Malla131RN234_24);
var lyr_Malla131RN234_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Malla131RN234_24, 
                style: style_Malla131RN234_24,
                interactive: true,
                title: '<img src="styles/legend/Malla131RN234_24.png" /> Malla 131 RN 234'
            });
var format_SanJuanRP12deCerroBlancoaDiqueCaracoles_25 = new ol.format.GeoJSON();
var features_SanJuanRP12deCerroBlancoaDiqueCaracoles_25 = format_SanJuanRP12deCerroBlancoaDiqueCaracoles_25.readFeatures(json_SanJuanRP12deCerroBlancoaDiqueCaracoles_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanJuanRP12deCerroBlancoaDiqueCaracoles_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanJuanRP12deCerroBlancoaDiqueCaracoles_25.addFeatures(features_SanJuanRP12deCerroBlancoaDiqueCaracoles_25);
var lyr_SanJuanRP12deCerroBlancoaDiqueCaracoles_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SanJuanRP12deCerroBlancoaDiqueCaracoles_25, 
                style: style_SanJuanRP12deCerroBlancoaDiqueCaracoles_25,
                interactive: true,
                title: '<img src="styles/legend/SanJuanRP12deCerroBlancoaDiqueCaracoles_25.png" /> San Juan RP12 de Cerro Blanco a Dique Caracoles'
            });
var format_MendozaRP16deRP86aRP61_26 = new ol.format.GeoJSON();
var features_MendozaRP16deRP86aRP61_26 = format_MendozaRP16deRP86aRP61_26.readFeatures(json_MendozaRP16deRP86aRP61_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MendozaRP16deRP86aRP61_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MendozaRP16deRP86aRP61_26.addFeatures(features_MendozaRP16deRP86aRP61_26);
var lyr_MendozaRP16deRP86aRP61_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MendozaRP16deRP86aRP61_26, 
                style: style_MendozaRP16deRP86aRP61_26,
                interactive: true,
                title: '<img src="styles/legend/MendozaRP16deRP86aRP61_26.png" /> Mendoza RP16 de RP86 a RP61'
            });
var format_MendozaRP41HastaRP34_27 = new ol.format.GeoJSON();
var features_MendozaRP41HastaRP34_27 = format_MendozaRP41HastaRP34_27.readFeatures(json_MendozaRP41HastaRP34_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MendozaRP41HastaRP34_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MendozaRP41HastaRP34_27.addFeatures(features_MendozaRP41HastaRP34_27);
var lyr_MendozaRP41HastaRP34_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MendozaRP41HastaRP34_27, 
                style: style_MendozaRP41HastaRP34_27,
                interactive: true,
                title: '<img src="styles/legend/MendozaRP41HastaRP34_27.png" /> Mendoza-RP41-HastaRP34'
            });
var format_MendozaRP61RP16RP62_28 = new ol.format.GeoJSON();
var features_MendozaRP61RP16RP62_28 = format_MendozaRP61RP16RP62_28.readFeatures(json_MendozaRP61RP16RP62_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MendozaRP61RP16RP62_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MendozaRP61RP16RP62_28.addFeatures(features_MendozaRP61RP16RP62_28);
var lyr_MendozaRP61RP16RP62_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MendozaRP61RP16RP62_28, 
                style: style_MendozaRP61RP16RP62_28,
                interactive: true,
                title: '<img src="styles/legend/MendozaRP61RP16RP62_28.png" /> Mendoza-RP61-RP16-RP62'
            });
var format_MendozaRP61RP62RP60_29 = new ol.format.GeoJSON();
var features_MendozaRP61RP62RP60_29 = format_MendozaRP61RP62RP60_29.readFeatures(json_MendozaRP61RP62RP60_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MendozaRP61RP62RP60_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MendozaRP61RP62RP60_29.addFeatures(features_MendozaRP61RP62RP60_29);
var lyr_MendozaRP61RP62RP60_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MendozaRP61RP62RP60_29, 
                style: style_MendozaRP61RP62RP60_29,
                interactive: true,
                title: '<img src="styles/legend/MendozaRP61RP62RP60_29.png" /> Mendoza RP61-RP62-RP60'
            });
var format_MendozaRP60HastaRP61_30 = new ol.format.GeoJSON();
var features_MendozaRP60HastaRP61_30 = format_MendozaRP60HastaRP61_30.readFeatures(json_MendozaRP60HastaRP61_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MendozaRP60HastaRP61_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MendozaRP60HastaRP61_30.addFeatures(features_MendozaRP60HastaRP61_30);
var lyr_MendozaRP60HastaRP61_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MendozaRP60HastaRP61_30, 
                style: style_MendozaRP60HastaRP61_30,
                interactive: true,
                title: '<img src="styles/legend/MendozaRP60HastaRP61_30.png" /> Mendoza-RP60-HastaRP61'
            });
var format_SantaFeRN11RNA007RP39_31 = new ol.format.GeoJSON();
var features_SantaFeRN11RNA007RP39_31 = format_SantaFeRN11RNA007RP39_31.readFeatures(json_SantaFeRN11RNA007RP39_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantaFeRN11RNA007RP39_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaFeRN11RNA007RP39_31.addFeatures(features_SantaFeRN11RNA007RP39_31);
var lyr_SantaFeRN11RNA007RP39_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SantaFeRN11RNA007RP39_31, 
                style: style_SantaFeRN11RNA007RP39_31,
                interactive: true,
                title: '<img src="styles/legend/SantaFeRN11RNA007RP39_31.png" /> Santa Fe RN11-RNA007-RP39'
            });
var format_SantaFeRN11RP39RP31_32 = new ol.format.GeoJSON();
var features_SantaFeRN11RP39RP31_32 = format_SantaFeRN11RP39RP31_32.readFeatures(json_SantaFeRN11RP39RP31_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantaFeRN11RP39RP31_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaFeRN11RP39RP31_32.addFeatures(features_SantaFeRN11RP39RP31_32);
var lyr_SantaFeRN11RP39RP31_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SantaFeRN11RP39RP31_32, 
                style: style_SantaFeRN11RP39RP31_32,
                interactive: true,
                title: '<img src="styles/legend/SantaFeRN11RP39RP31_32.png" /> Santa Fe RN11-RP39-RP31'
            });
var format_SantaFeRN11TimbuesRNA007_33 = new ol.format.GeoJSON();
var features_SantaFeRN11TimbuesRNA007_33 = format_SantaFeRN11TimbuesRNA007_33.readFeatures(json_SantaFeRN11TimbuesRNA007_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantaFeRN11TimbuesRNA007_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaFeRN11TimbuesRNA007_33.addFeatures(features_SantaFeRN11TimbuesRNA007_33);
var lyr_SantaFeRN11TimbuesRNA007_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SantaFeRN11TimbuesRNA007_33, 
                style: style_SantaFeRN11TimbuesRNA007_33,
                interactive: true,
                title: '<img src="styles/legend/SantaFeRN11TimbuesRNA007_33.png" /> Santa Fe RN11-Timbues-RNA007'
            });
var format_SantaFeRN178km146700km177490_34 = new ol.format.GeoJSON();
var features_SantaFeRN178km146700km177490_34 = format_SantaFeRN178km146700km177490_34.readFeatures(json_SantaFeRN178km146700km177490_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantaFeRN178km146700km177490_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaFeRN178km146700km177490_34.addFeatures(features_SantaFeRN178km146700km177490_34);
var lyr_SantaFeRN178km146700km177490_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SantaFeRN178km146700km177490_34, 
                style: style_SantaFeRN178km146700km177490_34,
                interactive: true,
                title: '<img src="styles/legend/SantaFeRN178km146700km177490_34.png" /> Santa Fe RN178-km146700-km177490'
            });
var format_SantaFeRN1V11_35 = new ol.format.GeoJSON();
var features_SantaFeRN1V11_35 = format_SantaFeRN1V11_35.readFeatures(json_SantaFeRN1V11_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantaFeRN1V11_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaFeRN1V11_35.addFeatures(features_SantaFeRN1V11_35);
var lyr_SantaFeRN1V11_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SantaFeRN1V11_35, 
                style: style_SantaFeRN1V11_35,
                interactive: true,
                title: '<img src="styles/legend/SantaFeRN1V11_35.png" /> Santa Fe RN1V11'
            });
var format_SantaFeRNA009PuertoReconquistaRN11_36 = new ol.format.GeoJSON();
var features_SantaFeRNA009PuertoReconquistaRN11_36 = format_SantaFeRNA009PuertoReconquistaRN11_36.readFeatures(json_SantaFeRNA009PuertoReconquistaRN11_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantaFeRNA009PuertoReconquistaRN11_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaFeRNA009PuertoReconquistaRN11_36.addFeatures(features_SantaFeRNA009PuertoReconquistaRN11_36);
var lyr_SantaFeRNA009PuertoReconquistaRN11_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SantaFeRNA009PuertoReconquistaRN11_36, 
                style: style_SantaFeRNA009PuertoReconquistaRN11_36,
                interactive: true,
                title: '<img src="styles/legend/SantaFeRNA009PuertoReconquistaRN11_36.png" /> Santa Fe RNA009-PuertoReconquista-RN11'
            });
var format_SantaFeChacoRN11ReconquistaResistencia_37 = new ol.format.GeoJSON();
var features_SantaFeChacoRN11ReconquistaResistencia_37 = format_SantaFeChacoRN11ReconquistaResistencia_37.readFeatures(json_SantaFeChacoRN11ReconquistaResistencia_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantaFeChacoRN11ReconquistaResistencia_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaFeChacoRN11ReconquistaResistencia_37.addFeatures(features_SantaFeChacoRN11ReconquistaResistencia_37);
var lyr_SantaFeChacoRN11ReconquistaResistencia_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SantaFeChacoRN11ReconquistaResistencia_37, 
                style: style_SantaFeChacoRN11ReconquistaResistencia_37,
                interactive: true,
                title: '<img src="styles/legend/SantaFeChacoRN11ReconquistaResistencia_37.png" /> Santa Fe-Chaco RN11-Reconquista-Resistencia'
            });
var format_EntreRiosRN131RP11RN12_38 = new ol.format.GeoJSON();
var features_EntreRiosRN131RP11RN12_38 = format_EntreRiosRN131RP11RN12_38.readFeatures(json_EntreRiosRN131RP11RN12_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EntreRiosRN131RP11RN12_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EntreRiosRN131RP11RN12_38.addFeatures(features_EntreRiosRN131RP11RN12_38);
var lyr_EntreRiosRN131RP11RN12_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EntreRiosRN131RP11RN12_38, 
                style: style_EntreRiosRN131RP11RN12_38,
                interactive: true,
                title: '<img src="styles/legend/EntreRiosRN131RP11RN12_38.png" /> Entre Rios RN131-RP11-RN12'
            });
var format_EntreRiosRP16deLarroqueaRN14_39 = new ol.format.GeoJSON();
var features_EntreRiosRP16deLarroqueaRN14_39 = format_EntreRiosRP16deLarroqueaRN14_39.readFeatures(json_EntreRiosRP16deLarroqueaRN14_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EntreRiosRP16deLarroqueaRN14_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EntreRiosRP16deLarroqueaRN14_39.addFeatures(features_EntreRiosRP16deLarroqueaRN14_39);
var lyr_EntreRiosRP16deLarroqueaRN14_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EntreRiosRP16deLarroqueaRN14_39, 
                style: style_EntreRiosRP16deLarroqueaRN14_39,
                interactive: true,
                title: '<img src="styles/legend/EntreRiosRP16deLarroqueaRN14_39.png" /> Entre Rios RP16 de Larroque a RN14'
            });
var format_EntreRiosRP16deRN12aLarroque_40 = new ol.format.GeoJSON();
var features_EntreRiosRP16deRN12aLarroque_40 = format_EntreRiosRP16deRN12aLarroque_40.readFeatures(json_EntreRiosRP16deRN12aLarroque_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EntreRiosRP16deRN12aLarroque_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EntreRiosRP16deRN12aLarroque_40.addFeatures(features_EntreRiosRP16deRN12aLarroque_40);
var lyr_EntreRiosRP16deRN12aLarroque_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EntreRiosRP16deRN12aLarroque_40, 
                style: style_EntreRiosRP16deRN12aLarroque_40,
                interactive: true,
                title: '<img src="styles/legend/EntreRiosRP16deRN12aLarroque_40.png" /> Entre Rios RP16 de RN12 a Larroque'
            });
var format_EntreRiosRP23deRN130aArroyoBaru_41 = new ol.format.GeoJSON();
var features_EntreRiosRP23deRN130aArroyoBaru_41 = format_EntreRiosRP23deRN130aArroyoBaru_41.readFeatures(json_EntreRiosRP23deRN130aArroyoBaru_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EntreRiosRP23deRN130aArroyoBaru_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EntreRiosRP23deRN130aArroyoBaru_41.addFeatures(features_EntreRiosRP23deRN130aArroyoBaru_41);
var lyr_EntreRiosRP23deRN130aArroyoBaru_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EntreRiosRP23deRN130aArroyoBaru_41, 
                style: style_EntreRiosRP23deRN130aArroyoBaru_41,
                interactive: true,
                title: '<img src="styles/legend/EntreRiosRP23deRN130aArroyoBaru_41.png" /> Entre Rios RP23 de RN130 a Arroyo Baru'
            });
var format_RP26OBRA_42 = new ol.format.GeoJSON();
var features_RP26OBRA_42 = format_RP26OBRA_42.readFeatures(json_RP26OBRA_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RP26OBRA_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RP26OBRA_42.addFeatures(features_RP26OBRA_42);
var lyr_RP26OBRA_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RP26OBRA_42, 
                style: style_RP26OBRA_42,
                interactive: true,
                title: '<img src="styles/legend/RP26OBRA_42.png" /> RP26-OBRA'
            });
var group_Vial1 = new ol.layer.Group({
                                layers: [lyr_EntreRiosRP16deRN12aLarroque_40,lyr_EntreRiosRP23deRN130aArroyoBaru_41,lyr_RP26OBRA_42,],
                                title: "Vial 1"});
var group_Vial2 = new ol.layer.Group({
                                layers: [lyr_SanJuanRP12deCerroBlancoaDiqueCaracoles_25,lyr_MendozaRP16deRP86aRP61_26,lyr_MendozaRP41HastaRP34_27,lyr_MendozaRP61RP16RP62_28,lyr_MendozaRP61RP62RP60_29,lyr_MendozaRP60HastaRP61_30,lyr_SantaFeRN11RNA007RP39_31,lyr_SantaFeRN11RP39RP31_32,lyr_SantaFeRN11TimbuesRNA007_33,lyr_SantaFeRN178km146700km177490_34,lyr_SantaFeRN1V11_35,lyr_SantaFeRNA009PuertoReconquistaRN11_36,lyr_SantaFeChacoRN11ReconquistaResistencia_37,lyr_EntreRiosRN131RP11RN12_38,lyr_EntreRiosRP16deLarroqueaRN14_39,],
                                title: "Vial 2"});
var group_Vial3CREMAs = new ol.layer.Group({
                                layers: [lyr_Malla104RN143LaPampa_20,lyr_Malla104RN152LaPampa_21,lyr_Malla513CRN12_22,lyr_Malla131RN237_23,lyr_Malla131RN234_24,],
                                title: "Vial 3 - CREMAs"});
var group_Vial3CaminosRurales = new ol.layer.Group({
                                layers: [lyr_Caminodel72_3,lyr_CaminoRuralRP50CadretOrdoquiBuenosAires_4,lyr_Camino083PilaChascomus_5,lyr_CaminoDelPotro_6,lyr_CRBragado_7,lyr_CRDaireaux_8,lyr_CRGeneralGuido_9,lyr_CRGonzalesChaves_10,lyr_CRGuamini_11,lyr_CRMarChiquita_12,lyr_CRMonteHermosoOeste_13,lyr_CRMonteHermosoSinuosoEste_14,lyr_CRMonterHermosoNorte_15,lyr_CRPilaPlantaRecicladoRP41_16,lyr_CRRanchos_17,lyr_CRTordillo_18,lyr_CRRP6CEPT33_19,],
                                title: "Vial 3 - Caminos Rurales"});
var group_Base = new ol.layer.Group({
                                layers: [lyr_GoogleHybrid_0,lyr_GoogleRoad_1,lyr_OSMStandard_2,],
                                title: "Base"});

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_Caminodel72_3.setVisible(true);lyr_CaminoRuralRP50CadretOrdoquiBuenosAires_4.setVisible(true);lyr_Camino083PilaChascomus_5.setVisible(true);lyr_CaminoDelPotro_6.setVisible(true);lyr_CRBragado_7.setVisible(true);lyr_CRDaireaux_8.setVisible(true);lyr_CRGeneralGuido_9.setVisible(true);lyr_CRGonzalesChaves_10.setVisible(true);lyr_CRGuamini_11.setVisible(true);lyr_CRMarChiquita_12.setVisible(true);lyr_CRMonteHermosoOeste_13.setVisible(true);lyr_CRMonteHermosoSinuosoEste_14.setVisible(true);lyr_CRMonterHermosoNorte_15.setVisible(true);lyr_CRPilaPlantaRecicladoRP41_16.setVisible(true);lyr_CRRanchos_17.setVisible(true);lyr_CRTordillo_18.setVisible(true);lyr_CRRP6CEPT33_19.setVisible(true);lyr_Malla104RN143LaPampa_20.setVisible(true);lyr_Malla104RN152LaPampa_21.setVisible(true);lyr_Malla513CRN12_22.setVisible(true);lyr_Malla131RN237_23.setVisible(true);lyr_Malla131RN234_24.setVisible(true);lyr_SanJuanRP12deCerroBlancoaDiqueCaracoles_25.setVisible(true);lyr_MendozaRP16deRP86aRP61_26.setVisible(true);lyr_MendozaRP41HastaRP34_27.setVisible(true);lyr_MendozaRP61RP16RP62_28.setVisible(true);lyr_MendozaRP61RP62RP60_29.setVisible(true);lyr_MendozaRP60HastaRP61_30.setVisible(true);lyr_SantaFeRN11RNA007RP39_31.setVisible(true);lyr_SantaFeRN11RP39RP31_32.setVisible(true);lyr_SantaFeRN11TimbuesRNA007_33.setVisible(true);lyr_SantaFeRN178km146700km177490_34.setVisible(true);lyr_SantaFeRN1V11_35.setVisible(true);lyr_SantaFeRNA009PuertoReconquistaRN11_36.setVisible(true);lyr_SantaFeChacoRN11ReconquistaResistencia_37.setVisible(true);lyr_EntreRiosRN131RP11RN12_38.setVisible(true);lyr_EntreRiosRP16deLarroqueaRN14_39.setVisible(true);lyr_EntreRiosRP16deRN12aLarroque_40.setVisible(true);lyr_EntreRiosRP23deRN130aArroyoBaru_41.setVisible(true);lyr_RP26OBRA_42.setVisible(true);
var layersList = [group_Base,group_Vial3CaminosRurales,group_Vial3CREMAs,group_Vial2,group_Vial1];
lyr_Caminodel72_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'lungitud': 'lungitud', });
lyr_CaminoRuralRP50CadretOrdoquiBuenosAires_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Camino083PilaChascomus_5.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna1': 'fna1', 'gna1': 'gna1', 'nam1': 'nam1', 'fna2': 'fna2', 'gna2': 'gna2', 'nam2': 'nam2', 'fun': 'fun', 'rst': 'rst', 'typ': 'typ', 'mes': 'mes', 'hct': 'hct', 'loc': 'loc', 'fdc': 'fdc', 'nr': 'nr', 'sag': 'sag', 'longitud': 'longitud', });
lyr_CaminoDelPotro_6.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_CRBragado_7.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', 'Longitud': 'Longitud', });
lyr_CRDaireaux_8.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', 'Longitud': 'Longitud', });
lyr_CRGeneralGuido_9.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', 'longitud': 'longitud', });
lyr_CRGonzalesChaves_10.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', 'Longitud': 'Longitud', });
lyr_CRGuamini_11.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', 'Longitud': 'Longitud', });
lyr_CRMarChiquita_12.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'longitud': 'longitud', });
lyr_CRMonteHermosoOeste_13.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', 'Longitud': 'Longitud', });
lyr_CRMonteHermosoSinuosoEste_14.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', 'Longitud': 'Longitud', });
lyr_CRMonterHermosoNorte_15.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', 'Longitud': 'Longitud', });
lyr_CRPilaPlantaRecicladoRP41_16.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_CRRanchos_17.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', 'Longitud': 'Longitud', });
lyr_CRTordillo_18.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', 'Longitud': 'Longitud', });
lyr_CRRP6CEPT33_19.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Malla104RN143LaPampa_20.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'NroRuta': 'NroRuta', 'longitud': 'longitud', });
lyr_Malla104RN152LaPampa_21.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'NroRuta': 'NroRuta', 'longitud': 'longitud', });
lyr_Malla513CRN12_22.set('fieldAliases', {'id_ruta': 'id_ruta', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'RTN': 'RTN', 'Sentido': 'Sentido', 'FUN': 'FUN', 'HCT': 'HCT', 'SAG': 'SAG', 'Tipo_Calza': 'Tipo_Calza', 'Progresiva': 'Progresiva', 'Ruta': 'Ruta', 'longitud': 'longitud', });
lyr_Malla131RN237_23.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'NroRuta': 'NroRuta', });
lyr_Malla131RN234_24.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'NroRuta': 'NroRuta', });
lyr_SanJuanRP12deCerroBlancoaDiqueCaracoles_25.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_MendozaRP16deRP86aRP61_26.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_MendozaRP41HastaRP34_27.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_MendozaRP61RP16RP62_28.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna1': 'fna1', 'gna1': 'gna1', 'nam1': 'nam1', 'fna2': 'fna2', 'gna2': 'gna2', 'nam2': 'nam2', 'fun': 'fun', 'rst': 'rst', 'typ': 'typ', 'mes': 'mes', 'hct': 'hct', 'loc': 'loc', 'fdc': 'fdc', 'nr': 'nr', 'sag': 'sag', 'longitud': 'longitud', });
lyr_MendozaRP61RP62RP60_29.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna1': 'fna1', 'gna1': 'gna1', 'nam1': 'nam1', 'fna2': 'fna2', 'gna2': 'gna2', 'nam2': 'nam2', 'fun': 'fun', 'rst': 'rst', 'typ': 'typ', 'mes': 'mes', 'hct': 'hct', 'loc': 'loc', 'fdc': 'fdc', 'nr': 'nr', 'sag': 'sag', 'longitud': 'longitud', });
lyr_MendozaRP60HastaRP61_30.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_SantaFeRN11RNA007RP39_31.set('fieldAliases', {'id_ruta': 'id_ruta', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'RTN': 'RTN', 'Sentido': 'Sentido', 'FUN': 'FUN', 'HCT': 'HCT', 'SAG': 'SAG', 'Tipo_Calza': 'Tipo_Calza', 'Progresiva': 'Progresiva', 'Ruta': 'Ruta', 'longitud': 'longitud', });
lyr_SantaFeRN11RP39RP31_32.set('fieldAliases', {'id_ruta': 'id_ruta', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'RTN': 'RTN', 'Sentido': 'Sentido', 'FUN': 'FUN', 'HCT': 'HCT', 'SAG': 'SAG', 'Tipo_Calza': 'Tipo_Calza', 'Progresiva': 'Progresiva', 'Ruta': 'Ruta', 'longitud': 'longitud', });
lyr_SantaFeRN11TimbuesRNA007_33.set('fieldAliases', {'id_ruta': 'id_ruta', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'RTN': 'RTN', 'Sentido': 'Sentido', 'FUN': 'FUN', 'HCT': 'HCT', 'SAG': 'SAG', 'Tipo_Calza': 'Tipo_Calza', 'Progresiva': 'Progresiva', 'Ruta': 'Ruta', 'longitud': 'longitud', });
lyr_SantaFeRN178km146700km177490_34.set('fieldAliases', {'id_ruta': 'id_ruta', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'RTN': 'RTN', 'Sentido': 'Sentido', 'FUN': 'FUN', 'HCT': 'HCT', 'SAG': 'SAG', 'Tipo_Calza': 'Tipo_Calza', 'Progresiva': 'Progresiva', 'Ruta': 'Ruta', 'longitud': 'longitud', });
lyr_SantaFeRN1V11_35.set('fieldAliases', {'id_ruta': 'id_ruta', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'RTN': 'RTN', 'Sentido': 'Sentido', 'FUN': 'FUN', 'HCT': 'HCT', 'SAG': 'SAG', 'Tipo_Calza': 'Tipo_Calza', 'Progresiva': 'Progresiva', 'Ruta': 'Ruta', 'lungitud': 'lungitud', });
lyr_SantaFeRNA009PuertoReconquistaRN11_36.set('fieldAliases', {'id_ruta': 'id_ruta', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'RTN': 'RTN', 'Sentido': 'Sentido', 'FUN': 'FUN', 'HCT': 'HCT', 'SAG': 'SAG', 'Tipo_Calza': 'Tipo_Calza', 'Progresiva': 'Progresiva', 'Ruta': 'Ruta', 'longitud': 'longitud', });
lyr_SantaFeChacoRN11ReconquistaResistencia_37.set('fieldAliases', {'id_ruta': 'id_ruta', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'RTN': 'RTN', 'Sentido': 'Sentido', 'FUN': 'FUN', 'HCT': 'HCT', 'SAG': 'SAG', 'Tipo_Calza': 'Tipo_Calza', 'Progresiva': 'Progresiva', 'Ruta': 'Ruta', 'longitud': 'longitud', });
lyr_EntreRiosRN131RP11RN12_38.set('fieldAliases', {'id_ruta': 'id_ruta', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'RTN': 'RTN', 'Sentido': 'Sentido', 'FUN': 'FUN', 'HCT': 'HCT', 'SAG': 'SAG', 'Tipo_Calza': 'Tipo_Calza', 'Progresiva': 'Progresiva', 'Ruta': 'Ruta', 'longitud': 'longitud', });
lyr_EntreRiosRP16deLarroqueaRN14_39.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna1': 'fna1', 'gna1': 'gna1', 'nam1': 'nam1', 'fna2': 'fna2', 'gna2': 'gna2', 'nam2': 'nam2', 'fun': 'fun', 'rst': 'rst', 'typ': 'typ', 'mes': 'mes', 'hct': 'hct', 'loc': 'loc', 'fdc': 'fdc', 'nr': 'nr', 'sag': 'sag', });
lyr_EntreRiosRP16deRN12aLarroque_40.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna1': 'fna1', 'gna1': 'gna1', 'nam1': 'nam1', 'fna2': 'fna2', 'gna2': 'gna2', 'nam2': 'nam2', 'fun': 'fun', 'rst': 'rst', 'typ': 'typ', 'mes': 'mes', 'hct': 'hct', 'loc': 'loc', 'fdc': 'fdc', 'nr': 'nr', 'sag': 'sag', });
lyr_EntreRiosRP23deRN130aArroyoBaru_41.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_RP26OBRA_42.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna1': 'fna1', 'gna1': 'gna1', 'nam1': 'nam1', 'fna2': 'fna2', 'gna2': 'gna2', 'nam2': 'nam2', 'fun': 'fun', 'rst': 'rst', 'typ': 'typ', 'mes': 'mes', 'hct': 'hct', 'loc': 'loc', 'fdc': 'fdc', 'nr': 'nr', 'sag': 'sag', 'longitud': 'longitud', });
lyr_Caminodel72_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'lungitud': '', });
lyr_CaminoRuralRP50CadretOrdoquiBuenosAires_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Camino083PilaChascomus_5.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna1': '', 'gna1': '', 'nam1': '', 'fna2': '', 'gna2': '', 'nam2': '', 'fun': '', 'rst': '', 'typ': '', 'mes': '', 'hct': '', 'loc': '', 'fdc': '', 'nr': '', 'sag': '', 'longitud': '', });
lyr_CaminoDelPotro_6.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'z_order': '', 'other_tags': '', });
lyr_CRBragado_7.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'z_order': '', 'other_tags': '', 'Longitud': '', });
lyr_CRDaireaux_8.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'z_order': '', 'other_tags': '', 'Longitud': '', });
lyr_CRGeneralGuido_9.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'z_order': '', 'other_tags': '', 'longitud': '', });
lyr_CRGonzalesChaves_10.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'z_order': '', 'other_tags': '', 'Longitud': '', });
lyr_CRGuamini_11.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'z_order': '', 'other_tags': '', 'Longitud': '', });
lyr_CRMarChiquita_12.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', 'longitud': '', });
lyr_CRMonteHermosoOeste_13.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'z_order': '', 'other_tags': '', 'Longitud': '', });
lyr_CRMonteHermosoSinuosoEste_14.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'z_order': '', 'other_tags': '', 'Longitud': '', });
lyr_CRMonterHermosoNorte_15.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'z_order': '', 'other_tags': '', 'Longitud': '', });
lyr_CRPilaPlantaRecicladoRP41_16.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_CRRanchos_17.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'z_order': '', 'other_tags': '', 'Longitud': '', });
lyr_CRTordillo_18.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'z_order': '', 'other_tags': '', 'Longitud': '', });
lyr_CRRP6CEPT33_19.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_Malla104RN143LaPampa_20.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'NroRuta': '', 'longitud': '', });
lyr_Malla104RN152LaPampa_21.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'NroRuta': '', 'longitud': '', });
lyr_Malla513CRN12_22.set('fieldImages', {'id_ruta': '', 'FNA': '', 'GNA': '', 'NAM': '', 'RTN': '', 'Sentido': '', 'FUN': '', 'HCT': '', 'SAG': '', 'Tipo_Calza': '', 'Progresiva': '', 'Ruta': '', 'longitud': '', });
lyr_Malla131RN237_23.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'NroRuta': '', });
lyr_Malla131RN234_24.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'NroRuta': '', });
lyr_SanJuanRP12deCerroBlancoaDiqueCaracoles_25.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_MendozaRP16deRP86aRP61_26.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_MendozaRP41HastaRP34_27.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_MendozaRP61RP16RP62_28.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna1': '', 'gna1': '', 'nam1': '', 'fna2': '', 'gna2': '', 'nam2': '', 'fun': '', 'rst': '', 'typ': '', 'mes': '', 'hct': '', 'loc': '', 'fdc': '', 'nr': '', 'sag': '', 'longitud': '', });
lyr_MendozaRP61RP62RP60_29.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna1': '', 'gna1': '', 'nam1': '', 'fna2': '', 'gna2': '', 'nam2': '', 'fun': '', 'rst': '', 'typ': '', 'mes': '', 'hct': '', 'loc': '', 'fdc': '', 'nr': '', 'sag': '', 'longitud': '', });
lyr_MendozaRP60HastaRP61_30.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_SantaFeRN11RNA007RP39_31.set('fieldImages', {'id_ruta': '', 'FNA': '', 'GNA': '', 'NAM': '', 'RTN': '', 'Sentido': '', 'FUN': '', 'HCT': '', 'SAG': '', 'Tipo_Calza': '', 'Progresiva': '', 'Ruta': '', 'longitud': '', });
lyr_SantaFeRN11RP39RP31_32.set('fieldImages', {'id_ruta': '', 'FNA': '', 'GNA': '', 'NAM': '', 'RTN': '', 'Sentido': '', 'FUN': '', 'HCT': '', 'SAG': '', 'Tipo_Calza': '', 'Progresiva': '', 'Ruta': '', 'longitud': '', });
lyr_SantaFeRN11TimbuesRNA007_33.set('fieldImages', {'id_ruta': '', 'FNA': '', 'GNA': '', 'NAM': '', 'RTN': '', 'Sentido': '', 'FUN': '', 'HCT': '', 'SAG': '', 'Tipo_Calza': '', 'Progresiva': '', 'Ruta': '', 'longitud': '', });
lyr_SantaFeRN178km146700km177490_34.set('fieldImages', {'id_ruta': '', 'FNA': '', 'GNA': '', 'NAM': '', 'RTN': '', 'Sentido': '', 'FUN': '', 'HCT': '', 'SAG': '', 'Tipo_Calza': '', 'Progresiva': '', 'Ruta': '', 'longitud': '', });
lyr_SantaFeRN1V11_35.set('fieldImages', {'id_ruta': '', 'FNA': '', 'GNA': '', 'NAM': '', 'RTN': '', 'Sentido': '', 'FUN': '', 'HCT': '', 'SAG': '', 'Tipo_Calza': '', 'Progresiva': '', 'Ruta': '', 'lungitud': '', });
lyr_SantaFeRNA009PuertoReconquistaRN11_36.set('fieldImages', {'id_ruta': '', 'FNA': '', 'GNA': '', 'NAM': '', 'RTN': '', 'Sentido': '', 'FUN': '', 'HCT': '', 'SAG': '', 'Tipo_Calza': '', 'Progresiva': '', 'Ruta': '', 'longitud': '', });
lyr_SantaFeChacoRN11ReconquistaResistencia_37.set('fieldImages', {'id_ruta': '', 'FNA': '', 'GNA': '', 'NAM': '', 'RTN': '', 'Sentido': '', 'FUN': '', 'HCT': '', 'SAG': '', 'Tipo_Calza': '', 'Progresiva': '', 'Ruta': '', 'longitud': '', });
lyr_EntreRiosRN131RP11RN12_38.set('fieldImages', {'id_ruta': '', 'FNA': '', 'GNA': '', 'NAM': '', 'RTN': '', 'Sentido': '', 'FUN': '', 'HCT': '', 'SAG': '', 'Tipo_Calza': '', 'Progresiva': '', 'Ruta': '', 'longitud': '', });
lyr_EntreRiosRP16deLarroqueaRN14_39.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna1': '', 'gna1': '', 'nam1': '', 'fna2': '', 'gna2': '', 'nam2': '', 'fun': '', 'rst': '', 'typ': '', 'mes': '', 'hct': '', 'loc': '', 'fdc': '', 'nr': '', 'sag': '', });
lyr_EntreRiosRP16deRN12aLarroque_40.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna1': '', 'gna1': '', 'nam1': '', 'fna2': '', 'gna2': '', 'nam2': '', 'fun': '', 'rst': '', 'typ': '', 'mes': '', 'hct': '', 'loc': '', 'fdc': '', 'nr': '', 'sag': '', });
lyr_EntreRiosRP23deRN130aArroyoBaru_41.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_RP26OBRA_42.set('fieldImages', {'fid': '', 'cat': '', 'gid': '', 'entidad': '', 'objeto': '', 'fna1': '', 'gna1': '', 'nam1': '', 'fna2': '', 'gna2': '', 'nam2': '', 'fun': '', 'rst': '', 'typ': '', 'mes': '', 'hct': '', 'loc': '', 'fdc': '', 'nr': '', 'sag': '', 'longitud': '', });
lyr_Caminodel72_3.set('fieldLabels', {});
lyr_CaminoRuralRP50CadretOrdoquiBuenosAires_4.set('fieldLabels', {});
lyr_Camino083PilaChascomus_5.set('fieldLabels', {});
lyr_CaminoDelPotro_6.set('fieldLabels', {});
lyr_CRBragado_7.set('fieldLabels', {});
lyr_CRDaireaux_8.set('fieldLabels', {});
lyr_CRGeneralGuido_9.set('fieldLabels', {});
lyr_CRGonzalesChaves_10.set('fieldLabels', {});
lyr_CRGuamini_11.set('fieldLabels', {});
lyr_CRMarChiquita_12.set('fieldLabels', {});
lyr_CRMonteHermosoOeste_13.set('fieldLabels', {});
lyr_CRMonteHermosoSinuosoEste_14.set('fieldLabels', {});
lyr_CRMonterHermosoNorte_15.set('fieldLabels', {});
lyr_CRPilaPlantaRecicladoRP41_16.set('fieldLabels', {});
lyr_CRRanchos_17.set('fieldLabels', {});
lyr_CRTordillo_18.set('fieldLabels', {});
lyr_CRRP6CEPT33_19.set('fieldLabels', {});
lyr_Malla104RN143LaPampa_20.set('fieldLabels', {});
lyr_Malla104RN152LaPampa_21.set('fieldLabels', {});
lyr_Malla513CRN12_22.set('fieldLabels', {});
lyr_Malla131RN237_23.set('fieldLabels', {});
lyr_Malla131RN234_24.set('fieldLabels', {});
lyr_SanJuanRP12deCerroBlancoaDiqueCaracoles_25.set('fieldLabels', {});
lyr_MendozaRP16deRP86aRP61_26.set('fieldLabels', {});
lyr_MendozaRP41HastaRP34_27.set('fieldLabels', {});
lyr_MendozaRP61RP16RP62_28.set('fieldLabels', {});
lyr_MendozaRP61RP62RP60_29.set('fieldLabels', {});
lyr_MendozaRP60HastaRP61_30.set('fieldLabels', {});
lyr_SantaFeRN11RNA007RP39_31.set('fieldLabels', {});
lyr_SantaFeRN11RP39RP31_32.set('fieldLabels', {});
lyr_SantaFeRN11TimbuesRNA007_33.set('fieldLabels', {});
lyr_SantaFeRN178km146700km177490_34.set('fieldLabels', {});
lyr_SantaFeRN1V11_35.set('fieldLabels', {});
lyr_SantaFeRNA009PuertoReconquistaRN11_36.set('fieldLabels', {});
lyr_SantaFeChacoRN11ReconquistaResistencia_37.set('fieldLabels', {});
lyr_EntreRiosRN131RP11RN12_38.set('fieldLabels', {});
lyr_EntreRiosRP16deLarroqueaRN14_39.set('fieldLabels', {});
lyr_EntreRiosRP16deRN12aLarroque_40.set('fieldLabels', {});
lyr_EntreRiosRP23deRN130aArroyoBaru_41.set('fieldLabels', {});
lyr_RP26OBRA_42.set('fieldLabels', {});
lyr_RP26OBRA_42.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});