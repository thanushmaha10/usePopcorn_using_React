// import { useState } from "react";

// export default function TextBox({
//   children,
//   expandButtonText = "Show more",
//   collapseButtonText = "Show less",
//   wordLimit = 10,
// }) {
//   const [isopen, Setisopen] = useState(true);
//   const PrevText = String(children).split(" ");
//   return (
//     <div>
//       <div style={{ display: "flex" }}>
//         {isopen ? (
//           <p>
//             {PrevText.slice(0, wordLimit).join(" ") + "..."}
//             <span
//               style={{ color: "blue", cursor: "pointer" }}
//               role="button"
//               onClick={() => Setisopen(!isopen)}
//             >
//               {expandButtonText}
//             </span>
//           </p>
//         ) : (
//           <p>
//             {children}
//             {"  "}
//             <span
//               style={{ color: "red", cursor: "pointer" }}
//               role="button"
//               onClick={() => Setisopen(!isopen)}
//             >
//               {collapseButtonText}
//             </span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
