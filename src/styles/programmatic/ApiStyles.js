import {
    TypedObject, StyleDefaults, Constants
} from 'flexicious-react-datagrid'

/**
 * An object that represents information about a cell.
 * @constructor
 * @class BaseStyles
 * @namespace flexiciousNmsp
 * 
 */
export default class ApiStyles extends TypedObject {
    getClassNames() {
        return ["StyleDefaults", "TypedObject"];
    }
    static getThemeStyles(themeName) {
        for (var i = 0; i < ApiStyles.themes.length; i++) {
            var theme = ApiStyles.themes[i];
            if (theme.id === themeName) {
                return theme.styles;
            }
        }
        return {};
    }
    static applyTheme(themeName) {
        for (var i = 0; i < ApiStyles.themes.length; i++) {
            var theme = ApiStyles.themes[i];
            if (theme.id === themeName) {
                if (!StyleDefaults.originalDefaults) {
                    StyleDefaults.originalDefaults = JSON.parse(JSON.stringify(StyleDefaults.defaults));
                }
                StyleDefaults.defaults = JSON.parse(JSON.stringify(StyleDefaults.originalDefaults));
                for (var prop in theme) {
                    StyleDefaults.defaults[prop] = theme[prop];
                }
            }
        }
    }
}

StyleDefaults.defaults = {
    /**
     * The root of all images. The Pager Control uses this, the grid expand collapse icons (see below) uses this,
     * So does the Search Clear icon as well as the sort icon.
     */
    imagesRoot: Constants.IMAGE_PATH,
    /**
     *  The color of the line to draw when the user is moving or resizing the column
     */
    /**
     *  The color of the line to draw when the user is moving or resizing the column
     */
    columnMoveResizeSeparatorColor: 0x000000,
    columnMoveAlpha: 0.8,
    backgroundColor: [0xFFFFFF, 0xFFFFFF],
    alternatingItemColors: [0xEFF3FA, 0xFFFFFF],
    alternatingTextColors: [0x000000, 0x000000],

    dragAlpha: 0.8,
    dragRowBorderStyle: "solid",
    editItemColors: [0xF5F9FC, 0xC5CED6],
    editTextColor: 0x000000,

    errorBackgroundColor: 0xFCDCDF,
    errorBorderColor: 0xF23E2C,

    verticalGridLineColor: 0x696969,
    verticalGridLines: true,
    verticalGridLineThickness: 1,


    horizontalGridLineColor: 0x696969,
    horizontalGridLines: true,
    horizontalGridLineThickness: 1,

    textDisabledColor: 0xAFAFAF,


    columnGroupVerticalGridLineColor: 0x666666,
    columnGroupVerticalGridLines: true,
    columnGroupVerticalGridLineThickness: 1,

    columnGroupHorizontalGridLineColor: 0x666666,
    columnGroupHorizontalGridLines: true,
    columnGroupHorizontalGridLineThickness: 1,
    columnGroupDrawTopBorder: false,



    headerVerticalGridLineColor: 0x666666,
    headerVerticalGridLines: true,
    headerVerticalGridLineThickness: 1,

    headerHorizontalGridLineColor: 0x666666,
    headerHorizontalGridLines: true,
    headerHorizontalGridLineThickness: 1,
    headerDrawTopBorder: false,
    headerSortSeparatorRight: 24,

    filterVerticalGridLineColor: 0x666666,
    filterVerticalGridLines: true,
    filterVerticalGridLineThickness: 1,

    filterHorizontalGridLineColor: 0x666666,
    filterHorizontalGridLines: true,
    filterHorizontalGridLineThickness: 1,
    filterDrawTopBorder: false,

    footerVerticalGridLineColor: 0x666666,
    footerVerticalGridLines: true,
    footerVerticalGridLineThickness: 1,

    footerHorizontalGridLineColor: 0x666666,
    footerHorizontalGridLines: false,
    footerHorizontalGridLineThickness: 1,
    footerDrawTopBorder: false,

    pagerVerticalGridLineColor: 0x666666,
    pagerVerticalGridLines: true,
    pagerVerticalGridLineThickness: 1,

    pagerHorizontalGridLineColor: 0x666666,
    pagerHorizontalGridLines: true,
    pagerHorizontalGridLineThickness: 1,


    rendererVerticalGridLineColor: 0x666666,
    rendererVerticalGridLines: true,
    rendererVerticalGridLineThickness: 1,

    rendererHorizontalGridLineColor: 0x666666,
    rendererHorizontalGridLines: true,
    rendererHorizontalGridLineThickness: 1,
    rendererDrawTopBorder: false,

    rollOverColor: 0xCEDBEF,

    headerRollOverColors: [0xCEDBEF, 0xCEDBEF],
    headerColors: [0xE6E6E6, 0xFFFFFF],

    columnGroupRollOverColors: [0xCEDBEF, 0xCEDBEF],
    columnGroupColors: [0xE6E6E6, 0xFFFFFF],

    footerRollOverColors: [0xCEDBEF, 0xCEDBEF],
    footerColors: [0xBFBFBF, 0xBFBFBF],

    fixedColumnFillColors: [0xBFBFBF, 0xBFBFBF],

    filterRollOverColors: [0xCEDBEF, 0xCEDBEF],
    filterColors: [0xCFCFCF, 0xCFCFCF],

    activeCellColor: 0xB7DBFF,

    pagerRollOverColors: [0xE6E6E6, 0xFFFFFF],
    pagerColors: [0xE6E6E6, 0xFFFFFF],

    rendererRollOverColors: [0xFFFFFF, 0xFFFFFF],
    rendererColors: [0xFFFFFF, 0xFFFFFF],

    lockedSeperatorColor: 0x6f6f6f,
    lockedSeperatorThickness: 2,

    dropIndicatorColor: 0x000000,
    dropIndicatorThickness: 2,

    textSelectedColor: 0x000000,
    textRollOverColor: 0x000000,
    selectionDisabledColor: null,
    selectionDisabledTextColor: 0xDDDDDD,

    disclosureClosedIcon: "/expand.png",
    disclosureOpenIcon: "/collapse.png",
    sortArrowSkin: "/sortArrow.png",

    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,

    columnGroupPaddingBottom: 2,
    columnGroupPaddingLeft: 2,
    columnGroupPaddingRight: 2,
    columnGroupPaddingTop: 2,

    headerPaddingBottom: 2,
    headerPaddingLeft: 2,
    headerPaddingRight: 2,
    headerPaddingTop: 2,

    filterPaddingBottom: 2,
    filterPaddingLeft: 2,
    filterPaddingRight: 2,
    filterPaddingTop: 2,

    footerPaddingBottom: 2,
    footerPaddingLeft: 2,
    footerPaddingRight: 2,
    footerPaddingTop: 2,

    pagerPaddingBottom: 0,
    pagerPaddingLeft: 0,
    pagerPaddingRight: 0,
    pagerPaddingTop: 0,
    pagerRowHeight: 28,
    rendererPaddingBottom: 2,
    rendererPaddingLeft: 2,
    rendererPaddingRight: 2,
    rendererPaddingTop: 2,

    borderSides: "left,right,top,bottom",
    borderThickness: 1,
    borderColor: 0x666666,

    headerStyleName: "dataGridStyles",
    footerStyleName: "dataGridStyles",
    pagerStyleName: "",
    columnGroupStyleName: "columnGroupStyle",
    columnGroupClosedIcon: "/expand.png",
    columnGroupOpenIcon: "/collapse.png",

    multiColumnSortNumberStyleName: "multiColumnSortNumberStyle",
    multiColumnSortNumberHeight: 15,
    multiColumnSortNumberWidth: 15,
    selectionColor: 0x7FCEFF,
    selectionDuration: 250,
    headerSortSeparatorColor: 0xCCCCCC,

    checkIconClass: '/checkGreen.png',
    crossIconClass: '/notAvailable.png'
}
/**
 * The list of themes. This is separated from the main codebase so customers can easily look at
 * various style options.
 * @type {Array}
 */
ApiStyles.themes = [
    {
        id: 'default', name: 'Default',
        styles: StyleDefaults.defaults
    },
    {
        id: 'officeblue', name: 'Office Blue',
        styles: {

            alternatingItemColors: [0xE7EFFF, 0xFFFFFF],
            alternatingTextColors: [0x636163, 0x636163],
            rollOverColor: 0xCEDBEF,
            headerRollOverColors: [0xBDCFEF, 0xD6E7F7],
            headerColors: [0xBDCFEF, 0xD6E7F7],
            columnGroupRollOverColors: [0xBDCFEF, 0xD6E7F7],
            columnGroupColors: [0xBDCFEF, 0xD6E7F7],
            filterRollOverColors: [0xBDCFEF, 0xD6E7F7],
            filterColors: [0xBDCFEF, 0xD6E7F7],
            fixedColumnFillColors: [0xEFEFEF, 0xEFEFEF],
            activeCellColor: 0xB7DBFF,
            pagerRollOverColors: [0xBDCFEF, 0xD6E7F7],
            pagerColors: [0xBDCFEF, 0xD6E7F7],
            footerRollOverColors: [0xBDCFEF, 0xD6E7F7],
            footerColors: [0xBDCFEF, 0xD6E7F7],
            rendererRollOverColors: [0xFFFFFF, 0xFFFFFF],
            rendererColors: [0xFFFFFF, 0xFFFFFF],
            textSelectedColor: 0x000000,
            textRollOverColor: 0x000000,
            borderColor: 0x666666,
            selectionColor: [0xFFEFB5, 0xFFDF8C]
        }
    },
    {
        id: 'officegray', name: 'Office Gray',
        styles: {
            alternatingItemColors: [0xF7F7F7, 0xE7E7E7],
            alternatingTextColors: [0x636163, 0x636163],
            rollOverColor: 0xCEDBEF,
            headerRollOverColors: [0xF7F7EF, 0xE7E7E7],
            headerColors: [0xF7F7EF, 0xE7E7E7],
            columnGroupRollOverColors: [0xF7F7EF, 0xE7E7E7],
            columnGroupColors: [0xF7F7EF, 0xE7E7E7],
            pagerRollOverColors: [0xF7F7EF, 0xE7E7E7],
            pagerColors: [0xF7F7EF, 0xE7E7E7],
            footerRollOverColors: [0xF7F7EF, 0xE7E7E7],
            footerColors: [0xF7F7EF, 0xE7E7E7],
            filterRollOverColors: [0xF7F7EF, 0xE7E7E7],
            filterColors: [0xF7F7EF, 0xE7E7E7],
            fixedColumnFillColors: [0xEFEFEF, 0xEFEFEF],
            activeCellColor: 0xB7DBFF,
            rendererRollOverColors: [0xFFFFFF, 0xFFFFFF],
            rendererColors: [0xFFFFFF, 0xFFFFFF],
            textSelectedColor: 0x000000,
            textRollOverColor: 0x000000,
            borderColor: 0x666666,
            selectionColor: [0xFFEFB5, 0xFFDF8C]
        }
    },
    {
        id: 'jetblack', name: 'Office Black',
        styles: {
            alternatingItemColors: [0x3f3f3f, 0x111111],
            alternatingTextColors: [0xFFFFFF, 0xFFFFFF],
            rollOverColor: 0x848684,
            headerRollOverColors: [0x3f3f3f, 0x111111],
            headerColors: [0x3f3f3f, 0x111111],
            columnGroupRollOverColors: [0x3f3f3f, 0x111111],
            columnGroupColors: [0x3f3f3f, 0x111111],
            pagerRollOverColors: [0x3f3f3f, 0x111111],
            pagerColors: [0x3f3f3f, 0x111111],
            footerRollOverColors: [0x3f3f3f, 0x111111],
            footerColors: [0x3f3f3f, 0x111111],
            filterRollOverColors: [0x3f3f3f, 0x111111],
            filterColors: [0x3f3f3f, 0x111111],
            fixedColumnFillColors: [0xEFEFEF, 0xEFEFEF],
            activeCellColor: 0x6f6f6f,
            textSelectedColor: 0x000000,
            textRollOverColor: 0x000000,
            borderColor: 0x666666,
            selectionColor: [0xFFEFB5, 0xFFDF8C],
            headerStyleName: "whiteText",
            footerStyleName: "whiteText",
            columnGroupStyleName: "whiteText",
            pagerStyleName: "whiteText"
        }
    },
    {
        id: 'androidGray', name: 'Android Gray',
        styles: {
            /**
             * Usually the toolbar root is the same as the images root, but for some custom themes, we have their own icons.
             */
            toolbarImagesRoot: Constants.IMAGE_PATH + "/themeIcons/androidGray/32",
            pagerRowHeight: 54,
            alternatingItemColors: [0xFFFFFF, 0xFFFCF5],
            alternatingTextColors: [0x000000, 0x000000],
            rollOverColor: 0xCEDBEF,
            headerRollOverColors: [0x1C1E1D, 0x3A3B3D],
            headerColors: [0x1C1E1D, 0x3A3B3D],
            headerStyleName: "whiteText",
            columnGroupRollOverColors: [0x1C1E1D, 0x3A3B3D],
            columnGroupColors: [0x1C1E1D, 0x3A3B3D],
            columnGroupStyleName: "whiteText",
            pagerDrawTopBorder: true,
            pagerRollOverColors: [0x1C1E1D, 0x3A3B3D],
            pagerColors: [0x1C1E1D, 0x3A3B3D],
            pagerStyleName: "whiteText largeIcons",
            footerRollOverColors: [0x1C1E1D, 0x3A3B3D],
            footerColors: [0x1C1E1D, 0x3A3B3D],
            footerDrawTopBorder: true,
            footerVerticalGridLines: true,
            footerHorizontalGridLines: true,
            footerHorizontalGridLineColor: 0xFABB39,
            footerHorizontalGridLineThickness: 2,
            footerRowHeight: 30,
            filterRowHeight: 30,
            filterPaddingBottom: 4,
            filterRollOverColors: [0x1C1E1D, 0x3A3B3D],
            filterColors: [0x1C1E1D, 0x3A3B3D],
            filterHorizontalGridLineColor: 0xFABB39,
            filterHorizontalGridLines: true,
            filterHorizontalGridLineThickness: 2,
            filterDrawTopBorder: true,
            fixedColumnFillColors: [0xEFEFEF, 0xEFEFEF],
            activeCellColor: 0xB7DBFF,
            rendererRollOverColors: [0xFFFFFF, 0xFFFFFF],
            rendererColors: [0xFFFFFF, 0xFFFFFF],
            textSelectedColor: 0x000000,
            textRollOverColor: 0x000000,
            borderColor: 0x666666,
            footerStyleName: "whiteText",
            pagerHorizontalGridLineColor: 0xFABB39,
            pagerHorizontalGridLines: true,
            pagerHorizontalGridLineThickness: 4,
            pagerVerticalGridLines: true,
            pagerVerticalGridLineThickness: 4,
            pagerVerticalGridLineColor: 0xFABB39,
            selectionColor: [0xFABB39, 0xCD4602]
        }
    },
    {
        id: 'appleGray', name: 'Apple Gray',
        styles: {
            /**
             * Usually the toolbar root is the same as the images root, but for some custom themes, we have their own icons.
             */
            toolbarImagesRoot: Constants.IMAGE_PATH + "/themeIcons/sharedicons/appleGrayIvoryIcons/32",
            pagerRowHeight: 50,
            pagerStyleName: "whiteText largeIcons",
            alternatingItemColors: [0xF9F9F9, 0xF3F3F3],
            alternatingTextColors: [0x111111, 0x111111],
            rollOverColor: 0xCEDBEF,
            headerRollOverColors: [0xF7F7EF, 0xE7E7E7],
            headerColors: [0xF2F2F4, 0x9898A4],
            columnGroupRollOverColors: [0xF7F7EF, 0xE7E7E7],
            columnGroupColors: [0xF2F2F4, 0x9898A4],
            pagerRollOverColors: [0xF7F7EF, 0xE7E7E7],
            pagerColors: [0x908F9D, 0x12122C],
            footerRollOverColors: [0xF7F7EF, 0xE7E7E7],
            footerColors: [0x908F9D, 0x12122C],
            footerStyleName: "whiteText",
            filterRollOverColors: [0xF7F7EF, 0xE7E7E7],
            filterColors: [0x908F9D, 0x12122C],
            filterStyleName: "whiteText",
            fixedColumnFillColors: [0xEFEFEF, 0xEFEFEF],
            activeCellColor: 0xB7DBFF,
            rendererRollOverColors: [0xFFFFFF, 0xFFFFFF],
            rendererColors: [0xFFFFFF, 0xFFFFFF],
            textSelectedColor: 0x000000,
            textRollOverColor: 0x000000,
            borderColor: 0x666666,
            selectionColor: [0xC7C8CD, 0xC7C8CD]
        }
    },
    {
        id: 'appleIvory', name: 'Apple Ivory',
        styles: {
            /**
             * Usually the toolbar root is the same as the images root, but for some custom themes, we have their own icons.
             */
            toolbarImagesRoot: Constants.IMAGE_PATH + "/themeIcons/sharedicons/appleGrayIvoryIcons/32",
            pagerRowHeight: 50,
            pagerStyleName: "largeIcons",
            alternatingItemColors: [0xEFF0F2, 0xF1F1F1],
            alternatingTextColors: [0x020202, 0x020202],
            rollOverColor: 0x9E9E9E,
            headerRollOverColors: [0xF7F7EF, 0xE7E7E7],
            headerColors: [0xF7F7EF, 0xE7E7E7],
            columnGroupRollOverColors: [0xFEFEFE, 0xECEDEF],
            columnGroupColors: [0xFEFEFE, 0xECEDEF],
            pagerRollOverColors: [0xFFFFFF, 0xFFFFFF],
            pagerColors: [0xECEDEF, 0xF1F1F1],
            footerRollOverColors: [0xF7F7EF, 0xE7E7E7],
            footerColors: [0xFEFEFE, 0xECEDEF],
            selectionColor: [0xB5B5B5, 0xB5B5B5],
            filterRollOverColors: [0xF7F7EF, 0xE7E7E7],
            filterColors: [0xFEFEFE, 0xECEDEF],
            fixedColumnFillColors: [0xEFEFEF, 0xEFEFEF],
            activeCellColor: 0x9E9E9E,
            rendererRollOverColors: [0xFFFFFF, 0xFFFFFF],
            rendererColors: [0xFFFFFF, 0xFFFFFF],
            textSelectedColor: 0x000000,
            textRollOverColor: 0x000000,
            borderColor: 0x666666
        }
    },
    {
        id: 'greenColorful', name: 'Green Colorful',
        styles: {
            /**
             * Usually the toolbar root is the same as the images root, but for some custom themes, we have their own icons.
             */
            toolbarImagesRoot: Constants.IMAGE_PATH + "/themeIcons/sharedicons/pinkGreenColorfulIcons/32",
            pagerRowHeight: 50,
            pagerStyleName: "largeIcons",
            alternatingItemColors: [0xB7F5F4, 0xDAFAF9],
            alternatingTextColors: [0x111111, 0x111111],
            rollOverColor: [0xF7F7EF, 0xE7E7E7],
            headerRollOverColors: [0xEBE27D, 0xDFCD4D],
            headerColors: [0xEBE27D, 0xDFCD4D],
            columnGroupRollOverColors: [0xEBE27D, 0xDFCD4D],
            columnGroupColors: [0xEBE27D, 0xDFCD4D],
            pagerRollOverColors: [0xF7F7EF, 0xE7E7E7],
            pagerColors: [0x75B837, 0x5F9929],
            footerRollOverColors: [0xF7F7EF, 0xE7E7E7],
            footerColors: [0x75B837, 0x5F9929],
            filterRollOverColors: [0xF7F7EF, 0xE7E7E7],
            filterColors: [0xF7F4C1, 0xF9F3BF],
            fixedColumnFillColors: [0xEFEFEF, 0xEFEFEF],
            activeCellColor: 0xB7DBFF,
            rendererRollOverColors: [0xFFFFFF, 0xFFFFFF],
            rendererColors: [0xFFFFFF, 0xFFFFFF],
            textSelectedColor: 0x000000,
            textRollOverColor: 0x000000,
            borderColor: 0x666666
        }
    },
    {
        id: 'pinkColorful', name: 'Pink Colorful',
        styles: {
            /**
             * Usually the toolbar root is the same as the images root, but for some custom themes, we have their own icons.
             */
            toolbarImagesRoot: Constants.IMAGE_PATH + "/themeIcons/sharedicons/pinkGreenColorfulIcons/32",
            pagerRowHeight: 50,
            pagerStyleName: "whiteText largeIcons",
            headerStyleName: "whiteText",
            columnGroupStyleName: "whiteText",
            footerStyleName: "whiteText",
            alternatingItemColors: [0xE7BEFA, 0xF3DEFD],
            alternatingTextColors: [0x111111, 0x111111],
            rollOverColor: 0xCEDBEF,
            headerRollOverColors: [0x9F73E6, 0xE7E7E7],
            headerColors: [0x9F73E6, 0x402A58],
            columnGroupRollOverColors: [0x9B6FE0, 0xE7E7E7],
            columnGroupColors: [0x986CDB, 0x402A58],
            pagerRollOverColors: [0x268CD4, 0x092940],
            pagerColors: [0x268CD4, 0x092940],
            footerRollOverColors: [0x268CD4, 0xE7E7E7],
            footerColors: [0x268CD4, 0x092940],
            filterRollOverColors: [0xF7F7EF, 0xE7E7E7],
            filterColors: [0xF7F4C1, 0xF7F6C0],
            fixedColumnFillColors: [0xEFEFEF, 0xEFEFEF],
            activeCellColor: 0xB7DBFF,
            rendererRollOverColors: [0xFFFFFF, 0xFFFFFF],
            rendererColors: [0xFFFFFF, 0xFFFFFF],
            textSelectedColor: 0x000000,
            textRollOverColor: 0x000000,
            borderColor: 0x666666
        }
    },
    {
        id: 'iTunes', name: 'ITunes',
        styles: {
            /**
             * Usually the toolbar root is the same as the images root, but for some custom themes, we have their own icons.
             */
            toolbarImagesRoot: Constants.IMAGE_PATH + "/themeIcons/itunes/32",
            pagerRowHeight: 50,
            pagerStyleName: "whiteText largeIcons",
            headerStyleName: "whiteText",
            columnGroupStyleName: "whiteText",
            footerStyleName: "whiteText",
            alternatingItemColors: [0xD8DAD9, 0xD8DAD9],
            alternatingTextColors: [0x111111, 0x111111],
            selectionColor: [0xEAF1F9, 0xEFF6FF],
            rollOverColor: 0xEDF4FE,
            headerRollOverColors: [0x616169, 0x9598A1],
            headerColors: [0x616169, 0x9598A1],
            columnGroupRollOverColors: [0x616169, 0x9598A1],
            columnGroupColors: [0x616169, 0x9598A1],
            pagerRollOverColors: [0x616169, 0x9598A1],
            pagerColors: [0x616169, 0x9598A1],
            footerRollOverColors: [0x616169, 0x9598A1],
            footerColors: [0x616169, 0x9598A1],
            filterRollOverColors: [0x616169, 0x9598A1],
            filterColors: [0x33342F, 0x363435],
            fixedColumnFillColors: [0xEFEFEF, 0xEFEFEF],
            activeCellColor: 0xB7DBFF,
            rendererRollOverColors: [0xFFFFFF, 0xFFFFFF],
            rendererColors: [0xFFFFFF, 0xFFFFFF],
            textSelectedColor: 0x000000,
            textRollOverColor: 0x000000,
            borderColor: 0x666666
        }
    }
];

ApiStyles.defaults = StyleDefaults.defaults;
flexiciousNmsp.ApiStyles = ApiStyles;