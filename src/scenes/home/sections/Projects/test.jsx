// const caseStudy = selectedWork.find(
//   (project) => window.location.pathname === `/work/${project.slug}`,
// );

// if (caseStudy) {
//   return (
//     <div className="bg-haze min-h-screen text-white">
//       <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//         <a
//           href="/#projects"
//           className="text-sm font-medium text-mist transition hover:text-white"
//         >
//           <span aria-hidden="true">←</span> Back to selected work
//         </a>

//         <div className="mt-20 max-w-3xl">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentsoft">
//             {caseStudy.category}
//           </p>
//           <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
//             {caseStudy.title}
//           </h1>
//           <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
//             {caseStudy.description}
//           </p>
//         </div>

//         <div className="mt-16 grid gap-10 border-y border-white/10 py-10 sm:grid-cols-3 sm:gap-8">
//           {[
//             ["Focus", caseStudy.focus],
//             ["Contribution", caseStudy.contribution],
//             ["Outcome", caseStudy.outcome],
//           ].map(([label, text]) => (
//             <div key={label}>
//               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accentsoft">
//                 {label}
//               </p>
//               <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-10 flex flex-wrap gap-2">
//           {caseStudy.technologies.map((technology) => (
//             <span
//               key={technology}
//               className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-mist"
//             >
//               {technology}
//             </span>
//           ))}
//         </div>

//         <p className="mt-16 border-t border-white/10 pt-6 text-sm leading-6 text-muted">
//           Professional project completed for an employer or client. Source
//           code and live product details are private.
//         </p>
//       </main>
//     </div>
//   );
// }
