import Kern0 from "./Kern/LakeIsabella.jpg";
import Kern1 from "./Kern/LavaTubeTrail.jpg";
import Kern2 from "./Kern/SilverCityGhostTown.jpg";
import SanLuis0 from "./SanLuisObispo/DornPyramid.jpg";
import SanLuis1 from "./SanLuisObispo/HearstCastle.jpg";
import SanLuis2 from "./SanLuisObispo/MadonnaInn.jpg";
import SanLuis3 from "./SanLuisObispo/ChamisalVineyards.jpg";
import SanBar0 from "./SantaBarbara/MontecitoHotSprings.jpg";
import SanBar1 from "./SantaBarbara/solvang.jpeg";
import SanBar2 from "./SantaBarbara/SacredSpace.jpg";
import SanBar3 from "./SantaBarbara/SBMuseumOfArt.jpg";
import SanBar4 from "./SantaBarbara/StearnsWharf.jpg";
import SanBar5 from "./SantaBarbara/ChannelIslandsNationalPark.jpg";
import Ven0 from "./Ventura/MullinAutomotiveMuseum.jpg";
import Ven1 from "./Ventura/ParadiseFalls.jpg";
import Ven2 from "./Ventura/GardensOfTheWorld.jpg";
import LosAng0 from "./LosAngeles/VeniceCanals.jpg";
import LosAng1 from "./LosAngeles/MalibuHinduTemple.jpg";
import LosAng2 from "./LosAngeles/GreystoneMansion.jpg";
import LosAng3 from "./LosAngeles/GettyVilla.jpg";
import LosAng4 from "./LosAngeles/WitchHouse.jpg";
import LosAng5 from "./LosAngeles/SRFLShrine.jpg";
import LosAng6 from "./LosAngeles/DescansoGardens.jpg";
import SanBern0 from "./SanBernardino/BAPS.jpg";
import SanBern1 from "./SanBernardino/MozumdarTemple.jpg";
import SanBern2 from "./SanBernardino/EgyptianBuilding.jpg";
import SanBern3 from "./SanBernardino/JoshuaTree.jpg";
import SanBern4 from "./SanBernardino/DeepCreekHotSprings.jpg";
import SanBern5 from "./SanBernardino/BigBearLake.jpg";
import River0 from "./Riverside/MountRubidoux.jpg";
import River1 from "./Riverside/CabotPuebloMuseum.jpg";
import River2 from "./Riverside/MissionInnMuseum.jpg";
import River3 from "./Riverside/LakeFulmor.jpg";
import Orange0 from "./Orange/PirateTower.jpg";
import Orange1 from "./Orange/AnaheimPackingDistrict.jpg";
import Orange2 from "./Orange/NoguchiGardens.jpg";
import Orange3 from "./Orange/Disneyland.jpg";
import Orange4 from "./Orange/NewportBeach.jpg";
import Orange5 from "./Orange/MarconiAutomotiveMuseum.jpeg";
import Orange6 from "./Orange/KnottsBerryFarm.jpg";
import Imperial0 from "./Imperial/BombayBeachRuins.jpg";
import Imperial1 from "./Imperial/SalvationMountain.jpg";
import Imperial2 from "./Imperial/SaltonSea.jpg";
import SanDiego0 from "./SanDiego/BalboaPark.jpg";
import SanDiego1 from "./SanDiego/HarpersTopiaryGarden.jpg";
import SanDiego2 from "./SanDiego/HeritagePark.jpg";
import SanDiego3 from "./SanDiego/ScrippsCoastalMeander.jpg";
import SanDiego4 from "./SanDiego/MidwayMuseum.jpg";
import SanDiego5 from "./SanDiego/SanDiegoZoo.jpg";
import SanDiego6 from "./SanDiego/Legoland.jpg";
import SanDiego7 from "./SanDiego/OldTown.jpg";
import SanDiego8 from "./SanDiego/LaJollaCove.jpg";
import SanDiego9 from "./SanDiego/LibertyStationPark.jpg";
import SanDiego10 from "./SanDiego/SeaportVillage.jpg";

interface ImageDirType {
  [key: string]: any[];
}

export const ImageDir: ImageDirType = {
  Kern: [Kern0, Kern1, Kern2],
  SanLuis: [SanLuis0, SanLuis1, SanLuis2, SanLuis3],
  SanBar: [SanBar0, SanBar1, SanBar2, SanBar3, SanBar4, SanBar5],
  Ven: [Ven0, Ven1, Ven2],
  LosAng: [LosAng0, LosAng1, LosAng2, LosAng3, LosAng4, LosAng5, LosAng6],
  SanBern: [SanBern0, SanBern1, SanBern2, SanBern3, SanBern4, SanBern5],
  River: [River0, River1, River2, River3],
  Orange: [Orange0, Orange1, Orange2, Orange3, Orange4, Orange5, Orange6],
  Imperial: [Imperial0, Imperial1, Imperial2],
  SanDiego: [
    SanDiego0,
    SanDiego1,
    SanDiego2,
    SanDiego3,
    SanDiego4,
    SanDiego5,
    SanDiego6,
    SanDiego7,
    SanDiego8,
    SanDiego9,
    SanDiego10,
  ],
};
