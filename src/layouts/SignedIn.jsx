import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";

export default function SignedIn() {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://i.picsum.photos/id/364/100/100.jpg?hmac=2Vg00yNYKJFe6-M4S_YrWjmb3fYbMgBk0490sez1HGo"
        />
        <Dropdown pointing="top left" text="Huseyin">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
            <Dropdown.Item text="Çıkış Yap" icon="sign-out"></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
