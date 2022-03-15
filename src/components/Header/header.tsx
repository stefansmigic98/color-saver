import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { firebase, provider } from "../../firebase/firebase";
import logout from "../../resources/logout.png";
import { RootState } from "../../store";



const Header: React.FC<{}> = () => {
  const user = useSelector((state: RootState) => state.authReducer);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e:Event ) => {
      if (
        toggleMenu &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggleMenu]);

  const signin = () => {
    const auth = getAuth();
    signInWithRedirect(auth, provider)
      .then((res) => {
        return;
      })
      .catch((er) => {});
  };

  const signout = () => {
    setToggleMenu(false);
    getAuth().signOut();
  };

  const handleProfileClick = () => {
    if (toggleMenu) {
      setToggleMenu(false);
    } else {
      setToggleMenu(true);
    }
  };

  return (
    <div className="header">
      <span className="logo-title">ColorSaver</span>
      {!!user ? (
        <div
          className="header__user-photo__container"
          onClick={handleProfileClick}
        >
          <img className="header__user-photo" src={user.photoURL} />
        </div>
      ) : (
        <button className="sing-in-button" onClick={user ? signout : signin}>
          {!!user ? "Sign out" : "Sign in"}
        </button>
      )}

      {!!user && toggleMenu && (
        <div className="header__menu" ref={menuRef}>
          <div className="header__menu__user header__menu__item ">
            <img className="header__user-photo" src={user.photoURL} />
            <span>{user.displayName}</span>
          </div>
          <div
            className="header__menu__signout header__menu__item"
            onClick={signout}
          >
            <div className="header__signout__image">
              <img src={logout} />
            </div>
            <span>Sign out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
