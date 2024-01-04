import React from 'react'
import { MenuItem } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
  return (
    <div>
      <MenuItem>
      <button onClick={signIn} class="ui inverted green button">Giriş Yap</button>
      <button class="ui inverted violet button" style={{marginLeft:'0.5em'}}>Kayıt Ol</button>
      </MenuItem>
    </div>
  )
}