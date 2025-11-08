export const {
  "settings": {
    "editor": {
      "themeTags": [
        "dark"
      ],
      "userData": {
        "projection": "geoMercator",
        "geodata": "worldLow"
      },
      "polygonStrokeWidth": 0.5,
      "pixelFillOpacity": 0.8,
      "pixelStroke": {
        "type": "Color",
        "value": "#232323"
      },
      "pixelStrokeWidth": 0.5,
      "pixelStrokeOpacity": 1,
      "pixelHorizontalGap": 3,
      "pixelVerticalGap": 3,
      "pixelType": "Rectangle",
      "pixelSize": 8,
      "pixelSvgPath": ""
    },
    "editor.map": {
      "minZoomLevel": 0.8,
      "projection": "geoMercator",
      "panX": "rotateX",
      "zoomControl": {
        "type": "ZoomControl",
        "settings": {
          "visible": true,
          "position": "absolute",
          "layout": {
            "type": "VerticalLayout"
          },
          "themeTags": [
            "zoomtools"
          ],
          "layer": 30,
          "forceHidden": false
        }
      },
      "background": {
        "type": "Rectangle",
        "settings": {
          "fill": {
            "type": "Color",
            "value": "#1a1a1a"
          },
          "fillOpacity": 1,
          "width": 2482,
          "height": 1395,
          "x": 0,
          "y": 0,
          "fillPattern": {
            "type": "GrainPattern",
            "settings": {
              "maxOpacity": 0.08,
              "density": 0.2,
              "colors": [
                {
                  "type": "Color",
                  "value": "#aaaaaa"
                }
              ]
            }
          },
          "isMeasured": false
        }
      },
      "themeTags": [
        "map"
      ],
      "translateX": 1139.7992591491586,
      "translateY": 888.519816944655,
      "rotationX": -1.539924820594802
    },
    "editor.pointTemplate": {
      "toggleKey": "active",
      "centerX": {
        "type": "Percent",
        "value": 50
      },
      "centerY": {
        "type": "Percent",
        "value": 50
      },
      "tooltipText": "{name}"
    },
    "editor.bubbleTemplate": {
      "toggleKey": "active",
      "tooltipText": "{name}: {value}"
    },
    "editor.pixelTemplate": {
      "tooltipText": "{name}",
      "toggleKey": "active",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "fillOpacity": 0.8,
      "strokeOpacity": 1,
      "strokeWidth": 0.5,
      "stroke": {
        "type": "Color",
        "value": "#232323"
      },
      "userData": {
        "point1": {
          "longitude": 22.604039060766183,
          "latitude": 36.9057445524691
        },
        "point2": {
          "longitude": 24.269174241641394,
          "latitude": 36.9057445524691
        }
      }
    },
    "editor.linePointTemplate": {
      "toggleKey": "active",
      "centerX": {
        "type": "Percent",
        "value": 50
      },
      "centerY": {
        "type": "Percent",
        "value": 50
      },
      "tooltipText": "{name}"
    },
    "editor.labelTemplate": {
      "toggleKey": "active",
      "tooltipText": "{name}"
    },
    "editor.polygonSeries": {
      "valueField": "value",
      "calculateAggregates": true,
      "id": "polygonseries",
      "exclude": [
        "AQ"
      ],
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id",
      "forceHidden": true
    },
    "editor.lineSeries": {
      "layer": 30,
      "id": "lineseries",
      "lineTypeField": "lineType",
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id",
      "visible": true,
      "opacity": 1
    },
    "editor.pointSeries": {
      "fixedField": "fixed",
      "id": "pointseries",
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id",
      "visible": true,
      "opacity": 1
    },
    "editor.labelSeries": {
      "fixedField": "fixed",
      "id": "labelseries",
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id",
      "visible": true,
      "opacity": 1
    },
    "editor.bubbleSeries": {
      "calculateAggregates": true,
      "valueField": "value",
      "polygonIdField": "id",
      "id": "bubbleseries",
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id",
      "visible": true,
      "opacity": 1
    },
    "editor.gridSeries": {
      "themeTags": [
        "grid"
      ],
      "affectsBounds": false,
      "lineTypeField": "lineType",
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id",
      "clipExtent": true
    },
    "editor.backgroundSeries": {
      "visible": false,
      "themeTags": [
        "polygon",
        "background"
      ],
      "affectsBounds": false,
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.backgroundSeries.mapPolygons.template": {
      "forceInactive": true
    },
    "editor.gridSeries.mapLines.template": {
      "forceInactive": true
    },
    "editor.pixelCountrySeries.GL": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Greenland",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.CA": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Canada",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.RU": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Russia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.SJ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Svalbard and Jan Mayen",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.US": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "United States",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.NO": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Norway",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.FI": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Finland",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.SE": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Sweden",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.IS": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Iceland",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.EE": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Estonia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.GB": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "United Kingdom",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.DK": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Denmark",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.LV": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Latvia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.LT": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Lithuania",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.IE": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Ireland",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.DE": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Germany",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.BY": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Belarus",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.KZ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Kazakhstan",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.PL": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Poland",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.NL": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Netherlands",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.UA": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Ukraine",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.CN": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "China",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.FR": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "France",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.BE": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Belgium",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.CZ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Czechia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.MN": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Mongolia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.SK": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Slovakia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.AT": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Austria",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.HU": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Hungary",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.RO": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Romania",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.MD": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Moldova",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.CH": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Switzerland",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.IT": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Italy",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.SI": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Slovenia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.HR": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Croatia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.BA": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Bosnia and Herzegovina",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.RS": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Serbia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.UZ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Uzbekistan",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.JP": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Japan",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.ES": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Spain",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.ME": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Montenegro",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.XK": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Kosovo",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.BG": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Bulgaria",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.GE": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Georgia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.KG": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Kyrgyzstan",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.PT": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Portugal",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.MK": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "North Macedonia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.GR": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Greece",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.TR": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Türkiye",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.AM": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Armenia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.AZ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Azerbaijan",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.TM": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Turkmenistan",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.KP": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "North Korea",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.TJ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Tajikistan",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.IR": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Iran",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.AF": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Afghanistan",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.KR": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "South Korea",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.DZ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Algeria",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.TN": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Tunisia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.SY": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Syria",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.IQ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Iraq",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.PK": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Pakistan",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.MA": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Morocco",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.IN": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "India",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.MX": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Mexico",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.LY": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Libya",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.IL": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Israel",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.JO": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Jordan",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.SA": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Saudi Arabia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.EG": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Egypt",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.NP": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Nepal",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.BT": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Bhutan",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.EH": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Western Sahara",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.MR": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Mauritania",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.QA": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Qatar",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.BD": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Bangladesh",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.MM": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Myanmar",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.ML": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Mali",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.AE": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "United Arab Emirates",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.OM": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Oman",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.CU": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Cuba",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.NE": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Niger",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.TD": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Chad",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.SD": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Sudan",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.VN": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Vietnam",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.HT": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Haiti",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.DO": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Dominican Republic",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.TH": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Thailand",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.LA": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Lao People's Democratic Republic",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.BZ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Belize",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.YE": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Yemen",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.PH": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Philippines",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.GT": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Guatemala",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.HN": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Honduras",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.SN": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Senegal",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.BR": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Brazil",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.ER": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Eritrea",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.NI": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Nicaragua",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.BF": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Burkina Faso",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.NG": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Nigeria",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.ET": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Ethiopia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.KH": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Cambodia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.CR": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Costa Rica",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.CO": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Colombia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.VE": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Venezuela",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.TT": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Trinidad and Tobago",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.GN": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Guinea",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.GH": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Ghana",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.TG": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Togo",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.BJ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Benin",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.CM": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Cameroon",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.SS": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "South Sudan",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.SO": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Somalia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.PA": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Panama",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.SL": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Sierra Leone",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.CI": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Côte d'Ivoire",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.CF": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Central African Republic",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.LK": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Sri Lanka",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.GY": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Guyana",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.SR": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Suriname",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.LR": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Liberia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.MY": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Malaysia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.GF": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "French Guiana",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.CD": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Democratic Republic of Congo",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.KE": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Kenya",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.ID": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Indonesia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.GQ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Equatorial Guinea",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.GA": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Gabon",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.CG": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Republic of Congo",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.UG": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Uganda",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.EC": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Ecuador",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.PE": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Peru",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.BI": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Burundi",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.TZ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Tanzania",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.PG": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Papua New Guinea",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.AO": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Angola",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.ZM": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Zambia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.SB": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Solomon Islands",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.BO": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Bolivia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.MZ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Mozambique",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.AU": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Australia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.MW": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Malawi",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.MG": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Madagascar",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.ZW": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Zimbabwe",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.VU": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Vanuatu",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.FJ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Fiji",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.NA": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Namibia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.BW": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Botswana",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.PY": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Paraguay",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.RE": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Reunion",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.NC": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "New Caledonia",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.CL": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Chile",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.AR": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Argentina",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.ZA": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "South Africa",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.LS": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Lesotho",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.UY": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Uruguay",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.NZ": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "New Zealand",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.FK": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "Falkland Islands",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    },
    "editor.pixelCountrySeries.GS": {
      "longitudeField": "longitude",
      "latitudeField": "latitude",
      "autoScale": true,
      "name": "South Georgia and South Sandwich Islands",
      "fill": {
        "type": "Color",
        "value": "#333333"
      },
      "geometryField": "geometry",
      "geometryTypeField": "geometryType",
      "idField": "id"
    }
  },
  "data": {
    "editor.polygonSeries": [],
    "editor.lineSeries": [],
    "editor.pointSeries": [],
    "editor.labelSeries": [],
    "editor.bubbleSeries": [],
    "editor.gridSeries": [],
    "editor.pixelCountrySeries.GL": [
      {
        "longitude": -36.50826,
        "latitude": 83.49765
      },
      {
        "longitude": -34.2187,
        "latitude": 83.49765
      },
      {
        "longitude": -31.92914,
        "latitude": 83.49765
      },
      {
        "longitude": -29.63958,
        "latitude": 83.49765
      },
      {
        "longitude": -43.37694,
        "latitude": 83.23316
      },
      {
        "longitude": -41.08738,
        "latitude": 83.23316
      },
      {
        "longitude": -38.79782,
        "latitude": 83.23316
      },
      {
        "longitude": -36.50826,
        "latitude": 83.23316
      },
      {
        "longitude": -34.2187,
        "latitude": 83.23316
      },
      {
        "longitude": -31.92914,
        "latitude": 83.23316
      },
      {
        "longitude": -29.63958,
        "latitude": 83.23316
      },
      {
        "longitude": -27.35002,
        "latitude": 83.23316
      },
      {
        "longitude": -45.6665,
        "latitude": 82.95796
      },
      {
        "longitude": -43.37694,
        "latitude": 82.95796
      },
      {
        "longitude": -41.08738,
        "latitude": 82.95796
      },
      {
        "longitude": -38.79782,
        "latitude": 82.95796
      },
      {
        "longitude": -36.50826,
        "latitude": 82.95796
      },
      {
        "longitude": -34.2187,
        "latitude": 82.95796
      },
      {
        "longitude": -31.92914,
        "latitude": 82.95796
      },
      {
        "longitude": -29.63958,
        "latitude": 82.95796
      },
      {
        "longitude": -27.35002,
        "latitude": 82.95796
      },
      {
        "longitude": -25.06046,
        "latitude": 82.95796
      },
      {
        "longitude": -45.6665,
        "latitude": 82.67163
      },
      {
        "longitude": -43.37694,
        "latitude": 82.67163
      },
      {
        "longitude": -41.08738,
        "latitude": 82.67163
      },
      {
        "longitude": -38.79782,
        "latitude": 82.67163
      },
      {
        "longitude": -36.50826,
        "latitude": 82.67163
      },
      {
        "longitude": -34.2187,
        "latitude": 82.67163
      },
      {
        "longitude": -31.92914,
        "latitude": 82.67163
      },
      {
        "longitude": -29.63958,
        "latitude": 82.67163
      },
      {
        "longitude": -27.35002,
        "latitude": 82.67163
      },
      {
        "longitude": -25.06046,
        "latitude": 82.67163
      },
      {
        "longitude": -22.77089,
        "latitude": 82.67163
      },
      {
        "longitude": -54.82475,
        "latitude": 82.37372
      },
      {
        "longitude": -43.37694,
        "latitude": 82.37372
      },
      {
        "longitude": -41.08738,
        "latitude": 82.37372
      },
      {
        "longitude": -38.79782,
        "latitude": 82.37372
      },
      {
        "longitude": -36.50826,
        "latitude": 82.37372
      },
      {
        "longitude": -34.2187,
        "latitude": 82.37372
      },
      {
        "longitude": -31.92914,
        "latitude": 82.37372
      },
      {
        "longitude": -29.63958,
        "latitude": 82.37372
      },
      {
        "longitude": -27.35002,
        "latitude": 82.37372
      },
      {
        "longitude": -25.06046,
        "latitude": 82.37372
      },
      {
        "longitude": -59.40387,
        "latitude": 82.06377
      },
      {
        "longitude": -57.11431,
        "latitude": 82.06377
      },
      {
        "longitude": -54.82475,
        "latitude": 82.06377
      },
      {
        "longitude": -52.53519,
        "latitude": 82.06377
      },
      {
        "longitude": -50.24563,
        "latitude": 82.06377
      },
      {
        "longitude": -47.95606,
        "latitude": 82.06377
      },
      {
        "longitude": -43.37694,
        "latitude": 82.06377
      },
      {
        "longitude": -41.08738,
        "latitude": 82.06377
      },
      {
        "longitude": -38.79782,
        "latitude": 82.06377
      },
      {
        "longitude": -36.50826,
        "latitude": 82.06377
      },
      {
        "longitude": -34.2187,
        "latitude": 82.06377
      },
      {
        "longitude": -31.92914,
        "latitude": 82.06377
      },
      {
        "longitude": -29.63958,
        "latitude": 82.06377
      },
      {
        "longitude": -27.35002,
        "latitude": 82.06377
      },
      {
        "longitude": -25.06046,
        "latitude": 82.06377
      },
      {
        "longitude": -22.77089,
        "latitude": 82.06377
      },
      {
        "longitude": -59.40387,
        "latitude": 81.74131
      },
      {
        "longitude": -57.11431,
        "latitude": 81.74131
      },
      {
        "longitude": -54.82475,
        "latitude": 81.74131
      },
      {
        "longitude": -52.53519,
        "latitude": 81.74131
      },
      {
        "longitude": -50.24563,
        "latitude": 81.74131
      },
      {
        "longitude": -47.95606,
        "latitude": 81.74131
      },
      {
        "longitude": -45.6665,
        "latitude": 81.74131
      },
      {
        "longitude": -43.37694,
        "latitude": 81.74131
      },
      {
        "longitude": -41.08738,
        "latitude": 81.74131
      },
      {
        "longitude": -38.79782,
        "latitude": 81.74131
      },
      {
        "longitude": -36.50826,
        "latitude": 81.74131
      },
      {
        "longitude": -34.2187,
        "latitude": 81.74131
      },
      {
        "longitude": -31.92914,
        "latitude": 81.74131
      },
      {
        "longitude": -29.63958,
        "latitude": 81.74131
      },
      {
        "longitude": -27.35002,
        "latitude": 81.74131
      },
      {
        "longitude": -25.06046,
        "latitude": 81.74131
      },
      {
        "longitude": -22.77089,
        "latitude": 81.74131
      },
      {
        "longitude": -15.90221,
        "latitude": 81.74131
      },
      {
        "longitude": -13.61265,
        "latitude": 81.74131
      },
      {
        "longitude": -61.69343,
        "latitude": 81.40585
      },
      {
        "longitude": -59.40387,
        "latitude": 81.40585
      },
      {
        "longitude": -57.11431,
        "latitude": 81.40585
      },
      {
        "longitude": -54.82475,
        "latitude": 81.40585
      },
      {
        "longitude": -52.53519,
        "latitude": 81.40585
      },
      {
        "longitude": -50.24563,
        "latitude": 81.40585
      },
      {
        "longitude": -47.95606,
        "latitude": 81.40585
      },
      {
        "longitude": -45.6665,
        "latitude": 81.40585
      },
      {
        "longitude": -43.37694,
        "latitude": 81.40585
      },
      {
        "longitude": -41.08738,
        "latitude": 81.40585
      },
      {
        "longitude": -38.79782,
        "latitude": 81.40585
      },
      {
        "longitude": -36.50826,
        "latitude": 81.40585
      },
      {
        "longitude": -34.2187,
        "latitude": 81.40585
      },
      {
        "longitude": -31.92914,
        "latitude": 81.40585
      },
      {
        "longitude": -29.63958,
        "latitude": 81.40585
      },
      {
        "longitude": -27.35002,
        "latitude": 81.40585
      },
      {
        "longitude": -25.06046,
        "latitude": 81.40585
      },
      {
        "longitude": -22.77089,
        "latitude": 81.40585
      },
      {
        "longitude": -20.48133,
        "latitude": 81.40585
      },
      {
        "longitude": -18.19177,
        "latitude": 81.40585
      },
      {
        "longitude": -15.90221,
        "latitude": 81.40585
      },
      {
        "longitude": -13.61265,
        "latitude": 81.40585
      },
      {
        "longitude": -63.98299,
        "latitude": 81.05686
      },
      {
        "longitude": -61.69343,
        "latitude": 81.05686
      },
      {
        "longitude": -59.40387,
        "latitude": 81.05686
      },
      {
        "longitude": -57.11431,
        "latitude": 81.05686
      },
      {
        "longitude": -54.82475,
        "latitude": 81.05686
      },
      {
        "longitude": -52.53519,
        "latitude": 81.05686
      },
      {
        "longitude": -50.24563,
        "latitude": 81.05686
      },
      {
        "longitude": -47.95606,
        "latitude": 81.05686
      },
      {
        "longitude": -45.6665,
        "latitude": 81.05686
      },
      {
        "longitude": -43.37694,
        "latitude": 81.05686
      },
      {
        "longitude": -41.08738,
        "latitude": 81.05686
      },
      {
        "longitude": -38.79782,
        "latitude": 81.05686
      },
      {
        "longitude": -36.50826,
        "latitude": 81.05686
      },
      {
        "longitude": -34.2187,
        "latitude": 81.05686
      },
      {
        "longitude": -31.92914,
        "latitude": 81.05686
      },
      {
        "longitude": -29.63958,
        "latitude": 81.05686
      },
      {
        "longitude": -27.35002,
        "latitude": 81.05686
      },
      {
        "longitude": -25.06046,
        "latitude": 81.05686
      },
      {
        "longitude": -22.77089,
        "latitude": 81.05686
      },
      {
        "longitude": -20.48133,
        "latitude": 81.05686
      },
      {
        "longitude": -18.19177,
        "latitude": 81.05686
      },
      {
        "longitude": -15.90221,
        "latitude": 81.05686
      },
      {
        "longitude": -13.61265,
        "latitude": 81.05686
      },
      {
        "longitude": -66.27255,
        "latitude": 80.69382
      },
      {
        "longitude": -63.98299,
        "latitude": 80.69382
      },
      {
        "longitude": -61.69343,
        "latitude": 80.69382
      },
      {
        "longitude": -59.40387,
        "latitude": 80.69382
      },
      {
        "longitude": -57.11431,
        "latitude": 80.69382
      },
      {
        "longitude": -54.82475,
        "latitude": 80.69382
      },
      {
        "longitude": -52.53519,
        "latitude": 80.69382
      },
      {
        "longitude": -50.24563,
        "latitude": 80.69382
      },
      {
        "longitude": -47.95606,
        "latitude": 80.69382
      },
      {
        "longitude": -45.6665,
        "latitude": 80.69382
      },
      {
        "longitude": -43.37694,
        "latitude": 80.69382
      },
      {
        "longitude": -41.08738,
        "latitude": 80.69382
      },
      {
        "longitude": -38.79782,
        "latitude": 80.69382
      },
      {
        "longitude": -36.50826,
        "latitude": 80.69382
      },
      {
        "longitude": -34.2187,
        "latitude": 80.69382
      },
      {
        "longitude": -31.92914,
        "latitude": 80.69382
      },
      {
        "longitude": -29.63958,
        "latitude": 80.69382
      },
      {
        "longitude": -27.35002,
        "latitude": 80.69382
      },
      {
        "longitude": -25.06046,
        "latitude": 80.69382
      },
      {
        "longitude": -22.77089,
        "latitude": 80.69382
      },
      {
        "longitude": -20.48133,
        "latitude": 80.69382
      },
      {
        "longitude": -18.19177,
        "latitude": 80.69382
      },
      {
        "longitude": -15.90221,
        "latitude": 80.69382
      },
      {
        "longitude": -66.27255,
        "latitude": 80.31618
      },
      {
        "longitude": -63.98299,
        "latitude": 80.31618
      },
      {
        "longitude": -61.69343,
        "latitude": 80.31618
      },
      {
        "longitude": -59.40387,
        "latitude": 80.31618
      },
      {
        "longitude": -57.11431,
        "latitude": 80.31618
      },
      {
        "longitude": -54.82475,
        "latitude": 80.31618
      },
      {
        "longitude": -52.53519,
        "latitude": 80.31618
      },
      {
        "longitude": -50.24563,
        "latitude": 80.31618
      },
      {
        "longitude": -47.95606,
        "latitude": 80.31618
      },
      {
        "longitude": -45.6665,
        "latitude": 80.31618
      },
      {
        "longitude": -43.37694,
        "latitude": 80.31618
      },
      {
        "longitude": -41.08738,
        "latitude": 80.31618
      },
      {
        "longitude": -38.79782,
        "latitude": 80.31618
      },
      {
        "longitude": -36.50826,
        "latitude": 80.31618
      },
      {
        "longitude": -34.2187,
        "latitude": 80.31618
      },
      {
        "longitude": -31.92914,
        "latitude": 80.31618
      },
      {
        "longitude": -29.63958,
        "latitude": 80.31618
      },
      {
        "longitude": -27.35002,
        "latitude": 80.31618
      },
      {
        "longitude": -25.06046,
        "latitude": 80.31618
      },
      {
        "longitude": -22.77089,
        "latitude": 80.31618
      },
      {
        "longitude": -20.48133,
        "latitude": 80.31618
      },
      {
        "longitude": -18.19177,
        "latitude": 80.31618
      },
      {
        "longitude": -63.98299,
        "latitude": 79.92337
      },
      {
        "longitude": -61.69343,
        "latitude": 79.92337
      },
      {
        "longitude": -59.40387,
        "latitude": 79.92337
      },
      {
        "longitude": -57.11431,
        "latitude": 79.92337
      },
      {
        "longitude": -54.82475,
        "latitude": 79.92337
      },
      {
        "longitude": -52.53519,
        "latitude": 79.92337
      },
      {
        "longitude": -50.24563,
        "latitude": 79.92337
      },
      {
        "longitude": -47.95606,
        "latitude": 79.92337
      },
      {
        "longitude": -45.6665,
        "latitude": 79.92337
      },
      {
        "longitude": -43.37694,
        "latitude": 79.92337
      },
      {
        "longitude": -41.08738,
        "latitude": 79.92337
      },
      {
        "longitude": -38.79782,
        "latitude": 79.92337
      },
      {
        "longitude": -36.50826,
        "latitude": 79.92337
      },
      {
        "longitude": -34.2187,
        "latitude": 79.92337
      },
      {
        "longitude": -31.92914,
        "latitude": 79.92337
      },
      {
        "longitude": -29.63958,
        "latitude": 79.92337
      },
      {
        "longitude": -27.35002,
        "latitude": 79.92337
      },
      {
        "longitude": -25.06046,
        "latitude": 79.92337
      },
      {
        "longitude": -22.77089,
        "latitude": 79.92337
      },
      {
        "longitude": -20.48133,
        "latitude": 79.92337
      },
      {
        "longitude": -63.98299,
        "latitude": 79.51479
      },
      {
        "longitude": -61.69343,
        "latitude": 79.51479
      },
      {
        "longitude": -59.40387,
        "latitude": 79.51479
      },
      {
        "longitude": -57.11431,
        "latitude": 79.51479
      },
      {
        "longitude": -54.82475,
        "latitude": 79.51479
      },
      {
        "longitude": -52.53519,
        "latitude": 79.51479
      },
      {
        "longitude": -50.24563,
        "latitude": 79.51479
      },
      {
        "longitude": -47.95606,
        "latitude": 79.51479
      },
      {
        "longitude": -45.6665,
        "latitude": 79.51479
      },
      {
        "longitude": -43.37694,
        "latitude": 79.51479
      },
      {
        "longitude": -41.08738,
        "latitude": 79.51479
      },
      {
        "longitude": -38.79782,
        "latitude": 79.51479
      },
      {
        "longitude": -36.50826,
        "latitude": 79.51479
      },
      {
        "longitude": -34.2187,
        "latitude": 79.51479
      },
      {
        "longitude": -31.92914,
        "latitude": 79.51479
      },
      {
        "longitude": -29.63958,
        "latitude": 79.51479
      },
      {
        "longitude": -27.35002,
        "latitude": 79.51479
      },
      {
        "longitude": -25.06046,
        "latitude": 79.51479
      },
      {
        "longitude": -22.77089,
        "latitude": 79.51479
      },
      {
        "longitude": -20.48133,
        "latitude": 79.51479
      },
      {
        "longitude": -66.27255,
        "latitude": 79.08985
      },
      {
        "longitude": -63.98299,
        "latitude": 79.08985
      },
      {
        "longitude": -61.69343,
        "latitude": 79.08985
      },
      {
        "longitude": -59.40387,
        "latitude": 79.08985
      },
      {
        "longitude": -57.11431,
        "latitude": 79.08985
      },
      {
        "longitude": -54.82475,
        "latitude": 79.08985
      },
      {
        "longitude": -52.53519,
        "latitude": 79.08985
      },
      {
        "longitude": -50.24563,
        "latitude": 79.08985
      },
      {
        "longitude": -47.95606,
        "latitude": 79.08985
      },
      {
        "longitude": -45.6665,
        "latitude": 79.08985
      },
      {
        "longitude": -43.37694,
        "latitude": 79.08985
      },
      {
        "longitude": -41.08738,
        "latitude": 79.08985
      },
      {
        "longitude": -38.79782,
        "latitude": 79.08985
      },
      {
        "longitude": -36.50826,
        "latitude": 79.08985
      },
      {
        "longitude": -34.2187,
        "latitude": 79.08985
      },
      {
        "longitude": -31.92914,
        "latitude": 79.08985
      },
      {
        "longitude": -29.63958,
        "latitude": 79.08985
      },
      {
        "longitude": -27.35002,
        "latitude": 79.08985
      },
      {
        "longitude": -25.06046,
        "latitude": 79.08985
      },
      {
        "longitude": -22.77089,
        "latitude": 79.08985
      },
      {
        "longitude": -20.48133,
        "latitude": 79.08985
      },
      {
        "longitude": -70.85167,
        "latitude": 78.64789
      },
      {
        "longitude": -68.56211,
        "latitude": 78.64789
      },
      {
        "longitude": -66.27255,
        "latitude": 78.64789
      },
      {
        "longitude": -63.98299,
        "latitude": 78.64789
      },
      {
        "longitude": -61.69343,
        "latitude": 78.64789
      },
      {
        "longitude": -59.40387,
        "latitude": 78.64789
      },
      {
        "longitude": -57.11431,
        "latitude": 78.64789
      },
      {
        "longitude": -54.82475,
        "latitude": 78.64789
      },
      {
        "longitude": -52.53519,
        "latitude": 78.64789
      },
      {
        "longitude": -50.24563,
        "latitude": 78.64789
      },
      {
        "longitude": -47.95606,
        "latitude": 78.64789
      },
      {
        "longitude": -45.6665,
        "latitude": 78.64789
      },
      {
        "longitude": -43.37694,
        "latitude": 78.64789
      },
      {
        "longitude": -41.08738,
        "latitude": 78.64789
      },
      {
        "longitude": -38.79782,
        "latitude": 78.64789
      },
      {
        "longitude": -36.50826,
        "latitude": 78.64789
      },
      {
        "longitude": -34.2187,
        "latitude": 78.64789
      },
      {
        "longitude": -31.92914,
        "latitude": 78.64789
      },
      {
        "longitude": -29.63958,
        "latitude": 78.64789
      },
      {
        "longitude": -27.35002,
        "latitude": 78.64789
      },
      {
        "longitude": -25.06046,
        "latitude": 78.64789
      },
      {
        "longitude": -22.77089,
        "latitude": 78.64789
      },
      {
        "longitude": -70.85167,
        "latitude": 78.18828
      },
      {
        "longitude": -68.56211,
        "latitude": 78.18828
      },
      {
        "longitude": -66.27255,
        "latitude": 78.18828
      },
      {
        "longitude": -63.98299,
        "latitude": 78.18828
      },
      {
        "longitude": -61.69343,
        "latitude": 78.18828
      },
      {
        "longitude": -59.40387,
        "latitude": 78.18828
      },
      {
        "longitude": -57.11431,
        "latitude": 78.18828
      },
      {
        "longitude": -54.82475,
        "latitude": 78.18828
      },
      {
        "longitude": -52.53519,
        "latitude": 78.18828
      },
      {
        "longitude": -50.24563,
        "latitude": 78.18828
      },
      {
        "longitude": -47.95606,
        "latitude": 78.18828
      },
      {
        "longitude": -45.6665,
        "latitude": 78.18828
      },
      {
        "longitude": -43.37694,
        "latitude": 78.18828
      },
      {
        "longitude": -41.08738,
        "latitude": 78.18828
      },
      {
        "longitude": -38.79782,
        "latitude": 78.18828
      },
      {
        "longitude": -36.50826,
        "latitude": 78.18828
      },
      {
        "longitude": -34.2187,
        "latitude": 78.18828
      },
      {
        "longitude": -31.92914,
        "latitude": 78.18828
      },
      {
        "longitude": -29.63958,
        "latitude": 78.18828
      },
      {
        "longitude": -27.35002,
        "latitude": 78.18828
      },
      {
        "longitude": -25.06046,
        "latitude": 78.18828
      },
      {
        "longitude": -22.77089,
        "latitude": 78.18828
      },
      {
        "longitude": -68.56211,
        "latitude": 77.71033
      },
      {
        "longitude": -66.27255,
        "latitude": 77.71033
      },
      {
        "longitude": -63.98299,
        "latitude": 77.71033
      },
      {
        "longitude": -61.69343,
        "latitude": 77.71033
      },
      {
        "longitude": -59.40387,
        "latitude": 77.71033
      },
      {
        "longitude": -57.11431,
        "latitude": 77.71033
      },
      {
        "longitude": -54.82475,
        "latitude": 77.71033
      },
      {
        "longitude": -52.53519,
        "latitude": 77.71033
      },
      {
        "longitude": -50.24563,
        "latitude": 77.71033
      },
      {
        "longitude": -47.95606,
        "latitude": 77.71033
      },
      {
        "longitude": -45.6665,
        "latitude": 77.71033
      },
      {
        "longitude": -43.37694,
        "latitude": 77.71033
      },
      {
        "longitude": -41.08738,
        "latitude": 77.71033
      },
      {
        "longitude": -38.79782,
        "latitude": 77.71033
      },
      {
        "longitude": -36.50826,
        "latitude": 77.71033
      },
      {
        "longitude": -34.2187,
        "latitude": 77.71033
      },
      {
        "longitude": -31.92914,
        "latitude": 77.71033
      },
      {
        "longitude": -29.63958,
        "latitude": 77.71033
      },
      {
        "longitude": -27.35002,
        "latitude": 77.71033
      },
      {
        "longitude": -25.06046,
        "latitude": 77.71033
      },
      {
        "longitude": -22.77089,
        "latitude": 77.71033
      },
      {
        "longitude": -70.85167,
        "latitude": 77.21336
      },
      {
        "longitude": -68.56211,
        "latitude": 77.21336
      },
      {
        "longitude": -66.27255,
        "latitude": 77.21336
      },
      {
        "longitude": -63.98299,
        "latitude": 77.21336
      },
      {
        "longitude": -61.69343,
        "latitude": 77.21336
      },
      {
        "longitude": -59.40387,
        "latitude": 77.21336
      },
      {
        "longitude": -57.11431,
        "latitude": 77.21336
      },
      {
        "longitude": -54.82475,
        "latitude": 77.21336
      },
      {
        "longitude": -52.53519,
        "latitude": 77.21336
      },
      {
        "longitude": -50.24563,
        "latitude": 77.21336
      },
      {
        "longitude": -47.95606,
        "latitude": 77.21336
      },
      {
        "longitude": -45.6665,
        "latitude": 77.21336
      },
      {
        "longitude": -43.37694,
        "latitude": 77.21336
      },
      {
        "longitude": -41.08738,
        "latitude": 77.21336
      },
      {
        "longitude": -38.79782,
        "latitude": 77.21336
      },
      {
        "longitude": -36.50826,
        "latitude": 77.21336
      },
      {
        "longitude": -34.2187,
        "latitude": 77.21336
      },
      {
        "longitude": -31.92914,
        "latitude": 77.21336
      },
      {
        "longitude": -29.63958,
        "latitude": 77.21336
      },
      {
        "longitude": -27.35002,
        "latitude": 77.21336
      },
      {
        "longitude": -25.06046,
        "latitude": 77.21336
      },
      {
        "longitude": -22.77089,
        "latitude": 77.21336
      },
      {
        "longitude": -20.48133,
        "latitude": 77.21336
      },
      {
        "longitude": -68.56211,
        "latitude": 76.69664
      },
      {
        "longitude": -66.27255,
        "latitude": 76.69664
      },
      {
        "longitude": -63.98299,
        "latitude": 76.69664
      },
      {
        "longitude": -61.69343,
        "latitude": 76.69664
      },
      {
        "longitude": -59.40387,
        "latitude": 76.69664
      },
      {
        "longitude": -57.11431,
        "latitude": 76.69664
      },
      {
        "longitude": -54.82475,
        "latitude": 76.69664
      },
      {
        "longitude": -52.53519,
        "latitude": 76.69664
      },
      {
        "longitude": -50.24563,
        "latitude": 76.69664
      },
      {
        "longitude": -47.95606,
        "latitude": 76.69664
      },
      {
        "longitude": -45.6665,
        "latitude": 76.69664
      },
      {
        "longitude": -43.37694,
        "latitude": 76.69664
      },
      {
        "longitude": -41.08738,
        "latitude": 76.69664
      },
      {
        "longitude": -38.79782,
        "latitude": 76.69664
      },
      {
        "longitude": -36.50826,
        "latitude": 76.69664
      },
      {
        "longitude": -34.2187,
        "latitude": 76.69664
      },
      {
        "longitude": -31.92914,
        "latitude": 76.69664
      },
      {
        "longitude": -29.63958,
        "latitude": 76.69664
      },
      {
        "longitude": -27.35002,
        "latitude": 76.69664
      },
      {
        "longitude": -25.06046,
        "latitude": 76.69664
      },
      {
        "longitude": -22.77089,
        "latitude": 76.69664
      },
      {
        "longitude": -66.27255,
        "latitude": 76.15942
      },
      {
        "longitude": -59.40387,
        "latitude": 76.15942
      },
      {
        "longitude": -57.11431,
        "latitude": 76.15942
      },
      {
        "longitude": -54.82475,
        "latitude": 76.15942
      },
      {
        "longitude": -52.53519,
        "latitude": 76.15942
      },
      {
        "longitude": -50.24563,
        "latitude": 76.15942
      },
      {
        "longitude": -47.95606,
        "latitude": 76.15942
      },
      {
        "longitude": -45.6665,
        "latitude": 76.15942
      },
      {
        "longitude": -43.37694,
        "latitude": 76.15942
      },
      {
        "longitude": -41.08738,
        "latitude": 76.15942
      },
      {
        "longitude": -38.79782,
        "latitude": 76.15942
      },
      {
        "longitude": -36.50826,
        "latitude": 76.15942
      },
      {
        "longitude": -34.2187,
        "latitude": 76.15942
      },
      {
        "longitude": -31.92914,
        "latitude": 76.15942
      },
      {
        "longitude": -29.63958,
        "latitude": 76.15942
      },
      {
        "longitude": -27.35002,
        "latitude": 76.15942
      },
      {
        "longitude": -25.06046,
        "latitude": 76.15942
      },
      {
        "longitude": -22.77089,
        "latitude": 76.15942
      },
      {
        "longitude": -20.48133,
        "latitude": 76.15942
      },
      {
        "longitude": -57.11431,
        "latitude": 75.60095
      },
      {
        "longitude": -54.82475,
        "latitude": 75.60095
      },
      {
        "longitude": -52.53519,
        "latitude": 75.60095
      },
      {
        "longitude": -50.24563,
        "latitude": 75.60095
      },
      {
        "longitude": -47.95606,
        "latitude": 75.60095
      },
      {
        "longitude": -45.6665,
        "latitude": 75.60095
      },
      {
        "longitude": -43.37694,
        "latitude": 75.60095
      },
      {
        "longitude": -41.08738,
        "latitude": 75.60095
      },
      {
        "longitude": -38.79782,
        "latitude": 75.60095
      },
      {
        "longitude": -36.50826,
        "latitude": 75.60095
      },
      {
        "longitude": -34.2187,
        "latitude": 75.60095
      },
      {
        "longitude": -31.92914,
        "latitude": 75.60095
      },
      {
        "longitude": -29.63958,
        "latitude": 75.60095
      },
      {
        "longitude": -27.35002,
        "latitude": 75.60095
      },
      {
        "longitude": -25.06046,
        "latitude": 75.60095
      },
      {
        "longitude": -22.77089,
        "latitude": 75.60095
      },
      {
        "longitude": -20.48133,
        "latitude": 75.60095
      },
      {
        "longitude": -57.11431,
        "latitude": 75.02045
      },
      {
        "longitude": -54.82475,
        "latitude": 75.02045
      },
      {
        "longitude": -52.53519,
        "latitude": 75.02045
      },
      {
        "longitude": -50.24563,
        "latitude": 75.02045
      },
      {
        "longitude": -47.95606,
        "latitude": 75.02045
      },
      {
        "longitude": -45.6665,
        "latitude": 75.02045
      },
      {
        "longitude": -43.37694,
        "latitude": 75.02045
      },
      {
        "longitude": -41.08738,
        "latitude": 75.02045
      },
      {
        "longitude": -38.79782,
        "latitude": 75.02045
      },
      {
        "longitude": -36.50826,
        "latitude": 75.02045
      },
      {
        "longitude": -34.2187,
        "latitude": 75.02045
      },
      {
        "longitude": -31.92914,
        "latitude": 75.02045
      },
      {
        "longitude": -29.63958,
        "latitude": 75.02045
      },
      {
        "longitude": -27.35002,
        "latitude": 75.02045
      },
      {
        "longitude": -25.06046,
        "latitude": 75.02045
      },
      {
        "longitude": -22.77089,
        "latitude": 75.02045
      },
      {
        "longitude": -20.48133,
        "latitude": 75.02045
      },
      {
        "longitude": -54.82475,
        "latitude": 74.4171
      },
      {
        "longitude": -52.53519,
        "latitude": 74.4171
      },
      {
        "longitude": -50.24563,
        "latitude": 74.4171
      },
      {
        "longitude": -47.95606,
        "latitude": 74.4171
      },
      {
        "longitude": -45.6665,
        "latitude": 74.4171
      },
      {
        "longitude": -43.37694,
        "latitude": 74.4171
      },
      {
        "longitude": -41.08738,
        "latitude": 74.4171
      },
      {
        "longitude": -38.79782,
        "latitude": 74.4171
      },
      {
        "longitude": -36.50826,
        "latitude": 74.4171
      },
      {
        "longitude": -34.2187,
        "latitude": 74.4171
      },
      {
        "longitude": -31.92914,
        "latitude": 74.4171
      },
      {
        "longitude": -29.63958,
        "latitude": 74.4171
      },
      {
        "longitude": -27.35002,
        "latitude": 74.4171
      },
      {
        "longitude": -25.06046,
        "latitude": 74.4171
      },
      {
        "longitude": -22.77089,
        "latitude": 74.4171
      },
      {
        "longitude": -20.48133,
        "latitude": 74.4171
      },
      {
        "longitude": -54.82475,
        "latitude": 73.79007
      },
      {
        "longitude": -52.53519,
        "latitude": 73.79007
      },
      {
        "longitude": -50.24563,
        "latitude": 73.79007
      },
      {
        "longitude": -47.95606,
        "latitude": 73.79007
      },
      {
        "longitude": -45.6665,
        "latitude": 73.79007
      },
      {
        "longitude": -43.37694,
        "latitude": 73.79007
      },
      {
        "longitude": -41.08738,
        "latitude": 73.79007
      },
      {
        "longitude": -38.79782,
        "latitude": 73.79007
      },
      {
        "longitude": -36.50826,
        "latitude": 73.79007
      },
      {
        "longitude": -34.2187,
        "latitude": 73.79007
      },
      {
        "longitude": -31.92914,
        "latitude": 73.79007
      },
      {
        "longitude": -29.63958,
        "latitude": 73.79007
      },
      {
        "longitude": -27.35002,
        "latitude": 73.79007
      },
      {
        "longitude": -25.06046,
        "latitude": 73.79007
      },
      {
        "longitude": -22.77089,
        "latitude": 73.79007
      },
      {
        "longitude": -54.82475,
        "latitude": 73.13851
      },
      {
        "longitude": -52.53519,
        "latitude": 73.13851
      },
      {
        "longitude": -50.24563,
        "latitude": 73.13851
      },
      {
        "longitude": -47.95606,
        "latitude": 73.13851
      },
      {
        "longitude": -45.6665,
        "latitude": 73.13851
      },
      {
        "longitude": -43.37694,
        "latitude": 73.13851
      },
      {
        "longitude": -41.08738,
        "latitude": 73.13851
      },
      {
        "longitude": -38.79782,
        "latitude": 73.13851
      },
      {
        "longitude": -36.50826,
        "latitude": 73.13851
      },
      {
        "longitude": -34.2187,
        "latitude": 73.13851
      },
      {
        "longitude": -31.92914,
        "latitude": 73.13851
      },
      {
        "longitude": -29.63958,
        "latitude": 73.13851
      },
      {
        "longitude": -27.35002,
        "latitude": 73.13851
      },
      {
        "longitude": -25.06046,
        "latitude": 73.13851
      },
      {
        "longitude": -22.77089,
        "latitude": 73.13851
      },
      {
        "longitude": -54.82475,
        "latitude": 72.46156
      },
      {
        "longitude": -52.53519,
        "latitude": 72.46156
      },
      {
        "longitude": -50.24563,
        "latitude": 72.46156
      },
      {
        "longitude": -47.95606,
        "latitude": 72.46156
      },
      {
        "longitude": -45.6665,
        "latitude": 72.46156
      },
      {
        "longitude": -43.37694,
        "latitude": 72.46156
      },
      {
        "longitude": -41.08738,
        "latitude": 72.46156
      },
      {
        "longitude": -38.79782,
        "latitude": 72.46156
      },
      {
        "longitude": -36.50826,
        "latitude": 72.46156
      },
      {
        "longitude": -34.2187,
        "latitude": 72.46156
      },
      {
        "longitude": -31.92914,
        "latitude": 72.46156
      },
      {
        "longitude": -29.63958,
        "latitude": 72.46156
      },
      {
        "longitude": -27.35002,
        "latitude": 72.46156
      },
      {
        "longitude": -25.06046,
        "latitude": 72.46156
      },
      {
        "longitude": -22.77089,
        "latitude": 72.46156
      },
      {
        "longitude": -54.82475,
        "latitude": 71.75831
      },
      {
        "longitude": -52.53519,
        "latitude": 71.75831
      },
      {
        "longitude": -50.24563,
        "latitude": 71.75831
      },
      {
        "longitude": -47.95606,
        "latitude": 71.75831
      },
      {
        "longitude": -45.6665,
        "latitude": 71.75831
      },
      {
        "longitude": -43.37694,
        "latitude": 71.75831
      },
      {
        "longitude": -41.08738,
        "latitude": 71.75831
      },
      {
        "longitude": -38.79782,
        "latitude": 71.75831
      },
      {
        "longitude": -36.50826,
        "latitude": 71.75831
      },
      {
        "longitude": -34.2187,
        "latitude": 71.75831
      },
      {
        "longitude": -31.92914,
        "latitude": 71.75831
      },
      {
        "longitude": -29.63958,
        "latitude": 71.75831
      },
      {
        "longitude": -27.35002,
        "latitude": 71.75831
      },
      {
        "longitude": -25.06046,
        "latitude": 71.75831
      },
      {
        "longitude": -22.77089,
        "latitude": 71.75831
      },
      {
        "longitude": -50.24563,
        "latitude": 71.02787
      },
      {
        "longitude": -47.95606,
        "latitude": 71.02787
      },
      {
        "longitude": -45.6665,
        "latitude": 71.02787
      },
      {
        "longitude": -43.37694,
        "latitude": 71.02787
      },
      {
        "longitude": -41.08738,
        "latitude": 71.02787
      },
      {
        "longitude": -38.79782,
        "latitude": 71.02787
      },
      {
        "longitude": -36.50826,
        "latitude": 71.02787
      },
      {
        "longitude": -34.2187,
        "latitude": 71.02787
      },
      {
        "longitude": -31.92914,
        "latitude": 71.02787
      },
      {
        "longitude": -29.63958,
        "latitude": 71.02787
      },
      {
        "longitude": -27.35002,
        "latitude": 71.02787
      },
      {
        "longitude": -22.77089,
        "latitude": 71.02787
      },
      {
        "longitude": -54.82475,
        "latitude": 70.26929
      },
      {
        "longitude": -52.53519,
        "latitude": 70.26929
      },
      {
        "longitude": -50.24563,
        "latitude": 70.26929
      },
      {
        "longitude": -47.95606,
        "latitude": 70.26929
      },
      {
        "longitude": -45.6665,
        "latitude": 70.26929
      },
      {
        "longitude": -43.37694,
        "latitude": 70.26929
      },
      {
        "longitude": -41.08738,
        "latitude": 70.26929
      },
      {
        "longitude": -38.79782,
        "latitude": 70.26929
      },
      {
        "longitude": -36.50826,
        "latitude": 70.26929
      },
      {
        "longitude": -34.2187,
        "latitude": 70.26929
      },
      {
        "longitude": -31.92914,
        "latitude": 70.26929
      },
      {
        "longitude": -29.63958,
        "latitude": 70.26929
      },
      {
        "longitude": -27.35002,
        "latitude": 70.26929
      },
      {
        "longitude": -25.06046,
        "latitude": 70.26929
      },
      {
        "longitude": -52.53519,
        "latitude": 69.48164
      },
      {
        "longitude": -50.24563,
        "latitude": 69.48164
      },
      {
        "longitude": -47.95606,
        "latitude": 69.48164
      },
      {
        "longitude": -45.6665,
        "latitude": 69.48164
      },
      {
        "longitude": -43.37694,
        "latitude": 69.48164
      },
      {
        "longitude": -41.08738,
        "latitude": 69.48164
      },
      {
        "longitude": -38.79782,
        "latitude": 69.48164
      },
      {
        "longitude": -36.50826,
        "latitude": 69.48164
      },
      {
        "longitude": -34.2187,
        "latitude": 69.48164
      },
      {
        "longitude": -31.92914,
        "latitude": 69.48164
      },
      {
        "longitude": -29.63958,
        "latitude": 69.48164
      },
      {
        "longitude": -27.35002,
        "latitude": 69.48164
      },
      {
        "longitude": -25.06046,
        "latitude": 69.48164
      },
      {
        "longitude": -52.53519,
        "latitude": 68.66395
      },
      {
        "longitude": -50.24563,
        "latitude": 68.66395
      },
      {
        "longitude": -47.95606,
        "latitude": 68.66395
      },
      {
        "longitude": -45.6665,
        "latitude": 68.66395
      },
      {
        "longitude": -43.37694,
        "latitude": 68.66395
      },
      {
        "longitude": -41.08738,
        "latitude": 68.66395
      },
      {
        "longitude": -38.79782,
        "latitude": 68.66395
      },
      {
        "longitude": -36.50826,
        "latitude": 68.66395
      },
      {
        "longitude": -34.2187,
        "latitude": 68.66395
      },
      {
        "longitude": -31.92914,
        "latitude": 68.66395
      },
      {
        "longitude": -29.63958,
        "latitude": 68.66395
      },
      {
        "longitude": -27.35002,
        "latitude": 68.66395
      },
      {
        "longitude": -52.53519,
        "latitude": 67.81526
      },
      {
        "longitude": -50.24563,
        "latitude": 67.81526
      },
      {
        "longitude": -47.95606,
        "latitude": 67.81526
      },
      {
        "longitude": -45.6665,
        "latitude": 67.81526
      },
      {
        "longitude": -43.37694,
        "latitude": 67.81526
      },
      {
        "longitude": -41.08738,
        "latitude": 67.81526
      },
      {
        "longitude": -38.79782,
        "latitude": 67.81526
      },
      {
        "longitude": -36.50826,
        "latitude": 67.81526
      },
      {
        "longitude": -34.2187,
        "latitude": 67.81526
      },
      {
        "longitude": -52.53519,
        "latitude": 66.93457
      },
      {
        "longitude": -50.24563,
        "latitude": 66.93457
      },
      {
        "longitude": -47.95606,
        "latitude": 66.93457
      },
      {
        "longitude": -45.6665,
        "latitude": 66.93457
      },
      {
        "longitude": -43.37694,
        "latitude": 66.93457
      },
      {
        "longitude": -41.08738,
        "latitude": 66.93457
      },
      {
        "longitude": -38.79782,
        "latitude": 66.93457
      },
      {
        "longitude": -36.50826,
        "latitude": 66.93457
      },
      {
        "longitude": -34.2187,
        "latitude": 66.93457
      },
      {
        "longitude": -52.53519,
        "latitude": 66.02091
      },
      {
        "longitude": -50.24563,
        "latitude": 66.02091
      },
      {
        "longitude": -47.95606,
        "latitude": 66.02091
      },
      {
        "longitude": -45.6665,
        "latitude": 66.02091
      },
      {
        "longitude": -43.37694,
        "latitude": 66.02091
      },
      {
        "longitude": -41.08738,
        "latitude": 66.02091
      },
      {
        "longitude": -38.79782,
        "latitude": 66.02091
      },
      {
        "longitude": -36.50826,
        "latitude": 66.02091
      },
      {
        "longitude": -52.53519,
        "latitude": 65.07327
      },
      {
        "longitude": -50.24563,
        "latitude": 65.07327
      },
      {
        "longitude": -47.95606,
        "latitude": 65.07327
      },
      {
        "longitude": -45.6665,
        "latitude": 65.07327
      },
      {
        "longitude": -43.37694,
        "latitude": 65.07327
      },
      {
        "longitude": -41.08738,
        "latitude": 65.07327
      },
      {
        "longitude": -50.24563,
        "latitude": 64.09067
      },
      {
        "longitude": -47.95606,
        "latitude": 64.09067
      },
      {
        "longitude": -45.6665,
        "latitude": 64.09067
      },
      {
        "longitude": -43.37694,
        "latitude": 64.09067
      },
      {
        "longitude": -41.08738,
        "latitude": 64.09067
      },
      {
        "longitude": -50.24563,
        "latitude": 63.0721
      },
      {
        "longitude": -47.95606,
        "latitude": 63.0721
      },
      {
        "longitude": -45.6665,
        "latitude": 63.0721
      },
      {
        "longitude": -43.37694,
        "latitude": 63.0721
      },
      {
        "longitude": -47.95606,
        "latitude": 62.0166
      },
      {
        "longitude": -45.6665,
        "latitude": 62.0166
      },
      {
        "longitude": -43.37694,
        "latitude": 62.0166
      },
      {
        "longitude": -47.95606,
        "latitude": 60.92319
      },
      {
        "longitude": -45.6665,
        "latitude": 60.92319
      },
      {
        "longitude": -43.37694,
        "latitude": 60.92319
      }
    ],
    "editor.pixelCountrySeries.CA": [
      {
        "longitude": -80.00992,
        "latitude": 82.95796
      },
      {
        "longitude": -77.72036,
        "latitude": 82.95796
      },
      {
        "longitude": -75.43079,
        "latitude": 82.95796
      },
      {
        "longitude": -73.14123,
        "latitude": 82.95796
      },
      {
        "longitude": -70.85167,
        "latitude": 82.95796
      },
      {
        "longitude": -68.56211,
        "latitude": 82.95796
      },
      {
        "longitude": -82.29948,
        "latitude": 82.67163
      },
      {
        "longitude": -80.00992,
        "latitude": 82.67163
      },
      {
        "longitude": -77.72036,
        "latitude": 82.67163
      },
      {
        "longitude": -75.43079,
        "latitude": 82.67163
      },
      {
        "longitude": -73.14123,
        "latitude": 82.67163
      },
      {
        "longitude": -70.85167,
        "latitude": 82.67163
      },
      {
        "longitude": -68.56211,
        "latitude": 82.67163
      },
      {
        "longitude": -66.27255,
        "latitude": 82.67163
      },
      {
        "longitude": -63.98299,
        "latitude": 82.67163
      },
      {
        "longitude": -84.58904,
        "latitude": 82.37372
      },
      {
        "longitude": -82.29948,
        "latitude": 82.37372
      },
      {
        "longitude": -80.00992,
        "latitude": 82.37372
      },
      {
        "longitude": -77.72036,
        "latitude": 82.37372
      },
      {
        "longitude": -75.43079,
        "latitude": 82.37372
      },
      {
        "longitude": -73.14123,
        "latitude": 82.37372
      },
      {
        "longitude": -70.85167,
        "latitude": 82.37372
      },
      {
        "longitude": -68.56211,
        "latitude": 82.37372
      },
      {
        "longitude": -66.27255,
        "latitude": 82.37372
      },
      {
        "longitude": -63.98299,
        "latitude": 82.37372
      },
      {
        "longitude": -89.16816,
        "latitude": 82.06377
      },
      {
        "longitude": -86.8786,
        "latitude": 82.06377
      },
      {
        "longitude": -84.58904,
        "latitude": 82.06377
      },
      {
        "longitude": -82.29948,
        "latitude": 82.06377
      },
      {
        "longitude": -80.00992,
        "latitude": 82.06377
      },
      {
        "longitude": -77.72036,
        "latitude": 82.06377
      },
      {
        "longitude": -75.43079,
        "latitude": 82.06377
      },
      {
        "longitude": -73.14123,
        "latitude": 82.06377
      },
      {
        "longitude": -70.85167,
        "latitude": 82.06377
      },
      {
        "longitude": -68.56211,
        "latitude": 82.06377
      },
      {
        "longitude": -66.27255,
        "latitude": 82.06377
      },
      {
        "longitude": -63.98299,
        "latitude": 82.06377
      },
      {
        "longitude": -89.16816,
        "latitude": 81.74131
      },
      {
        "longitude": -86.8786,
        "latitude": 81.74131
      },
      {
        "longitude": -84.58904,
        "latitude": 81.74131
      },
      {
        "longitude": -82.29948,
        "latitude": 81.74131
      },
      {
        "longitude": -80.00992,
        "latitude": 81.74131
      },
      {
        "longitude": -77.72036,
        "latitude": 81.74131
      },
      {
        "longitude": -75.43079,
        "latitude": 81.74131
      },
      {
        "longitude": -73.14123,
        "latitude": 81.74131
      },
      {
        "longitude": -70.85167,
        "latitude": 81.74131
      },
      {
        "longitude": -68.56211,
        "latitude": 81.74131
      },
      {
        "longitude": -66.27255,
        "latitude": 81.74131
      },
      {
        "longitude": -89.16816,
        "latitude": 81.40585
      },
      {
        "longitude": -86.8786,
        "latitude": 81.40585
      },
      {
        "longitude": -84.58904,
        "latitude": 81.40585
      },
      {
        "longitude": -82.29948,
        "latitude": 81.40585
      },
      {
        "longitude": -80.00992,
        "latitude": 81.40585
      },
      {
        "longitude": -77.72036,
        "latitude": 81.40585
      },
      {
        "longitude": -75.43079,
        "latitude": 81.40585
      },
      {
        "longitude": -73.14123,
        "latitude": 81.40585
      },
      {
        "longitude": -70.85167,
        "latitude": 81.40585
      },
      {
        "longitude": -68.56211,
        "latitude": 81.40585
      },
      {
        "longitude": -66.27255,
        "latitude": 81.40585
      },
      {
        "longitude": -93.74728,
        "latitude": 81.05686
      },
      {
        "longitude": -89.16816,
        "latitude": 81.05686
      },
      {
        "longitude": -86.8786,
        "latitude": 81.05686
      },
      {
        "longitude": -84.58904,
        "latitude": 81.05686
      },
      {
        "longitude": -82.29948,
        "latitude": 81.05686
      },
      {
        "longitude": -80.00992,
        "latitude": 81.05686
      },
      {
        "longitude": -77.72036,
        "latitude": 81.05686
      },
      {
        "longitude": -75.43079,
        "latitude": 81.05686
      },
      {
        "longitude": -73.14123,
        "latitude": 81.05686
      },
      {
        "longitude": -70.85167,
        "latitude": 81.05686
      },
      {
        "longitude": -68.56211,
        "latitude": 81.05686
      },
      {
        "longitude": -96.03684,
        "latitude": 80.69382
      },
      {
        "longitude": -93.74728,
        "latitude": 80.69382
      },
      {
        "longitude": -91.45772,
        "latitude": 80.69382
      },
      {
        "longitude": -86.8786,
        "latitude": 80.69382
      },
      {
        "longitude": -84.58904,
        "latitude": 80.69382
      },
      {
        "longitude": -82.29948,
        "latitude": 80.69382
      },
      {
        "longitude": -80.00992,
        "latitude": 80.69382
      },
      {
        "longitude": -77.72036,
        "latitude": 80.69382
      },
      {
        "longitude": -75.43079,
        "latitude": 80.69382
      },
      {
        "longitude": -73.14123,
        "latitude": 80.69382
      },
      {
        "longitude": -70.85167,
        "latitude": 80.69382
      },
      {
        "longitude": -96.03684,
        "latitude": 80.31618
      },
      {
        "longitude": -93.74728,
        "latitude": 80.31618
      },
      {
        "longitude": -91.45772,
        "latitude": 80.31618
      },
      {
        "longitude": -89.16816,
        "latitude": 80.31618
      },
      {
        "longitude": -84.58904,
        "latitude": 80.31618
      },
      {
        "longitude": -82.29948,
        "latitude": 80.31618
      },
      {
        "longitude": -80.00992,
        "latitude": 80.31618
      },
      {
        "longitude": -77.72036,
        "latitude": 80.31618
      },
      {
        "longitude": -75.43079,
        "latitude": 80.31618
      },
      {
        "longitude": -73.14123,
        "latitude": 80.31618
      },
      {
        "longitude": -70.85167,
        "latitude": 80.31618
      },
      {
        "longitude": -96.03684,
        "latitude": 79.92337
      },
      {
        "longitude": -93.74728,
        "latitude": 79.92337
      },
      {
        "longitude": -91.45772,
        "latitude": 79.92337
      },
      {
        "longitude": -89.16816,
        "latitude": 79.92337
      },
      {
        "longitude": -84.58904,
        "latitude": 79.92337
      },
      {
        "longitude": -82.29948,
        "latitude": 79.92337
      },
      {
        "longitude": -80.00992,
        "latitude": 79.92337
      },
      {
        "longitude": -77.72036,
        "latitude": 79.92337
      },
      {
        "longitude": -75.43079,
        "latitude": 79.92337
      },
      {
        "longitude": -73.14123,
        "latitude": 79.92337
      },
      {
        "longitude": -93.74728,
        "latitude": 79.51479
      },
      {
        "longitude": -91.45772,
        "latitude": 79.51479
      },
      {
        "longitude": -89.16816,
        "latitude": 79.51479
      },
      {
        "longitude": -86.8786,
        "latitude": 79.51479
      },
      {
        "longitude": -84.58904,
        "latitude": 79.51479
      },
      {
        "longitude": -82.29948,
        "latitude": 79.51479
      },
      {
        "longitude": -80.00992,
        "latitude": 79.51479
      },
      {
        "longitude": -77.72036,
        "latitude": 79.51479
      },
      {
        "longitude": -75.43079,
        "latitude": 79.51479
      },
      {
        "longitude": -105.19509,
        "latitude": 79.08985
      },
      {
        "longitude": -102.90553,
        "latitude": 79.08985
      },
      {
        "longitude": -93.74728,
        "latitude": 79.08985
      },
      {
        "longitude": -91.45772,
        "latitude": 79.08985
      },
      {
        "longitude": -89.16816,
        "latitude": 79.08985
      },
      {
        "longitude": -86.8786,
        "latitude": 79.08985
      },
      {
        "longitude": -84.58904,
        "latitude": 79.08985
      },
      {
        "longitude": -82.29948,
        "latitude": 79.08985
      },
      {
        "longitude": -80.00992,
        "latitude": 79.08985
      },
      {
        "longitude": -77.72036,
        "latitude": 79.08985
      },
      {
        "longitude": -112.06377,
        "latitude": 78.64789
      },
      {
        "longitude": -102.90553,
        "latitude": 78.64789
      },
      {
        "longitude": -100.61596,
        "latitude": 78.64789
      },
      {
        "longitude": -91.45772,
        "latitude": 78.64789
      },
      {
        "longitude": -89.16816,
        "latitude": 78.64789
      },
      {
        "longitude": -86.8786,
        "latitude": 78.64789
      },
      {
        "longitude": -84.58904,
        "latitude": 78.64789
      },
      {
        "longitude": -82.29948,
        "latitude": 78.64789
      },
      {
        "longitude": -80.00992,
        "latitude": 78.64789
      },
      {
        "longitude": -77.72036,
        "latitude": 78.64789
      },
      {
        "longitude": -75.43079,
        "latitude": 78.64789
      },
      {
        "longitude": -100.61596,
        "latitude": 78.18828
      },
      {
        "longitude": -96.03684,
        "latitude": 78.18828
      },
      {
        "longitude": -86.8786,
        "latitude": 78.18828
      },
      {
        "longitude": -84.58904,
        "latitude": 78.18828
      },
      {
        "longitude": -82.29948,
        "latitude": 78.18828
      },
      {
        "longitude": -80.00992,
        "latitude": 78.18828
      },
      {
        "longitude": -77.72036,
        "latitude": 78.18828
      },
      {
        "longitude": -112.06377,
        "latitude": 77.71033
      },
      {
        "longitude": -96.03684,
        "latitude": 77.71033
      },
      {
        "longitude": -93.74728,
        "latitude": 77.71033
      },
      {
        "longitude": -86.8786,
        "latitude": 77.71033
      },
      {
        "longitude": -84.58904,
        "latitude": 77.71033
      },
      {
        "longitude": -82.29948,
        "latitude": 77.71033
      },
      {
        "longitude": -80.00992,
        "latitude": 77.71033
      },
      {
        "longitude": -118.93245,
        "latitude": 77.21336
      },
      {
        "longitude": -116.64289,
        "latitude": 77.21336
      },
      {
        "longitude": -86.8786,
        "latitude": 77.21336
      },
      {
        "longitude": -84.58904,
        "latitude": 77.21336
      },
      {
        "longitude": -82.29948,
        "latitude": 77.21336
      },
      {
        "longitude": -80.00992,
        "latitude": 77.21336
      },
      {
        "longitude": -121.22201,
        "latitude": 76.69664
      },
      {
        "longitude": -118.93245,
        "latitude": 76.69664
      },
      {
        "longitude": -116.64289,
        "latitude": 76.69664
      },
      {
        "longitude": -96.03684,
        "latitude": 76.69664
      },
      {
        "longitude": -93.74728,
        "latitude": 76.69664
      },
      {
        "longitude": -91.45772,
        "latitude": 76.69664
      },
      {
        "longitude": -89.16816,
        "latitude": 76.69664
      },
      {
        "longitude": -86.8786,
        "latitude": 76.69664
      },
      {
        "longitude": -84.58904,
        "latitude": 76.69664
      },
      {
        "longitude": -82.29948,
        "latitude": 76.69664
      },
      {
        "longitude": -80.00992,
        "latitude": 76.69664
      },
      {
        "longitude": -121.22201,
        "latitude": 76.15942
      },
      {
        "longitude": -116.64289,
        "latitude": 76.15942
      },
      {
        "longitude": -114.35333,
        "latitude": 76.15942
      },
      {
        "longitude": -109.77421,
        "latitude": 76.15942
      },
      {
        "longitude": -102.90553,
        "latitude": 76.15942
      },
      {
        "longitude": -100.61596,
        "latitude": 76.15942
      },
      {
        "longitude": -98.3264,
        "latitude": 76.15942
      },
      {
        "longitude": -91.45772,
        "latitude": 76.15942
      },
      {
        "longitude": -116.64289,
        "latitude": 75.60095
      },
      {
        "longitude": -114.35333,
        "latitude": 75.60095
      },
      {
        "longitude": -112.06377,
        "latitude": 75.60095
      },
      {
        "longitude": -109.77421,
        "latitude": 75.60095
      },
      {
        "longitude": -107.48465,
        "latitude": 75.60095
      },
      {
        "longitude": -100.61596,
        "latitude": 75.60095
      },
      {
        "longitude": -98.3264,
        "latitude": 75.60095
      },
      {
        "longitude": -96.03684,
        "latitude": 75.60095
      },
      {
        "longitude": -91.45772,
        "latitude": 75.60095
      },
      {
        "longitude": -89.16816,
        "latitude": 75.60095
      },
      {
        "longitude": -86.8786,
        "latitude": 75.60095
      },
      {
        "longitude": -84.58904,
        "latitude": 75.60095
      },
      {
        "longitude": -82.29948,
        "latitude": 75.60095
      },
      {
        "longitude": -114.35333,
        "latitude": 75.02045
      },
      {
        "longitude": -112.06377,
        "latitude": 75.02045
      },
      {
        "longitude": -109.77421,
        "latitude": 75.02045
      },
      {
        "longitude": -107.48465,
        "latitude": 75.02045
      },
      {
        "longitude": -96.03684,
        "latitude": 75.02045
      },
      {
        "longitude": -93.74728,
        "latitude": 75.02045
      },
      {
        "longitude": -91.45772,
        "latitude": 75.02045
      },
      {
        "longitude": -89.16816,
        "latitude": 75.02045
      },
      {
        "longitude": -86.8786,
        "latitude": 75.02045
      },
      {
        "longitude": -84.58904,
        "latitude": 75.02045
      },
      {
        "longitude": -82.29948,
        "latitude": 75.02045
      },
      {
        "longitude": -80.00992,
        "latitude": 75.02045
      },
      {
        "longitude": -123.51157,
        "latitude": 74.4171
      },
      {
        "longitude": -121.22201,
        "latitude": 74.4171
      },
      {
        "longitude": -123.51157,
        "latitude": 73.79007
      },
      {
        "longitude": -121.22201,
        "latitude": 73.79007
      },
      {
        "longitude": -118.93245,
        "latitude": 73.79007
      },
      {
        "longitude": -116.64289,
        "latitude": 73.79007
      },
      {
        "longitude": -100.61596,
        "latitude": 73.79007
      },
      {
        "longitude": -98.3264,
        "latitude": 73.79007
      },
      {
        "longitude": -96.03684,
        "latitude": 73.79007
      },
      {
        "longitude": -93.74728,
        "latitude": 73.79007
      },
      {
        "longitude": -91.45772,
        "latitude": 73.79007
      },
      {
        "longitude": -86.8786,
        "latitude": 73.79007
      },
      {
        "longitude": -82.29948,
        "latitude": 73.79007
      },
      {
        "longitude": -80.00992,
        "latitude": 73.79007
      },
      {
        "longitude": -123.51157,
        "latitude": 73.13851
      },
      {
        "longitude": -121.22201,
        "latitude": 73.13851
      },
      {
        "longitude": -118.93245,
        "latitude": 73.13851
      },
      {
        "longitude": -116.64289,
        "latitude": 73.13851
      },
      {
        "longitude": -107.48465,
        "latitude": 73.13851
      },
      {
        "longitude": -105.19509,
        "latitude": 73.13851
      },
      {
        "longitude": -100.61596,
        "latitude": 73.13851
      },
      {
        "longitude": -98.3264,
        "latitude": 73.13851
      },
      {
        "longitude": -93.74728,
        "latitude": 73.13851
      },
      {
        "longitude": -89.16816,
        "latitude": 73.13851
      },
      {
        "longitude": -86.8786,
        "latitude": 73.13851
      },
      {
        "longitude": -84.58904,
        "latitude": 73.13851
      },
      {
        "longitude": -82.29948,
        "latitude": 73.13851
      },
      {
        "longitude": -80.00992,
        "latitude": 73.13851
      },
      {
        "longitude": -77.72036,
        "latitude": 73.13851
      },
      {
        "longitude": -125.80113,
        "latitude": 72.46156
      },
      {
        "longitude": -123.51157,
        "latitude": 72.46156
      },
      {
        "longitude": -121.22201,
        "latitude": 72.46156
      },
      {
        "longitude": -116.64289,
        "latitude": 72.46156
      },
      {
        "longitude": -114.35333,
        "latitude": 72.46156
      },
      {
        "longitude": -112.06377,
        "latitude": 72.46156
      },
      {
        "longitude": -109.77421,
        "latitude": 72.46156
      },
      {
        "longitude": -107.48465,
        "latitude": 72.46156
      },
      {
        "longitude": -105.19509,
        "latitude": 72.46156
      },
      {
        "longitude": -100.61596,
        "latitude": 72.46156
      },
      {
        "longitude": -98.3264,
        "latitude": 72.46156
      },
      {
        "longitude": -89.16816,
        "latitude": 72.46156
      },
      {
        "longitude": -86.8786,
        "latitude": 72.46156
      },
      {
        "longitude": -84.58904,
        "latitude": 72.46156
      },
      {
        "longitude": -82.29948,
        "latitude": 72.46156
      },
      {
        "longitude": -80.00992,
        "latitude": 72.46156
      },
      {
        "longitude": -77.72036,
        "latitude": 72.46156
      },
      {
        "longitude": -75.43079,
        "latitude": 72.46156
      },
      {
        "longitude": -123.51157,
        "latitude": 71.75831
      },
      {
        "longitude": -121.22201,
        "latitude": 71.75831
      },
      {
        "longitude": -118.93245,
        "latitude": 71.75831
      },
      {
        "longitude": -116.64289,
        "latitude": 71.75831
      },
      {
        "longitude": -114.35333,
        "latitude": 71.75831
      },
      {
        "longitude": -112.06377,
        "latitude": 71.75831
      },
      {
        "longitude": -109.77421,
        "latitude": 71.75831
      },
      {
        "longitude": -107.48465,
        "latitude": 71.75831
      },
      {
        "longitude": -105.19509,
        "latitude": 71.75831
      },
      {
        "longitude": -98.3264,
        "latitude": 71.75831
      },
      {
        "longitude": -96.03684,
        "latitude": 71.75831
      },
      {
        "longitude": -89.16816,
        "latitude": 71.75831
      },
      {
        "longitude": -86.8786,
        "latitude": 71.75831
      },
      {
        "longitude": -84.58904,
        "latitude": 71.75831
      },
      {
        "longitude": -82.29948,
        "latitude": 71.75831
      },
      {
        "longitude": -80.00992,
        "latitude": 71.75831
      },
      {
        "longitude": -77.72036,
        "latitude": 71.75831
      },
      {
        "longitude": -75.43079,
        "latitude": 71.75831
      },
      {
        "longitude": -73.14123,
        "latitude": 71.75831
      },
      {
        "longitude": -116.64289,
        "latitude": 71.02787
      },
      {
        "longitude": -114.35333,
        "latitude": 71.02787
      },
      {
        "longitude": -112.06377,
        "latitude": 71.02787
      },
      {
        "longitude": -109.77421,
        "latitude": 71.02787
      },
      {
        "longitude": -107.48465,
        "latitude": 71.02787
      },
      {
        "longitude": -105.19509,
        "latitude": 71.02787
      },
      {
        "longitude": -96.03684,
        "latitude": 71.02787
      },
      {
        "longitude": -93.74728,
        "latitude": 71.02787
      },
      {
        "longitude": -89.16816,
        "latitude": 71.02787
      },
      {
        "longitude": -86.8786,
        "latitude": 71.02787
      },
      {
        "longitude": -84.58904,
        "latitude": 71.02787
      },
      {
        "longitude": -82.29948,
        "latitude": 71.02787
      },
      {
        "longitude": -80.00992,
        "latitude": 71.02787
      },
      {
        "longitude": -77.72036,
        "latitude": 71.02787
      },
      {
        "longitude": -75.43079,
        "latitude": 71.02787
      },
      {
        "longitude": -73.14123,
        "latitude": 71.02787
      },
      {
        "longitude": -70.85167,
        "latitude": 71.02787
      },
      {
        "longitude": -128.09069,
        "latitude": 70.26929
      },
      {
        "longitude": -116.64289,
        "latitude": 70.26929
      },
      {
        "longitude": -114.35333,
        "latitude": 70.26929
      },
      {
        "longitude": -112.06377,
        "latitude": 70.26929
      },
      {
        "longitude": -109.77421,
        "latitude": 70.26929
      },
      {
        "longitude": -107.48465,
        "latitude": 70.26929
      },
      {
        "longitude": -105.19509,
        "latitude": 70.26929
      },
      {
        "longitude": -102.90553,
        "latitude": 70.26929
      },
      {
        "longitude": -96.03684,
        "latitude": 70.26929
      },
      {
        "longitude": -93.74728,
        "latitude": 70.26929
      },
      {
        "longitude": -84.58904,
        "latitude": 70.26929
      },
      {
        "longitude": -82.29948,
        "latitude": 70.26929
      },
      {
        "longitude": -80.00992,
        "latitude": 70.26929
      },
      {
        "longitude": -77.72036,
        "latitude": 70.26929
      },
      {
        "longitude": -75.43079,
        "latitude": 70.26929
      },
      {
        "longitude": -73.14123,
        "latitude": 70.26929
      },
      {
        "longitude": -70.85167,
        "latitude": 70.26929
      },
      {
        "longitude": -68.56211,
        "latitude": 70.26929
      },
      {
        "longitude": -139.5385,
        "latitude": 69.48164
      },
      {
        "longitude": -134.95938,
        "latitude": 69.48164
      },
      {
        "longitude": -132.66982,
        "latitude": 69.48164
      },
      {
        "longitude": -130.38026,
        "latitude": 69.48164
      },
      {
        "longitude": -128.09069,
        "latitude": 69.48164
      },
      {
        "longitude": -125.80113,
        "latitude": 69.48164
      },
      {
        "longitude": -123.51157,
        "latitude": 69.48164
      },
      {
        "longitude": -121.22201,
        "latitude": 69.48164
      },
      {
        "longitude": -116.64289,
        "latitude": 69.48164
      },
      {
        "longitude": -114.35333,
        "latitude": 69.48164
      },
      {
        "longitude": -112.06377,
        "latitude": 69.48164
      },
      {
        "longitude": -109.77421,
        "latitude": 69.48164
      },
      {
        "longitude": -107.48465,
        "latitude": 69.48164
      },
      {
        "longitude": -105.19509,
        "latitude": 69.48164
      },
      {
        "longitude": -102.90553,
        "latitude": 69.48164
      },
      {
        "longitude": -98.3264,
        "latitude": 69.48164
      },
      {
        "longitude": -93.74728,
        "latitude": 69.48164
      },
      {
        "longitude": -91.45772,
        "latitude": 69.48164
      },
      {
        "longitude": -84.58904,
        "latitude": 69.48164
      },
      {
        "longitude": -82.29948,
        "latitude": 69.48164
      },
      {
        "longitude": -75.43079,
        "latitude": 69.48164
      },
      {
        "longitude": -73.14123,
        "latitude": 69.48164
      },
      {
        "longitude": -70.85167,
        "latitude": 69.48164
      },
      {
        "longitude": -68.56211,
        "latitude": 69.48164
      },
      {
        "longitude": -139.5385,
        "latitude": 68.66395
      },
      {
        "longitude": -137.24894,
        "latitude": 68.66395
      },
      {
        "longitude": -134.95938,
        "latitude": 68.66395
      },
      {
        "longitude": -132.66982,
        "latitude": 68.66395
      },
      {
        "longitude": -130.38026,
        "latitude": 68.66395
      },
      {
        "longitude": -128.09069,
        "latitude": 68.66395
      },
      {
        "longitude": -125.80113,
        "latitude": 68.66395
      },
      {
        "longitude": -123.51157,
        "latitude": 68.66395
      },
      {
        "longitude": -121.22201,
        "latitude": 68.66395
      },
      {
        "longitude": -118.93245,
        "latitude": 68.66395
      },
      {
        "longitude": -116.64289,
        "latitude": 68.66395
      },
      {
        "longitude": -112.06377,
        "latitude": 68.66395
      },
      {
        "longitude": -107.48465,
        "latitude": 68.66395
      },
      {
        "longitude": -98.3264,
        "latitude": 68.66395
      },
      {
        "longitude": -93.74728,
        "latitude": 68.66395
      },
      {
        "longitude": -91.45772,
        "latitude": 68.66395
      },
      {
        "longitude": -89.16816,
        "latitude": 68.66395
      },
      {
        "longitude": -84.58904,
        "latitude": 68.66395
      },
      {
        "longitude": -82.29948,
        "latitude": 68.66395
      },
      {
        "longitude": -73.14123,
        "latitude": 68.66395
      },
      {
        "longitude": -70.85167,
        "latitude": 68.66395
      },
      {
        "longitude": -68.56211,
        "latitude": 68.66395
      },
      {
        "longitude": -139.5385,
        "latitude": 67.81526
      },
      {
        "longitude": -137.24894,
        "latitude": 67.81526
      },
      {
        "longitude": -134.95938,
        "latitude": 67.81526
      },
      {
        "longitude": -132.66982,
        "latitude": 67.81526
      },
      {
        "longitude": -130.38026,
        "latitude": 67.81526
      },
      {
        "longitude": -128.09069,
        "latitude": 67.81526
      },
      {
        "longitude": -125.80113,
        "latitude": 67.81526
      },
      {
        "longitude": -123.51157,
        "latitude": 67.81526
      },
      {
        "longitude": -121.22201,
        "latitude": 67.81526
      },
      {
        "longitude": -118.93245,
        "latitude": 67.81526
      },
      {
        "longitude": -116.64289,
        "latitude": 67.81526
      },
      {
        "longitude": -114.35333,
        "latitude": 67.81526
      },
      {
        "longitude": -112.06377,
        "latitude": 67.81526
      },
      {
        "longitude": -109.77421,
        "latitude": 67.81526
      },
      {
        "longitude": -107.48465,
        "latitude": 67.81526
      },
      {
        "longitude": -105.19509,
        "latitude": 67.81526
      },
      {
        "longitude": -102.90553,
        "latitude": 67.81526
      },
      {
        "longitude": -100.61596,
        "latitude": 67.81526
      },
      {
        "longitude": -98.3264,
        "latitude": 67.81526
      },
      {
        "longitude": -96.03684,
        "latitude": 67.81526
      },
      {
        "longitude": -93.74728,
        "latitude": 67.81526
      },
      {
        "longitude": -91.45772,
        "latitude": 67.81526
      },
      {
        "longitude": -89.16816,
        "latitude": 67.81526
      },
      {
        "longitude": -84.58904,
        "latitude": 67.81526
      },
      {
        "longitude": -82.29948,
        "latitude": 67.81526
      },
      {
        "longitude": -75.43079,
        "latitude": 67.81526
      },
      {
        "longitude": -73.14123,
        "latitude": 67.81526
      },
      {
        "longitude": -70.85167,
        "latitude": 67.81526
      },
      {
        "longitude": -68.56211,
        "latitude": 67.81526
      },
      {
        "longitude": -66.27255,
        "latitude": 67.81526
      },
      {
        "longitude": -139.5385,
        "latitude": 66.93457
      },
      {
        "longitude": -137.24894,
        "latitude": 66.93457
      },
      {
        "longitude": -134.95938,
        "latitude": 66.93457
      },
      {
        "longitude": -132.66982,
        "latitude": 66.93457
      },
      {
        "longitude": -130.38026,
        "latitude": 66.93457
      },
      {
        "longitude": -128.09069,
        "latitude": 66.93457
      },
      {
        "longitude": -125.80113,
        "latitude": 66.93457
      },
      {
        "longitude": -123.51157,
        "latitude": 66.93457
      },
      {
        "longitude": -121.22201,
        "latitude": 66.93457
      },
      {
        "longitude": -118.93245,
        "latitude": 66.93457
      },
      {
        "longitude": -116.64289,
        "latitude": 66.93457
      },
      {
        "longitude": -114.35333,
        "latitude": 66.93457
      },
      {
        "longitude": -112.06377,
        "latitude": 66.93457
      },
      {
        "longitude": -109.77421,
        "latitude": 66.93457
      },
      {
        "longitude": -107.48465,
        "latitude": 66.93457
      },
      {
        "longitude": -105.19509,
        "latitude": 66.93457
      },
      {
        "longitude": -102.90553,
        "latitude": 66.93457
      },
      {
        "longitude": -100.61596,
        "latitude": 66.93457
      },
      {
        "longitude": -98.3264,
        "latitude": 66.93457
      },
      {
        "longitude": -96.03684,
        "latitude": 66.93457
      },
      {
        "longitude": -93.74728,
        "latitude": 66.93457
      },
      {
        "longitude": -91.45772,
        "latitude": 66.93457
      },
      {
        "longitude": -89.16816,
        "latitude": 66.93457
      },
      {
        "longitude": -86.8786,
        "latitude": 66.93457
      },
      {
        "longitude": -84.58904,
        "latitude": 66.93457
      },
      {
        "longitude": -82.29948,
        "latitude": 66.93457
      },
      {
        "longitude": -73.14123,
        "latitude": 66.93457
      },
      {
        "longitude": -70.85167,
        "latitude": 66.93457
      },
      {
        "longitude": -68.56211,
        "latitude": 66.93457
      },
      {
        "longitude": -66.27255,
        "latitude": 66.93457
      },
      {
        "longitude": -63.98299,
        "latitude": 66.93457
      },
      {
        "longitude": -61.69343,
        "latitude": 66.93457
      },
      {
        "longitude": -139.5385,
        "latitude": 66.02091
      },
      {
        "longitude": -137.24894,
        "latitude": 66.02091
      },
      {
        "longitude": -134.95938,
        "latitude": 66.02091
      },
      {
        "longitude": -132.66982,
        "latitude": 66.02091
      },
      {
        "longitude": -130.38026,
        "latitude": 66.02091
      },
      {
        "longitude": -128.09069,
        "latitude": 66.02091
      },
      {
        "longitude": -125.80113,
        "latitude": 66.02091
      },
      {
        "longitude": -123.51157,
        "latitude": 66.02091
      },
      {
        "longitude": -121.22201,
        "latitude": 66.02091
      },
      {
        "longitude": -118.93245,
        "latitude": 66.02091
      },
      {
        "longitude": -116.64289,
        "latitude": 66.02091
      },
      {
        "longitude": -114.35333,
        "latitude": 66.02091
      },
      {
        "longitude": -112.06377,
        "latitude": 66.02091
      },
      {
        "longitude": -109.77421,
        "latitude": 66.02091
      },
      {
        "longitude": -107.48465,
        "latitude": 66.02091
      },
      {
        "longitude": -105.19509,
        "latitude": 66.02091
      },
      {
        "longitude": -102.90553,
        "latitude": 66.02091
      },
      {
        "longitude": -100.61596,
        "latitude": 66.02091
      },
      {
        "longitude": -98.3264,
        "latitude": 66.02091
      },
      {
        "longitude": -96.03684,
        "latitude": 66.02091
      },
      {
        "longitude": -93.74728,
        "latitude": 66.02091
      },
      {
        "longitude": -91.45772,
        "latitude": 66.02091
      },
      {
        "longitude": -89.16816,
        "latitude": 66.02091
      },
      {
        "longitude": -86.8786,
        "latitude": 66.02091
      },
      {
        "longitude": -73.14123,
        "latitude": 66.02091
      },
      {
        "longitude": -70.85167,
        "latitude": 66.02091
      },
      {
        "longitude": -68.56211,
        "latitude": 66.02091
      },
      {
        "longitude": -63.98299,
        "latitude": 66.02091
      },
      {
        "longitude": -139.5385,
        "latitude": 65.07327
      },
      {
        "longitude": -137.24894,
        "latitude": 65.07327
      },
      {
        "longitude": -134.95938,
        "latitude": 65.07327
      },
      {
        "longitude": -132.66982,
        "latitude": 65.07327
      },
      {
        "longitude": -130.38026,
        "latitude": 65.07327
      },
      {
        "longitude": -128.09069,
        "latitude": 65.07327
      },
      {
        "longitude": -125.80113,
        "latitude": 65.07327
      },
      {
        "longitude": -123.51157,
        "latitude": 65.07327
      },
      {
        "longitude": -121.22201,
        "latitude": 65.07327
      },
      {
        "longitude": -118.93245,
        "latitude": 65.07327
      },
      {
        "longitude": -116.64289,
        "latitude": 65.07327
      },
      {
        "longitude": -114.35333,
        "latitude": 65.07327
      },
      {
        "longitude": -112.06377,
        "latitude": 65.07327
      },
      {
        "longitude": -109.77421,
        "latitude": 65.07327
      },
      {
        "longitude": -107.48465,
        "latitude": 65.07327
      },
      {
        "longitude": -105.19509,
        "latitude": 65.07327
      },
      {
        "longitude": -102.90553,
        "latitude": 65.07327
      },
      {
        "longitude": -100.61596,
        "latitude": 65.07327
      },
      {
        "longitude": -98.3264,
        "latitude": 65.07327
      },
      {
        "longitude": -96.03684,
        "latitude": 65.07327
      },
      {
        "longitude": -93.74728,
        "latitude": 65.07327
      },
      {
        "longitude": -91.45772,
        "latitude": 65.07327
      },
      {
        "longitude": -89.16816,
        "latitude": 65.07327
      },
      {
        "longitude": -84.58904,
        "latitude": 65.07327
      },
      {
        "longitude": -77.72036,
        "latitude": 65.07327
      },
      {
        "longitude": -75.43079,
        "latitude": 65.07327
      },
      {
        "longitude": -73.14123,
        "latitude": 65.07327
      },
      {
        "longitude": -70.85167,
        "latitude": 65.07327
      },
      {
        "longitude": -68.56211,
        "latitude": 65.07327
      },
      {
        "longitude": -139.5385,
        "latitude": 64.09067
      },
      {
        "longitude": -137.24894,
        "latitude": 64.09067
      },
      {
        "longitude": -134.95938,
        "latitude": 64.09067
      },
      {
        "longitude": -132.66982,
        "latitude": 64.09067
      },
      {
        "longitude": -130.38026,
        "latitude": 64.09067
      },
      {
        "longitude": -128.09069,
        "latitude": 64.09067
      },
      {
        "longitude": -125.80113,
        "latitude": 64.09067
      },
      {
        "longitude": -123.51157,
        "latitude": 64.09067
      },
      {
        "longitude": -121.22201,
        "latitude": 64.09067
      },
      {
        "longitude": -118.93245,
        "latitude": 64.09067
      },
      {
        "longitude": -116.64289,
        "latitude": 64.09067
      },
      {
        "longitude": -114.35333,
        "latitude": 64.09067
      },
      {
        "longitude": -112.06377,
        "latitude": 64.09067
      },
      {
        "longitude": -109.77421,
        "latitude": 64.09067
      },
      {
        "longitude": -107.48465,
        "latitude": 64.09067
      },
      {
        "longitude": -105.19509,
        "latitude": 64.09067
      },
      {
        "longitude": -102.90553,
        "latitude": 64.09067
      },
      {
        "longitude": -100.61596,
        "latitude": 64.09067
      },
      {
        "longitude": -98.3264,
        "latitude": 64.09067
      },
      {
        "longitude": -96.03684,
        "latitude": 64.09067
      },
      {
        "longitude": -93.74728,
        "latitude": 64.09067
      },
      {
        "longitude": -91.45772,
        "latitude": 64.09067
      },
      {
        "longitude": -89.16816,
        "latitude": 64.09067
      },
      {
        "longitude": -86.8786,
        "latitude": 64.09067
      },
      {
        "longitude": -84.58904,
        "latitude": 64.09067
      },
      {
        "longitude": -82.29948,
        "latitude": 64.09067
      },
      {
        "longitude": -73.14123,
        "latitude": 64.09067
      },
      {
        "longitude": -70.85167,
        "latitude": 64.09067
      },
      {
        "longitude": -68.56211,
        "latitude": 64.09067
      },
      {
        "longitude": -66.27255,
        "latitude": 64.09067
      },
      {
        "longitude": -139.5385,
        "latitude": 63.0721
      },
      {
        "longitude": -137.24894,
        "latitude": 63.0721
      },
      {
        "longitude": -134.95938,
        "latitude": 63.0721
      },
      {
        "longitude": -132.66982,
        "latitude": 63.0721
      },
      {
        "longitude": -130.38026,
        "latitude": 63.0721
      },
      {
        "longitude": -128.09069,
        "latitude": 63.0721
      },
      {
        "longitude": -125.80113,
        "latitude": 63.0721
      },
      {
        "longitude": -123.51157,
        "latitude": 63.0721
      },
      {
        "longitude": -121.22201,
        "latitude": 63.0721
      },
      {
        "longitude": -118.93245,
        "latitude": 63.0721
      },
      {
        "longitude": -116.64289,
        "latitude": 63.0721
      },
      {
        "longitude": -114.35333,
        "latitude": 63.0721
      },
      {
        "longitude": -112.06377,
        "latitude": 63.0721
      },
      {
        "longitude": -109.77421,
        "latitude": 63.0721
      },
      {
        "longitude": -107.48465,
        "latitude": 63.0721
      },
      {
        "longitude": -105.19509,
        "latitude": 63.0721
      },
      {
        "longitude": -102.90553,
        "latitude": 63.0721
      },
      {
        "longitude": -100.61596,
        "latitude": 63.0721
      },
      {
        "longitude": -98.3264,
        "latitude": 63.0721
      },
      {
        "longitude": -96.03684,
        "latitude": 63.0721
      },
      {
        "longitude": -93.74728,
        "latitude": 63.0721
      },
      {
        "longitude": -91.45772,
        "latitude": 63.0721
      },
      {
        "longitude": -82.29948,
        "latitude": 63.0721
      },
      {
        "longitude": -70.85167,
        "latitude": 63.0721
      },
      {
        "longitude": -68.56211,
        "latitude": 63.0721
      },
      {
        "longitude": -66.27255,
        "latitude": 63.0721
      },
      {
        "longitude": -139.5385,
        "latitude": 62.0166
      },
      {
        "longitude": -137.24894,
        "latitude": 62.0166
      },
      {
        "longitude": -134.95938,
        "latitude": 62.0166
      },
      {
        "longitude": -132.66982,
        "latitude": 62.0166
      },
      {
        "longitude": -130.38026,
        "latitude": 62.0166
      },
      {
        "longitude": -128.09069,
        "latitude": 62.0166
      },
      {
        "longitude": -125.80113,
        "latitude": 62.0166
      },
      {
        "longitude": -123.51157,
        "latitude": 62.0166
      },
      {
        "longitude": -121.22201,
        "latitude": 62.0166
      },
      {
        "longitude": -118.93245,
        "latitude": 62.0166
      },
      {
        "longitude": -116.64289,
        "latitude": 62.0166
      },
      {
        "longitude": -114.35333,
        "latitude": 62.0166
      },
      {
        "longitude": -112.06377,
        "latitude": 62.0166
      },
      {
        "longitude": -109.77421,
        "latitude": 62.0166
      },
      {
        "longitude": -107.48465,
        "latitude": 62.0166
      },
      {
        "longitude": -105.19509,
        "latitude": 62.0166
      },
      {
        "longitude": -102.90553,
        "latitude": 62.0166
      },
      {
        "longitude": -100.61596,
        "latitude": 62.0166
      },
      {
        "longitude": -98.3264,
        "latitude": 62.0166
      },
      {
        "longitude": -96.03684,
        "latitude": 62.0166
      },
      {
        "longitude": -93.74728,
        "latitude": 62.0166
      },
      {
        "longitude": -80.00992,
        "latitude": 62.0166
      },
      {
        "longitude": -77.72036,
        "latitude": 62.0166
      },
      {
        "longitude": -75.43079,
        "latitude": 62.0166
      },
      {
        "longitude": -73.14123,
        "latitude": 62.0166
      },
      {
        "longitude": -139.5385,
        "latitude": 60.92319
      },
      {
        "longitude": -137.24894,
        "latitude": 60.92319
      },
      {
        "longitude": -134.95938,
        "latitude": 60.92319
      },
      {
        "longitude": -132.66982,
        "latitude": 60.92319
      },
      {
        "longitude": -130.38026,
        "latitude": 60.92319
      },
      {
        "longitude": -128.09069,
        "latitude": 60.92319
      },
      {
        "longitude": -125.80113,
        "latitude": 60.92319
      },
      {
        "longitude": -123.51157,
        "latitude": 60.92319
      },
      {
        "longitude": -121.22201,
        "latitude": 60.92319
      },
      {
        "longitude": -118.93245,
        "latitude": 60.92319
      },
      {
        "longitude": -116.64289,
        "latitude": 60.92319
      },
      {
        "longitude": -114.35333,
        "latitude": 60.92319
      },
      {
        "longitude": -112.06377,
        "latitude": 60.92319
      },
      {
        "longitude": -109.77421,
        "latitude": 60.92319
      },
      {
        "longitude": -107.48465,
        "latitude": 60.92319
      },
      {
        "longitude": -105.19509,
        "latitude": 60.92319
      },
      {
        "longitude": -102.90553,
        "latitude": 60.92319
      },
      {
        "longitude": -100.61596,
        "latitude": 60.92319
      },
      {
        "longitude": -98.3264,
        "latitude": 60.92319
      },
      {
        "longitude": -96.03684,
        "latitude": 60.92319
      },
      {
        "longitude": -77.72036,
        "latitude": 60.92319
      },
      {
        "longitude": -75.43079,
        "latitude": 60.92319
      },
      {
        "longitude": -73.14123,
        "latitude": 60.92319
      },
      {
        "longitude": -70.85167,
        "latitude": 60.92319
      },
      {
        "longitude": -137.24894,
        "latitude": 59.79092
      },
      {
        "longitude": -134.95938,
        "latitude": 59.79092
      },
      {
        "longitude": -132.66982,
        "latitude": 59.79092
      },
      {
        "longitude": -130.38026,
        "latitude": 59.79092
      },
      {
        "longitude": -128.09069,
        "latitude": 59.79092
      },
      {
        "longitude": -125.80113,
        "latitude": 59.79092
      },
      {
        "longitude": -123.51157,
        "latitude": 59.79092
      },
      {
        "longitude": -121.22201,
        "latitude": 59.79092
      },
      {
        "longitude": -118.93245,
        "latitude": 59.79092
      },
      {
        "longitude": -116.64289,
        "latitude": 59.79092
      },
      {
        "longitude": -114.35333,
        "latitude": 59.79092
      },
      {
        "longitude": -112.06377,
        "latitude": 59.79092
      },
      {
        "longitude": -109.77421,
        "latitude": 59.79092
      },
      {
        "longitude": -107.48465,
        "latitude": 59.79092
      },
      {
        "longitude": -105.19509,
        "latitude": 59.79092
      },
      {
        "longitude": -102.90553,
        "latitude": 59.79092
      },
      {
        "longitude": -100.61596,
        "latitude": 59.79092
      },
      {
        "longitude": -98.3264,
        "latitude": 59.79092
      },
      {
        "longitude": -96.03684,
        "latitude": 59.79092
      },
      {
        "longitude": -77.72036,
        "latitude": 59.79092
      },
      {
        "longitude": -75.43079,
        "latitude": 59.79092
      },
      {
        "longitude": -73.14123,
        "latitude": 59.79092
      },
      {
        "longitude": -70.85167,
        "latitude": 59.79092
      },
      {
        "longitude": -63.98299,
        "latitude": 59.79092
      },
      {
        "longitude": -132.66982,
        "latitude": 58.61887
      },
      {
        "longitude": -130.38026,
        "latitude": 58.61887
      },
      {
        "longitude": -128.09069,
        "latitude": 58.61887
      },
      {
        "longitude": -125.80113,
        "latitude": 58.61887
      },
      {
        "longitude": -123.51157,
        "latitude": 58.61887
      },
      {
        "longitude": -121.22201,
        "latitude": 58.61887
      },
      {
        "longitude": -118.93245,
        "latitude": 58.61887
      },
      {
        "longitude": -116.64289,
        "latitude": 58.61887
      },
      {
        "longitude": -114.35333,
        "latitude": 58.61887
      },
      {
        "longitude": -112.06377,
        "latitude": 58.61887
      },
      {
        "longitude": -109.77421,
        "latitude": 58.61887
      },
      {
        "longitude": -107.48465,
        "latitude": 58.61887
      },
      {
        "longitude": -105.19509,
        "latitude": 58.61887
      },
      {
        "longitude": -102.90553,
        "latitude": 58.61887
      },
      {
        "longitude": -100.61596,
        "latitude": 58.61887
      },
      {
        "longitude": -98.3264,
        "latitude": 58.61887
      },
      {
        "longitude": -96.03684,
        "latitude": 58.61887
      },
      {
        "longitude": -93.74728,
        "latitude": 58.61887
      },
      {
        "longitude": -77.72036,
        "latitude": 58.61887
      },
      {
        "longitude": -75.43079,
        "latitude": 58.61887
      },
      {
        "longitude": -73.14123,
        "latitude": 58.61887
      },
      {
        "longitude": -70.85167,
        "latitude": 58.61887
      },
      {
        "longitude": -68.56211,
        "latitude": 58.61887
      },
      {
        "longitude": -66.27255,
        "latitude": 58.61887
      },
      {
        "longitude": -63.98299,
        "latitude": 58.61887
      },
      {
        "longitude": -130.38026,
        "latitude": 57.40615
      },
      {
        "longitude": -128.09069,
        "latitude": 57.40615
      },
      {
        "longitude": -125.80113,
        "latitude": 57.40615
      },
      {
        "longitude": -123.51157,
        "latitude": 57.40615
      },
      {
        "longitude": -121.22201,
        "latitude": 57.40615
      },
      {
        "longitude": -118.93245,
        "latitude": 57.40615
      },
      {
        "longitude": -116.64289,
        "latitude": 57.40615
      },
      {
        "longitude": -114.35333,
        "latitude": 57.40615
      },
      {
        "longitude": -112.06377,
        "latitude": 57.40615
      },
      {
        "longitude": -109.77421,
        "latitude": 57.40615
      },
      {
        "longitude": -107.48465,
        "latitude": 57.40615
      },
      {
        "longitude": -105.19509,
        "latitude": 57.40615
      },
      {
        "longitude": -102.90553,
        "latitude": 57.40615
      },
      {
        "longitude": -100.61596,
        "latitude": 57.40615
      },
      {
        "longitude": -98.3264,
        "latitude": 57.40615
      },
      {
        "longitude": -96.03684,
        "latitude": 57.40615
      },
      {
        "longitude": -93.74728,
        "latitude": 57.40615
      },
      {
        "longitude": -91.45772,
        "latitude": 57.40615
      },
      {
        "longitude": -75.43079,
        "latitude": 57.40615
      },
      {
        "longitude": -73.14123,
        "latitude": 57.40615
      },
      {
        "longitude": -70.85167,
        "latitude": 57.40615
      },
      {
        "longitude": -68.56211,
        "latitude": 57.40615
      },
      {
        "longitude": -66.27255,
        "latitude": 57.40615
      },
      {
        "longitude": -63.98299,
        "latitude": 57.40615
      },
      {
        "longitude": -61.69343,
        "latitude": 57.40615
      },
      {
        "longitude": -130.38026,
        "latitude": 56.15191
      },
      {
        "longitude": -128.09069,
        "latitude": 56.15191
      },
      {
        "longitude": -125.80113,
        "latitude": 56.15191
      },
      {
        "longitude": -123.51157,
        "latitude": 56.15191
      },
      {
        "longitude": -121.22201,
        "latitude": 56.15191
      },
      {
        "longitude": -118.93245,
        "latitude": 56.15191
      },
      {
        "longitude": -116.64289,
        "latitude": 56.15191
      },
      {
        "longitude": -114.35333,
        "latitude": 56.15191
      },
      {
        "longitude": -112.06377,
        "latitude": 56.15191
      },
      {
        "longitude": -109.77421,
        "latitude": 56.15191
      },
      {
        "longitude": -107.48465,
        "latitude": 56.15191
      },
      {
        "longitude": -105.19509,
        "latitude": 56.15191
      },
      {
        "longitude": -102.90553,
        "latitude": 56.15191
      },
      {
        "longitude": -100.61596,
        "latitude": 56.15191
      },
      {
        "longitude": -98.3264,
        "latitude": 56.15191
      },
      {
        "longitude": -96.03684,
        "latitude": 56.15191
      },
      {
        "longitude": -93.74728,
        "latitude": 56.15191
      },
      {
        "longitude": -91.45772,
        "latitude": 56.15191
      },
      {
        "longitude": -89.16816,
        "latitude": 56.15191
      },
      {
        "longitude": -80.00992,
        "latitude": 56.15191
      },
      {
        "longitude": -75.43079,
        "latitude": 56.15191
      },
      {
        "longitude": -73.14123,
        "latitude": 56.15191
      },
      {
        "longitude": -70.85167,
        "latitude": 56.15191
      },
      {
        "longitude": -68.56211,
        "latitude": 56.15191
      },
      {
        "longitude": -66.27255,
        "latitude": 56.15191
      },
      {
        "longitude": -63.98299,
        "latitude": 56.15191
      },
      {
        "longitude": -61.69343,
        "latitude": 56.15191
      },
      {
        "longitude": -130.38026,
        "latitude": 54.85535
      },
      {
        "longitude": -128.09069,
        "latitude": 54.85535
      },
      {
        "longitude": -125.80113,
        "latitude": 54.85535
      },
      {
        "longitude": -123.51157,
        "latitude": 54.85535
      },
      {
        "longitude": -121.22201,
        "latitude": 54.85535
      },
      {
        "longitude": -118.93245,
        "latitude": 54.85535
      },
      {
        "longitude": -116.64289,
        "latitude": 54.85535
      },
      {
        "longitude": -114.35333,
        "latitude": 54.85535
      },
      {
        "longitude": -112.06377,
        "latitude": 54.85535
      },
      {
        "longitude": -109.77421,
        "latitude": 54.85535
      },
      {
        "longitude": -107.48465,
        "latitude": 54.85535
      },
      {
        "longitude": -105.19509,
        "latitude": 54.85535
      },
      {
        "longitude": -102.90553,
        "latitude": 54.85535
      },
      {
        "longitude": -100.61596,
        "latitude": 54.85535
      },
      {
        "longitude": -98.3264,
        "latitude": 54.85535
      },
      {
        "longitude": -96.03684,
        "latitude": 54.85535
      },
      {
        "longitude": -93.74728,
        "latitude": 54.85535
      },
      {
        "longitude": -91.45772,
        "latitude": 54.85535
      },
      {
        "longitude": -89.16816,
        "latitude": 54.85535
      },
      {
        "longitude": -86.8786,
        "latitude": 54.85535
      },
      {
        "longitude": -84.58904,
        "latitude": 54.85535
      },
      {
        "longitude": -77.72036,
        "latitude": 54.85535
      },
      {
        "longitude": -75.43079,
        "latitude": 54.85535
      },
      {
        "longitude": -73.14123,
        "latitude": 54.85535
      },
      {
        "longitude": -70.85167,
        "latitude": 54.85535
      },
      {
        "longitude": -68.56211,
        "latitude": 54.85535
      },
      {
        "longitude": -66.27255,
        "latitude": 54.85535
      },
      {
        "longitude": -63.98299,
        "latitude": 54.85535
      },
      {
        "longitude": -61.69343,
        "latitude": 54.85535
      },
      {
        "longitude": -59.40387,
        "latitude": 54.85535
      },
      {
        "longitude": -132.66982,
        "latitude": 53.51573
      },
      {
        "longitude": -128.09069,
        "latitude": 53.51573
      },
      {
        "longitude": -125.80113,
        "latitude": 53.51573
      },
      {
        "longitude": -123.51157,
        "latitude": 53.51573
      },
      {
        "longitude": -121.22201,
        "latitude": 53.51573
      },
      {
        "longitude": -118.93245,
        "latitude": 53.51573
      },
      {
        "longitude": -116.64289,
        "latitude": 53.51573
      },
      {
        "longitude": -114.35333,
        "latitude": 53.51573
      },
      {
        "longitude": -112.06377,
        "latitude": 53.51573
      },
      {
        "longitude": -109.77421,
        "latitude": 53.51573
      },
      {
        "longitude": -107.48465,
        "latitude": 53.51573
      },
      {
        "longitude": -105.19509,
        "latitude": 53.51573
      },
      {
        "longitude": -102.90553,
        "latitude": 53.51573
      },
      {
        "longitude": -100.61596,
        "latitude": 53.51573
      },
      {
        "longitude": -98.3264,
        "latitude": 53.51573
      },
      {
        "longitude": -96.03684,
        "latitude": 53.51573
      },
      {
        "longitude": -93.74728,
        "latitude": 53.51573
      },
      {
        "longitude": -91.45772,
        "latitude": 53.51573
      },
      {
        "longitude": -89.16816,
        "latitude": 53.51573
      },
      {
        "longitude": -86.8786,
        "latitude": 53.51573
      },
      {
        "longitude": -84.58904,
        "latitude": 53.51573
      },
      {
        "longitude": -82.29948,
        "latitude": 53.51573
      },
      {
        "longitude": -77.72036,
        "latitude": 53.51573
      },
      {
        "longitude": -75.43079,
        "latitude": 53.51573
      },
      {
        "longitude": -73.14123,
        "latitude": 53.51573
      },
      {
        "longitude": -70.85167,
        "latitude": 53.51573
      },
      {
        "longitude": -68.56211,
        "latitude": 53.51573
      },
      {
        "longitude": -66.27255,
        "latitude": 53.51573
      },
      {
        "longitude": -63.98299,
        "latitude": 53.51573
      },
      {
        "longitude": -61.69343,
        "latitude": 53.51573
      },
      {
        "longitude": -59.40387,
        "latitude": 53.51573
      },
      {
        "longitude": -57.11431,
        "latitude": 53.51573
      },
      {
        "longitude": -128.09069,
        "latitude": 52.13238
      },
      {
        "longitude": -125.80113,
        "latitude": 52.13238
      },
      {
        "longitude": -123.51157,
        "latitude": 52.13238
      },
      {
        "longitude": -121.22201,
        "latitude": 52.13238
      },
      {
        "longitude": -118.93245,
        "latitude": 52.13238
      },
      {
        "longitude": -116.64289,
        "latitude": 52.13238
      },
      {
        "longitude": -114.35333,
        "latitude": 52.13238
      },
      {
        "longitude": -112.06377,
        "latitude": 52.13238
      },
      {
        "longitude": -109.77421,
        "latitude": 52.13238
      },
      {
        "longitude": -107.48465,
        "latitude": 52.13238
      },
      {
        "longitude": -105.19509,
        "latitude": 52.13238
      },
      {
        "longitude": -102.90553,
        "latitude": 52.13238
      },
      {
        "longitude": -100.61596,
        "latitude": 52.13238
      },
      {
        "longitude": -98.3264,
        "latitude": 52.13238
      },
      {
        "longitude": -96.03684,
        "latitude": 52.13238
      },
      {
        "longitude": -93.74728,
        "latitude": 52.13238
      },
      {
        "longitude": -91.45772,
        "latitude": 52.13238
      },
      {
        "longitude": -89.16816,
        "latitude": 52.13238
      },
      {
        "longitude": -86.8786,
        "latitude": 52.13238
      },
      {
        "longitude": -84.58904,
        "latitude": 52.13238
      },
      {
        "longitude": -82.29948,
        "latitude": 52.13238
      },
      {
        "longitude": -77.72036,
        "latitude": 52.13238
      },
      {
        "longitude": -75.43079,
        "latitude": 52.13238
      },
      {
        "longitude": -73.14123,
        "latitude": 52.13238
      },
      {
        "longitude": -70.85167,
        "latitude": 52.13238
      },
      {
        "longitude": -68.56211,
        "latitude": 52.13238
      },
      {
        "longitude": -66.27255,
        "latitude": 52.13238
      },
      {
        "longitude": -63.98299,
        "latitude": 52.13238
      },
      {
        "longitude": -61.69343,
        "latitude": 52.13238
      },
      {
        "longitude": -59.40387,
        "latitude": 52.13238
      },
      {
        "longitude": -57.11431,
        "latitude": 52.13238
      },
      {
        "longitude": -128.09069,
        "latitude": 50.70471
      },
      {
        "longitude": -125.80113,
        "latitude": 50.70471
      },
      {
        "longitude": -123.51157,
        "latitude": 50.70471
      },
      {
        "longitude": -121.22201,
        "latitude": 50.70471
      },
      {
        "longitude": -118.93245,
        "latitude": 50.70471
      },
      {
        "longitude": -116.64289,
        "latitude": 50.70471
      },
      {
        "longitude": -114.35333,
        "latitude": 50.70471
      },
      {
        "longitude": -112.06377,
        "latitude": 50.70471
      },
      {
        "longitude": -109.77421,
        "latitude": 50.70471
      },
      {
        "longitude": -107.48465,
        "latitude": 50.70471
      },
      {
        "longitude": -105.19509,
        "latitude": 50.70471
      },
      {
        "longitude": -102.90553,
        "latitude": 50.70471
      },
      {
        "longitude": -100.61596,
        "latitude": 50.70471
      },
      {
        "longitude": -98.3264,
        "latitude": 50.70471
      },
      {
        "longitude": -96.03684,
        "latitude": 50.70471
      },
      {
        "longitude": -93.74728,
        "latitude": 50.70471
      },
      {
        "longitude": -91.45772,
        "latitude": 50.70471
      },
      {
        "longitude": -89.16816,
        "latitude": 50.70471
      },
      {
        "longitude": -86.8786,
        "latitude": 50.70471
      },
      {
        "longitude": -84.58904,
        "latitude": 50.70471
      },
      {
        "longitude": -82.29948,
        "latitude": 50.70471
      },
      {
        "longitude": -80.00992,
        "latitude": 50.70471
      },
      {
        "longitude": -77.72036,
        "latitude": 50.70471
      },
      {
        "longitude": -75.43079,
        "latitude": 50.70471
      },
      {
        "longitude": -73.14123,
        "latitude": 50.70471
      },
      {
        "longitude": -70.85167,
        "latitude": 50.70471
      },
      {
        "longitude": -68.56211,
        "latitude": 50.70471
      },
      {
        "longitude": -66.27255,
        "latitude": 50.70471
      },
      {
        "longitude": -63.98299,
        "latitude": 50.70471
      },
      {
        "longitude": -61.69343,
        "latitude": 50.70471
      },
      {
        "longitude": -57.11431,
        "latitude": 50.70471
      },
      {
        "longitude": -125.80113,
        "latitude": 49.2322
      },
      {
        "longitude": -123.51157,
        "latitude": 49.2322
      },
      {
        "longitude": -121.22201,
        "latitude": 49.2322
      },
      {
        "longitude": -118.93245,
        "latitude": 49.2322
      },
      {
        "longitude": -116.64289,
        "latitude": 49.2322
      },
      {
        "longitude": -114.35333,
        "latitude": 49.2322
      },
      {
        "longitude": -112.06377,
        "latitude": 49.2322
      },
      {
        "longitude": -109.77421,
        "latitude": 49.2322
      },
      {
        "longitude": -107.48465,
        "latitude": 49.2322
      },
      {
        "longitude": -105.19509,
        "latitude": 49.2322
      },
      {
        "longitude": -102.90553,
        "latitude": 49.2322
      },
      {
        "longitude": -100.61596,
        "latitude": 49.2322
      },
      {
        "longitude": -98.3264,
        "latitude": 49.2322
      },
      {
        "longitude": -96.03684,
        "latitude": 49.2322
      },
      {
        "longitude": -93.74728,
        "latitude": 49.2322
      },
      {
        "longitude": -91.45772,
        "latitude": 49.2322
      },
      {
        "longitude": -89.16816,
        "latitude": 49.2322
      },
      {
        "longitude": -86.8786,
        "latitude": 49.2322
      },
      {
        "longitude": -84.58904,
        "latitude": 49.2322
      },
      {
        "longitude": -82.29948,
        "latitude": 49.2322
      },
      {
        "longitude": -80.00992,
        "latitude": 49.2322
      },
      {
        "longitude": -77.72036,
        "latitude": 49.2322
      },
      {
        "longitude": -75.43079,
        "latitude": 49.2322
      },
      {
        "longitude": -73.14123,
        "latitude": 49.2322
      },
      {
        "longitude": -70.85167,
        "latitude": 49.2322
      },
      {
        "longitude": -68.56211,
        "latitude": 49.2322
      },
      {
        "longitude": -66.27255,
        "latitude": 49.2322
      },
      {
        "longitude": -57.11431,
        "latitude": 49.2322
      },
      {
        "longitude": -54.82475,
        "latitude": 49.2322
      },
      {
        "longitude": -86.8786,
        "latitude": 47.71445
      },
      {
        "longitude": -84.58904,
        "latitude": 47.71445
      },
      {
        "longitude": -82.29948,
        "latitude": 47.71445
      },
      {
        "longitude": -80.00992,
        "latitude": 47.71445
      },
      {
        "longitude": -77.72036,
        "latitude": 47.71445
      },
      {
        "longitude": -75.43079,
        "latitude": 47.71445
      },
      {
        "longitude": -73.14123,
        "latitude": 47.71445
      },
      {
        "longitude": -70.85167,
        "latitude": 47.71445
      },
      {
        "longitude": -68.56211,
        "latitude": 47.71445
      },
      {
        "longitude": -66.27255,
        "latitude": 47.71445
      },
      {
        "longitude": -59.40387,
        "latitude": 47.71445
      },
      {
        "longitude": -57.11431,
        "latitude": 47.71445
      },
      {
        "longitude": -54.82475,
        "latitude": 47.71445
      },
      {
        "longitude": -82.29948,
        "latitude": 46.15117
      },
      {
        "longitude": -80.00992,
        "latitude": 46.15117
      },
      {
        "longitude": -77.72036,
        "latitude": 46.15117
      },
      {
        "longitude": -75.43079,
        "latitude": 46.15117
      },
      {
        "longitude": -73.14123,
        "latitude": 46.15117
      },
      {
        "longitude": -70.85167,
        "latitude": 46.15117
      },
      {
        "longitude": -66.27255,
        "latitude": 46.15117
      },
      {
        "longitude": -63.98299,
        "latitude": 46.15117
      },
      {
        "longitude": -61.69343,
        "latitude": 46.15117
      },
      {
        "longitude": -82.29948,
        "latitude": 44.54219
      },
      {
        "longitude": -80.00992,
        "latitude": 44.54219
      },
      {
        "longitude": -77.72036,
        "latitude": 44.54219
      },
      {
        "longitude": -66.27255,
        "latitude": 44.54219
      },
      {
        "longitude": -82.29948,
        "latitude": 42.88748
      },
      {
        "longitude": -80.00992,
        "latitude": 42.88748
      }
    ],
    "editor.pixelCountrySeries.RU": [
      {
        "longitude": 55.07418,
        "latitude": 81.05686
      },
      {
        "longitude": 93.99671,
        "latitude": 81.05686
      },
      {
        "longitude": 96.28627,
        "latitude": 81.05686
      },
      {
        "longitude": 55.07418,
        "latitude": 80.69382
      },
      {
        "longitude": 59.6533,
        "latitude": 80.69382
      },
      {
        "longitude": 93.99671,
        "latitude": 80.69382
      },
      {
        "longitude": 96.28627,
        "latitude": 80.69382
      },
      {
        "longitude": 91.70715,
        "latitude": 80.31618
      },
      {
        "longitude": 93.99671,
        "latitude": 80.31618
      },
      {
        "longitude": 96.28627,
        "latitude": 80.31618
      },
      {
        "longitude": 93.99671,
        "latitude": 79.92337
      },
      {
        "longitude": 96.28627,
        "latitude": 79.92337
      },
      {
        "longitude": 98.57583,
        "latitude": 79.92337
      },
      {
        "longitude": 93.99671,
        "latitude": 79.51479
      },
      {
        "longitude": 96.28627,
        "latitude": 79.51479
      },
      {
        "longitude": 98.57583,
        "latitude": 79.51479
      },
      {
        "longitude": 96.28627,
        "latitude": 79.08985
      },
      {
        "longitude": 98.57583,
        "latitude": 79.08985
      },
      {
        "longitude": 100.86539,
        "latitude": 79.08985
      },
      {
        "longitude": 103.15495,
        "latitude": 79.08985
      },
      {
        "longitude": 100.86539,
        "latitude": 78.64789
      },
      {
        "longitude": 103.15495,
        "latitude": 78.64789
      },
      {
        "longitude": 103.15495,
        "latitude": 77.71033
      },
      {
        "longitude": 103.15495,
        "latitude": 77.21336
      },
      {
        "longitude": 66.52198,
        "latitude": 76.69664
      },
      {
        "longitude": 100.86539,
        "latitude": 76.69664
      },
      {
        "longitude": 103.15495,
        "latitude": 76.69664
      },
      {
        "longitude": 105.44451,
        "latitude": 76.69664
      },
      {
        "longitude": 107.73408,
        "latitude": 76.69664
      },
      {
        "longitude": 110.02364,
        "latitude": 76.69664
      },
      {
        "longitude": 61.94286,
        "latitude": 76.15942
      },
      {
        "longitude": 64.23242,
        "latitude": 76.15942
      },
      {
        "longitude": 66.52198,
        "latitude": 76.15942
      },
      {
        "longitude": 93.99671,
        "latitude": 76.15942
      },
      {
        "longitude": 98.57583,
        "latitude": 76.15942
      },
      {
        "longitude": 100.86539,
        "latitude": 76.15942
      },
      {
        "longitude": 103.15495,
        "latitude": 76.15942
      },
      {
        "longitude": 105.44451,
        "latitude": 76.15942
      },
      {
        "longitude": 107.73408,
        "latitude": 76.15942
      },
      {
        "longitude": 110.02364,
        "latitude": 76.15942
      },
      {
        "longitude": 112.3132,
        "latitude": 76.15942
      },
      {
        "longitude": 57.36374,
        "latitude": 75.60095
      },
      {
        "longitude": 59.6533,
        "latitude": 75.60095
      },
      {
        "longitude": 61.94286,
        "latitude": 75.60095
      },
      {
        "longitude": 89.41759,
        "latitude": 75.60095
      },
      {
        "longitude": 91.70715,
        "latitude": 75.60095
      },
      {
        "longitude": 93.99671,
        "latitude": 75.60095
      },
      {
        "longitude": 96.28627,
        "latitude": 75.60095
      },
      {
        "longitude": 98.57583,
        "latitude": 75.60095
      },
      {
        "longitude": 100.86539,
        "latitude": 75.60095
      },
      {
        "longitude": 103.15495,
        "latitude": 75.60095
      },
      {
        "longitude": 105.44451,
        "latitude": 75.60095
      },
      {
        "longitude": 107.73408,
        "latitude": 75.60095
      },
      {
        "longitude": 110.02364,
        "latitude": 75.60095
      },
      {
        "longitude": 112.3132,
        "latitude": 75.60095
      },
      {
        "longitude": 137.49837,
        "latitude": 75.60095
      },
      {
        "longitude": 139.78793,
        "latitude": 75.60095
      },
      {
        "longitude": 142.07749,
        "latitude": 75.60095
      },
      {
        "longitude": 144.36705,
        "latitude": 75.60095
      },
      {
        "longitude": 57.36374,
        "latitude": 75.02045
      },
      {
        "longitude": 59.6533,
        "latitude": 75.02045
      },
      {
        "longitude": 87.12803,
        "latitude": 75.02045
      },
      {
        "longitude": 89.41759,
        "latitude": 75.02045
      },
      {
        "longitude": 91.70715,
        "latitude": 75.02045
      },
      {
        "longitude": 93.99671,
        "latitude": 75.02045
      },
      {
        "longitude": 96.28627,
        "latitude": 75.02045
      },
      {
        "longitude": 98.57583,
        "latitude": 75.02045
      },
      {
        "longitude": 100.86539,
        "latitude": 75.02045
      },
      {
        "longitude": 103.15495,
        "latitude": 75.02045
      },
      {
        "longitude": 105.44451,
        "latitude": 75.02045
      },
      {
        "longitude": 107.73408,
        "latitude": 75.02045
      },
      {
        "longitude": 110.02364,
        "latitude": 75.02045
      },
      {
        "longitude": 112.3132,
        "latitude": 75.02045
      },
      {
        "longitude": 137.49837,
        "latitude": 75.02045
      },
      {
        "longitude": 139.78793,
        "latitude": 75.02045
      },
      {
        "longitude": 148.94617,
        "latitude": 75.02045
      },
      {
        "longitude": 55.07418,
        "latitude": 74.4171
      },
      {
        "longitude": 57.36374,
        "latitude": 74.4171
      },
      {
        "longitude": 87.12803,
        "latitude": 74.4171
      },
      {
        "longitude": 89.41759,
        "latitude": 74.4171
      },
      {
        "longitude": 91.70715,
        "latitude": 74.4171
      },
      {
        "longitude": 93.99671,
        "latitude": 74.4171
      },
      {
        "longitude": 96.28627,
        "latitude": 74.4171
      },
      {
        "longitude": 98.57583,
        "latitude": 74.4171
      },
      {
        "longitude": 100.86539,
        "latitude": 74.4171
      },
      {
        "longitude": 103.15495,
        "latitude": 74.4171
      },
      {
        "longitude": 105.44451,
        "latitude": 74.4171
      },
      {
        "longitude": 107.73408,
        "latitude": 74.4171
      },
      {
        "longitude": 110.02364,
        "latitude": 74.4171
      },
      {
        "longitude": 112.3132,
        "latitude": 74.4171
      },
      {
        "longitude": 55.07418,
        "latitude": 73.79007
      },
      {
        "longitude": 57.36374,
        "latitude": 73.79007
      },
      {
        "longitude": 84.83847,
        "latitude": 73.79007
      },
      {
        "longitude": 87.12803,
        "latitude": 73.79007
      },
      {
        "longitude": 89.41759,
        "latitude": 73.79007
      },
      {
        "longitude": 91.70715,
        "latitude": 73.79007
      },
      {
        "longitude": 93.99671,
        "latitude": 73.79007
      },
      {
        "longitude": 96.28627,
        "latitude": 73.79007
      },
      {
        "longitude": 98.57583,
        "latitude": 73.79007
      },
      {
        "longitude": 100.86539,
        "latitude": 73.79007
      },
      {
        "longitude": 103.15495,
        "latitude": 73.79007
      },
      {
        "longitude": 105.44451,
        "latitude": 73.79007
      },
      {
        "longitude": 107.73408,
        "latitude": 73.79007
      },
      {
        "longitude": 110.02364,
        "latitude": 73.79007
      },
      {
        "longitude": 112.3132,
        "latitude": 73.79007
      },
      {
        "longitude": 114.60276,
        "latitude": 73.79007
      },
      {
        "longitude": 123.761,
        "latitude": 73.79007
      },
      {
        "longitude": 142.07749,
        "latitude": 73.79007
      },
      {
        "longitude": 55.07418,
        "latitude": 73.13851
      },
      {
        "longitude": 80.25934,
        "latitude": 73.13851
      },
      {
        "longitude": 82.54891,
        "latitude": 73.13851
      },
      {
        "longitude": 84.83847,
        "latitude": 73.13851
      },
      {
        "longitude": 87.12803,
        "latitude": 73.13851
      },
      {
        "longitude": 89.41759,
        "latitude": 73.13851
      },
      {
        "longitude": 91.70715,
        "latitude": 73.13851
      },
      {
        "longitude": 93.99671,
        "latitude": 73.13851
      },
      {
        "longitude": 96.28627,
        "latitude": 73.13851
      },
      {
        "longitude": 98.57583,
        "latitude": 73.13851
      },
      {
        "longitude": 100.86539,
        "latitude": 73.13851
      },
      {
        "longitude": 103.15495,
        "latitude": 73.13851
      },
      {
        "longitude": 105.44451,
        "latitude": 73.13851
      },
      {
        "longitude": 107.73408,
        "latitude": 73.13851
      },
      {
        "longitude": 110.02364,
        "latitude": 73.13851
      },
      {
        "longitude": 112.3132,
        "latitude": 73.13851
      },
      {
        "longitude": 114.60276,
        "latitude": 73.13851
      },
      {
        "longitude": 116.89232,
        "latitude": 73.13851
      },
      {
        "longitude": 119.18188,
        "latitude": 73.13851
      },
      {
        "longitude": 123.761,
        "latitude": 73.13851
      },
      {
        "longitude": 126.05056,
        "latitude": 73.13851
      },
      {
        "longitude": 128.34012,
        "latitude": 73.13851
      },
      {
        "longitude": 52.78461,
        "latitude": 72.46156
      },
      {
        "longitude": 55.07418,
        "latitude": 72.46156
      },
      {
        "longitude": 68.81154,
        "latitude": 72.46156
      },
      {
        "longitude": 71.1011,
        "latitude": 72.46156
      },
      {
        "longitude": 77.96978,
        "latitude": 72.46156
      },
      {
        "longitude": 82.54891,
        "latitude": 72.46156
      },
      {
        "longitude": 84.83847,
        "latitude": 72.46156
      },
      {
        "longitude": 87.12803,
        "latitude": 72.46156
      },
      {
        "longitude": 89.41759,
        "latitude": 72.46156
      },
      {
        "longitude": 91.70715,
        "latitude": 72.46156
      },
      {
        "longitude": 93.99671,
        "latitude": 72.46156
      },
      {
        "longitude": 96.28627,
        "latitude": 72.46156
      },
      {
        "longitude": 98.57583,
        "latitude": 72.46156
      },
      {
        "longitude": 100.86539,
        "latitude": 72.46156
      },
      {
        "longitude": 103.15495,
        "latitude": 72.46156
      },
      {
        "longitude": 105.44451,
        "latitude": 72.46156
      },
      {
        "longitude": 107.73408,
        "latitude": 72.46156
      },
      {
        "longitude": 110.02364,
        "latitude": 72.46156
      },
      {
        "longitude": 112.3132,
        "latitude": 72.46156
      },
      {
        "longitude": 114.60276,
        "latitude": 72.46156
      },
      {
        "longitude": 116.89232,
        "latitude": 72.46156
      },
      {
        "longitude": 119.18188,
        "latitude": 72.46156
      },
      {
        "longitude": 121.47144,
        "latitude": 72.46156
      },
      {
        "longitude": 123.761,
        "latitude": 72.46156
      },
      {
        "longitude": 126.05056,
        "latitude": 72.46156
      },
      {
        "longitude": 128.34012,
        "latitude": 72.46156
      },
      {
        "longitude": 139.78793,
        "latitude": 72.46156
      },
      {
        "longitude": 142.07749,
        "latitude": 72.46156
      },
      {
        "longitude": 144.36705,
        "latitude": 72.46156
      },
      {
        "longitude": 52.78461,
        "latitude": 71.75831
      },
      {
        "longitude": 55.07418,
        "latitude": 71.75831
      },
      {
        "longitude": 68.81154,
        "latitude": 71.75831
      },
      {
        "longitude": 71.1011,
        "latitude": 71.75831
      },
      {
        "longitude": 73.39066,
        "latitude": 71.75831
      },
      {
        "longitude": 75.68022,
        "latitude": 71.75831
      },
      {
        "longitude": 77.96978,
        "latitude": 71.75831
      },
      {
        "longitude": 80.25934,
        "latitude": 71.75831
      },
      {
        "longitude": 82.54891,
        "latitude": 71.75831
      },
      {
        "longitude": 84.83847,
        "latitude": 71.75831
      },
      {
        "longitude": 87.12803,
        "latitude": 71.75831
      },
      {
        "longitude": 89.41759,
        "latitude": 71.75831
      },
      {
        "longitude": 91.70715,
        "latitude": 71.75831
      },
      {
        "longitude": 93.99671,
        "latitude": 71.75831
      },
      {
        "longitude": 96.28627,
        "latitude": 71.75831
      },
      {
        "longitude": 98.57583,
        "latitude": 71.75831
      },
      {
        "longitude": 100.86539,
        "latitude": 71.75831
      },
      {
        "longitude": 103.15495,
        "latitude": 71.75831
      },
      {
        "longitude": 105.44451,
        "latitude": 71.75831
      },
      {
        "longitude": 107.73408,
        "latitude": 71.75831
      },
      {
        "longitude": 110.02364,
        "latitude": 71.75831
      },
      {
        "longitude": 112.3132,
        "latitude": 71.75831
      },
      {
        "longitude": 114.60276,
        "latitude": 71.75831
      },
      {
        "longitude": 116.89232,
        "latitude": 71.75831
      },
      {
        "longitude": 119.18188,
        "latitude": 71.75831
      },
      {
        "longitude": 121.47144,
        "latitude": 71.75831
      },
      {
        "longitude": 123.761,
        "latitude": 71.75831
      },
      {
        "longitude": 126.05056,
        "latitude": 71.75831
      },
      {
        "longitude": 128.34012,
        "latitude": 71.75831
      },
      {
        "longitude": 132.91924,
        "latitude": 71.75831
      },
      {
        "longitude": 139.78793,
        "latitude": 71.75831
      },
      {
        "longitude": 142.07749,
        "latitude": 71.75831
      },
      {
        "longitude": 144.36705,
        "latitude": 71.75831
      },
      {
        "longitude": 146.65661,
        "latitude": 71.75831
      },
      {
        "longitude": 148.94617,
        "latitude": 71.75831
      },
      {
        "longitude": 55.07418,
        "latitude": 71.02787
      },
      {
        "longitude": 66.52198,
        "latitude": 71.02787
      },
      {
        "longitude": 68.81154,
        "latitude": 71.02787
      },
      {
        "longitude": 71.1011,
        "latitude": 71.02787
      },
      {
        "longitude": 73.39066,
        "latitude": 71.02787
      },
      {
        "longitude": 75.68022,
        "latitude": 71.02787
      },
      {
        "longitude": 77.96978,
        "latitude": 71.02787
      },
      {
        "longitude": 80.25934,
        "latitude": 71.02787
      },
      {
        "longitude": 82.54891,
        "latitude": 71.02787
      },
      {
        "longitude": 84.83847,
        "latitude": 71.02787
      },
      {
        "longitude": 87.12803,
        "latitude": 71.02787
      },
      {
        "longitude": 89.41759,
        "latitude": 71.02787
      },
      {
        "longitude": 91.70715,
        "latitude": 71.02787
      },
      {
        "longitude": 93.99671,
        "latitude": 71.02787
      },
      {
        "longitude": 96.28627,
        "latitude": 71.02787
      },
      {
        "longitude": 98.57583,
        "latitude": 71.02787
      },
      {
        "longitude": 100.86539,
        "latitude": 71.02787
      },
      {
        "longitude": 103.15495,
        "latitude": 71.02787
      },
      {
        "longitude": 105.44451,
        "latitude": 71.02787
      },
      {
        "longitude": 107.73408,
        "latitude": 71.02787
      },
      {
        "longitude": 110.02364,
        "latitude": 71.02787
      },
      {
        "longitude": 112.3132,
        "latitude": 71.02787
      },
      {
        "longitude": 114.60276,
        "latitude": 71.02787
      },
      {
        "longitude": 116.89232,
        "latitude": 71.02787
      },
      {
        "longitude": 119.18188,
        "latitude": 71.02787
      },
      {
        "longitude": 121.47144,
        "latitude": 71.02787
      },
      {
        "longitude": 123.761,
        "latitude": 71.02787
      },
      {
        "longitude": 126.05056,
        "latitude": 71.02787
      },
      {
        "longitude": 128.34012,
        "latitude": 71.02787
      },
      {
        "longitude": 132.91924,
        "latitude": 71.02787
      },
      {
        "longitude": 135.20881,
        "latitude": 71.02787
      },
      {
        "longitude": 137.49837,
        "latitude": 71.02787
      },
      {
        "longitude": 139.78793,
        "latitude": 71.02787
      },
      {
        "longitude": 142.07749,
        "latitude": 71.02787
      },
      {
        "longitude": 144.36705,
        "latitude": 71.02787
      },
      {
        "longitude": 146.65661,
        "latitude": 71.02787
      },
      {
        "longitude": 148.94617,
        "latitude": 71.02787
      },
      {
        "longitude": 151.23573,
        "latitude": 71.02787
      },
      {
        "longitude": 153.52529,
        "latitude": 71.02787
      },
      {
        "longitude": 155.81485,
        "latitude": 71.02787
      },
      {
        "longitude": 158.10441,
        "latitude": 71.02787
      },
      {
        "longitude": 178.71046,
        "latitude": 71.02787
      },
      {
        "longitude": -178.99998,
        "latitude": 71.02787
      },
      {
        "longitude": 59.6533,
        "latitude": 70.26929
      },
      {
        "longitude": 68.81154,
        "latitude": 70.26929
      },
      {
        "longitude": 71.1011,
        "latitude": 70.26929
      },
      {
        "longitude": 75.68022,
        "latitude": 70.26929
      },
      {
        "longitude": 77.96978,
        "latitude": 70.26929
      },
      {
        "longitude": 80.25934,
        "latitude": 70.26929
      },
      {
        "longitude": 82.54891,
        "latitude": 70.26929
      },
      {
        "longitude": 84.83847,
        "latitude": 70.26929
      },
      {
        "longitude": 87.12803,
        "latitude": 70.26929
      },
      {
        "longitude": 89.41759,
        "latitude": 70.26929
      },
      {
        "longitude": 91.70715,
        "latitude": 70.26929
      },
      {
        "longitude": 93.99671,
        "latitude": 70.26929
      },
      {
        "longitude": 96.28627,
        "latitude": 70.26929
      },
      {
        "longitude": 98.57583,
        "latitude": 70.26929
      },
      {
        "longitude": 100.86539,
        "latitude": 70.26929
      },
      {
        "longitude": 103.15495,
        "latitude": 70.26929
      },
      {
        "longitude": 105.44451,
        "latitude": 70.26929
      },
      {
        "longitude": 107.73408,
        "latitude": 70.26929
      },
      {
        "longitude": 110.02364,
        "latitude": 70.26929
      },
      {
        "longitude": 112.3132,
        "latitude": 70.26929
      },
      {
        "longitude": 114.60276,
        "latitude": 70.26929
      },
      {
        "longitude": 116.89232,
        "latitude": 70.26929
      },
      {
        "longitude": 119.18188,
        "latitude": 70.26929
      },
      {
        "longitude": 121.47144,
        "latitude": 70.26929
      },
      {
        "longitude": 123.761,
        "latitude": 70.26929
      },
      {
        "longitude": 126.05056,
        "latitude": 70.26929
      },
      {
        "longitude": 128.34012,
        "latitude": 70.26929
      },
      {
        "longitude": 130.62968,
        "latitude": 70.26929
      },
      {
        "longitude": 132.91924,
        "latitude": 70.26929
      },
      {
        "longitude": 135.20881,
        "latitude": 70.26929
      },
      {
        "longitude": 137.49837,
        "latitude": 70.26929
      },
      {
        "longitude": 139.78793,
        "latitude": 70.26929
      },
      {
        "longitude": 142.07749,
        "latitude": 70.26929
      },
      {
        "longitude": 144.36705,
        "latitude": 70.26929
      },
      {
        "longitude": 146.65661,
        "latitude": 70.26929
      },
      {
        "longitude": 148.94617,
        "latitude": 70.26929
      },
      {
        "longitude": 151.23573,
        "latitude": 70.26929
      },
      {
        "longitude": 153.52529,
        "latitude": 70.26929
      },
      {
        "longitude": 155.81485,
        "latitude": 70.26929
      },
      {
        "longitude": 158.10441,
        "latitude": 70.26929
      },
      {
        "longitude": 32.17857,
        "latitude": 69.48164
      },
      {
        "longitude": 48.20549,
        "latitude": 69.48164
      },
      {
        "longitude": 61.94286,
        "latitude": 69.48164
      },
      {
        "longitude": 64.23242,
        "latitude": 69.48164
      },
      {
        "longitude": 68.81154,
        "latitude": 69.48164
      },
      {
        "longitude": 71.1011,
        "latitude": 69.48164
      },
      {
        "longitude": 73.39066,
        "latitude": 69.48164
      },
      {
        "longitude": 75.68022,
        "latitude": 69.48164
      },
      {
        "longitude": 77.96978,
        "latitude": 69.48164
      },
      {
        "longitude": 80.25934,
        "latitude": 69.48164
      },
      {
        "longitude": 82.54891,
        "latitude": 69.48164
      },
      {
        "longitude": 84.83847,
        "latitude": 69.48164
      },
      {
        "longitude": 87.12803,
        "latitude": 69.48164
      },
      {
        "longitude": 89.41759,
        "latitude": 69.48164
      },
      {
        "longitude": 91.70715,
        "latitude": 69.48164
      },
      {
        "longitude": 93.99671,
        "latitude": 69.48164
      },
      {
        "longitude": 96.28627,
        "latitude": 69.48164
      },
      {
        "longitude": 98.57583,
        "latitude": 69.48164
      },
      {
        "longitude": 100.86539,
        "latitude": 69.48164
      },
      {
        "longitude": 103.15495,
        "latitude": 69.48164
      },
      {
        "longitude": 105.44451,
        "latitude": 69.48164
      },
      {
        "longitude": 107.73408,
        "latitude": 69.48164
      },
      {
        "longitude": 110.02364,
        "latitude": 69.48164
      },
      {
        "longitude": 112.3132,
        "latitude": 69.48164
      },
      {
        "longitude": 114.60276,
        "latitude": 69.48164
      },
      {
        "longitude": 116.89232,
        "latitude": 69.48164
      },
      {
        "longitude": 119.18188,
        "latitude": 69.48164
      },
      {
        "longitude": 121.47144,
        "latitude": 69.48164
      },
      {
        "longitude": 123.761,
        "latitude": 69.48164
      },
      {
        "longitude": 126.05056,
        "latitude": 69.48164
      },
      {
        "longitude": 128.34012,
        "latitude": 69.48164
      },
      {
        "longitude": 130.62968,
        "latitude": 69.48164
      },
      {
        "longitude": 132.91924,
        "latitude": 69.48164
      },
      {
        "longitude": 135.20881,
        "latitude": 69.48164
      },
      {
        "longitude": 137.49837,
        "latitude": 69.48164
      },
      {
        "longitude": 139.78793,
        "latitude": 69.48164
      },
      {
        "longitude": 142.07749,
        "latitude": 69.48164
      },
      {
        "longitude": 144.36705,
        "latitude": 69.48164
      },
      {
        "longitude": 146.65661,
        "latitude": 69.48164
      },
      {
        "longitude": 148.94617,
        "latitude": 69.48164
      },
      {
        "longitude": 151.23573,
        "latitude": 69.48164
      },
      {
        "longitude": 153.52529,
        "latitude": 69.48164
      },
      {
        "longitude": 155.81485,
        "latitude": 69.48164
      },
      {
        "longitude": 158.10441,
        "latitude": 69.48164
      },
      {
        "longitude": 160.39398,
        "latitude": 69.48164
      },
      {
        "longitude": 162.68354,
        "latitude": 69.48164
      },
      {
        "longitude": 164.9731,
        "latitude": 69.48164
      },
      {
        "longitude": 167.26266,
        "latitude": 69.48164
      },
      {
        "longitude": 171.84178,
        "latitude": 69.48164
      },
      {
        "longitude": 174.13134,
        "latitude": 69.48164
      },
      {
        "longitude": 176.4209,
        "latitude": 69.48164
      },
      {
        "longitude": 178.71046,
        "latitude": 69.48164
      },
      {
        "longitude": -178.46103,
        "latitude": 68.66395
      },
      {
        "longitude": 29.88901,
        "latitude": 68.66395
      },
      {
        "longitude": 32.17857,
        "latitude": 68.66395
      },
      {
        "longitude": 34.46813,
        "latitude": 68.66395
      },
      {
        "longitude": 36.75769,
        "latitude": 68.66395
      },
      {
        "longitude": 52.78461,
        "latitude": 68.66395
      },
      {
        "longitude": 55.07418,
        "latitude": 68.66395
      },
      {
        "longitude": 57.36374,
        "latitude": 68.66395
      },
      {
        "longitude": 59.6533,
        "latitude": 68.66395
      },
      {
        "longitude": 61.94286,
        "latitude": 68.66395
      },
      {
        "longitude": 64.23242,
        "latitude": 68.66395
      },
      {
        "longitude": 66.52198,
        "latitude": 68.66395
      },
      {
        "longitude": 68.81154,
        "latitude": 68.66395
      },
      {
        "longitude": 71.1011,
        "latitude": 68.66395
      },
      {
        "longitude": 73.39066,
        "latitude": 68.66395
      },
      {
        "longitude": 75.68022,
        "latitude": 68.66395
      },
      {
        "longitude": 77.96978,
        "latitude": 68.66395
      },
      {
        "longitude": 80.25934,
        "latitude": 68.66395
      },
      {
        "longitude": 82.54891,
        "latitude": 68.66395
      },
      {
        "longitude": 84.83847,
        "latitude": 68.66395
      },
      {
        "longitude": 87.12803,
        "latitude": 68.66395
      },
      {
        "longitude": 89.41759,
        "latitude": 68.66395
      },
      {
        "longitude": 91.70715,
        "latitude": 68.66395
      },
      {
        "longitude": 93.99671,
        "latitude": 68.66395
      },
      {
        "longitude": 96.28627,
        "latitude": 68.66395
      },
      {
        "longitude": 98.57583,
        "latitude": 68.66395
      },
      {
        "longitude": 100.86539,
        "latitude": 68.66395
      },
      {
        "longitude": 103.15495,
        "latitude": 68.66395
      },
      {
        "longitude": 105.44451,
        "latitude": 68.66395
      },
      {
        "longitude": 107.73408,
        "latitude": 68.66395
      },
      {
        "longitude": 110.02364,
        "latitude": 68.66395
      },
      {
        "longitude": 112.3132,
        "latitude": 68.66395
      },
      {
        "longitude": 114.60276,
        "latitude": 68.66395
      },
      {
        "longitude": 116.89232,
        "latitude": 68.66395
      },
      {
        "longitude": 119.18188,
        "latitude": 68.66395
      },
      {
        "longitude": 121.47144,
        "latitude": 68.66395
      },
      {
        "longitude": 123.761,
        "latitude": 68.66395
      },
      {
        "longitude": 126.05056,
        "latitude": 68.66395
      },
      {
        "longitude": 128.34012,
        "latitude": 68.66395
      },
      {
        "longitude": 130.62968,
        "latitude": 68.66395
      },
      {
        "longitude": 132.91924,
        "latitude": 68.66395
      },
      {
        "longitude": 135.20881,
        "latitude": 68.66395
      },
      {
        "longitude": 137.49837,
        "latitude": 68.66395
      },
      {
        "longitude": 139.78793,
        "latitude": 68.66395
      },
      {
        "longitude": 142.07749,
        "latitude": 68.66395
      },
      {
        "longitude": 144.36705,
        "latitude": 68.66395
      },
      {
        "longitude": 146.65661,
        "latitude": 68.66395
      },
      {
        "longitude": 148.94617,
        "latitude": 68.66395
      },
      {
        "longitude": 151.23573,
        "latitude": 68.66395
      },
      {
        "longitude": 153.52529,
        "latitude": 68.66395
      },
      {
        "longitude": 155.81485,
        "latitude": 68.66395
      },
      {
        "longitude": 158.10441,
        "latitude": 68.66395
      },
      {
        "longitude": 160.39398,
        "latitude": 68.66395
      },
      {
        "longitude": 162.68354,
        "latitude": 68.66395
      },
      {
        "longitude": 164.9731,
        "latitude": 68.66395
      },
      {
        "longitude": 167.26266,
        "latitude": 68.66395
      },
      {
        "longitude": 169.55222,
        "latitude": 68.66395
      },
      {
        "longitude": 171.84178,
        "latitude": 68.66395
      },
      {
        "longitude": 174.13134,
        "latitude": 68.66395
      },
      {
        "longitude": 176.4209,
        "latitude": 68.66395
      },
      {
        "longitude": 178.71046,
        "latitude": 68.66395
      },
      {
        "longitude": -178.99998,
        "latitude": 68.66395
      },
      {
        "longitude": -178.46103,
        "latitude": 67.81526
      },
      {
        "longitude": -176.17147,
        "latitude": 67.81526
      },
      {
        "longitude": 29.88901,
        "latitude": 67.81526
      },
      {
        "longitude": 32.17857,
        "latitude": 67.81526
      },
      {
        "longitude": 34.46813,
        "latitude": 67.81526
      },
      {
        "longitude": 36.75769,
        "latitude": 67.81526
      },
      {
        "longitude": 39.04725,
        "latitude": 67.81526
      },
      {
        "longitude": 43.62637,
        "latitude": 67.81526
      },
      {
        "longitude": 48.20549,
        "latitude": 67.81526
      },
      {
        "longitude": 50.49505,
        "latitude": 67.81526
      },
      {
        "longitude": 52.78461,
        "latitude": 67.81526
      },
      {
        "longitude": 55.07418,
        "latitude": 67.81526
      },
      {
        "longitude": 57.36374,
        "latitude": 67.81526
      },
      {
        "longitude": 59.6533,
        "latitude": 67.81526
      },
      {
        "longitude": 61.94286,
        "latitude": 67.81526
      },
      {
        "longitude": 64.23242,
        "latitude": 67.81526
      },
      {
        "longitude": 66.52198,
        "latitude": 67.81526
      },
      {
        "longitude": 68.81154,
        "latitude": 67.81526
      },
      {
        "longitude": 71.1011,
        "latitude": 67.81526
      },
      {
        "longitude": 75.68022,
        "latitude": 67.81526
      },
      {
        "longitude": 77.96978,
        "latitude": 67.81526
      },
      {
        "longitude": 80.25934,
        "latitude": 67.81526
      },
      {
        "longitude": 82.54891,
        "latitude": 67.81526
      },
      {
        "longitude": 84.83847,
        "latitude": 67.81526
      },
      {
        "longitude": 87.12803,
        "latitude": 67.81526
      },
      {
        "longitude": 89.41759,
        "latitude": 67.81526
      },
      {
        "longitude": 91.70715,
        "latitude": 67.81526
      },
      {
        "longitude": 93.99671,
        "latitude": 67.81526
      },
      {
        "longitude": 96.28627,
        "latitude": 67.81526
      },
      {
        "longitude": 98.57583,
        "latitude": 67.81526
      },
      {
        "longitude": 100.86539,
        "latitude": 67.81526
      },
      {
        "longitude": 103.15495,
        "latitude": 67.81526
      },
      {
        "longitude": 105.44451,
        "latitude": 67.81526
      },
      {
        "longitude": 107.73408,
        "latitude": 67.81526
      },
      {
        "longitude": 110.02364,
        "latitude": 67.81526
      },
      {
        "longitude": 112.3132,
        "latitude": 67.81526
      },
      {
        "longitude": 114.60276,
        "latitude": 67.81526
      },
      {
        "longitude": 116.89232,
        "latitude": 67.81526
      },
      {
        "longitude": 119.18188,
        "latitude": 67.81526
      },
      {
        "longitude": 121.47144,
        "latitude": 67.81526
      },
      {
        "longitude": 123.761,
        "latitude": 67.81526
      },
      {
        "longitude": 126.05056,
        "latitude": 67.81526
      },
      {
        "longitude": 128.34012,
        "latitude": 67.81526
      },
      {
        "longitude": 130.62968,
        "latitude": 67.81526
      },
      {
        "longitude": 132.91924,
        "latitude": 67.81526
      },
      {
        "longitude": 135.20881,
        "latitude": 67.81526
      },
      {
        "longitude": 137.49837,
        "latitude": 67.81526
      },
      {
        "longitude": 139.78793,
        "latitude": 67.81526
      },
      {
        "longitude": 142.07749,
        "latitude": 67.81526
      },
      {
        "longitude": 144.36705,
        "latitude": 67.81526
      },
      {
        "longitude": 146.65661,
        "latitude": 67.81526
      },
      {
        "longitude": 148.94617,
        "latitude": 67.81526
      },
      {
        "longitude": 151.23573,
        "latitude": 67.81526
      },
      {
        "longitude": 153.52529,
        "latitude": 67.81526
      },
      {
        "longitude": 155.81485,
        "latitude": 67.81526
      },
      {
        "longitude": 158.10441,
        "latitude": 67.81526
      },
      {
        "longitude": 160.39398,
        "latitude": 67.81526
      },
      {
        "longitude": 162.68354,
        "latitude": 67.81526
      },
      {
        "longitude": 164.9731,
        "latitude": 67.81526
      },
      {
        "longitude": 167.26266,
        "latitude": 67.81526
      },
      {
        "longitude": 169.55222,
        "latitude": 67.81526
      },
      {
        "longitude": 171.84178,
        "latitude": 67.81526
      },
      {
        "longitude": 174.13134,
        "latitude": 67.81526
      },
      {
        "longitude": 176.4209,
        "latitude": 67.81526
      },
      {
        "longitude": 178.71046,
        "latitude": 67.81526
      },
      {
        "longitude": -178.99998,
        "latitude": 67.81526
      },
      {
        "longitude": -178.46103,
        "latitude": 66.93457
      },
      {
        "longitude": -176.17147,
        "latitude": 66.93457
      },
      {
        "longitude": -173.88191,
        "latitude": 66.93457
      },
      {
        "longitude": -171.59235,
        "latitude": 66.93457
      },
      {
        "longitude": 29.88901,
        "latitude": 66.93457
      },
      {
        "longitude": 32.17857,
        "latitude": 66.93457
      },
      {
        "longitude": 34.46813,
        "latitude": 66.93457
      },
      {
        "longitude": 36.75769,
        "latitude": 66.93457
      },
      {
        "longitude": 39.04725,
        "latitude": 66.93457
      },
      {
        "longitude": 45.91593,
        "latitude": 66.93457
      },
      {
        "longitude": 48.20549,
        "latitude": 66.93457
      },
      {
        "longitude": 50.49505,
        "latitude": 66.93457
      },
      {
        "longitude": 52.78461,
        "latitude": 66.93457
      },
      {
        "longitude": 55.07418,
        "latitude": 66.93457
      },
      {
        "longitude": 57.36374,
        "latitude": 66.93457
      },
      {
        "longitude": 59.6533,
        "latitude": 66.93457
      },
      {
        "longitude": 61.94286,
        "latitude": 66.93457
      },
      {
        "longitude": 64.23242,
        "latitude": 66.93457
      },
      {
        "longitude": 66.52198,
        "latitude": 66.93457
      },
      {
        "longitude": 68.81154,
        "latitude": 66.93457
      },
      {
        "longitude": 71.1011,
        "latitude": 66.93457
      },
      {
        "longitude": 73.39066,
        "latitude": 66.93457
      },
      {
        "longitude": 75.68022,
        "latitude": 66.93457
      },
      {
        "longitude": 77.96978,
        "latitude": 66.93457
      },
      {
        "longitude": 80.25934,
        "latitude": 66.93457
      },
      {
        "longitude": 82.54891,
        "latitude": 66.93457
      },
      {
        "longitude": 84.83847,
        "latitude": 66.93457
      },
      {
        "longitude": 87.12803,
        "latitude": 66.93457
      },
      {
        "longitude": 89.41759,
        "latitude": 66.93457
      },
      {
        "longitude": 91.70715,
        "latitude": 66.93457
      },
      {
        "longitude": 93.99671,
        "latitude": 66.93457
      },
      {
        "longitude": 96.28627,
        "latitude": 66.93457
      },
      {
        "longitude": 98.57583,
        "latitude": 66.93457
      },
      {
        "longitude": 100.86539,
        "latitude": 66.93457
      },
      {
        "longitude": 103.15495,
        "latitude": 66.93457
      },
      {
        "longitude": 105.44451,
        "latitude": 66.93457
      },
      {
        "longitude": 107.73408,
        "latitude": 66.93457
      },
      {
        "longitude": 110.02364,
        "latitude": 66.93457
      },
      {
        "longitude": 112.3132,
        "latitude": 66.93457
      },
      {
        "longitude": 114.60276,
        "latitude": 66.93457
      },
      {
        "longitude": 116.89232,
        "latitude": 66.93457
      },
      {
        "longitude": 119.18188,
        "latitude": 66.93457
      },
      {
        "longitude": 121.47144,
        "latitude": 66.93457
      },
      {
        "longitude": 123.761,
        "latitude": 66.93457
      },
      {
        "longitude": 126.05056,
        "latitude": 66.93457
      },
      {
        "longitude": 128.34012,
        "latitude": 66.93457
      },
      {
        "longitude": 130.62968,
        "latitude": 66.93457
      },
      {
        "longitude": 132.91924,
        "latitude": 66.93457
      },
      {
        "longitude": 135.20881,
        "latitude": 66.93457
      },
      {
        "longitude": 137.49837,
        "latitude": 66.93457
      },
      {
        "longitude": 139.78793,
        "latitude": 66.93457
      },
      {
        "longitude": 142.07749,
        "latitude": 66.93457
      },
      {
        "longitude": 144.36705,
        "latitude": 66.93457
      },
      {
        "longitude": 146.65661,
        "latitude": 66.93457
      },
      {
        "longitude": 148.94617,
        "latitude": 66.93457
      },
      {
        "longitude": 151.23573,
        "latitude": 66.93457
      },
      {
        "longitude": 153.52529,
        "latitude": 66.93457
      },
      {
        "longitude": 155.81485,
        "latitude": 66.93457
      },
      {
        "longitude": 158.10441,
        "latitude": 66.93457
      },
      {
        "longitude": 160.39398,
        "latitude": 66.93457
      },
      {
        "longitude": 162.68354,
        "latitude": 66.93457
      },
      {
        "longitude": 164.9731,
        "latitude": 66.93457
      },
      {
        "longitude": 167.26266,
        "latitude": 66.93457
      },
      {
        "longitude": 169.55222,
        "latitude": 66.93457
      },
      {
        "longitude": 171.84178,
        "latitude": 66.93457
      },
      {
        "longitude": 174.13134,
        "latitude": 66.93457
      },
      {
        "longitude": 176.4209,
        "latitude": 66.93457
      },
      {
        "longitude": 178.71046,
        "latitude": 66.93457
      },
      {
        "longitude": -178.99998,
        "latitude": 66.93457
      },
      {
        "longitude": -178.46103,
        "latitude": 66.02091
      },
      {
        "longitude": -176.17147,
        "latitude": 66.02091
      },
      {
        "longitude": -173.88191,
        "latitude": 66.02091
      },
      {
        "longitude": -171.59235,
        "latitude": 66.02091
      },
      {
        "longitude": 29.88901,
        "latitude": 66.02091
      },
      {
        "longitude": 32.17857,
        "latitude": 66.02091
      },
      {
        "longitude": 34.46813,
        "latitude": 66.02091
      },
      {
        "longitude": 41.33681,
        "latitude": 66.02091
      },
      {
        "longitude": 43.62637,
        "latitude": 66.02091
      },
      {
        "longitude": 45.91593,
        "latitude": 66.02091
      },
      {
        "longitude": 48.20549,
        "latitude": 66.02091
      },
      {
        "longitude": 50.49505,
        "latitude": 66.02091
      },
      {
        "longitude": 52.78461,
        "latitude": 66.02091
      },
      {
        "longitude": 55.07418,
        "latitude": 66.02091
      },
      {
        "longitude": 57.36374,
        "latitude": 66.02091
      },
      {
        "longitude": 59.6533,
        "latitude": 66.02091
      },
      {
        "longitude": 61.94286,
        "latitude": 66.02091
      },
      {
        "longitude": 64.23242,
        "latitude": 66.02091
      },
      {
        "longitude": 66.52198,
        "latitude": 66.02091
      },
      {
        "longitude": 68.81154,
        "latitude": 66.02091
      },
      {
        "longitude": 71.1011,
        "latitude": 66.02091
      },
      {
        "longitude": 73.39066,
        "latitude": 66.02091
      },
      {
        "longitude": 75.68022,
        "latitude": 66.02091
      },
      {
        "longitude": 77.96978,
        "latitude": 66.02091
      },
      {
        "longitude": 80.25934,
        "latitude": 66.02091
      },
      {
        "longitude": 82.54891,
        "latitude": 66.02091
      },
      {
        "longitude": 84.83847,
        "latitude": 66.02091
      },
      {
        "longitude": 87.12803,
        "latitude": 66.02091
      },
      {
        "longitude": 89.41759,
        "latitude": 66.02091
      },
      {
        "longitude": 91.70715,
        "latitude": 66.02091
      },
      {
        "longitude": 93.99671,
        "latitude": 66.02091
      },
      {
        "longitude": 96.28627,
        "latitude": 66.02091
      },
      {
        "longitude": 98.57583,
        "latitude": 66.02091
      },
      {
        "longitude": 100.86539,
        "latitude": 66.02091
      },
      {
        "longitude": 103.15495,
        "latitude": 66.02091
      },
      {
        "longitude": 105.44451,
        "latitude": 66.02091
      },
      {
        "longitude": 107.73408,
        "latitude": 66.02091
      },
      {
        "longitude": 110.02364,
        "latitude": 66.02091
      },
      {
        "longitude": 112.3132,
        "latitude": 66.02091
      },
      {
        "longitude": 114.60276,
        "latitude": 66.02091
      },
      {
        "longitude": 116.89232,
        "latitude": 66.02091
      },
      {
        "longitude": 119.18188,
        "latitude": 66.02091
      },
      {
        "longitude": 121.47144,
        "latitude": 66.02091
      },
      {
        "longitude": 123.761,
        "latitude": 66.02091
      },
      {
        "longitude": 126.05056,
        "latitude": 66.02091
      },
      {
        "longitude": 128.34012,
        "latitude": 66.02091
      },
      {
        "longitude": 130.62968,
        "latitude": 66.02091
      },
      {
        "longitude": 132.91924,
        "latitude": 66.02091
      },
      {
        "longitude": 135.20881,
        "latitude": 66.02091
      },
      {
        "longitude": 137.49837,
        "latitude": 66.02091
      },
      {
        "longitude": 139.78793,
        "latitude": 66.02091
      },
      {
        "longitude": 142.07749,
        "latitude": 66.02091
      },
      {
        "longitude": 144.36705,
        "latitude": 66.02091
      },
      {
        "longitude": 146.65661,
        "latitude": 66.02091
      },
      {
        "longitude": 148.94617,
        "latitude": 66.02091
      },
      {
        "longitude": 151.23573,
        "latitude": 66.02091
      },
      {
        "longitude": 153.52529,
        "latitude": 66.02091
      },
      {
        "longitude": 155.81485,
        "latitude": 66.02091
      },
      {
        "longitude": 158.10441,
        "latitude": 66.02091
      },
      {
        "longitude": 160.39398,
        "latitude": 66.02091
      },
      {
        "longitude": 162.68354,
        "latitude": 66.02091
      },
      {
        "longitude": 164.9731,
        "latitude": 66.02091
      },
      {
        "longitude": 167.26266,
        "latitude": 66.02091
      },
      {
        "longitude": 169.55222,
        "latitude": 66.02091
      },
      {
        "longitude": 171.84178,
        "latitude": 66.02091
      },
      {
        "longitude": 174.13134,
        "latitude": 66.02091
      },
      {
        "longitude": 176.4209,
        "latitude": 66.02091
      },
      {
        "longitude": 178.71046,
        "latitude": 66.02091
      },
      {
        "longitude": -178.99998,
        "latitude": 66.02091
      },
      {
        "longitude": -176.17147,
        "latitude": 65.07327
      },
      {
        "longitude": -173.88191,
        "latitude": 65.07327
      },
      {
        "longitude": 29.88901,
        "latitude": 65.07327
      },
      {
        "longitude": 32.17857,
        "latitude": 65.07327
      },
      {
        "longitude": 34.46813,
        "latitude": 65.07327
      },
      {
        "longitude": 36.75769,
        "latitude": 65.07327
      },
      {
        "longitude": 41.33681,
        "latitude": 65.07327
      },
      {
        "longitude": 43.62637,
        "latitude": 65.07327
      },
      {
        "longitude": 45.91593,
        "latitude": 65.07327
      },
      {
        "longitude": 48.20549,
        "latitude": 65.07327
      },
      {
        "longitude": 50.49505,
        "latitude": 65.07327
      },
      {
        "longitude": 52.78461,
        "latitude": 65.07327
      },
      {
        "longitude": 55.07418,
        "latitude": 65.07327
      },
      {
        "longitude": 57.36374,
        "latitude": 65.07327
      },
      {
        "longitude": 59.6533,
        "latitude": 65.07327
      },
      {
        "longitude": 61.94286,
        "latitude": 65.07327
      },
      {
        "longitude": 64.23242,
        "latitude": 65.07327
      },
      {
        "longitude": 66.52198,
        "latitude": 65.07327
      },
      {
        "longitude": 68.81154,
        "latitude": 65.07327
      },
      {
        "longitude": 71.1011,
        "latitude": 65.07327
      },
      {
        "longitude": 73.39066,
        "latitude": 65.07327
      },
      {
        "longitude": 75.68022,
        "latitude": 65.07327
      },
      {
        "longitude": 77.96978,
        "latitude": 65.07327
      },
      {
        "longitude": 80.25934,
        "latitude": 65.07327
      },
      {
        "longitude": 82.54891,
        "latitude": 65.07327
      },
      {
        "longitude": 84.83847,
        "latitude": 65.07327
      },
      {
        "longitude": 87.12803,
        "latitude": 65.07327
      },
      {
        "longitude": 89.41759,
        "latitude": 65.07327
      },
      {
        "longitude": 91.70715,
        "latitude": 65.07327
      },
      {
        "longitude": 93.99671,
        "latitude": 65.07327
      },
      {
        "longitude": 96.28627,
        "latitude": 65.07327
      },
      {
        "longitude": 98.57583,
        "latitude": 65.07327
      },
      {
        "longitude": 100.86539,
        "latitude": 65.07327
      },
      {
        "longitude": 103.15495,
        "latitude": 65.07327
      },
      {
        "longitude": 105.44451,
        "latitude": 65.07327
      },
      {
        "longitude": 107.73408,
        "latitude": 65.07327
      },
      {
        "longitude": 110.02364,
        "latitude": 65.07327
      },
      {
        "longitude": 112.3132,
        "latitude": 65.07327
      },
      {
        "longitude": 114.60276,
        "latitude": 65.07327
      },
      {
        "longitude": 116.89232,
        "latitude": 65.07327
      },
      {
        "longitude": 119.18188,
        "latitude": 65.07327
      },
      {
        "longitude": 121.47144,
        "latitude": 65.07327
      },
      {
        "longitude": 123.761,
        "latitude": 65.07327
      },
      {
        "longitude": 126.05056,
        "latitude": 65.07327
      },
      {
        "longitude": 128.34012,
        "latitude": 65.07327
      },
      {
        "longitude": 130.62968,
        "latitude": 65.07327
      },
      {
        "longitude": 132.91924,
        "latitude": 65.07327
      },
      {
        "longitude": 135.20881,
        "latitude": 65.07327
      },
      {
        "longitude": 137.49837,
        "latitude": 65.07327
      },
      {
        "longitude": 139.78793,
        "latitude": 65.07327
      },
      {
        "longitude": 142.07749,
        "latitude": 65.07327
      },
      {
        "longitude": 144.36705,
        "latitude": 65.07327
      },
      {
        "longitude": 146.65661,
        "latitude": 65.07327
      },
      {
        "longitude": 148.94617,
        "latitude": 65.07327
      },
      {
        "longitude": 151.23573,
        "latitude": 65.07327
      },
      {
        "longitude": 153.52529,
        "latitude": 65.07327
      },
      {
        "longitude": 155.81485,
        "latitude": 65.07327
      },
      {
        "longitude": 158.10441,
        "latitude": 65.07327
      },
      {
        "longitude": 160.39398,
        "latitude": 65.07327
      },
      {
        "longitude": 162.68354,
        "latitude": 65.07327
      },
      {
        "longitude": 164.9731,
        "latitude": 65.07327
      },
      {
        "longitude": 167.26266,
        "latitude": 65.07327
      },
      {
        "longitude": 169.55222,
        "latitude": 65.07327
      },
      {
        "longitude": 171.84178,
        "latitude": 65.07327
      },
      {
        "longitude": 174.13134,
        "latitude": 65.07327
      },
      {
        "longitude": 176.4209,
        "latitude": 65.07327
      },
      {
        "longitude": 178.71046,
        "latitude": 65.07327
      },
      {
        "longitude": 32.17857,
        "latitude": 64.09067
      },
      {
        "longitude": 34.46813,
        "latitude": 64.09067
      },
      {
        "longitude": 36.75769,
        "latitude": 64.09067
      },
      {
        "longitude": 39.04725,
        "latitude": 64.09067
      },
      {
        "longitude": 41.33681,
        "latitude": 64.09067
      },
      {
        "longitude": 43.62637,
        "latitude": 64.09067
      },
      {
        "longitude": 45.91593,
        "latitude": 64.09067
      },
      {
        "longitude": 48.20549,
        "latitude": 64.09067
      },
      {
        "longitude": 50.49505,
        "latitude": 64.09067
      },
      {
        "longitude": 52.78461,
        "latitude": 64.09067
      },
      {
        "longitude": 55.07418,
        "latitude": 64.09067
      },
      {
        "longitude": 57.36374,
        "latitude": 64.09067
      },
      {
        "longitude": 59.6533,
        "latitude": 64.09067
      },
      {
        "longitude": 61.94286,
        "latitude": 64.09067
      },
      {
        "longitude": 64.23242,
        "latitude": 64.09067
      },
      {
        "longitude": 66.52198,
        "latitude": 64.09067
      },
      {
        "longitude": 68.81154,
        "latitude": 64.09067
      },
      {
        "longitude": 71.1011,
        "latitude": 64.09067
      },
      {
        "longitude": 73.39066,
        "latitude": 64.09067
      },
      {
        "longitude": 75.68022,
        "latitude": 64.09067
      },
      {
        "longitude": 77.96978,
        "latitude": 64.09067
      },
      {
        "longitude": 80.25934,
        "latitude": 64.09067
      },
      {
        "longitude": 82.54891,
        "latitude": 64.09067
      },
      {
        "longitude": 84.83847,
        "latitude": 64.09067
      },
      {
        "longitude": 87.12803,
        "latitude": 64.09067
      },
      {
        "longitude": 89.41759,
        "latitude": 64.09067
      },
      {
        "longitude": 91.70715,
        "latitude": 64.09067
      },
      {
        "longitude": 93.99671,
        "latitude": 64.09067
      },
      {
        "longitude": 96.28627,
        "latitude": 64.09067
      },
      {
        "longitude": 98.57583,
        "latitude": 64.09067
      },
      {
        "longitude": 100.86539,
        "latitude": 64.09067
      },
      {
        "longitude": 103.15495,
        "latitude": 64.09067
      },
      {
        "longitude": 105.44451,
        "latitude": 64.09067
      },
      {
        "longitude": 107.73408,
        "latitude": 64.09067
      },
      {
        "longitude": 110.02364,
        "latitude": 64.09067
      },
      {
        "longitude": 112.3132,
        "latitude": 64.09067
      },
      {
        "longitude": 114.60276,
        "latitude": 64.09067
      },
      {
        "longitude": 116.89232,
        "latitude": 64.09067
      },
      {
        "longitude": 119.18188,
        "latitude": 64.09067
      },
      {
        "longitude": 121.47144,
        "latitude": 64.09067
      },
      {
        "longitude": 123.761,
        "latitude": 64.09067
      },
      {
        "longitude": 126.05056,
        "latitude": 64.09067
      },
      {
        "longitude": 128.34012,
        "latitude": 64.09067
      },
      {
        "longitude": 130.62968,
        "latitude": 64.09067
      },
      {
        "longitude": 132.91924,
        "latitude": 64.09067
      },
      {
        "longitude": 135.20881,
        "latitude": 64.09067
      },
      {
        "longitude": 137.49837,
        "latitude": 64.09067
      },
      {
        "longitude": 139.78793,
        "latitude": 64.09067
      },
      {
        "longitude": 142.07749,
        "latitude": 64.09067
      },
      {
        "longitude": 144.36705,
        "latitude": 64.09067
      },
      {
        "longitude": 146.65661,
        "latitude": 64.09067
      },
      {
        "longitude": 148.94617,
        "latitude": 64.09067
      },
      {
        "longitude": 151.23573,
        "latitude": 64.09067
      },
      {
        "longitude": 153.52529,
        "latitude": 64.09067
      },
      {
        "longitude": 155.81485,
        "latitude": 64.09067
      },
      {
        "longitude": 158.10441,
        "latitude": 64.09067
      },
      {
        "longitude": 160.39398,
        "latitude": 64.09067
      },
      {
        "longitude": 162.68354,
        "latitude": 64.09067
      },
      {
        "longitude": 164.9731,
        "latitude": 64.09067
      },
      {
        "longitude": 167.26266,
        "latitude": 64.09067
      },
      {
        "longitude": 169.55222,
        "latitude": 64.09067
      },
      {
        "longitude": 171.84178,
        "latitude": 64.09067
      },
      {
        "longitude": 174.13134,
        "latitude": 64.09067
      },
      {
        "longitude": 176.4209,
        "latitude": 64.09067
      },
      {
        "longitude": 32.17857,
        "latitude": 63.0721
      },
      {
        "longitude": 34.46813,
        "latitude": 63.0721
      },
      {
        "longitude": 36.75769,
        "latitude": 63.0721
      },
      {
        "longitude": 39.04725,
        "latitude": 63.0721
      },
      {
        "longitude": 41.33681,
        "latitude": 63.0721
      },
      {
        "longitude": 43.62637,
        "latitude": 63.0721
      },
      {
        "longitude": 45.91593,
        "latitude": 63.0721
      },
      {
        "longitude": 48.20549,
        "latitude": 63.0721
      },
      {
        "longitude": 50.49505,
        "latitude": 63.0721
      },
      {
        "longitude": 52.78461,
        "latitude": 63.0721
      },
      {
        "longitude": 55.07418,
        "latitude": 63.0721
      },
      {
        "longitude": 57.36374,
        "latitude": 63.0721
      },
      {
        "longitude": 59.6533,
        "latitude": 63.0721
      },
      {
        "longitude": 61.94286,
        "latitude": 63.0721
      },
      {
        "longitude": 64.23242,
        "latitude": 63.0721
      },
      {
        "longitude": 66.52198,
        "latitude": 63.0721
      },
      {
        "longitude": 68.81154,
        "latitude": 63.0721
      },
      {
        "longitude": 71.1011,
        "latitude": 63.0721
      },
      {
        "longitude": 73.39066,
        "latitude": 63.0721
      },
      {
        "longitude": 75.68022,
        "latitude": 63.0721
      },
      {
        "longitude": 77.96978,
        "latitude": 63.0721
      },
      {
        "longitude": 80.25934,
        "latitude": 63.0721
      },
      {
        "longitude": 82.54891,
        "latitude": 63.0721
      },
      {
        "longitude": 84.83847,
        "latitude": 63.0721
      },
      {
        "longitude": 87.12803,
        "latitude": 63.0721
      },
      {
        "longitude": 89.41759,
        "latitude": 63.0721
      },
      {
        "longitude": 91.70715,
        "latitude": 63.0721
      },
      {
        "longitude": 93.99671,
        "latitude": 63.0721
      },
      {
        "longitude": 96.28627,
        "latitude": 63.0721
      },
      {
        "longitude": 98.57583,
        "latitude": 63.0721
      },
      {
        "longitude": 100.86539,
        "latitude": 63.0721
      },
      {
        "longitude": 103.15495,
        "latitude": 63.0721
      },
      {
        "longitude": 105.44451,
        "latitude": 63.0721
      },
      {
        "longitude": 107.73408,
        "latitude": 63.0721
      },
      {
        "longitude": 110.02364,
        "latitude": 63.0721
      },
      {
        "longitude": 112.3132,
        "latitude": 63.0721
      },
      {
        "longitude": 114.60276,
        "latitude": 63.0721
      },
      {
        "longitude": 116.89232,
        "latitude": 63.0721
      },
      {
        "longitude": 119.18188,
        "latitude": 63.0721
      },
      {
        "longitude": 121.47144,
        "latitude": 63.0721
      },
      {
        "longitude": 123.761,
        "latitude": 63.0721
      },
      {
        "longitude": 126.05056,
        "latitude": 63.0721
      },
      {
        "longitude": 128.34012,
        "latitude": 63.0721
      },
      {
        "longitude": 130.62968,
        "latitude": 63.0721
      },
      {
        "longitude": 132.91924,
        "latitude": 63.0721
      },
      {
        "longitude": 135.20881,
        "latitude": 63.0721
      },
      {
        "longitude": 137.49837,
        "latitude": 63.0721
      },
      {
        "longitude": 139.78793,
        "latitude": 63.0721
      },
      {
        "longitude": 142.07749,
        "latitude": 63.0721
      },
      {
        "longitude": 144.36705,
        "latitude": 63.0721
      },
      {
        "longitude": 146.65661,
        "latitude": 63.0721
      },
      {
        "longitude": 148.94617,
        "latitude": 63.0721
      },
      {
        "longitude": 151.23573,
        "latitude": 63.0721
      },
      {
        "longitude": 153.52529,
        "latitude": 63.0721
      },
      {
        "longitude": 155.81485,
        "latitude": 63.0721
      },
      {
        "longitude": 158.10441,
        "latitude": 63.0721
      },
      {
        "longitude": 160.39398,
        "latitude": 63.0721
      },
      {
        "longitude": 162.68354,
        "latitude": 63.0721
      },
      {
        "longitude": 164.9731,
        "latitude": 63.0721
      },
      {
        "longitude": 167.26266,
        "latitude": 63.0721
      },
      {
        "longitude": 169.55222,
        "latitude": 63.0721
      },
      {
        "longitude": 171.84178,
        "latitude": 63.0721
      },
      {
        "longitude": 174.13134,
        "latitude": 63.0721
      },
      {
        "longitude": 176.4209,
        "latitude": 63.0721
      },
      {
        "longitude": 178.71046,
        "latitude": 63.0721
      },
      {
        "longitude": 32.17857,
        "latitude": 62.0166
      },
      {
        "longitude": 34.46813,
        "latitude": 62.0166
      },
      {
        "longitude": 36.75769,
        "latitude": 62.0166
      },
      {
        "longitude": 39.04725,
        "latitude": 62.0166
      },
      {
        "longitude": 41.33681,
        "latitude": 62.0166
      },
      {
        "longitude": 43.62637,
        "latitude": 62.0166
      },
      {
        "longitude": 45.91593,
        "latitude": 62.0166
      },
      {
        "longitude": 48.20549,
        "latitude": 62.0166
      },
      {
        "longitude": 50.49505,
        "latitude": 62.0166
      },
      {
        "longitude": 52.78461,
        "latitude": 62.0166
      },
      {
        "longitude": 55.07418,
        "latitude": 62.0166
      },
      {
        "longitude": 57.36374,
        "latitude": 62.0166
      },
      {
        "longitude": 59.6533,
        "latitude": 62.0166
      },
      {
        "longitude": 61.94286,
        "latitude": 62.0166
      },
      {
        "longitude": 64.23242,
        "latitude": 62.0166
      },
      {
        "longitude": 66.52198,
        "latitude": 62.0166
      },
      {
        "longitude": 68.81154,
        "latitude": 62.0166
      },
      {
        "longitude": 71.1011,
        "latitude": 62.0166
      },
      {
        "longitude": 73.39066,
        "latitude": 62.0166
      },
      {
        "longitude": 75.68022,
        "latitude": 62.0166
      },
      {
        "longitude": 77.96978,
        "latitude": 62.0166
      },
      {
        "longitude": 80.25934,
        "latitude": 62.0166
      },
      {
        "longitude": 82.54891,
        "latitude": 62.0166
      },
      {
        "longitude": 84.83847,
        "latitude": 62.0166
      },
      {
        "longitude": 87.12803,
        "latitude": 62.0166
      },
      {
        "longitude": 89.41759,
        "latitude": 62.0166
      },
      {
        "longitude": 91.70715,
        "latitude": 62.0166
      },
      {
        "longitude": 93.99671,
        "latitude": 62.0166
      },
      {
        "longitude": 96.28627,
        "latitude": 62.0166
      },
      {
        "longitude": 98.57583,
        "latitude": 62.0166
      },
      {
        "longitude": 100.86539,
        "latitude": 62.0166
      },
      {
        "longitude": 103.15495,
        "latitude": 62.0166
      },
      {
        "longitude": 105.44451,
        "latitude": 62.0166
      },
      {
        "longitude": 107.73408,
        "latitude": 62.0166
      },
      {
        "longitude": 110.02364,
        "latitude": 62.0166
      },
      {
        "longitude": 112.3132,
        "latitude": 62.0166
      },
      {
        "longitude": 114.60276,
        "latitude": 62.0166
      },
      {
        "longitude": 116.89232,
        "latitude": 62.0166
      },
      {
        "longitude": 119.18188,
        "latitude": 62.0166
      },
      {
        "longitude": 121.47144,
        "latitude": 62.0166
      },
      {
        "longitude": 123.761,
        "latitude": 62.0166
      },
      {
        "longitude": 126.05056,
        "latitude": 62.0166
      },
      {
        "longitude": 128.34012,
        "latitude": 62.0166
      },
      {
        "longitude": 130.62968,
        "latitude": 62.0166
      },
      {
        "longitude": 132.91924,
        "latitude": 62.0166
      },
      {
        "longitude": 135.20881,
        "latitude": 62.0166
      },
      {
        "longitude": 137.49837,
        "latitude": 62.0166
      },
      {
        "longitude": 139.78793,
        "latitude": 62.0166
      },
      {
        "longitude": 142.07749,
        "latitude": 62.0166
      },
      {
        "longitude": 144.36705,
        "latitude": 62.0166
      },
      {
        "longitude": 146.65661,
        "latitude": 62.0166
      },
      {
        "longitude": 148.94617,
        "latitude": 62.0166
      },
      {
        "longitude": 151.23573,
        "latitude": 62.0166
      },
      {
        "longitude": 153.52529,
        "latitude": 62.0166
      },
      {
        "longitude": 155.81485,
        "latitude": 62.0166
      },
      {
        "longitude": 158.10441,
        "latitude": 62.0166
      },
      {
        "longitude": 160.39398,
        "latitude": 62.0166
      },
      {
        "longitude": 162.68354,
        "latitude": 62.0166
      },
      {
        "longitude": 164.9731,
        "latitude": 62.0166
      },
      {
        "longitude": 167.26266,
        "latitude": 62.0166
      },
      {
        "longitude": 169.55222,
        "latitude": 62.0166
      },
      {
        "longitude": 171.84178,
        "latitude": 62.0166
      },
      {
        "longitude": 174.13134,
        "latitude": 62.0166
      },
      {
        "longitude": 29.88901,
        "latitude": 60.92319
      },
      {
        "longitude": 32.17857,
        "latitude": 60.92319
      },
      {
        "longitude": 34.46813,
        "latitude": 60.92319
      },
      {
        "longitude": 36.75769,
        "latitude": 60.92319
      },
      {
        "longitude": 39.04725,
        "latitude": 60.92319
      },
      {
        "longitude": 41.33681,
        "latitude": 60.92319
      },
      {
        "longitude": 43.62637,
        "latitude": 60.92319
      },
      {
        "longitude": 45.91593,
        "latitude": 60.92319
      },
      {
        "longitude": 48.20549,
        "latitude": 60.92319
      },
      {
        "longitude": 50.49505,
        "latitude": 60.92319
      },
      {
        "longitude": 52.78461,
        "latitude": 60.92319
      },
      {
        "longitude": 55.07418,
        "latitude": 60.92319
      },
      {
        "longitude": 57.36374,
        "latitude": 60.92319
      },
      {
        "longitude": 59.6533,
        "latitude": 60.92319
      },
      {
        "longitude": 61.94286,
        "latitude": 60.92319
      },
      {
        "longitude": 64.23242,
        "latitude": 60.92319
      },
      {
        "longitude": 66.52198,
        "latitude": 60.92319
      },
      {
        "longitude": 68.81154,
        "latitude": 60.92319
      },
      {
        "longitude": 71.1011,
        "latitude": 60.92319
      },
      {
        "longitude": 73.39066,
        "latitude": 60.92319
      },
      {
        "longitude": 75.68022,
        "latitude": 60.92319
      },
      {
        "longitude": 77.96978,
        "latitude": 60.92319
      },
      {
        "longitude": 80.25934,
        "latitude": 60.92319
      },
      {
        "longitude": 82.54891,
        "latitude": 60.92319
      },
      {
        "longitude": 84.83847,
        "latitude": 60.92319
      },
      {
        "longitude": 87.12803,
        "latitude": 60.92319
      },
      {
        "longitude": 89.41759,
        "latitude": 60.92319
      },
      {
        "longitude": 91.70715,
        "latitude": 60.92319
      },
      {
        "longitude": 93.99671,
        "latitude": 60.92319
      },
      {
        "longitude": 96.28627,
        "latitude": 60.92319
      },
      {
        "longitude": 98.57583,
        "latitude": 60.92319
      },
      {
        "longitude": 100.86539,
        "latitude": 60.92319
      },
      {
        "longitude": 103.15495,
        "latitude": 60.92319
      },
      {
        "longitude": 105.44451,
        "latitude": 60.92319
      },
      {
        "longitude": 107.73408,
        "latitude": 60.92319
      },
      {
        "longitude": 110.02364,
        "latitude": 60.92319
      },
      {
        "longitude": 112.3132,
        "latitude": 60.92319
      },
      {
        "longitude": 114.60276,
        "latitude": 60.92319
      },
      {
        "longitude": 116.89232,
        "latitude": 60.92319
      },
      {
        "longitude": 119.18188,
        "latitude": 60.92319
      },
      {
        "longitude": 121.47144,
        "latitude": 60.92319
      },
      {
        "longitude": 123.761,
        "latitude": 60.92319
      },
      {
        "longitude": 126.05056,
        "latitude": 60.92319
      },
      {
        "longitude": 128.34012,
        "latitude": 60.92319
      },
      {
        "longitude": 130.62968,
        "latitude": 60.92319
      },
      {
        "longitude": 132.91924,
        "latitude": 60.92319
      },
      {
        "longitude": 135.20881,
        "latitude": 60.92319
      },
      {
        "longitude": 137.49837,
        "latitude": 60.92319
      },
      {
        "longitude": 139.78793,
        "latitude": 60.92319
      },
      {
        "longitude": 142.07749,
        "latitude": 60.92319
      },
      {
        "longitude": 144.36705,
        "latitude": 60.92319
      },
      {
        "longitude": 146.65661,
        "latitude": 60.92319
      },
      {
        "longitude": 148.94617,
        "latitude": 60.92319
      },
      {
        "longitude": 151.23573,
        "latitude": 60.92319
      },
      {
        "longitude": 153.52529,
        "latitude": 60.92319
      },
      {
        "longitude": 155.81485,
        "latitude": 60.92319
      },
      {
        "longitude": 160.39398,
        "latitude": 60.92319
      },
      {
        "longitude": 162.68354,
        "latitude": 60.92319
      },
      {
        "longitude": 164.9731,
        "latitude": 60.92319
      },
      {
        "longitude": 167.26266,
        "latitude": 60.92319
      },
      {
        "longitude": 169.55222,
        "latitude": 60.92319
      },
      {
        "longitude": 27.59944,
        "latitude": 59.79092
      },
      {
        "longitude": 29.88901,
        "latitude": 59.79092
      },
      {
        "longitude": 32.17857,
        "latitude": 59.79092
      },
      {
        "longitude": 34.46813,
        "latitude": 59.79092
      },
      {
        "longitude": 36.75769,
        "latitude": 59.79092
      },
      {
        "longitude": 39.04725,
        "latitude": 59.79092
      },
      {
        "longitude": 41.33681,
        "latitude": 59.79092
      },
      {
        "longitude": 43.62637,
        "latitude": 59.79092
      },
      {
        "longitude": 45.91593,
        "latitude": 59.79092
      },
      {
        "longitude": 48.20549,
        "latitude": 59.79092
      },
      {
        "longitude": 50.49505,
        "latitude": 59.79092
      },
      {
        "longitude": 52.78461,
        "latitude": 59.79092
      },
      {
        "longitude": 55.07418,
        "latitude": 59.79092
      },
      {
        "longitude": 57.36374,
        "latitude": 59.79092
      },
      {
        "longitude": 59.6533,
        "latitude": 59.79092
      },
      {
        "longitude": 61.94286,
        "latitude": 59.79092
      },
      {
        "longitude": 64.23242,
        "latitude": 59.79092
      },
      {
        "longitude": 66.52198,
        "latitude": 59.79092
      },
      {
        "longitude": 68.81154,
        "latitude": 59.79092
      },
      {
        "longitude": 71.1011,
        "latitude": 59.79092
      },
      {
        "longitude": 73.39066,
        "latitude": 59.79092
      },
      {
        "longitude": 75.68022,
        "latitude": 59.79092
      },
      {
        "longitude": 77.96978,
        "latitude": 59.79092
      },
      {
        "longitude": 80.25934,
        "latitude": 59.79092
      },
      {
        "longitude": 82.54891,
        "latitude": 59.79092
      },
      {
        "longitude": 84.83847,
        "latitude": 59.79092
      },
      {
        "longitude": 87.12803,
        "latitude": 59.79092
      },
      {
        "longitude": 89.41759,
        "latitude": 59.79092
      },
      {
        "longitude": 91.70715,
        "latitude": 59.79092
      },
      {
        "longitude": 93.99671,
        "latitude": 59.79092
      },
      {
        "longitude": 96.28627,
        "latitude": 59.79092
      },
      {
        "longitude": 98.57583,
        "latitude": 59.79092
      },
      {
        "longitude": 100.86539,
        "latitude": 59.79092
      },
      {
        "longitude": 103.15495,
        "latitude": 59.79092
      },
      {
        "longitude": 105.44451,
        "latitude": 59.79092
      },
      {
        "longitude": 107.73408,
        "latitude": 59.79092
      },
      {
        "longitude": 110.02364,
        "latitude": 59.79092
      },
      {
        "longitude": 112.3132,
        "latitude": 59.79092
      },
      {
        "longitude": 114.60276,
        "latitude": 59.79092
      },
      {
        "longitude": 116.89232,
        "latitude": 59.79092
      },
      {
        "longitude": 119.18188,
        "latitude": 59.79092
      },
      {
        "longitude": 121.47144,
        "latitude": 59.79092
      },
      {
        "longitude": 123.761,
        "latitude": 59.79092
      },
      {
        "longitude": 126.05056,
        "latitude": 59.79092
      },
      {
        "longitude": 128.34012,
        "latitude": 59.79092
      },
      {
        "longitude": 130.62968,
        "latitude": 59.79092
      },
      {
        "longitude": 132.91924,
        "latitude": 59.79092
      },
      {
        "longitude": 135.20881,
        "latitude": 59.79092
      },
      {
        "longitude": 137.49837,
        "latitude": 59.79092
      },
      {
        "longitude": 139.78793,
        "latitude": 59.79092
      },
      {
        "longitude": 142.07749,
        "latitude": 59.79092
      },
      {
        "longitude": 144.36705,
        "latitude": 59.79092
      },
      {
        "longitude": 146.65661,
        "latitude": 59.79092
      },
      {
        "longitude": 148.94617,
        "latitude": 59.79092
      },
      {
        "longitude": 151.23573,
        "latitude": 59.79092
      },
      {
        "longitude": 153.52529,
        "latitude": 59.79092
      },
      {
        "longitude": 160.39398,
        "latitude": 59.79092
      },
      {
        "longitude": 162.68354,
        "latitude": 59.79092
      },
      {
        "longitude": 27.59944,
        "latitude": 58.61887
      },
      {
        "longitude": 29.88901,
        "latitude": 58.61887
      },
      {
        "longitude": 32.17857,
        "latitude": 58.61887
      },
      {
        "longitude": 34.46813,
        "latitude": 58.61887
      },
      {
        "longitude": 36.75769,
        "latitude": 58.61887
      },
      {
        "longitude": 39.04725,
        "latitude": 58.61887
      },
      {
        "longitude": 41.33681,
        "latitude": 58.61887
      },
      {
        "longitude": 43.62637,
        "latitude": 58.61887
      },
      {
        "longitude": 45.91593,
        "latitude": 58.61887
      },
      {
        "longitude": 48.20549,
        "latitude": 58.61887
      },
      {
        "longitude": 50.49505,
        "latitude": 58.61887
      },
      {
        "longitude": 52.78461,
        "latitude": 58.61887
      },
      {
        "longitude": 55.07418,
        "latitude": 58.61887
      },
      {
        "longitude": 57.36374,
        "latitude": 58.61887
      },
      {
        "longitude": 59.6533,
        "latitude": 58.61887
      },
      {
        "longitude": 61.94286,
        "latitude": 58.61887
      },
      {
        "longitude": 64.23242,
        "latitude": 58.61887
      },
      {
        "longitude": 66.52198,
        "latitude": 58.61887
      },
      {
        "longitude": 68.81154,
        "latitude": 58.61887
      },
      {
        "longitude": 71.1011,
        "latitude": 58.61887
      },
      {
        "longitude": 73.39066,
        "latitude": 58.61887
      },
      {
        "longitude": 75.68022,
        "latitude": 58.61887
      },
      {
        "longitude": 77.96978,
        "latitude": 58.61887
      },
      {
        "longitude": 80.25934,
        "latitude": 58.61887
      },
      {
        "longitude": 82.54891,
        "latitude": 58.61887
      },
      {
        "longitude": 84.83847,
        "latitude": 58.61887
      },
      {
        "longitude": 87.12803,
        "latitude": 58.61887
      },
      {
        "longitude": 89.41759,
        "latitude": 58.61887
      },
      {
        "longitude": 91.70715,
        "latitude": 58.61887
      },
      {
        "longitude": 93.99671,
        "latitude": 58.61887
      },
      {
        "longitude": 96.28627,
        "latitude": 58.61887
      },
      {
        "longitude": 98.57583,
        "latitude": 58.61887
      },
      {
        "longitude": 100.86539,
        "latitude": 58.61887
      },
      {
        "longitude": 103.15495,
        "latitude": 58.61887
      },
      {
        "longitude": 105.44451,
        "latitude": 58.61887
      },
      {
        "longitude": 107.73408,
        "latitude": 58.61887
      },
      {
        "longitude": 110.02364,
        "latitude": 58.61887
      },
      {
        "longitude": 112.3132,
        "latitude": 58.61887
      },
      {
        "longitude": 114.60276,
        "latitude": 58.61887
      },
      {
        "longitude": 116.89232,
        "latitude": 58.61887
      },
      {
        "longitude": 119.18188,
        "latitude": 58.61887
      },
      {
        "longitude": 121.47144,
        "latitude": 58.61887
      },
      {
        "longitude": 123.761,
        "latitude": 58.61887
      },
      {
        "longitude": 126.05056,
        "latitude": 58.61887
      },
      {
        "longitude": 128.34012,
        "latitude": 58.61887
      },
      {
        "longitude": 130.62968,
        "latitude": 58.61887
      },
      {
        "longitude": 132.91924,
        "latitude": 58.61887
      },
      {
        "longitude": 135.20881,
        "latitude": 58.61887
      },
      {
        "longitude": 137.49837,
        "latitude": 58.61887
      },
      {
        "longitude": 139.78793,
        "latitude": 58.61887
      },
      {
        "longitude": 160.39398,
        "latitude": 58.61887
      },
      {
        "longitude": 27.59944,
        "latitude": 57.40615
      },
      {
        "longitude": 29.88901,
        "latitude": 57.40615
      },
      {
        "longitude": 32.17857,
        "latitude": 57.40615
      },
      {
        "longitude": 34.46813,
        "latitude": 57.40615
      },
      {
        "longitude": 36.75769,
        "latitude": 57.40615
      },
      {
        "longitude": 39.04725,
        "latitude": 57.40615
      },
      {
        "longitude": 41.33681,
        "latitude": 57.40615
      },
      {
        "longitude": 43.62637,
        "latitude": 57.40615
      },
      {
        "longitude": 45.91593,
        "latitude": 57.40615
      },
      {
        "longitude": 48.20549,
        "latitude": 57.40615
      },
      {
        "longitude": 50.49505,
        "latitude": 57.40615
      },
      {
        "longitude": 52.78461,
        "latitude": 57.40615
      },
      {
        "longitude": 55.07418,
        "latitude": 57.40615
      },
      {
        "longitude": 57.36374,
        "latitude": 57.40615
      },
      {
        "longitude": 59.6533,
        "latitude": 57.40615
      },
      {
        "longitude": 61.94286,
        "latitude": 57.40615
      },
      {
        "longitude": 64.23242,
        "latitude": 57.40615
      },
      {
        "longitude": 66.52198,
        "latitude": 57.40615
      },
      {
        "longitude": 68.81154,
        "latitude": 57.40615
      },
      {
        "longitude": 71.1011,
        "latitude": 57.40615
      },
      {
        "longitude": 73.39066,
        "latitude": 57.40615
      },
      {
        "longitude": 75.68022,
        "latitude": 57.40615
      },
      {
        "longitude": 77.96978,
        "latitude": 57.40615
      },
      {
        "longitude": 80.25934,
        "latitude": 57.40615
      },
      {
        "longitude": 82.54891,
        "latitude": 57.40615
      },
      {
        "longitude": 84.83847,
        "latitude": 57.40615
      },
      {
        "longitude": 87.12803,
        "latitude": 57.40615
      },
      {
        "longitude": 89.41759,
        "latitude": 57.40615
      },
      {
        "longitude": 91.70715,
        "latitude": 57.40615
      },
      {
        "longitude": 93.99671,
        "latitude": 57.40615
      },
      {
        "longitude": 96.28627,
        "latitude": 57.40615
      },
      {
        "longitude": 98.57583,
        "latitude": 57.40615
      },
      {
        "longitude": 100.86539,
        "latitude": 57.40615
      },
      {
        "longitude": 103.15495,
        "latitude": 57.40615
      },
      {
        "longitude": 105.44451,
        "latitude": 57.40615
      },
      {
        "longitude": 107.73408,
        "latitude": 57.40615
      },
      {
        "longitude": 110.02364,
        "latitude": 57.40615
      },
      {
        "longitude": 112.3132,
        "latitude": 57.40615
      },
      {
        "longitude": 114.60276,
        "latitude": 57.40615
      },
      {
        "longitude": 116.89232,
        "latitude": 57.40615
      },
      {
        "longitude": 119.18188,
        "latitude": 57.40615
      },
      {
        "longitude": 121.47144,
        "latitude": 57.40615
      },
      {
        "longitude": 123.761,
        "latitude": 57.40615
      },
      {
        "longitude": 126.05056,
        "latitude": 57.40615
      },
      {
        "longitude": 128.34012,
        "latitude": 57.40615
      },
      {
        "longitude": 130.62968,
        "latitude": 57.40615
      },
      {
        "longitude": 132.91924,
        "latitude": 57.40615
      },
      {
        "longitude": 135.20881,
        "latitude": 57.40615
      },
      {
        "longitude": 137.49837,
        "latitude": 57.40615
      },
      {
        "longitude": 158.10441,
        "latitude": 57.40615
      },
      {
        "longitude": 160.39398,
        "latitude": 57.40615
      },
      {
        "longitude": 162.68354,
        "latitude": 57.40615
      },
      {
        "longitude": 29.88901,
        "latitude": 56.15191
      },
      {
        "longitude": 32.17857,
        "latitude": 56.15191
      },
      {
        "longitude": 34.46813,
        "latitude": 56.15191
      },
      {
        "longitude": 36.75769,
        "latitude": 56.15191
      },
      {
        "longitude": 39.04725,
        "latitude": 56.15191
      },
      {
        "longitude": 41.33681,
        "latitude": 56.15191
      },
      {
        "longitude": 43.62637,
        "latitude": 56.15191
      },
      {
        "longitude": 45.91593,
        "latitude": 56.15191
      },
      {
        "longitude": 48.20549,
        "latitude": 56.15191
      },
      {
        "longitude": 50.49505,
        "latitude": 56.15191
      },
      {
        "longitude": 52.78461,
        "latitude": 56.15191
      },
      {
        "longitude": 55.07418,
        "latitude": 56.15191
      },
      {
        "longitude": 57.36374,
        "latitude": 56.15191
      },
      {
        "longitude": 59.6533,
        "latitude": 56.15191
      },
      {
        "longitude": 61.94286,
        "latitude": 56.15191
      },
      {
        "longitude": 64.23242,
        "latitude": 56.15191
      },
      {
        "longitude": 66.52198,
        "latitude": 56.15191
      },
      {
        "longitude": 68.81154,
        "latitude": 56.15191
      },
      {
        "longitude": 71.1011,
        "latitude": 56.15191
      },
      {
        "longitude": 73.39066,
        "latitude": 56.15191
      },
      {
        "longitude": 75.68022,
        "latitude": 56.15191
      },
      {
        "longitude": 77.96978,
        "latitude": 56.15191
      },
      {
        "longitude": 80.25934,
        "latitude": 56.15191
      },
      {
        "longitude": 82.54891,
        "latitude": 56.15191
      },
      {
        "longitude": 84.83847,
        "latitude": 56.15191
      },
      {
        "longitude": 87.12803,
        "latitude": 56.15191
      },
      {
        "longitude": 89.41759,
        "latitude": 56.15191
      },
      {
        "longitude": 91.70715,
        "latitude": 56.15191
      },
      {
        "longitude": 93.99671,
        "latitude": 56.15191
      },
      {
        "longitude": 96.28627,
        "latitude": 56.15191
      },
      {
        "longitude": 98.57583,
        "latitude": 56.15191
      },
      {
        "longitude": 100.86539,
        "latitude": 56.15191
      },
      {
        "longitude": 103.15495,
        "latitude": 56.15191
      },
      {
        "longitude": 105.44451,
        "latitude": 56.15191
      },
      {
        "longitude": 107.73408,
        "latitude": 56.15191
      },
      {
        "longitude": 110.02364,
        "latitude": 56.15191
      },
      {
        "longitude": 112.3132,
        "latitude": 56.15191
      },
      {
        "longitude": 114.60276,
        "latitude": 56.15191
      },
      {
        "longitude": 116.89232,
        "latitude": 56.15191
      },
      {
        "longitude": 119.18188,
        "latitude": 56.15191
      },
      {
        "longitude": 121.47144,
        "latitude": 56.15191
      },
      {
        "longitude": 123.761,
        "latitude": 56.15191
      },
      {
        "longitude": 126.05056,
        "latitude": 56.15191
      },
      {
        "longitude": 128.34012,
        "latitude": 56.15191
      },
      {
        "longitude": 130.62968,
        "latitude": 56.15191
      },
      {
        "longitude": 132.91924,
        "latitude": 56.15191
      },
      {
        "longitude": 135.20881,
        "latitude": 56.15191
      },
      {
        "longitude": 137.49837,
        "latitude": 56.15191
      },
      {
        "longitude": 155.81485,
        "latitude": 56.15191
      },
      {
        "longitude": 158.10441,
        "latitude": 56.15191
      },
      {
        "longitude": 160.39398,
        "latitude": 56.15191
      },
      {
        "longitude": 20.73076,
        "latitude": 54.85535
      },
      {
        "longitude": 32.17857,
        "latitude": 54.85535
      },
      {
        "longitude": 34.46813,
        "latitude": 54.85535
      },
      {
        "longitude": 36.75769,
        "latitude": 54.85535
      },
      {
        "longitude": 39.04725,
        "latitude": 54.85535
      },
      {
        "longitude": 41.33681,
        "latitude": 54.85535
      },
      {
        "longitude": 43.62637,
        "latitude": 54.85535
      },
      {
        "longitude": 45.91593,
        "latitude": 54.85535
      },
      {
        "longitude": 48.20549,
        "latitude": 54.85535
      },
      {
        "longitude": 50.49505,
        "latitude": 54.85535
      },
      {
        "longitude": 52.78461,
        "latitude": 54.85535
      },
      {
        "longitude": 55.07418,
        "latitude": 54.85535
      },
      {
        "longitude": 57.36374,
        "latitude": 54.85535
      },
      {
        "longitude": 59.6533,
        "latitude": 54.85535
      },
      {
        "longitude": 61.94286,
        "latitude": 54.85535
      },
      {
        "longitude": 64.23242,
        "latitude": 54.85535
      },
      {
        "longitude": 66.52198,
        "latitude": 54.85535
      },
      {
        "longitude": 71.1011,
        "latitude": 54.85535
      },
      {
        "longitude": 73.39066,
        "latitude": 54.85535
      },
      {
        "longitude": 75.68022,
        "latitude": 54.85535
      },
      {
        "longitude": 77.96978,
        "latitude": 54.85535
      },
      {
        "longitude": 80.25934,
        "latitude": 54.85535
      },
      {
        "longitude": 82.54891,
        "latitude": 54.85535
      },
      {
        "longitude": 84.83847,
        "latitude": 54.85535
      },
      {
        "longitude": 87.12803,
        "latitude": 54.85535
      },
      {
        "longitude": 89.41759,
        "latitude": 54.85535
      },
      {
        "longitude": 91.70715,
        "latitude": 54.85535
      },
      {
        "longitude": 93.99671,
        "latitude": 54.85535
      },
      {
        "longitude": 96.28627,
        "latitude": 54.85535
      },
      {
        "longitude": 98.57583,
        "latitude": 54.85535
      },
      {
        "longitude": 100.86539,
        "latitude": 54.85535
      },
      {
        "longitude": 103.15495,
        "latitude": 54.85535
      },
      {
        "longitude": 105.44451,
        "latitude": 54.85535
      },
      {
        "longitude": 107.73408,
        "latitude": 54.85535
      },
      {
        "longitude": 110.02364,
        "latitude": 54.85535
      },
      {
        "longitude": 112.3132,
        "latitude": 54.85535
      },
      {
        "longitude": 114.60276,
        "latitude": 54.85535
      },
      {
        "longitude": 116.89232,
        "latitude": 54.85535
      },
      {
        "longitude": 119.18188,
        "latitude": 54.85535
      },
      {
        "longitude": 121.47144,
        "latitude": 54.85535
      },
      {
        "longitude": 123.761,
        "latitude": 54.85535
      },
      {
        "longitude": 126.05056,
        "latitude": 54.85535
      },
      {
        "longitude": 128.34012,
        "latitude": 54.85535
      },
      {
        "longitude": 130.62968,
        "latitude": 54.85535
      },
      {
        "longitude": 132.91924,
        "latitude": 54.85535
      },
      {
        "longitude": 135.20881,
        "latitude": 54.85535
      },
      {
        "longitude": 155.81485,
        "latitude": 54.85535
      },
      {
        "longitude": 158.10441,
        "latitude": 54.85535
      },
      {
        "longitude": 160.39398,
        "latitude": 54.85535
      },
      {
        "longitude": 34.46813,
        "latitude": 53.51573
      },
      {
        "longitude": 36.75769,
        "latitude": 53.51573
      },
      {
        "longitude": 39.04725,
        "latitude": 53.51573
      },
      {
        "longitude": 41.33681,
        "latitude": 53.51573
      },
      {
        "longitude": 43.62637,
        "latitude": 53.51573
      },
      {
        "longitude": 45.91593,
        "latitude": 53.51573
      },
      {
        "longitude": 48.20549,
        "latitude": 53.51573
      },
      {
        "longitude": 50.49505,
        "latitude": 53.51573
      },
      {
        "longitude": 52.78461,
        "latitude": 53.51573
      },
      {
        "longitude": 55.07418,
        "latitude": 53.51573
      },
      {
        "longitude": 57.36374,
        "latitude": 53.51573
      },
      {
        "longitude": 59.6533,
        "latitude": 53.51573
      },
      {
        "longitude": 77.96978,
        "latitude": 53.51573
      },
      {
        "longitude": 80.25934,
        "latitude": 53.51573
      },
      {
        "longitude": 82.54891,
        "latitude": 53.51573
      },
      {
        "longitude": 84.83847,
        "latitude": 53.51573
      },
      {
        "longitude": 87.12803,
        "latitude": 53.51573
      },
      {
        "longitude": 89.41759,
        "latitude": 53.51573
      },
      {
        "longitude": 91.70715,
        "latitude": 53.51573
      },
      {
        "longitude": 93.99671,
        "latitude": 53.51573
      },
      {
        "longitude": 96.28627,
        "latitude": 53.51573
      },
      {
        "longitude": 98.57583,
        "latitude": 53.51573
      },
      {
        "longitude": 100.86539,
        "latitude": 53.51573
      },
      {
        "longitude": 103.15495,
        "latitude": 53.51573
      },
      {
        "longitude": 105.44451,
        "latitude": 53.51573
      },
      {
        "longitude": 107.73408,
        "latitude": 53.51573
      },
      {
        "longitude": 110.02364,
        "latitude": 53.51573
      },
      {
        "longitude": 112.3132,
        "latitude": 53.51573
      },
      {
        "longitude": 114.60276,
        "latitude": 53.51573
      },
      {
        "longitude": 116.89232,
        "latitude": 53.51573
      },
      {
        "longitude": 119.18188,
        "latitude": 53.51573
      },
      {
        "longitude": 121.47144,
        "latitude": 53.51573
      },
      {
        "longitude": 123.761,
        "latitude": 53.51573
      },
      {
        "longitude": 126.05056,
        "latitude": 53.51573
      },
      {
        "longitude": 128.34012,
        "latitude": 53.51573
      },
      {
        "longitude": 130.62968,
        "latitude": 53.51573
      },
      {
        "longitude": 132.91924,
        "latitude": 53.51573
      },
      {
        "longitude": 135.20881,
        "latitude": 53.51573
      },
      {
        "longitude": 137.49837,
        "latitude": 53.51573
      },
      {
        "longitude": 139.78793,
        "latitude": 53.51573
      },
      {
        "longitude": 142.07749,
        "latitude": 53.51573
      },
      {
        "longitude": 155.81485,
        "latitude": 53.51573
      },
      {
        "longitude": 158.10441,
        "latitude": 53.51573
      },
      {
        "longitude": 34.46813,
        "latitude": 52.13238
      },
      {
        "longitude": 36.75769,
        "latitude": 52.13238
      },
      {
        "longitude": 39.04725,
        "latitude": 52.13238
      },
      {
        "longitude": 41.33681,
        "latitude": 52.13238
      },
      {
        "longitude": 43.62637,
        "latitude": 52.13238
      },
      {
        "longitude": 45.91593,
        "latitude": 52.13238
      },
      {
        "longitude": 48.20549,
        "latitude": 52.13238
      },
      {
        "longitude": 50.49505,
        "latitude": 52.13238
      },
      {
        "longitude": 52.78461,
        "latitude": 52.13238
      },
      {
        "longitude": 55.07418,
        "latitude": 52.13238
      },
      {
        "longitude": 57.36374,
        "latitude": 52.13238
      },
      {
        "longitude": 59.6533,
        "latitude": 52.13238
      },
      {
        "longitude": 80.25934,
        "latitude": 52.13238
      },
      {
        "longitude": 82.54891,
        "latitude": 52.13238
      },
      {
        "longitude": 84.83847,
        "latitude": 52.13238
      },
      {
        "longitude": 87.12803,
        "latitude": 52.13238
      },
      {
        "longitude": 89.41759,
        "latitude": 52.13238
      },
      {
        "longitude": 91.70715,
        "latitude": 52.13238
      },
      {
        "longitude": 93.99671,
        "latitude": 52.13238
      },
      {
        "longitude": 96.28627,
        "latitude": 52.13238
      },
      {
        "longitude": 98.57583,
        "latitude": 52.13238
      },
      {
        "longitude": 100.86539,
        "latitude": 52.13238
      },
      {
        "longitude": 103.15495,
        "latitude": 52.13238
      },
      {
        "longitude": 105.44451,
        "latitude": 52.13238
      },
      {
        "longitude": 107.73408,
        "latitude": 52.13238
      },
      {
        "longitude": 110.02364,
        "latitude": 52.13238
      },
      {
        "longitude": 112.3132,
        "latitude": 52.13238
      },
      {
        "longitude": 114.60276,
        "latitude": 52.13238
      },
      {
        "longitude": 116.89232,
        "latitude": 52.13238
      },
      {
        "longitude": 119.18188,
        "latitude": 52.13238
      },
      {
        "longitude": 128.34012,
        "latitude": 52.13238
      },
      {
        "longitude": 130.62968,
        "latitude": 52.13238
      },
      {
        "longitude": 132.91924,
        "latitude": 52.13238
      },
      {
        "longitude": 135.20881,
        "latitude": 52.13238
      },
      {
        "longitude": 137.49837,
        "latitude": 52.13238
      },
      {
        "longitude": 139.78793,
        "latitude": 52.13238
      },
      {
        "longitude": 142.07749,
        "latitude": 52.13238
      },
      {
        "longitude": 158.10441,
        "latitude": 52.13238
      },
      {
        "longitude": 36.75769,
        "latitude": 50.70471
      },
      {
        "longitude": 39.04725,
        "latitude": 50.70471
      },
      {
        "longitude": 41.33681,
        "latitude": 50.70471
      },
      {
        "longitude": 43.62637,
        "latitude": 50.70471
      },
      {
        "longitude": 45.91593,
        "latitude": 50.70471
      },
      {
        "longitude": 48.20549,
        "latitude": 50.70471
      },
      {
        "longitude": 59.6533,
        "latitude": 50.70471
      },
      {
        "longitude": 84.83847,
        "latitude": 50.70471
      },
      {
        "longitude": 87.12803,
        "latitude": 50.70471
      },
      {
        "longitude": 89.41759,
        "latitude": 50.70471
      },
      {
        "longitude": 93.99671,
        "latitude": 50.70471
      },
      {
        "longitude": 96.28627,
        "latitude": 50.70471
      },
      {
        "longitude": 103.15495,
        "latitude": 50.70471
      },
      {
        "longitude": 105.44451,
        "latitude": 50.70471
      },
      {
        "longitude": 107.73408,
        "latitude": 50.70471
      },
      {
        "longitude": 110.02364,
        "latitude": 50.70471
      },
      {
        "longitude": 112.3132,
        "latitude": 50.70471
      },
      {
        "longitude": 114.60276,
        "latitude": 50.70471
      },
      {
        "longitude": 116.89232,
        "latitude": 50.70471
      },
      {
        "longitude": 119.18188,
        "latitude": 50.70471
      },
      {
        "longitude": 128.34012,
        "latitude": 50.70471
      },
      {
        "longitude": 130.62968,
        "latitude": 50.70471
      },
      {
        "longitude": 132.91924,
        "latitude": 50.70471
      },
      {
        "longitude": 135.20881,
        "latitude": 50.70471
      },
      {
        "longitude": 137.49837,
        "latitude": 50.70471
      },
      {
        "longitude": 139.78793,
        "latitude": 50.70471
      },
      {
        "longitude": 142.07749,
        "latitude": 50.70471
      },
      {
        "longitude": 41.33681,
        "latitude": 49.2322
      },
      {
        "longitude": 43.62637,
        "latitude": 49.2322
      },
      {
        "longitude": 45.91593,
        "latitude": 49.2322
      },
      {
        "longitude": 87.12803,
        "latitude": 49.2322
      },
      {
        "longitude": 130.62968,
        "latitude": 49.2322
      },
      {
        "longitude": 132.91924,
        "latitude": 49.2322
      },
      {
        "longitude": 135.20881,
        "latitude": 49.2322
      },
      {
        "longitude": 137.49837,
        "latitude": 49.2322
      },
      {
        "longitude": 139.78793,
        "latitude": 49.2322
      },
      {
        "longitude": 142.07749,
        "latitude": 49.2322
      },
      {
        "longitude": 39.04725,
        "latitude": 47.71445
      },
      {
        "longitude": 41.33681,
        "latitude": 47.71445
      },
      {
        "longitude": 43.62637,
        "latitude": 47.71445
      },
      {
        "longitude": 45.91593,
        "latitude": 47.71445
      },
      {
        "longitude": 135.20881,
        "latitude": 47.71445
      },
      {
        "longitude": 137.49837,
        "latitude": 47.71445
      },
      {
        "longitude": 142.07749,
        "latitude": 47.71445
      },
      {
        "longitude": 39.04725,
        "latitude": 46.15117
      },
      {
        "longitude": 41.33681,
        "latitude": 46.15117
      },
      {
        "longitude": 43.62637,
        "latitude": 46.15117
      },
      {
        "longitude": 45.91593,
        "latitude": 46.15117
      },
      {
        "longitude": 48.20549,
        "latitude": 46.15117
      },
      {
        "longitude": 135.20881,
        "latitude": 46.15117
      },
      {
        "longitude": 137.49837,
        "latitude": 46.15117
      },
      {
        "longitude": 39.04725,
        "latitude": 44.54219
      },
      {
        "longitude": 41.33681,
        "latitude": 44.54219
      },
      {
        "longitude": 43.62637,
        "latitude": 44.54219
      },
      {
        "longitude": 45.91593,
        "latitude": 44.54219
      },
      {
        "longitude": 132.91924,
        "latitude": 44.54219
      },
      {
        "longitude": 135.20881,
        "latitude": 44.54219
      },
      {
        "longitude": 43.62637,
        "latitude": 42.88748
      },
      {
        "longitude": 45.91593,
        "latitude": 42.88748
      },
      {
        "longitude": 130.62968,
        "latitude": 42.88748
      },
      {
        "longitude": 132.91924,
        "latitude": 42.88748
      }
    ],
    "editor.pixelCountrySeries.SJ": [
      {
        "longitude": 20.73076,
        "latitude": 80.31618
      },
      {
        "longitude": 23.02032,
        "latitude": 80.31618
      },
      {
        "longitude": 16.15164,
        "latitude": 79.92337
      },
      {
        "longitude": 18.4412,
        "latitude": 79.92337
      },
      {
        "longitude": 20.73076,
        "latitude": 79.92337
      },
      {
        "longitude": 23.02032,
        "latitude": 79.92337
      },
      {
        "longitude": 25.30988,
        "latitude": 79.92337
      },
      {
        "longitude": 11.57252,
        "latitude": 79.51479
      },
      {
        "longitude": 13.86208,
        "latitude": 79.51479
      },
      {
        "longitude": 16.15164,
        "latitude": 79.51479
      },
      {
        "longitude": 18.4412,
        "latitude": 79.51479
      },
      {
        "longitude": 20.73076,
        "latitude": 79.51479
      },
      {
        "longitude": 23.02032,
        "latitude": 79.51479
      },
      {
        "longitude": 25.30988,
        "latitude": 79.51479
      },
      {
        "longitude": 11.57252,
        "latitude": 79.08985
      },
      {
        "longitude": 13.86208,
        "latitude": 79.08985
      },
      {
        "longitude": 16.15164,
        "latitude": 79.08985
      },
      {
        "longitude": 18.4412,
        "latitude": 79.08985
      },
      {
        "longitude": 13.86208,
        "latitude": 78.64789
      },
      {
        "longitude": 16.15164,
        "latitude": 78.64789
      },
      {
        "longitude": 18.4412,
        "latitude": 78.64789
      },
      {
        "longitude": 13.86208,
        "latitude": 78.18828
      },
      {
        "longitude": 16.15164,
        "latitude": 78.18828
      },
      {
        "longitude": 18.4412,
        "latitude": 78.18828
      },
      {
        "longitude": 20.73076,
        "latitude": 78.18828
      },
      {
        "longitude": 16.15164,
        "latitude": 77.71033
      },
      {
        "longitude": 23.02032,
        "latitude": 77.71033
      },
      {
        "longitude": 16.15164,
        "latitude": 77.21336
      },
      {
        "longitude": 16.15164,
        "latitude": 76.69664
      }
    ],
    "editor.pixelCountrySeries.US": [
      {
        "longitude": -157.85499,
        "latitude": 71.02787
      },
      {
        "longitude": -155.56543,
        "latitude": 71.02787
      },
      {
        "longitude": -153.27586,
        "latitude": 71.02787
      },
      {
        "longitude": -162.43411,
        "latitude": 70.26929
      },
      {
        "longitude": -160.14455,
        "latitude": 70.26929
      },
      {
        "longitude": -157.85499,
        "latitude": 70.26929
      },
      {
        "longitude": -155.56543,
        "latitude": 70.26929
      },
      {
        "longitude": -153.27586,
        "latitude": 70.26929
      },
      {
        "longitude": -150.9863,
        "latitude": 70.26929
      },
      {
        "longitude": -148.69674,
        "latitude": 70.26929
      },
      {
        "longitude": -146.40718,
        "latitude": 70.26929
      },
      {
        "longitude": -162.43411,
        "latitude": 69.48164
      },
      {
        "longitude": -160.14455,
        "latitude": 69.48164
      },
      {
        "longitude": -157.85499,
        "latitude": 69.48164
      },
      {
        "longitude": -155.56543,
        "latitude": 69.48164
      },
      {
        "longitude": -153.27586,
        "latitude": 69.48164
      },
      {
        "longitude": -150.9863,
        "latitude": 69.48164
      },
      {
        "longitude": -148.69674,
        "latitude": 69.48164
      },
      {
        "longitude": -146.40718,
        "latitude": 69.48164
      },
      {
        "longitude": -144.11762,
        "latitude": 69.48164
      },
      {
        "longitude": -141.82806,
        "latitude": 69.48164
      },
      {
        "longitude": -164.72367,
        "latitude": 68.66395
      },
      {
        "longitude": -162.43411,
        "latitude": 68.66395
      },
      {
        "longitude": -160.14455,
        "latitude": 68.66395
      },
      {
        "longitude": -157.85499,
        "latitude": 68.66395
      },
      {
        "longitude": -155.56543,
        "latitude": 68.66395
      },
      {
        "longitude": -153.27586,
        "latitude": 68.66395
      },
      {
        "longitude": -150.9863,
        "latitude": 68.66395
      },
      {
        "longitude": -148.69674,
        "latitude": 68.66395
      },
      {
        "longitude": -146.40718,
        "latitude": 68.66395
      },
      {
        "longitude": -144.11762,
        "latitude": 68.66395
      },
      {
        "longitude": -141.82806,
        "latitude": 68.66395
      },
      {
        "longitude": -164.72367,
        "latitude": 67.81526
      },
      {
        "longitude": -162.43411,
        "latitude": 67.81526
      },
      {
        "longitude": -160.14455,
        "latitude": 67.81526
      },
      {
        "longitude": -157.85499,
        "latitude": 67.81526
      },
      {
        "longitude": -155.56543,
        "latitude": 67.81526
      },
      {
        "longitude": -153.27586,
        "latitude": 67.81526
      },
      {
        "longitude": -150.9863,
        "latitude": 67.81526
      },
      {
        "longitude": -148.69674,
        "latitude": 67.81526
      },
      {
        "longitude": -146.40718,
        "latitude": 67.81526
      },
      {
        "longitude": -144.11762,
        "latitude": 67.81526
      },
      {
        "longitude": -141.82806,
        "latitude": 67.81526
      },
      {
        "longitude": -160.14455,
        "latitude": 66.93457
      },
      {
        "longitude": -157.85499,
        "latitude": 66.93457
      },
      {
        "longitude": -155.56543,
        "latitude": 66.93457
      },
      {
        "longitude": -153.27586,
        "latitude": 66.93457
      },
      {
        "longitude": -150.9863,
        "latitude": 66.93457
      },
      {
        "longitude": -148.69674,
        "latitude": 66.93457
      },
      {
        "longitude": -146.40718,
        "latitude": 66.93457
      },
      {
        "longitude": -144.11762,
        "latitude": 66.93457
      },
      {
        "longitude": -141.82806,
        "latitude": 66.93457
      },
      {
        "longitude": -167.01323,
        "latitude": 66.02091
      },
      {
        "longitude": -164.72367,
        "latitude": 66.02091
      },
      {
        "longitude": -162.43411,
        "latitude": 66.02091
      },
      {
        "longitude": -160.14455,
        "latitude": 66.02091
      },
      {
        "longitude": -157.85499,
        "latitude": 66.02091
      },
      {
        "longitude": -155.56543,
        "latitude": 66.02091
      },
      {
        "longitude": -153.27586,
        "latitude": 66.02091
      },
      {
        "longitude": -150.9863,
        "latitude": 66.02091
      },
      {
        "longitude": -148.69674,
        "latitude": 66.02091
      },
      {
        "longitude": -146.40718,
        "latitude": 66.02091
      },
      {
        "longitude": -144.11762,
        "latitude": 66.02091
      },
      {
        "longitude": -141.82806,
        "latitude": 66.02091
      },
      {
        "longitude": -167.01323,
        "latitude": 65.07327
      },
      {
        "longitude": -164.72367,
        "latitude": 65.07327
      },
      {
        "longitude": -162.43411,
        "latitude": 65.07327
      },
      {
        "longitude": -160.14455,
        "latitude": 65.07327
      },
      {
        "longitude": -157.85499,
        "latitude": 65.07327
      },
      {
        "longitude": -155.56543,
        "latitude": 65.07327
      },
      {
        "longitude": -153.27586,
        "latitude": 65.07327
      },
      {
        "longitude": -150.9863,
        "latitude": 65.07327
      },
      {
        "longitude": -148.69674,
        "latitude": 65.07327
      },
      {
        "longitude": -146.40718,
        "latitude": 65.07327
      },
      {
        "longitude": -144.11762,
        "latitude": 65.07327
      },
      {
        "longitude": -141.82806,
        "latitude": 65.07327
      },
      {
        "longitude": -160.14455,
        "latitude": 64.09067
      },
      {
        "longitude": -157.85499,
        "latitude": 64.09067
      },
      {
        "longitude": -155.56543,
        "latitude": 64.09067
      },
      {
        "longitude": -153.27586,
        "latitude": 64.09067
      },
      {
        "longitude": -150.9863,
        "latitude": 64.09067
      },
      {
        "longitude": -148.69674,
        "latitude": 64.09067
      },
      {
        "longitude": -146.40718,
        "latitude": 64.09067
      },
      {
        "longitude": -144.11762,
        "latitude": 64.09067
      },
      {
        "longitude": -141.82806,
        "latitude": 64.09067
      },
      {
        "longitude": -164.72367,
        "latitude": 63.0721
      },
      {
        "longitude": -162.43411,
        "latitude": 63.0721
      },
      {
        "longitude": -160.14455,
        "latitude": 63.0721
      },
      {
        "longitude": -157.85499,
        "latitude": 63.0721
      },
      {
        "longitude": -155.56543,
        "latitude": 63.0721
      },
      {
        "longitude": -153.27586,
        "latitude": 63.0721
      },
      {
        "longitude": -150.9863,
        "latitude": 63.0721
      },
      {
        "longitude": -148.69674,
        "latitude": 63.0721
      },
      {
        "longitude": -146.40718,
        "latitude": 63.0721
      },
      {
        "longitude": -144.11762,
        "latitude": 63.0721
      },
      {
        "longitude": -141.82806,
        "latitude": 63.0721
      },
      {
        "longitude": -164.72367,
        "latitude": 62.0166
      },
      {
        "longitude": -162.43411,
        "latitude": 62.0166
      },
      {
        "longitude": -160.14455,
        "latitude": 62.0166
      },
      {
        "longitude": -157.85499,
        "latitude": 62.0166
      },
      {
        "longitude": -155.56543,
        "latitude": 62.0166
      },
      {
        "longitude": -153.27586,
        "latitude": 62.0166
      },
      {
        "longitude": -150.9863,
        "latitude": 62.0166
      },
      {
        "longitude": -148.69674,
        "latitude": 62.0166
      },
      {
        "longitude": -146.40718,
        "latitude": 62.0166
      },
      {
        "longitude": -144.11762,
        "latitude": 62.0166
      },
      {
        "longitude": -141.82806,
        "latitude": 62.0166
      },
      {
        "longitude": -164.72367,
        "latitude": 60.92319
      },
      {
        "longitude": -162.43411,
        "latitude": 60.92319
      },
      {
        "longitude": -160.14455,
        "latitude": 60.92319
      },
      {
        "longitude": -157.85499,
        "latitude": 60.92319
      },
      {
        "longitude": -155.56543,
        "latitude": 60.92319
      },
      {
        "longitude": -153.27586,
        "latitude": 60.92319
      },
      {
        "longitude": -150.9863,
        "latitude": 60.92319
      },
      {
        "longitude": -148.69674,
        "latitude": 60.92319
      },
      {
        "longitude": -146.40718,
        "latitude": 60.92319
      },
      {
        "longitude": -144.11762,
        "latitude": 60.92319
      },
      {
        "longitude": -141.82806,
        "latitude": 60.92319
      },
      {
        "longitude": -160.14455,
        "latitude": 59.79092
      },
      {
        "longitude": -157.85499,
        "latitude": 59.79092
      },
      {
        "longitude": -155.56543,
        "latitude": 59.79092
      },
      {
        "longitude": -150.9863,
        "latitude": 59.79092
      },
      {
        "longitude": -139.5385,
        "latitude": 59.79092
      },
      {
        "longitude": -157.85499,
        "latitude": 58.61887
      },
      {
        "longitude": -155.56543,
        "latitude": 58.61887
      },
      {
        "longitude": -137.24894,
        "latitude": 58.61887
      },
      {
        "longitude": -134.95938,
        "latitude": 58.61887
      },
      {
        "longitude": -157.85499,
        "latitude": 57.40615
      },
      {
        "longitude": -153.27586,
        "latitude": 57.40615
      },
      {
        "longitude": -134.95938,
        "latitude": 57.40615
      },
      {
        "longitude": -132.66982,
        "latitude": 57.40615
      },
      {
        "longitude": -160.14455,
        "latitude": 56.15191
      },
      {
        "longitude": -164.72367,
        "latitude": 54.85535
      },
      {
        "longitude": -123.51157,
        "latitude": 47.71445
      },
      {
        "longitude": -121.22201,
        "latitude": 47.71445
      },
      {
        "longitude": -118.93245,
        "latitude": 47.71445
      },
      {
        "longitude": -116.64289,
        "latitude": 47.71445
      },
      {
        "longitude": -114.35333,
        "latitude": 47.71445
      },
      {
        "longitude": -112.06377,
        "latitude": 47.71445
      },
      {
        "longitude": -109.77421,
        "latitude": 47.71445
      },
      {
        "longitude": -107.48465,
        "latitude": 47.71445
      },
      {
        "longitude": -105.19509,
        "latitude": 47.71445
      },
      {
        "longitude": -102.90553,
        "latitude": 47.71445
      },
      {
        "longitude": -100.61596,
        "latitude": 47.71445
      },
      {
        "longitude": -98.3264,
        "latitude": 47.71445
      },
      {
        "longitude": -96.03684,
        "latitude": 47.71445
      },
      {
        "longitude": -93.74728,
        "latitude": 47.71445
      },
      {
        "longitude": -91.45772,
        "latitude": 47.71445
      },
      {
        "longitude": -89.16816,
        "latitude": 47.71445
      },
      {
        "longitude": -123.51157,
        "latitude": 46.15117
      },
      {
        "longitude": -121.22201,
        "latitude": 46.15117
      },
      {
        "longitude": -118.93245,
        "latitude": 46.15117
      },
      {
        "longitude": -116.64289,
        "latitude": 46.15117
      },
      {
        "longitude": -114.35333,
        "latitude": 46.15117
      },
      {
        "longitude": -112.06377,
        "latitude": 46.15117
      },
      {
        "longitude": -109.77421,
        "latitude": 46.15117
      },
      {
        "longitude": -107.48465,
        "latitude": 46.15117
      },
      {
        "longitude": -105.19509,
        "latitude": 46.15117
      },
      {
        "longitude": -102.90553,
        "latitude": 46.15117
      },
      {
        "longitude": -100.61596,
        "latitude": 46.15117
      },
      {
        "longitude": -98.3264,
        "latitude": 46.15117
      },
      {
        "longitude": -96.03684,
        "latitude": 46.15117
      },
      {
        "longitude": -93.74728,
        "latitude": 46.15117
      },
      {
        "longitude": -91.45772,
        "latitude": 46.15117
      },
      {
        "longitude": -89.16816,
        "latitude": 46.15117
      },
      {
        "longitude": -86.8786,
        "latitude": 46.15117
      },
      {
        "longitude": -84.58904,
        "latitude": 46.15117
      },
      {
        "longitude": -68.56211,
        "latitude": 46.15117
      },
      {
        "longitude": -123.51157,
        "latitude": 44.54219
      },
      {
        "longitude": -121.22201,
        "latitude": 44.54219
      },
      {
        "longitude": -118.93245,
        "latitude": 44.54219
      },
      {
        "longitude": -116.64289,
        "latitude": 44.54219
      },
      {
        "longitude": -114.35333,
        "latitude": 44.54219
      },
      {
        "longitude": -112.06377,
        "latitude": 44.54219
      },
      {
        "longitude": -109.77421,
        "latitude": 44.54219
      },
      {
        "longitude": -107.48465,
        "latitude": 44.54219
      },
      {
        "longitude": -105.19509,
        "latitude": 44.54219
      },
      {
        "longitude": -102.90553,
        "latitude": 44.54219
      },
      {
        "longitude": -100.61596,
        "latitude": 44.54219
      },
      {
        "longitude": -98.3264,
        "latitude": 44.54219
      },
      {
        "longitude": -96.03684,
        "latitude": 44.54219
      },
      {
        "longitude": -93.74728,
        "latitude": 44.54219
      },
      {
        "longitude": -91.45772,
        "latitude": 44.54219
      },
      {
        "longitude": -89.16816,
        "latitude": 44.54219
      },
      {
        "longitude": -86.8786,
        "latitude": 44.54219
      },
      {
        "longitude": -84.58904,
        "latitude": 44.54219
      },
      {
        "longitude": -75.43079,
        "latitude": 44.54219
      },
      {
        "longitude": -73.14123,
        "latitude": 44.54219
      },
      {
        "longitude": -70.85167,
        "latitude": 44.54219
      },
      {
        "longitude": -68.56211,
        "latitude": 44.54219
      },
      {
        "longitude": -123.51157,
        "latitude": 42.88748
      },
      {
        "longitude": -121.22201,
        "latitude": 42.88748
      },
      {
        "longitude": -118.93245,
        "latitude": 42.88748
      },
      {
        "longitude": -116.64289,
        "latitude": 42.88748
      },
      {
        "longitude": -114.35333,
        "latitude": 42.88748
      },
      {
        "longitude": -112.06377,
        "latitude": 42.88748
      },
      {
        "longitude": -109.77421,
        "latitude": 42.88748
      },
      {
        "longitude": -107.48465,
        "latitude": 42.88748
      },
      {
        "longitude": -105.19509,
        "latitude": 42.88748
      },
      {
        "longitude": -102.90553,
        "latitude": 42.88748
      },
      {
        "longitude": -100.61596,
        "latitude": 42.88748
      },
      {
        "longitude": -98.3264,
        "latitude": 42.88748
      },
      {
        "longitude": -96.03684,
        "latitude": 42.88748
      },
      {
        "longitude": -93.74728,
        "latitude": 42.88748
      },
      {
        "longitude": -91.45772,
        "latitude": 42.88748
      },
      {
        "longitude": -89.16816,
        "latitude": 42.88748
      },
      {
        "longitude": -86.8786,
        "latitude": 42.88748
      },
      {
        "longitude": -84.58904,
        "latitude": 42.88748
      },
      {
        "longitude": -77.72036,
        "latitude": 42.88748
      },
      {
        "longitude": -75.43079,
        "latitude": 42.88748
      },
      {
        "longitude": -73.14123,
        "latitude": 42.88748
      },
      {
        "longitude": -123.51157,
        "latitude": 41.18717
      },
      {
        "longitude": -121.22201,
        "latitude": 41.18717
      },
      {
        "longitude": -118.93245,
        "latitude": 41.18717
      },
      {
        "longitude": -116.64289,
        "latitude": 41.18717
      },
      {
        "longitude": -114.35333,
        "latitude": 41.18717
      },
      {
        "longitude": -112.06377,
        "latitude": 41.18717
      },
      {
        "longitude": -109.77421,
        "latitude": 41.18717
      },
      {
        "longitude": -107.48465,
        "latitude": 41.18717
      },
      {
        "longitude": -105.19509,
        "latitude": 41.18717
      },
      {
        "longitude": -102.90553,
        "latitude": 41.18717
      },
      {
        "longitude": -100.61596,
        "latitude": 41.18717
      },
      {
        "longitude": -98.3264,
        "latitude": 41.18717
      },
      {
        "longitude": -96.03684,
        "latitude": 41.18717
      },
      {
        "longitude": -93.74728,
        "latitude": 41.18717
      },
      {
        "longitude": -91.45772,
        "latitude": 41.18717
      },
      {
        "longitude": -89.16816,
        "latitude": 41.18717
      },
      {
        "longitude": -86.8786,
        "latitude": 41.18717
      },
      {
        "longitude": -84.58904,
        "latitude": 41.18717
      },
      {
        "longitude": -82.29948,
        "latitude": 41.18717
      },
      {
        "longitude": -80.00992,
        "latitude": 41.18717
      },
      {
        "longitude": -77.72036,
        "latitude": 41.18717
      },
      {
        "longitude": -75.43079,
        "latitude": 41.18717
      },
      {
        "longitude": -73.14123,
        "latitude": 41.18717
      },
      {
        "longitude": -123.51157,
        "latitude": 39.44153
      },
      {
        "longitude": -121.22201,
        "latitude": 39.44153
      },
      {
        "longitude": -118.93245,
        "latitude": 39.44153
      },
      {
        "longitude": -116.64289,
        "latitude": 39.44153
      },
      {
        "longitude": -114.35333,
        "latitude": 39.44153
      },
      {
        "longitude": -112.06377,
        "latitude": 39.44153
      },
      {
        "longitude": -109.77421,
        "latitude": 39.44153
      },
      {
        "longitude": -107.48465,
        "latitude": 39.44153
      },
      {
        "longitude": -105.19509,
        "latitude": 39.44153
      },
      {
        "longitude": -102.90553,
        "latitude": 39.44153
      },
      {
        "longitude": -100.61596,
        "latitude": 39.44153
      },
      {
        "longitude": -98.3264,
        "latitude": 39.44153
      },
      {
        "longitude": -96.03684,
        "latitude": 39.44153
      },
      {
        "longitude": -93.74728,
        "latitude": 39.44153
      },
      {
        "longitude": -91.45772,
        "latitude": 39.44153
      },
      {
        "longitude": -89.16816,
        "latitude": 39.44153
      },
      {
        "longitude": -86.8786,
        "latitude": 39.44153
      },
      {
        "longitude": -84.58904,
        "latitude": 39.44153
      },
      {
        "longitude": -82.29948,
        "latitude": 39.44153
      },
      {
        "longitude": -80.00992,
        "latitude": 39.44153
      },
      {
        "longitude": -77.72036,
        "latitude": 39.44153
      },
      {
        "longitude": -75.43079,
        "latitude": 39.44153
      },
      {
        "longitude": -121.22201,
        "latitude": 37.65102
      },
      {
        "longitude": -118.93245,
        "latitude": 37.65102
      },
      {
        "longitude": -116.64289,
        "latitude": 37.65102
      },
      {
        "longitude": -114.35333,
        "latitude": 37.65102
      },
      {
        "longitude": -112.06377,
        "latitude": 37.65102
      },
      {
        "longitude": -109.77421,
        "latitude": 37.65102
      },
      {
        "longitude": -107.48465,
        "latitude": 37.65102
      },
      {
        "longitude": -105.19509,
        "latitude": 37.65102
      },
      {
        "longitude": -102.90553,
        "latitude": 37.65102
      },
      {
        "longitude": -100.61596,
        "latitude": 37.65102
      },
      {
        "longitude": -98.3264,
        "latitude": 37.65102
      },
      {
        "longitude": -96.03684,
        "latitude": 37.65102
      },
      {
        "longitude": -93.74728,
        "latitude": 37.65102
      },
      {
        "longitude": -91.45772,
        "latitude": 37.65102
      },
      {
        "longitude": -89.16816,
        "latitude": 37.65102
      },
      {
        "longitude": -86.8786,
        "latitude": 37.65102
      },
      {
        "longitude": -84.58904,
        "latitude": 37.65102
      },
      {
        "longitude": -82.29948,
        "latitude": 37.65102
      },
      {
        "longitude": -80.00992,
        "latitude": 37.65102
      },
      {
        "longitude": -77.72036,
        "latitude": 37.65102
      },
      {
        "longitude": -121.22201,
        "latitude": 35.81627
      },
      {
        "longitude": -118.93245,
        "latitude": 35.81627
      },
      {
        "longitude": -116.64289,
        "latitude": 35.81627
      },
      {
        "longitude": -114.35333,
        "latitude": 35.81627
      },
      {
        "longitude": -112.06377,
        "latitude": 35.81627
      },
      {
        "longitude": -109.77421,
        "latitude": 35.81627
      },
      {
        "longitude": -107.48465,
        "latitude": 35.81627
      },
      {
        "longitude": -105.19509,
        "latitude": 35.81627
      },
      {
        "longitude": -102.90553,
        "latitude": 35.81627
      },
      {
        "longitude": -100.61596,
        "latitude": 35.81627
      },
      {
        "longitude": -98.3264,
        "latitude": 35.81627
      },
      {
        "longitude": -96.03684,
        "latitude": 35.81627
      },
      {
        "longitude": -93.74728,
        "latitude": 35.81627
      },
      {
        "longitude": -91.45772,
        "latitude": 35.81627
      },
      {
        "longitude": -89.16816,
        "latitude": 35.81627
      },
      {
        "longitude": -86.8786,
        "latitude": 35.81627
      },
      {
        "longitude": -84.58904,
        "latitude": 35.81627
      },
      {
        "longitude": -82.29948,
        "latitude": 35.81627
      },
      {
        "longitude": -80.00992,
        "latitude": 35.81627
      },
      {
        "longitude": -77.72036,
        "latitude": 35.81627
      },
      {
        "longitude": -116.64289,
        "latitude": 33.93813
      },
      {
        "longitude": -114.35333,
        "latitude": 33.93813
      },
      {
        "longitude": -112.06377,
        "latitude": 33.93813
      },
      {
        "longitude": -109.77421,
        "latitude": 33.93813
      },
      {
        "longitude": -107.48465,
        "latitude": 33.93813
      },
      {
        "longitude": -105.19509,
        "latitude": 33.93813
      },
      {
        "longitude": -102.90553,
        "latitude": 33.93813
      },
      {
        "longitude": -100.61596,
        "latitude": 33.93813
      },
      {
        "longitude": -98.3264,
        "latitude": 33.93813
      },
      {
        "longitude": -96.03684,
        "latitude": 33.93813
      },
      {
        "longitude": -93.74728,
        "latitude": 33.93813
      },
      {
        "longitude": -91.45772,
        "latitude": 33.93813
      },
      {
        "longitude": -89.16816,
        "latitude": 33.93813
      },
      {
        "longitude": -86.8786,
        "latitude": 33.93813
      },
      {
        "longitude": -84.58904,
        "latitude": 33.93813
      },
      {
        "longitude": -82.29948,
        "latitude": 33.93813
      },
      {
        "longitude": -80.00992,
        "latitude": 33.93813
      },
      {
        "longitude": -112.06377,
        "latitude": 32.01763
      },
      {
        "longitude": -109.77421,
        "latitude": 32.01763
      },
      {
        "longitude": -107.48465,
        "latitude": 32.01763
      },
      {
        "longitude": -105.19509,
        "latitude": 32.01763
      },
      {
        "longitude": -102.90553,
        "latitude": 32.01763
      },
      {
        "longitude": -100.61596,
        "latitude": 32.01763
      },
      {
        "longitude": -98.3264,
        "latitude": 32.01763
      },
      {
        "longitude": -96.03684,
        "latitude": 32.01763
      },
      {
        "longitude": -93.74728,
        "latitude": 32.01763
      },
      {
        "longitude": -91.45772,
        "latitude": 32.01763
      },
      {
        "longitude": -89.16816,
        "latitude": 32.01763
      },
      {
        "longitude": -86.8786,
        "latitude": 32.01763
      },
      {
        "longitude": -84.58904,
        "latitude": 32.01763
      },
      {
        "longitude": -82.29948,
        "latitude": 32.01763
      },
      {
        "longitude": -102.90553,
        "latitude": 30.05601
      },
      {
        "longitude": -100.61596,
        "latitude": 30.05601
      },
      {
        "longitude": -98.3264,
        "latitude": 30.05601
      },
      {
        "longitude": -96.03684,
        "latitude": 30.05601
      },
      {
        "longitude": -93.74728,
        "latitude": 30.05601
      },
      {
        "longitude": -91.45772,
        "latitude": 30.05601
      },
      {
        "longitude": -84.58904,
        "latitude": 30.05601
      },
      {
        "longitude": -82.29948,
        "latitude": 30.05601
      },
      {
        "longitude": -98.3264,
        "latitude": 28.05476
      },
      {
        "longitude": -82.29948,
        "latitude": 28.05476
      },
      {
        "longitude": -155.56543,
        "latitude": 19.69038
      }
    ],
    "editor.pixelCountrySeries.NO": [
      {
        "longitude": 25.30988,
        "latitude": 71.02787
      },
      {
        "longitude": 27.59944,
        "latitude": 71.02787
      },
      {
        "longitude": 23.02032,
        "latitude": 70.26929
      },
      {
        "longitude": 25.30988,
        "latitude": 70.26929
      },
      {
        "longitude": 27.59944,
        "latitude": 70.26929
      },
      {
        "longitude": 29.88901,
        "latitude": 70.26929
      },
      {
        "longitude": 18.4412,
        "latitude": 69.48164
      },
      {
        "longitude": 20.73076,
        "latitude": 69.48164
      },
      {
        "longitude": 23.02032,
        "latitude": 69.48164
      },
      {
        "longitude": 25.30988,
        "latitude": 69.48164
      },
      {
        "longitude": 29.88901,
        "latitude": 69.48164
      },
      {
        "longitude": 16.15164,
        "latitude": 68.66395
      },
      {
        "longitude": 18.4412,
        "latitude": 68.66395
      },
      {
        "longitude": 16.15164,
        "latitude": 67.81526
      },
      {
        "longitude": 13.86208,
        "latitude": 66.93457
      },
      {
        "longitude": 13.86208,
        "latitude": 66.02091
      },
      {
        "longitude": 11.57252,
        "latitude": 65.07327
      },
      {
        "longitude": 13.86208,
        "latitude": 65.07327
      },
      {
        "longitude": 11.57252,
        "latitude": 64.09067
      },
      {
        "longitude": 6.9934,
        "latitude": 63.0721
      },
      {
        "longitude": 9.28296,
        "latitude": 63.0721
      },
      {
        "longitude": 11.57252,
        "latitude": 63.0721
      },
      {
        "longitude": 4.70384,
        "latitude": 62.0166
      },
      {
        "longitude": 6.9934,
        "latitude": 62.0166
      },
      {
        "longitude": 9.28296,
        "latitude": 62.0166
      },
      {
        "longitude": 11.57252,
        "latitude": 62.0166
      },
      {
        "longitude": 4.70384,
        "latitude": 60.92319
      },
      {
        "longitude": 6.9934,
        "latitude": 60.92319
      },
      {
        "longitude": 9.28296,
        "latitude": 60.92319
      },
      {
        "longitude": 11.57252,
        "latitude": 60.92319
      },
      {
        "longitude": 6.9934,
        "latitude": 59.79092
      },
      {
        "longitude": 9.28296,
        "latitude": 59.79092
      },
      {
        "longitude": 11.57252,
        "latitude": 59.79092
      },
      {
        "longitude": 6.9934,
        "latitude": 58.61887
      }
    ],
    "editor.pixelCountrySeries.FI": [
      {
        "longitude": 27.59944,
        "latitude": 69.48164
      },
      {
        "longitude": 23.02032,
        "latitude": 68.66395
      },
      {
        "longitude": 25.30988,
        "latitude": 68.66395
      },
      {
        "longitude": 27.59944,
        "latitude": 68.66395
      },
      {
        "longitude": 25.30988,
        "latitude": 67.81526
      },
      {
        "longitude": 27.59944,
        "latitude": 67.81526
      },
      {
        "longitude": 25.30988,
        "latitude": 66.93457
      },
      {
        "longitude": 27.59944,
        "latitude": 66.93457
      },
      {
        "longitude": 25.30988,
        "latitude": 66.02091
      },
      {
        "longitude": 27.59944,
        "latitude": 66.02091
      },
      {
        "longitude": 25.30988,
        "latitude": 65.07327
      },
      {
        "longitude": 27.59944,
        "latitude": 65.07327
      },
      {
        "longitude": 23.02032,
        "latitude": 64.09067
      },
      {
        "longitude": 25.30988,
        "latitude": 64.09067
      },
      {
        "longitude": 27.59944,
        "latitude": 64.09067
      },
      {
        "longitude": 29.88901,
        "latitude": 64.09067
      },
      {
        "longitude": 23.02032,
        "latitude": 63.0721
      },
      {
        "longitude": 25.30988,
        "latitude": 63.0721
      },
      {
        "longitude": 27.59944,
        "latitude": 63.0721
      },
      {
        "longitude": 29.88901,
        "latitude": 63.0721
      },
      {
        "longitude": 23.02032,
        "latitude": 62.0166
      },
      {
        "longitude": 25.30988,
        "latitude": 62.0166
      },
      {
        "longitude": 27.59944,
        "latitude": 62.0166
      },
      {
        "longitude": 29.88901,
        "latitude": 62.0166
      },
      {
        "longitude": 23.02032,
        "latitude": 60.92319
      },
      {
        "longitude": 25.30988,
        "latitude": 60.92319
      },
      {
        "longitude": 27.59944,
        "latitude": 60.92319
      }
    ],
    "editor.pixelCountrySeries.SE": [
      {
        "longitude": 20.73076,
        "latitude": 68.66395
      },
      {
        "longitude": 18.4412,
        "latitude": 67.81526
      },
      {
        "longitude": 20.73076,
        "latitude": 67.81526
      },
      {
        "longitude": 23.02032,
        "latitude": 67.81526
      },
      {
        "longitude": 16.15164,
        "latitude": 66.93457
      },
      {
        "longitude": 18.4412,
        "latitude": 66.93457
      },
      {
        "longitude": 20.73076,
        "latitude": 66.93457
      },
      {
        "longitude": 23.02032,
        "latitude": 66.93457
      },
      {
        "longitude": 16.15164,
        "latitude": 66.02091
      },
      {
        "longitude": 18.4412,
        "latitude": 66.02091
      },
      {
        "longitude": 20.73076,
        "latitude": 66.02091
      },
      {
        "longitude": 23.02032,
        "latitude": 66.02091
      },
      {
        "longitude": 16.15164,
        "latitude": 65.07327
      },
      {
        "longitude": 18.4412,
        "latitude": 65.07327
      },
      {
        "longitude": 20.73076,
        "latitude": 65.07327
      },
      {
        "longitude": 13.86208,
        "latitude": 64.09067
      },
      {
        "longitude": 16.15164,
        "latitude": 64.09067
      },
      {
        "longitude": 18.4412,
        "latitude": 64.09067
      },
      {
        "longitude": 20.73076,
        "latitude": 64.09067
      },
      {
        "longitude": 13.86208,
        "latitude": 63.0721
      },
      {
        "longitude": 16.15164,
        "latitude": 63.0721
      },
      {
        "longitude": 18.4412,
        "latitude": 63.0721
      },
      {
        "longitude": 13.86208,
        "latitude": 62.0166
      },
      {
        "longitude": 16.15164,
        "latitude": 62.0166
      },
      {
        "longitude": 13.86208,
        "latitude": 60.92319
      },
      {
        "longitude": 16.15164,
        "latitude": 60.92319
      },
      {
        "longitude": 13.86208,
        "latitude": 59.79092
      },
      {
        "longitude": 16.15164,
        "latitude": 59.79092
      },
      {
        "longitude": 18.4412,
        "latitude": 59.79092
      },
      {
        "longitude": 11.57252,
        "latitude": 58.61887
      },
      {
        "longitude": 13.86208,
        "latitude": 58.61887
      },
      {
        "longitude": 16.15164,
        "latitude": 58.61887
      },
      {
        "longitude": 13.86208,
        "latitude": 57.40615
      },
      {
        "longitude": 16.15164,
        "latitude": 57.40615
      },
      {
        "longitude": 18.4412,
        "latitude": 57.40615
      },
      {
        "longitude": 13.86208,
        "latitude": 56.15191
      }
    ],
    "editor.pixelCountrySeries.IS": [
      {
        "longitude": -22.77089,
        "latitude": 66.02091
      },
      {
        "longitude": -20.48133,
        "latitude": 66.02091
      },
      {
        "longitude": -18.19177,
        "latitude": 66.02091
      },
      {
        "longitude": -15.90221,
        "latitude": 66.02091
      },
      {
        "longitude": -22.77089,
        "latitude": 65.07327
      },
      {
        "longitude": -20.48133,
        "latitude": 65.07327
      },
      {
        "longitude": -18.19177,
        "latitude": 65.07327
      },
      {
        "longitude": -15.90221,
        "latitude": 65.07327
      },
      {
        "longitude": -20.48133,
        "latitude": 64.09067
      },
      {
        "longitude": -18.19177,
        "latitude": 64.09067
      }
    ],
    "editor.pixelCountrySeries.EE": [
      {
        "longitude": 25.30988,
        "latitude": 59.79092
      },
      {
        "longitude": 23.02032,
        "latitude": 58.61887
      },
      {
        "longitude": 25.30988,
        "latitude": 58.61887
      }
    ],
    "editor.pixelCountrySeries.GB": [
      {
        "longitude": -4.45441,
        "latitude": 58.61887
      },
      {
        "longitude": -4.45441,
        "latitude": 57.40615
      },
      {
        "longitude": -2.16485,
        "latitude": 57.40615
      },
      {
        "longitude": -4.45441,
        "latitude": 56.15191
      },
      {
        "longitude": -6.74397,
        "latitude": 54.85535
      },
      {
        "longitude": -4.45441,
        "latitude": 54.85535
      },
      {
        "longitude": -2.16485,
        "latitude": 54.85535
      },
      {
        "longitude": -2.16485,
        "latitude": 53.51573
      },
      {
        "longitude": 0.12471,
        "latitude": 53.51573
      },
      {
        "longitude": -4.45441,
        "latitude": 52.13238
      },
      {
        "longitude": -2.16485,
        "latitude": 52.13238
      },
      {
        "longitude": 0.12471,
        "latitude": 52.13238
      },
      {
        "longitude": -4.45441,
        "latitude": 50.70471
      }
    ],
    "editor.pixelCountrySeries.DK": [
      {
        "longitude": 9.28296,
        "latitude": 57.40615
      },
      {
        "longitude": 9.28296,
        "latitude": 56.15191
      },
      {
        "longitude": 11.57252,
        "latitude": 56.15191
      }
    ],
    "editor.pixelCountrySeries.LV": [
      {
        "longitude": 23.02032,
        "latitude": 57.40615
      },
      {
        "longitude": 25.30988,
        "latitude": 57.40615
      },
      {
        "longitude": 27.59944,
        "latitude": 56.15191
      }
    ],
    "editor.pixelCountrySeries.LT": [
      {
        "longitude": 20.73076,
        "latitude": 56.15191
      },
      {
        "longitude": 23.02032,
        "latitude": 56.15191
      },
      {
        "longitude": 25.30988,
        "latitude": 56.15191
      },
      {
        "longitude": 23.02032,
        "latitude": 54.85535
      },
      {
        "longitude": 25.30988,
        "latitude": 54.85535
      }
    ],
    "editor.pixelCountrySeries.IE": [
      {
        "longitude": -9.03353,
        "latitude": 54.85535
      },
      {
        "longitude": -9.03353,
        "latitude": 53.51573
      },
      {
        "longitude": -6.74397,
        "latitude": 53.51573
      },
      {
        "longitude": -9.03353,
        "latitude": 52.13238
      }
    ],
    "editor.pixelCountrySeries.DE": [
      {
        "longitude": 9.28296,
        "latitude": 54.85535
      },
      {
        "longitude": 6.9934,
        "latitude": 53.51573
      },
      {
        "longitude": 9.28296,
        "latitude": 53.51573
      },
      {
        "longitude": 11.57252,
        "latitude": 53.51573
      },
      {
        "longitude": 13.86208,
        "latitude": 53.51573
      },
      {
        "longitude": 6.9934,
        "latitude": 52.13238
      },
      {
        "longitude": 9.28296,
        "latitude": 52.13238
      },
      {
        "longitude": 11.57252,
        "latitude": 52.13238
      },
      {
        "longitude": 13.86208,
        "latitude": 52.13238
      },
      {
        "longitude": 6.9934,
        "latitude": 50.70471
      },
      {
        "longitude": 9.28296,
        "latitude": 50.70471
      },
      {
        "longitude": 11.57252,
        "latitude": 50.70471
      },
      {
        "longitude": 6.9934,
        "latitude": 49.2322
      },
      {
        "longitude": 9.28296,
        "latitude": 49.2322
      },
      {
        "longitude": 11.57252,
        "latitude": 49.2322
      },
      {
        "longitude": 9.28296,
        "latitude": 47.71445
      },
      {
        "longitude": 11.57252,
        "latitude": 47.71445
      }
    ],
    "editor.pixelCountrySeries.BY": [
      {
        "longitude": 27.59944,
        "latitude": 54.85535
      },
      {
        "longitude": 29.88901,
        "latitude": 54.85535
      },
      {
        "longitude": 25.30988,
        "latitude": 53.51573
      },
      {
        "longitude": 27.59944,
        "latitude": 53.51573
      },
      {
        "longitude": 29.88901,
        "latitude": 53.51573
      },
      {
        "longitude": 32.17857,
        "latitude": 53.51573
      },
      {
        "longitude": 25.30988,
        "latitude": 52.13238
      },
      {
        "longitude": 27.59944,
        "latitude": 52.13238
      },
      {
        "longitude": 29.88901,
        "latitude": 52.13238
      }
    ],
    "editor.pixelCountrySeries.KZ": [
      {
        "longitude": 68.81154,
        "latitude": 54.85535
      },
      {
        "longitude": 61.94286,
        "latitude": 53.51573
      },
      {
        "longitude": 64.23242,
        "latitude": 53.51573
      },
      {
        "longitude": 66.52198,
        "latitude": 53.51573
      },
      {
        "longitude": 68.81154,
        "latitude": 53.51573
      },
      {
        "longitude": 71.1011,
        "latitude": 53.51573
      },
      {
        "longitude": 73.39066,
        "latitude": 53.51573
      },
      {
        "longitude": 75.68022,
        "latitude": 53.51573
      },
      {
        "longitude": 61.94286,
        "latitude": 52.13238
      },
      {
        "longitude": 64.23242,
        "latitude": 52.13238
      },
      {
        "longitude": 66.52198,
        "latitude": 52.13238
      },
      {
        "longitude": 68.81154,
        "latitude": 52.13238
      },
      {
        "longitude": 71.1011,
        "latitude": 52.13238
      },
      {
        "longitude": 73.39066,
        "latitude": 52.13238
      },
      {
        "longitude": 75.68022,
        "latitude": 52.13238
      },
      {
        "longitude": 77.96978,
        "latitude": 52.13238
      },
      {
        "longitude": 50.49505,
        "latitude": 50.70471
      },
      {
        "longitude": 52.78461,
        "latitude": 50.70471
      },
      {
        "longitude": 55.07418,
        "latitude": 50.70471
      },
      {
        "longitude": 57.36374,
        "latitude": 50.70471
      },
      {
        "longitude": 61.94286,
        "latitude": 50.70471
      },
      {
        "longitude": 64.23242,
        "latitude": 50.70471
      },
      {
        "longitude": 66.52198,
        "latitude": 50.70471
      },
      {
        "longitude": 68.81154,
        "latitude": 50.70471
      },
      {
        "longitude": 71.1011,
        "latitude": 50.70471
      },
      {
        "longitude": 73.39066,
        "latitude": 50.70471
      },
      {
        "longitude": 75.68022,
        "latitude": 50.70471
      },
      {
        "longitude": 77.96978,
        "latitude": 50.70471
      },
      {
        "longitude": 80.25934,
        "latitude": 50.70471
      },
      {
        "longitude": 82.54891,
        "latitude": 50.70471
      },
      {
        "longitude": 48.20549,
        "latitude": 49.2322
      },
      {
        "longitude": 50.49505,
        "latitude": 49.2322
      },
      {
        "longitude": 52.78461,
        "latitude": 49.2322
      },
      {
        "longitude": 55.07418,
        "latitude": 49.2322
      },
      {
        "longitude": 57.36374,
        "latitude": 49.2322
      },
      {
        "longitude": 59.6533,
        "latitude": 49.2322
      },
      {
        "longitude": 61.94286,
        "latitude": 49.2322
      },
      {
        "longitude": 64.23242,
        "latitude": 49.2322
      },
      {
        "longitude": 66.52198,
        "latitude": 49.2322
      },
      {
        "longitude": 68.81154,
        "latitude": 49.2322
      },
      {
        "longitude": 71.1011,
        "latitude": 49.2322
      },
      {
        "longitude": 73.39066,
        "latitude": 49.2322
      },
      {
        "longitude": 75.68022,
        "latitude": 49.2322
      },
      {
        "longitude": 77.96978,
        "latitude": 49.2322
      },
      {
        "longitude": 80.25934,
        "latitude": 49.2322
      },
      {
        "longitude": 82.54891,
        "latitude": 49.2322
      },
      {
        "longitude": 84.83847,
        "latitude": 49.2322
      },
      {
        "longitude": 48.20549,
        "latitude": 47.71445
      },
      {
        "longitude": 50.49505,
        "latitude": 47.71445
      },
      {
        "longitude": 52.78461,
        "latitude": 47.71445
      },
      {
        "longitude": 55.07418,
        "latitude": 47.71445
      },
      {
        "longitude": 57.36374,
        "latitude": 47.71445
      },
      {
        "longitude": 59.6533,
        "latitude": 47.71445
      },
      {
        "longitude": 61.94286,
        "latitude": 47.71445
      },
      {
        "longitude": 64.23242,
        "latitude": 47.71445
      },
      {
        "longitude": 66.52198,
        "latitude": 47.71445
      },
      {
        "longitude": 68.81154,
        "latitude": 47.71445
      },
      {
        "longitude": 71.1011,
        "latitude": 47.71445
      },
      {
        "longitude": 73.39066,
        "latitude": 47.71445
      },
      {
        "longitude": 75.68022,
        "latitude": 47.71445
      },
      {
        "longitude": 77.96978,
        "latitude": 47.71445
      },
      {
        "longitude": 80.25934,
        "latitude": 47.71445
      },
      {
        "longitude": 82.54891,
        "latitude": 47.71445
      },
      {
        "longitude": 84.83847,
        "latitude": 47.71445
      },
      {
        "longitude": 52.78461,
        "latitude": 46.15117
      },
      {
        "longitude": 55.07418,
        "latitude": 46.15117
      },
      {
        "longitude": 57.36374,
        "latitude": 46.15117
      },
      {
        "longitude": 59.6533,
        "latitude": 46.15117
      },
      {
        "longitude": 61.94286,
        "latitude": 46.15117
      },
      {
        "longitude": 64.23242,
        "latitude": 46.15117
      },
      {
        "longitude": 66.52198,
        "latitude": 46.15117
      },
      {
        "longitude": 68.81154,
        "latitude": 46.15117
      },
      {
        "longitude": 71.1011,
        "latitude": 46.15117
      },
      {
        "longitude": 73.39066,
        "latitude": 46.15117
      },
      {
        "longitude": 75.68022,
        "latitude": 46.15117
      },
      {
        "longitude": 77.96978,
        "latitude": 46.15117
      },
      {
        "longitude": 80.25934,
        "latitude": 46.15117
      },
      {
        "longitude": 50.49505,
        "latitude": 44.54219
      },
      {
        "longitude": 52.78461,
        "latitude": 44.54219
      },
      {
        "longitude": 55.07418,
        "latitude": 44.54219
      },
      {
        "longitude": 61.94286,
        "latitude": 44.54219
      },
      {
        "longitude": 64.23242,
        "latitude": 44.54219
      },
      {
        "longitude": 66.52198,
        "latitude": 44.54219
      },
      {
        "longitude": 68.81154,
        "latitude": 44.54219
      },
      {
        "longitude": 71.1011,
        "latitude": 44.54219
      },
      {
        "longitude": 73.39066,
        "latitude": 44.54219
      },
      {
        "longitude": 75.68022,
        "latitude": 44.54219
      },
      {
        "longitude": 77.96978,
        "latitude": 44.54219
      },
      {
        "longitude": 80.25934,
        "latitude": 44.54219
      },
      {
        "longitude": 52.78461,
        "latitude": 42.88748
      },
      {
        "longitude": 55.07418,
        "latitude": 42.88748
      },
      {
        "longitude": 66.52198,
        "latitude": 42.88748
      },
      {
        "longitude": 68.81154,
        "latitude": 42.88748
      },
      {
        "longitude": 71.1011,
        "latitude": 42.88748
      },
      {
        "longitude": 73.39066,
        "latitude": 42.88748
      },
      {
        "longitude": 77.96978,
        "latitude": 42.88748
      }
    ],
    "editor.pixelCountrySeries.PL": [
      {
        "longitude": 16.15164,
        "latitude": 53.51573
      },
      {
        "longitude": 18.4412,
        "latitude": 53.51573
      },
      {
        "longitude": 20.73076,
        "latitude": 53.51573
      },
      {
        "longitude": 23.02032,
        "latitude": 53.51573
      },
      {
        "longitude": 16.15164,
        "latitude": 52.13238
      },
      {
        "longitude": 18.4412,
        "latitude": 52.13238
      },
      {
        "longitude": 20.73076,
        "latitude": 52.13238
      },
      {
        "longitude": 23.02032,
        "latitude": 52.13238
      },
      {
        "longitude": 16.15164,
        "latitude": 50.70471
      },
      {
        "longitude": 18.4412,
        "latitude": 50.70471
      },
      {
        "longitude": 20.73076,
        "latitude": 50.70471
      },
      {
        "longitude": 23.02032,
        "latitude": 50.70471
      }
    ],
    "editor.pixelCountrySeries.NL": [
      {
        "longitude": 4.70384,
        "latitude": 52.13238
      }
    ],
    "editor.pixelCountrySeries.UA": [
      {
        "longitude": 32.17857,
        "latitude": 52.13238
      },
      {
        "longitude": 25.30988,
        "latitude": 50.70471
      },
      {
        "longitude": 27.59944,
        "latitude": 50.70471
      },
      {
        "longitude": 29.88901,
        "latitude": 50.70471
      },
      {
        "longitude": 32.17857,
        "latitude": 50.70471
      },
      {
        "longitude": 34.46813,
        "latitude": 50.70471
      },
      {
        "longitude": 23.02032,
        "latitude": 49.2322
      },
      {
        "longitude": 25.30988,
        "latitude": 49.2322
      },
      {
        "longitude": 27.59944,
        "latitude": 49.2322
      },
      {
        "longitude": 29.88901,
        "latitude": 49.2322
      },
      {
        "longitude": 32.17857,
        "latitude": 49.2322
      },
      {
        "longitude": 34.46813,
        "latitude": 49.2322
      },
      {
        "longitude": 36.75769,
        "latitude": 49.2322
      },
      {
        "longitude": 39.04725,
        "latitude": 49.2322
      },
      {
        "longitude": 29.88901,
        "latitude": 47.71445
      },
      {
        "longitude": 32.17857,
        "latitude": 47.71445
      },
      {
        "longitude": 34.46813,
        "latitude": 47.71445
      },
      {
        "longitude": 36.75769,
        "latitude": 47.71445
      },
      {
        "longitude": 29.88901,
        "latitude": 46.15117
      },
      {
        "longitude": 34.46813,
        "latitude": 46.15117
      }
    ],
    "editor.pixelCountrySeries.CN": [
      {
        "longitude": 121.47144,
        "latitude": 52.13238
      },
      {
        "longitude": 123.761,
        "latitude": 52.13238
      },
      {
        "longitude": 126.05056,
        "latitude": 52.13238
      },
      {
        "longitude": 121.47144,
        "latitude": 50.70471
      },
      {
        "longitude": 123.761,
        "latitude": 50.70471
      },
      {
        "longitude": 126.05056,
        "latitude": 50.70471
      },
      {
        "longitude": 116.89232,
        "latitude": 49.2322
      },
      {
        "longitude": 119.18188,
        "latitude": 49.2322
      },
      {
        "longitude": 121.47144,
        "latitude": 49.2322
      },
      {
        "longitude": 123.761,
        "latitude": 49.2322
      },
      {
        "longitude": 126.05056,
        "latitude": 49.2322
      },
      {
        "longitude": 128.34012,
        "latitude": 49.2322
      },
      {
        "longitude": 87.12803,
        "latitude": 47.71445
      },
      {
        "longitude": 89.41759,
        "latitude": 47.71445
      },
      {
        "longitude": 119.18188,
        "latitude": 47.71445
      },
      {
        "longitude": 121.47144,
        "latitude": 47.71445
      },
      {
        "longitude": 123.761,
        "latitude": 47.71445
      },
      {
        "longitude": 126.05056,
        "latitude": 47.71445
      },
      {
        "longitude": 128.34012,
        "latitude": 47.71445
      },
      {
        "longitude": 130.62968,
        "latitude": 47.71445
      },
      {
        "longitude": 132.91924,
        "latitude": 47.71445
      },
      {
        "longitude": 82.54891,
        "latitude": 46.15117
      },
      {
        "longitude": 84.83847,
        "latitude": 46.15117
      },
      {
        "longitude": 87.12803,
        "latitude": 46.15117
      },
      {
        "longitude": 89.41759,
        "latitude": 46.15117
      },
      {
        "longitude": 116.89232,
        "latitude": 46.15117
      },
      {
        "longitude": 119.18188,
        "latitude": 46.15117
      },
      {
        "longitude": 121.47144,
        "latitude": 46.15117
      },
      {
        "longitude": 123.761,
        "latitude": 46.15117
      },
      {
        "longitude": 126.05056,
        "latitude": 46.15117
      },
      {
        "longitude": 128.34012,
        "latitude": 46.15117
      },
      {
        "longitude": 130.62968,
        "latitude": 46.15117
      },
      {
        "longitude": 132.91924,
        "latitude": 46.15117
      },
      {
        "longitude": 82.54891,
        "latitude": 44.54219
      },
      {
        "longitude": 84.83847,
        "latitude": 44.54219
      },
      {
        "longitude": 87.12803,
        "latitude": 44.54219
      },
      {
        "longitude": 89.41759,
        "latitude": 44.54219
      },
      {
        "longitude": 91.70715,
        "latitude": 44.54219
      },
      {
        "longitude": 93.99671,
        "latitude": 44.54219
      },
      {
        "longitude": 112.3132,
        "latitude": 44.54219
      },
      {
        "longitude": 114.60276,
        "latitude": 44.54219
      },
      {
        "longitude": 116.89232,
        "latitude": 44.54219
      },
      {
        "longitude": 119.18188,
        "latitude": 44.54219
      },
      {
        "longitude": 121.47144,
        "latitude": 44.54219
      },
      {
        "longitude": 123.761,
        "latitude": 44.54219
      },
      {
        "longitude": 126.05056,
        "latitude": 44.54219
      },
      {
        "longitude": 128.34012,
        "latitude": 44.54219
      },
      {
        "longitude": 130.62968,
        "latitude": 44.54219
      },
      {
        "longitude": 80.25934,
        "latitude": 42.88748
      },
      {
        "longitude": 82.54891,
        "latitude": 42.88748
      },
      {
        "longitude": 84.83847,
        "latitude": 42.88748
      },
      {
        "longitude": 87.12803,
        "latitude": 42.88748
      },
      {
        "longitude": 89.41759,
        "latitude": 42.88748
      },
      {
        "longitude": 91.70715,
        "latitude": 42.88748
      },
      {
        "longitude": 93.99671,
        "latitude": 42.88748
      },
      {
        "longitude": 112.3132,
        "latitude": 42.88748
      },
      {
        "longitude": 114.60276,
        "latitude": 42.88748
      },
      {
        "longitude": 116.89232,
        "latitude": 42.88748
      },
      {
        "longitude": 119.18188,
        "latitude": 42.88748
      },
      {
        "longitude": 121.47144,
        "latitude": 42.88748
      },
      {
        "longitude": 123.761,
        "latitude": 42.88748
      },
      {
        "longitude": 126.05056,
        "latitude": 42.88748
      },
      {
        "longitude": 128.34012,
        "latitude": 42.88748
      },
      {
        "longitude": 80.25934,
        "latitude": 41.18717
      },
      {
        "longitude": 82.54891,
        "latitude": 41.18717
      },
      {
        "longitude": 84.83847,
        "latitude": 41.18717
      },
      {
        "longitude": 87.12803,
        "latitude": 41.18717
      },
      {
        "longitude": 89.41759,
        "latitude": 41.18717
      },
      {
        "longitude": 91.70715,
        "latitude": 41.18717
      },
      {
        "longitude": 93.99671,
        "latitude": 41.18717
      },
      {
        "longitude": 96.28627,
        "latitude": 41.18717
      },
      {
        "longitude": 98.57583,
        "latitude": 41.18717
      },
      {
        "longitude": 100.86539,
        "latitude": 41.18717
      },
      {
        "longitude": 103.15495,
        "latitude": 41.18717
      },
      {
        "longitude": 105.44451,
        "latitude": 41.18717
      },
      {
        "longitude": 107.73408,
        "latitude": 41.18717
      },
      {
        "longitude": 110.02364,
        "latitude": 41.18717
      },
      {
        "longitude": 112.3132,
        "latitude": 41.18717
      },
      {
        "longitude": 114.60276,
        "latitude": 41.18717
      },
      {
        "longitude": 116.89232,
        "latitude": 41.18717
      },
      {
        "longitude": 119.18188,
        "latitude": 41.18717
      },
      {
        "longitude": 121.47144,
        "latitude": 41.18717
      },
      {
        "longitude": 123.761,
        "latitude": 41.18717
      },
      {
        "longitude": 126.05056,
        "latitude": 41.18717
      },
      {
        "longitude": 75.68022,
        "latitude": 39.44153
      },
      {
        "longitude": 77.96978,
        "latitude": 39.44153
      },
      {
        "longitude": 80.25934,
        "latitude": 39.44153
      },
      {
        "longitude": 82.54891,
        "latitude": 39.44153
      },
      {
        "longitude": 84.83847,
        "latitude": 39.44153
      },
      {
        "longitude": 87.12803,
        "latitude": 39.44153
      },
      {
        "longitude": 89.41759,
        "latitude": 39.44153
      },
      {
        "longitude": 91.70715,
        "latitude": 39.44153
      },
      {
        "longitude": 93.99671,
        "latitude": 39.44153
      },
      {
        "longitude": 96.28627,
        "latitude": 39.44153
      },
      {
        "longitude": 98.57583,
        "latitude": 39.44153
      },
      {
        "longitude": 100.86539,
        "latitude": 39.44153
      },
      {
        "longitude": 103.15495,
        "latitude": 39.44153
      },
      {
        "longitude": 105.44451,
        "latitude": 39.44153
      },
      {
        "longitude": 107.73408,
        "latitude": 39.44153
      },
      {
        "longitude": 110.02364,
        "latitude": 39.44153
      },
      {
        "longitude": 112.3132,
        "latitude": 39.44153
      },
      {
        "longitude": 114.60276,
        "latitude": 39.44153
      },
      {
        "longitude": 116.89232,
        "latitude": 39.44153
      },
      {
        "longitude": 121.47144,
        "latitude": 39.44153
      },
      {
        "longitude": 75.68022,
        "latitude": 37.65102
      },
      {
        "longitude": 77.96978,
        "latitude": 37.65102
      },
      {
        "longitude": 80.25934,
        "latitude": 37.65102
      },
      {
        "longitude": 82.54891,
        "latitude": 37.65102
      },
      {
        "longitude": 84.83847,
        "latitude": 37.65102
      },
      {
        "longitude": 87.12803,
        "latitude": 37.65102
      },
      {
        "longitude": 89.41759,
        "latitude": 37.65102
      },
      {
        "longitude": 91.70715,
        "latitude": 37.65102
      },
      {
        "longitude": 93.99671,
        "latitude": 37.65102
      },
      {
        "longitude": 96.28627,
        "latitude": 37.65102
      },
      {
        "longitude": 98.57583,
        "latitude": 37.65102
      },
      {
        "longitude": 100.86539,
        "latitude": 37.65102
      },
      {
        "longitude": 103.15495,
        "latitude": 37.65102
      },
      {
        "longitude": 105.44451,
        "latitude": 37.65102
      },
      {
        "longitude": 107.73408,
        "latitude": 37.65102
      },
      {
        "longitude": 110.02364,
        "latitude": 37.65102
      },
      {
        "longitude": 112.3132,
        "latitude": 37.65102
      },
      {
        "longitude": 114.60276,
        "latitude": 37.65102
      },
      {
        "longitude": 116.89232,
        "latitude": 37.65102
      },
      {
        "longitude": 121.47144,
        "latitude": 37.65102
      },
      {
        "longitude": 77.96978,
        "latitude": 35.81627
      },
      {
        "longitude": 80.25934,
        "latitude": 35.81627
      },
      {
        "longitude": 82.54891,
        "latitude": 35.81627
      },
      {
        "longitude": 84.83847,
        "latitude": 35.81627
      },
      {
        "longitude": 87.12803,
        "latitude": 35.81627
      },
      {
        "longitude": 89.41759,
        "latitude": 35.81627
      },
      {
        "longitude": 91.70715,
        "latitude": 35.81627
      },
      {
        "longitude": 93.99671,
        "latitude": 35.81627
      },
      {
        "longitude": 96.28627,
        "latitude": 35.81627
      },
      {
        "longitude": 98.57583,
        "latitude": 35.81627
      },
      {
        "longitude": 100.86539,
        "latitude": 35.81627
      },
      {
        "longitude": 103.15495,
        "latitude": 35.81627
      },
      {
        "longitude": 105.44451,
        "latitude": 35.81627
      },
      {
        "longitude": 107.73408,
        "latitude": 35.81627
      },
      {
        "longitude": 110.02364,
        "latitude": 35.81627
      },
      {
        "longitude": 112.3132,
        "latitude": 35.81627
      },
      {
        "longitude": 114.60276,
        "latitude": 35.81627
      },
      {
        "longitude": 116.89232,
        "latitude": 35.81627
      },
      {
        "longitude": 119.18188,
        "latitude": 35.81627
      },
      {
        "longitude": 80.25934,
        "latitude": 33.93813
      },
      {
        "longitude": 82.54891,
        "latitude": 33.93813
      },
      {
        "longitude": 84.83847,
        "latitude": 33.93813
      },
      {
        "longitude": 87.12803,
        "latitude": 33.93813
      },
      {
        "longitude": 89.41759,
        "latitude": 33.93813
      },
      {
        "longitude": 91.70715,
        "latitude": 33.93813
      },
      {
        "longitude": 93.99671,
        "latitude": 33.93813
      },
      {
        "longitude": 96.28627,
        "latitude": 33.93813
      },
      {
        "longitude": 98.57583,
        "latitude": 33.93813
      },
      {
        "longitude": 100.86539,
        "latitude": 33.93813
      },
      {
        "longitude": 103.15495,
        "latitude": 33.93813
      },
      {
        "longitude": 105.44451,
        "latitude": 33.93813
      },
      {
        "longitude": 107.73408,
        "latitude": 33.93813
      },
      {
        "longitude": 110.02364,
        "latitude": 33.93813
      },
      {
        "longitude": 112.3132,
        "latitude": 33.93813
      },
      {
        "longitude": 114.60276,
        "latitude": 33.93813
      },
      {
        "longitude": 116.89232,
        "latitude": 33.93813
      },
      {
        "longitude": 119.18188,
        "latitude": 33.93813
      },
      {
        "longitude": 80.25934,
        "latitude": 32.01763
      },
      {
        "longitude": 82.54891,
        "latitude": 32.01763
      },
      {
        "longitude": 84.83847,
        "latitude": 32.01763
      },
      {
        "longitude": 87.12803,
        "latitude": 32.01763
      },
      {
        "longitude": 89.41759,
        "latitude": 32.01763
      },
      {
        "longitude": 91.70715,
        "latitude": 32.01763
      },
      {
        "longitude": 93.99671,
        "latitude": 32.01763
      },
      {
        "longitude": 96.28627,
        "latitude": 32.01763
      },
      {
        "longitude": 98.57583,
        "latitude": 32.01763
      },
      {
        "longitude": 100.86539,
        "latitude": 32.01763
      },
      {
        "longitude": 103.15495,
        "latitude": 32.01763
      },
      {
        "longitude": 105.44451,
        "latitude": 32.01763
      },
      {
        "longitude": 107.73408,
        "latitude": 32.01763
      },
      {
        "longitude": 110.02364,
        "latitude": 32.01763
      },
      {
        "longitude": 112.3132,
        "latitude": 32.01763
      },
      {
        "longitude": 114.60276,
        "latitude": 32.01763
      },
      {
        "longitude": 116.89232,
        "latitude": 32.01763
      },
      {
        "longitude": 119.18188,
        "latitude": 32.01763
      },
      {
        "longitude": 82.54891,
        "latitude": 30.05601
      },
      {
        "longitude": 84.83847,
        "latitude": 30.05601
      },
      {
        "longitude": 87.12803,
        "latitude": 30.05601
      },
      {
        "longitude": 89.41759,
        "latitude": 30.05601
      },
      {
        "longitude": 91.70715,
        "latitude": 30.05601
      },
      {
        "longitude": 93.99671,
        "latitude": 30.05601
      },
      {
        "longitude": 96.28627,
        "latitude": 30.05601
      },
      {
        "longitude": 98.57583,
        "latitude": 30.05601
      },
      {
        "longitude": 100.86539,
        "latitude": 30.05601
      },
      {
        "longitude": 103.15495,
        "latitude": 30.05601
      },
      {
        "longitude": 105.44451,
        "latitude": 30.05601
      },
      {
        "longitude": 107.73408,
        "latitude": 30.05601
      },
      {
        "longitude": 110.02364,
        "latitude": 30.05601
      },
      {
        "longitude": 112.3132,
        "latitude": 30.05601
      },
      {
        "longitude": 114.60276,
        "latitude": 30.05601
      },
      {
        "longitude": 116.89232,
        "latitude": 30.05601
      },
      {
        "longitude": 119.18188,
        "latitude": 30.05601
      },
      {
        "longitude": 121.47144,
        "latitude": 30.05601
      },
      {
        "longitude": 87.12803,
        "latitude": 28.05476
      },
      {
        "longitude": 91.70715,
        "latitude": 28.05476
      },
      {
        "longitude": 98.57583,
        "latitude": 28.05476
      },
      {
        "longitude": 100.86539,
        "latitude": 28.05476
      },
      {
        "longitude": 103.15495,
        "latitude": 28.05476
      },
      {
        "longitude": 105.44451,
        "latitude": 28.05476
      },
      {
        "longitude": 107.73408,
        "latitude": 28.05476
      },
      {
        "longitude": 110.02364,
        "latitude": 28.05476
      },
      {
        "longitude": 112.3132,
        "latitude": 28.05476
      },
      {
        "longitude": 114.60276,
        "latitude": 28.05476
      },
      {
        "longitude": 116.89232,
        "latitude": 28.05476
      },
      {
        "longitude": 119.18188,
        "latitude": 28.05476
      },
      {
        "longitude": 98.57583,
        "latitude": 26.01555
      },
      {
        "longitude": 100.86539,
        "latitude": 26.01555
      },
      {
        "longitude": 103.15495,
        "latitude": 26.01555
      },
      {
        "longitude": 105.44451,
        "latitude": 26.01555
      },
      {
        "longitude": 107.73408,
        "latitude": 26.01555
      },
      {
        "longitude": 110.02364,
        "latitude": 26.01555
      },
      {
        "longitude": 112.3132,
        "latitude": 26.01555
      },
      {
        "longitude": 114.60276,
        "latitude": 26.01555
      },
      {
        "longitude": 116.89232,
        "latitude": 26.01555
      },
      {
        "longitude": 119.18188,
        "latitude": 26.01555
      },
      {
        "longitude": 100.86539,
        "latitude": 23.94029
      },
      {
        "longitude": 103.15495,
        "latitude": 23.94029
      },
      {
        "longitude": 105.44451,
        "latitude": 23.94029
      },
      {
        "longitude": 107.73408,
        "latitude": 23.94029
      },
      {
        "longitude": 110.02364,
        "latitude": 23.94029
      },
      {
        "longitude": 112.3132,
        "latitude": 23.94029
      },
      {
        "longitude": 114.60276,
        "latitude": 23.94029
      },
      {
        "longitude": 116.89232,
        "latitude": 23.94029
      },
      {
        "longitude": 100.86539,
        "latitude": 21.83112
      },
      {
        "longitude": 107.73408,
        "latitude": 21.83112
      },
      {
        "longitude": 110.02364,
        "latitude": 21.83112
      },
      {
        "longitude": 110.02364,
        "latitude": 19.69038
      }
    ],
    "editor.pixelCountrySeries.FR": [
      {
        "longitude": 2.41427,
        "latitude": 50.70471
      },
      {
        "longitude": 0.12471,
        "latitude": 49.2322
      },
      {
        "longitude": 2.41427,
        "latitude": 49.2322
      },
      {
        "longitude": 4.70384,
        "latitude": 49.2322
      },
      {
        "longitude": -2.16485,
        "latitude": 47.71445
      },
      {
        "longitude": 0.12471,
        "latitude": 47.71445
      },
      {
        "longitude": 2.41427,
        "latitude": 47.71445
      },
      {
        "longitude": 4.70384,
        "latitude": 47.71445
      },
      {
        "longitude": 6.9934,
        "latitude": 47.71445
      },
      {
        "longitude": 0.12471,
        "latitude": 46.15117
      },
      {
        "longitude": 2.41427,
        "latitude": 46.15117
      },
      {
        "longitude": 4.70384,
        "latitude": 46.15117
      },
      {
        "longitude": 0.12471,
        "latitude": 44.54219
      },
      {
        "longitude": 2.41427,
        "latitude": 44.54219
      },
      {
        "longitude": 4.70384,
        "latitude": 44.54219
      },
      {
        "longitude": 0.12471,
        "latitude": 42.88748
      },
      {
        "longitude": 2.41427,
        "latitude": 42.88748
      },
      {
        "longitude": 9.28296,
        "latitude": 42.88748
      }
    ],
    "editor.pixelCountrySeries.BE": [
      {
        "longitude": 4.70384,
        "latitude": 50.70471
      }
    ],
    "editor.pixelCountrySeries.CZ": [
      {
        "longitude": 13.86208,
        "latitude": 50.70471
      },
      {
        "longitude": 13.86208,
        "latitude": 49.2322
      },
      {
        "longitude": 16.15164,
        "latitude": 49.2322
      }
    ],
    "editor.pixelCountrySeries.MN": [
      {
        "longitude": 91.70715,
        "latitude": 50.70471
      },
      {
        "longitude": 98.57583,
        "latitude": 50.70471
      },
      {
        "longitude": 100.86539,
        "latitude": 50.70471
      },
      {
        "longitude": 89.41759,
        "latitude": 49.2322
      },
      {
        "longitude": 91.70715,
        "latitude": 49.2322
      },
      {
        "longitude": 93.99671,
        "latitude": 49.2322
      },
      {
        "longitude": 96.28627,
        "latitude": 49.2322
      },
      {
        "longitude": 98.57583,
        "latitude": 49.2322
      },
      {
        "longitude": 100.86539,
        "latitude": 49.2322
      },
      {
        "longitude": 103.15495,
        "latitude": 49.2322
      },
      {
        "longitude": 105.44451,
        "latitude": 49.2322
      },
      {
        "longitude": 107.73408,
        "latitude": 49.2322
      },
      {
        "longitude": 110.02364,
        "latitude": 49.2322
      },
      {
        "longitude": 112.3132,
        "latitude": 49.2322
      },
      {
        "longitude": 114.60276,
        "latitude": 49.2322
      },
      {
        "longitude": 91.70715,
        "latitude": 47.71445
      },
      {
        "longitude": 93.99671,
        "latitude": 47.71445
      },
      {
        "longitude": 96.28627,
        "latitude": 47.71445
      },
      {
        "longitude": 98.57583,
        "latitude": 47.71445
      },
      {
        "longitude": 100.86539,
        "latitude": 47.71445
      },
      {
        "longitude": 103.15495,
        "latitude": 47.71445
      },
      {
        "longitude": 105.44451,
        "latitude": 47.71445
      },
      {
        "longitude": 107.73408,
        "latitude": 47.71445
      },
      {
        "longitude": 110.02364,
        "latitude": 47.71445
      },
      {
        "longitude": 112.3132,
        "latitude": 47.71445
      },
      {
        "longitude": 114.60276,
        "latitude": 47.71445
      },
      {
        "longitude": 116.89232,
        "latitude": 47.71445
      },
      {
        "longitude": 91.70715,
        "latitude": 46.15117
      },
      {
        "longitude": 93.99671,
        "latitude": 46.15117
      },
      {
        "longitude": 96.28627,
        "latitude": 46.15117
      },
      {
        "longitude": 98.57583,
        "latitude": 46.15117
      },
      {
        "longitude": 100.86539,
        "latitude": 46.15117
      },
      {
        "longitude": 103.15495,
        "latitude": 46.15117
      },
      {
        "longitude": 105.44451,
        "latitude": 46.15117
      },
      {
        "longitude": 107.73408,
        "latitude": 46.15117
      },
      {
        "longitude": 110.02364,
        "latitude": 46.15117
      },
      {
        "longitude": 112.3132,
        "latitude": 46.15117
      },
      {
        "longitude": 114.60276,
        "latitude": 46.15117
      },
      {
        "longitude": 96.28627,
        "latitude": 44.54219
      },
      {
        "longitude": 98.57583,
        "latitude": 44.54219
      },
      {
        "longitude": 100.86539,
        "latitude": 44.54219
      },
      {
        "longitude": 103.15495,
        "latitude": 44.54219
      },
      {
        "longitude": 105.44451,
        "latitude": 44.54219
      },
      {
        "longitude": 107.73408,
        "latitude": 44.54219
      },
      {
        "longitude": 110.02364,
        "latitude": 44.54219
      },
      {
        "longitude": 96.28627,
        "latitude": 42.88748
      },
      {
        "longitude": 98.57583,
        "latitude": 42.88748
      },
      {
        "longitude": 100.86539,
        "latitude": 42.88748
      },
      {
        "longitude": 103.15495,
        "latitude": 42.88748
      },
      {
        "longitude": 105.44451,
        "latitude": 42.88748
      },
      {
        "longitude": 107.73408,
        "latitude": 42.88748
      },
      {
        "longitude": 110.02364,
        "latitude": 42.88748
      }
    ],
    "editor.pixelCountrySeries.SK": [
      {
        "longitude": 18.4412,
        "latitude": 49.2322
      },
      {
        "longitude": 20.73076,
        "latitude": 49.2322
      }
    ],
    "editor.pixelCountrySeries.AT": [
      {
        "longitude": 13.86208,
        "latitude": 47.71445
      },
      {
        "longitude": 16.15164,
        "latitude": 47.71445
      }
    ],
    "editor.pixelCountrySeries.HU": [
      {
        "longitude": 18.4412,
        "latitude": 47.71445
      },
      {
        "longitude": 20.73076,
        "latitude": 47.71445
      },
      {
        "longitude": 18.4412,
        "latitude": 46.15117
      }
    ],
    "editor.pixelCountrySeries.RO": [
      {
        "longitude": 23.02032,
        "latitude": 47.71445
      },
      {
        "longitude": 25.30988,
        "latitude": 47.71445
      },
      {
        "longitude": 20.73076,
        "latitude": 46.15117
      },
      {
        "longitude": 23.02032,
        "latitude": 46.15117
      },
      {
        "longitude": 25.30988,
        "latitude": 46.15117
      },
      {
        "longitude": 27.59944,
        "latitude": 46.15117
      },
      {
        "longitude": 23.02032,
        "latitude": 44.54219
      },
      {
        "longitude": 25.30988,
        "latitude": 44.54219
      },
      {
        "longitude": 27.59944,
        "latitude": 44.54219
      }
    ],
    "editor.pixelCountrySeries.MD": [
      {
        "longitude": 27.59944,
        "latitude": 47.71445
      }
    ],
    "editor.pixelCountrySeries.CH": [
      {
        "longitude": 6.9934,
        "latitude": 46.15117
      }
    ],
    "editor.pixelCountrySeries.IT": [
      {
        "longitude": 9.28296,
        "latitude": 46.15117
      },
      {
        "longitude": 11.57252,
        "latitude": 46.15117
      },
      {
        "longitude": 6.9934,
        "latitude": 44.54219
      },
      {
        "longitude": 9.28296,
        "latitude": 44.54219
      },
      {
        "longitude": 11.57252,
        "latitude": 44.54219
      },
      {
        "longitude": 11.57252,
        "latitude": 42.88748
      },
      {
        "longitude": 13.86208,
        "latitude": 42.88748
      },
      {
        "longitude": 9.28296,
        "latitude": 41.18717
      },
      {
        "longitude": 13.86208,
        "latitude": 41.18717
      },
      {
        "longitude": 16.15164,
        "latitude": 41.18717
      },
      {
        "longitude": 9.28296,
        "latitude": 39.44153
      },
      {
        "longitude": 16.15164,
        "latitude": 39.44153
      },
      {
        "longitude": 13.86208,
        "latitude": 37.65102
      }
    ],
    "editor.pixelCountrySeries.SI": [
      {
        "longitude": 13.86208,
        "latitude": 46.15117
      }
    ],
    "editor.pixelCountrySeries.HR": [
      {
        "longitude": 16.15164,
        "latitude": 46.15117
      }
    ],
    "editor.pixelCountrySeries.BA": [
      {
        "longitude": 16.15164,
        "latitude": 44.54219
      },
      {
        "longitude": 18.4412,
        "latitude": 44.54219
      }
    ],
    "editor.pixelCountrySeries.RS": [
      {
        "longitude": 20.73076,
        "latitude": 44.54219
      }
    ],
    "editor.pixelCountrySeries.UZ": [
      {
        "longitude": 57.36374,
        "latitude": 44.54219
      },
      {
        "longitude": 59.6533,
        "latitude": 44.54219
      },
      {
        "longitude": 57.36374,
        "latitude": 42.88748
      },
      {
        "longitude": 59.6533,
        "latitude": 42.88748
      },
      {
        "longitude": 61.94286,
        "latitude": 42.88748
      },
      {
        "longitude": 64.23242,
        "latitude": 42.88748
      },
      {
        "longitude": 61.94286,
        "latitude": 41.18717
      },
      {
        "longitude": 64.23242,
        "latitude": 41.18717
      },
      {
        "longitude": 66.52198,
        "latitude": 41.18717
      },
      {
        "longitude": 68.81154,
        "latitude": 41.18717
      },
      {
        "longitude": 71.1011,
        "latitude": 41.18717
      },
      {
        "longitude": 64.23242,
        "latitude": 39.44153
      },
      {
        "longitude": 66.52198,
        "latitude": 39.44153
      },
      {
        "longitude": 66.52198,
        "latitude": 37.65102
      }
    ],
    "editor.pixelCountrySeries.JP": [
      {
        "longitude": 142.07749,
        "latitude": 44.54219
      },
      {
        "longitude": 139.78793,
        "latitude": 42.88748
      },
      {
        "longitude": 142.07749,
        "latitude": 42.88748
      },
      {
        "longitude": 139.78793,
        "latitude": 39.44153
      },
      {
        "longitude": 139.78793,
        "latitude": 37.65102
      },
      {
        "longitude": 132.91924,
        "latitude": 35.81627
      },
      {
        "longitude": 135.20881,
        "latitude": 35.81627
      },
      {
        "longitude": 137.49837,
        "latitude": 35.81627
      },
      {
        "longitude": 139.78793,
        "latitude": 35.81627
      },
      {
        "longitude": 130.62968,
        "latitude": 33.93813
      },
      {
        "longitude": 132.91924,
        "latitude": 33.93813
      },
      {
        "longitude": 135.20881,
        "latitude": 33.93813
      },
      {
        "longitude": 130.62968,
        "latitude": 32.01763
      }
    ],
    "editor.pixelCountrySeries.ES": [
      {
        "longitude": -9.03353,
        "latitude": 42.88748
      },
      {
        "longitude": -6.74397,
        "latitude": 42.88748
      },
      {
        "longitude": -4.45441,
        "latitude": 42.88748
      },
      {
        "longitude": -2.16485,
        "latitude": 42.88748
      },
      {
        "longitude": -6.74397,
        "latitude": 41.18717
      },
      {
        "longitude": -4.45441,
        "latitude": 41.18717
      },
      {
        "longitude": -2.16485,
        "latitude": 41.18717
      },
      {
        "longitude": 0.12471,
        "latitude": 41.18717
      },
      {
        "longitude": -6.74397,
        "latitude": 39.44153
      },
      {
        "longitude": -4.45441,
        "latitude": 39.44153
      },
      {
        "longitude": -2.16485,
        "latitude": 39.44153
      },
      {
        "longitude": -6.74397,
        "latitude": 37.65102
      },
      {
        "longitude": -4.45441,
        "latitude": 37.65102
      },
      {
        "longitude": -2.16485,
        "latitude": 37.65102
      }
    ],
    "editor.pixelCountrySeries.ME": [
      {
        "longitude": 18.4412,
        "latitude": 42.88748
      }
    ],
    "editor.pixelCountrySeries.XK": [
      {
        "longitude": 20.73076,
        "latitude": 42.88748
      }
    ],
    "editor.pixelCountrySeries.BG": [
      {
        "longitude": 23.02032,
        "latitude": 42.88748
      },
      {
        "longitude": 25.30988,
        "latitude": 42.88748
      },
      {
        "longitude": 27.59944,
        "latitude": 42.88748
      }
    ],
    "editor.pixelCountrySeries.GE": [
      {
        "longitude": 41.33681,
        "latitude": 42.88748
      }
    ],
    "editor.pixelCountrySeries.KG": [
      {
        "longitude": 75.68022,
        "latitude": 42.88748
      },
      {
        "longitude": 73.39066,
        "latitude": 41.18717
      },
      {
        "longitude": 75.68022,
        "latitude": 41.18717
      },
      {
        "longitude": 77.96978,
        "latitude": 41.18717
      }
    ],
    "editor.pixelCountrySeries.PT": [
      {
        "longitude": -9.03353,
        "latitude": 41.18717
      },
      {
        "longitude": -9.03353,
        "latitude": 39.44153
      },
      {
        "longitude": -9.03353,
        "latitude": 37.65102
      }
    ],
    "editor.pixelCountrySeries.MK": [
      {
        "longitude": 20.73076,
        "latitude": 41.18717
      }
    ],
    "editor.pixelCountrySeries.GR": [
      {
        "longitude": 23.02032,
        "latitude": 41.18717
      },
      {
        "longitude": 25.30988,
        "latitude": 41.18717
      },
      {
        "longitude": 20.73076,
        "latitude": 39.44153
      },
      {
        "longitude": 23.02032,
        "latitude": 37.65102
      }
    ],
    "editor.pixelCountrySeries.TR": [
      {
        "longitude": 27.59944,
        "latitude": 41.18717
      },
      {
        "longitude": 29.88901,
        "latitude": 41.18717
      },
      {
        "longitude": 32.17857,
        "latitude": 41.18717
      },
      {
        "longitude": 34.46813,
        "latitude": 41.18717
      },
      {
        "longitude": 36.75769,
        "latitude": 41.18717
      },
      {
        "longitude": 39.04725,
        "latitude": 41.18717
      },
      {
        "longitude": 41.33681,
        "latitude": 41.18717
      },
      {
        "longitude": 27.59944,
        "latitude": 39.44153
      },
      {
        "longitude": 29.88901,
        "latitude": 39.44153
      },
      {
        "longitude": 32.17857,
        "latitude": 39.44153
      },
      {
        "longitude": 34.46813,
        "latitude": 39.44153
      },
      {
        "longitude": 36.75769,
        "latitude": 39.44153
      },
      {
        "longitude": 39.04725,
        "latitude": 39.44153
      },
      {
        "longitude": 41.33681,
        "latitude": 39.44153
      },
      {
        "longitude": 43.62637,
        "latitude": 39.44153
      },
      {
        "longitude": 27.59944,
        "latitude": 37.65102
      },
      {
        "longitude": 29.88901,
        "latitude": 37.65102
      },
      {
        "longitude": 32.17857,
        "latitude": 37.65102
      },
      {
        "longitude": 34.46813,
        "latitude": 37.65102
      },
      {
        "longitude": 36.75769,
        "latitude": 37.65102
      },
      {
        "longitude": 39.04725,
        "latitude": 37.65102
      },
      {
        "longitude": 41.33681,
        "latitude": 37.65102
      },
      {
        "longitude": 43.62637,
        "latitude": 37.65102
      }
    ],
    "editor.pixelCountrySeries.AM": [
      {
        "longitude": 43.62637,
        "latitude": 41.18717
      },
      {
        "longitude": 45.91593,
        "latitude": 39.44153
      }
    ],
    "editor.pixelCountrySeries.AZ": [
      {
        "longitude": 45.91593,
        "latitude": 41.18717
      },
      {
        "longitude": 48.20549,
        "latitude": 41.18717
      },
      {
        "longitude": 48.20549,
        "latitude": 39.44153
      }
    ],
    "editor.pixelCountrySeries.TM": [
      {
        "longitude": 55.07418,
        "latitude": 41.18717
      },
      {
        "longitude": 57.36374,
        "latitude": 41.18717
      },
      {
        "longitude": 59.6533,
        "latitude": 41.18717
      },
      {
        "longitude": 55.07418,
        "latitude": 39.44153
      },
      {
        "longitude": 57.36374,
        "latitude": 39.44153
      },
      {
        "longitude": 59.6533,
        "latitude": 39.44153
      },
      {
        "longitude": 61.94286,
        "latitude": 39.44153
      },
      {
        "longitude": 59.6533,
        "latitude": 37.65102
      },
      {
        "longitude": 61.94286,
        "latitude": 37.65102
      },
      {
        "longitude": 64.23242,
        "latitude": 37.65102
      },
      {
        "longitude": 61.94286,
        "latitude": 35.81627
      }
    ],
    "editor.pixelCountrySeries.KP": [
      {
        "longitude": 128.34012,
        "latitude": 41.18717
      },
      {
        "longitude": 126.05056,
        "latitude": 39.44153
      }
    ],
    "editor.pixelCountrySeries.TJ": [
      {
        "longitude": 68.81154,
        "latitude": 39.44153
      },
      {
        "longitude": 71.1011,
        "latitude": 39.44153
      },
      {
        "longitude": 73.39066,
        "latitude": 39.44153
      },
      {
        "longitude": 68.81154,
        "latitude": 37.65102
      },
      {
        "longitude": 73.39066,
        "latitude": 37.65102
      }
    ],
    "editor.pixelCountrySeries.IR": [
      {
        "longitude": 45.91593,
        "latitude": 37.65102
      },
      {
        "longitude": 48.20549,
        "latitude": 37.65102
      },
      {
        "longitude": 55.07418,
        "latitude": 37.65102
      },
      {
        "longitude": 57.36374,
        "latitude": 37.65102
      },
      {
        "longitude": 45.91593,
        "latitude": 35.81627
      },
      {
        "longitude": 48.20549,
        "latitude": 35.81627
      },
      {
        "longitude": 50.49505,
        "latitude": 35.81627
      },
      {
        "longitude": 52.78461,
        "latitude": 35.81627
      },
      {
        "longitude": 55.07418,
        "latitude": 35.81627
      },
      {
        "longitude": 57.36374,
        "latitude": 35.81627
      },
      {
        "longitude": 59.6533,
        "latitude": 35.81627
      },
      {
        "longitude": 45.91593,
        "latitude": 33.93813
      },
      {
        "longitude": 48.20549,
        "latitude": 33.93813
      },
      {
        "longitude": 50.49505,
        "latitude": 33.93813
      },
      {
        "longitude": 52.78461,
        "latitude": 33.93813
      },
      {
        "longitude": 55.07418,
        "latitude": 33.93813
      },
      {
        "longitude": 57.36374,
        "latitude": 33.93813
      },
      {
        "longitude": 59.6533,
        "latitude": 33.93813
      },
      {
        "longitude": 48.20549,
        "latitude": 32.01763
      },
      {
        "longitude": 50.49505,
        "latitude": 32.01763
      },
      {
        "longitude": 52.78461,
        "latitude": 32.01763
      },
      {
        "longitude": 55.07418,
        "latitude": 32.01763
      },
      {
        "longitude": 57.36374,
        "latitude": 32.01763
      },
      {
        "longitude": 59.6533,
        "latitude": 32.01763
      },
      {
        "longitude": 50.49505,
        "latitude": 30.05601
      },
      {
        "longitude": 52.78461,
        "latitude": 30.05601
      },
      {
        "longitude": 55.07418,
        "latitude": 30.05601
      },
      {
        "longitude": 57.36374,
        "latitude": 30.05601
      },
      {
        "longitude": 59.6533,
        "latitude": 30.05601
      },
      {
        "longitude": 52.78461,
        "latitude": 28.05476
      },
      {
        "longitude": 55.07418,
        "latitude": 28.05476
      },
      {
        "longitude": 57.36374,
        "latitude": 28.05476
      },
      {
        "longitude": 59.6533,
        "latitude": 28.05476
      },
      {
        "longitude": 61.94286,
        "latitude": 28.05476
      },
      {
        "longitude": 57.36374,
        "latitude": 26.01555
      },
      {
        "longitude": 59.6533,
        "latitude": 26.01555
      }
    ],
    "editor.pixelCountrySeries.AF": [
      {
        "longitude": 71.1011,
        "latitude": 37.65102
      },
      {
        "longitude": 64.23242,
        "latitude": 35.81627
      },
      {
        "longitude": 66.52198,
        "latitude": 35.81627
      },
      {
        "longitude": 68.81154,
        "latitude": 35.81627
      },
      {
        "longitude": 71.1011,
        "latitude": 35.81627
      },
      {
        "longitude": 61.94286,
        "latitude": 33.93813
      },
      {
        "longitude": 64.23242,
        "latitude": 33.93813
      },
      {
        "longitude": 66.52198,
        "latitude": 33.93813
      },
      {
        "longitude": 68.81154,
        "latitude": 33.93813
      },
      {
        "longitude": 61.94286,
        "latitude": 32.01763
      },
      {
        "longitude": 64.23242,
        "latitude": 32.01763
      },
      {
        "longitude": 66.52198,
        "latitude": 32.01763
      },
      {
        "longitude": 68.81154,
        "latitude": 32.01763
      },
      {
        "longitude": 61.94286,
        "latitude": 30.05601
      },
      {
        "longitude": 64.23242,
        "latitude": 30.05601
      }
    ],
    "editor.pixelCountrySeries.KR": [
      {
        "longitude": 128.34012,
        "latitude": 37.65102
      },
      {
        "longitude": 128.34012,
        "latitude": 35.81627
      }
    ],
    "editor.pixelCountrySeries.DZ": [
      {
        "longitude": 0.12471,
        "latitude": 35.81627
      },
      {
        "longitude": 2.41427,
        "latitude": 35.81627
      },
      {
        "longitude": 4.70384,
        "latitude": 35.81627
      },
      {
        "longitude": 6.9934,
        "latitude": 35.81627
      },
      {
        "longitude": 0.12471,
        "latitude": 33.93813
      },
      {
        "longitude": 2.41427,
        "latitude": 33.93813
      },
      {
        "longitude": 4.70384,
        "latitude": 33.93813
      },
      {
        "longitude": 6.9934,
        "latitude": 33.93813
      },
      {
        "longitude": -2.16485,
        "latitude": 32.01763
      },
      {
        "longitude": 0.12471,
        "latitude": 32.01763
      },
      {
        "longitude": 2.41427,
        "latitude": 32.01763
      },
      {
        "longitude": 4.70384,
        "latitude": 32.01763
      },
      {
        "longitude": 6.9934,
        "latitude": 32.01763
      },
      {
        "longitude": -4.45441,
        "latitude": 30.05601
      },
      {
        "longitude": -2.16485,
        "latitude": 30.05601
      },
      {
        "longitude": 0.12471,
        "latitude": 30.05601
      },
      {
        "longitude": 2.41427,
        "latitude": 30.05601
      },
      {
        "longitude": 4.70384,
        "latitude": 30.05601
      },
      {
        "longitude": 6.9934,
        "latitude": 30.05601
      },
      {
        "longitude": -6.74397,
        "latitude": 28.05476
      },
      {
        "longitude": -4.45441,
        "latitude": 28.05476
      },
      {
        "longitude": -2.16485,
        "latitude": 28.05476
      },
      {
        "longitude": 0.12471,
        "latitude": 28.05476
      },
      {
        "longitude": 2.41427,
        "latitude": 28.05476
      },
      {
        "longitude": 4.70384,
        "latitude": 28.05476
      },
      {
        "longitude": 6.9934,
        "latitude": 28.05476
      },
      {
        "longitude": 9.28296,
        "latitude": 28.05476
      },
      {
        "longitude": -4.45441,
        "latitude": 26.01555
      },
      {
        "longitude": -2.16485,
        "latitude": 26.01555
      },
      {
        "longitude": 0.12471,
        "latitude": 26.01555
      },
      {
        "longitude": 2.41427,
        "latitude": 26.01555
      },
      {
        "longitude": 4.70384,
        "latitude": 26.01555
      },
      {
        "longitude": 6.9934,
        "latitude": 26.01555
      },
      {
        "longitude": 9.28296,
        "latitude": 26.01555
      },
      {
        "longitude": -2.16485,
        "latitude": 23.94029
      },
      {
        "longitude": 0.12471,
        "latitude": 23.94029
      },
      {
        "longitude": 2.41427,
        "latitude": 23.94029
      },
      {
        "longitude": 4.70384,
        "latitude": 23.94029
      },
      {
        "longitude": 6.9934,
        "latitude": 23.94029
      },
      {
        "longitude": 9.28296,
        "latitude": 23.94029
      },
      {
        "longitude": 11.57252,
        "latitude": 23.94029
      },
      {
        "longitude": 0.12471,
        "latitude": 21.83112
      },
      {
        "longitude": 2.41427,
        "latitude": 21.83112
      },
      {
        "longitude": 4.70384,
        "latitude": 21.83112
      },
      {
        "longitude": 6.9934,
        "latitude": 21.83112
      },
      {
        "longitude": 4.70384,
        "latitude": 19.69038
      }
    ],
    "editor.pixelCountrySeries.TN": [
      {
        "longitude": 9.28296,
        "latitude": 35.81627
      },
      {
        "longitude": 9.28296,
        "latitude": 33.93813
      },
      {
        "longitude": 9.28296,
        "latitude": 32.01763
      }
    ],
    "editor.pixelCountrySeries.SY": [
      {
        "longitude": 36.75769,
        "latitude": 35.81627
      },
      {
        "longitude": 39.04725,
        "latitude": 35.81627
      },
      {
        "longitude": 36.75769,
        "latitude": 33.93813
      },
      {
        "longitude": 39.04725,
        "latitude": 33.93813
      }
    ],
    "editor.pixelCountrySeries.IQ": [
      {
        "longitude": 41.33681,
        "latitude": 35.81627
      },
      {
        "longitude": 43.62637,
        "latitude": 35.81627
      },
      {
        "longitude": 41.33681,
        "latitude": 33.93813
      },
      {
        "longitude": 43.62637,
        "latitude": 33.93813
      },
      {
        "longitude": 41.33681,
        "latitude": 32.01763
      },
      {
        "longitude": 43.62637,
        "latitude": 32.01763
      },
      {
        "longitude": 45.91593,
        "latitude": 32.01763
      },
      {
        "longitude": 43.62637,
        "latitude": 30.05601
      },
      {
        "longitude": 45.91593,
        "latitude": 30.05601
      }
    ],
    "editor.pixelCountrySeries.PK": [
      {
        "longitude": 73.39066,
        "latitude": 35.81627
      },
      {
        "longitude": 75.68022,
        "latitude": 35.81627
      },
      {
        "longitude": 71.1011,
        "latitude": 33.93813
      },
      {
        "longitude": 73.39066,
        "latitude": 33.93813
      },
      {
        "longitude": 71.1011,
        "latitude": 32.01763
      },
      {
        "longitude": 73.39066,
        "latitude": 32.01763
      },
      {
        "longitude": 66.52198,
        "latitude": 30.05601
      },
      {
        "longitude": 68.81154,
        "latitude": 30.05601
      },
      {
        "longitude": 71.1011,
        "latitude": 30.05601
      },
      {
        "longitude": 64.23242,
        "latitude": 28.05476
      },
      {
        "longitude": 66.52198,
        "latitude": 28.05476
      },
      {
        "longitude": 68.81154,
        "latitude": 28.05476
      },
      {
        "longitude": 71.1011,
        "latitude": 28.05476
      },
      {
        "longitude": 61.94286,
        "latitude": 26.01555
      },
      {
        "longitude": 64.23242,
        "latitude": 26.01555
      },
      {
        "longitude": 66.52198,
        "latitude": 26.01555
      },
      {
        "longitude": 68.81154,
        "latitude": 26.01555
      }
    ],
    "editor.pixelCountrySeries.MA": [
      {
        "longitude": -6.74397,
        "latitude": 33.93813
      },
      {
        "longitude": -4.45441,
        "latitude": 33.93813
      },
      {
        "longitude": -2.16485,
        "latitude": 33.93813
      },
      {
        "longitude": -9.03353,
        "latitude": 32.01763
      },
      {
        "longitude": -6.74397,
        "latitude": 32.01763
      },
      {
        "longitude": -4.45441,
        "latitude": 32.01763
      },
      {
        "longitude": -9.03353,
        "latitude": 30.05601
      },
      {
        "longitude": -6.74397,
        "latitude": 30.05601
      },
      {
        "longitude": -11.32309,
        "latitude": 28.05476
      },
      {
        "longitude": -9.03353,
        "latitude": 28.05476
      }
    ],
    "editor.pixelCountrySeries.IN": [
      {
        "longitude": 75.68022,
        "latitude": 33.93813
      },
      {
        "longitude": 77.96978,
        "latitude": 33.93813
      },
      {
        "longitude": 75.68022,
        "latitude": 32.01763
      },
      {
        "longitude": 77.96978,
        "latitude": 32.01763
      },
      {
        "longitude": 73.39066,
        "latitude": 30.05601
      },
      {
        "longitude": 75.68022,
        "latitude": 30.05601
      },
      {
        "longitude": 77.96978,
        "latitude": 30.05601
      },
      {
        "longitude": 80.25934,
        "latitude": 30.05601
      },
      {
        "longitude": 73.39066,
        "latitude": 28.05476
      },
      {
        "longitude": 75.68022,
        "latitude": 28.05476
      },
      {
        "longitude": 77.96978,
        "latitude": 28.05476
      },
      {
        "longitude": 80.25934,
        "latitude": 28.05476
      },
      {
        "longitude": 93.99671,
        "latitude": 28.05476
      },
      {
        "longitude": 96.28627,
        "latitude": 28.05476
      },
      {
        "longitude": 71.1011,
        "latitude": 26.01555
      },
      {
        "longitude": 73.39066,
        "latitude": 26.01555
      },
      {
        "longitude": 75.68022,
        "latitude": 26.01555
      },
      {
        "longitude": 77.96978,
        "latitude": 26.01555
      },
      {
        "longitude": 80.25934,
        "latitude": 26.01555
      },
      {
        "longitude": 82.54891,
        "latitude": 26.01555
      },
      {
        "longitude": 84.83847,
        "latitude": 26.01555
      },
      {
        "longitude": 87.12803,
        "latitude": 26.01555
      },
      {
        "longitude": 91.70715,
        "latitude": 26.01555
      },
      {
        "longitude": 93.99671,
        "latitude": 26.01555
      },
      {
        "longitude": 68.81154,
        "latitude": 23.94029
      },
      {
        "longitude": 71.1011,
        "latitude": 23.94029
      },
      {
        "longitude": 73.39066,
        "latitude": 23.94029
      },
      {
        "longitude": 75.68022,
        "latitude": 23.94029
      },
      {
        "longitude": 77.96978,
        "latitude": 23.94029
      },
      {
        "longitude": 80.25934,
        "latitude": 23.94029
      },
      {
        "longitude": 82.54891,
        "latitude": 23.94029
      },
      {
        "longitude": 84.83847,
        "latitude": 23.94029
      },
      {
        "longitude": 87.12803,
        "latitude": 23.94029
      },
      {
        "longitude": 91.70715,
        "latitude": 23.94029
      },
      {
        "longitude": 71.1011,
        "latitude": 21.83112
      },
      {
        "longitude": 73.39066,
        "latitude": 21.83112
      },
      {
        "longitude": 75.68022,
        "latitude": 21.83112
      },
      {
        "longitude": 77.96978,
        "latitude": 21.83112
      },
      {
        "longitude": 80.25934,
        "latitude": 21.83112
      },
      {
        "longitude": 82.54891,
        "latitude": 21.83112
      },
      {
        "longitude": 84.83847,
        "latitude": 21.83112
      },
      {
        "longitude": 87.12803,
        "latitude": 21.83112
      },
      {
        "longitude": 73.39066,
        "latitude": 19.69038
      },
      {
        "longitude": 75.68022,
        "latitude": 19.69038
      },
      {
        "longitude": 77.96978,
        "latitude": 19.69038
      },
      {
        "longitude": 80.25934,
        "latitude": 19.69038
      },
      {
        "longitude": 82.54891,
        "latitude": 19.69038
      },
      {
        "longitude": 84.83847,
        "latitude": 19.69038
      },
      {
        "longitude": 73.39066,
        "latitude": 17.52064
      },
      {
        "longitude": 75.68022,
        "latitude": 17.52064
      },
      {
        "longitude": 77.96978,
        "latitude": 17.52064
      },
      {
        "longitude": 80.25934,
        "latitude": 17.52064
      },
      {
        "longitude": 82.54891,
        "latitude": 17.52064
      },
      {
        "longitude": 75.68022,
        "latitude": 15.32464
      },
      {
        "longitude": 77.96978,
        "latitude": 15.32464
      },
      {
        "longitude": 75.68022,
        "latitude": 13.10534
      },
      {
        "longitude": 77.96978,
        "latitude": 13.10534
      },
      {
        "longitude": 75.68022,
        "latitude": 10.86585
      },
      {
        "longitude": 77.96978,
        "latitude": 10.86585
      },
      {
        "longitude": 77.96978,
        "latitude": 8.60943
      }
    ],
    "editor.pixelCountrySeries.MX": [
      {
        "longitude": -116.64289,
        "latitude": 32.01763
      },
      {
        "longitude": -114.35333,
        "latitude": 32.01763
      },
      {
        "longitude": -114.35333,
        "latitude": 30.05601
      },
      {
        "longitude": -112.06377,
        "latitude": 30.05601
      },
      {
        "longitude": -109.77421,
        "latitude": 30.05601
      },
      {
        "longitude": -107.48465,
        "latitude": 30.05601
      },
      {
        "longitude": -105.19509,
        "latitude": 30.05601
      },
      {
        "longitude": -114.35333,
        "latitude": 28.05476
      },
      {
        "longitude": -109.77421,
        "latitude": 28.05476
      },
      {
        "longitude": -107.48465,
        "latitude": 28.05476
      },
      {
        "longitude": -105.19509,
        "latitude": 28.05476
      },
      {
        "longitude": -102.90553,
        "latitude": 28.05476
      },
      {
        "longitude": -100.61596,
        "latitude": 28.05476
      },
      {
        "longitude": -112.06377,
        "latitude": 26.01555
      },
      {
        "longitude": -109.77421,
        "latitude": 26.01555
      },
      {
        "longitude": -107.48465,
        "latitude": 26.01555
      },
      {
        "longitude": -105.19509,
        "latitude": 26.01555
      },
      {
        "longitude": -102.90553,
        "latitude": 26.01555
      },
      {
        "longitude": -100.61596,
        "latitude": 26.01555
      },
      {
        "longitude": -98.3264,
        "latitude": 26.01555
      },
      {
        "longitude": -109.77421,
        "latitude": 23.94029
      },
      {
        "longitude": -105.19509,
        "latitude": 23.94029
      },
      {
        "longitude": -102.90553,
        "latitude": 23.94029
      },
      {
        "longitude": -100.61596,
        "latitude": 23.94029
      },
      {
        "longitude": -98.3264,
        "latitude": 23.94029
      },
      {
        "longitude": -105.19509,
        "latitude": 21.83112
      },
      {
        "longitude": -102.90553,
        "latitude": 21.83112
      },
      {
        "longitude": -100.61596,
        "latitude": 21.83112
      },
      {
        "longitude": -98.3264,
        "latitude": 21.83112
      },
      {
        "longitude": -89.16816,
        "latitude": 21.83112
      },
      {
        "longitude": -105.19509,
        "latitude": 19.69038
      },
      {
        "longitude": -102.90553,
        "latitude": 19.69038
      },
      {
        "longitude": -100.61596,
        "latitude": 19.69038
      },
      {
        "longitude": -98.3264,
        "latitude": 19.69038
      },
      {
        "longitude": -89.16816,
        "latitude": 19.69038
      },
      {
        "longitude": -100.61596,
        "latitude": 17.52064
      },
      {
        "longitude": -98.3264,
        "latitude": 17.52064
      },
      {
        "longitude": -96.03684,
        "latitude": 17.52064
      },
      {
        "longitude": -93.74728,
        "latitude": 17.52064
      },
      {
        "longitude": -91.45772,
        "latitude": 17.52064
      }
    ],
    "editor.pixelCountrySeries.LY": [
      {
        "longitude": 11.57252,
        "latitude": 32.01763
      },
      {
        "longitude": 13.86208,
        "latitude": 32.01763
      },
      {
        "longitude": 20.73076,
        "latitude": 32.01763
      },
      {
        "longitude": 23.02032,
        "latitude": 32.01763
      },
      {
        "longitude": 9.28296,
        "latitude": 30.05601
      },
      {
        "longitude": 11.57252,
        "latitude": 30.05601
      },
      {
        "longitude": 13.86208,
        "latitude": 30.05601
      },
      {
        "longitude": 16.15164,
        "latitude": 30.05601
      },
      {
        "longitude": 18.4412,
        "latitude": 30.05601
      },
      {
        "longitude": 20.73076,
        "latitude": 30.05601
      },
      {
        "longitude": 23.02032,
        "latitude": 30.05601
      },
      {
        "longitude": 11.57252,
        "latitude": 28.05476
      },
      {
        "longitude": 13.86208,
        "latitude": 28.05476
      },
      {
        "longitude": 16.15164,
        "latitude": 28.05476
      },
      {
        "longitude": 18.4412,
        "latitude": 28.05476
      },
      {
        "longitude": 20.73076,
        "latitude": 28.05476
      },
      {
        "longitude": 23.02032,
        "latitude": 28.05476
      },
      {
        "longitude": 11.57252,
        "latitude": 26.01555
      },
      {
        "longitude": 13.86208,
        "latitude": 26.01555
      },
      {
        "longitude": 16.15164,
        "latitude": 26.01555
      },
      {
        "longitude": 18.4412,
        "latitude": 26.01555
      },
      {
        "longitude": 20.73076,
        "latitude": 26.01555
      },
      {
        "longitude": 23.02032,
        "latitude": 26.01555
      },
      {
        "longitude": 13.86208,
        "latitude": 23.94029
      },
      {
        "longitude": 16.15164,
        "latitude": 23.94029
      },
      {
        "longitude": 18.4412,
        "latitude": 23.94029
      },
      {
        "longitude": 20.73076,
        "latitude": 23.94029
      },
      {
        "longitude": 23.02032,
        "latitude": 23.94029
      },
      {
        "longitude": 20.73076,
        "latitude": 21.83112
      },
      {
        "longitude": 23.02032,
        "latitude": 21.83112
      }
    ],
    "editor.pixelCountrySeries.IL": [
      {
        "longitude": 34.46813,
        "latitude": 32.01763
      }
    ],
    "editor.pixelCountrySeries.JO": [
      {
        "longitude": 36.75769,
        "latitude": 32.01763
      },
      {
        "longitude": 36.75769,
        "latitude": 30.05601
      }
    ],
    "editor.pixelCountrySeries.SA": [
      {
        "longitude": 39.04725,
        "latitude": 32.01763
      },
      {
        "longitude": 39.04725,
        "latitude": 30.05601
      },
      {
        "longitude": 41.33681,
        "latitude": 30.05601
      },
      {
        "longitude": 36.75769,
        "latitude": 28.05476
      },
      {
        "longitude": 39.04725,
        "latitude": 28.05476
      },
      {
        "longitude": 41.33681,
        "latitude": 28.05476
      },
      {
        "longitude": 43.62637,
        "latitude": 28.05476
      },
      {
        "longitude": 45.91593,
        "latitude": 28.05476
      },
      {
        "longitude": 48.20549,
        "latitude": 28.05476
      },
      {
        "longitude": 36.75769,
        "latitude": 26.01555
      },
      {
        "longitude": 39.04725,
        "latitude": 26.01555
      },
      {
        "longitude": 41.33681,
        "latitude": 26.01555
      },
      {
        "longitude": 43.62637,
        "latitude": 26.01555
      },
      {
        "longitude": 45.91593,
        "latitude": 26.01555
      },
      {
        "longitude": 48.20549,
        "latitude": 26.01555
      },
      {
        "longitude": 39.04725,
        "latitude": 23.94029
      },
      {
        "longitude": 41.33681,
        "latitude": 23.94029
      },
      {
        "longitude": 43.62637,
        "latitude": 23.94029
      },
      {
        "longitude": 45.91593,
        "latitude": 23.94029
      },
      {
        "longitude": 48.20549,
        "latitude": 23.94029
      },
      {
        "longitude": 50.49505,
        "latitude": 23.94029
      },
      {
        "longitude": 39.04725,
        "latitude": 21.83112
      },
      {
        "longitude": 41.33681,
        "latitude": 21.83112
      },
      {
        "longitude": 43.62637,
        "latitude": 21.83112
      },
      {
        "longitude": 45.91593,
        "latitude": 21.83112
      },
      {
        "longitude": 48.20549,
        "latitude": 21.83112
      },
      {
        "longitude": 50.49505,
        "latitude": 21.83112
      },
      {
        "longitude": 52.78461,
        "latitude": 21.83112
      },
      {
        "longitude": 55.07418,
        "latitude": 21.83112
      },
      {
        "longitude": 41.33681,
        "latitude": 19.69038
      },
      {
        "longitude": 43.62637,
        "latitude": 19.69038
      },
      {
        "longitude": 45.91593,
        "latitude": 19.69038
      },
      {
        "longitude": 48.20549,
        "latitude": 19.69038
      },
      {
        "longitude": 50.49505,
        "latitude": 19.69038
      },
      {
        "longitude": 52.78461,
        "latitude": 19.69038
      },
      {
        "longitude": 43.62637,
        "latitude": 17.52064
      },
      {
        "longitude": 45.91593,
        "latitude": 17.52064
      }
    ],
    "editor.pixelCountrySeries.EG": [
      {
        "longitude": 25.30988,
        "latitude": 30.05601
      },
      {
        "longitude": 27.59944,
        "latitude": 30.05601
      },
      {
        "longitude": 29.88901,
        "latitude": 30.05601
      },
      {
        "longitude": 32.17857,
        "latitude": 30.05601
      },
      {
        "longitude": 34.46813,
        "latitude": 30.05601
      },
      {
        "longitude": 25.30988,
        "latitude": 28.05476
      },
      {
        "longitude": 27.59944,
        "latitude": 28.05476
      },
      {
        "longitude": 29.88901,
        "latitude": 28.05476
      },
      {
        "longitude": 32.17857,
        "latitude": 28.05476
      },
      {
        "longitude": 25.30988,
        "latitude": 26.01555
      },
      {
        "longitude": 27.59944,
        "latitude": 26.01555
      },
      {
        "longitude": 29.88901,
        "latitude": 26.01555
      },
      {
        "longitude": 32.17857,
        "latitude": 26.01555
      },
      {
        "longitude": 34.46813,
        "latitude": 26.01555
      },
      {
        "longitude": 25.30988,
        "latitude": 23.94029
      },
      {
        "longitude": 27.59944,
        "latitude": 23.94029
      },
      {
        "longitude": 29.88901,
        "latitude": 23.94029
      },
      {
        "longitude": 32.17857,
        "latitude": 23.94029
      },
      {
        "longitude": 34.46813,
        "latitude": 23.94029
      }
    ],
    "editor.pixelCountrySeries.NP": [
      {
        "longitude": 82.54891,
        "latitude": 28.05476
      },
      {
        "longitude": 84.83847,
        "latitude": 28.05476
      }
    ],
    "editor.pixelCountrySeries.BT": [
      {
        "longitude": 89.41759,
        "latitude": 28.05476
      }
    ],
    "editor.pixelCountrySeries.EH": [
      {
        "longitude": -13.61265,
        "latitude": 26.01555
      },
      {
        "longitude": -15.90221,
        "latitude": 23.94029
      },
      {
        "longitude": -13.61265,
        "latitude": 23.94029
      },
      {
        "longitude": -15.90221,
        "latitude": 21.83112
      },
      {
        "longitude": -13.61265,
        "latitude": 21.83112
      }
    ],
    "editor.pixelCountrySeries.MR": [
      {
        "longitude": -11.32309,
        "latitude": 26.01555
      },
      {
        "longitude": -9.03353,
        "latitude": 26.01555
      },
      {
        "longitude": -6.74397,
        "latitude": 26.01555
      },
      {
        "longitude": -11.32309,
        "latitude": 23.94029
      },
      {
        "longitude": -9.03353,
        "latitude": 23.94029
      },
      {
        "longitude": -6.74397,
        "latitude": 23.94029
      },
      {
        "longitude": -11.32309,
        "latitude": 21.83112
      },
      {
        "longitude": -9.03353,
        "latitude": 21.83112
      },
      {
        "longitude": -6.74397,
        "latitude": 21.83112
      },
      {
        "longitude": -15.90221,
        "latitude": 19.69038
      },
      {
        "longitude": -13.61265,
        "latitude": 19.69038
      },
      {
        "longitude": -11.32309,
        "latitude": 19.69038
      },
      {
        "longitude": -9.03353,
        "latitude": 19.69038
      },
      {
        "longitude": -6.74397,
        "latitude": 19.69038
      },
      {
        "longitude": -15.90221,
        "latitude": 17.52064
      },
      {
        "longitude": -13.61265,
        "latitude": 17.52064
      },
      {
        "longitude": -11.32309,
        "latitude": 17.52064
      },
      {
        "longitude": -9.03353,
        "latitude": 17.52064
      },
      {
        "longitude": -6.74397,
        "latitude": 17.52064
      }
    ],
    "editor.pixelCountrySeries.QA": [
      {
        "longitude": 50.49505,
        "latitude": 26.01555
      }
    ],
    "editor.pixelCountrySeries.BD": [
      {
        "longitude": 89.41759,
        "latitude": 26.01555
      },
      {
        "longitude": 89.41759,
        "latitude": 23.94029
      },
      {
        "longitude": 91.70715,
        "latitude": 21.83112
      }
    ],
    "editor.pixelCountrySeries.MM": [
      {
        "longitude": 96.28627,
        "latitude": 26.01555
      },
      {
        "longitude": 93.99671,
        "latitude": 23.94029
      },
      {
        "longitude": 96.28627,
        "latitude": 23.94029
      },
      {
        "longitude": 98.57583,
        "latitude": 23.94029
      },
      {
        "longitude": 93.99671,
        "latitude": 21.83112
      },
      {
        "longitude": 96.28627,
        "latitude": 21.83112
      },
      {
        "longitude": 98.57583,
        "latitude": 21.83112
      },
      {
        "longitude": 93.99671,
        "latitude": 19.69038
      },
      {
        "longitude": 96.28627,
        "latitude": 19.69038
      },
      {
        "longitude": 96.28627,
        "latitude": 17.52064
      },
      {
        "longitude": 98.57583,
        "latitude": 13.10534
      },
      {
        "longitude": 98.57583,
        "latitude": 10.86585
      }
    ],
    "editor.pixelCountrySeries.ML": [
      {
        "longitude": -4.45441,
        "latitude": 23.94029
      },
      {
        "longitude": -4.45441,
        "latitude": 21.83112
      },
      {
        "longitude": -2.16485,
        "latitude": 21.83112
      },
      {
        "longitude": -4.45441,
        "latitude": 19.69038
      },
      {
        "longitude": -2.16485,
        "latitude": 19.69038
      },
      {
        "longitude": 0.12471,
        "latitude": 19.69038
      },
      {
        "longitude": 2.41427,
        "latitude": 19.69038
      },
      {
        "longitude": -4.45441,
        "latitude": 17.52064
      },
      {
        "longitude": -2.16485,
        "latitude": 17.52064
      },
      {
        "longitude": 0.12471,
        "latitude": 17.52064
      },
      {
        "longitude": 2.41427,
        "latitude": 17.52064
      },
      {
        "longitude": -11.32309,
        "latitude": 15.32464
      },
      {
        "longitude": -9.03353,
        "latitude": 15.32464
      },
      {
        "longitude": -6.74397,
        "latitude": 15.32464
      },
      {
        "longitude": -4.45441,
        "latitude": 15.32464
      },
      {
        "longitude": -2.16485,
        "latitude": 15.32464
      },
      {
        "longitude": 0.12471,
        "latitude": 15.32464
      },
      {
        "longitude": -11.32309,
        "latitude": 13.10534
      },
      {
        "longitude": -9.03353,
        "latitude": 13.10534
      },
      {
        "longitude": -6.74397,
        "latitude": 13.10534
      },
      {
        "longitude": -6.74397,
        "latitude": 10.86585
      }
    ],
    "editor.pixelCountrySeries.AE": [
      {
        "longitude": 52.78461,
        "latitude": 23.94029
      },
      {
        "longitude": 55.07418,
        "latitude": 23.94029
      }
    ],
    "editor.pixelCountrySeries.OM": [
      {
        "longitude": 57.36374,
        "latitude": 23.94029
      },
      {
        "longitude": 57.36374,
        "latitude": 21.83112
      },
      {
        "longitude": 55.07418,
        "latitude": 19.69038
      },
      {
        "longitude": 57.36374,
        "latitude": 19.69038
      },
      {
        "longitude": 52.78461,
        "latitude": 17.52064
      },
      {
        "longitude": 55.07418,
        "latitude": 17.52064
      }
    ],
    "editor.pixelCountrySeries.CU": [
      {
        "longitude": -80.00992,
        "latitude": 21.83112
      },
      {
        "longitude": -77.72036,
        "latitude": 21.83112
      }
    ],
    "editor.pixelCountrySeries.NE": [
      {
        "longitude": 9.28296,
        "latitude": 21.83112
      },
      {
        "longitude": 11.57252,
        "latitude": 21.83112
      },
      {
        "longitude": 13.86208,
        "latitude": 21.83112
      },
      {
        "longitude": 6.9934,
        "latitude": 19.69038
      },
      {
        "longitude": 9.28296,
        "latitude": 19.69038
      },
      {
        "longitude": 11.57252,
        "latitude": 19.69038
      },
      {
        "longitude": 13.86208,
        "latitude": 19.69038
      },
      {
        "longitude": 4.70384,
        "latitude": 17.52064
      },
      {
        "longitude": 6.9934,
        "latitude": 17.52064
      },
      {
        "longitude": 9.28296,
        "latitude": 17.52064
      },
      {
        "longitude": 11.57252,
        "latitude": 17.52064
      },
      {
        "longitude": 13.86208,
        "latitude": 17.52064
      },
      {
        "longitude": 4.70384,
        "latitude": 15.32464
      },
      {
        "longitude": 6.9934,
        "latitude": 15.32464
      },
      {
        "longitude": 9.28296,
        "latitude": 15.32464
      },
      {
        "longitude": 11.57252,
        "latitude": 15.32464
      },
      {
        "longitude": 13.86208,
        "latitude": 15.32464
      },
      {
        "longitude": 2.41427,
        "latitude": 13.10534
      },
      {
        "longitude": 9.28296,
        "latitude": 13.10534
      }
    ],
    "editor.pixelCountrySeries.TD": [
      {
        "longitude": 16.15164,
        "latitude": 21.83112
      },
      {
        "longitude": 18.4412,
        "latitude": 21.83112
      },
      {
        "longitude": 16.15164,
        "latitude": 19.69038
      },
      {
        "longitude": 18.4412,
        "latitude": 19.69038
      },
      {
        "longitude": 20.73076,
        "latitude": 19.69038
      },
      {
        "longitude": 23.02032,
        "latitude": 19.69038
      },
      {
        "longitude": 16.15164,
        "latitude": 17.52064
      },
      {
        "longitude": 18.4412,
        "latitude": 17.52064
      },
      {
        "longitude": 20.73076,
        "latitude": 17.52064
      },
      {
        "longitude": 23.02032,
        "latitude": 17.52064
      },
      {
        "longitude": 16.15164,
        "latitude": 15.32464
      },
      {
        "longitude": 18.4412,
        "latitude": 15.32464
      },
      {
        "longitude": 20.73076,
        "latitude": 15.32464
      },
      {
        "longitude": 16.15164,
        "latitude": 13.10534
      },
      {
        "longitude": 18.4412,
        "latitude": 13.10534
      },
      {
        "longitude": 20.73076,
        "latitude": 13.10534
      },
      {
        "longitude": 16.15164,
        "latitude": 10.86585
      },
      {
        "longitude": 18.4412,
        "latitude": 10.86585
      },
      {
        "longitude": 20.73076,
        "latitude": 10.86585
      },
      {
        "longitude": 16.15164,
        "latitude": 8.60943
      },
      {
        "longitude": 18.4412,
        "latitude": 8.60943
      }
    ],
    "editor.pixelCountrySeries.SD": [
      {
        "longitude": 25.30988,
        "latitude": 21.83112
      },
      {
        "longitude": 27.59944,
        "latitude": 21.83112
      },
      {
        "longitude": 29.88901,
        "latitude": 21.83112
      },
      {
        "longitude": 32.17857,
        "latitude": 21.83112
      },
      {
        "longitude": 34.46813,
        "latitude": 21.83112
      },
      {
        "longitude": 36.75769,
        "latitude": 21.83112
      },
      {
        "longitude": 25.30988,
        "latitude": 19.69038
      },
      {
        "longitude": 27.59944,
        "latitude": 19.69038
      },
      {
        "longitude": 29.88901,
        "latitude": 19.69038
      },
      {
        "longitude": 32.17857,
        "latitude": 19.69038
      },
      {
        "longitude": 34.46813,
        "latitude": 19.69038
      },
      {
        "longitude": 36.75769,
        "latitude": 19.69038
      },
      {
        "longitude": 25.30988,
        "latitude": 17.52064
      },
      {
        "longitude": 27.59944,
        "latitude": 17.52064
      },
      {
        "longitude": 29.88901,
        "latitude": 17.52064
      },
      {
        "longitude": 32.17857,
        "latitude": 17.52064
      },
      {
        "longitude": 34.46813,
        "latitude": 17.52064
      },
      {
        "longitude": 36.75769,
        "latitude": 17.52064
      },
      {
        "longitude": 23.02032,
        "latitude": 15.32464
      },
      {
        "longitude": 25.30988,
        "latitude": 15.32464
      },
      {
        "longitude": 27.59944,
        "latitude": 15.32464
      },
      {
        "longitude": 29.88901,
        "latitude": 15.32464
      },
      {
        "longitude": 32.17857,
        "latitude": 15.32464
      },
      {
        "longitude": 34.46813,
        "latitude": 15.32464
      },
      {
        "longitude": 23.02032,
        "latitude": 13.10534
      },
      {
        "longitude": 25.30988,
        "latitude": 13.10534
      },
      {
        "longitude": 27.59944,
        "latitude": 13.10534
      },
      {
        "longitude": 29.88901,
        "latitude": 13.10534
      },
      {
        "longitude": 32.17857,
        "latitude": 13.10534
      },
      {
        "longitude": 34.46813,
        "latitude": 13.10534
      },
      {
        "longitude": 23.02032,
        "latitude": 10.86585
      },
      {
        "longitude": 25.30988,
        "latitude": 10.86585
      },
      {
        "longitude": 27.59944,
        "latitude": 10.86585
      },
      {
        "longitude": 29.88901,
        "latitude": 10.86585
      }
    ],
    "editor.pixelCountrySeries.VN": [
      {
        "longitude": 103.15495,
        "latitude": 21.83112
      },
      {
        "longitude": 105.44451,
        "latitude": 21.83112
      },
      {
        "longitude": 105.44451,
        "latitude": 19.69038
      },
      {
        "longitude": 107.73408,
        "latitude": 15.32464
      },
      {
        "longitude": 107.73408,
        "latitude": 13.10534
      },
      {
        "longitude": 105.44451,
        "latitude": 10.86585
      },
      {
        "longitude": 107.73408,
        "latitude": 10.86585
      }
    ],
    "editor.pixelCountrySeries.HT": [
      {
        "longitude": -73.14123,
        "latitude": 19.69038
      }
    ],
    "editor.pixelCountrySeries.DO": [
      {
        "longitude": -70.85167,
        "latitude": 19.69038
      }
    ],
    "editor.pixelCountrySeries.TH": [
      {
        "longitude": 98.57583,
        "latitude": 19.69038
      },
      {
        "longitude": 98.57583,
        "latitude": 17.52064
      },
      {
        "longitude": 100.86539,
        "latitude": 17.52064
      },
      {
        "longitude": 103.15495,
        "latitude": 17.52064
      },
      {
        "longitude": 98.57583,
        "latitude": 15.32464
      },
      {
        "longitude": 100.86539,
        "latitude": 15.32464
      },
      {
        "longitude": 103.15495,
        "latitude": 15.32464
      },
      {
        "longitude": 100.86539,
        "latitude": 13.10534
      },
      {
        "longitude": 98.57583,
        "latitude": 8.60943
      }
    ],
    "editor.pixelCountrySeries.LA": [
      {
        "longitude": 100.86539,
        "latitude": 19.69038
      },
      {
        "longitude": 103.15495,
        "latitude": 19.69038
      },
      {
        "longitude": 105.44451,
        "latitude": 17.52064
      },
      {
        "longitude": 105.44451,
        "latitude": 15.32464
      }
    ],
    "editor.pixelCountrySeries.BZ": [
      {
        "longitude": -89.16816,
        "latitude": 17.52064
      }
    ],
    "editor.pixelCountrySeries.YE": [
      {
        "longitude": 48.20549,
        "latitude": 17.52064
      },
      {
        "longitude": 50.49505,
        "latitude": 17.52064
      },
      {
        "longitude": 43.62637,
        "latitude": 15.32464
      },
      {
        "longitude": 45.91593,
        "latitude": 15.32464
      },
      {
        "longitude": 48.20549,
        "latitude": 15.32464
      },
      {
        "longitude": 50.49505,
        "latitude": 15.32464
      },
      {
        "longitude": 43.62637,
        "latitude": 13.10534
      }
    ],
    "editor.pixelCountrySeries.PH": [
      {
        "longitude": 121.47144,
        "latitude": 17.52064
      },
      {
        "longitude": 121.47144,
        "latitude": 15.32464
      },
      {
        "longitude": 123.761,
        "latitude": 13.10534
      },
      {
        "longitude": 119.18188,
        "latitude": 10.86585
      },
      {
        "longitude": 123.761,
        "latitude": 8.60943
      },
      {
        "longitude": 126.05056,
        "latitude": 8.60943
      }
    ],
    "editor.pixelCountrySeries.GT": [
      {
        "longitude": -91.45772,
        "latitude": 15.32464
      },
      {
        "longitude": -89.16816,
        "latitude": 15.32464
      }
    ],
    "editor.pixelCountrySeries.HN": [
      {
        "longitude": -86.8786,
        "latitude": 15.32464
      },
      {
        "longitude": -84.58904,
        "latitude": 15.32464
      }
    ],
    "editor.pixelCountrySeries.SN": [
      {
        "longitude": -15.90221,
        "latitude": 15.32464
      },
      {
        "longitude": -13.61265,
        "latitude": 15.32464
      },
      {
        "longitude": -15.90221,
        "latitude": 13.10534
      },
      {
        "longitude": -13.61265,
        "latitude": 13.10534
      }
    ],
    "editor.pixelCountrySeries.BR": [
      {
        "longitude": 2.41427,
        "latitude": 15.32464
      },
      {
        "longitude": -63.98299,
        "latitude": 4.05949
      },
      {
        "longitude": -61.69343,
        "latitude": 4.05949
      },
      {
        "longitude": -68.56211,
        "latitude": 1.77305
      },
      {
        "longitude": -63.98299,
        "latitude": 1.77305
      },
      {
        "longitude": -61.69343,
        "latitude": 1.77305
      },
      {
        "longitude": -57.11431,
        "latitude": 1.77305
      },
      {
        "longitude": -54.82475,
        "latitude": 1.77305
      },
      {
        "longitude": -52.53519,
        "latitude": 1.77305
      },
      {
        "longitude": -50.24563,
        "latitude": 1.77305
      },
      {
        "longitude": -68.56211,
        "latitude": -0.51622
      },
      {
        "longitude": -66.27255,
        "latitude": -0.51622
      },
      {
        "longitude": -63.98299,
        "latitude": -0.51622
      },
      {
        "longitude": -61.69343,
        "latitude": -0.51622
      },
      {
        "longitude": -59.40387,
        "latitude": -0.51622
      },
      {
        "longitude": -57.11431,
        "latitude": -0.51622
      },
      {
        "longitude": -54.82475,
        "latitude": -0.51622
      },
      {
        "longitude": -52.53519,
        "latitude": -0.51622
      },
      {
        "longitude": -50.24563,
        "latitude": -0.51622
      },
      {
        "longitude": -47.95606,
        "latitude": -0.51622
      },
      {
        "longitude": -68.56211,
        "latitude": -2.80467
      },
      {
        "longitude": -66.27255,
        "latitude": -2.80467
      },
      {
        "longitude": -63.98299,
        "latitude": -2.80467
      },
      {
        "longitude": -61.69343,
        "latitude": -2.80467
      },
      {
        "longitude": -59.40387,
        "latitude": -2.80467
      },
      {
        "longitude": -57.11431,
        "latitude": -2.80467
      },
      {
        "longitude": -54.82475,
        "latitude": -2.80467
      },
      {
        "longitude": -52.53519,
        "latitude": -2.80467
      },
      {
        "longitude": -50.24563,
        "latitude": -2.80467
      },
      {
        "longitude": -47.95606,
        "latitude": -2.80467
      },
      {
        "longitude": -45.6665,
        "latitude": -2.80467
      },
      {
        "longitude": -43.37694,
        "latitude": -2.80467
      },
      {
        "longitude": -41.08738,
        "latitude": -2.80467
      },
      {
        "longitude": -70.85167,
        "latitude": -5.08865
      },
      {
        "longitude": -68.56211,
        "latitude": -5.08865
      },
      {
        "longitude": -66.27255,
        "latitude": -5.08865
      },
      {
        "longitude": -63.98299,
        "latitude": -5.08865
      },
      {
        "longitude": -61.69343,
        "latitude": -5.08865
      },
      {
        "longitude": -59.40387,
        "latitude": -5.08865
      },
      {
        "longitude": -57.11431,
        "latitude": -5.08865
      },
      {
        "longitude": -54.82475,
        "latitude": -5.08865
      },
      {
        "longitude": -52.53519,
        "latitude": -5.08865
      },
      {
        "longitude": -50.24563,
        "latitude": -5.08865
      },
      {
        "longitude": -47.95606,
        "latitude": -5.08865
      },
      {
        "longitude": -45.6665,
        "latitude": -5.08865
      },
      {
        "longitude": -43.37694,
        "latitude": -5.08865
      },
      {
        "longitude": -41.08738,
        "latitude": -5.08865
      },
      {
        "longitude": -38.79782,
        "latitude": -5.08865
      },
      {
        "longitude": -36.50826,
        "latitude": -5.08865
      },
      {
        "longitude": -73.14123,
        "latitude": -7.36455
      },
      {
        "longitude": -70.85167,
        "latitude": -7.36455
      },
      {
        "longitude": -68.56211,
        "latitude": -7.36455
      },
      {
        "longitude": -66.27255,
        "latitude": -7.36455
      },
      {
        "longitude": -63.98299,
        "latitude": -7.36455
      },
      {
        "longitude": -61.69343,
        "latitude": -7.36455
      },
      {
        "longitude": -59.40387,
        "latitude": -7.36455
      },
      {
        "longitude": -57.11431,
        "latitude": -7.36455
      },
      {
        "longitude": -54.82475,
        "latitude": -7.36455
      },
      {
        "longitude": -52.53519,
        "latitude": -7.36455
      },
      {
        "longitude": -50.24563,
        "latitude": -7.36455
      },
      {
        "longitude": -47.95606,
        "latitude": -7.36455
      },
      {
        "longitude": -45.6665,
        "latitude": -7.36455
      },
      {
        "longitude": -43.37694,
        "latitude": -7.36455
      },
      {
        "longitude": -41.08738,
        "latitude": -7.36455
      },
      {
        "longitude": -38.79782,
        "latitude": -7.36455
      },
      {
        "longitude": -36.50826,
        "latitude": -7.36455
      },
      {
        "longitude": -68.56211,
        "latitude": -9.62883
      },
      {
        "longitude": -66.27255,
        "latitude": -9.62883
      },
      {
        "longitude": -63.98299,
        "latitude": -9.62883
      },
      {
        "longitude": -61.69343,
        "latitude": -9.62883
      },
      {
        "longitude": -59.40387,
        "latitude": -9.62883
      },
      {
        "longitude": -57.11431,
        "latitude": -9.62883
      },
      {
        "longitude": -54.82475,
        "latitude": -9.62883
      },
      {
        "longitude": -52.53519,
        "latitude": -9.62883
      },
      {
        "longitude": -50.24563,
        "latitude": -9.62883
      },
      {
        "longitude": -47.95606,
        "latitude": -9.62883
      },
      {
        "longitude": -45.6665,
        "latitude": -9.62883
      },
      {
        "longitude": -43.37694,
        "latitude": -9.62883
      },
      {
        "longitude": -41.08738,
        "latitude": -9.62883
      },
      {
        "longitude": -38.79782,
        "latitude": -9.62883
      },
      {
        "longitude": -36.50826,
        "latitude": -9.62883
      },
      {
        "longitude": -63.98299,
        "latitude": -11.87803
      },
      {
        "longitude": -61.69343,
        "latitude": -11.87803
      },
      {
        "longitude": -59.40387,
        "latitude": -11.87803
      },
      {
        "longitude": -57.11431,
        "latitude": -11.87803
      },
      {
        "longitude": -54.82475,
        "latitude": -11.87803
      },
      {
        "longitude": -52.53519,
        "latitude": -11.87803
      },
      {
        "longitude": -50.24563,
        "latitude": -11.87803
      },
      {
        "longitude": -47.95606,
        "latitude": -11.87803
      },
      {
        "longitude": -45.6665,
        "latitude": -11.87803
      },
      {
        "longitude": -43.37694,
        "latitude": -11.87803
      },
      {
        "longitude": -41.08738,
        "latitude": -11.87803
      },
      {
        "longitude": -38.79782,
        "latitude": -11.87803
      },
      {
        "longitude": -59.40387,
        "latitude": -14.10881
      },
      {
        "longitude": -57.11431,
        "latitude": -14.10881
      },
      {
        "longitude": -54.82475,
        "latitude": -14.10881
      },
      {
        "longitude": -52.53519,
        "latitude": -14.10881
      },
      {
        "longitude": -50.24563,
        "latitude": -14.10881
      },
      {
        "longitude": -47.95606,
        "latitude": -14.10881
      },
      {
        "longitude": -45.6665,
        "latitude": -14.10881
      },
      {
        "longitude": -43.37694,
        "latitude": -14.10881
      },
      {
        "longitude": -41.08738,
        "latitude": -14.10881
      },
      {
        "longitude": -57.11431,
        "latitude": -16.31798
      },
      {
        "longitude": -54.82475,
        "latitude": -16.31798
      },
      {
        "longitude": -52.53519,
        "latitude": -16.31798
      },
      {
        "longitude": -50.24563,
        "latitude": -16.31798
      },
      {
        "longitude": -47.95606,
        "latitude": -16.31798
      },
      {
        "longitude": -45.6665,
        "latitude": -16.31798
      },
      {
        "longitude": -43.37694,
        "latitude": -16.31798
      },
      {
        "longitude": -41.08738,
        "latitude": -16.31798
      },
      {
        "longitude": -57.11431,
        "latitude": -18.50249
      },
      {
        "longitude": -54.82475,
        "latitude": -18.50249
      },
      {
        "longitude": -52.53519,
        "latitude": -18.50249
      },
      {
        "longitude": -50.24563,
        "latitude": -18.50249
      },
      {
        "longitude": -47.95606,
        "latitude": -18.50249
      },
      {
        "longitude": -45.6665,
        "latitude": -18.50249
      },
      {
        "longitude": -43.37694,
        "latitude": -18.50249
      },
      {
        "longitude": -41.08738,
        "latitude": -18.50249
      },
      {
        "longitude": -57.11431,
        "latitude": -20.65948
      },
      {
        "longitude": -54.82475,
        "latitude": -20.65948
      },
      {
        "longitude": -52.53519,
        "latitude": -20.65948
      },
      {
        "longitude": -50.24563,
        "latitude": -20.65948
      },
      {
        "longitude": -47.95606,
        "latitude": -20.65948
      },
      {
        "longitude": -45.6665,
        "latitude": -20.65948
      },
      {
        "longitude": -43.37694,
        "latitude": -20.65948
      },
      {
        "longitude": -41.08738,
        "latitude": -20.65948
      },
      {
        "longitude": -54.82475,
        "latitude": -22.78629
      },
      {
        "longitude": -52.53519,
        "latitude": -22.78629
      },
      {
        "longitude": -50.24563,
        "latitude": -22.78629
      },
      {
        "longitude": -47.95606,
        "latitude": -22.78629
      },
      {
        "longitude": -45.6665,
        "latitude": -22.78629
      },
      {
        "longitude": -43.37694,
        "latitude": -22.78629
      },
      {
        "longitude": -52.53519,
        "latitude": -24.88044
      },
      {
        "longitude": -50.24563,
        "latitude": -24.88044
      },
      {
        "longitude": -47.95606,
        "latitude": -24.88044
      },
      {
        "longitude": -52.53519,
        "latitude": -26.9397
      },
      {
        "longitude": -50.24563,
        "latitude": -26.9397
      },
      {
        "longitude": -54.82475,
        "latitude": -28.96201
      },
      {
        "longitude": -52.53519,
        "latitude": -28.96201
      },
      {
        "longitude": -50.24563,
        "latitude": -28.96201
      },
      {
        "longitude": -54.82475,
        "latitude": -30.94559
      },
      {
        "longitude": -52.53519,
        "latitude": -30.94559
      }
    ],
    "editor.pixelCountrySeries.ER": [
      {
        "longitude": 36.75769,
        "latitude": 15.32464
      },
      {
        "longitude": 39.04725,
        "latitude": 15.32464
      }
    ],
    "editor.pixelCountrySeries.NI": [
      {
        "longitude": -86.8786,
        "latitude": 13.10534
      },
      {
        "longitude": -84.58904,
        "latitude": 13.10534
      }
    ],
    "editor.pixelCountrySeries.BF": [
      {
        "longitude": -4.45441,
        "latitude": 13.10534
      },
      {
        "longitude": -2.16485,
        "latitude": 13.10534
      },
      {
        "longitude": 0.12471,
        "latitude": 13.10534
      },
      {
        "longitude": -4.45441,
        "latitude": 10.86585
      }
    ],
    "editor.pixelCountrySeries.NG": [
      {
        "longitude": 4.70384,
        "latitude": 13.10534
      },
      {
        "longitude": 6.9934,
        "latitude": 13.10534
      },
      {
        "longitude": 11.57252,
        "latitude": 13.10534
      },
      {
        "longitude": 13.86208,
        "latitude": 13.10534
      },
      {
        "longitude": 4.70384,
        "latitude": 10.86585
      },
      {
        "longitude": 6.9934,
        "latitude": 10.86585
      },
      {
        "longitude": 9.28296,
        "latitude": 10.86585
      },
      {
        "longitude": 11.57252,
        "latitude": 10.86585
      },
      {
        "longitude": 4.70384,
        "latitude": 8.60943
      },
      {
        "longitude": 6.9934,
        "latitude": 8.60943
      },
      {
        "longitude": 9.28296,
        "latitude": 8.60943
      },
      {
        "longitude": 11.57252,
        "latitude": 8.60943
      },
      {
        "longitude": 4.70384,
        "latitude": 6.33948
      },
      {
        "longitude": 6.9934,
        "latitude": 6.33948
      }
    ],
    "editor.pixelCountrySeries.ET": [
      {
        "longitude": 36.75769,
        "latitude": 13.10534
      },
      {
        "longitude": 39.04725,
        "latitude": 13.10534
      },
      {
        "longitude": 41.33681,
        "latitude": 13.10534
      },
      {
        "longitude": 34.46813,
        "latitude": 10.86585
      },
      {
        "longitude": 36.75769,
        "latitude": 10.86585
      },
      {
        "longitude": 39.04725,
        "latitude": 10.86585
      },
      {
        "longitude": 41.33681,
        "latitude": 10.86585
      },
      {
        "longitude": 34.46813,
        "latitude": 8.60943
      },
      {
        "longitude": 36.75769,
        "latitude": 8.60943
      },
      {
        "longitude": 39.04725,
        "latitude": 8.60943
      },
      {
        "longitude": 41.33681,
        "latitude": 8.60943
      },
      {
        "longitude": 43.62637,
        "latitude": 8.60943
      },
      {
        "longitude": 36.75769,
        "latitude": 6.33948
      },
      {
        "longitude": 39.04725,
        "latitude": 6.33948
      },
      {
        "longitude": 41.33681,
        "latitude": 6.33948
      },
      {
        "longitude": 43.62637,
        "latitude": 6.33948
      },
      {
        "longitude": 45.91593,
        "latitude": 6.33948
      },
      {
        "longitude": 39.04725,
        "latitude": 4.05949
      }
    ],
    "editor.pixelCountrySeries.KH": [
      {
        "longitude": 103.15495,
        "latitude": 13.10534
      },
      {
        "longitude": 105.44451,
        "latitude": 13.10534
      }
    ],
    "editor.pixelCountrySeries.CR": [
      {
        "longitude": -84.58904,
        "latitude": 10.86585
      }
    ],
    "editor.pixelCountrySeries.CO": [
      {
        "longitude": -75.43079,
        "latitude": 10.86585
      },
      {
        "longitude": -73.14123,
        "latitude": 10.86585
      },
      {
        "longitude": -75.43079,
        "latitude": 8.60943
      },
      {
        "longitude": -73.14123,
        "latitude": 8.60943
      },
      {
        "longitude": -77.72036,
        "latitude": 6.33948
      },
      {
        "longitude": -75.43079,
        "latitude": 6.33948
      },
      {
        "longitude": -73.14123,
        "latitude": 6.33948
      },
      {
        "longitude": -70.85167,
        "latitude": 6.33948
      },
      {
        "longitude": -77.72036,
        "latitude": 4.05949
      },
      {
        "longitude": -75.43079,
        "latitude": 4.05949
      },
      {
        "longitude": -73.14123,
        "latitude": 4.05949
      },
      {
        "longitude": -70.85167,
        "latitude": 4.05949
      },
      {
        "longitude": -68.56211,
        "latitude": 4.05949
      },
      {
        "longitude": -77.72036,
        "latitude": 1.77305
      },
      {
        "longitude": -75.43079,
        "latitude": 1.77305
      },
      {
        "longitude": -73.14123,
        "latitude": 1.77305
      },
      {
        "longitude": -70.85167,
        "latitude": 1.77305
      },
      {
        "longitude": -73.14123,
        "latitude": -0.51622
      },
      {
        "longitude": -70.85167,
        "latitude": -0.51622
      }
    ],
    "editor.pixelCountrySeries.VE": [
      {
        "longitude": -70.85167,
        "latitude": 10.86585
      },
      {
        "longitude": -68.56211,
        "latitude": 10.86585
      },
      {
        "longitude": -66.27255,
        "latitude": 10.86585
      },
      {
        "longitude": -63.98299,
        "latitude": 10.86585
      },
      {
        "longitude": -70.85167,
        "latitude": 8.60943
      },
      {
        "longitude": -68.56211,
        "latitude": 8.60943
      },
      {
        "longitude": -66.27255,
        "latitude": 8.60943
      },
      {
        "longitude": -63.98299,
        "latitude": 8.60943
      },
      {
        "longitude": -61.69343,
        "latitude": 8.60943
      },
      {
        "longitude": -68.56211,
        "latitude": 6.33948
      },
      {
        "longitude": -66.27255,
        "latitude": 6.33948
      },
      {
        "longitude": -63.98299,
        "latitude": 6.33948
      },
      {
        "longitude": -61.69343,
        "latitude": 6.33948
      },
      {
        "longitude": -66.27255,
        "latitude": 4.05949
      },
      {
        "longitude": -66.27255,
        "latitude": 1.77305
      }
    ],
    "editor.pixelCountrySeries.TT": [
      {
        "longitude": -61.69343,
        "latitude": 10.86585
      }
    ],
    "editor.pixelCountrySeries.GN": [
      {
        "longitude": -13.61265,
        "latitude": 10.86585
      },
      {
        "longitude": -11.32309,
        "latitude": 10.86585
      },
      {
        "longitude": -9.03353,
        "latitude": 10.86585
      },
      {
        "longitude": -9.03353,
        "latitude": 8.60943
      }
    ],
    "editor.pixelCountrySeries.GH": [
      {
        "longitude": -2.16485,
        "latitude": 10.86585
      },
      {
        "longitude": -2.16485,
        "latitude": 8.60943
      },
      {
        "longitude": 0.12471,
        "latitude": 8.60943
      },
      {
        "longitude": -2.16485,
        "latitude": 6.33948
      },
      {
        "longitude": 0.12471,
        "latitude": 6.33948
      }
    ],
    "editor.pixelCountrySeries.TG": [
      {
        "longitude": 0.12471,
        "latitude": 10.86585
      }
    ],
    "editor.pixelCountrySeries.BJ": [
      {
        "longitude": 2.41427,
        "latitude": 10.86585
      },
      {
        "longitude": 2.41427,
        "latitude": 8.60943
      }
    ],
    "editor.pixelCountrySeries.CM": [
      {
        "longitude": 13.86208,
        "latitude": 10.86585
      },
      {
        "longitude": 13.86208,
        "latitude": 8.60943
      },
      {
        "longitude": 9.28296,
        "latitude": 6.33948
      },
      {
        "longitude": 11.57252,
        "latitude": 6.33948
      },
      {
        "longitude": 13.86208,
        "latitude": 6.33948
      },
      {
        "longitude": 9.28296,
        "latitude": 4.05949
      },
      {
        "longitude": 11.57252,
        "latitude": 4.05949
      },
      {
        "longitude": 13.86208,
        "latitude": 4.05949
      }
    ],
    "editor.pixelCountrySeries.SS": [
      {
        "longitude": 32.17857,
        "latitude": 10.86585
      },
      {
        "longitude": 25.30988,
        "latitude": 8.60943
      },
      {
        "longitude": 27.59944,
        "latitude": 8.60943
      },
      {
        "longitude": 29.88901,
        "latitude": 8.60943
      },
      {
        "longitude": 32.17857,
        "latitude": 8.60943
      },
      {
        "longitude": 27.59944,
        "latitude": 6.33948
      },
      {
        "longitude": 29.88901,
        "latitude": 6.33948
      },
      {
        "longitude": 32.17857,
        "latitude": 6.33948
      },
      {
        "longitude": 34.46813,
        "latitude": 6.33948
      },
      {
        "longitude": 32.17857,
        "latitude": 4.05949
      }
    ],
    "editor.pixelCountrySeries.SO": [
      {
        "longitude": 43.62637,
        "latitude": 10.86585
      },
      {
        "longitude": 45.91593,
        "latitude": 10.86585
      },
      {
        "longitude": 48.20549,
        "latitude": 10.86585
      },
      {
        "longitude": 50.49505,
        "latitude": 10.86585
      },
      {
        "longitude": 45.91593,
        "latitude": 8.60943
      },
      {
        "longitude": 48.20549,
        "latitude": 8.60943
      },
      {
        "longitude": 48.20549,
        "latitude": 6.33948
      },
      {
        "longitude": 43.62637,
        "latitude": 4.05949
      },
      {
        "longitude": 45.91593,
        "latitude": 4.05949
      },
      {
        "longitude": 41.33681,
        "latitude": 1.77305
      },
      {
        "longitude": 43.62637,
        "latitude": 1.77305
      },
      {
        "longitude": 41.33681,
        "latitude": -0.51622
      }
    ],
    "editor.pixelCountrySeries.PA": [
      {
        "longitude": -82.29948,
        "latitude": 8.60943
      },
      {
        "longitude": -80.00992,
        "latitude": 8.60943
      },
      {
        "longitude": -77.72036,
        "latitude": 8.60943
      }
    ],
    "editor.pixelCountrySeries.SL": [
      {
        "longitude": -11.32309,
        "latitude": 8.60943
      }
    ],
    "editor.pixelCountrySeries.CI": [
      {
        "longitude": -6.74397,
        "latitude": 8.60943
      },
      {
        "longitude": -4.45441,
        "latitude": 8.60943
      },
      {
        "longitude": -6.74397,
        "latitude": 6.33948
      },
      {
        "longitude": -4.45441,
        "latitude": 6.33948
      }
    ],
    "editor.pixelCountrySeries.CF": [
      {
        "longitude": 20.73076,
        "latitude": 8.60943
      },
      {
        "longitude": 23.02032,
        "latitude": 8.60943
      },
      {
        "longitude": 16.15164,
        "latitude": 6.33948
      },
      {
        "longitude": 18.4412,
        "latitude": 6.33948
      },
      {
        "longitude": 20.73076,
        "latitude": 6.33948
      },
      {
        "longitude": 23.02032,
        "latitude": 6.33948
      },
      {
        "longitude": 25.30988,
        "latitude": 6.33948
      },
      {
        "longitude": 16.15164,
        "latitude": 4.05949
      }
    ],
    "editor.pixelCountrySeries.LK": [
      {
        "longitude": 80.25934,
        "latitude": 8.60943
      },
      {
        "longitude": 80.25934,
        "latitude": 6.33948
      }
    ],
    "editor.pixelCountrySeries.GY": [
      {
        "longitude": -59.40387,
        "latitude": 6.33948
      },
      {
        "longitude": -59.40387,
        "latitude": 4.05949
      },
      {
        "longitude": -59.40387,
        "latitude": 1.77305
      }
    ],
    "editor.pixelCountrySeries.SR": [
      {
        "longitude": -57.11431,
        "latitude": 6.33948
      },
      {
        "longitude": -54.82475,
        "latitude": 6.33948
      },
      {
        "longitude": -57.11431,
        "latitude": 4.05949
      },
      {
        "longitude": -54.82475,
        "latitude": 4.05949
      }
    ],
    "editor.pixelCountrySeries.LR": [
      {
        "longitude": -9.03353,
        "latitude": 6.33948
      }
    ],
    "editor.pixelCountrySeries.MY": [
      {
        "longitude": 100.86539,
        "latitude": 6.33948
      },
      {
        "longitude": 116.89232,
        "latitude": 6.33948
      },
      {
        "longitude": 100.86539,
        "latitude": 4.05949
      },
      {
        "longitude": 103.15495,
        "latitude": 4.05949
      },
      {
        "longitude": 114.60276,
        "latitude": 4.05949
      },
      {
        "longitude": 103.15495,
        "latitude": 1.77305
      },
      {
        "longitude": 110.02364,
        "latitude": 1.77305
      },
      {
        "longitude": 112.3132,
        "latitude": 1.77305
      }
    ],
    "editor.pixelCountrySeries.GF": [
      {
        "longitude": -52.53519,
        "latitude": 4.05949
      }
    ],
    "editor.pixelCountrySeries.CD": [
      {
        "longitude": 18.4412,
        "latitude": 4.05949
      },
      {
        "longitude": 20.73076,
        "latitude": 4.05949
      },
      {
        "longitude": 23.02032,
        "latitude": 4.05949
      },
      {
        "longitude": 25.30988,
        "latitude": 4.05949
      },
      {
        "longitude": 27.59944,
        "latitude": 4.05949
      },
      {
        "longitude": 29.88901,
        "latitude": 4.05949
      },
      {
        "longitude": 18.4412,
        "latitude": 1.77305
      },
      {
        "longitude": 20.73076,
        "latitude": 1.77305
      },
      {
        "longitude": 23.02032,
        "latitude": 1.77305
      },
      {
        "longitude": 25.30988,
        "latitude": 1.77305
      },
      {
        "longitude": 27.59944,
        "latitude": 1.77305
      },
      {
        "longitude": 29.88901,
        "latitude": 1.77305
      },
      {
        "longitude": 18.4412,
        "latitude": -0.51622
      },
      {
        "longitude": 20.73076,
        "latitude": -0.51622
      },
      {
        "longitude": 23.02032,
        "latitude": -0.51622
      },
      {
        "longitude": 25.30988,
        "latitude": -0.51622
      },
      {
        "longitude": 27.59944,
        "latitude": -0.51622
      },
      {
        "longitude": 16.15164,
        "latitude": -2.80467
      },
      {
        "longitude": 18.4412,
        "latitude": -2.80467
      },
      {
        "longitude": 20.73076,
        "latitude": -2.80467
      },
      {
        "longitude": 23.02032,
        "latitude": -2.80467
      },
      {
        "longitude": 25.30988,
        "latitude": -2.80467
      },
      {
        "longitude": 27.59944,
        "latitude": -2.80467
      },
      {
        "longitude": 13.86208,
        "latitude": -5.08865
      },
      {
        "longitude": 16.15164,
        "latitude": -5.08865
      },
      {
        "longitude": 18.4412,
        "latitude": -5.08865
      },
      {
        "longitude": 20.73076,
        "latitude": -5.08865
      },
      {
        "longitude": 23.02032,
        "latitude": -5.08865
      },
      {
        "longitude": 25.30988,
        "latitude": -5.08865
      },
      {
        "longitude": 27.59944,
        "latitude": -5.08865
      },
      {
        "longitude": 18.4412,
        "latitude": -7.36455
      },
      {
        "longitude": 23.02032,
        "latitude": -7.36455
      },
      {
        "longitude": 25.30988,
        "latitude": -7.36455
      },
      {
        "longitude": 27.59944,
        "latitude": -7.36455
      },
      {
        "longitude": 29.88901,
        "latitude": -7.36455
      },
      {
        "longitude": 23.02032,
        "latitude": -9.62883
      },
      {
        "longitude": 25.30988,
        "latitude": -9.62883
      },
      {
        "longitude": 27.59944,
        "latitude": -9.62883
      },
      {
        "longitude": 27.59944,
        "latitude": -11.87803
      }
    ],
    "editor.pixelCountrySeries.KE": [
      {
        "longitude": 34.46813,
        "latitude": 4.05949
      },
      {
        "longitude": 36.75769,
        "latitude": 4.05949
      },
      {
        "longitude": 41.33681,
        "latitude": 4.05949
      },
      {
        "longitude": 36.75769,
        "latitude": 1.77305
      },
      {
        "longitude": 39.04725,
        "latitude": 1.77305
      },
      {
        "longitude": 34.46813,
        "latitude": -0.51622
      },
      {
        "longitude": 36.75769,
        "latitude": -0.51622
      },
      {
        "longitude": 39.04725,
        "latitude": -0.51622
      },
      {
        "longitude": 39.04725,
        "latitude": -2.80467
      }
    ],
    "editor.pixelCountrySeries.ID": [
      {
        "longitude": 96.28627,
        "latitude": 4.05949
      },
      {
        "longitude": 98.57583,
        "latitude": 4.05949
      },
      {
        "longitude": 116.89232,
        "latitude": 4.05949
      },
      {
        "longitude": 98.57583,
        "latitude": 1.77305
      },
      {
        "longitude": 100.86539,
        "latitude": 1.77305
      },
      {
        "longitude": 114.60276,
        "latitude": 1.77305
      },
      {
        "longitude": 116.89232,
        "latitude": 1.77305
      },
      {
        "longitude": 128.34012,
        "latitude": 1.77305
      },
      {
        "longitude": 100.86539,
        "latitude": -0.51622
      },
      {
        "longitude": 103.15495,
        "latitude": -0.51622
      },
      {
        "longitude": 110.02364,
        "latitude": -0.51622
      },
      {
        "longitude": 112.3132,
        "latitude": -0.51622
      },
      {
        "longitude": 114.60276,
        "latitude": -0.51622
      },
      {
        "longitude": 116.89232,
        "latitude": -0.51622
      },
      {
        "longitude": 119.18188,
        "latitude": -0.51622
      },
      {
        "longitude": 121.47144,
        "latitude": -0.51622
      },
      {
        "longitude": 132.91924,
        "latitude": -0.51622
      },
      {
        "longitude": 103.15495,
        "latitude": -2.80467
      },
      {
        "longitude": 105.44451,
        "latitude": -2.80467
      },
      {
        "longitude": 107.73408,
        "latitude": -2.80467
      },
      {
        "longitude": 110.02364,
        "latitude": -2.80467
      },
      {
        "longitude": 112.3132,
        "latitude": -2.80467
      },
      {
        "longitude": 114.60276,
        "latitude": -2.80467
      },
      {
        "longitude": 119.18188,
        "latitude": -2.80467
      },
      {
        "longitude": 121.47144,
        "latitude": -2.80467
      },
      {
        "longitude": 126.05056,
        "latitude": -2.80467
      },
      {
        "longitude": 128.34012,
        "latitude": -2.80467
      },
      {
        "longitude": 132.91924,
        "latitude": -2.80467
      },
      {
        "longitude": 135.20881,
        "latitude": -2.80467
      },
      {
        "longitude": 137.49837,
        "latitude": -2.80467
      },
      {
        "longitude": 139.78793,
        "latitude": -2.80467
      },
      {
        "longitude": 105.44451,
        "latitude": -5.08865
      },
      {
        "longitude": 119.18188,
        "latitude": -5.08865
      },
      {
        "longitude": 137.49837,
        "latitude": -5.08865
      },
      {
        "longitude": 139.78793,
        "latitude": -5.08865
      },
      {
        "longitude": 107.73408,
        "latitude": -7.36455
      },
      {
        "longitude": 110.02364,
        "latitude": -7.36455
      },
      {
        "longitude": 112.3132,
        "latitude": -7.36455
      },
      {
        "longitude": 126.05056,
        "latitude": -7.36455
      },
      {
        "longitude": 139.78793,
        "latitude": -7.36455
      },
      {
        "longitude": 119.18188,
        "latitude": -9.62883
      },
      {
        "longitude": 123.761,
        "latitude": -9.62883
      }
    ],
    "editor.pixelCountrySeries.GQ": [
      {
        "longitude": 9.28296,
        "latitude": 1.77305
      }
    ],
    "editor.pixelCountrySeries.GA": [
      {
        "longitude": 11.57252,
        "latitude": 1.77305
      },
      {
        "longitude": 9.28296,
        "latitude": -0.51622
      },
      {
        "longitude": 11.57252,
        "latitude": -0.51622
      },
      {
        "longitude": 13.86208,
        "latitude": -0.51622
      }
    ],
    "editor.pixelCountrySeries.CG": [
      {
        "longitude": 13.86208,
        "latitude": 1.77305
      },
      {
        "longitude": 16.15164,
        "latitude": 1.77305
      },
      {
        "longitude": 16.15164,
        "latitude": -0.51622
      },
      {
        "longitude": 11.57252,
        "latitude": -2.80467
      },
      {
        "longitude": 13.86208,
        "latitude": -2.80467
      }
    ],
    "editor.pixelCountrySeries.UG": [
      {
        "longitude": 32.17857,
        "latitude": 1.77305
      },
      {
        "longitude": 34.46813,
        "latitude": 1.77305
      },
      {
        "longitude": 29.88901,
        "latitude": -0.51622
      },
      {
        "longitude": 32.17857,
        "latitude": -0.51622
      }
    ],
    "editor.pixelCountrySeries.EC": [
      {
        "longitude": -91.45772,
        "latitude": -0.51622
      },
      {
        "longitude": -80.00992,
        "latitude": -0.51622
      },
      {
        "longitude": -77.72036,
        "latitude": -0.51622
      },
      {
        "longitude": -75.43079,
        "latitude": -0.51622
      },
      {
        "longitude": -80.00992,
        "latitude": -2.80467
      }
    ],
    "editor.pixelCountrySeries.PE": [
      {
        "longitude": -77.72036,
        "latitude": -2.80467
      },
      {
        "longitude": -75.43079,
        "latitude": -2.80467
      },
      {
        "longitude": -73.14123,
        "latitude": -2.80467
      },
      {
        "longitude": -70.85167,
        "latitude": -2.80467
      },
      {
        "longitude": -80.00992,
        "latitude": -5.08865
      },
      {
        "longitude": -77.72036,
        "latitude": -5.08865
      },
      {
        "longitude": -75.43079,
        "latitude": -5.08865
      },
      {
        "longitude": -73.14123,
        "latitude": -5.08865
      },
      {
        "longitude": -77.72036,
        "latitude": -7.36455
      },
      {
        "longitude": -75.43079,
        "latitude": -7.36455
      },
      {
        "longitude": -77.72036,
        "latitude": -9.62883
      },
      {
        "longitude": -75.43079,
        "latitude": -9.62883
      },
      {
        "longitude": -73.14123,
        "latitude": -9.62883
      },
      {
        "longitude": -70.85167,
        "latitude": -9.62883
      },
      {
        "longitude": -75.43079,
        "latitude": -11.87803
      },
      {
        "longitude": -73.14123,
        "latitude": -11.87803
      },
      {
        "longitude": -70.85167,
        "latitude": -11.87803
      },
      {
        "longitude": -75.43079,
        "latitude": -14.10881
      },
      {
        "longitude": -73.14123,
        "latitude": -14.10881
      },
      {
        "longitude": -70.85167,
        "latitude": -14.10881
      },
      {
        "longitude": -73.14123,
        "latitude": -16.31798
      },
      {
        "longitude": -70.85167,
        "latitude": -16.31798
      }
    ],
    "editor.pixelCountrySeries.BI": [
      {
        "longitude": 29.88901,
        "latitude": -2.80467
      }
    ],
    "editor.pixelCountrySeries.TZ": [
      {
        "longitude": 32.17857,
        "latitude": -2.80467
      },
      {
        "longitude": 34.46813,
        "latitude": -2.80467
      },
      {
        "longitude": 36.75769,
        "latitude": -2.80467
      },
      {
        "longitude": 29.88901,
        "latitude": -5.08865
      },
      {
        "longitude": 32.17857,
        "latitude": -5.08865
      },
      {
        "longitude": 34.46813,
        "latitude": -5.08865
      },
      {
        "longitude": 36.75769,
        "latitude": -5.08865
      },
      {
        "longitude": 32.17857,
        "latitude": -7.36455
      },
      {
        "longitude": 34.46813,
        "latitude": -7.36455
      },
      {
        "longitude": 36.75769,
        "latitude": -7.36455
      },
      {
        "longitude": 39.04725,
        "latitude": -7.36455
      },
      {
        "longitude": 34.46813,
        "latitude": -9.62883
      },
      {
        "longitude": 36.75769,
        "latitude": -9.62883
      },
      {
        "longitude": 39.04725,
        "latitude": -9.62883
      }
    ],
    "editor.pixelCountrySeries.PG": [
      {
        "longitude": 142.07749,
        "latitude": -2.80467
      },
      {
        "longitude": 142.07749,
        "latitude": -5.08865
      },
      {
        "longitude": 144.36705,
        "latitude": -5.08865
      },
      {
        "longitude": 148.94617,
        "latitude": -5.08865
      },
      {
        "longitude": 151.23573,
        "latitude": -5.08865
      },
      {
        "longitude": 142.07749,
        "latitude": -7.36455
      },
      {
        "longitude": 144.36705,
        "latitude": -7.36455
      },
      {
        "longitude": 146.65661,
        "latitude": -7.36455
      },
      {
        "longitude": 148.94617,
        "latitude": -9.62883
      }
    ],
    "editor.pixelCountrySeries.AO": [
      {
        "longitude": 13.86208,
        "latitude": -7.36455
      },
      {
        "longitude": 16.15164,
        "latitude": -7.36455
      },
      {
        "longitude": 20.73076,
        "latitude": -7.36455
      },
      {
        "longitude": 13.86208,
        "latitude": -9.62883
      },
      {
        "longitude": 16.15164,
        "latitude": -9.62883
      },
      {
        "longitude": 18.4412,
        "latitude": -9.62883
      },
      {
        "longitude": 20.73076,
        "latitude": -9.62883
      },
      {
        "longitude": 13.86208,
        "latitude": -11.87803
      },
      {
        "longitude": 16.15164,
        "latitude": -11.87803
      },
      {
        "longitude": 18.4412,
        "latitude": -11.87803
      },
      {
        "longitude": 20.73076,
        "latitude": -11.87803
      },
      {
        "longitude": 23.02032,
        "latitude": -11.87803
      },
      {
        "longitude": 13.86208,
        "latitude": -14.10881
      },
      {
        "longitude": 16.15164,
        "latitude": -14.10881
      },
      {
        "longitude": 18.4412,
        "latitude": -14.10881
      },
      {
        "longitude": 20.73076,
        "latitude": -14.10881
      },
      {
        "longitude": 11.57252,
        "latitude": -16.31798
      },
      {
        "longitude": 13.86208,
        "latitude": -16.31798
      },
      {
        "longitude": 16.15164,
        "latitude": -16.31798
      },
      {
        "longitude": 18.4412,
        "latitude": -16.31798
      },
      {
        "longitude": 20.73076,
        "latitude": -16.31798
      }
    ],
    "editor.pixelCountrySeries.ZM": [
      {
        "longitude": 29.88901,
        "latitude": -9.62883
      },
      {
        "longitude": 32.17857,
        "latitude": -9.62883
      },
      {
        "longitude": 25.30988,
        "latitude": -11.87803
      },
      {
        "longitude": 29.88901,
        "latitude": -11.87803
      },
      {
        "longitude": 32.17857,
        "latitude": -11.87803
      },
      {
        "longitude": 23.02032,
        "latitude": -14.10881
      },
      {
        "longitude": 25.30988,
        "latitude": -14.10881
      },
      {
        "longitude": 27.59944,
        "latitude": -14.10881
      },
      {
        "longitude": 29.88901,
        "latitude": -14.10881
      },
      {
        "longitude": 32.17857,
        "latitude": -14.10881
      },
      {
        "longitude": 23.02032,
        "latitude": -16.31798
      },
      {
        "longitude": 25.30988,
        "latitude": -16.31798
      },
      {
        "longitude": 27.59944,
        "latitude": -16.31798
      }
    ],
    "editor.pixelCountrySeries.SB": [
      {
        "longitude": 160.39398,
        "latitude": -9.62883
      }
    ],
    "editor.pixelCountrySeries.BO": [
      {
        "longitude": -68.56211,
        "latitude": -11.87803
      },
      {
        "longitude": -66.27255,
        "latitude": -11.87803
      },
      {
        "longitude": -68.56211,
        "latitude": -14.10881
      },
      {
        "longitude": -66.27255,
        "latitude": -14.10881
      },
      {
        "longitude": -63.98299,
        "latitude": -14.10881
      },
      {
        "longitude": -61.69343,
        "latitude": -14.10881
      },
      {
        "longitude": -68.56211,
        "latitude": -16.31798
      },
      {
        "longitude": -66.27255,
        "latitude": -16.31798
      },
      {
        "longitude": -63.98299,
        "latitude": -16.31798
      },
      {
        "longitude": -61.69343,
        "latitude": -16.31798
      },
      {
        "longitude": -59.40387,
        "latitude": -16.31798
      },
      {
        "longitude": -68.56211,
        "latitude": -18.50249
      },
      {
        "longitude": -66.27255,
        "latitude": -18.50249
      },
      {
        "longitude": -63.98299,
        "latitude": -18.50249
      },
      {
        "longitude": -61.69343,
        "latitude": -18.50249
      },
      {
        "longitude": -59.40387,
        "latitude": -18.50249
      },
      {
        "longitude": -68.56211,
        "latitude": -20.65948
      },
      {
        "longitude": -66.27255,
        "latitude": -20.65948
      },
      {
        "longitude": -63.98299,
        "latitude": -20.65948
      }
    ],
    "editor.pixelCountrySeries.MZ": [
      {
        "longitude": 34.46813,
        "latitude": -11.87803
      },
      {
        "longitude": 36.75769,
        "latitude": -11.87803
      },
      {
        "longitude": 39.04725,
        "latitude": -11.87803
      },
      {
        "longitude": 36.75769,
        "latitude": -14.10881
      },
      {
        "longitude": 39.04725,
        "latitude": -14.10881
      },
      {
        "longitude": 32.17857,
        "latitude": -16.31798
      },
      {
        "longitude": 36.75769,
        "latitude": -16.31798
      },
      {
        "longitude": 39.04725,
        "latitude": -16.31798
      },
      {
        "longitude": 34.46813,
        "latitude": -18.50249
      },
      {
        "longitude": 34.46813,
        "latitude": -20.65948
      },
      {
        "longitude": 32.17857,
        "latitude": -22.78629
      },
      {
        "longitude": 34.46813,
        "latitude": -22.78629
      },
      {
        "longitude": 32.17857,
        "latitude": -24.88044
      }
    ],
    "editor.pixelCountrySeries.AU": [
      {
        "longitude": 130.62968,
        "latitude": -11.87803
      },
      {
        "longitude": 132.91924,
        "latitude": -11.87803
      },
      {
        "longitude": 135.20881,
        "latitude": -11.87803
      },
      {
        "longitude": 142.07749,
        "latitude": -11.87803
      },
      {
        "longitude": 126.05056,
        "latitude": -14.10881
      },
      {
        "longitude": 130.62968,
        "latitude": -14.10881
      },
      {
        "longitude": 132.91924,
        "latitude": -14.10881
      },
      {
        "longitude": 135.20881,
        "latitude": -14.10881
      },
      {
        "longitude": 142.07749,
        "latitude": -14.10881
      },
      {
        "longitude": 144.36705,
        "latitude": -14.10881
      },
      {
        "longitude": 123.761,
        "latitude": -16.31798
      },
      {
        "longitude": 126.05056,
        "latitude": -16.31798
      },
      {
        "longitude": 128.34012,
        "latitude": -16.31798
      },
      {
        "longitude": 130.62968,
        "latitude": -16.31798
      },
      {
        "longitude": 132.91924,
        "latitude": -16.31798
      },
      {
        "longitude": 135.20881,
        "latitude": -16.31798
      },
      {
        "longitude": 137.49837,
        "latitude": -16.31798
      },
      {
        "longitude": 142.07749,
        "latitude": -16.31798
      },
      {
        "longitude": 144.36705,
        "latitude": -16.31798
      },
      {
        "longitude": 121.47144,
        "latitude": -18.50249
      },
      {
        "longitude": 123.761,
        "latitude": -18.50249
      },
      {
        "longitude": 126.05056,
        "latitude": -18.50249
      },
      {
        "longitude": 128.34012,
        "latitude": -18.50249
      },
      {
        "longitude": 130.62968,
        "latitude": -18.50249
      },
      {
        "longitude": 132.91924,
        "latitude": -18.50249
      },
      {
        "longitude": 135.20881,
        "latitude": -18.50249
      },
      {
        "longitude": 137.49837,
        "latitude": -18.50249
      },
      {
        "longitude": 139.78793,
        "latitude": -18.50249
      },
      {
        "longitude": 142.07749,
        "latitude": -18.50249
      },
      {
        "longitude": 144.36705,
        "latitude": -18.50249
      },
      {
        "longitude": 116.89232,
        "latitude": -20.65948
      },
      {
        "longitude": 119.18188,
        "latitude": -20.65948
      },
      {
        "longitude": 121.47144,
        "latitude": -20.65948
      },
      {
        "longitude": 123.761,
        "latitude": -20.65948
      },
      {
        "longitude": 126.05056,
        "latitude": -20.65948
      },
      {
        "longitude": 128.34012,
        "latitude": -20.65948
      },
      {
        "longitude": 130.62968,
        "latitude": -20.65948
      },
      {
        "longitude": 132.91924,
        "latitude": -20.65948
      },
      {
        "longitude": 135.20881,
        "latitude": -20.65948
      },
      {
        "longitude": 137.49837,
        "latitude": -20.65948
      },
      {
        "longitude": 139.78793,
        "latitude": -20.65948
      },
      {
        "longitude": 142.07749,
        "latitude": -20.65948
      },
      {
        "longitude": 144.36705,
        "latitude": -20.65948
      },
      {
        "longitude": 146.65661,
        "latitude": -20.65948
      },
      {
        "longitude": 148.94617,
        "latitude": -20.65948
      },
      {
        "longitude": 114.60276,
        "latitude": -22.78629
      },
      {
        "longitude": 116.89232,
        "latitude": -22.78629
      },
      {
        "longitude": 119.18188,
        "latitude": -22.78629
      },
      {
        "longitude": 121.47144,
        "latitude": -22.78629
      },
      {
        "longitude": 123.761,
        "latitude": -22.78629
      },
      {
        "longitude": 126.05056,
        "latitude": -22.78629
      },
      {
        "longitude": 128.34012,
        "latitude": -22.78629
      },
      {
        "longitude": 130.62968,
        "latitude": -22.78629
      },
      {
        "longitude": 132.91924,
        "latitude": -22.78629
      },
      {
        "longitude": 135.20881,
        "latitude": -22.78629
      },
      {
        "longitude": 137.49837,
        "latitude": -22.78629
      },
      {
        "longitude": 139.78793,
        "latitude": -22.78629
      },
      {
        "longitude": 142.07749,
        "latitude": -22.78629
      },
      {
        "longitude": 144.36705,
        "latitude": -22.78629
      },
      {
        "longitude": 146.65661,
        "latitude": -22.78629
      },
      {
        "longitude": 148.94617,
        "latitude": -22.78629
      },
      {
        "longitude": 114.60276,
        "latitude": -24.88044
      },
      {
        "longitude": 116.89232,
        "latitude": -24.88044
      },
      {
        "longitude": 119.18188,
        "latitude": -24.88044
      },
      {
        "longitude": 121.47144,
        "latitude": -24.88044
      },
      {
        "longitude": 123.761,
        "latitude": -24.88044
      },
      {
        "longitude": 126.05056,
        "latitude": -24.88044
      },
      {
        "longitude": 128.34012,
        "latitude": -24.88044
      },
      {
        "longitude": 130.62968,
        "latitude": -24.88044
      },
      {
        "longitude": 132.91924,
        "latitude": -24.88044
      },
      {
        "longitude": 135.20881,
        "latitude": -24.88044
      },
      {
        "longitude": 137.49837,
        "latitude": -24.88044
      },
      {
        "longitude": 139.78793,
        "latitude": -24.88044
      },
      {
        "longitude": 142.07749,
        "latitude": -24.88044
      },
      {
        "longitude": 144.36705,
        "latitude": -24.88044
      },
      {
        "longitude": 146.65661,
        "latitude": -24.88044
      },
      {
        "longitude": 148.94617,
        "latitude": -24.88044
      },
      {
        "longitude": 151.23573,
        "latitude": -24.88044
      },
      {
        "longitude": 114.60276,
        "latitude": -26.9397
      },
      {
        "longitude": 116.89232,
        "latitude": -26.9397
      },
      {
        "longitude": 119.18188,
        "latitude": -26.9397
      },
      {
        "longitude": 121.47144,
        "latitude": -26.9397
      },
      {
        "longitude": 123.761,
        "latitude": -26.9397
      },
      {
        "longitude": 126.05056,
        "latitude": -26.9397
      },
      {
        "longitude": 128.34012,
        "latitude": -26.9397
      },
      {
        "longitude": 130.62968,
        "latitude": -26.9397
      },
      {
        "longitude": 132.91924,
        "latitude": -26.9397
      },
      {
        "longitude": 135.20881,
        "latitude": -26.9397
      },
      {
        "longitude": 137.49837,
        "latitude": -26.9397
      },
      {
        "longitude": 139.78793,
        "latitude": -26.9397
      },
      {
        "longitude": 142.07749,
        "latitude": -26.9397
      },
      {
        "longitude": 144.36705,
        "latitude": -26.9397
      },
      {
        "longitude": 146.65661,
        "latitude": -26.9397
      },
      {
        "longitude": 148.94617,
        "latitude": -26.9397
      },
      {
        "longitude": 151.23573,
        "latitude": -26.9397
      },
      {
        "longitude": 114.60276,
        "latitude": -28.96201
      },
      {
        "longitude": 116.89232,
        "latitude": -28.96201
      },
      {
        "longitude": 119.18188,
        "latitude": -28.96201
      },
      {
        "longitude": 121.47144,
        "latitude": -28.96201
      },
      {
        "longitude": 123.761,
        "latitude": -28.96201
      },
      {
        "longitude": 126.05056,
        "latitude": -28.96201
      },
      {
        "longitude": 128.34012,
        "latitude": -28.96201
      },
      {
        "longitude": 130.62968,
        "latitude": -28.96201
      },
      {
        "longitude": 132.91924,
        "latitude": -28.96201
      },
      {
        "longitude": 135.20881,
        "latitude": -28.96201
      },
      {
        "longitude": 137.49837,
        "latitude": -28.96201
      },
      {
        "longitude": 139.78793,
        "latitude": -28.96201
      },
      {
        "longitude": 142.07749,
        "latitude": -28.96201
      },
      {
        "longitude": 144.36705,
        "latitude": -28.96201
      },
      {
        "longitude": 146.65661,
        "latitude": -28.96201
      },
      {
        "longitude": 148.94617,
        "latitude": -28.96201
      },
      {
        "longitude": 151.23573,
        "latitude": -28.96201
      },
      {
        "longitude": 116.89232,
        "latitude": -30.94559
      },
      {
        "longitude": 119.18188,
        "latitude": -30.94559
      },
      {
        "longitude": 121.47144,
        "latitude": -30.94559
      },
      {
        "longitude": 123.761,
        "latitude": -30.94559
      },
      {
        "longitude": 126.05056,
        "latitude": -30.94559
      },
      {
        "longitude": 128.34012,
        "latitude": -30.94559
      },
      {
        "longitude": 130.62968,
        "latitude": -30.94559
      },
      {
        "longitude": 132.91924,
        "latitude": -30.94559
      },
      {
        "longitude": 135.20881,
        "latitude": -30.94559
      },
      {
        "longitude": 137.49837,
        "latitude": -30.94559
      },
      {
        "longitude": 139.78793,
        "latitude": -30.94559
      },
      {
        "longitude": 142.07749,
        "latitude": -30.94559
      },
      {
        "longitude": 144.36705,
        "latitude": -30.94559
      },
      {
        "longitude": 146.65661,
        "latitude": -30.94559
      },
      {
        "longitude": 148.94617,
        "latitude": -30.94559
      },
      {
        "longitude": 151.23573,
        "latitude": -30.94559
      },
      {
        "longitude": 116.89232,
        "latitude": -32.88883
      },
      {
        "longitude": 119.18188,
        "latitude": -32.88883
      },
      {
        "longitude": 121.47144,
        "latitude": -32.88883
      },
      {
        "longitude": 123.761,
        "latitude": -32.88883
      },
      {
        "longitude": 135.20881,
        "latitude": -32.88883
      },
      {
        "longitude": 137.49837,
        "latitude": -32.88883
      },
      {
        "longitude": 139.78793,
        "latitude": -32.88883
      },
      {
        "longitude": 142.07749,
        "latitude": -32.88883
      },
      {
        "longitude": 144.36705,
        "latitude": -32.88883
      },
      {
        "longitude": 146.65661,
        "latitude": -32.88883
      },
      {
        "longitude": 148.94617,
        "latitude": -32.88883
      },
      {
        "longitude": 151.23573,
        "latitude": -32.88883
      },
      {
        "longitude": 116.89232,
        "latitude": -34.79038
      },
      {
        "longitude": 137.49837,
        "latitude": -34.79038
      },
      {
        "longitude": 139.78793,
        "latitude": -34.79038
      },
      {
        "longitude": 142.07749,
        "latitude": -34.79038
      },
      {
        "longitude": 144.36705,
        "latitude": -34.79038
      },
      {
        "longitude": 146.65661,
        "latitude": -34.79038
      },
      {
        "longitude": 148.94617,
        "latitude": -34.79038
      },
      {
        "longitude": 139.78793,
        "latitude": -36.64907
      },
      {
        "longitude": 142.07749,
        "latitude": -36.64907
      },
      {
        "longitude": 144.36705,
        "latitude": -36.64907
      },
      {
        "longitude": 146.65661,
        "latitude": -36.64907
      },
      {
        "longitude": 148.94617,
        "latitude": -36.64907
      },
      {
        "longitude": 146.65661,
        "latitude": -38.46395
      },
      {
        "longitude": 146.65661,
        "latitude": -41.95955
      }
    ],
    "editor.pixelCountrySeries.MW": [
      {
        "longitude": 34.46813,
        "latitude": -14.10881
      },
      {
        "longitude": 34.46813,
        "latitude": -16.31798
      }
    ],
    "editor.pixelCountrySeries.MG": [
      {
        "longitude": 48.20549,
        "latitude": -14.10881
      },
      {
        "longitude": 45.91593,
        "latitude": -16.31798
      },
      {
        "longitude": 48.20549,
        "latitude": -16.31798
      },
      {
        "longitude": 45.91593,
        "latitude": -18.50249
      },
      {
        "longitude": 48.20549,
        "latitude": -18.50249
      },
      {
        "longitude": 43.62637,
        "latitude": -20.65948
      },
      {
        "longitude": 45.91593,
        "latitude": -20.65948
      },
      {
        "longitude": 48.20549,
        "latitude": -20.65948
      },
      {
        "longitude": 43.62637,
        "latitude": -22.78629
      },
      {
        "longitude": 45.91593,
        "latitude": -22.78629
      },
      {
        "longitude": 43.62637,
        "latitude": -24.88044
      },
      {
        "longitude": 45.91593,
        "latitude": -24.88044
      }
    ],
    "editor.pixelCountrySeries.ZW": [
      {
        "longitude": 29.88901,
        "latitude": -16.31798
      },
      {
        "longitude": 27.59944,
        "latitude": -18.50249
      },
      {
        "longitude": 29.88901,
        "latitude": -18.50249
      },
      {
        "longitude": 32.17857,
        "latitude": -18.50249
      },
      {
        "longitude": 27.59944,
        "latitude": -20.65948
      },
      {
        "longitude": 29.88901,
        "latitude": -20.65948
      },
      {
        "longitude": 32.17857,
        "latitude": -20.65948
      }
    ],
    "editor.pixelCountrySeries.VU": [
      {
        "longitude": 167.26266,
        "latitude": -16.31798
      }
    ],
    "editor.pixelCountrySeries.FJ": [
      {
        "longitude": 178.71046,
        "latitude": -16.31798
      }
    ],
    "editor.pixelCountrySeries.NA": [
      {
        "longitude": 13.86208,
        "latitude": -18.50249
      },
      {
        "longitude": 16.15164,
        "latitude": -18.50249
      },
      {
        "longitude": 18.4412,
        "latitude": -18.50249
      },
      {
        "longitude": 20.73076,
        "latitude": -18.50249
      },
      {
        "longitude": 13.86208,
        "latitude": -20.65948
      },
      {
        "longitude": 16.15164,
        "latitude": -20.65948
      },
      {
        "longitude": 18.4412,
        "latitude": -20.65948
      },
      {
        "longitude": 20.73076,
        "latitude": -20.65948
      },
      {
        "longitude": 16.15164,
        "latitude": -22.78629
      },
      {
        "longitude": 18.4412,
        "latitude": -22.78629
      },
      {
        "longitude": 16.15164,
        "latitude": -24.88044
      },
      {
        "longitude": 18.4412,
        "latitude": -24.88044
      },
      {
        "longitude": 16.15164,
        "latitude": -26.9397
      },
      {
        "longitude": 18.4412,
        "latitude": -26.9397
      }
    ],
    "editor.pixelCountrySeries.BW": [
      {
        "longitude": 23.02032,
        "latitude": -18.50249
      },
      {
        "longitude": 25.30988,
        "latitude": -18.50249
      },
      {
        "longitude": 23.02032,
        "latitude": -20.65948
      },
      {
        "longitude": 25.30988,
        "latitude": -20.65948
      },
      {
        "longitude": 20.73076,
        "latitude": -22.78629
      },
      {
        "longitude": 23.02032,
        "latitude": -22.78629
      },
      {
        "longitude": 25.30988,
        "latitude": -22.78629
      },
      {
        "longitude": 27.59944,
        "latitude": -22.78629
      },
      {
        "longitude": 20.73076,
        "latitude": -24.88044
      },
      {
        "longitude": 23.02032,
        "latitude": -24.88044
      },
      {
        "longitude": 25.30988,
        "latitude": -24.88044
      }
    ],
    "editor.pixelCountrySeries.PY": [
      {
        "longitude": -61.69343,
        "latitude": -20.65948
      },
      {
        "longitude": -59.40387,
        "latitude": -20.65948
      },
      {
        "longitude": -61.69343,
        "latitude": -22.78629
      },
      {
        "longitude": -59.40387,
        "latitude": -22.78629
      },
      {
        "longitude": -57.11431,
        "latitude": -22.78629
      },
      {
        "longitude": -57.11431,
        "latitude": -24.88044
      },
      {
        "longitude": -54.82475,
        "latitude": -24.88044
      },
      {
        "longitude": -57.11431,
        "latitude": -26.9397
      }
    ],
    "editor.pixelCountrySeries.RE": [
      {
        "longitude": 55.07418,
        "latitude": -20.65948
      }
    ],
    "editor.pixelCountrySeries.NC": [
      {
        "longitude": 164.9731,
        "latitude": -20.65948
      }
    ],
    "editor.pixelCountrySeries.CL": [
      {
        "longitude": -70.85167,
        "latitude": -22.78629
      },
      {
        "longitude": -68.56211,
        "latitude": -22.78629
      },
      {
        "longitude": -70.85167,
        "latitude": -24.88044
      },
      {
        "longitude": -70.85167,
        "latitude": -26.9397
      },
      {
        "longitude": -70.85167,
        "latitude": -28.96201
      },
      {
        "longitude": -70.85167,
        "latitude": -30.94559
      },
      {
        "longitude": -70.85167,
        "latitude": -32.88883
      },
      {
        "longitude": -70.85167,
        "latitude": -34.79038
      },
      {
        "longitude": -73.14123,
        "latitude": -36.64907
      },
      {
        "longitude": -73.14123,
        "latitude": -38.46395
      },
      {
        "longitude": -73.14123,
        "latitude": -40.2343
      },
      {
        "longitude": -73.14123,
        "latitude": -41.95955
      },
      {
        "longitude": -73.14123,
        "latitude": -43.63932
      },
      {
        "longitude": -73.14123,
        "latitude": -45.27341
      },
      {
        "longitude": -73.14123,
        "latitude": -46.86177
      },
      {
        "longitude": -75.43079,
        "latitude": -48.40448
      },
      {
        "longitude": -73.14123,
        "latitude": -48.40448
      },
      {
        "longitude": -73.14123,
        "latitude": -51.35403
      },
      {
        "longitude": -73.14123,
        "latitude": -52.76165
      },
      {
        "longitude": -70.85167,
        "latitude": -54.1252
      }
    ],
    "editor.pixelCountrySeries.AR": [
      {
        "longitude": -66.27255,
        "latitude": -22.78629
      },
      {
        "longitude": -63.98299,
        "latitude": -22.78629
      },
      {
        "longitude": -68.56211,
        "latitude": -24.88044
      },
      {
        "longitude": -66.27255,
        "latitude": -24.88044
      },
      {
        "longitude": -63.98299,
        "latitude": -24.88044
      },
      {
        "longitude": -61.69343,
        "latitude": -24.88044
      },
      {
        "longitude": -59.40387,
        "latitude": -24.88044
      },
      {
        "longitude": -68.56211,
        "latitude": -26.9397
      },
      {
        "longitude": -66.27255,
        "latitude": -26.9397
      },
      {
        "longitude": -63.98299,
        "latitude": -26.9397
      },
      {
        "longitude": -61.69343,
        "latitude": -26.9397
      },
      {
        "longitude": -59.40387,
        "latitude": -26.9397
      },
      {
        "longitude": -54.82475,
        "latitude": -26.9397
      },
      {
        "longitude": -68.56211,
        "latitude": -28.96201
      },
      {
        "longitude": -66.27255,
        "latitude": -28.96201
      },
      {
        "longitude": -63.98299,
        "latitude": -28.96201
      },
      {
        "longitude": -61.69343,
        "latitude": -28.96201
      },
      {
        "longitude": -59.40387,
        "latitude": -28.96201
      },
      {
        "longitude": -57.11431,
        "latitude": -28.96201
      },
      {
        "longitude": -68.56211,
        "latitude": -30.94559
      },
      {
        "longitude": -66.27255,
        "latitude": -30.94559
      },
      {
        "longitude": -63.98299,
        "latitude": -30.94559
      },
      {
        "longitude": -61.69343,
        "latitude": -30.94559
      },
      {
        "longitude": -59.40387,
        "latitude": -30.94559
      },
      {
        "longitude": -68.56211,
        "latitude": -32.88883
      },
      {
        "longitude": -66.27255,
        "latitude": -32.88883
      },
      {
        "longitude": -63.98299,
        "latitude": -32.88883
      },
      {
        "longitude": -61.69343,
        "latitude": -32.88883
      },
      {
        "longitude": -59.40387,
        "latitude": -32.88883
      },
      {
        "longitude": -68.56211,
        "latitude": -34.79038
      },
      {
        "longitude": -66.27255,
        "latitude": -34.79038
      },
      {
        "longitude": -63.98299,
        "latitude": -34.79038
      },
      {
        "longitude": -61.69343,
        "latitude": -34.79038
      },
      {
        "longitude": -59.40387,
        "latitude": -34.79038
      },
      {
        "longitude": -70.85167,
        "latitude": -36.64907
      },
      {
        "longitude": -68.56211,
        "latitude": -36.64907
      },
      {
        "longitude": -66.27255,
        "latitude": -36.64907
      },
      {
        "longitude": -63.98299,
        "latitude": -36.64907
      },
      {
        "longitude": -61.69343,
        "latitude": -36.64907
      },
      {
        "longitude": -59.40387,
        "latitude": -36.64907
      },
      {
        "longitude": -57.11431,
        "latitude": -36.64907
      },
      {
        "longitude": -70.85167,
        "latitude": -38.46395
      },
      {
        "longitude": -68.56211,
        "latitude": -38.46395
      },
      {
        "longitude": -66.27255,
        "latitude": -38.46395
      },
      {
        "longitude": -63.98299,
        "latitude": -38.46395
      },
      {
        "longitude": -61.69343,
        "latitude": -38.46395
      },
      {
        "longitude": -59.40387,
        "latitude": -38.46395
      },
      {
        "longitude": -70.85167,
        "latitude": -40.2343
      },
      {
        "longitude": -68.56211,
        "latitude": -40.2343
      },
      {
        "longitude": -66.27255,
        "latitude": -40.2343
      },
      {
        "longitude": -63.98299,
        "latitude": -40.2343
      },
      {
        "longitude": -70.85167,
        "latitude": -41.95955
      },
      {
        "longitude": -68.56211,
        "latitude": -41.95955
      },
      {
        "longitude": -66.27255,
        "latitude": -41.95955
      },
      {
        "longitude": -70.85167,
        "latitude": -43.63932
      },
      {
        "longitude": -68.56211,
        "latitude": -43.63932
      },
      {
        "longitude": -66.27255,
        "latitude": -43.63932
      },
      {
        "longitude": -70.85167,
        "latitude": -45.27341
      },
      {
        "longitude": -68.56211,
        "latitude": -45.27341
      },
      {
        "longitude": -70.85167,
        "latitude": -46.86177
      },
      {
        "longitude": -68.56211,
        "latitude": -46.86177
      },
      {
        "longitude": -66.27255,
        "latitude": -46.86177
      },
      {
        "longitude": -70.85167,
        "latitude": -48.40448
      },
      {
        "longitude": -68.56211,
        "latitude": -48.40448
      },
      {
        "longitude": -73.14123,
        "latitude": -49.90179
      },
      {
        "longitude": -70.85167,
        "latitude": -49.90179
      },
      {
        "longitude": -68.56211,
        "latitude": -49.90179
      },
      {
        "longitude": -70.85167,
        "latitude": -51.35403
      },
      {
        "longitude": -68.56211,
        "latitude": -52.76165
      },
      {
        "longitude": -68.56211,
        "latitude": -54.1252
      }
    ],
    "editor.pixelCountrySeries.ZA": [
      {
        "longitude": 29.88901,
        "latitude": -22.78629
      },
      {
        "longitude": 27.59944,
        "latitude": -24.88044
      },
      {
        "longitude": 29.88901,
        "latitude": -24.88044
      },
      {
        "longitude": 20.73076,
        "latitude": -26.9397
      },
      {
        "longitude": 23.02032,
        "latitude": -26.9397
      },
      {
        "longitude": 25.30988,
        "latitude": -26.9397
      },
      {
        "longitude": 27.59944,
        "latitude": -26.9397
      },
      {
        "longitude": 29.88901,
        "latitude": -26.9397
      },
      {
        "longitude": 32.17857,
        "latitude": -26.9397
      },
      {
        "longitude": 18.4412,
        "latitude": -28.96201
      },
      {
        "longitude": 20.73076,
        "latitude": -28.96201
      },
      {
        "longitude": 23.02032,
        "latitude": -28.96201
      },
      {
        "longitude": 25.30988,
        "latitude": -28.96201
      },
      {
        "longitude": 29.88901,
        "latitude": -28.96201
      },
      {
        "longitude": 18.4412,
        "latitude": -30.94559
      },
      {
        "longitude": 20.73076,
        "latitude": -30.94559
      },
      {
        "longitude": 23.02032,
        "latitude": -30.94559
      },
      {
        "longitude": 25.30988,
        "latitude": -30.94559
      },
      {
        "longitude": 27.59944,
        "latitude": -30.94559
      },
      {
        "longitude": 29.88901,
        "latitude": -30.94559
      },
      {
        "longitude": 18.4412,
        "latitude": -32.88883
      },
      {
        "longitude": 20.73076,
        "latitude": -32.88883
      },
      {
        "longitude": 23.02032,
        "latitude": -32.88883
      },
      {
        "longitude": 25.30988,
        "latitude": -32.88883
      },
      {
        "longitude": 27.59944,
        "latitude": -32.88883
      }
    ],
    "editor.pixelCountrySeries.LS": [
      {
        "longitude": 27.59944,
        "latitude": -28.96201
      }
    ],
    "editor.pixelCountrySeries.UY": [
      {
        "longitude": -57.11431,
        "latitude": -30.94559
      },
      {
        "longitude": -57.11431,
        "latitude": -32.88883
      },
      {
        "longitude": -54.82475,
        "latitude": -32.88883
      },
      {
        "longitude": -54.82475,
        "latitude": -34.79038
      }
    ],
    "editor.pixelCountrySeries.NZ": [
      {
        "longitude": 174.13134,
        "latitude": -36.64907
      },
      {
        "longitude": 176.4209,
        "latitude": -38.46395
      },
      {
        "longitude": 176.4209,
        "latitude": -40.2343
      },
      {
        "longitude": 171.84178,
        "latitude": -41.95955
      },
      {
        "longitude": 169.55222,
        "latitude": -43.63932
      },
      {
        "longitude": 171.84178,
        "latitude": -43.63932
      },
      {
        "longitude": 167.26266,
        "latitude": -45.27341
      },
      {
        "longitude": 169.55222,
        "latitude": -45.27341
      }
    ],
    "editor.pixelCountrySeries.FK": [
      {
        "longitude": -59.40387,
        "latitude": -51.35403
      }
    ],
    "editor.pixelCountrySeries.GS": [
      {
        "longitude": -36.50826,
        "latitude": -54.1252
      }
    ]
  }
}