import React, { useEffect, useState } from "react";


export default function Footer() {

  return (

    <div>

    <footer>

        <span className="inlineSpacing" id="leftInline"> Step By Step is a student's bootcamp project.</span>
      
        <span className="inlineSpacing" id="centerInline"> Find the <a href="https://github.com/icodebyamanda/sxs_beta" target="_blank"> project's documentation here </a> </span>
        
        <span className="inlineSpacing" id="rightInline"> Find out about <a href="https://github.com/icodebyamanda" target="_blank"> the author here </a> </span>

    </footer>

    </div>

  );

  }