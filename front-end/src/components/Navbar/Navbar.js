import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";
import styles from "./Navbar.module.scss";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Menu className={styles.navbar}>
        <Menu.Item header className={styles.navBrand}>
          <div className={styles.logo}>Neverending Todos</div>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item onClick={this.props.showSearchPanel}>
            <Icon name="search" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
