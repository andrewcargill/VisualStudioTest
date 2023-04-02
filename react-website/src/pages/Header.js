import React, { useState } from "react";
import "../App.css";
import { Button } from '../components/Button'


const Header = () => {

  const [mainContent, setMainContent] = useState('Default content');

  const OnClickMainContent = (props) => {
    setMainContent(props);
  }
  return (
    <div id="header">
      <Button onClick={() => OnClickMainContent('Button One')} text="Button One" />
      <Button onClick={() => OnClickMainContent('Button Two I think')} text="Button Two" />
      <Button onClick={() => OnClickMainContent('No idea!')} text="Button Three" />
      <Button onClick={() => OnClickMainContent('Button Button')} text="Button Four" />
      <Button onClick={() => OnClickMainContent('Button Wow!')} text="Button Five" />
      <Button onClick={() => OnClickMainContent('Button Help')} text="Button Six" />
      <Button onClick={() => OnClickMainContent('Button Jesus!')} text="Button Seven" />
      <div>{mainContent}</div>
      </div>
  );
};

export default Header;
