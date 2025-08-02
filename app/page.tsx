import { ArrowBigLeft, ChevronUp, Command, Globe, Mic, Moon, Option, Play, Search, StepBack, StepForward, SunDim, SunMedium, Table2, Volume1, Volume2, VolumeX } from "lucide-react";


export default function Home() {
  return (
    <>
    <div className="h-screen flex items-center justify-center bg-neutral-950 text-white">
      <div className="w-[50%] h-[40%] bg-neutral-800 rounded-2xl p-4 overflow-hidden selection:bg-gray-600 ">
          <div className="flex items-center h-1/7 gap-2 text-xs mb-2">
              <div className="key-button-sec pl-2">esc</div>
              <div className="keyboard-button"><span><SunDim className="size-3"/></span><span>F1</span></div>
              <div className="keyboard-button"><span><SunMedium className="size-3"/></span><span>F2</span></div>
              <div className="keyboard-button"><span><Table2 className="size-3"/></span><span>F3</span></div>
              <div className="keyboard-button"><span><Search className="size-3"/></span><span>F4</span></div>
              <div className="keyboard-button"><span><Mic className="size-3"/></span><span>F5</span></div>
              <div className="keyboard-button"><span><Moon className="size-3"/></span><span>F6</span></div>
              <div className="keyboard-button"><span><StepBack className="size-3"/></span><span>F7</span></div>
              <div className="keyboard-button"><span><Play className="size-3"/></span><span>F8</span></div>
              <div className="keyboard-button"><span><StepForward className="size-3"/></span><span>F9</span></div>
              <div className="keyboard-button"><span><VolumeX className="size-3"/></span><span>F10</span></div>
              <div className="keyboard-button"><span><Volume1 className="size-3"/></span><span>F11</span></div>
              <div className="keyboard-button"><span><Volume2 className="size-3"/></span><span>F12</span></div>
              <div className="px-2 bg-black rounded-lg h-full w-1/14 py-1.5 flex flex-col items-center justify-center text-xs shadow-2xl shadow-white inset-shadow-xs inset-shadow-white/40 ring-2 ring-white/50 hover:ring-1 hover:shadow-xl hover:scale-98 hover:shadow-white/15 transition-all duration-100 hover:cursor-pointer"><div className="size-6 rounded-full ring-gray-500 ring-2 "></div></div>
          </div>
          <div className="flex items-center h-1/7 gap-2 text-xs mb-2">
              
              <div className="keyboard-button"><span className="text-xs text-white/80">~</span><span>`</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">!</span><span>1</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">@</span><span>2</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">#</span><span>3</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">$</span><span>4</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">%</span><span>5</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">^</span><span>6</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">&</span><span>7</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">*</span><span>8</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">(</span><span>9</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">)</span><span>0</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">_</span><span>-</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">+</span><span>=</span></div>
              <div className="key-button-sec flex items-center justify-end pr-2 pb-2 ">delete</div>
          </div>
          <div className="flex items-center h-1/7 gap-2 text-xs mb-2">
              <div className="key-button-sec pl-2">tab</div>
              <div className="keyboard-button-qwerty">Q</div>
              <div className="keyboard-button-qwerty">W</div>
              <div className="keyboard-button-qwerty">E</div>
              <div className="keyboard-button-qwerty">R</div>
              <div className="keyboard-button-qwerty">T</div>
              <div className="keyboard-button-qwerty">Y</div>
              <div className="keyboard-button-qwerty">U</div>
              <div className="keyboard-button-qwerty">I</div>
              <div className="keyboard-button-qwerty">O</div>
              <div className="keyboard-button-qwerty">P</div>
              <div className="keyboard-button"><span className="text-xs text-white/80">{'{'}</span><span>{'['}</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">{'}'}</span><span>{']'}</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">|</span><span>\</span></div>
          </div>
          <div className="flex items-center h-1/7 gap-2 text-xs mb-2">
              <div className="key-button-sec pl-2 pr-4">caps lock</div>
              <div className="keyboard-button-qwerty">A</div>
              <div className="keyboard-button-qwerty">S</div>
              <div className="keyboard-button-qwerty">D</div>
              <div className="keyboard-button-qwerty">F</div>
              <div className="keyboard-button-qwerty">G</div>
              <div className="keyboard-button-qwerty">H</div>
              <div className="keyboard-button-qwerty">J</div>
              <div className="keyboard-button-qwerty">K</div>
              <div className="keyboard-button-qwerty">L</div>
              <div className="keyboard-button"><span className="text-xs text-white/80">{':'}</span><span>{';'}</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">{'"'}</span><span>'</span></div>
              <div className="key-button-sec flex items-center justify-end pr-2 pb-2 pl-4">return</div>
          </div>
          <div className="flex items-center h-1/7 gap-2 text-xs mb-2">
              <div className="key-button-sec pl-2 pr-4">shift</div>
              <div className="keyboard-button-qwerty">Z</div>
              <div className="keyboard-button-qwerty">X</div>
              <div className="keyboard-button-qwerty">C</div>
              <div className="keyboard-button-qwerty">V</div>
              <div className="keyboard-button-qwerty">B</div>
              <div className="keyboard-button-qwerty">N</div>
              <div className="keyboard-button-qwerty">M</div>
              <div className="keyboard-button"><span className="text-xs text-white/80">{'<'}</span><span>{','}</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">{'>'}</span><span>.</span></div>
              <div className="keyboard-button"><span className="text-xs text-white/80">{'?'}</span><span>/</span></div>
              <div className="key-button-sec flex items-center justify-end pr-2 pb-2 pl-4">shift</div>
          </div>
          <div className="flex items-center h-1/7 gap-2 text-xs mb-2">
              <div className="keyboard-button pl-2 pr-4 flex"><span className="pl-6">fn</span><span className="pr-6"><Globe className="size-3"/></span></div>
              <div className="keyboard-button pl-2 pr-4 flex text-2xs"><span className="pl-6"><ChevronUp className="size-3"/></span><span className="">control</span></div>
              <div className="keyboard-button pl-2 pr-4 flex text-2xs"><span className="pl-6"><Option className="size-3"/></span><span className="">option</span></div>
              <div className="keyboard-button pl-2 pr-4 flex text-2xs"><span className="pl-6"><Command className="size-3"/></span><span className="">command</span></div>
              <div className="pt-6 bg-black rounded-lg h-full w-1/3 text-xs 
         shadow-2xl shadow-white ring-2 ring-white/50 
         transition-all duration-100 
         hover:ring-1 hover:shadow-xl hover:scale-95 hover:shadow-white/15 hover:cursor-pointer">{""}</div>
              
              <div className="keyboard-button pl-2 pr-4 flex text-2xs"><span className="pr-6"><Command className="size-3"/></span><span className="">command</span></div>
              <div className="keyboard-button pl-2 pr-4 flex text-2xs"><span className="pr-6"><Option className="size-3"/></span><span className="">option</span></div>
              <div className="flex items-center justify-end"><div></div><div className="px-8 bg-black rounded-lg h-full w-1/14 py-2 flex flex-col items-center justify-between text-xs 
         shadow-2xl shadow-white ring-2 ring-white/50 
         transition-all duration-100 
         hover:ring-1 hover:shadow-xl hover:scale-95 hover:shadow-white/15 hover:cursor-pointer hover:overflow-hidden hover:bg-black/90"><ArrowBigLeft className="size-4"/></div></div>
              <div className="flex m-0 items-center justify-end"><div></div><div className="px-8 bg-black rounded-lg h-full w-1/14 py-2 flex flex-col items-center justify-between text-xs 
         shadow-2xl shadow-white ring-2 ring-white/50 
         transition-all duration-100 
         hover:ring-1 hover:shadow-xl m-0 hover:scale-95 hover:shadow-white/15 hover:cursor-pointer hover:overflow-hidden hover:bg-black/90"><ArrowBigLeft className="size-4"/></div></div>
              <div className="flex items-center justify-end"><div></div><div className="px-8 bg-black rounded-lg h-full w-1/14 py-2 flex flex-col items-center justify-between text-xs 
         shadow-2xl shadow-white ring-2 ring-white/50 
         transition-all duration-100 
         hover:ring-1 hover:shadow-xl hover:scale-95 hover:shadow-white/15 hover:cursor-pointer hover:overflow-hidden hover:bg-black/90"><ArrowBigLeft className="size-4"/></div></div>
              <div></div>
              <div></div>
          </div>
      </div>
    </div>

    </>
  );
}
