import "./header.css";

function Header({ user, logout, login }) {
  return (
    <header className="header">
      {!user ? (
        <button onClick={login}>Login</button>
      ) : (
        <>
          <img src={user.avatar} alt={user.name} />
          <p>
            Hello <strong>{user.name}</strong>
          </p>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </header>
  );
}

export default Header;
