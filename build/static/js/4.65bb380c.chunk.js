(this["webpackJsonpdex-react-project"]=this["webpackJsonpdex-react-project"]||[]).push([[4],{255:function(e,t,c){},256:function(e,t,c){},259:function(e,t,c){"use strict";c.r(t);var a=c(41),n=c(39),i=c(40),r=c(42),o=c(43),l=c(0),s=c.n(l),m=c(249),u=c(70),p=(c(255),Object(m.a)()((function(e){var t,c,a=e.comic,n=e.t;return s.a.createElement("div",{className:"comic-component"},s.a.createElement("div",{className:"wrap-comic-img"},s.a.createElement("img",{className:"comic-img",src:(c=a.thumbnail,"".concat(c.path,".").concat(c.extension)),alt:a.title})),s.a.createElement("div",{className:"comic-info"},s.a.createElement("h2",{className:"title"},a.title),s.a.createElement("div",{className:"creators"},(t=a.creators)&&t.returned?t.items.map((function(e){return s.a.createElement("div",{key:e.name,className:"creator"},s.a.createElement("b",null," ",e.role,": "),s.a.createElement("span",null," ",e.name," "))})):null),s.a.createElement("div",{className:"wrap-descriptions"},s.a.createElement("span",{className:"description-label"},n("Description")),s.a.createElement("p",{className:"description"},a.description))))}))),d=(c(256),function(e){Object(o.a)(c,e);var t=Object(r.a)(c);function c(e){var a;return Object(n.a)(this,c),(a=t.call(this,e)).state={},a}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getComicDetails,c=e.t,a=this.props.match.params.id;window.scrollTo({top:0,behavior:"smooth"}),t(a,c)}},{key:"componentWillUnmount",value:function(){(0,this.props.clearReducer)()}},{key:"renderComic",value:function(){var e=this.props,t=e.loadingView,c=e.comic;return!t&&c.id?(document.title=c.title,s.a.createElement(p,{comic:c})):null}},{key:"render",value:function(){var e=this.props.loadingView;return s.a.createElement("div",{className:"comic-view"},s.a.createElement(u.a,{show:e}),this.renderComic())}}]),c}(l.Component)),v=Object(m.a)()(d),h=c(50),b=v;t.default=Object(a.b)((function(e){return{comic:e.comicDetailsReducer.comic,loadingView:e.comicDetailsReducer.loadingView}}),(function(e){return{clearReducer:function(){return e(Object(h.b)())},getComicDetails:function(t,c){return e(Object(h.d)(t,c))}}}))(b)}}]);
//# sourceMappingURL=4.65bb380c.chunk.js.map