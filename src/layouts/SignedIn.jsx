import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Menu, Icon } from "semantic-ui-react";
import { userLogout } from "../store/actions/authActions";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PersonelUpdate from "../pages/popups/employerUpdate/PersonelUpdate";

export default function SignedIn() {
  const { authItem } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = (user) => {
    dispatch(userLogout(user));
    localStorage.removeItem("user");
    navigate.push("/");
  };

  return (
    <div>
      <Menu.Item>
        <Dropdown pointing="top right" text={authItem[0].user}>
          <Dropdown.Menu>
            {authItem[0].user.userType === 1 && (
              <Dropdown.Item as={Link} to={`/getbyid/${authItem[0].user.id}`}>
                <Icon name="cloud upload" />
                Cv ni Güncelle
              </Dropdown.Item>
            )}
            {authItem[0].user.userType === 2 && (
              <Dropdown.Item>
                <Popup
                  trigger={
                    <p>
                      <i className="cloud upload icon"></i>Şirket bilgilerini
                      güncelle
                    </p>
                  }
                  modal
                >
                  <PersonelUpdate />
                </Popup>
              </Dropdown.Item>
            )}
            <Dropdown.Item onClick={() => handleLogout(authItem[0].user)}>
              <Icon name="sign-out" /> Çıkış yap
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
