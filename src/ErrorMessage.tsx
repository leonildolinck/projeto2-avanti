export const ErrorMessage: React.FC = () => {
  return (
    <div className="bg-gray-200 text-[#FF0000] p-4 rounded-md mt-10 mx-auto text-center w-[710px] text-[20px]">
      <p>Nenhum perfil foi encontrado com esse nome de usuário.</p>
      <p>Tente novamente</p>
    </div>
  );
};