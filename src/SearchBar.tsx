import { useState } from 'react';

interface SearchBarProps {
  onSearch: (username: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-10 bg-white">
      <div className="flex">
        <input
          type="text"
          placeholder="Digite um usuário do Github"
          className="w-full px-4 py-3 text-black rounded-l-md bg-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-3 rounded-r-md hover:bg-blue-700 transition-colors"
        >
          <img src="src/assets/lupa.svg" alt="" />
        </button>
      </div>
    </form>
  );
};