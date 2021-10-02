import { useDispatch } from "react-redux";
import { logoChange, themeColorChange } from "./store/action";
import { LOGO_KEYS, BG_COLORS } from "./constant/theme";
import {useSelector, shallowEqual} from 'react-redux';

function App() {

    const dispatch = useDispatch();

    const changeLogo = (logo) => {
      dispatch(logoChange(logo));
    }

    const changeBgColor = (bg) => {

      console.log(bg);

      dispatch(themeColorChange(bg));
    }

    const {theme} = useSelector(
      state => ({
        theme: state.theme,
      }),
      shallowEqual,
    );

    console.log(theme);

    return (
      <div>
        <div style={{ flex: 1, backgroundColor: `${theme.bg_color}` }}>

          <div style={{display: 'flex'}}>
            <img src={theme.logo} alt={`No Logo Found`} style={{height: 200, width: 300, margin: 'auto', marginBottom: 80}} />
          </div>

          <div style={{marginTop: 50, border: '2px solid #e5e5e5', padding: 10}}>
            <button type="button" style={{marginRight: 5, padding: 7}} onClick={() => { changeLogo(LOGO_KEYS.LOGO1); }} >Logo 1</button>
            <button type="button" style={{marginRight: 5, padding: 7}} onClick={() => { changeLogo(LOGO_KEYS.BURGER_KING); }} >BurgerKing Logo</button>
          </div>

          <div style={{marginTop: 50, border: '2px solid #e5e5e5', padding: 10}}>
            <button type="button" style={{marginRight: 5, padding: 7}} onClick={()=>{ changeBgColor(BG_COLORS.BG1); }}>Background 1</button>
            <button type="button" style={{marginRight: 5, padding: 7}} onClick={()=>{ changeBgColor(BG_COLORS.BG2); }}>Background 2</button>
          </div>
        </div>
      </div>
    );
  }

export default App;
