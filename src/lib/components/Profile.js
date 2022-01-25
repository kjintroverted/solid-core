import React from 'react';
import {
  addToUpdateQueue,
  setAttr,
  BigIconHeader,
  Column,
  SaveButton,
  Spacer,
  profileStruct
} from "..";

import { BigBar } from './styled';

const Profile = ({
  profile,
  edit,
  toggleEdit,
  onChange,
  saveState,
  ui,
  theme
}) => {

  function updateField(field) {
    return ({ target }) => {
      let t = setAttr(profile.thing, profileStruct[field], target.value);
      saveState.updateQueue(addToUpdateQueue(saveState.queue, t))
      onChange({ ...profile, thing: t, [field]: target.value })
    }
  }

  function updateName({ target }) {
    let name = target.value;
    let t = setAttr(profile.thing, profileStruct['name'], name)
    saveState.updateQueue(addToUpdateQueue(saveState.queue, t))
    onChange({ ...profile, thing: t, name });
  }

  if (!profile) return <></>

  return (
    <>
      <BigBar theme={ theme }>
        <BigIconHeader theme={ theme } className="material-icons">account_circle</BigIconHeader>
        <Column justify="center">
          { !edit ?
            <h2 style={ { margin: 0 } }>
              { profile.name }
              <span className="material-icons" onClick={ () => toggleEdit(!edit) }>edit</span>
            </h2>
            : <ui.Input
              type="text"
              placeholder="name"
              defaultValue={ profile.name ? profile.name : "" }
              endAdornment={
                <ui.InputAdornment position="end">
                  <ui.IconButton onClick={ () => toggleEdit(!edit) } color="inherit">
                    <span className="material-icons">done</span>
                  </ui.IconButton>
                </ui.InputAdornment>
              }
              onChange={ updateName } />
          }
          <p>{ profile.nickname }</p>
        </Column>
        <Spacer />
        <Column justify="flex-end">
          <ui.IconButton color="inherit" href="https://kitchen.wkgreen.dev">
            <span className="material-icons large">kitchen</span>
          </ui.IconButton>
          <ui.IconButton color="inherit" href="https://budget.wkgreen.dev">
            <span className="material-icons large">paid</span>
          </ui.IconButton>
        </Column>
      </BigBar>
      <Column align="center">
        <ui.Input
          type="text"
          placeholder="nickname"
          defaultValue={ profile.nickname || "" }
          startAdornment={
            <ui.InputAdornment position="start">
              <span className="material-icons">account_circle</span>
            </ui.InputAdornment>
          }
          onChange={ updateField("nickname") } />
        <ui.Input
          type="text"
          placeholder="email"
          defaultValue={ profile.email || "" }
          startAdornment={
            <ui.InputAdornment position="start">
              <span className="material-icons">email</span>
            </ui.InputAdornment>
          }
          onChange={ updateField("email") } />
        {
          !!saveState.queue.length &&
          <SaveButton theme={ theme }>
            <ui.Button
              variant="contained"
              color="secondary"
              onClick={ saveState.saveFromQ }>
              Save
            </ui.Button>
          </SaveButton>
        }
      </Column>
    </>)
}

export default Profile;