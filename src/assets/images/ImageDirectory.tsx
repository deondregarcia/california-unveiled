import Kern0 from "./Kern/LakeIsabella.jpg";
import Kern1 from "./Kern/LavaTubeTrail.jpg";
import Kern2 from "./Kern/SilverCityGhostTown.jpg";
import SanLuis0 from "./SanLuisObispo/DornPyramid.jpg";
import SanLuis1 from "./SanLuisObispo/HearstCastle.jpg";
import SanLuis2 from "./SanLuisObispo/MadonnaInn.jpg";
import SanBar0 from "./SantaBarbara/MontecitoHotSprings.jpg";
import SanBar1 from "./SantaBarbara/solvang.jpeg";
import SanBar2 from "./SantaBarbara/SacredSpace.jpg";
import Ven0 from "./Ventura/MullinAutomotiveMuseum.jpg";
import Ven1 from "./Ventura/ParadiseFalls.jpg";
import Ven2 from "./Ventura/GardensOfTheWorld.jpg";
import LosAng0 from "./LosAngeles/VeniceCanals.jpg";
import LosAng1 from "./LosAngeles/MalibuHinduTemple.jpg";
import LosAng2 from "./LosAngeles/GreystoneMansion.jpg";
import SanBern0 from "./SanBernardino/BAPS.jpg";
import SanBern1 from "./SanBernardino/MozumdarTemple.jpg";
import SanBern2 from "./SanBernardino/EgyptianBuilding.jpg";
import River0 from "./Riverside/MountRubidoux.jpg";
import River1 from "./Riverside/CabotPuebloMuseum.jpg";
import River2 from "./Riverside/LakeFulmor.jpg";
import Orange0 from "./Orange/PirateTower.jpg";
import Orange1 from "./Orange/AnaheimPackingDistrict.jpg";
import Orange2 from "./Orange/NoguchiGardens.jpg";
import Imperial0 from "./Imperial/BombayBeachRuins.jpg";
import Imperial1 from "./Imperial/SalvationMountain.jpg";
import Imperial2 from "./Imperial/SaltonSea.jpg";
import SanDiego0 from "./SanDiego/HeritagePark.jpg";
import SanDiego1 from "./SanDiego/HarpersTopiaryGarden.jpg";
import SanDiego2 from "./SanDiego/ScrippsCoastalMeander.jpg";

interface ImageDirType {
  Kern: any[];
  SanLuis: any[];
  SanBar: any[];
  Ven: any[];
  LosAng: any[];
  SanBern: any[];
  River: any[];
  Orange: any[];
  Imperial: any[];
  SanDiego: any[];
}

export const ImageDir: ImageDirType = {
  Kern: [Kern0, Kern1, Kern2],
  SanLuis: [SanLuis0, SanLuis1, SanLuis2],
  SanBar: [SanBar0, SanBar1, SanBar2],
  Ven: [Ven0, Ven1, Ven2],
  LosAng: [LosAng0, LosAng1, LosAng2],
  SanBern: [SanBern0, SanBern1, SanBern2],
  River: [River0, River1, River2],
  Orange: [Orange0, Orange1, Orange2],
  Imperial: [Imperial0, Imperial1, Imperial2],
  SanDiego: [SanDiego0, SanDiego1, SanDiego2],
};
