import React from "react";
import "../styles.css";
export default function Footer() {
  var cy = new Date().getFullYear();

  return (
    <footer>
      <p> copyright @ {cy}</p>
    </footer>
  );
}
