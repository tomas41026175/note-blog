export default {
  logo: <span>My Note</span>,
  project: {
    link: "https://github.com/tomas41026175",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1, //從第一層開始折疊
    autoCollapse: false,         //自動折疊
  },

  // sidebar: {
  //   titleComponent({ title, type }) {
  //     if (type === "separator") {
  //       return (
  //         <div style={{ background: "cyan", textAlign: "center" }}>{title}</div>
  //       );
  //     }
  //     if (title === "About") {
  //       return <>❓ {title}</>;
  //     }
  //     return <>👉 {title}</>;
  //   },
  // },
  // ... other theme options
};
