import Airplane from '../svg/airplane.svg'
import Facebook from '../svg/facebook.svg'
import Twitter from '../svg/twitter.svg'
import Phone from '../svg/telephone-fill.svg'
import Whatsapp from '../svg/whatsapp.svg'



let svgs:any = [];


svgs["Airplane"] = Airplane;
svgs["Facebook"] = Facebook;
svgs["Twitter"] = Twitter;
svgs["Phone"] = Phone;
svgs["Whatsapp"] = Whatsapp;



export default function svgList() {
  return svgs
}
