export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[linear-gradient(180deg,rgba(11,16,32,0.6),rgba(11,16,32,0.2))] backdrop-blur-md px-6 py-3">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between">
        <div className="brand flex items-center gap-3 font-semibold">
          <div className="logo flex h-11 w-11 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#8b5cf6,#06b6d4)] font-extrabold text-[#061025]">
            W
          </div>
          <div>
            <div className="text-[14px]">Wallysson Oliveira</div>
            <div className="text-[12px] text-[#9aa4b2]">Dev Full Stack</div>
          </div>
        </div>
        <nav>
          <ul id="menu" className="relative flex list-none gap-[18px] p-0">
            <li className="active opacity-90 text-[14px]">
              <a href="#home">Início</a>
            </li>
            <li className="opacity-90 text-[14px]">
              <a href="#projects">Projetos</a>
            </li>
            <li className="opacity-90 text-[14px]">
              <a href="#about">Sobre</a>
            </li>
            <li className="opacity-90 text-[14px]">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
