import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <MenuItem>
            <Image avatar spaced="right" src="https://i.pinimg.com/474x/87/6e/74/876e7493173c9703a0f0d41a52514bb3.jpg"/>
            <Dropdown pointing="top left" text="Bircan">
                <DropdownMenu>
                    <DropdownItem text="Bilgilerim" icon="info"/>
                    <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                </DropdownMenu>
            </Dropdown>
        </MenuItem>
    </div>
  )
}
