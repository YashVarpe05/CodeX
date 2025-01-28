import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(Link)<{ active: boolean }>`
  text-decoration: none;
  color: ${props => props.active ? '#007bff' : '#333'};
  font-weight: ${props => props.active ? '600' : '400'};
  transition: all 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const FloatingNavBar = () => {
  const location = useLocation();

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    // Add more routes as needed
  ];

  return (
    <NavContainer>
      <NavList>
        {routes.map((route) => (
          <li key={route.path}>
            <NavItem 
              to={route.path}
              active={location.pathname === route.path}
            >
              {route.label}
            </NavItem>
          </li>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default FloatingNavBar;
