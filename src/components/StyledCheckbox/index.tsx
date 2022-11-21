export function StyledCheckbox() {
  return (
    <label
      className="
    relative
    flex
    items-center
    cursor-pointer    
    "
    >
      <input
        type="checkbox"
        className="
              appearance-none
              border              
              cursor-pointer
              transition-all
              before:content['']
              hover:before:opacity-10 
              checked:bg-rose-600
              checked:border-rose-300
              checked:before:bg-rose-200

              w-[14px] 
              h-[14px] 
              border-rose-200
              "
        id="checkbox"
      ></input>
    </label>
  );
}
