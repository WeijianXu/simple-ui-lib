import ScBoxText from './components/screen/box/BoxText';
import ScBg from './components/screen/Bg';

const screenComponents = [ScBoxText, ScBg];

export default function (Vue) {
  screenComponents.forEach((component) => {
    console.log(component);

    Vue.component(`sc-${component.name}`, component);
  });
}
