import React from "react";

export default function Header() {
  

  return (
      
            
<header className="fixed w-full left-20" style={{ marginTop: "15px" }}>
<div className="flex items-center">
  <div className="text-white text-3xl font-bold flex items-center">
    <span className="text-blue-400">Port.</span>
    <span className="text-white text-sm">analyst</span>
  </div>

  <a
    className="rounded-lg text-white font-semibold transition flex items-center text-[0.8125rem] leading-6 py-1 px-1.5 hover:bg-white/[0.03]"
    href="https://github.com/Anasgharbi20"
    style={{ marginLeft: "1000px" }}
  >
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.207 11.385.6.11.793-.262.793-.577 0-.284-.013-1.04-.019-2.04-3.333.723-4.033-1.607-4.033-1.607-.545-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.807 1.305 3.495.998.108-.777.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.382 1.23-3.222-.123-.303-.53-1.523.116-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.983-.4 3.002-.405 1.02.005 2.043.138 3.006.405 2.292-1.552 3.295-1.23 3.295-1.23.646 1.653.24 2.873.117 3.176.767.84 1.229 1.912 1.229 3.222 0 4.61-2.805 5.625-5.475 5.92.43.37.818 1.102.818 2.22 0 1.607-.015 2.896-.015 3.287 0 .32.187.695.8.576C20.566 21.793 24 17.298 24 12c0-6.63-5.373-12-12-12"></path>
    </svg>
    <span className="ml-1">Documentation</span>
  </a>
</div>

</header>


  );
}