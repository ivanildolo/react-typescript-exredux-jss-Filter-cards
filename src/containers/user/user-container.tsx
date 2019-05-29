import React from 'react';
import { Inject, Connection } from 'exredux';
import { UserModel } from '@services/models/user.model';
import { appModelStore } from 'src/model-store';
import { BaseComponentProps } from '@interfaces/i-style';

import injectSheet, { jss } from "react-jss";

const styles = theme => ({
  root: {
    color: theme.background,
  }
});

class ModelProps {
  @Inject(UserModel) userModel?: UserModel;
}

type Props = BaseComponentProps & ModelProps;

@Connection({
  modelStore: appModelStore,
  props: ModelProps
})

class UserContainer extends React.Component<Props> {
  render() {
    const { userModel, classes } = this.props;
    return (
      <React.Fragment>
        <p className={classes.root}>User count {userModel.count}</p>
        <button onClick={userModel.add}>Add</button>
        <button onClick={userModel.reset}>Reset</button>
      </React.Fragment>
    );
  }
}


export default  injectSheet(styles)(UserContainer);
