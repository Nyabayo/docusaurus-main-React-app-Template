"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["43002"],{84128:function(t,r,e){e.d(r,{Z:()=>i});var a=e(58928);let i=function(t){return(0,a.Z)(t,4)}},67157:function(t,r,e){e.d(r,{DQ:()=>b,I_:()=>$,Jj:()=>_,QP:()=>v,ZH:()=>W});var a=e(57668),i=e(25653),n=e(19039),s=e(84890),d=e(28923),l=e(11141),o=(0,d.eW)((t,r,e,a)=>{r.forEach(r=>{y[r](t,e,a)})},"insertMarkers"),p=(0,d.eW)((t,r,e)=>{d.cM.trace("Making markers for ",e),t.append("defs").append("marker").attr("id",e+"_"+r+"-extensionStart").attr("class","marker extension "+r).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",e+"_"+r+"-extensionEnd").attr("class","marker extension "+r).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},"extension"),c=(0,d.eW)((t,r,e)=>{t.append("defs").append("marker").attr("id",e+"_"+r+"-compositionStart").attr("class","marker composition "+r).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"_"+r+"-compositionEnd").attr("class","marker composition "+r).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"composition"),h=(0,d.eW)((t,r,e)=>{t.append("defs").append("marker").attr("id",e+"_"+r+"-aggregationStart").attr("class","marker aggregation "+r).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"_"+r+"-aggregationEnd").attr("class","marker aggregation "+r).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"aggregation"),g=(0,d.eW)((t,r,e)=>{t.append("defs").append("marker").attr("id",e+"_"+r+"-dependencyStart").attr("class","marker dependency "+r).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"_"+r+"-dependencyEnd").attr("class","marker dependency "+r).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},"dependency"),k=(0,d.eW)((t,r,e)=>{t.append("defs").append("marker").attr("id",e+"_"+r+"-lollipopStart").attr("class","marker lollipop "+r).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),t.append("defs").append("marker").attr("id",e+"_"+r+"-lollipopEnd").attr("class","marker lollipop "+r).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},"lollipop"),m=(0,d.eW)((t,r,e)=>{t.append("marker").attr("id",e+"_"+r+"-pointEnd").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"_"+r+"-pointStart").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"point"),f=(0,d.eW)((t,r,e)=>{t.append("marker").attr("id",e+"_"+r+"-circleEnd").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"_"+r+"-circleStart").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"circle"),y={extension:p,composition:c,aggregation:h,dependency:g,lollipop:k,point:m,circle:f,cross:(0,d.eW)((t,r,e)=>{t.append("marker").attr("id",e+"_"+r+"-crossEnd").attr("class","marker cross "+r).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"_"+r+"-crossStart").attr("class","marker cross "+r).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},"cross"),barb:(0,d.eW)((t,r,e)=>{t.append("defs").append("marker").attr("id",e+"_"+r+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"barb")},b=o,u=(0,d.eW)((t,r,e,a,i)=>{r.arrowTypeStart&&x(t,"start",r.arrowTypeStart,e,a,i),r.arrowTypeEnd&&x(t,"end",r.arrowTypeEnd,e,a,i)},"addEdgeMarkers"),w={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},x=(0,d.eW)((t,r,e,a,i,n)=>{let s=w[e];if(!s){d.cM.warn(`Unknown arrow type: ${e}`);return}t.attr(`marker-${r}`,`url(${a}#${i}_${n}-${s}${"start"===r?"Start":"End"})`)},"addEdgeMarker"),L={},M={},W=(0,d.eW)(()=>{L={},M={}},"clear"),$=(0,d.eW)((t,r)=>{let e;let i=(0,d.nV)(),s=(0,d.ku)(i.flowchart.htmlLabels),o="markdown"===r.labelType?(0,n.rw)(t,r.label,{style:r.labelStyle,useHtmlLabels:s,addSvgBackground:!0},i):(0,a.XO)(r.label,r.labelStyle),p=t.insert("g").attr("class","edgeLabel"),c=p.insert("g").attr("class","label");c.node().appendChild(o);let h=o.getBBox();if(s){let t=o.children[0],r=(0,l.Ys)(o);h=t.getBoundingClientRect(),r.attr("width",h.width),r.attr("height",h.height)}if(c.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),L[r.id]=p,r.width=h.width,r.height=h.height,r.startLabelLeft){let i=(0,a.XO)(r.startLabelLeft,r.labelStyle),n=t.insert("g").attr("class","edgeTerminals"),s=n.insert("g").attr("class","inner");e=s.node().appendChild(i);let d=i.getBBox();s.attr("transform","translate("+-d.width/2+", "+-d.height/2+")"),M[r.id]||(M[r.id]={}),M[r.id].startLeft=n,S(e,r.startLabelLeft)}if(r.startLabelRight){let i=(0,a.XO)(r.startLabelRight,r.labelStyle),n=t.insert("g").attr("class","edgeTerminals"),s=n.insert("g").attr("class","inner");e=n.node().appendChild(i),s.node().appendChild(i);let d=i.getBBox();s.attr("transform","translate("+-d.width/2+", "+-d.height/2+")"),M[r.id]||(M[r.id]={}),M[r.id].startRight=n,S(e,r.startLabelRight)}if(r.endLabelLeft){let i=(0,a.XO)(r.endLabelLeft,r.labelStyle),n=t.insert("g").attr("class","edgeTerminals"),s=n.insert("g").attr("class","inner");e=s.node().appendChild(i);let d=i.getBBox();s.attr("transform","translate("+-d.width/2+", "+-d.height/2+")"),n.node().appendChild(i),M[r.id]||(M[r.id]={}),M[r.id].endLeft=n,S(e,r.endLabelLeft)}if(r.endLabelRight){let i=(0,a.XO)(r.endLabelRight,r.labelStyle),n=t.insert("g").attr("class","edgeTerminals"),s=n.insert("g").attr("class","inner");e=s.node().appendChild(i);let d=i.getBBox();s.attr("transform","translate("+-d.width/2+", "+-d.height/2+")"),n.node().appendChild(i),M[r.id]||(M[r.id]={}),M[r.id].endRight=n,S(e,r.endLabelRight)}return o},"insertEdgeLabel");function S(t,r){(0,d.nV)().flowchart.htmlLabels&&t&&(t.style.width=9*r.length+"px",t.style.height="12px")}(0,d.eW)(S,"setTerminalWidth");var _=(0,d.eW)((t,r)=>{d.cM.debug("Moving label abc88 ",t.id,t.label,L[t.id],r);let e=r.updatedPath?r.updatedPath:r.originalPath,a=(0,d.nV)(),{subGraphTitleTotalMargin:n}=(0,i.L)(a);if(t.label){let a=L[t.id],i=t.x,l=t.y;if(e){let a=s.w8.calcLabelPosition(e);d.cM.debug("Moving label "+t.label+" from (",i,",",l,") to (",a.x,",",a.y,") abc88"),r.updatedPath&&(i=a.x,l=a.y)}a.attr("transform",`translate(${i}, ${l+n/2})`)}if(t.startLabelLeft){let r=M[t.id].startLeft,a=t.x,i=t.y;if(e){let r=s.w8.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",e);a=r.x,i=r.y}r.attr("transform",`translate(${a}, ${i})`)}if(t.startLabelRight){let r=M[t.id].startRight,a=t.x,i=t.y;if(e){let r=s.w8.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",e);a=r.x,i=r.y}r.attr("transform",`translate(${a}, ${i})`)}if(t.endLabelLeft){let r=M[t.id].endLeft,a=t.x,i=t.y;if(e){let r=s.w8.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",e);a=r.x,i=r.y}r.attr("transform",`translate(${a}, ${i})`)}if(t.endLabelRight){let r=M[t.id].endRight,a=t.x,i=t.y;if(e){let r=s.w8.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",e);a=r.x,i=r.y}r.attr("transform",`translate(${a}, ${i})`)}},"positionEdgeLabel"),E=(0,d.eW)((t,r)=>{let e=t.x,a=t.y,i=Math.abs(r.x-e),n=Math.abs(r.y-a),s=t.width/2,d=t.height/2;return!!(i>=s)||!!(n>=d)},"outsideNode"),P=(0,d.eW)((t,r,e)=>{d.cM.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(r)}
  insidePoint : ${JSON.stringify(e)}
  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);let a=t.x,i=t.y,n=Math.abs(a-e.x),s=t.width/2,l=e.x<r.x?s-n:s+n,o=t.height/2,p=Math.abs(r.y-e.y),c=Math.abs(r.x-e.x);if(Math.abs(i-r.y)*s>Math.abs(a-r.x)*o){let t=e.y<r.y?r.y-o-i:i-o-r.y;l=c*t/p;let a={x:e.x<r.x?e.x+l:e.x-c+l,y:e.y<r.y?e.y+p-t:e.y-p+t};return 0===l&&(a.x=r.x,a.y=r.y),0===c&&(a.x=r.x),0===p&&(a.y=r.y),d.cM.debug(`abc89 topp/bott calc, Q ${p}, q ${t}, R ${c}, r ${l}`,a),a}{let t=p*(l=e.x<r.x?r.x-s-a:a-s-r.x)/c,i=e.x<r.x?e.x+c-l:e.x-c+l,n=e.y<r.y?e.y+t:e.y-t;return d.cM.debug(`sides calc abc89, Q ${p}, q ${t}, R ${c}, r ${l}`,{_x:i,_y:n}),0===l&&(i=r.x,n=r.y),0===c&&(i=r.x),0===p&&(n=r.y),{x:i,y:n}}},"intersection"),X=(0,d.eW)((t,r)=>{d.cM.debug("abc88 cutPathAtIntersect",t,r);let e=[],a=t[0],i=!1;return t.forEach(t=>{if(E(r,t)||i)a=t,i||e.push(t);else{let n=P(r,a,t),s=!1;e.forEach(t=>{s=s||t.x===n.x&&t.y===n.y}),e.some(t=>t.x===n.x&&t.y===n.y)||e.push(n),i=!0}}),e},"cutPathAtIntersect"),v=(0,d.eW)(function(t,r,e,a,n,s,o){let p,c=e.points;d.cM.debug("abc88 InsertEdge: edge=",e,"e=",r);let h=!1,g=s.node(r.v);var k=s.node(r.w);k?.intersect&&g?.intersect&&((c=c.slice(1,e.points.length-1)).unshift(g.intersect(c[0])),c.push(k.intersect(c[c.length-1]))),e.toCluster&&(d.cM.debug("to cluster abc88",a[e.toCluster]),c=X(e.points,a[e.toCluster].node),h=!0),e.fromCluster&&(d.cM.debug("from cluster abc88",a[e.fromCluster]),c=X(c.reverse(),a[e.fromCluster].node).reverse(),h=!0);let m=c.filter(t=>!Number.isNaN(t.y)),f=l.$0Z;e.curve&&("graph"===n||"flowchart"===n)&&(f=e.curve);let{x:y,y:b}=(0,i.o)(e),w=(0,l.jvg)().x(y).y(b).curve(f);switch(e.thickness){case"normal":p="edge-thickness-normal";break;case"thick":case"invisible":p="edge-thickness-thick";break;default:p=""}switch(e.pattern){case"solid":p+=" edge-pattern-solid";break;case"dotted":p+=" edge-pattern-dotted";break;case"dashed":p+=" edge-pattern-dashed"}let x=t.append("path").attr("d",w(m)).attr("id",e.id).attr("class"," "+p+(e.classes?" "+e.classes:"")).attr("style",e.style),L="";((0,d.nV)().flowchart.arrowMarkerAbsolute||(0,d.nV)().state.arrowMarkerAbsolute)&&(L=(L=(L=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),u(x,e,L,o,n);let M={};return h&&(M.updatedPath=c),M.originalPath=e.points,M},"insertEdge")}}]);