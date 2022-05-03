import "./header.css";

function Header({ user, logout, login }) {
  return (
    <header className="header">
      {!user ? (
        <button className="login" onClick={login}>
          Login
        </button>
      ) : (
        <>
          <img src={user.avatar} alt={user.name} />
          <p>
            Kanban Board <strong>{user.name}</strong>
          </p>
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
