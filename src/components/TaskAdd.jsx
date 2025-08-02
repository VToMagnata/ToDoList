export function TaskAdd({
  name,
  description,
  setName,
  setDescription,
  addTask,
}) {
  return (
    <div className="w-[21em] h-[40%] bg-[#3B3B3B] flex flex-col items-center justify-center p-[1.2em] gap-[1em] rounded-xl mb-[2em] lg:w-[60%] lg:flex-row lg:justify-start">
      <input
        placeholder="Nome"
        type="text"
        value={name}
        onChange={(inf) => setName(inf.target.value)}
        className="bg-[#f0f0f0] text-black rounded-md outline-none border-2 border-[#ffaa00] h-[2em] w-[90%] lg:w-[25%]"
      />
      <input
        placeholder="Descrição"
        type="text"
        value={description}
        onChange={(inf) => setDescription(inf.target.value)}
        className="bg-[#f0f0f0] text-black rounded-md outline-none border-2 border-[#ffaa00] h-[2em] w-[90%] lg:w-[25%] lg:mr-[35%]"
      />
      <button
        className="font-bold text-white bg-[#ffaa00] rounded-xl p-1"
        onClick={addTask}
      >
        Add Task
      </button>
    </div>
  );
}
