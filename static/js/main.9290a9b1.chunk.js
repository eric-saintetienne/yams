(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),s=(a(13),a(1)),i=a(2),c=a(4),u=a(3),p=a(5),m=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({width:this.elem.clientWidth,offsetX:this.elem.getBoundingClientRect().left})}},{key:"render",value:function(){var e=this,t="";return this.props.class&&(t="_"+this.props.class),this.props.header&&(t+=" Header"),this.props.readonly&&(t+=" ro"),this.props.annule&&(t+=" line"),void 0===this.props.tap?r.a.createElement("td",{ref:function(t){return e.elem=t},className:t},this.props.value):r.a.createElement("td",{ref:function(t){return e.elem=t},className:t,onClick:function(t){e.props.tap(t,e)}},this.props.value)}}]),t}(n.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.empty?void 0:r.a.createElement("button",{id:"new_game",onClick:this.props.new_game},"Remettre",r.a.createElement("br",null),"\xe0 Z\xe9ro"),t=this.props.players?r.a.createElement("span",null,"Ajouter un",r.a.createElement("br",null),"autre Joueur"):r.a.createElement("span",null,"Ajouter",r.a.createElement("br",null),"un Joueur");return r.a.createElement("tr",{id:"ToolBar"},r.a.createElement("td",{width:"100%",colSpan:this.props.cols+1},r.a.createElement("button",{id:"new_player",onClick:this.props.show_new_player},t),e))}}]),t}(n.Component);var h=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.rows;this.props.players.map(function(e,t){return e.figures=0,e.bonus=0,e.total=0,null}),t=this.props.players&&this.props.players.length?t.map(function(t,a){if(String(t).startsWith("-"))return r.a.createElement("tr",{className:"sep",key:t});var n=t;return void 0!==e.props.rowname[t]&&(n=e.props.rowname[t]),r.a.createElement("tr",{key:t,id:"row_"+t},r.a.createElement(m,{header:!0,key:"header-"+t,readonly:function(e,t){var a=!1;return e.map(function(e){return e===t&&(a=!0),null}),a}(e.props.readonly,t),value:n}),e.props.players.map(function(a,n){var l,o=!1;if(t in a)switch(l=a[t],t){case 1:case 2:case 3:case 4:case 5:case 6:a.total+=(l+3)*t,(l*=t)>=0?(l="\xa0"+l)<10&&(l+="\xa0"):l>-10&&(l+="\xa0");break;case"chance":case"brelan":case"suite":case"full":case"carre":case"yams":"annule"!==l&&void 0!==l&&(a.figures+=l)}else l="";var s=(1 in a)+(2 in a)+(3 in a)+(4 in a)+(5 in a)+(6 in a);switch(t){case"total":l=s>0?a[t]=a.total:"";break;case"bonus":l=6===s?a[t]=a.total>=63?30:0:"";break;case"diff":l=1 in a&&"mini"in a&&"MAXI"in a?a[t]=(a.MAXI-a.mini)*(a[1]+3):"";break;case"TOTAL":l=a.figures+a.total,6===s&&(l+=a.bonus),1 in a&&"mini"in a&&"MAXI"in a&&(l+=a.diff),0===l&&(l="")}return"annule"===l&&(o=!0,l=""),r.a.createElement(m,{key:a.name+"-"+t,class:t,value:l,annule:o,tap:e.props.tap,player:a.name})}),r.a.createElement("td",{className:"Gluton"}))}):[];var a=!this.props.players.reduce(function(e,t){return e+Object.keys(t).reduce(function(e,t){return e+1},0)-4},0);return r.a.createElement("table",{key:"board",className:"Board"},r.a.createElement("tbody",{key:"board-body"},t,r.a.createElement(d,{key:"toolbar",cols:t.length,empty:a,players:this.props.players.length,show_new_player:this.props.show_new_player,new_game:this.props.new_game})))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).event_blackhole=function(e){return e.preventDefault(),e.stopPropagation(),!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e={width:this.props.width,height:this.props.height};return r.a.createElement("div",{className:"modal",onClick:this.props.close.bind(this)},r.a.createElement("div",{className:"content",style:e,onClick:this.event_blackhole},this.props.children))}},{key:"componentDidMount",value:function(){this.props.focus&&this.props.focus()}}]),t}(r.a.Component);a(15);function f(e){return e.map(function(e,t){return{val:e,index:t}})}var y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).add_player=function(t,a){var n,r;t.preventDefault(),""===(n=(n=void 0===a?(r=e.textInput.value,String(r).replace(/^\s+|\s+$/g,"")):a).toLowerCase())?alert("Entrez un nom de joueur !"):0===e.state.players.filter(function(e){return e.name===n}).length?(console.log("Joueur ajout\xe9: ",n),e.state.players.push({name:n}),e.toggle_modal_new_player()):alert("Le joueur "+n+" existe d\xe9ja !")},e.rename_player=function(t,a){t.preventDefault();var n=e.state.show_modal_rename_player_name,r=void 0===a?e.state.show_modal_rename_player_new_name:a;if(r=r.toLowerCase(),console.log("rename:",n,"--\x3e",r),0!==e.state.players.filter(function(e){return e.name===r}).length)return console.log(r,n),void(r===n?alert("Choisissez un nom diff\xe9rent !"):alert("Le joueur "+r+" existe d\xe9ja !"));var l=f(e.state.players).filter(function(e){return e.val.name===n});if(0!==l.length){var o=l[0].index,s=e.state;s.players[o].name=r,s.show_modal_rename_player=!s.show_modal_rename_player,e.setState(s)}else alert("Erreur : player "+n+" not found in App state")},e.delete_player=function(t,a){t.preventDefault();var n=e.state.show_modal_rename_player_name;if(window.confirm('Vraiment supprimer le joueur "'+n+'" ?')){console.log("del player",n);var r=f(e.state.players).filter(function(e){return e.val.name===n});if(0===r.length)return void alert("Erreur : player "+n+" not found in App state");var l=r[0].index,o=e.state;o.players.splice(l,1),o.show_modal_rename_player=!o.show_modal_rename_player,e.setState(o)}else console.log("deletion of player",n,"cancelled")},e.toggle_modal_new_player=function(){e.setState({show_modal_new_player:!e.state.show_modal_new_player})},e.toggle_modal_rename_player=function(){e.setState({show_modal_rename_player:!e.state.show_modal_rename_player})},e.rename_change=function(t){e.setState({show_modal_rename_player_new_name:e.textInput.value})},e.new_game=function(t){if(t.preventDefault(),window.confirm("Remettre \xe0 z\xe9ro ?")){console.log("new game");var a=[];e.state.players.forEach(function(e,t,n){a.push({name:e.name})}),e.setState({players:a})}else console.log("new game cancelled")},e.cell_tapped=function(t,a){var n=a.props.class,r=a.props.player;if("name"===n)e.setState({show_modal_rename_player_new_name:r,show_modal_rename_player_name:r,show_modal_rename_player:!0});else{var l=t.clientX-a.state.offsetX<a.state.width/2;e.process_tap(r,n,l)}},e.process_tap=function(e,t,a){console.log(e,"tapped on",'"'+t+'"',a?"left":"right");var n=f(this.state.players).filter(function(t){return t.val.name===e});if(0!==n.length){var r,l,o,s=n[0].index,i=!1;switch(t){case 1:case 2:case 3:case 4:case 5:case 6:-4!==(l=void 0===(r=this.state.players[s][""+t])?a?-1:0:a?r-1:r+1)&&3!==l||(i=!0);break;case"brelan":case"suite":case"full":case"carre":case"yams":void 0===(r=this.state.players[s][t])?l={brelan:10,suite:20,full:30,carre:40,yams:50}[t]:"annule"===r?i=!0:l="annule";break;case"mini":case"MAXI":case"chance":4!==(l=void 0===(r=this.state.players[s][t])?{mini:a?10:11,MAXI:a?24:25,chance:a?17:18}[t]:a?r-1:r+1)&&31!==l||(i=!0);break;default:return}o=this.state,i?delete o.players[s][t]:o.players[s][t]=l,this.setState(o)}else alert("Erreur : player "+e+" not found in App state")},e.state={rows:["name",1,2,3,4,5,6,"total","bonus","-1","mini","MAXI","diff","-2","chance","-3","brelan","suite","full","carre","yams","-4","TOTAL"],rowname:{name:"",diff:"diff\xe9rence",chance:"Chance",brelan:"Brelan",suite:"Suite",full:"Full",carre:"Carr\xe9",yams:"Yam's"},readonly:["total","bonus","diff","TOTAL"],players:[],show_modal_new_player:!1,show_modal_rename_player:!1},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=null;this.state.show_modal_new_player&&(t=r.a.createElement(_,{width:"360px",height:"290px",focus:function(){e.textInput.focus()},close:this.toggle_modal_new_player},r.a.createElement("form",{action:"#"},r.a.createElement("label",null,"Nom du joueur:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"new_player_name",ref:function(t){return e.textInput=t}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.add_player,id:"new_player_submit"},"Ajouter"),r.a.createElement("br",null),r.a.createElement("br",null),"Choix rapide:",r.a.createElement("br",null),r.a.createElement("button",{className:"immed",onClick:function(t){e.add_player(t,"Claude")}},"Claude"),r.a.createElement("button",{className:"immed",onClick:function(t){e.add_player(t,"Martine")}},"Martine"),r.a.createElement("button",{className:"immed",onClick:function(t){e.add_player(t,"Eric")}},"Eric"),r.a.createElement("button",{className:"immed",onClick:function(t){e.add_player(t,"Erlina")}},"Erlina"))));var a=null;return this.state.show_modal_rename_player&&(a=r.a.createElement(_,{width:"360px",height:"340px",focus:function(){e.textInput.focus()},close:this.toggle_modal_rename_player},r.a.createElement("form",{action:"#"},r.a.createElement("label",null,"Nom du joueur:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"rename_player_name",ref:function(t){return e.textInput=t},value:this.state.show_modal_rename_player_new_name,onChange:this.rename_change}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.rename_player,id:"rename_player_submit"},"Renommer"),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.delete_player,id:"delete_player_submit"},"Supprimer"),r.a.createElement("br",null),r.a.createElement("br",null),"Choix rapide:",r.a.createElement("br",null),r.a.createElement("button",{className:"immed",onClick:function(t){e.rename_player(t,"Claude")}},"Claude"),r.a.createElement("button",{className:"immed",onClick:function(t){e.rename_player(t,"Martine")}},"Martine"),r.a.createElement("button",{className:"immed",onClick:function(t){e.rename_player(t,"Eric")}},"Eric"),r.a.createElement("button",{className:"immed",onClick:function(t){e.rename_player(t,"Erlina")}},"Erlina")))),r.a.createElement("div",{id:"App"},r.a.createElement(h,{players:this.state.players,rows:this.state.rows,readonly:this.state.readonly,rowname:this.state.rowname,show_new_player:this.toggle_modal_new_player,new_game:this.new_game,tap:this.cell_tapped}),t,a)}},{key:"componentDidMount",value:function(){document.title="Yam's!"}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.9290a9b1.chunk.js.map