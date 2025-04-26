import { useState } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import { Profile } from "./Profile";
import { ErrorMessage } from "./ErrorMessage";

interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string | null;
  bio: string | null;
}

function App() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const searchUser = async (username: string) => {
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const response = await axios.get<GithubUser>(
        `https://api.github.com/users/${username}`
      );
      setUser(response.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen h-full w-full flex flex-col bg-black text-white">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <header className="text-center mb-8 w-full">
          <div className="flex justify-center items-center gap-2 mb-8">
            <img src="src/assets/github-logo.svg" alt="" />
            <h1 className="text-[60px] font-bold">Perfil GitHub</h1>
          </div>
          <SearchBar onSearch={searchUser} />
        </header>

        <main className="w-full">
          {loading && <p className="text-center">Carregando...</p>}
          {error && <ErrorMessage />}
          {user && !error && (
            <Profile
              avatar_url={user.avatar_url}
              name={user.name}
              bio={user.bio}
              login={user.login}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
