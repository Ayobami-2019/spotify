import React from "react";
//custom hook function

const getCurrentHash=()=>{
    return window.location.hash.replace('#', '')
}

export const useNavigation=()=>{
    const[newURL, setState]=React.useState(getCurrentHash())
    window.addEventListener('hashchange', function(e){
        console.log('location changed!', e);
        const path = getCurrentHash()
        setState(path)
    });
    const changeURL= (path)=>{
        window.location.hash='#/'+path
    }
    return [newURL, changeURL]
}