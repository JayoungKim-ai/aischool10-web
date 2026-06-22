import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 backdrop-blur-xl bg-white/85">
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* 로고 */}
        <NavLink to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">
            T
          </div>
          <span className="font-bold text-xl text-gray-900 tracking-tight">
            TeamFlow
          </span>
        </NavLink>

        {/* 네비게이션 */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-body font-medium transition-colors ${
                isActive
                  ? "font-semibold text-primary-700 bg-primary-50"
                  : "text-gray-500 hover:text-primary-700 hover:bg-primary-50"
              }`
            }
          >
            홈
          </NavLink>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-body font-medium transition-colors ${
                isActive
                  ? "font-semibold text-primary-700 bg-primary-50"
                  : "text-gray-500 hover:text-primary-700 hover:bg-primary-50"
              }`
            }
          >
            팀 소개
          </NavLink>
          <NavLink
            to="/counter"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-body font-medium transition-colors ${
                isActive
                  ? "font-semibold text-primary-700 bg-primary-50"
                  : "text-gray-500 hover:text-primary-700 hover:bg-primary-50"
              }`
            }
          >
            카운터
          </NavLink>
          <NavLink
            to="/todos"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-body font-medium transition-colors ${
                isActive
                  ? "font-semibold text-primary-700 bg-primary-50"
                  : "text-gray-500 hover:text-primary-700 hover:bg-primary-50"
              }`
            }
          >
            투두리스트
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-body font-medium transition-colors ${
                isActive
                  ? "font-semibold text-primary-700 bg-primary-50"
                  : "text-gray-500 hover:text-primary-700 hover:bg-primary-50"
              }`
            }
          >
            게시판
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
