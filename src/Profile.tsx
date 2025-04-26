interface ProfileProps {
  avatar_url: string;
  name: string | null;
  bio: string | null;
  login: string;
}

export const Profile: React.FC<ProfileProps> = ({
  avatar_url,
  name,
  bio,
  login,
}) => {
  return (
    <div className="bg-gray-200 text-black rounded-3xl p-8 mt-10 mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 w-full max-w-4xl min-h-64">
      <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-blue-600 bg-red-100 flex-shrink-0">
        <img
          src={avatar_url}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-bold text-blue-600 mb-2">
          {name || login}
        </h2>
        <p className="text-gray-700 text-sm">
          {bio || "Este usuário não possui uma bio."}
        </p>
      </div>
    </div>
  );
};
