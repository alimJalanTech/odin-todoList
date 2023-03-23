(() => {
  var e = { 69: () => {} },
    t = {};
  function o(r) {
    var n = t[r];
    if (void 0 !== n) return n.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, o), l.exports;
  }
  (o.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return o.d(t, { a: t }), t;
  }),
    (o.d = (e, t) => {
      for (var r in t)
        o.o(t, r) &&
          !o.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      const e = () => {
        console.log("creating blank project");
        let e = [],
          t = "Default Project";
        return (
          e.push({ projectTitle: t }),
          console.log(e),
          { projectList: e, projectTitle: t }
        );
      };
      var t = o(69),
        r = o.n(t);
      e(),
        (() => {
          const t = document.querySelector(".content"),
            o = document.createElement("h1");
          (o.textContent = "Todo Application"), t.appendChild(o);
          const r = document.createElement("div");
          (r.textContent = e().projectTitle),
            console.log("Inital DOM: This works!"),
            t.appendChild(r);
        })(),
        console.log("Called Todo Module");
      const n = r()("Pasta", "Go get pasta", "6/15/2022", "Low", !0);
      console.log("Show me the items of first todo", n);
    })();
})();
