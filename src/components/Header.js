import React from "react";


function Header(){
  let Styles = {
    top:'0px',
    left:'0px',
    width:'100%',
    color: 'white',
    padding:'8px',
    justifyContent: 'space-evenly',
    opacity: '.9',
    backgroundColor: '#470606'
  }
return(
<div class='keg' style={Styles}>  
    <h1>Hot Take Tap House</h1>
    <p><strong>IPAs are BAD and people lie about liking them</strong></p>
</div>
);
}

export default Header;