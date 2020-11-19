import React from "react";
import styled from "styled-components";
import { Home, UserProfile, Products, Orders } from "./Icons";
import {withRouter, Link} from "react-router-dom"

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationButtonsContainer>
        <NavigationButton to="/">
          <NavigationIcon>
            <Home />
          </NavigationIcon>{" "}
          <NavigationText>Home</NavigationText>
        </NavigationButton>
        <NavigationButton to="/profile">
          <NavigationIcon>
            <UserProfile />
          </NavigationIcon>
          <NavigationText>Profile</NavigationText>
        </NavigationButton>
        <NavigationButton to="/orders">
          <NavigationIcon>
            <Orders />
          </NavigationIcon>
          <NavigationText>Orders</NavigationText>
        </NavigationButton>
        <NavigationButton to="/products">
          <NavigationIcon>
            <Products />
          </NavigationIcon>
          <NavigationText>Products</NavigationText>
        </NavigationButton>
      </NavigationButtonsContainer>
    </NavigationContainer>
  );
};

export default withRouter(Navigation);

const NavigationContainer = styled.div`
  width: 14rem;
  background-color: #eee;
  height: 100vh;
  position: fixed;
`;

const NavigationButtonsContainer = styled.div`
    padding: 3rem 1rem;
`;
const NavigationButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
      background-color: #f4f4f4;
  }
`;

const NavigationText = styled.h3`
    font-weight: 400;
`;
const NavigationIcon = styled.div`
    margin-right: 2rem;
`;
