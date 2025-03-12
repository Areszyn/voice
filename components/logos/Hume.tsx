import React from 'react';
import logo from '../logos/waspros.png'; // Adjust path if needed

interface HumeLogoProps {
  className?: string;
}

const HumeLogo: React.FC<HumeLogoProps> = ({ className }) => {
  return <img src={logo} alt="Waspros Logo" className={className} />;
};

export default HumeLogo;
