import { ImageSourcePropType } from "react-native";

export interface Content {
  image: ImageSourcePropType;
  info: string;
  text: string;
}

export const buttonContent: Content[] = [
  {
    image: require("../assets/camomile-field.jpg"),
    info: '<a href="https://www.freepik.es/foto-gratis/campo-manzanilla_1438535.htm#fromView=search&page=1&position=1&uuid=ba69fbd9-8c02-49ec-a18b-3fb39ebeb882&new_detail=true">Imagen de kotkoa en Freepik</a>',
    text: "Spring",
  },
  {
    image: require("../assets/coconut-palm-tree.jpg"),
    info: '<a href="https://www.freepik.es/foto-gratis/palmera-coco_1114633.htm#fromView=search&page=2&position=37&uuid=93fc0bd9-7a8f-4ae8-9374-6cefbde57f07&new_detail=true">Imagen de mrsiraphol en Freepik</a>',
    text: "Summer",
  },
  {
    image: require("../assets/highland-vegetation-modest-summer-unusually-beautiful-colors-blooms-autumn-before-cold-weather-blueberries-bright-red-coniferous-forest-green-orange-buk-mountains-sinie-fantastic-charm.jpg"),
    info: '<a href="https://www.freepik.es/foto-gratis/vegetacion-tierras-altas-verano-modesto-colores-inusualmente-hermosos-florece-otono-antes-clima-frio-arandanos-rojo-brillante-verde-bosque-coniferas-naranja-buk-montanas-sinie-encanto-fantastico_10141235.htm#fromView=search&page=1&position=8&uuid=f26df025-8a6f-4308-a832-621bcaf25d87&new_detail=true">Imagen de standret en Freepik</a>',
    text: "Autumn",
  },
  {
    image: require("../assets/road-mountain-ski-resort-surrounded-by-fir-trees.jpg"),
    info: '<a href="https://www.freepik.es/foto-gratis/carretera-estacion-esqui-montana-rodeada-abetos_17290094.htm#fromView=search&page=2&position=29&uuid=218cc54f-91fa-4754-a63a-68f8e69eebe7&new_detail=true">Imagen de wirestock en Freepik</a>',
    text: "Winter",
  },
];

export type MonthObj = { month: Months; number: string; season: Seasons };

export const monthContent = [
  { month: "January", number: "1", season: "winter" },
  { month: "February", number: "2", season: "winter" },
  { month: "March", number: "3", season: "spring" },
  { month: "April", number: "4", season: "spring" },
  { month: "May", number: "5", season: "spring" },
  { month: "June", number: "6", season: "summer" },
  { month: "July", number: "7", season: "summer" },
  { month: "August", number: "8", season: "summer" },
  { month: "September", number: "9", season: "autumn" },
  { month: "October", number: "10", season: "autumn" },
  { month: "November", number: "11", season: "autumn" },
  { month: "December", number: "12", season: "winter" },
];

export type Seasons = "spring" | "summer" | "autumn" | "winter";
export type Months =
  | "january"
  | "february"
  | "march"
  | "april"
  | "may"
  | "june"
  | "july"
  | "august"
  | "september"
  | "october"
  | "november"
  | "december";

export const seasonsAndMonths: Record<Seasons, Months[]> = {
  spring: ["march", "april", "may"],
  summer: ["june", "july", "august"],
  autumn: ["september", "october", "november"],
  winter: ["december", "january", "february"],
};
