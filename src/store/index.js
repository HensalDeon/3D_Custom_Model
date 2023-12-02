import { proxy } from "valtio";
const state = proxy({
    intro: true,//check we are in home page or not;
    color : '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;