import Airplane from '../svg/airplane.svg'
import Facebook from '../svg/facebook.svg'
import Twitter from '../svg/twitter.svg'
import Phone from '../svg/phone.svg'
import Whatsapp from '../svg/whatsapp.svg'
import Youtube from '../svg/youtube.svg'
import Instagram from '../svg/instagram.svg'


let svgs:any = [];


svgs["Airplane"] = Airplane;
svgs["Facebook"] = Facebook;
svgs["Twitter"] = Twitter;
svgs["Phone"] = Phone;
svgs["Whatsapp"] = Whatsapp;
svgs["Youtube"] = Youtube;
svgs["Instagram"] = Instagram;


export default function svgList() {
  return svgs
}
