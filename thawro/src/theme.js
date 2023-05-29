function hexToRgba(hex, alpha) {
    hex = hex.replace('#', '');

    if (!/^[0-9A-F]{6}$/i.test(hex)) {
        throw new Error('Invalid hexadecimal color code.');
    }

    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}



const lightTheme = {
    colors: {
        textPrimary: "black",
        textSecondary: "#5a6ceb",
        textTertiary: "#008E95",
        textNav: "#d6443e",

        // textNav: "#ef6029",


        backgroundPrimary: "#fff",
        backgroundSecondary: "#ddd",
        popupOverlayBackground: 'rgba(128, 128, 128, 0.8)',

        heroLine: `linear-gradient(to bottom, ${hexToRgba('#008E95', 1)}, ${hexToRgba('#008E95', 0)})`,


    },
};

const darkTheme = {
    colors: {
        textPrimary: "#f3f3f3",
        textSecondary: "#5a6ceb",
        textTertiary: "#00c9d4",
        textNav: "#d6443e",

        // textNav: "#FB9626",



        backgroundPrimary: "#222",
        backgroundSecondary: "#000",
        popupOverlayBackground: 'rgba(128, 128, 128, 0.8)',

        heroLine: `linear-gradient(to bottom, ${hexToRgba('#00c9d4', 1)}, ${hexToRgba('#00c9d4', 0)})`,

    },
};


function getThemeColor(isDark, name) {
    var theme = isDark ? darkTheme : lightTheme
    return theme.colors[name]
}


export { lightTheme, darkTheme, getThemeColor }