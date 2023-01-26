import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import TopBar from '../../components/TopBar'
export default function UmrahAndZiyarah() {
  const navigate = useNavigate();
  return (
    <div  className={`${styles.container}`}>
      <TopBar></TopBar>
    </div>
  );
}
