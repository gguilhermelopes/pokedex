import{u as p,s as _,a as e,o as n,c as r,b as t,t as a,F as i,r as m,d as u}from"./index-5b24f401.js";const d={key:0,class:"pokemonPageWrapper"},y={class:"titlesWrapper"},h={class:"imgWrapper"},k=["src","alt"],g=["src","alt"],f={key:1},P=t("h1",{class:"selectTitle"},"Click on the Pokéball and select your Pokémon!",-1),$=[P],x={__name:"PokemonPageView",setup(b){const c=p(),{data:s,statsArray:l}=_(c);return(A,C)=>e(s)?(n(),r("section",d,[t("div",y,[t("h1",null,a(`${e(s).name.toUpperCase().charAt(0)}${e(s).name.slice(1)}`),1),t("h2",null," Type: "+a(`${e(s).types[0].type.name.toUpperCase().charAt(0)}${e(s).types[0].type.name.slice(1)}`)+" "+a(e(s).types[1]?`| ${e(s).types[1].type.name.toUpperCase().charAt(0)}${e(s).types[1].type.name.slice(1)}`:""),1)]),t("div",h,[t("img",{class:"pokemonImg",src:e(s).sprites.front_default,alt:e(s).name},null,8,k),t("img",{class:"pokemonImg",src:e(s).sprites.back_default,alt:e(s).name},null,8,g)]),t("ul",null,[(n(!0),r(i,null,m(e(l),o=>(n(),r("li",{key:o.base_stat},[u(a(`${o.stat.name.toUpperCase().charAt(0)}${o.stat.name.slice(1)}`)+" : ",1),t("span",null,a(o.base_stat),1)]))),128))])])):(n(),r("section",f,$))}};export{x as default};